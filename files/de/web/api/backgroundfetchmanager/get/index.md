---
title: "BackgroundFetchManager: get()-Methode"
short-title: get()
slug: Web/API/BackgroundFetchManager/get
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`get()`**-Methode der Schnittstelle {{domxref("BackgroundFetchManager")}} gibt ein {{jsxref("Promise")}} zurück, das mit der {{domxref("BackgroundFetchRegistration")}} aufgelöst wird, die mit der angegebenen `id` verknüpft ist, oder {{jsxref("undefined")}}, falls die `id` nicht gefunden wird.

## Syntax

```js-nolint
get(id)
```

### Parameter

- `id`
  - : Die ID einer {{domxref("BackgroundFetchRegistration")}}, die durch den Aufruf von {{domxref("BackgroundFetchManager.fetch","fetch()")}} definiert wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer {{domxref("BackgroundFetchRegistration")}} oder {{jsxref("undefined")}} aufgelöst wird.

## Beispiele

Das folgende Beispiel zeigt, wie `get()` verwendet wird, um eine {{domxref("BackgroundFetchRegistration")}} abzurufen. Mit einem aktiven [Service Worker](/de/docs/Web/API/ServiceWorker) verwenden Sie die {{domxref('ServiceWorkerRegistration.backgroundFetch')}} um auf das `BackgroundFetchManager`-Objekt zuzugreifen und dessen `get()`-Methode aufzurufen.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.get("my-fetch");
});
// my code block
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
