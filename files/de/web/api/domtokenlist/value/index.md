---
title: "DOMTokenList: value-Eigenschaft"
short-title: value
slug: Web/API/DOMTokenList/value
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`value`**-Eigenschaft der [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)
Schnittstelle ist ein [Stringifier](/de/docs/Glossary/stringifier), der den Wert der Liste als Zeichenkette serialisiert zurückgibt oder die Liste löscht und auf den angegebenen Wert setzt.

## Wert

Eine Zeichenkette, die den serialisierten Inhalt der Liste darstellt.
Jedes Element wird durch ein Leerzeichen getrennt.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Klassen ab, die auf einem {{htmlelement("span")}}-Element als `DOMTokenList` gesetzt sind, indem wir [`Element.classList`](/de/docs/Web/API/Element/classList) verwenden. Dann schreiben wir den Wert der Liste in das [`Node.textContent`](/de/docs/Web/API/Node/textContent) des `<span>`.

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

Die Ausgabe sieht folgendermaßen aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
