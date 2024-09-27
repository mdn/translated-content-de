---
title: MathML Script-Elemente
slug: Learn/MathML/First_steps/Scripts
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Fractions_and_roots", "Learn/MathML/First_steps/Tables", "Learn/MathML/First_steps")}}

Wir setzen die Überprüfung grundlegender mathematischer Notationen fort und konzentrieren uns darauf, MathML-Elemente mit Skripten zu erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit grundlegenden MathML-Elementen, die geskriptete Elemente erzeugen, zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Tief- und Hochstellsymbole

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

Unten sehen Sie die Darstellung des obigen Beispiels in Ihrem Browser.

{{ EmbedLiveSample('Subtrees_of_msub_msup_msubsup', 700, 200, "", "") }}

Sie sollten beachten, dass:

- Das zweite Kind des `<msub>` Elements als Tiefstellsymbol seines ersten Kindes angehängt wird.
- Das zweite Kind des `<msup>` Elements als Hochstellsymbol seines ersten Kindes angehängt wird.
- Die zweiten und dritten Kinder des `<msubsup>` Elements werden jeweils als Tief- und Hochstellsymbole seines ersten Kindes angehängt.
- Der Text in Skripten wird verkleinert dargestellt.

> [!NOTE]
> Die MathML-Elemente `<msub>` und `<msup>` unterscheiden sich von den HTML-Elementen [`<sub>`](/de/docs/Web/HTML/Element/sub) und [`<sup>`](/de/docs/Web/HTML/Element/sup). Sie erlauben es den Autoren, beliebige MathML-Teilbäume als Skripte bereitzustellen, nicht nur Text.

## Unter- und Überstriche

Die `<munder>`, `<mover>` und `<munderover>` Elemente sind sehr ähnlich, außer dass sie verwendet werden, um Unter- und Überstriche anzuhängen. Anstatt Details zu geben, lassen wir Sie ihre Definitionen mit der folgenden Übung selbst herausfinden.

### Aktives Lernen: Erkennen von Unter- und Überstrichen

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

{{ EmbedLiveSample('Subtrees_of_munder_mover_munderover', 700, 400, "", "") }}

### Aktives Lernen: Erkennen von geskripteten Elementen

Die folgende MathML-Formel enthält einen komplexeren Ausdruck mit geschachtelten Brüchen, Wurzeln und Skripten. Versuchen Sie, die mit Script-Elementen `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` gestalteten Elemente zu erraten. Jedes Mal, wenn Sie ein solches Element anklicken, wird es hervorgehoben und eine Bestätigungsnachricht angezeigt. Lesen Sie schließlich die MathML-Quelle, um zu prüfen, ob dies Ihren Erwartungen entspricht.

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

Wir haben zuvor einige [Eigenschaften des `<mo>`-Elements](/de/docs/Learn/MathML/First_steps/Text_containers#operator_properties_of_mo) gesehen, nämlich Dehnen in vertikaler Richtung und Abstände. Jetzt, da geskriptete Elemente verfügbar sind, können wir diese Liste erweitern. Wir werden dies tun, indem wir unser [vorheriges Beispiel](#active_learning_recognize_scripted_elements) anpassen.

### Dehnen in horizontaler Richtung

Lassen Sie uns zuerst die Substitutionen <math><mi>β</mi><mo>≔</mo><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\beta := z*{1} + z*{2}</annotation></math> und <math><mi>α</mi><mo>≔</mo><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\alpha := v*{1} + v*{2}</annotation></math> durchführen:

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

Wir erkennen jetzt, dass die untere Klammer "⎵" und der Rechtspfeil "→" horizontal gedehnt werden, um die Breite der ersetzten Werte abzudecken. Denken Sie daran, dass [einige vertikale Operatoren gedehnt werden können](/de/docs/Learn/MathML/First_steps/Text_containers#active_learning_stretchy_operators), um die Höhe von nicht dehnbaren Geschwistern in einem `<mrow>` abzudecken. Ebenso können einige horizontale Operatoren gedehnt werden, um die Breite von nicht dehnbaren Geschwistern in einem `<munder>`, `<mover>` oder `<munderover>` Element abzudecken.

> [!NOTE]
> Dehnen kann für jedes Kind des `<munder>`, `<mover>` oder `<munderover>` Elements geschehen, nicht nur für das Unter- oder Überskript.

### Großer Operator und Grenzwerte

Bisher wurde unser Beispiel tatsächlich mit dem [`display="block"`](/de/docs/Learn/MathML/First_steps/Getting_started#the_display_attribute) Attribut gerendert. Schauen wir uns dasselbe Beispiel an, wie es ohne dieses Attribut gerendert wird:

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

Wie erwartet, ist die Formel nicht mehr zentriert und die Darstellung wurde angepasst, um die Höhe zu minimieren. Fokussiert man sich auf das Summenzeichen, erkennt man, dass das Sigma kleiner gezeichnet wird und dass die Skripte des `<munderover>` Elements jetzt als Tief- und Hochstellsymbole angehängt sind! Dies liegt an zwei Eigenschaften des "∑" Operators:

- _largeop_: Der Operator wird mit einem größeren Zeichen gezeichnet, wenn das `<math>`-Tag ein `display="block"` Attribut hat.
- _movablelimits_: Die Unter- und Überschriften, die am Operator angehängt sind, werden respektive als Tief- und Hochstellsymbole gerendert, wenn das `<math>`-Tag das `display="block"` Attribut nicht hat.

> [!NOTE]
> Die _largeop_ Eigenschaft ist tatsächlich unabhängig von Skripten, obwohl Operatoren mit dieser Eigenschaft typischerweise geskriptet sind. Die _movablelimits_ Eigenschaft wird auch bei `<munder>` und `<mover>` Elementen berücksichtigt.

## Zusammenfassung

In diesem Artikel haben wir die grundlegende Layout-Einführung mit den Elementen `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` für Tief-, Hoch-, Unter- und Überschriften abgeschlossen. Mit diesen Elementen konnten wir kurz neue Eigenschaften des `<mo>` Elements einführen. Im nächsten Artikel werden wir uns weiter auf [tabellarisches Layout](/de/docs/Learn/MathML/First_steps/Tables) konzentrieren.

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Fractions_and_roots", "Learn/MathML/First_steps/Tables", "Learn/MathML/First_steps")}}

## Siehe auch

- [Das `<msub>` Element](/de/docs/Web/MathML/Element/msub)
- [Das `<msup>` Element](/de/docs/Web/MathML/Element/msup)
- [Das `<msubsup>` Element](/de/docs/Web/MathML/Element/msubsup)
- [Das `<munder>` Element](/de/docs/Web/MathML/Element/munder)
- [Das `<mover>` Element](/de/docs/Web/MathML/Element/mover)
- [Das `<munderover>` Element](/de/docs/Web/MathML/Element/munderover)
