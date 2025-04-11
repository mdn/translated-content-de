---
title: "HTMLTextAreaElement: rows-Eigenschaft"
short-title: rows
slug: Web/API/HTMLTextAreaElement/rows
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`rows`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle ist eine positive ganze Zahl, die die sichtbaren Textzeilen des Textsteuerungselements darstellt. Sie spiegelt das [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows)-Attribut des `<textarea>`-Elements wider.

## Wert

Eine positive ganze Zahl. Der Standardwert ist `2`.

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
- CSS {{cssxref("resize")}}-Eigenschaft
