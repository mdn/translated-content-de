---
title: "DOMTokenList: keys() Methode"
short-title: keys()
slug: Web/API/DOMTokenList/keys
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("DOM")}}

Die **`keys()`** Methode des [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) Interfaces
gibt einen {{jsxref("Iteration_protocols",'iterator',"",1)}} zurück, der es Ihnen ermöglicht, alle in diesem Objekt enthaltenen Schlüssel zu durchlaufen.
Die Schlüssel sind vorzeichenlose Ganzzahlen.

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
{{htmlelement("span")}}-Element gesetzten Klassen als `DOMTokenList` mit
[`Element.classList`](/de/docs/Web/API/Element/classList) ab. Wir rufen dann mit `keys()` einen Iterator ab, der die Schlüssel enthält,
und iterieren durch diese Schlüssel mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife,
wobei jeder Schlüssel in den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>` geschrieben wird.

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
