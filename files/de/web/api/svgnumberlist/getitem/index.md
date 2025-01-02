---
title: "SVGNumberList: getItem()-Methode"
short-title: getItem()
slug: Web/API/SVGNumberList/getItem
l10n:
  sourceCommit: 0f57507c06180622a5a6168b552317c43eeb9d04
---

{{APIRef("SVG")}}

Die `getItem()`-Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle gibt das angegebene Element aus der Liste zurück.

Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen, die am Element vorgenommen werden, sind sofort in der Liste sichtbar.

Das erste Element wird mit `0` indiziert.

## Syntax

```js-nolint
SVGNumberList.getItem(index)
```

### Parameter

- `index`
  - : Ein ganzzahliger Wert; der Index des angegebenen Elements als `unsigned long`.

### Rückgabewert

Ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt; das angegebene Element aus der Liste.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGNumber`](/de/docs/Web/API/SVGNumber)
