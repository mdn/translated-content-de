---
title: href
slug: Web/MathML/Global_attributes/href
l10n:
  sourceCommit: 56a27a0d3cf032771a715fee27ce5325ba859606
---

{{MathMLRef}}{{Non-standard_header}}

Das **`href`** [Globale Attribut](/de/docs/Web/MathML/Global_attributes) erstellt einen Hyperlink auf dem MathML-Element, der auf die angegebene URL verweist.

## Beispiel

Die erste Gleichung verlinkt auf den Wikipedia-Artikel über die [Massen-Energie-Äquivalenz](https://en.wikipedia.org/wiki/Mass-energy_equivalence). Der Wurzelteil der zweiten Gleichung ist ein Link zur [SageMath](https://sagecell.sagemath.org/?z=eJwrLiwq0TCOM9I2iTPSBAAeqgPO) Berechnung.

> [!NOTE]
> Sie sollten vermeiden, MathML-Elemente mit den `href`-Attributen zu verschachteln, genau wie {{htmlelement("a")}}-Elemente, da dies zu Benutzerverwirrung und Zugänglichkeitsproblemen führen kann.

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
<math
  display="block"
  href="https://en.wikipedia.org/wiki/Mass-energy_equivalence">
  <mrow>
    <mi>E</mi>
    <mo>=</mo>
    <mi>m</mi>
    <msup>
      <mi>c</mi>
      <mn>2</mn>
    </msup>
  </mrow>
</math>

<math display="block">
  <mi>c</mi>
  <mo>=</mo>
  <msqrt href="https://sagecell.sagemath.org/?z=eJwrLiwq0TCOM9I2iTPSBAAeqgPO">
    <msup>
      <mn>3</mn>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mn>4</mn>
      <mn>2</mn>
    </msup>
  </msqrt>
  <mo>=</mo>
  <mn>5</mn>
</math>
```

{{ EmbedLiveSample("Example", "", 150) }}

## Syntax

```html-nolint
<math href="https://example.com/">
```

### Werte

- `URL`
  - : Die URL, auf die der Hyperlink verweist.

## Spezifikationen

Das `href`-Attribut ist in keiner browserorientierten Spezifikation definiert, aber Sie können eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#interf_link) finden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
