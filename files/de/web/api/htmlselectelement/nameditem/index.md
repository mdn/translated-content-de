---
title: "HTMLSelectElement: namedItem() Methode"
short-title: namedItem()
slug: Web/API/HTMLSelectElement/namedItem
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.namedItem()`** Methode gibt das [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) zurück, das dem [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) entspricht, dessen `name` oder `id` mit dem angegebenen Namen übereinstimmt, oder `null`, wenn keine Option übereinstimmt.

In JavaScript entspricht die Verwendung von `selectElt.namedItem('value')` der Verwendung von `selectElt.options.namedItem('value')`.

## Syntax

```js-nolint
namedItem(str)
```

### Parameter

- `str`
  - : Ein String, der den `name` oder `id` der Option repräsentiert.

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
let selectElt = document.getElementById("myFormControl");
elem1 = selectElt.namedItem("o1"); // Returns the HTMLOptionElement representing #o1
```

Aber, Sie können nicht schreiben:

```js
let selectElt = document.getElementById("myFormControl");
elem1 = selectElt.o1; // Returns undefined
elem1 = selectElt["o1"]; // Returns undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), das es implementiert.
