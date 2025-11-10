---
title: "HTMLTextAreaElement: wrap-Eigenschaft"
short-title: wrap
slug: Web/API/HTMLTextAreaElement/wrap
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`wrap`**-Eigenschaft der Schnittstelle [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) gibt an, wie der Wert zur Formularübertragung umbrochen werden soll. Sie spiegelt das `wrap`-Attribut des `<textarea>`-Elements wider. Beachten Sie, dass der Wert `"hard"` nur eine Wirkung hat, wenn das [`cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)-Attribut ebenfalls gesetzt ist.

## Wert

Die möglichen Werte finden Sie unter [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap). Standardmäßig ist `"soft"`.

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
