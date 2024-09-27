---
title: "HTMLSelectElement: item()-Methode"
short-title: item()
slug: Web/API/HTMLSelectElement/item
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.item()`**-Methode gibt das [`Element`](/de/docs/Web/API/Element) zurück, das dem [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) entspricht, dessen Position in der Optionsliste dem im Parameter angegebenen Index entspricht, oder `null`, wenn keine vorhanden sind.

In JavaScript ist die Verwendung der Arrayklammernsyntax mit einem `unsigned long`, wie `selectElt[index]`, gleichbedeutend mit `selectElt.namedItem(index)`.

## Syntax

```js-nolint
item(index)
// or collection[index]
```

### Parameter

- `index`
  - : Eine nicht-negative ganze Zahl, die die Position der Option in der Liste darstellt.

### Rückgabewert

Ein [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) oder `null`.

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
// Returns the HTMLOptionElement representing #o2
elem1 = document.forms[0]["myFormControl"][1];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), das es implementiert.
