---
title: "HTMLTextAreaElement: cols-Eigenschaft"
short-title: cols
slug: Web/API/HTMLTextAreaElement/cols
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`cols`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle ist eine positive Ganzzahl, die die sichtbare Breite des mehrzeiligen Texteingabeelements in durchschnittlichen Zeichenbreiten darstellt. Sie spiegelt das [`cols`](/de/docs/Web/HTML/Element/textarea#cols)-Attribut des `<textarea>`-Elements wider.

## Wert

Eine positive Ganzzahl. Standardwert ist `20`.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
textArea.cols = 80;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- [`HTMLTextAreaElement.rows`](/de/docs/Web/API/HTMLTextAreaElement/rows)
- [`HTMLTextAreaElement.wrap`](/de/docs/Web/API/HTMLTextAreaElement/wrap)
- CSS {{cssxref("resize")}}-Eigenschaft
