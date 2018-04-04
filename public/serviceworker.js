let doCache = false

let CACHE_NAME = 'pwa-cache-v1'

// DELETEING OLD CACHES
self.addEventListener('activate', event => {
  const cacheWhiteList = [CACHE_NAME]
  event.waitUntil(
    caches.keys()
    .then(keyList =>
      Promise.all(keyList.map(key => {
        if(!cacheWhiteList.includes(key)) {
          console.log('Deleting cache: ' + key)
          return caches.delete(key)
        }
      }))
    )
  )
})

// FIRST TIME VISIT FROM USER
self.addEventListener('install', event => {
  if(doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
      .then((cache) => {
        fetch('asset-manifest.json')
        .then(respone => {
          response.json()
        })
        .then(assests => {
          const urlsToCache = ["/", assests['main.js']]
          cache.addAll(urlsToCache)
          console.log('cached')
        })
      })
    )
  }
})

// INTERCEPT REQUEST AND SERVE MATCHING FILES IF AVAILABLE
self.addEventListener('fetch', event => {
  if(doCache) {
    event.respondWith(
      caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
      })
    )
  }
})