---
title: <merror>
slug: Web/MathML/Reference/Element/merror
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<merror>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um Inhalte als Fehlermeldungen anzuzeigen. Das Ziel dieses Elements ist es, einen standardisierten Weg bereitzustellen, wie Programme, die MathML aus anderen Eingaben erzeugen, Syntaxfehler melden können.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

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
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
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
