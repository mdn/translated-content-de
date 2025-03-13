---
title: Beweis des Satzes des Pythagoras
short-title: Satz des Pythagoras
slug: Web/MathML/Guides/Proving_the_Pythagorean_theorem
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Diese Seite skizziert den Beweis des [Satzes des Pythagoras](https://en.wikipedia.org/wiki/Pythagorean_theorem). Drei Gleichungen sind im {{MathMLElement("mtable")}}-Element angeordnet, um die Schritte des Beweises durch das Gleichheitszeichen zu gliedern. Der Beweis wird auch im [LaTeX](https://www.latex-project.org/)-Format im {{MathMLElement("annotation")}}-Element dargestellt.

## Beweis

**Aussage:** In einem rechtwinkligen Dreieck ist das Quadrat der Hypotenuse gleich der Summe der Quadrate der anderen beiden Seiten. Insbesondere gilt, wenn <math><mi>a</mi></math> und <math><mi>b</mi></math> die Katheten sind und <math><mi>c</mi></math> die Hypotenuse ist, dann <math><semantics><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">a^2 + b^2 = c^2</annotation></semantics></math>.

**Beweis:** Wir können den Satz algebraisch beweisen, indem wir zeigen, dass in [dieser Abbildung](https://www.cut-the-knot.org/pythagoras/proof31.gif) die Fläche des großen Quadrats gleich der Fläche des inneren Quadrats (Hypotenuse im Quadrat) plus der Fläche der vier Dreiecke ist:

{{ EmbedLiveSample("Proof", "", "100px") }}

<!-- prettier-ignore-start -->
```html
<math display="block">
  <semantics>
    <mtable>
      <!-- Step one -->
      <mtr>
        <mtd>
          <msup>
            <mrow>
              <mo>(</mo>
              <mi>a</mi>
              <mo>+</mo>
              <mi>b</mi>
              <mo>)</mo>
            </mrow>
            <mn>2</mn>
          </msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <msup>
            <mi>c</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mn>4</mn>
          <mo>⋅</mo>
          <mo>(</mo>
          <mfrac>
            <mn>1</mn>
            <mn>2</mn>
          </mfrac>
          <mi>a</mi>
          <mi>b</mi>
          <mo>)</mo>
        </mtd>
      </mtr>
      <!-- Step two -->
      <mtr>
        <mtd>
          <msup>
            <mi>a</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mn>2</mn>
          <mi>a</mi>
          <mi>b</mi>
          <mo>+</mo>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <msup>
            <mi>c</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mn>2</mn>
          <mi>a</mi>
          <mi>b</mi>
        </mtd>
      </mtr>
      <!-- Step three -->
      <mtr>
        <mtd>
          <msup>
            <mi>a</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <msup>
            <mi>c</mi>
            <mn>2</mn>
          </msup>
        </mtd>
      </mtr>
    </mtable>
    <!-- Representation in TeX format -->
    <annotation encoding="application/x-tex">
      \begin{aligned}
      (a + b)^2 &= c^2 + 4 \cdot \left( \frac{1}{2} ab \right) \\
      a^2 + 2ab + b^2 &= c^2 + 2ab \\
      a^2 + b^2 &= c^2
      \end{aligned}
    </annotation>
  </semantics>
</math>
```
<!-- prettier-ignore-end -->
