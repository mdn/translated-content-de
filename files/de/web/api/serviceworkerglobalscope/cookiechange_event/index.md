---
title: "ServiceWorkerGlobalScope: cookiechange-Ereignis"
short-title: cookiechange
slug: Web/API/ServiceWorkerGlobalScope/cookiechange_event
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{APIRef("Cookie Store API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`cookiechange`**-Ereignis der {{domxref("ServiceWorkerGlobalScope")}}-Schnittstelle wird ausgelöst, wenn eine Änderung an einem Cookie erfolgt, die mit der Cookie-Änderungsabonnementliste des Service Workers übereinstimmt.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("cookiechange", (event) => {});

oncookiechange = (event) => {};
```

## Ereignistyp

Ein {{domxref("ExtendableCookieChangeEvent")}}. Erbt von {{domxref("ExtendableEvent")}}.

{{InheritanceDiagram("ExtendableCookieChangeEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
