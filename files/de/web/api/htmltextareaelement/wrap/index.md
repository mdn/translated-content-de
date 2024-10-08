---
title: "HTMLTextAreaElement: wrap-Eigenschaft"
short-title: wrap
slug: Web/API/HTMLTextAreaElement/wrap
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`wrap`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle gibt an, wie die Steuerung den Wert zur Formularübermittlung umbrechen soll. Sie spiegelt das [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)-Attribut des `<textarea>`-Elements wider. Beachten Sie, dass der Wert `"hard"` nur dann Wirkung zeigt, wenn auch das [`cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)-Attribut gesetzt ist.

## Wert

Siehe [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap) für die möglichen Werte. Standardwert ist `"soft"`.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
const oldWrap = textArea.wrap;
textArea.wrap = "hard"; // Add line breaks (CR+LF) during form submission
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- [`HTMLTextAreaElement.cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)
