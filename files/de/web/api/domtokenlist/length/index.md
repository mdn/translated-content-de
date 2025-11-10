---
title: "DOMTokenList: length-Eigenschaft"
short-title: length
slug: Web/API/DOMTokenList/length
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}

Die schreibgeschützte **`length`**-Eigenschaft des [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Interfaces ist ein `integer`, der die Anzahl der im Objekt gespeicherten Objekte darstellt.

## Wert

Eine positive ganze Zahl oder `0`, wenn die Liste leer ist.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("span")}}-Element als `DOMTokenList` festgelegt sind, indem wir [`Element.classList`](/de/docs/Web/API/Element/classList) verwenden, und schreiben dann die Länge der Liste in das [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>`-Elements.

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
