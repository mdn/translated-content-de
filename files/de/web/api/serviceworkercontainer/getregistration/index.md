---
title: "ServiceWorkerContainer: getRegistration()-Methode"
short-title: getRegistration()
slug: Web/API/ServiceWorkerContainer/getRegistration
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getRegistration()`**-Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces holt ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt, dessen Scope-URL zur angegebenen Client-URL passt. Die Methode gibt ein {{jsxref("Promise")}} zurück, das sich zu einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) oder `undefined` auflöst.

## Syntax

```js-nolint
getRegistration()
getRegistration(clientURL)
```

### Parameter

- `clientURL` {{optional_inline}}
  - : Die Registrierung, deren Scope zu dieser URL passt, wird zurückgegeben. Relative URLs werden mit dem aktuellen Client als Basis aufgelöst. Wenn dieser Parameter nicht angegeben ist, wird standardmäßig die URL des aktuellen Clients verwendet.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt oder `undefined` auflöst.

## Beispiele

```js
navigator.serviceWorker.getRegistration("/app").then((registration) => {
  if (registration) {
    document.querySelector("#status").textContent =
      "ServiceWorkerRegistration found.";
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
