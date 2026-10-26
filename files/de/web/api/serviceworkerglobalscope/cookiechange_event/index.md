---
title: "ServiceWorkerGlobalScope: cookiechange-Ereignis"
short-title: cookiechange
slug: Web/API/ServiceWorkerGlobalScope/cookiechange_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Cookie Store API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`cookiechange`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn eine Cookie-Änderung auftritt, die einem Eintrag in der Liste der Cookie-Änderungsabonnements des Service Workers entspricht.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("cookiechange", (event) => { })
```

Alternativ können Sie einen Wert für die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle festlegen:

```js-nolint
oncookiechange = (event) => { }
```

## Ereignistyp

Ein [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent). Es erbt von [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent).

{{InheritanceDiagram("ExtendableCookieChangeEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
