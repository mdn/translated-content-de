---
title: "HTMLTextAreaElement: cols-Eigenschaft"
short-title: cols
slug: Web/API/HTMLTextAreaElement/cols
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`cols`**-Eigenschaft der {{DOMxRef("HTMLTextAreaElement")}}-Schnittstelle ist eine positive ganze Zahl, die die sichtbare Breite des mehrzeiligen Textelements in durchschnittlichen Zeichenbreiten darstellt. Sie spiegelt das [`cols`](/de/docs/Web/HTML/Element/textarea#cols)-Attribut des `<textarea>`-Elements wider.

## Wert

Eine positive ganze Zahl. Standardwert ist `20`.

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
- {{DOMXref("HTMLTextAreaElement.rows")}}
- {{DOMXref("HTMLTextAreaElement.wrap")}}
- CSS {{cssxref("resize")}}-Eigenschaft
