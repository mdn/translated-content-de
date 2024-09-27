---
title: PeriodicSyncManager
slug: Web/API/PeriodicSyncManager
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`PeriodicSyncManager`**-Schnittstelle der [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ermöglicht es, Aufgaben zu registrieren, die in einem Service Worker in regelmäßigen Abständen bei Netzwerkverbindung ausgeführt werden. Diese Aufgaben werden als periodische Hintergrundsynchronisierungsanfragen bezeichnet. Greifen Sie auf `PeriodicSyncManager` über [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) zu.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- [`PeriodicSyncManager.register()`](/de/docs/Web/API/PeriodicSyncManager/register) {{Experimental_Inline}}
  - : Registriert eine periodische Synchronisierungsanfrage im Browser mit dem angegebenen Tag und Optionen. Gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn die Registrierung abgeschlossen ist.
- [`PeriodicSyncManager.getTags()`](/de/docs/Web/API/PeriodicSyncManager/getTags) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer Liste von {{jsxref('String','strings')}} aufgelöst wird, die die Tags darstellen, die derzeit für die periodische Synchronisierung registriert sind.
- [`PeriodicSyncManager.unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister) {{Experimental_Inline}}
  - : Hebt die Registrierung der periodischen Synchronisierungsanfrage für das angegebene Tag auf und gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn die Registrierung aufgehoben wurde.

## Beispiele

Die folgenden Beispiele zeigen, wie die Schnittstelle verwendet wird.

### Anfordern einer Periodischen Hintergrundsynchronisierung

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisierung mit einem minimalen Intervall von einem Tag aus einem Browsing-Kontext:

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

### Überprüfen einer Periodischen Hintergrundsynchronisierung nach Tag

Dieser Code überprüft, ob eine Aufgabe zur Periodischen Hintergrundsynchronisierung mit einem gegebenen Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Entfernen einer Periodischen Hintergrundsynchronisierungsaufgabe

Der folgende Code entfernt eine Aufgabe zur Periodischen Hintergrundsynchronisierung, um das Synchronisieren von Artikeln im Hintergrund zu stoppen.

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

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
