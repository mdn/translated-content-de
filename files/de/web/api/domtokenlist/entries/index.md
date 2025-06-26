---
title: "DOMTokenList: entries() Methode"
short-title: entries()
slug: Web/API/DOMTokenList/entries
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("DOM")}}

Die **`entries()`** Methode der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) Schnittstelle
gibt einen {{jsxref("Iteration_protocols",'Iterator')}} zurück, der es Ihnen ermöglicht, alle Schlüssel/Wert-Paare in diesem Objekt zu durchlaufen. Die Werte sind
{{jsxref("Array")}}s, die [Schlüssel, Wert] Paare enthalten, von denen jedes einen einzelnen Token darstellt.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem
{{htmlelement("span")}} Element als `DOMTokenList` gesetzt sind, indem wir
[`Element.classList`](/de/docs/Web/API/Element/classList) verwenden. Wir erhalten dann einen Iterator mit den Schlüssel/Wert-Paaren mit `entries()`, und iterieren durch jedes Paar mit einer
{{jsxref("Statements/for...of", "for...of")}} Schleife, um sie in das
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

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMTokenList.foreach()`](/de/docs/Web/API/DOMTokenList/forEach), [`DOMTokenList.keys`](/de/docs/Web/API/DOMTokenList/keys) und [`DOMTokenList.values`](/de/docs/Web/API/DOMTokenList/values).
