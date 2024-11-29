---
title: displaystyle
slug: Web/MathML/Global_attributes/displaystyle
l10n:
  sourceCommit: 56a27a0d3cf032771a715fee27ce5325ba859606
---

{{MathMLRef}}

Das **`displaystyle`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) ist eine boolesche Einstellung, die den [math-style](/de/docs/Web/CSS/math-style) eines MathML-Elements festlegt.

## Beispiel

In diesem Beispiel wird ein [munder](/de/docs/Web/MathML/Element/munder)-Element verwendet, um ein Skript "A" an eine Basis "∑" anzuhängen. Standardmäßig wird das Summensymbol mit der vom übergeordneten Element geerbten [font-size](/de/docs/Web/CSS/font-size) dargestellt und das "A" als verkleinertes Subscript. Mit dem expliziten `displaystyle="true"`-Attribut wird das Summensymbol stattdessen größer gezeichnet und das "A" wird zu einem Unterscript.

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
  - : Setzt den Anzeige-Stil auf `normal`.
- `false`
  - : Setzt den Anzeige-Stil auf `compact`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- Das [scriptlevel](/de/docs/Web/MathML/Global_attributes/scriptlevel) globale Attribut.
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
