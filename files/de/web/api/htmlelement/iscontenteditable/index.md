---
title: "HTMLElement: isContentEditable-Eigenschaft"
short-title: isContentEditable
slug: Web/API/HTMLElement/isContentEditable
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.isContentEditable`**
gibt einen booleschen Wert zurück, der `true` ist, wenn der Inhalt des Elements
bearbeitbar ist; andernfalls gibt sie `false` zurück.

## Wert

Ein boolescher Wert.

## Beispiele

### HTML

```html
<p id="firstParagraph">Uneditable Paragraph</p>
<p id="secondParagraph" contenteditable="true">Editable Paragraph</p>

<p id="infoText1">Is the first paragraph editable?</p>
<p id="infoText2">Is the second paragraph editable?</p>
```

### JavaScript

```js
const firstParagraph = document.getElementById("firstParagraph");
const secondParagraph = document.getElementById("secondParagraph");

const infoText1 = document.getElementById("infoText1");
const infoText2 = document.getElementById("infoText2");

infoText1.textContent += ` ${firstParagraph.isContentEditable}`;
infoText2.textContent += ` ${secondParagraph.isContentEditable}`;
```

### Ergebnis

{{ EmbedLiveSample('Examples', '100%', 160) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement/contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
- Das globale Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).
