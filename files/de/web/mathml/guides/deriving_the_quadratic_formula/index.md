---
title: Herleitung der quadratischen Formel
short-title: Quadratische Formel
slug: Web/MathML/Guides/Deriving_the_quadratic_formula
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

Diese Seite beschreibt die Herleitung der [quadratischen Formel](https://en.wikipedia.org/wiki/Quadratic_formula). Neun Gleichungen sind im {{MathMLElement("mtable")}}-Element organisiert, um die Schritte der Herleitung nach dem Gleichheitszeichen auszurichten. Einige Schritte sind mit farbigem Text kommentiert. Die Herleitung wird auch im [LaTeX](https://www.latex-project.org/)-Format im {{MathMLElement("annotation")}}-Element dargestellt.

## Herleitung

Wir nehmen eine quadratische Gleichung in ihrer allgemeinen Form und lösen nach x auf.

{{ EmbedLiveSample("Derivation", "", "400px") }}

<!-- prettier-ignore-start -->
```html
<math display="block">
  <semantics>
    <mtable>
      <!-- Step one -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <mrow>
                <mrow>
                  <mi>a</mi>
                  <!-- Invisible times Unicode character -->
                  <mo>&#x2062;</mo>
                  <msup>
                    <mi>x</mi>
                    <mn>2</mn>
                  </msup>
                </mrow>
                <mo>+</mo>
                <mi>b</mi>
                <!-- Invisible times Unicode character -->
                <mo>&#x2062;</mo>
                <mi>x</mi>
              </mrow>
              <mo>+</mo>
              <mi>c</mi>
            </mrow>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <!-- Step two -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <mi>a</mi>
              <!-- Invisible times Unicode character -->
              <mo>&#x2062;</mo>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
            </mrow>
            <mo>+</mo>
            <mi>b</mi>
            <!-- Invisible times Unicode character -->
            <mo>&#x2062;</mo>
            <mi>x</mi>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mo>−</mo>
          <mi>c</mi>
        </mtd>
      </mtr>
      <!-- Step three -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <msup>
                <mi>x</mi>
                <mn>2</mn>
              </msup>
            </mrow>
            <mo>+</mo>
            <mfrac>
              <mi>b</mi>
              <mi>a</mi>
            </mfrac>
            <mo>⁤</mo>
            <mi>x</mi>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mfrac>
            <mrow>
              <mo>−</mo>
              <mi>c</mi>
            </mrow>
            <mi>a</mi>
          </mfrac>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation">Divide out leading coefficient.</mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- Step four -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <mrow>
                <msup>
                  <mi>x</mi>
                  <mn>2</mn>
                </msup>
              </mrow>
              <mo>+</mo>
              <mfrac>
                <mrow>
                  <mi>b</mi>
                </mrow>
                <mi>a</mi>
              </mfrac>
              <mo>⁤</mo>
              <mi>x</mi>
              <mo>+</mo>
              <msup>
                <mrow>
                  <mo>(</mo>
                  <mfrac>
                    <mrow>
                      <mi>b</mi>
                    </mrow>
                    <mrow>
                      <mn>2</mn>
                      <mi>a</mi>
                    </mrow>
                  </mfrac>
                  <mo>)</mo>
                </mrow>
                <mn>2</mn>
              </msup>
            </mrow>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mrow>
            <mfrac>
              <mrow>
                <mo>−</mo>
                <mi>c</mi>
                <mo>(</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mo>)</mo>
              </mrow>
              <mrow>
                <mi>a</mi>
                <mo>(</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mo>)</mo>
              </mrow>
            </mfrac>
            <mo>+</mo>
            <mfrac>
              <mrow>
                <msup>
                  <mi>b</mi>
                  <mn>2</mn>
                </msup>
              </mrow>
              <mrow>
                <mn>4</mn>
                <msup>
                  <mi>a</mi>
                  <mn>2</mn>
                </msup>
              </mrow>
            </mfrac>
          </mrow>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation">Complete the square.</mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- Step five -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <mo>(</mo>
              <mi>x</mi>
              <mo>+</mo>
              <mfrac>
                <mrow>
                  <mi>b</mi>
                </mrow>
                <mrow>
                  <mn>2</mn>
                  <mi>a</mi>
                </mrow>
              </mfrac>
              <mo>)</mo>
              <mo>(</mo>
              <mi>x</mi>
              <mo>+</mo>
              <mfrac>
                <mrow>
                  <mi>b</mi>
                </mrow>
                <mrow>
                  <mn>2</mn>
                  <mi>a</mi>
                </mrow>
              </mfrac>
              <mo>)</mo>
            </mrow>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mfrac>
            <mrow>
              <msup>
                <mi>b</mi>
                <mn>2</mn>
              </msup>
              <mo>−</mo>
              <mn>4</mn>
              <mi>a</mi>
              <mi>c</mi>
            </mrow>
            <mrow>
              <mn>4</mn>
              <msup>
                <mi>a</mi>
                <mn>2</mn>
              </msup>
            </mrow>
          </mfrac>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation">Discriminant revealed.</mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- Step six -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <msup>
                <mrow>
                  <mo>(</mo>
                  <mi>x</mi>
                  <mo>+</mo>
                  <mfrac>
                    <mrow>
                      <mi>b</mi>
                    </mrow>
                    <mrow>
                      <mn>2</mn>
                      <mi>a</mi>
                    </mrow>
                  </mfrac>
                  <mo>)</mo>
                </mrow>
                <mn>2</mn>
              </msup>
            </mrow>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mfrac>
            <mrow>
              <msup>
                <mi>b</mi>
                <mn>2</mn>
              </msup>
              <mo>−</mo>
              <mn>4</mn>
              <mi>a</mi>
              <mi>c</mi>
            </mrow>
            <mrow>
              <mn>4</mn>
              <msup>
                <mi>a</mi>
                <mn>2</mn>
              </msup>
            </mrow>
          </mfrac>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation"></mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- Step seven -->
      <mtr>
        <mtd>
          <mrow>
            <mrow>
              <mrow>
                <mi>x</mi>
                <mo>+</mo>
                <mfrac>
                  <mrow>
                    <mi>b</mi>
                  </mrow>
                  <mrow>
                    <mn>2</mn>
                    <mi>a</mi>
                  </mrow>
                </mfrac>
              </mrow>
            </mrow>
          </mrow>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <msqrt>
            <mfrac>
              <mrow>
                <msup>
                  <mi>b</mi>
                  <mn>2</mn>
                </msup>
                <mo>−</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mi>c</mi>
              </mrow>
              <mrow>
                <mn>4</mn>
                <msup>
                  <mi>a</mi>
                  <mn>2</mn>
                </msup>
              </mrow>
            </mfrac>
          </msqrt>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation"></mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- Step eight -->
      <mtr>
        <mtd>
          <mi>x</mi>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mfrac>
            <mrow>
              <mo>−</mo>
              <mi>b</mi>
            </mrow>
            <mrow>
              <mn>2</mn>
              <mi>a</mi>
            </mrow>
          </mfrac>
          <mo>±</mo>
          <mrow>
            <mo>{</mo>
            <mi>C</mi>
            <mo>}</mo>
          </mrow>
          <msqrt>
            <mfrac>
              <mrow>
                <msup>
                  <mi>b</mi>
                  <mn>2</mn>
                </msup>
                <mo>−</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mi>c</mi>
              </mrow>
              <mrow>
                <mn>4</mn>
                <msup>
                  <mi>a</mi>
                  <mn>2</mn>
                </msup>
              </mrow>
            </mfrac>
          </msqrt>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation">There's the vertex formula.</mtext>
          </mrow>
        </mtd>
      </mtr>
      <!-- Step nine -->
      <mtr>
        <mtd>
          <mi>x</mi>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <mfrac>
            <mrow>
              <mo>−</mo>
              <mi>b</mi>
              <mo>±</mo>
              <mrow>
                <mo>{</mo>
                <mi>C</mi>
                <mo>}</mo>
              </mrow>
              <msqrt>
                <msup>
                  <mi>b</mi>
                  <mn>2</mn>
                </msup>
                <mo>−</mo>
                <mn>4</mn>
                <mi>a</mi>
                <mi>c</mi>
              </msqrt>
            </mrow>
            <mrow>
              <mn>2</mn>
              <mi>a</mi>
            </mrow>
          </mfrac>
        </mtd>
        <mtd>
          <mrow>
            <mtext class="explanation"></mtext>
          </mrow>
        </mtd>
      </mtr>
    </mtable>
    <!-- Representation in TeX format -->
    <annotation encoding="application/x-tex">
      \begin{aligned}
      ax^2 + bx + c &= 0 \\
      ax^2 + bx &= -c \\
      x^2 + \frac{b}{a}x &= -\frac{c}{a} & \text{\color{red} \small Divide out leading coefficient.} \\
      x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^2 &= \frac{-c(4a)}{a(4a)} + \frac{b^2}{4a^2} & \text{\color{red} \small Complete the square.} \\
      \left(x + \frac{b}{2a}\right)\left(x + \frac{b}{2a}\right) &= \frac{b^2 - 4ac}{4a^2} & \text{\color{red} \small Discriminant revealed.} \\
      \left(x + \frac{b}{2a}\right)^2 &= \frac{b^2 - 4ac}{4a^2} \\
      x + \frac{b}{2a} &= \sqrt{\frac{b^2 - 4ac}{4a^2}} \\
      x &= \frac{-b}{2a} \pm \{C\} \sqrt{\frac{b^2 - 4ac}{4a^2}} & \text{\color{red} \small There's the vertex formula.} \\
      x &= \frac{-b \pm \{C\}\sqrt{b^2 - 4ac}}{2a}
      \end{aligned}
    </annotation>
  </semantics>
</math>
```
<!-- prettier-ignore-end -->

```css
.explanation {
  color: red;
  font-size: smaller;
}
```
