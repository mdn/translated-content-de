---
title: MathML-Skript-Elemente
short-title: Scripted elements
slug: Web/MathML/Tutorials/For_beginners/Scripts
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}

Wir setzen die Übersicht der grundlegenden mathematischen Notationen fort und konzentrieren uns auf den Aufbau von MathML-Elementen mit Skripten.

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

Unten sehen Sie die Darstellung des obigen Beispiels in Ihrem Browser.

{{ EmbedLiveSample('Subtrees_of_msub_msup_msubsup', 700, 200, "", "") }}

Sie sollten bemerken:

- Das zweite Kind des `<msub>`-Elements ist als Tiefstellung an sein erstes Kind angefügt.
- Das zweite Kind des `<msup>`-Elements ist als Hochstellung an sein erstes Kind angefügt.
- Die zweiten und dritten Kinder des `<msubsup>`-Elements sind als Tief- und Hochstellung an sein erstes Kind angefügt.
- Der Text innerhalb von Skripten ist verkleinert.

> [!NOTE]
> Die MathML-Elemente `<msub>` und `<msup>` unterscheiden sich von den HTML-Elementen [`<sub>`](/de/docs/Web/HTML/Reference/Elements/sub) und [`<sup>`](/de/docs/Web/HTML/Reference/Elements/sup). Sie ermöglichen Autoren, beliebige MathML-Teilbäume als Skripte bereitzustellen, nicht nur Text.

## Unter- und Überschriften

Die `<munder>`, `<mover>` und `<munderover>`-Elemente sind sehr ähnlich, außer dass sie verwendet werden, um Unterschriften und Überschriftungen anzufügen. Anstatt Details zu geben, lassen wir Sie ihre Definitionen selbst herausfinden mit der folgenden Übung.

### Erkennen von Unter-/Überschriften

Versuchen Sie im folgenden Beispiel, die Namen der geheimnisvollen Elemente (als Fragezeichen geschrieben) zu erraten und klicken Sie auf die Schaltfläche, um die Lösung zu enthüllen:

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

{{ EmbedLiveSample('Recognizing under/over scripts', 700, 400, "", "") }}

### Erkennen von Skript-Elementen

Die folgende MathML-Formel enthält einen komplexeren Ausdruck, der Brüche, Wurzeln und Skripte verschachtelt. Versuchen Sie, die Elemente zu erraten, die mit den Skript-Elementen `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` ausgelegt sind. Jedes Mal, wenn Sie auf ein solches Element klicken, wird es hervorgehoben und eine Bestätigungsnachricht angezeigt. Lesen Sie schließlich die MathML-Quelle, um zu überprüfen, ob dies Ihrer Erwartung entspricht.

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

{{ EmbedLiveSample('Recognizing scripted elements', 700, 400, "", "") }}

## Weitere Operator-Eigenschaften

Wir haben zuvor einige [Eigenschaften des `<mo>`-Elements](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers#operator_properties_of_mo) gesehen, nämlich das Strecken in vertikaler Richtung und den Abstand. Da nun Skript-Elemente verfügbar sind, können wir diese Liste erweitern. Wir werden dies tun, indem wir unser [vorheriges Beispiel](#erkennen_von_skript-elementen) anpassen.

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

Wir erkennen nun, dass die untere Klammer "⎵" und der Rechtspfeil "→" sich horizontal strecken, um die Breite der substituierten Werte abzudecken. Erinnern Sie sich daran, dass [einige vertikale Operatoren sich strecken können](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers#recognizing_stretchy_operators), um die Höhe nicht-streckbarer Geschwister innerhalb eines `<mrow>` abzudecken. Ähnlich können einige horizontale Operatoren sich strecken, um die Breite nicht-streckbarer Geschwister in einem `<munder>`, `<mover>` oder `<munderover>`-Element abzudecken.

> [!NOTE]
> Das Strecken kann für jedes Kind des `<munder>`, `<mover>` oder `<munderover>`-Elements geschehen, nicht nur für die Unterschrift oder Überschrift.

### Großer Operator und Grenzwerte

Bisher wurde unser Beispiel tatsächlich mit dem Attribut [`display="block"`](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started#the_display_attribute) gerendert. Schauen wir das gleiche Beispiel an, wie es ohne dieses Attribut gerendert wird:

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

Wie erwartet, ist die Formel nicht mehr zentriert und die Darstellung wird geändert, um die Höhe zu minimieren. Blickt man auf das Summenzeichen, kann man feststellen, dass das Sigma kleiner gezeichnet ist und dass die Skripte des `<munderover>`-Elements jetzt als Tief- und Hochstellung angefügt sind! Dies liegt an zwei Eigenschaften des „∑“-Operators:

- _largeop_: Der Operator wird mit einem größeren Glyph dargestellt, wenn das `<math>`-Tag ein `display="block"`-Attribut hat.
- _movablelimits_: Die Unterschriften und Überschriften, die am Operator angehängt sind, werden als Tief- und Hochstellungen dargestellt, wenn das `<math>`-Tag nicht das `display="block"`-Attribut hat.

> [!NOTE]
> Die _largeop_-Eigenschaft ist eigentlich unabhängig von Skripten, obwohl Operatoren, die diese Eigenschaft haben, typischerweise geskriptet sind. Die _movablelimits_-Eigenschaft wird auch für `<munder>` und `<mover>`-Elemente berücksichtigt.

## Zusammenfassung

In diesem Artikel haben wir die grundlegende Layout-Überprüfung abgeschlossen und die Elemente `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` für Tiefstellungen, Hochstellungen, Unterschriften und Überschriften eingeführt. Mit diesen Elementen konnten wir kurz neue Eigenschaften des `<mo>`-Elements einführen. Im nächsten Artikel werden wir uns weiter auf das [tabellarische Layout](/de/docs/Web/MathML/Tutorials/For_beginners/Tables) konzentrieren.

## Siehe auch

- [Das `<msub>`-Element](/de/docs/Web/MathML/Reference/Element/msub)
- [Das `<msup>`-Element](/de/docs/Web/MathML/Reference/Element/msup)
- [Das `<msubsup>`-Element](/de/docs/Web/MathML/Reference/Element/msubsup)
- [Das `<munder>`-Element](/de/docs/Web/MathML/Reference/Element/munder)
- [Das `<mover>`-Element](/de/docs/Web/MathML/Reference/Element/mover)
- [Das `<munderover>`-Element](/de/docs/Web/MathML/Reference/Element/munderover)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}
