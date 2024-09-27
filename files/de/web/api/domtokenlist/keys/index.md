---
title: "DOMTokenList: keys() Methode"
short-title: keys()
slug: Web/API/DOMTokenList/keys
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`keys()`** Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) Schnittstelle
gibt einen {{jsxref("Iteration_protocols",'iterator',"",1)}} zurück, der es ermöglicht, alle in diesem Objekt enthaltenen Schlüssel zu durchlaufen.
Die Schlüssel sind ungesignierte Ganzzahlen.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator","",1)}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der auf einem
{{htmlelement("span")}} Element gesetzten Klassen als `DOMTokenList` ab, indem wir [`Element.classList`](/de/docs/Web/API/Element/classList) verwenden. Anschließend holen wir einen Iterator, der die Schlüssel enthält, mit `keys()`,
und durchlaufen diese Schlüssel mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife,
wobei jeder in den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>` Elements geschrieben wird.

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

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMTokenList.entries()`](/de/docs/Web/API/DOMTokenList/entries), [`DOMTokenList.forEach()`](/de/docs/Web/API/DOMTokenList/forEach) und [`DOMTokenList.values`](/de/docs/Web/API/DOMTokenList/values).
