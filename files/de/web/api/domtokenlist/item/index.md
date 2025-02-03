---
title: "DOMTokenList: `item()`-Methode"
short-title: item()
slug: Web/API/DOMTokenList/item
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

Die **`item()`**-Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle gibt ein Element in der Liste zurück, bestimmt durch seine Position in der Liste, also seinen Index.

> [!NOTE]
> Diese Methode entspricht der [Klammer-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation).
> Also ist `aList.item(i)` dasselbe wie `aList[i]`.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Eine Zahl, die den Index des Elements darstellt, das Sie zurückgeben möchten. Wenn es sich nicht um eine ganze Zahl handelt, wird nur der ganzzahlige Teil berücksichtigt.

### Rückgabewert

Ein String, der das zurückgegebene Element darstellt, oder `null`, wenn die Zahl größer oder gleich der `length` der Liste ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `index` nicht in einen Integer umgewandelt werden kann.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen, die an einem {{htmlelement("span")}}-Element gesetzt sind, als `DOMTokenList` ab, indem wir [`Element.classList`](/de/docs/Web/API/Element/classList) verwenden. Dann rufen wir das letzte Element in der Liste mit `item(tokenList.length - 1)` ab und schreiben es in den `textContent` des `<span>`-Elements.

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

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
