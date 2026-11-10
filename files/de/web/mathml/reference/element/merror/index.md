---
title: <merror>
slug: Web/MathML/Reference/Element/merror
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<merror>`**-Element von [MathML](/de/docs/Web/MathML) wird verwendet, um Inhalte als Fehlermeldungen anzuzeigen. Es bietet Programmen, die MathML aus anderen Eingaben erzeugen, eine standardisierte Möglichkeit, Syntaxfehler zu melden.

## Attribute

Dieses Element akzeptiert die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

## Beispiele

Im folgenden Beispiel wird `<merror>` verwendet, um einen Parsing-Fehler in einer LaTeX-ähnlichen Eingabe anzuzeigen:

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

{{ EmbedLiveSample('examples', 700, 200, "", "") }}

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
