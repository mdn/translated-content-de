---
title: "SVGNumberList: removeItem() Methode"
short-title: removeItem()
slug: Web/API/SVGNumberList/removeItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`removeItem()`** Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) Schnittstelle entfernt ein bestehendes Element an dem angegebenen Index aus der Liste.

## Syntax

```js-nolint
removeItem(index)
```

### Parameter

- `index`
  - : Eine nicht-negative Ganzzahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Das [`SVGNumber`](/de/docs/Web/API/SVGNumber), das aus der Liste entfernt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
