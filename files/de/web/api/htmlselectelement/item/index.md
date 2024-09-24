---
title: "HTMLSelectElement: Methode item()"
short-title: item()
slug: Web/API/HTMLSelectElement/item
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("HTML DOM") }}

Die Methode **`HTMLSelectElement.item()`** gibt das
{{domxref("Element")}} zurück, das dem {{domxref("HTMLOptionElement")}} entspricht, dessen
Position in der Optionsliste dem im Parameter angegebenen Index entspricht, oder
`null`, wenn es keines gibt.

Im JavaScript ist die Verwendung der Array-Klammer-Syntax mit einem `unsigned long`, wie
`selectElt[index]`, äquivalent zu
`selectElt.namedItem(index)`.

## Syntax

```js-nolint
item(index)
// oder collection[index]
```

### Parameter

- `index`
  - : Eine nicht-negative Ganzzahl, die die Position der Option in der Liste darstellt.

### Rückgabewert

Ein {{domxref("HTMLOptionElement")}} oder `null`.

## Beispiele

### HTML

```html
<form>
  <select id="myFormControl">
    <option id="o1">Opt 1</option>
    <option id="o2">Opt 2</option>
  </select>
</form>
```

### JavaScript

```js
// Gibt das HTMLOptionElement zurück, das #o2 darstellt
elem1 = document.forms[0]["myFormControl"][1];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLSelectElement")}}, das es implementiert.
