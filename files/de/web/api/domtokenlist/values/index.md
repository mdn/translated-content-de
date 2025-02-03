---
title: "DOMTokenList: `values()`-Methode"
short-title: values()
slug: Web/API/DOMTokenList/values
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

Die **`values()`**-Methode des [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Interfaces
gibt einen {{jsxref("Iteration_protocols",'iterator')}}
zurück, der es dem Aufrufer ermöglicht, alle im `DOMTokenList` enthaltenen Werte zu durchlaufen.
Die einzelnen Werte sind Zeichenketten.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf ein
{{htmlelement("span")}}-Element gesetzt sind, als ein `DOMTokenList` unter Verwendung von
[`Element.classList`](/de/docs/Web/API/Element/classList). Wir erhalten dann einen Iterator, der die Werte mithilfe von `values()` enthält, und iterieren durch diese Werte mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife,
wobei jeder einzeln auf den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>` geschrieben wird.

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
