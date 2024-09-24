---
title: <merror>
slug: Web/MathML/Element/merror
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

Das **`<merror>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um Inhalte als Fehlermeldungen anzuzeigen. Das Ziel dieses Elements ist es, eine standardisierte Methode für Programme bereitzustellen, die MathML aus anderen Eingaben generieren, um Syntaxfehler zu melden.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiele

Im folgenden Beispiel wird `<merror>` verwendet, um einen Syntaxfehler für eine LaTeX-ähnliche Eingabe anzuzeigen:

```html
<math display="block">
  <mfrac>
    <merror>
      <mtext>Syntax error: \frac{1}</mtext>
    </merror>
    <mn>3</mn>
  </mfrac>
</math>
```

{{ EmbedLiveSample('merror_example', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
