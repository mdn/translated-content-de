---
title: Beweis des Satzes des Pythagoras
slug: Web/MathML/Examples/MathML_Pythagorean_Theorem
l10n:
  sourceCommit: 9f325923caffac2d0239773d4562303fd02ea30a
---

{{MathMLRef}}

Wir werden nun den [Satz des Pythagoras](https://en.wikipedia.org/wiki/Pythagorean_theorem) beweisen:

**Aussage**: In einem rechtwinkligen Dreieck ist das Quadrat der Hypotenuse gleich der Summe der Quadrate der beiden anderen Seiten. Genauer gesagt, wenn <math><mi>a</mi></math> und <math><mi>b</mi></math> die Katheten und <math><mi>c</mi></math> die Hypotenuse sind, dann gilt <math><semantics><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="TeX">a^2 + b^2 = c^2</annotation></semantics></math>.

**Beweis:** Wir können den Satz algebraisch beweisen, indem wir zeigen, dass auf [dieser Abbildung](https://www.cut-the-knot.org/pythagoras/proof31.gif) die Fläche des großen Quadrats der Fläche des inneren Quadrats (Hypotenuse zum Quadrat) plus der Fläche der vier Dreiecke entspricht:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mtable><mtr><mtd><msup><mrow><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo></mrow><mn>2</mn></msup></mtd><mtd><mo>=</mo></mtd><mtd><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mo>⋅</mo><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><mi>b</mi><mo>)</mo></mtd></mtr><mtr><mtd><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mi>b</mi><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd><mo>=</mo></mtd><mtd><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mi>b</mi></mtd></mtr><mtr><mtd><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd><mo>=</mo></mtd><mtd><msup><mi>c</mi><mn>2</mn></msup></mtd></mtr></mtable><annotation encoding="TeX">\begin{align*} (a + b)^2 &= c^2 + 4 \cdot \left( \frac{1}{2} ab \right) \\ a^2 + 2ab + b^2 &= c^2 + 2ab \\ a^2 + b^2 &= c^2 \end{align*}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->
