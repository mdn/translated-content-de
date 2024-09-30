---
title: "MediaKeySession: keystatuseschange-Ereignis"
short-title: keystatuseschange
slug: Web/API/MediaKeySession/keystatuseschange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`keystatuseschange`**-Ereignis der [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-API wird ausgelöst, wenn es in einer Sitzung eine Änderung der Schlüssel oder ihres Status gegeben hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("keystatuseschange", (event) => {});

onkeystatuseschange = (event) => {};
```

## Ereignistyp

Ein [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ExtendableEvent")}}

## Ereigniseigenschaften

_Implementiert keine spezifischen Eigenschaften, erbt aber Eigenschaften von seinem übergeordneten Element, [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
