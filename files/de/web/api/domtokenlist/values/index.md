---
title: "DOMTokenList: values()-Methode"
short-title: values()
slug: Web/API/DOMTokenList/values
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("DOM")}}

Die Methode **`values()`** der Schnittstelle [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, mit dem sich alle in der `DOMTokenList` enthaltenen Werte durchlaufen lassen. Die einzelnen Werte sind Zeichenfolgen.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der für ein {{htmlelement("span")}}-Element festgelegten Klassen mithilfe von [`Element.classList`](/de/docs/Web/API/Element/classList) als `DOMTokenList` ab. Anschließend rufen wir mit `values()` einen Iterator für die Werte ab und durchlaufen sie mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife. Dabei schreiben wir jeden Wert in [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>`-Elements.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.values();

for (const value of iterator) {
  span.textContent += `(${value}) `;
}
```

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `DOMTokenList.prototype.values` in `core-js`](https://core-js.io/docs/features/web-standards/iterable-dom-collections)
