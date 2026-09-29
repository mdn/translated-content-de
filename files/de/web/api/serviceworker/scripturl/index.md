---
title: "ServiceWorker: Eigenschaft scriptURL"
short-title: scriptURL
slug: Web/API/ServiceWorker/scriptURL
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`scriptURL`** der Schnittstelle [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gibt die serialisierte Skript-URL des `ServiceWorker` zurück, die im Rahmen von [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) festgelegt wurde. Die URL muss denselben Ursprung haben wie das Dokument, das den `ServiceWorker` registriert.

## Wert

Eine Zeichenkette.

## Beispiele

```js
const sw = navigator.serviceWorker.controller;
console.log(sw.scriptURL);
// https://example.com/scripts/service-worker.js
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
