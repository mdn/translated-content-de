---
title: "BackgroundFetchManager: getIds()-Methode"
short-title: getIds()
slug: Web/API/BackgroundFetchManager/getIds
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`getIds()`**-Methode des {{domxref("BackgroundFetchManager")}}-Interfaces gibt die IDs aller registrierten Hintergrundabrufe zurück.

## Syntax

```js-nolint
getIds()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref('Array')}} von {{jsxref('String', 'Strings')}} aufgelöst wird.

### Ausnahmen

Keine.

## Beispiele

Das folgende Beispiel zeigt, wie die IDs aller registrierten Hintergrundabrufe abgerufen werden können. Mit einem aktiven [Service Worker](/de/docs/Web/API/ServiceWorker) verwenden Sie die {{domxref('ServiceWorkerRegistration.backgroundFetch')}}-Eigenschaft, um auf das `BackgroundFetchManager`-Objekt zuzugreifen und dessen `getIds()`-Methode aufzurufen.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const ids = await swReg.backgroundFetch.getIds();
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
