---
title: "MediaKeySession: keystatuseschange Ereignis"
short-title: keystatuseschange
slug: Web/API/MediaKeySession/keystatuseschange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`keystatuseschange`**-Ereignis der {{domxref("MediaKeySession")}} API wird ausgelöst, wenn es innerhalb einer Sitzung eine Änderung in den Schlüsseln oder deren Status gibt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("keystatuseschange", (event) => {});

onkeystatuseschange = (event) => {};
```

## Ereignistyp

Ein {{domxref("ExtendableEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ExtendableEvent")}}

## Ereigniseigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternobjekt, {{domxref("Event")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
