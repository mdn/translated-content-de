---
title: href
slug: Web/MathML/Reference/Global_attributes/href
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{Non-standard_header}}

Das globale Attribut **`href`** erstellt auf einem MathML-Element einen Hyperlink, der auf die angegebene URL verweist. Das Setzen von `href` auf MathML-Elementen außer {{MathMLElement("a")}} ist veraltet; Sie sollten das Element {{MathMLElement("a")}} verwenden, um Hyperlinks innerhalb von MathML-Inhalten zu erstellen.

## Beispiel

Die erste Gleichung verlinkt auf den Wikipedia-Artikel über die [Masse-Energie-Äquivalenz](https://en.wikipedia.org/wiki/Mass-energy_equivalence). Der Quadratwurzelteil der zweiten Gleichung ist ein Link zur [SageMath](https://sagecell.sagemath.org/?z=eJwrLiwq0TCOM9I2iTPSBAAeqgPO)-Berechnung.

> [!NOTE]
> Sie sollten das Verschachteln von MathML-Elementen mit den Attributen `href` vermeiden, ebenso wie bei {{htmlelement("a")}}-Elementen, da dies zu Verwirrung bei Benutzern und zu Barrierefreiheitsproblemen führt.

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

Das Attribut `href` ist in keiner browserorientierten Spezifikation definiert, aber Sie finden eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#interf_link).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
