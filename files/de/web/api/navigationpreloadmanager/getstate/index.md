---
title: "NavigationPreloadManager: getState() Methode"
short-title: getState()
slug: Web/API/NavigationPreloadManager/getState
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getState()`**-Methode des [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das in ein Objekt aufgelöst wird. Dieses Objekt enthält Eigenschaften, die angeben, ob das Vorladen aktiviert ist und welcher Wert im {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP-Header gesendet wird.

## Syntax

```js-nolint
getState()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Objekt aufgelöst wird, welches die folgenden Eigenschaften hat:

- `enabled`
  - : `true`, wenn das Vorladen aktiviert ist, und `false` andernfalls.
- `headerValue`
  - : Ein String, der den Wert enthält, der im `Service-Worker-Navigation-Preload` HTTP-Header nach einem Vorlade-[`fetch()`](/de/docs/Web/API/Window/fetch) gesendet wird.
    Dieser Wert ist standardmäßig `true`, es sei denn, er wurde mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) geändert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es gibt keinen aktiven Worker, der mit der Registrierung verbunden ist, zu der dieser [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) gehört.

## Beispiele

Der untenstehende Code zeigt eine Anfrage nach dem aktuellen Zustand, die ausgeführt wird, sobald der Service Worker bereit ist.

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
