if ('serviceWorker' in navigator) {
  navigator.serviceWorker
      .register('service-worker.js')
      .then((reg) => {
          console.log('Service Worker successfully registered. Scope:', reg.scope);
      })
      .catch((err) => {
          console.error('Service Worker registration failed:', err);
      });
}
