---
title: "DOMTokenList: values() Methode"
short-title: values()
slug: Web/API/DOMTokenList/values
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`values()`** Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) Schnittstelle
gibt einen {{jsxref("Iteration_protocols",'iterator')}}
zurück, der es dem Aufrufer ermöglicht, alle in der `DOMTokenList` enthaltenen Werte zu durchlaufen.
Die einzelnen Werte sind Zeichenketten.

## Syntax

```js-nolint
tokenList.values()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem
{{htmlelement("span")}}-Element als `DOMTokenList` festgelegt sind, indem wir
[`Element.classList`](/de/docs/Web/API/Element/classList) verwenden. Wir rufen dann einen Iterator ab, der die Werte
mittels `values()` enthält, und iterieren durch diese Werte mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife,
wobei jeder Wert in die [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>` geschrieben wird.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Jetzt das JavaScript:

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
