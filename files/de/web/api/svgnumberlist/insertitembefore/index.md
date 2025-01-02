---
title: "SVGNumberList: insertItemBefore() Methode"
short-title: insertItemBefore()
slug: Web/API/SVGNumberList/insertItemBefore
l10n:
  sourceCommit: 0f57507c06180622a5a6168b552317c43eeb9d04
---

{{APIRef("SVG")}}

Die `insertItemBefore()` Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) Schnittstelle fügt ein neues Element an der angegebenen Position in die Liste ein.

Das erste Element hat den Index `0`. Das eingefügte Element ist das Element selbst und keine Kopie.

- Falls `newItem` bereits in einer Liste enthalten ist, wird es vor seiner Einfügung in diese Liste aus seiner vorherigen Liste entfernt.

- Falls das Element bereits in dieser Liste enthalten ist, beachten Sie, dass der `index` des einzufügenden Elements vor der Entfernung des Elements liegt.

- Wenn der `index` gleich `0` ist, wird das neue Element an den Anfang der Liste eingefügt.

- Wenn der `index` größer oder gleich [`numberOfItems`](/de/docs/Web/API/SVGNumberList/numberOfItems) ist, wird das neue Element am Ende der Liste angehängt.

## Syntax

```js-nolint
SVGNumberList.insertItemBefore(newItem, index)
```

### Parameter

- `newItem`
  - : Ein [`SVGNumber`](/de/docs/Web/API/SVGNumber) Element, das in die Liste eingefügt wird.
- `index`
  - : Ein Integer; der Index, an dem das neue Element als unsignierte lange Zahl eingefügt werden soll.

### Rückgabewert

Ein [`SVGNumber`](/de/docs/Web/API/SVGNumber) Objekt; das eingefügte Element aus der Liste.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGNumber`](/de/docs/Web/API/SVGNumber)
