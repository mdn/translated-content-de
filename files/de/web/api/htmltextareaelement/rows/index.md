---
title: "HTMLTextAreaElement: rows Eigenschaft"
short-title: rows
slug: Web/API/HTMLTextAreaElement/rows
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`rows`** Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Interfaces ist eine positive ganze Zahl, die die sichtbaren Textzeilen des Textelements darstellt. Sie spiegelt das [`rows`](/de/docs/Web/HTML/Element/textarea#rows) Attribut des `<textarea>` Elements wider.

## Wert

Eine positive ganze Zahl. Standardmäßig `2`.

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
- [`HTMLTextAreaElement.cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)
- [`HTMLTextAreaElement.wrap`](/de/docs/Web/API/HTMLTextAreaElement/wrap)
- CSS {{cssxref("resize")}} Eigenschaft
