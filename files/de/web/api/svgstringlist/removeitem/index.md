---
title: "SVGStringList: removeItem() Methode"
short-title: removeItem()
slug: Web/API/SVGStringList/removeItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`removeItem()`**-Methode der [`SVGStringList`](/de/docs/Web/API/SVGStringList)-Schnittstelle entfernt ein vorhandenes Element an dem angegebenen Index aus der Liste.

## Syntax

```js-nolint
removeItem(index)
```

### Parameter

- `index`
  - : Eine nicht-negative ganze Zahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Der String, der aus der Liste entfernt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`SVGStringList`](/de/docs/Web/API/SVGStringList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
