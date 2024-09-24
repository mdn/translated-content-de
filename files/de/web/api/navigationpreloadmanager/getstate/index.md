---
title: "NavigationPreloadManager: getState()-Methode"
short-title: getState()
slug: Web/API/NavigationPreloadManager/getState
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getState()`**-Methode der {{domxref("NavigationPreloadManager")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird. Dieses Objekt enthält Eigenschaften, die anzeigen, ob Preload aktiviert ist und welcher Wert im {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header gesendet wird.

## Syntax

```js-nolint
getState()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Eigenschaften hat:

- `enabled`
  - : `true`, wenn Preloading aktiviert ist, andernfalls `false`.
- `headerValue`
  - : Ein String, der den Wert enthält, der im `Service-Worker-Navigation-Preload` HTTP-Header nach einem Preloading {{domxref("Window/fetch", "fetch()")}} gesendet wird.
    Dieser Standardwert ist `true`, es sei denn, der Wert wurde mit {{domxref("NavigationPreloadManager.setHeaderValue()")}} geändert.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Es ist kein aktiver Worker mit der Registrierung verbunden, zu der dieser {{domxref("NavigationPreloadManager")}} gehört.

## Beispiele

Der unten stehende Code zeigt eine Anfrage nach dem aktuellen Status, die durchgeführt wird, sobald der Service Worker bereit ist.

```js
navigator.serviceWorker.ready
  .then((registration) => registration.navigationPreload.getState())
  .then((state) => {
    console.log(state.enabled); // boolean
    console.log(state.headerValue); // string
  })
  .catch((e) =>
    console.error(`NavigationPreloadManager not supported: ${e.message}`),
  );
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
