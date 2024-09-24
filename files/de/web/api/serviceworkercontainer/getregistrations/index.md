---
title: "ServiceWorkerContainer: getRegistrations()-Methode"
short-title: getRegistrations()
slug: Web/API/ServiceWorkerContainer/getRegistrations
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getRegistrations()`**-Methode der {{domxref("ServiceWorkerContainer")}}-Schnittstelle ruft alle {{domxref("ServiceWorkerRegistration")}}s ab, die mit einem `ServiceWorkerContainer` verbunden sind, in einem Array. Die Methode gibt ein {{jsxref("Promise")}} zurück, das in ein Array von {{domxref("ServiceWorkerRegistration")}} aufgelöst wird.

## Syntax

```js-nolint
getRegistrations()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Array von {{domxref("ServiceWorkerRegistration")}}-Objekten aufgelöst wird.

## Beispiele

```js
navigator.serviceWorker.getRegistrations().then((registrations) => {
  document.querySelector("#status").textContent =
    "ServiceWorkerRegistrierungen gefunden.";
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
