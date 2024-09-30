---
title: MathML gescriptete Elemente
slug: Learn/MathML/First_steps/Scripts
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Fractions_and_roots", "Learn/MathML/First_steps/Tables", "Learn/MathML/First_steps")}}

Wir setzen die Überprüfung der grundlegenden mathematischen Notationen fort und konzentrieren uns darauf, MathML-Elemente mit Skripten zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, und HTML-Grundlagen (studieren Sie die
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit grundlegenden MathML-Elementen, die geskriptete Elemente erzeugen.
      </td>
    </tr>
  </tbody>
</table>

## Tief- und Hochstellungen

Ähnlich wie im [vorherigen Artikel](/de/docs/Learn/MathML/First_steps/Fractions_and_roots) gesehen, haben die `<msub>`, `<msup>` und `<msubsup>` eine spezielle Struktur, die genau zwei Elemente (für `<msub>`, `<msup>`) oder drei Elemente (für `<msubsup>`) erwartet:

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

Nachfolgend ist die Darstellung des obigen Beispiels in Ihrem Browser zu sehen.

{{ EmbedLiveSample('Subtrees_of_msub_msup_msubsup', 700, 200, "", "") }}

Sie sollten feststellen, dass:

- Das zweite Kind des `<msub>`-Elements als Tiefstellung an das erste Kind angehängt ist.
- Das zweite Kind des `<msup>`-Elements als Hochstellung an das erste Kind angehängt ist.
- Die zweiten und dritten Kinder des `<msubsup>`-Elements jeweils als Tiefstellung und Hochstellung an das erste Kind angehängt sind.
- Der Text innerhalb der Skripte verkleinert dargestellt wird.

> [!NOTE]
> Die MathML-Elemente `<msub>` und `<msup>` unterscheiden sich von den HTML-Elementen [`<sub>`](/de/docs/Web/HTML/Element/sub) und [`<sup>`](/de/docs/Web/HTML/Element/sup). Sie ermöglichen es Autoren, beliebige MathML-Unterbäume als Skripte bereitzustellen, nicht nur Text.

## Unterschriften und Überschriften

Die `<munder>`, `<mover>` und `<munderover>`-Elemente sind sehr ähnlich, außer dass sie verwendet werden, um Unterschriften und Überschriften anzubringen. Anstatt Details anzugeben, lassen wir Sie deren Definitionen selbst mit der folgenden Übung herausfinden.

### Aktives Lernen: Erkennen Sie Unter-/Übersichten

Versuchen Sie im folgenden Beispiel, die Namen der mysteriösen Elemente (als Fragezeichen dargestellt) zu erraten und klicken Sie den Button, um die Lösung zu sehen:

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

### Aktives Lernen: Erkennen Sie geskriptete Elemente

Die folgende MathML-Formel enthält einen komplexeren Ausdruck, der Brüche, Wurzeln und Skripte verschachtelt. Versuchen Sie, die mit geskripteten Elementen `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` ausgelegten Elemente zu erraten. Jedes Mal, wenn Sie auf ein solches Element klicken, wird es hervorgehoben und eine Bestätigungsmeldung angezeigt. Lesen Sie schließlich die MathML-Quelle, um zu überprüfen, ob dies Ihrer Erwartung entspricht.

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

## Weitere Operator-Eigenschaften

Wir haben bereits einige [Eigenschaften des `<mo>`-Elements](/de/docs/Learn/MathML/First_steps/Text_containers#operator_properties_of_mo) gesehen, nämlich das Strecken in vertikaler Richtung und den Abstand. Jetzt, da geskriptete Elemente verfügbar sind, können wir diese Liste erweitern. Wir werden dies tun, indem wir unser [vorheriges Beispiel](#active_learning_recognize_scripted_elements) anpassen.

### Strecken in horizontaler Richtung

Führen wir zunächst die Substitutionen <math><mi>β</mi><mo>≔</mo><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\beta := z*{1} + z*{2}</annotation></math> und <math><mi>α</mi><mo>≔</mo><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\alpha := v*{1} + v*{2}</annotation></math> durch:

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

Wir erkennen jetzt, dass die untere Klammer "⎵" und der Pfeil nach rechts "→" sich horizontal strecken, um die Breite der ersetzten Werte abzudecken. Erinnern Sie sich daran, dass [einige vertikale Operatoren gestreckt werden können](/de/docs/Learn/MathML/First_steps/Text_containers#active_learning_stretchy_operators), um die Höhe von nicht gestreckten Geschwistern innerhalb eines `<mrow>` abzudecken. Ebenso können einige horizontale Operatoren sich strecken, um die Breite nicht gestreckter Geschwister in einem `<munder>`, `<mover>` oder `<munderover>`-Element abzudecken.

> [!NOTE]
> Das Strecken kann für jedes Kind des `<munder>`, `<mover>` oder `<munderover>`-Elements erfolgen, nicht nur für die Unterschrift oder Überschrift.

### Großer Operator und Grenzen

Bisher wurde unser Beispiel tatsächlich mit dem [`display="block"`](/de/docs/Learn/MathML/First_steps/Getting_started#the_display_attribute) Attribut gerendert. Schauen wir uns das gleiche Beispiel an, wie es ohne dieses Attribut gerendert wird:

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

Wie erwartet ist die Formel nicht mehr zentriert und die Darstellung ist so geändert, dass die Höhe minimiert wird. Konzentriert man sich auf das Summationssymbol, kann man feststellen, dass das Sigma kleiner gezeichnet und die Skripte des `<munderover>`-Elements nun als Tiefstellung und Hochstellung angehängt sind! Dies liegt an zwei Eigenschaften des "∑"-Operators:

- _largeop_: Der Operator wird mit einem größeren Glyph gezeichnet, wenn das `<math>`-Tag ein `display="block"` Attribut hat.
- _movablelimits_: Die Unterschriften und Überschriften, die dem Operator angehängt sind, werden als Tiefstellung und Hochstellung gerendert, wenn das `<math>`-Tag nicht das `display="block"` Attribut hat.

> [!NOTE]
> Die _largeop_-Eigenschaft ist tatsächlich nicht mit Skripten verbunden, obwohl Operatoren mit dieser Eigenschaft typischerweise geskriptet werden. Die _movablelimits_-Eigenschaft wird auch für `<munder>` und `<mover>`-Elemente berücksichtigt.

## Zusammenfassung

In diesem Artikel haben wir das grundlegende Layout abgeschlossen, indem wir die Elemente `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` für Tief- und Hochstellungen, Unterschriften und Überschriften eingeführt haben. Mit diesen Elementen konnten wir kurz neue Eigenschaften des `<mo>`-Elements einführen. Im nächsten Artikel werden wir uns weiterhin auf [Tabellenlayout](/de/docs/Learn/MathML/First_steps/Tables) konzentrieren.

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Fractions_and_roots", "Learn/MathML/First_steps/Tables", "Learn/MathML/First_steps")}}

## Siehe auch

- [Das `<msub>`-Element](/de/docs/Web/MathML/Element/msub)
- [Das `<msup>`-Element](/de/docs/Web/MathML/Element/msup)
- [Das `<msubsup>`-Element](/de/docs/Web/MathML/Element/msubsup)
- [Das `<munder>`-Element](/de/docs/Web/MathML/Element/munder)
- [Das `<mover>`-Element](/de/docs/Web/MathML/Element/mover)
- [Das `<munderover>`-Element](/de/docs/Web/MathML/Element/munderover)
