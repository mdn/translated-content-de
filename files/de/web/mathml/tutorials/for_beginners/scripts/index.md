---
title: MathML skriptbasierte Elemente
short-title: Skriptbasierte Elemente
slug: Web/MathML/Tutorials/For_beginners/Scripts
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}

Wir setzen die Überprüfung der grundlegenden mathematischen Notationen fort und konzentrieren uns auf den Aufbau von MathML-Elementen mit Skripten.

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

Sie sollten bemerken, dass:

- Das zweite Kind des `<msub>`-Elements als Index zu seinem ersten Kind angefügt wird.
- Das zweite Kind des `<msup>`-Elements als Hochstellung zu seinem ersten Kind angefügt wird.
- Die zweiten und dritten Kinder des `<msubsup>`-Elements werden entsprechend als Index und Hochstellung zu seinem ersten Kind angefügt.
- Der Text innerhalb der Skripte wird verkleinert.

> [!NOTE]
> Die MathML-Elemente `<msub>` und `<msup>` unterscheiden sich von den HTML-Elementen [`<sub>`](/de/docs/Web/HTML/Reference/Elements/sub) und [`<sup>`](/de/docs/Web/HTML/Reference/Elements/sup). Sie ermöglichen es den Autoren, beliebige MathML-Teilbäume als Skripte bereitzustellen, nicht nur Text.

## Unter- und Überschriften

Die `<munder>`, `<mover>` und `<munderover>` Elemente sind sehr ähnlich, außer dass sie verwendet werden, um Unterschriften und Überschriften zu verknüpfen. Anstatt Details zu geben, lassen wir Sie ihre Definitionen selbst mit der folgenden Übung herausfinden.

### Aktives Lernen: Erkennen von Unter-/Überschriften

Versuchen Sie im folgenden Beispiel, die Namen der mysteriösen Elemente (als Fragezeichen dargestellt) zu erraten und klicken Sie auf den Knopf, um die Lösung zu enthüllen:

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

### Aktives Lernen: Erkennen von skriptbasierten Elementen

Die folgende MathML-Formel enthält einen komplexeren Ausdruck, der Brüche, Wurzeln und Skripte verschachtelt. Versuchen Sie, die Elemente zu erraten, die mit den skriptbasierten Elementen `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` aufgebaut sind. Jedes Mal, wenn Sie auf ein solches Element klicken, wird es hervorgehoben und eine Bestätigungsmeldung angezeigt. Lesen Sie schließlich die MathML-Quelle, um zu überprüfen, ob dies Ihrer Erwartung entspricht.

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

Wir haben zuvor einige [Eigenschaften des `<mo>`-Elements](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers#operator_properties_of_mo) gesehen, nämlich Dehnung in vertikaler Richtung und Abstand. Jetzt, da Skriptelemente verfügbar sind, können wir diese Liste erweitern. Wir werden dies tun, indem wir unser [vorheriges Beispiel](#active_learning_recognize_scripted_elements) anpassen.

### Dehnung in horizontaler Richtung

Nehmen wir zuerst die Substitutionen <math><mi>β</mi><mo>≔</mo><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\beta := z*{1} + z*{2}</annotation></math> und <math><mi>α</mi><mo>≔</mo><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\alpha := v*{1} + v*{2}</annotation></math> vor:

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

Wir erkennen nun, dass die untere Klammer "⎵" und der Pfeil nach rechts "→" horizontal gestreckt werden, um die Breite der substituierten Werte zu decken. Denken Sie daran, dass [einige vertikale Operatoren gedehnt werden können](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers#active_learning_stretchy_operators), um die Höhe der nicht gedehnten Geschwister innerhalb eines `<mrow>` abzudecken. Ebenso können einige horizontale Operatoren gedehnt werden, um die Breite der nicht gedehnten Geschwister in einem `<munder>`, `<mover>` oder `<munderover>`-Element abzudecken.

> [!NOTE]
> Dehnung kann für jedes Kind des `<munder>`, `<mover>` oder `<munderover>`-Elements auftreten, nicht nur für die Unterschrift oder Überschrift.

### Großer Operator und Grenzwerte

Bisher wurde unser Beispiel tatsächlich mit dem Attribut [`display="block"`](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started#the_display_attribute) gerendert. Schauen wir uns dasselbe Beispiel an, wie es ohne dieses Attribut gerendert wird:

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

Wie erwartet, ist die Formel nicht mehr zentriert und die Darstellung wurde so verändert, dass die Höhe minimiert wird. Konzentriert man sich auf das Summenzeichen, so kann man feststellen, dass das Sigma kleiner gezeichnet wird und dass die Skripte des `<munderover>`-Elements jetzt als Index und Hochstellung angefügt sind! Dies liegt an zwei Eigenschaften des „∑“-Operators:

- _largeop_: Der Operator wird mit einem größeren Glyph gezeichnet, wenn das `<math>`-Tag ein `display="block"`-Attribut hat.
- _movablelimits_: Die an den Operator angefügten Unterschriften und Überschriften werden entsprechend als Index und Hochstellung gerendert, wenn das `<math>`-Tag nicht das `display="block"`-Attribut hat.

> [!NOTE]
> Die _largeop_-Eigenschaft hat tatsächlich keinen Bezug zu Skripten, obwohl Operatoren mit dieser Eigenschaft typischerweise geskriptet sind. Die _movablelimits_-Eigenschaft wird ebenfalls für `<munder>` und `<mover>`-Elemente berücksichtigt.

## Zusammenfassung

In diesem Artikel haben wir die grundlegende Layout-Übersicht abgeschlossen, indem wir die Elemente `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` für Tiefstellungen, Hochstellungen, Unterschriften und Überschriften eingeführt haben. Mithilfe dieser Elemente konnten wir kurz neue Eigenschaften des `<mo>`-Elements vorstellen. Im nächsten Artikel werden wir uns weiterhin auf das [tabellarische Layout](/de/docs/Web/MathML/Tutorials/For_beginners/Tables) konzentrieren.

## Siehe auch

- [Das `<msub>`-Element](/de/docs/Web/MathML/Reference/Element/msub)
- [Das `<msup>`-Element](/de/docs/Web/MathML/Reference/Element/msup)
- [Das `<msubsup>`-Element](/de/docs/Web/MathML/Reference/Element/msubsup)
- [Das `<munder>`-Element](/de/docs/Web/MathML/Reference/Element/munder)
- [Das `<mover>`-Element](/de/docs/Web/MathML/Reference/Element/mover)
- [Das `<munderover>`-Element](/de/docs/Web/MathML/Reference/Element/munderover)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}
