---
title: "ServiceWorkerRegistration: periodicSync-Eigenschaft"
short-title: periodicSync
slug: Web/API/ServiceWorkerRegistration/periodicSync
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`periodicSync`**-Eigenschaft des {{domxref("ServiceWorkerRegistration")}}-Interfaces gibt eine Referenz auf das {{domxref('PeriodicSyncManager')}}-Interface zurück, das das Registrieren von Aufgaben ermöglicht, die in bestimmten Intervallen ausgeführt werden sollen.

## Wert

Ein {{domxref('PeriodicSyncManager')}}-Objekt.

## Beispiele

Sie können auf die Eigenschaft sowohl von Ihrem Hauptskript als auch vom registrierten Service Worker aus zugreifen.

Hier ein Beispiel aus dem Hauptskript:

```js
// Registrierung referenzieren
const registration = await navigator.serviceWorker.ready;

// Feature-Erkennung
if ("periodicSync" in registration) {
  // Funktionalität des Background Periodic Sync
  const periodicSync = registration.periodicSync;
}
```

Aus dem [Service Worker](/de/docs/Web/API/Service_Worker_API):

```js
// Service Worker-Skript

const periodicSync = self.registration.periodicSync;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reichere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
