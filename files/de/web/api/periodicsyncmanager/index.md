---
title: PeriodicSyncManager
slug: Web/API/PeriodicSyncManager
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`PeriodicSyncManager`**-Interface der [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) bietet eine Möglichkeit, Aufgaben in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung zu registrieren. Diese Aufgaben werden als periodische Hintergrund-Synchronisationsanfragen bezeichnet. Greifen Sie auf `PeriodicSyncManager` über [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) zu.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- [`PeriodicSyncManager.register()`](/de/docs/Web/API/PeriodicSyncManager/register) {{Experimental_Inline}}
  - : Registriert eine periodische Synchronisationsanfrage bei dem Browser mit dem angegebenen Tag und Optionen. Gibt ein {{jsxref('Promise')}} zurück, das sich auflöst, wenn die Registrierung abgeschlossen ist.
- [`PeriodicSyncManager.getTags()`](/de/docs/Web/API/PeriodicSyncManager/getTags) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das sich mit einer Liste von {{jsxref('String','strings')}} auflöst, die die Tags repräsentieren, die derzeit für die periodische Synchronisation registriert sind.
- [`PeriodicSyncManager.unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister) {{Experimental_Inline}}
  - : Hebt die Registrierung der periodischen Synchronisationsanfrage für das angegebene Tag auf und gibt ein {{jsxref('Promise')}} zurück, das sich auflöst, wenn die Deregistrierung abgeschlossen ist.

## Beispiele

Die folgenden Beispiele zeigen, wie das Interface verwendet wird.

### Anfordern einer periodischen Hintergrund-Synchronisation

Die folgende asynchrone Funktion registriert eine periodische Hintergrund-Synchronisation in einem Mindestintervall von einem Tag von einem Browsing-Kontext aus:

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

### Überprüfen einer periodischen Hintergrund-Synchronisation nach Tag

Dieser Code überprüft, ob eine Periodic Background Sync-Aufgabe mit einem bestimmten Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Entfernen einer periodischen Hintergrund-Synchronisationsaufgabe

Der folgende Code entfernt eine Periodic Background Sync-Aufgabe, um das Synchronisieren von Artikeln im Hintergrund zu stoppen.

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
