---
title: "ServiceWorkerGlobalScope: cookiechange-Ereignis"
short-title: cookiechange
slug: Web/API/ServiceWorkerGlobalScope/cookiechange_event
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{APIRef("Cookie Store API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`cookiechange`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn eine Cookie-Änderung eintritt, die mit der Cookie-Änderungs-Abonnementliste des Service Workers übereinstimmt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cookiechange", (event) => {});

oncookiechange = (event) => {};
```

## Ereignistyp

Ein [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("ExtendableCookieChangeEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
