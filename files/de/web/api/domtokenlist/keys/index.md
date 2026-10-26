---
title: "DOMTokenList: keys()-Methode"
short-title: keys()
slug: Web/API/DOMTokenList/keys
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("DOM")}}

Die **`keys()`**-Methode der Schnittstelle [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) gibt einen {{jsxref("Iteration_protocols",'iterator',"",1)}} zurück, mit dem Sie alle in diesem Objekt enthaltenen Schlüssel durchlaufen können. Die Schlüssel sind vorzeichenlose Ganzzahlen.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator","",1)}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen eines {{htmlelement("span")}}-Elements mithilfe von [`Element.classList`](/de/docs/Web/API/Element/classList) als `DOMTokenList` ab. Anschließend rufen wir mit `keys()` einen Iterator für die Schlüssel ab und durchlaufen diese mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife. Dabei schreiben wir jeden Schlüssel in die Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>`-Elements.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.keys();

for (let value of iterator) {
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

- [Polyfill für `DOMTokenList.prototype.keys` in `core-js`](https://core-js.io/docs/features/web-standards/iterable-dom-collections)
- [`DOMTokenList.entries()`](/de/docs/Web/API/DOMTokenList/entries), [`DOMTokenList.forEach()`](/de/docs/Web/API/DOMTokenList/forEach) und [`DOMTokenList.values`](/de/docs/Web/API/DOMTokenList/values).
