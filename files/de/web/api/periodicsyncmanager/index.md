---
title: PeriodicSyncManager
slug: Web/API/PeriodicSyncManager
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`PeriodicSyncManager`**-Interface der [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) bietet eine Möglichkeit, Aufgaben zu registrieren, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden sollen. Diese Aufgaben werden als periodische Hintergrund-Synchronisierungsanfragen bezeichnet. Auf `PeriodicSyncManager` kann über [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) zugegriffen werden.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`PeriodicSyncManager.register()`](/de/docs/Web/API/PeriodicSyncManager/register) {{Experimental_Inline}}
  - : Registriert eine periodische Synchronisierungsanfrage mit dem Browser mit dem angegebenen Tag und Optionen. Gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn die Registrierung abgeschlossen ist.
- [`PeriodicSyncManager.getTags()`](/de/docs/Web/API/PeriodicSyncManager/getTags) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einer Liste von {{jsxref('String','strings')}} aufgelöst wird, die die Tags darstellen, die derzeit für die periodische Synchronisierung registriert sind.
- [`PeriodicSyncManager.unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister) {{Experimental_Inline}}
  - : Hebt die Registrierung der periodischen Synchronisierungsanfrage auf, die dem angegebenen Tag entspricht, und gibt ein {{jsxref('Promise')}} zurück, das aufgelöst wird, wenn die Deregistrierung abgeschlossen ist.

## Beispiele

Die folgenden Beispiele zeigen, wie das Interface genutzt wird.

### Anfordern einer periodischen Hintergrund-Synchronisierung

Die folgende asynchrone Funktion registriert eine periodische Hintergrund-Synchronisierung mit einem Mindestintervall von einem Tag aus einem Browsing-Kontext:

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

### Verifizierung einer periodischen Hintergrund-Synchronisierung nach Tag

Dieser Code prüft, ob eine periodische Hintergrund-Synchronisierungsaufgabe mit einem bestimmten Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Entfernen einer periodischen Hintergrund-Synchronisierungsaufgabe

Der folgende Code entfernt eine periodische Hintergrund-Synchronisierungsaufgabe, um das Synchronisieren von Artikeln im Hintergrund zu stoppen.

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
- [Eine Demo-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
