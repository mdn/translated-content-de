---
title: "ServiceWorkerGlobalScope: cookiechange-Ereignis"
short-title: cookiechange
slug: Web/API/ServiceWorkerGlobalScope/cookiechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Cookie Store API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`cookiechange`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn eine Cookie-Änderung eintritt, die mit der Cookie-Änderungsabonnementliste des Service Workers übereinstimmt.

Dieses Ereignis kann nicht abgebrochen werden und ist nicht bubbles.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("cookiechange", (event) => { })

oncookiechange = (event) => { }
```

## Ereignistyp

Ein [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent). Erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("ExtendableCookieChangeEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
