---
title: "DOMTokenList: length-Eigenschaft"
short-title: length
slug: Web/API/DOMTokenList/length
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die schreibgeschützte **`length`**-Eigenschaft der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Schnittstelle ist ein `integer`, der die Anzahl der in dem Objekt gespeicherten Objekte repräsentiert.

## Wert

Eine positive Ganzzahl oder `0`, wenn die Liste leer ist.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("span")}}-Element als `DOMTokenList` gesetzt sind, indem wir [`Element.classList`](/de/docs/Web/API/Element/classList) verwenden. Anschließend schreiben wir die Länge der Liste in das [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>`.

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
