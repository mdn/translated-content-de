---
title: "DOMTokenList: Werte() Methode"
short-title: Werte()
slug: Web/API/DOMTokenList/values
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`values()`** Methode des {{domxref("DOMTokenList")}} Interfaces
gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück,
der es dem Aufrufer ermöglicht, alle in der `DOMTokenList` enthaltenen Werte durchzugehen.
Die einzelnen Werte sind Zeichenketten.

## Syntax

```js-nolint
tokenList.values()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem
{{htmlelement("span")}}-Element als `DOMTokenList` festgelegt sind, indem wir
{{domxref("Element.classList")}} verwenden. Wir erhalten dann einen Iterator mit den Werten
unter Verwendung von `values()`, dann durchlaufen wir diese Werte mit einer [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife
und schreiben jeden davon in den `<span>`-{{domxref("Node.textContent")}}.

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

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
