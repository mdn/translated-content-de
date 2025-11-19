---
title: "DOMTokenList: item() Methode"
short-title: item()
slug: Web/API/DOMTokenList/item
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("DOM")}}

Die **`item()`**-Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle gibt ein Element in der Liste zurück, das durch seine Position in der Liste, seinen Index, bestimmt wird.

> [!NOTE]
> Diese Methode ist äquivalent zur [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation).
> Also ist `list.item(i)` dasselbe wie `list[i]`.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Eine Zahl, die den Index des zurückzuergebenden Elements repräsentiert. Wenn es sich nicht um eine ganze Zahl handelt, wird nur der ganzzahlige Teil berücksichtigt.

### Rückgabewert

Ein String, der das zurückgegebene Element repräsentiert, oder `null`, wenn die Zahl größer oder gleich der `length` der Liste ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `index` nicht in eine ganze Zahl umgewandelt werden kann.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die an einem
{{htmlelement("span")}}-Element als `DOMTokenList` festgelegt sind, indem wir
[`Element.classList`](/de/docs/Web/API/Element/classList) verwenden. Wir rufen dann das letzte Element in der Liste mit `item(tokenList.length - 1)` ab und schreiben es in das
`<span>`'s [`Node.textContent`](/de/docs/Web/API/Node/textContent).

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const item = classes.item(classes.length - 1);
span.textContent = item;
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
