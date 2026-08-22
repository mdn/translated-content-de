---
title: "BackgroundFetchManager: get()-Methode"
short-title: get()
slug: Web/API/BackgroundFetchManager/get
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`get()`**-Methode der [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) aufgelöst wird, die der angegebenen `id` zugeordnet ist, oder mit {{jsxref("undefined")}}, wenn die `id` nicht gefunden wird.

## Syntax

```js-nolint
get(id)
```

### Parameter

- `id`
  - : Die ID einer [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration), die durch den Aufruf von [`fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) definiert ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) oder {{jsxref("undefined")}} aufgelöst wird.

## Beispiele

Das folgende Beispiel zeigt, wie `get()` verwendet wird, um eine [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) abzurufen. Mit einem aktiven [Service Worker](/de/docs/Web/API/ServiceWorker) verwenden Sie die [`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch), um auf das `BackgroundFetchManager`-Objekt zuzugreifen und dessen `get()`-Methode aufzurufen.

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
