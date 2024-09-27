---
title: "DOMTokenList: entries() Methode"
short-title: entries()
slug: Web/API/DOMTokenList/entries
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`entries()`** Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) Schnittstelle
gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, der Ihnen erlaubt,
alle Schlüssel/Wert-Paare in diesem Objekt zu durchlaufen. Die Werte sind
{{jsxref("Array")}}s, die [Schlüssel, Wert]-Paare enthalten, wobei jedes Paar ein einzelnes Token darstellt.

## Syntax

```js-nolint
entries()
```

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen, die auf einem
{{htmlelement("span")}} Element gesetzt sind, als `DOMTokenList` mit
[`Element.classList`](/de/docs/Web/API/Element/classList) ab. Dann erhalten wir einen Iterator, der die Schlüssel/Wert-Paare enthält, indem `entries()` verwendet wird, und iterieren durch jedes Paar mit einer {{jsxref("Statements/for...of", "for...of")}} Schleife, um sie in den
`<span>`'s [`Node.textContent`](/de/docs/Web/API/Node/textContent) zu schreiben.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const iterator = classes.entries();

for (const value of iterator) {
  span.textContent += `(${value})`;
}
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMTokenList.foreach()`](/de/docs/Web/API/DOMTokenList/foreach), [`DOMTokenList.keys`](/de/docs/Web/API/DOMTokenList/keys) und [`DOMTokenList.values`](/de/docs/Web/API/DOMTokenList/values).
