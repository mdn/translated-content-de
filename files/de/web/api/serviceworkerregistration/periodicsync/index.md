---
title: "ServiceWorkerRegistration: Eigenschaft `periodicSync`"
short-title: periodicSync
slug: Web/API/ServiceWorkerRegistration/periodicSync
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`periodicSync`** Schreibgeschützte-Eigenschaft der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt eine Referenz auf die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle zurück, die es erlaubt, Aufgaben zu registrieren, die in bestimmten Intervallen ausgeführt werden sollen.

## Wert

Ein [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Objekt.

## Beispiele

Sie können auf die Eigenschaft sowohl von Ihrem Hauptskript als auch vom registrierten Service Worker zugreifen.

Hier ist ein Beispiel vom Hauptskript:

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ("periodicSync" in registration) {
  // Background Periodic Sync functionality
  const periodicSync = registration.periodicSync;
}
```

Vom [Service Worker](/de/docs/Web/API/Service_Worker_API):

```js
// service worker script

const periodicSync = self.registration.periodicSync;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reichere Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
