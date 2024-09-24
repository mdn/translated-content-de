---
title: "HTMLElement: Eigenschaft isContentEditable"
short-title: isContentEditable
slug: Web/API/HTMLElement/isContentEditable
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.isContentEditable`** gibt einen booleschen Wert zurück, der `true` ist, wenn der Inhalt des Elements bearbeitbar ist; andernfalls wird `false` zurückgegeben.

## Wert

Ein boolescher Wert.

## Beispiele

### HTML

```html
<p id="firstParagraph">Nicht bearbeitbarer Absatz</p>
<p id="secondParagraph" contenteditable="true">Bearbeitbarer Absatz</p>

<p id="infoText1">Ist der erste Absatz bearbeitbar?</p>
<p id="infoText2">Ist der zweite Absatz bearbeitbar?</p>
```

### JavaScript

```js
const firstParagraph = document.getElementById("firstParagraph");
const secondParagraph = document.getElementById("secondParagraph");

const infoText1 = document.getElementById("infoText1");
const infoText2 = document.getElementById("infoText2");

infoText1.textContent += " " + firstParagraph.isContentEditable;
infoText2.textContent += " " + secondParagraph.isContentEditable;
```

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', 160) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLElement/contentEditable")}}
- Das globale Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable).
