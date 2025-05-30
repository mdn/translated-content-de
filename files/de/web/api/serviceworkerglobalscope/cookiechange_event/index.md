---
title: "ServiceWorkerGlobalScope: cookiechange-Ereignis"
short-title: cookiechange
slug: Web/API/ServiceWorkerGlobalScope/cookiechange_event
l10n:
  sourceCommit: 828ae6eee278f30c3fa3677a74915d28d9e338b2
---

{{APIRef("Cookie Store API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`cookiechange`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn eine Cookie-Änderung auftritt, die der Cookie-Änderungs-Abonnementliste des Service Workers entspricht.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
