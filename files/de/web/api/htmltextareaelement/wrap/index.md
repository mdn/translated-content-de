---
title: "HTMLTextAreaElement: wrap-Eigenschaft"
short-title: wrap
slug: Web/API/HTMLTextAreaElement/wrap
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`wrap`**-Eigenschaft der {{DOMxRef("HTMLTextAreaElement")}}-Schnittstelle gibt an, wie die Steuerung den Wert zur Formularübermittlung umbrechen soll. Sie spiegelt das `wrap`-Attribut des `<textarea>`-Elements wider. Beachten Sie, dass der Wert `"hard"` nur eine Wirkung hat, wenn das {{domxref("HTMLTextAreaElement.cols", "cols")}}-Attribut ebenfalls gesetzt ist.

## Wert

Siehe [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap) für die möglichen Werte. Standardmäßig auf `"soft"` gesetzt.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
const oldWrap = textArea.wrap;
textArea.wrap = "hard"; // Zeilenumbrüche (CR+LF) während der Formularübermittlung hinzufügen
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.cols")}}
