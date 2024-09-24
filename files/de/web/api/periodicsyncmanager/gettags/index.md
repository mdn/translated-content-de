---
title: "PeriodicSyncManager: getTags()-Methode"
short-title: getTags()
slug: Web/API/PeriodicSyncManager/getTags
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`getTags()`**-Methode der {{domxref("PeriodicSyncManager")}}-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einer Liste von {{jsxref('String')}}-Objekten aufgelöst wird, die die Tags darstellen, die derzeit für das periodische Synchronisieren registriert sind.

## Syntax

```js-nolint
getTags()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einer Liste von {{jsxref('String')}}-Objekten aufgelöst wird, die Tags darstellen, die derzeit für das periodische Synchronisieren registriert sind.

### Ausnahmen

Keine.

## Beispiele

Das folgende Beispiel verwendet die `getTags()`-Methode, um zu überprüfen, ob eine periodische Synchronisationsaufgabe mit einem bestimmten Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

`skipDownloadingLatestNewsOnPageLoad()` ist eine vom Entwickler definierte Funktion.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reichhaltigere Offline-Erlebnisse mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-Anwendung für die Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
