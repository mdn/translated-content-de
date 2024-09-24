---
title: PeriodicSyncManager
slug: Web/API/PeriodicSyncManager
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`PeriodicSyncManager`**-Schnittstelle der {{domxref('Web Periodic Background Synchronization API', '', '', 'nocode')}} bietet eine Möglichkeit, Aufgaben zu registrieren, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden. Diese Aufgaben werden als Anfragen für periodische Hintergrundsynchronisierung bezeichnet. Sie greifen auf `PeriodicSyncManager` durch {{domxref('ServiceWorkerRegistration.periodicSync')}} zu.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- {{domxref('PeriodicSyncManager.register()')}} {{Experimental_Inline}}
  - : Registriert eine Anfrage für periodische Synchronisierung mit dem Browser mit dem angegebenen Tag und Optionen. Gibt ein {{jsxref('Promise')}} zurück, das sich auflöst, wenn die Registrierung abgeschlossen ist.
- {{domxref('PeriodicSyncManager.getTags()')}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das sich mit einer Liste von {{jsxref('String','strings')}} auflöst, die die Tags darstellt, die derzeit für die periodische Synchronisierung registriert sind.
- {{domxref('PeriodicSyncManager.unregister()')}} {{Experimental_Inline}}
  - : Hebt die Registrierung der periodischen Synchronisierungsanfrage auf, die dem angegebenen Tag entspricht, und gibt ein {{jsxref('Promise')}} zurück, das sich auflöst, wenn die Deregistrierung abgeschlossen ist.

## Beispiele

Die folgenden Beispiele zeigen, wie die Schnittstelle verwendet wird.

### Anfordern einer periodischen Hintergrundsynchronisierung

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisierung in einem Mindestintervall von einem Tag aus einem Browserkontext:

```js
async function registerPeriodicNewsCheck() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.periodicSync.register("get-latest-news", {
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch {
    console.log("Periodic Sync could not be registered!");
  }
}
```

### Überprüfen einer periodischen Hintergrundsynchronisierung nach Tag

Dieser Code prüft, ob eine Aufgabe für die periodische Hintergrundsynchronisierung mit einem bestimmten Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Entfernen einer Aufgabe für die periodische Hintergrundsynchronisierung

Der folgende Code entfernt eine Aufgabe für die periodische Hintergrundsynchronisierung, um das Synchronisieren von Artikeln im Hintergrund zu stoppen.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reichhaltigere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für die Periodische Hintergrundsynchronisierung](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
