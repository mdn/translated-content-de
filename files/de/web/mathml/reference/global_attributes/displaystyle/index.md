---
title: displaystyle
slug: Web/MathML/Reference/Global_attributes/displaystyle
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`displaystyle`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) ist ein boolesches Attribut, das den [math-style](/de/docs/Web/CSS/Reference/Properties/math-style) eines MathML-Elements festlegt.

## Beispiel

In diesem Beispiel wird ein [munder](/de/docs/Web/MathML/Reference/Element/munder)-Element verwendet, um ein Skript "A" an eine Basis "∑" anzuhängen. Standardmäßig wird das Summensymbol mit der vom übergeordneten Element geerbten [Schriftgröße](/de/docs/Web/CSS/Reference/Properties/font-size) dargestellt und das "A" als verkleinertes Subscript. Mit dem expliziten Attribut `displaystyle="true"` wird das Summensymbol stattdessen größer gezeichnet und das "A" wird zu einem Unterskript.

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

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

{{ EmbedLiveSample("Example", "", 150) }}

## Syntax

```html-nolint
<math displaystyle="true">
<math displaystyle="false">
```

### Werte

- `true`
  - : Setzt den Anzeigestil auf `normal`.
- `false`
  - : Setzt den Anzeigestil auf `compact`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- Das globale Attribut [scriptlevel](/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel).
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
