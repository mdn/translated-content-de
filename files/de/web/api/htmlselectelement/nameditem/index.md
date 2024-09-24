---
title: "HTMLSelectElement: namedItem()-Methode"
short-title: namedItem()
slug: Web/API/HTMLSelectElement/namedItem
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.namedItem()`**-Methode gibt das
{{domxref("HTMLOptionElement")}} zurück, das dem {{domxref("HTMLOptionElement")}}
entspricht, dessen `name` oder `id` mit dem angegebenen Namen übereinstimmt, oder
`null`, wenn keine Option übereinstimmt.

In JavaScript ist die Verwendung von `selectElt.namedItem('value')` gleichbedeutend mit `selectElt.options.namedItem('value')`.

## Syntax

```js-nolint
namedItem(str)
```

### Parameter

- `str`
  - : Ein String, der den `name` oder die `id` der Option darstellt.

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
let selectElt = document.getElementById("myFormControl");
elem1 = selectElt.namedItem("o1"); // Gibt das HTMLOptionElement zurück, das #o1 repräsentiert
```

Aber Sie können nicht schreiben:

```js
let selectElt = document.getElementById("myFormControl");
elem1 = selectElt.o1; // Gibt undefined zurück
elem1 = selectElt["o1"]; // Gibt undefined zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLSelectElement")}}, das dies implementiert.
