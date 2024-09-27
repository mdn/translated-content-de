---
title: "DOMTokenList: length Eigenschaft"
short-title: length
slug: Web/API/DOMTokenList/length
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die schreibgeschützte **`length`** Eigenschaft der Schnittstelle [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) ist ein `integer`, der die Anzahl der im Objekt gespeicherten Objekte darstellt.

## Wert

Ein positiver Integer oder `0`, wenn die Liste leer ist.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die an einem {{htmlelement("span")}}-Element mittels [`Element.classList`](/de/docs/Web/API/Element/classList) als `DOMTokenList` gesetzt sind, und schreiben dann die Länge der Liste in den [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>`.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const length = classes.length;

span.textContent = `classList length = ${length}`;
```

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
