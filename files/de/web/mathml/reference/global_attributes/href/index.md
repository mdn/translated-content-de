---
title: href
slug: Web/MathML/Reference/Global_attributes/href
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{Non-standard_header}}

Das **`href`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) erstellt einen Hyperlink auf dem MathML-Element, der auf die angegebene URL zeigt.

## Beispiel

Die erste Gleichung verlinkt auf den Wikipedia-Artikel über die [Äquivalenz von Masse und Energie](https://en.wikipedia.org/wiki/Mass-energy_equivalence). Der Quadratwurzelteil der zweiten Gleichung ist ein Link zu der [SageMath](https://sagecell.sagemath.org/?z=eJwrLiwq0TCOM9I2iTPSBAAeqgPO) Berechnung.

> [!NOTE]
> Sie sollten vermeiden, MathML-Elemente mit dem `href`-Attribut zu verschachteln, genau wie {{htmlelement("a")}}-Elemente, da dies zu Verwirrung bei Benutzern und Barrierefreiheitsproblemen führen kann.

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

Das `href`-Attribut ist in keiner browserorientierten Spezifikation definiert, aber eine Beschreibung finden Sie in [MathML 4](https://w3c.github.io/mathml/#interf_link).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
