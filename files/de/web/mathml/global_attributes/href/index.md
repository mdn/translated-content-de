---
title: href
slug: Web/MathML/Global_attributes/href
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}{{Non-standard_header}}

Das **`href`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) erstellt einen Hyperlink auf dem MathML-Element, der auf die angegebene URL verweist.

## Beispiel

```html
<!-- Machen Sie diese mathematische Gleichung zu einem Link zum Wikipedia-Artikel
     über den Satz von Pythagoras. -->
<math href="https://en.wikipedia.org/wiki/Pythagorean_theorem">
  <mi>c</mi>
  <mo>=</mo>
  <!-- Machen Sie diese Quadratwurzel zu einem Link zur entsprechenden
       Berechnung in SageMath. -->
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

## Spezifikationen

Das `href`-Attribut ist in keiner browserorientierten Spezifikation definiert, aber Sie finden eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#interf_link).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
