---
title: "DOMTokenList: Wert-Eigenschaft"
short-title: Wert
slug: Web/API/DOMTokenList/value
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`value`**-Eigenschaft der {{domxref("DOMTokenList")}}-Schnittstelle ist ein {{Glossary("stringifier")}}, der den Wert der Liste als Textkette serialisiert zurückgibt oder die Liste auf den angegebenen Wert leert und setzt.

## Wert

Eine Zeichenkette, die den serialisierten Inhalt der Liste darstellt. Jedes Element wird durch ein Leerzeichen getrennt.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("span")}}-Element gesetzt sind, als `DOMTokenList` mittels {{domxref("Element.classList")}} auf und schreiben den Wert der Liste in den {{domxref("Node.textContent")}} des `<span>`-Elements.

Zuerst das HTML:

```html
<span class="a b c"></span>
```

Nun das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
span.textContent = classes.value;
```

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
