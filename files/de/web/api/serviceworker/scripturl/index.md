---
title: "ServiceWorker: scriptURL-Eigenschaft"
short-title: scriptURL
slug: Web/API/ServiceWorker/scriptURL
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Gibt die `ServiceWorker`-serialisierte Skript-URL zurück, die als Teil der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) definiert ist.
Muss im gleichen Ursprung wie das Dokument sein, das den
`ServiceWorker` registriert.

## Wert

Ein String.

## Beispiele

```js
const sw = navigator.serviceWorker.controller;
console.log(sw.scriptURL);
// https://example.com/scripts/service-worker.js
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
