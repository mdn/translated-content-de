---
title: "DOMTokenList: values()-Methode"
short-title: values()
slug: Web/API/DOMTokenList/values
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`values()`**-Methode des [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Interfaces
gibt einen {{jsxref("Iteration_protocols",'iterator')}}
zurück, der es dem Aufrufer ermöglicht, alle in der `DOMTokenList` enthaltenen Werte durchzugehen.
Die einzelnen Werte sind Strings.

## Syntax

```js-nolint
tokenList.values()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

Im folgenden Beispiel holen wir die Liste der Klassen, die auf einem
{{htmlelement("span")}}-Element gesetzt sind, als `DOMTokenList` mittels
[`Element.classList`](/de/docs/Web/API/Element/classList). Dann holen wir uns einen Iterator, der die Werte enthält,
mithilfe von `values()`, und durchlaufen diese Werte mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife,
um jeden einzelnen in den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>` zu schreiben.

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

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
