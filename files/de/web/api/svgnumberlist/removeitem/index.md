---
title: "SVGNumberList: removeItem() Methode"
short-title: removeItem()
slug: Web/API/SVGNumberList/removeItem
l10n:
  sourceCommit: 0f57507c06180622a5a6168b552317c43eeb9d04
---

{{APIRef("SVG")}}

Die `removeItem()`-Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle entfernt ein vorhandenes Element aus der Liste.

## Syntax

```js-nolint
SVGNumberList.removeItem(index)
```

### Parameter

- `index`
  - : Ein ganzzahliger Wert; der Index des zu entfernenden Elements als `unsigned long`.

### Rückgabewert

Ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt; das entfernte Element aus der Liste.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Indexnummer größer oder gleich [`numberOfItems`](/de/docs/Web/API/SVGNumberList/numberOfItems) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGNumber`](/de/docs/Web/API/SVGNumber)
- [`SVGNumberList.numberOfItems`](/de/docs/Web/API/SVGNumberList/numberOfItems)
