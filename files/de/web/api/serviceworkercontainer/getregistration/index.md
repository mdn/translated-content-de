---
title: "ServiceWorkerContainer: Methode getRegistration()"
short-title: getRegistration()
slug: Web/API/ServiceWorkerContainer/getRegistration
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getRegistration()`** Methode des {{domxref("ServiceWorkerContainer")}} Interfaces erhält ein {{domxref("ServiceWorkerRegistration")}} Objekt, dessen Scope-URL mit der angegebenen Client-URL übereinstimmt. Die Methode gibt ein {{jsxref("Promise")}} zurück, das entweder ein {{domxref("ServiceWorkerRegistration")}} oder `undefined` liefert.

## Syntax

```js-nolint
getRegistration()
getRegistration(clientURL)
```

### Parameter

- `clientURL` {{optional_inline}}
  - : Die Registrierung, deren Scope mit dieser URL übereinstimmt, wird zurückgegeben. Relative URLs werden mit dem aktuellen Client als Basis aufgelöst. Wenn dieser Parameter nicht angegeben wird, wird standardmäßig die URL des aktuellen Clients verwendet.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem {{domxref("ServiceWorkerRegistration")}} Objekt oder `undefined` auflöst.

## Beispiele

```js
navigator.serviceWorker.getRegistration("/app").then((registration) => {
  if (registration) {
    document.querySelector("#status").textContent =
      "ServiceWorkerRegistration gefunden.";
  }
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
