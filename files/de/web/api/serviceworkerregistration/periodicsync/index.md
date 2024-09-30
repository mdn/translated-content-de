---
title: "ServiceWorkerRegistration: periodicSync-Eigenschaft"
short-title: periodicSync
slug: Web/API/ServiceWorkerRegistration/periodicSync
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`periodicSync`** schreibgeschützte Eigenschaft der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Schnittstelle gibt eine Referenz auf die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) Schnittstelle zurück, die das Registrieren von Aufgaben ermöglicht, die in bestimmten Intervallen ausgeführt werden sollen.

## Wert

Ein [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) Objekt.

## Beispiele

Sie können auf die Eigenschaft sowohl von Ihrem Hauptskript als auch vom registrierten Service Worker aus zugreifen.

Hier ist ein Beispiel aus dem Hauptskript:

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

- [Reichhaltigere Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Periodic Background Sync Demounterlage](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
