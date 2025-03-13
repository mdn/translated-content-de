---
title: MathML-Elemente mit Skripts
short-title: Elemente mit Skripts
slug: Web/MathML/Tutorials/For_beginners/Scripts
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}

Wir setzen die Überprüfung grundlegender mathematischer Notationen fort und konzentrieren uns darauf, MathML-Elemente mit Skripts zu erstellen.

## Tief- und Hochstellungen

Ähnlich wie im [vorherigen Artikel](/de/docs/Web/MathML/Tutorials/For_beginners/Fractions_and_roots) gesehen, haben `<msub>`, `<msup>` und `<msubsup>` eine spezielle Struktur, die genau zwei Elemente (für `<msub>`, `<msup>`) oder drei Elemente (für `<msubsup>`) erwartet:

```html
<p>
  msub:
  <math>
    <msub>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </msub>
  </math>
</p>

<p>
  msup:
  <math>
    <msup>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </msup>
  </math>
</p>
<p>
  msubsup:
  <math>
    <msubsup>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
      <mtext>child3</mtext>
    </msubsup>
  </math>
</p>
```

Nachfolgend die Darstellung des obigen Beispiels in Ihrem Browser.

{{ EmbedLiveSample('Subtrees_of_msub_msup_msubsup', 700, 200, "", "") }}

Sie sollten beachten, dass:

- Das zweite Kind des `<msub>`-Elements als Tiefstellung an sein erstes Kind angehängt wird.
- Das zweite Kind des `<msup>`-Elements als Hochstellung an sein erstes Kind angehängt wird.
- Das zweite und dritte Kind des `<msubsup>`-Elements sind jeweils als Tief- bzw. Hochstellung an sein erstes Kind angehängt.
- Der Text innerhalb der Skripte ist verkleinert dargestellt.

> [!NOTE]
> Die MathML-Elemente `<msub>` und `<msup>` unterscheiden sich von den HTML-Elementen [`<sub>`](/de/docs/Web/HTML/Element/sub) und [`<sup>`](/de/docs/Web/HTML/Element/sup). Sie ermöglichen es den Autoren, beliebige MathML-Unterbäume als Skripte bereitzustellen, nicht nur Text.

## Unter- und Überschriften

Die Elemente `<munder>`, `<mover>` und `<munderover>` sind sehr ähnlich, mit dem Unterschied, dass sie verwendet werden, um Unter- und Überschriften anzuhängen. Anstatt ins Detail zu gehen, lassen wir Sie ihre Definitionen selbst herausfinden mit der folgenden Übung.

### Aktives Lernen: Unter- und Überschriften erkennen

Versuchen Sie im folgenden Beispiel, die Namen der geheimen Elemente (als Fragezeichen geschrieben) zu erraten, und klicken Sie auf den Button, um die Lösung anzuzeigen:

```html hidden
<p>
  <code>&lt;<span>????????</span>&gt;</code> element with exactly two children
  (child1, child2):
  <math>
    <mover>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </mover>
  </math>
</p>
<p>
  <code>&lt;<span>????????</span>&gt;</code> element with exactly three children
  (child1, child2 and child3):
  <math>
    <munderover>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
      <mtext>child3</mtext>
    </munderover>
  </math>
</p>
<p>
  <code>&lt;<span>????????</span>&gt;</code> element with exactly two children
  (child1, child2):
  <math>
    <munder>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </munder>
  </math>
</p>

<p><input type="button" id="showSolution" value="Show solution" /></p>
```

```css hidden
p {
  padding: 0.5em;
}
```

```js hidden
document.getElementById("showSolution").addEventListener("click", () => {
  const maths = Array.from(document.getElementsByTagName("math"));
  Array.from(document.getElementsByTagName("span")).forEach((span, index) => {
    span.textContent = maths[index].firstElementChild.tagName;
  });
});
```

{{ EmbedLiveSample('Subtrees_of_munder_mover_munderover', 700, 400, "", "") }}

### Aktives Lernen: Elemente mit Skripts erkennen

Die folgende MathML-Formel enthält einen komplexeren Ausdruck, der Brüche, Wurzeln und Skripte verschachtelt. Versuchen Sie, die mit den Elementen `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` gestalteten Elemente zu erraten. Jedes Mal, wenn Sie ein solches Element anklicken, wird es hervorgehoben und eine Bestätigungsmeldung angezeigt. Lesen Sie schließlich den MathML-Quelltext, um zu überprüfen, ob dies Ihren Erwartungen entspricht.

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with scripted elements</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mroot>
        <mrow>
          <munder>
            <mi>β</mi>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mi>α</mi>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
    <input type="button" id="clearOutput" value="Reset" />
    <div id="output"></div>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

```js hidden
const scriptedElements = Array.from(
  document.querySelectorAll("msub, msup, msubsup, munder, mover, munderover"),
);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  scriptedElements.forEach((scripted) => {
    scripted.classList.remove("highlight");
  });
}
scriptedElements.forEach((scripted) => {
  scripted.addEventListener("click", () => {
    clearHighlight();
    scripted.classList.add("highlight");
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong>You clicked an <code>&lt;${scripted.tagName}&gt;</code> element.</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.textContent = "";
});
```

{{ EmbedLiveSample('Active_learning_recognize_scripted_elements', 700, 400, "", "") }}

## Weitere Eigenschaften von Operatoren

Wir haben zuvor einige [Eigenschaften des `<mo>`-Elements](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers#operator_properties_of_mo) gesehen, nämlich das Strecken in vertikaler Richtung und Abstände. Nun da Elemente mit Skripts zur Verfügung stehen, können wir diese Liste erweitern. Wir tun dies, indem wir unser [früheres Beispiel](#active_learning_recognize_scripted_elements) anpassen.

### Strecken in horizontaler Richtung

Lassen Sie uns zunächst die Substitutionen <math><mi>β</mi><mo>≔</mo><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\beta := z*{1} + z*{2}</annotation></math> und <math><mi>α</mi><mo>≔</mo><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\alpha := v*{1} + v*{2}</annotation></math> durchführen:

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with horizontal stretchy operators</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mroot>
        <mrow>
          <munder>
            <mrow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mrow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

{{ EmbedLiveSample('Stretching_in_horizontal_direction', 700, 200, "", "") }}

Wir erkennen nun, dass die untere Klammer "⎵" und der rechte Pfeil "→" sich horizontal erstrecken, um die Breite der eingesetzten Werte abzudecken. Erinnern Sie sich daran, dass [einige vertikale Operatoren sich strecken lassen](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers#active_learning_stretchy_operators), um die Höhe nicht-streckbarer Geschwister innerhalb eines `<mrow>`-Elements abzudecken. Ähnlich können einige horizontale Operatoren sich strecken, um die Breite nicht-streckbarer Geschwister in einem `<munder>`, `<mover>` oder `<munderover>`-Element abzudecken.

> [!NOTE]
> Strecken kann bei jedem Kind des `<munder>`, `<mover>` oder `<munderover>`-Elements auftreten, nicht nur bei der Unter- oder Überschrift.

### Großoperatoren und Grenzen

Bisher wurde unser Beispiel tatsächlich mit dem Attribut [`display="block"`](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started#the_display_attribute) gerendert. Lassen Sie uns dasselbe Beispiel betrachten, wie es ohne dieses Attribut gerendert wird:

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with moved limits and small largeop</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math>
      <mroot>
        <mrow>
          <munder>
            <mrow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mrow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

{{ EmbedLiveSample('Large_operator_and_limits', 700, 200, "", "") }}

Wie erwartet ist die Formel nicht mehr zentriert, und die Darstellung wurde modifiziert, um die Höhe zu minimieren. Wenn man sich auf das Summenzeichen konzentriert, bemerkt man, dass das Sigma kleiner gezeichnet ist und dass die Skripte des `<munderover>`-Elements nun als Tief- und Hochstellungen angehängt sind! Dies liegt an zwei Eigenschaften des "∑"-Operators:

- _largeop_: Der Operator wird mit einem größeren Glyphen gezeichnet, wenn das `<math>`-Tag ein `display="block"`-Attribut hat.
- _movablelimits_: Die an den Operator angehängten Unter- und Überschriften werden jeweils als Tief- und Hochstellungen gerendert, wenn das `<math>`-Tag nicht das `display="block"`-Attribut hat.

> [!NOTE]
> Die _largeop_ Eigenschaft ist tatsächlich unabhängig von Skripts, obwohl Operatoren mit dieser Eigenschaft typischerweise geskriptet sind. Die _movablelimits_ Eigenschaft wird auch bei `<munder>` und `<mover>`-Elementen berücksichtigt.

## Zusammenfassung

In diesem Artikel haben wir die Überprüfung grundlegender Layouts abgeschlossen und dabei die Elemente `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>` und `<munderover>` für Tiefstellen, Hochstellen, Unterstellen und Überstellen eingeführt. Mithilfe dieser Elemente konnten wir kurz neue Eigenschaften des `<mo>`-Elements einführen. Im nächsten Artikel werden wir uns weiterhin auf [tabellarische Layouts](/de/docs/Web/MathML/Tutorials/For_beginners/Tables) konzentrieren.

## Siehe auch

- [Das `<msub>`-Element](/de/docs/Web/MathML/Reference/Element/msub)
- [Das `<msup>`-Element](/de/docs/Web/MathML/Reference/Element/msup)
- [Das `<msubsup>`-Element](/de/docs/Web/MathML/Reference/Element/msubsup)
- [Das `<munder>`-Element](/de/docs/Web/MathML/Reference/Element/munder)
- [Das `<mover>`-Element](/de/docs/Web/MathML/Reference/Element/mover)
- [Das `<munderover>`-Element](/de/docs/Web/MathML/Reference/Element/munderover)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}
