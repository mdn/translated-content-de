---
title: "HTMLTextAreaElement: cols-Eigenschaft"
short-title: cols
slug: Web/API/HTMLTextAreaElement/cols
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`cols`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces ist eine positive Ganzzahl, die die sichtbare Breite des mehrzeiligen Texteingabe-Steuerungselements in durchschnittlichen Zeichenbreiten darstellt. Sie spiegelt das [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)-Attribut des `<textarea>`-Elements wider.

## Wert

Eine positive Ganzzahl. Standardmäßig `20`.

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
