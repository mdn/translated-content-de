---
title: <merror>
slug: Web/MathML/Element/merror
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<merror>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um Inhalte als Fehlermeldungen anzuzeigen. Das Ziel dieses Elements ist es, eine standardisierte Möglichkeit für Programme zu bieten, die MathML aus anderen Eingaben generieren, um Syntaxfehler zu melden.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiele

Im folgenden Beispiel wird `<merror>` verwendet, um einen Parsing-Fehler für eine LaTeX-ähnliche Eingabe anzuzeigen:

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

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
