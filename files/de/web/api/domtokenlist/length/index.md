---
title: "DOMTokenList: length Eigenschaft"
short-title: length
slug: Web/API/DOMTokenList/length
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die schreibgeschützte **`length`**-Eigenschaft der {{domxref("DOMTokenList")}}-Schnittstelle ist ein `integer`, der die Anzahl der Objekte darstellt, die im Objekt gespeichert sind.

## Wert

Eine positive Ganzzahl oder `0`, wenn die Liste leer ist.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("span")}}-Element als `DOMTokenList` gesetzt sind, mithilfe von {{domxref("Element.classList")}}. Dann schreiben wir die Länge der Liste in die {{domxref("Node.textContent")}} des `<span>`.

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
