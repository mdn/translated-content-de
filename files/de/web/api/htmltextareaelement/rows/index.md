---
title: "HTMLTextAreaElement: rows-Eigenschaft"
short-title: rows
slug: Web/API/HTMLTextAreaElement/rows
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`rows`**-Eigenschaft der {{DOMxRef("HTMLTextAreaElement")}}-Schnittstelle ist eine positive ganze Zahl, die die sichtbaren Textzeilen des Texteingabekontrols darstellt. Sie spiegelt das [`rows`](/de/docs/Web/HTML/Element/textarea#rows)-Attribut des `<textarea>`-Elements wider.

## Wert

Eine positive ganze Zahl. Standardwert ist `2`.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
const textLines = textArea.rows;
textArea.rows = textLines + 2;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.cols")}}
- {{DOMXref("HTMLTextAreaElement.wrap")}}
- Die CSS {{cssxref("resize")}}-Eigenschaft
