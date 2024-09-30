---
title: "DOMTokenList: item() Methode"
short-title: item()
slug: Web/API/DOMTokenList/item
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`item()`** Methode des [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) Interfaces gibt ein Element in der Liste zurück, das durch seine Position in der Liste, seinem Index, bestimmt wird.

> [!NOTE]
> Diese Methode ist gleichbedeutend mit der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation).
> Also ist `aList.item(i)` das gleiche wie `aList[i]`.

## Syntax

```js-nolint
tokenList.item(index)
```

### Parameter

- `index`
  - : Eine Zahl, die den Index des Elements darstellt, das Sie zurückgeben möchten. Wenn es keine ganze Zahl ist, wird nur der ganzzahlige Teil berücksichtigt.

### Rückgabewert

Ein String, der das zurückgegebene Element repräsentiert, oder `null`, wenn die Zahl größer oder gleich der `length` der Liste ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `index` nicht in eine ganze Zahl umgewandelt werden kann.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem
{{htmlelement("span")}} Element als `DOMTokenList` gesetzt sind, indem wir [`Element.classList`](/de/docs/Web/API/Element/classList) verwenden. Dann rufen wir das letzte Element in der Liste mit `item(tokenList.length - 1)` ab und schreiben es in das
`s`<span>'s [`Node.textContent`](/de/docs/Web/API/Node/textContent).

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Jetzt das JavaScript:

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
