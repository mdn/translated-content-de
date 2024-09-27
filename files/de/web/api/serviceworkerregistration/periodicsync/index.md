---
title: "ServiceWorkerRegistration: periodicSync-Eigenschaft"
short-title: periodicSync
slug: Web/API/ServiceWorkerRegistration/periodicSync
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`periodicSync`** des
[`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces gibt eine Referenz auf das
[`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Interface zurück, das es ermöglicht, Aufgaben zur Ausführung in bestimmten Intervallen zu registrieren.

## Wert

Ein [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Objekt.

## Beispiele

Sie können auf die Eigenschaft sowohl aus Ihrem Hauptskript als auch aus dem registrierten Service Worker zugreifen.

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

- [Umfangreichere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Beispiel-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
