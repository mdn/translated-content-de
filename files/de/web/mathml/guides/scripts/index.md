---
title: Skriptelemente in MathML
slug: Web/MathML/Guides/Scripts
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

{{PreviousMenuNext("Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides/Tables", "Web/MathML/Guides")}}

Wir setzen die Überprüfung grundlegender mathematischer Notationen fort und konzentrieren uns auf den Aufbau von MathML-Elementen mit Skripts.

## Tief- und Hochstellungen

Ähnlich wie im [vorherigen Artikel](/de/docs/Web/MathML/Guides/Fractions_and_roots) gesehen, haben `<msub>`, `<msup>` und `<msubsup>` eine spezielle Struktur, die genau zwei Elemente (für `<msub>`, `<msup>`) oder drei Elemente (für `<msubsup>`) erwartet:

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

- Das zweite Kind des `<msub>`-Elements als Tiefstellung an das erste Kind angehängt wird.
- Das zweite Kind des `<msup>`-Elements als Hochstellung an das erste Kind angehängt wird.
- Die zweiten und dritten Kinder des `<msubsup>`-Elements werden jeweils als Tiefstellung und Hochstellung ihres ersten Kindes angehängt.
- Der Text innerhalb der Skripts wird verkleinert.

> [!NOTE]
> Die MathML-Elemente `<msub>` und `<msup>` unterscheiden sich von den HTML-Elementen [`<sub>`](/de/docs/Web/HTML/Element/sub) und [`<sup>`](/de/docs/Web/HTML/Element/sup). Sie ermöglichen es Autoren, beliebige MathML-Subbäume als Skripts bereitzustellen, nicht nur Text.

## Unter- und Überschriften

Die `<munder>`, `<mover>` und `<munderover>`-Elemente sind sehr ähnlich, außer dass sie zum Anfügen von Unter- und Überschriften verwendet werden. Anstatt Details zu geben, lassen wir Sie ihre Definitionen selbst mit der folgenden Übung herausfinden.

### Aktives Lernen: Erkennen von Unter-/Über-Schriften

Versuchen Sie im folgenden Beispiel, die Namen der geheimnisvollen Elemente (als Fragezeichen dargestellt) zu erraten und klicken Sie auf die Schaltfläche, um die Lösung anzuzeigen:

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

### Aktives Lernen: Erkennen von Skriptelementen

Die folgende MathML-Formel enthält einen komplexeren Ausdruck, der Brüche, Wurzeln und Skripte verschachtelt. Versuchen Sie, die mit Skriptelementen `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` angelegten Elemente zu erraten. Jedes Mal, wenn Sie auf ein solches Element klicken, wird es hervorgehoben und eine Bestätigungsmeldung angezeigt. Lesen Sie schließlich die MathML-Quelle, um zu überprüfen, ob diese Ihrer Erwartung entspricht.

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

Wir haben zuvor einige [Eigenschaften des `<mo>`-Elements](/de/docs/Web/MathML/Guides/Text_containers#operator_properties_of_mo) gesehen, nämlich das Strecken in vertikaler Richtung und das Abstandhalten. Jetzt, da Skriptelemente verfügbar sind, können wir diese Liste erweitern. Das werden wir tun, indem wir unser [vorheriges Beispiel](#active_learning_recognize_scripted_elements) anpassen.

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

Wir bemerken nun, dass die untere Klammer "⎵" und der nach rechts gerichtete Pfeil "→" sich horizontal dehnen, um die Breite der Ersatzwerte abzudecken. Denken Sie daran, dass [einige vertikale Operatoren sich strecken können](/de/docs/Web/MathML/Guides/Text_containers#active_learning_stretchy_operators), um die Höhe nicht dehnbarer Geschwister innerhalb eines `<mrow>` abzudecken. Ebenso können sich einige horizontale Operatoren strecken, um die Breite nicht dehnbarer Geschwister in einem `<munder>`, `<mover>` oder `<munderover>`-Element abzudecken.

> [!NOTE]
> Das Strecken kann für jedes Kind des `<munder>`, `<mover>` oder `<munderover>`-Elements auftreten, nicht nur für die Unter- oder Überschrift.

### Große Operatoren und Grenzen

Bisher wurde unser Beispiel tatsächlich mit dem Attribut [`display="block"`](/de/docs/Web/MathML/Guides/Getting_started#the_display_attribute) gerendert. Schauen Sie sich das gleiche Beispiel an, wie es ohne dieses Attribut gerendert wird:

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

Wie erwartet ist die Formel nicht mehr zentriert und die Darstellung ist so verändert, dass die Höhe minimiert wird. Konzentrieren Sie sich auf das Summationssymbol, dann werden Sie bemerken, dass das Sigma kleiner gezeichnet ist und dass die Skripts des `<munderover>`-Elements nun als Tiefstellung und Hochstellung angefügt sind! Dies ist aufgrund zweier Eigenschaften des "∑"-Operators:

- _largeop_: Der Operator wird mit einem größeren Glyph dargestellt, wenn das `<math>`-Tag ein `display="block"`-Attribut hat.
- _movablelimits_: Wenn das `<math>`-Tag kein `display="block"`-Attribut hat, werden die Unter- und Überschriften des Operators als Tiefstellung und Hochstellung dargestellt.

> [!NOTE]
> Die _largeop_-Eigenschaft ist eigentlich nicht mit Skripts verwandt, obwohl Operatoren, die diese Eigenschaft haben, typischerweise Skriptunterstützung anbieten. Die _movablelimits_-Eigenschaft wird auch bei `<munder>`- und `<mover>`-Elementen berücksichtigt.

## Zusammenfassung

In diesem Artikel haben wir die Überprüfung des grundlegenden Layouts abgeschlossen und die Elemente `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` für Tiefstellungen, Hochstellungen, Unter- und Überschriften eingeführt. Mit diesen Elementen konnten wir kurz neue Eigenschaften des `<mo>`-Elements vorstellen. Im nächsten Artikel werden wir uns auf den [tabellarischen Layout](/de/docs/Web/MathML/Guides/Tables) konzentrieren.

## Siehe auch

- [Das `<msub>`-Element](/de/docs/Web/MathML/Element/msub)
- [Das `<msup>`-Element](/de/docs/Web/MathML/Element/msup)
- [Das `<msubsup>`-Element](/de/docs/Web/MathML/Element/msubsup)
- [Das `<munder>`-Element](/de/docs/Web/MathML/Element/munder)
- [Das `<mover>`-Element](/de/docs/Web/MathML/Element/mover)
- [Das `<munderover>`-Element](/de/docs/Web/MathML/Element/munderover)

{{PreviousMenuNext("Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides/Tables", "Web/MathML/Guides")}}
