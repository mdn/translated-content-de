---
title: "ServiceWorkerContainer: getRegistrations() Methode"
short-title: getRegistrations()
slug: Web/API/ServiceWorkerContainer/getRegistrations
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getRegistrations()`**-Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces ruft alle [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration), die mit einem `ServiceWorkerContainer` assoziiert sind, in einem Array ab. Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem Array von [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird.

## Syntax

```js-nolint
getRegistrations()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Array von [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekten aufgelöst wird.

## Beispiele

```js
navigator.serviceWorker.getRegistrations().then((registrations) => {
  document.querySelector("#status").textContent =
    "ServiceWorkerRegistrations found.";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
