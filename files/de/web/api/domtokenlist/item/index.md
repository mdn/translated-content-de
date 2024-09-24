---
title: "DOMTokenList: item()-Methode"
short-title: item()
slug: Web/API/DOMTokenList/item
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`item()`**-Methode der {{domxref("DOMTokenList")}}-Schnittstelle gibt ein Element in der Liste zurück, das durch seine Position in der Liste, seinem Index, bestimmt wird.

> [!NOTE]
> Diese Methode ist äquivalent zu der [Bracket-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation). Daher ist `aList.item(i)` dasselbe wie `aList[i]`.

## Syntax

```js-nolint
tokenList.item(index)
```

### Parameter

- `index`
  - : Eine Zahl, die den Index des Elements darstellt, das Sie zurückgeben möchten. Wenn es keine ganze Zahl ist, wird nur der ganzzahlige Teil berücksichtigt.

### Rückgabewert

Ein String, der das zurückgegebene Element darstellt, oder `null`, wenn die Zahl größer als oder gleich der `length` der Liste ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `index` nicht in eine ganze Zahl umgewandelt werden kann.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("span")}}-Element als `DOMTokenList` gesetzt sind, unter Verwendung von {{domxref("Element.classList")}}. Wir rufen dann das letzte Element in der Liste mit `item(tokenList.length - 1)` ab und schreiben es in den {{domxref("Node.textContent")}} des `<span>`-Elements.

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

Die Ausgabe sieht wie folgt aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
