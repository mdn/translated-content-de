---
title: displaystyle
slug: Web/MathML/Global_attributes/displaystyle
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}

Der **`displaystyle`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) ist ein boolesches Attribut, das den [math-style](/de/docs/Web/CSS/math-style) eines MathML-Elements festlegt.

## Beispiel

In diesem Beispiel wird ein [munder](/de/docs/Web/MathML/Element/munder)-Element verwendet, um ein Skript "A" an eine Basis "∑" anzuhängen. Standardmäßig wird das Summensymbol mit der vom übergeordneten Element geerbten [Schriftgröße](/de/docs/Web/CSS/font-size) und das "A" als verkleinertes Unterskript dargestellt. Mit dem expliziten Attribut `displaystyle="true"` wird das Summensymbol stattdessen größer gezeichnet und das "A" wird zu einem Unterskript.

```html
<math>
  <munder>
    <mo>∑</mo>
    <mi>A</mi>
  </munder>
  <munder displaystyle="true">
    <mo>∑</mo>
    <mi>A</mi>
  </munder>
</math>
```

## Syntax

```html-nolint
<math displaystyle="true"></math>
<math displaystyle="false"></math>
```

### Werte

- `true`
  - : Setzt den Darstellungsstil auf `normal`.
- `false`
  - : Setzt den Darstellungsstil auf `kompakt`.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- Das [scriptlevel](/de/docs/Web/MathML/Global_attributes/scriptlevel) globale Attribut.
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
