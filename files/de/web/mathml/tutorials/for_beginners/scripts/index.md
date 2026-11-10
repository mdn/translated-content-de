---
title: MathML-Elemente mit Indizes
short-title: Elemente mit Indizes
slug: Web/MathML/Tutorials/For_beginners/Scripts
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}

Wir setzen die Betrachtung grundlegender mathematischer Notationen fort und konzentrieren uns auf MathML-Elemente mit Indizes.

## Tiefgestellte und hochgestellte Indizes

Ähnlich wie im [vorherigen Artikel](/de/docs/Web/MathML/Tutorials/For_beginners/Fractions_and_roots) haben `<msub>`, `<msup>` und `<msubsup>` eine besondere Struktur: Sie erwarten genau zwei Elemente (bei `<msub>` und `<msup>`) beziehungsweise drei Elemente (bei `<msubsup>`):

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

So wird das obige Beispiel in Ihrem Browser dargestellt.

{{ EmbedLiveSample('subscripts_and_superscripts', 700, 200, "", "") }}

Beachten Sie Folgendes:

- Das zweite Kindelement von `<msub>` wird als tiefgestellter Index an das erste Kindelement angefügt.
- Das zweite Kindelement von `<msup>` wird als hochgestellter Index an das erste Kindelement angefügt.
- Das zweite und dritte Kindelement von `<msubsup>` werden als tiefgestellter beziehungsweise hochgestellter Index an das erste Kindelement angefügt.
- Text innerhalb von Indizes wird verkleinert.

> [!NOTE]
> Die MathML-Elemente `<msub>` und `<msup>` unterscheiden sich von den HTML-Elementen [`<sub>`](/de/docs/Web/HTML/Reference/Elements/sub) und [`<sup>`](/de/docs/Web/HTML/Reference/Elements/sup). Sie ermöglichen es, beliebige MathML-Teilbäume statt nur Text als Indizes zu verwenden.

## Unter- und Überschriften

Die Elemente `<munder>`, `<mover>` und `<munderover>` sind sehr ähnlich, dienen aber dazu, Ausdrücke unter beziehungsweise über einem Basiselement anzubringen. Statt ihre Funktionsweise im Detail zu erklären, können Sie sie anhand der folgenden Übung selbst erschließen.

### Unter- und Überschriften erkennen

Versuchen Sie im folgenden Beispiel, die Namen der unbekannten Elemente (durch Fragezeichen dargestellt) zu erraten. Klicken Sie anschließend auf die Schaltfläche, um die Lösung anzuzeigen:

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
  const mathElems = Array.from(document.getElementsByTagName("math"));
  Array.from(document.getElementsByTagName("span")).forEach((span, index) => {
    span.textContent = mathElems[index].firstElementChild.tagName;
  });
});
```

{{ EmbedLiveSample('Recognizing under/over scripts', 700, 400, "", "") }}

### Elemente mit Indizes erkennen

Die folgende MathML-Formel enthält einen komplexeren Ausdruck mit verschachtelten Brüchen, Wurzeln und Indizes. Versuchen Sie, die Elemente zu erkennen, die mit `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>` und `<munderover>` dargestellt werden. Wenn Sie auf eines dieser Elemente klicken, wird es hervorgehoben und eine Bestätigungsmeldung angezeigt. Lesen Sie abschließend den MathML-Quelltext, um Ihre Vermutungen zu überprüfen.

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

## Weitere Eigenschaften von Operatoren

Wir haben bereits einige [Eigenschaften des Elements `<mo>`](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers#operator_properties_of_mo) kennengelernt, nämlich die vertikale Streckung und die Abstände. Mit den Elementen für Indizes können wir diese Liste nun erweitern. Dazu passen wir unser [vorheriges Beispiel](#elemente_mit_indizes_erkennen) an.

### Horizontale Streckung

Nehmen wir zunächst die Ersetzungen <math><mi>β</mi><mo>≔</mo><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\beta := z*{1} + z*{2}</annotation></math> und <math><mi>α</mi><mo>≔</mo><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\alpha := v*{1} + v*{2}</annotation></math> vor:

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

Nun ist zu erkennen, dass sich die untere Klammer „⎵“ und der nach rechts zeigende Pfeil „→“ horizontal strecken, um die Breite der eingesetzten Werte abzudecken. Wie bereits erläutert, können sich [manche vertikalen Operatoren strecken](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers#recognizing_stretchy_operators), um die Höhe nicht streckbarer Geschwisterelemente innerhalb eines `<mrow>` abzudecken. Ebenso können sich manche horizontalen Operatoren strecken, um die Breite nicht streckbarer Geschwisterelemente innerhalb eines `<munder>`, `<mover>` oder `<munderover>` abzudecken.

> [!NOTE]
> Jedes Kindelement von `<munder>`, `<mover>` oder `<munderover>` kann gestreckt werden, nicht nur das Element unter oder über dem Basiselement.

### Große Operatoren und Grenzen

Bisher wurde unser Beispiel mit dem Attribut [`display="block"`](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started#the_display_attribute) dargestellt. Sehen wir uns dasselbe Beispiel ohne dieses Attribut an:

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

Wie erwartet ist die Formel nicht mehr zentriert, und die Darstellung wurde angepasst, um ihre Höhe zu verringern. Beim Summenzeichen fällt auf, dass das Sigma kleiner dargestellt wird und die Elemente unter und über dem Basiselement von `<munderover>` nun als tiefgestellter und hochgestellter Index erscheinen. Das liegt an zwei Eigenschaften des Operators „∑“:

- _largeop_: Der Operator wird mit einem größeren Zeichen dargestellt, wenn das `<math>`-Tag das Attribut `display="block"` hat.
- _movablelimits_: Die Elemente unter und über dem Operator werden als tiefgestellter beziehungsweise hochgestellter Index dargestellt, wenn das `<math>`-Tag nicht das Attribut `display="block"` hat.

> [!NOTE]
> Die Eigenschaft _largeop_ hängt nicht unmittelbar mit Indizes zusammen, auch wenn Operatoren mit dieser Eigenschaft üblicherweise Indizes tragen. Die Eigenschaft _movablelimits_ wird auch bei den Elementen `<munder>` und `<mover>` berücksichtigt.

## Zusammenfassung

In diesem Artikel haben wir die Betrachtung grundlegender Layout-Elemente abgeschlossen und `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>` und `<munderover>` für tiefgestellte und hochgestellte Indizes sowie für Ausdrücke unter und über einem Basiselement kennengelernt. Anhand dieser Elemente konnten wir außerdem weitere Eigenschaften des Elements `<mo>` vorstellen. Im nächsten Artikel beschäftigen wir uns mit dem [tabellarischen Layout](/de/docs/Web/MathML/Tutorials/For_beginners/Tables).

## Siehe auch

- [Das Element `<msub>`](/de/docs/Web/MathML/Reference/Element/msub)
- [Das Element `<msup>`](/de/docs/Web/MathML/Reference/Element/msup)
- [Das Element `<msubsup>`](/de/docs/Web/MathML/Reference/Element/msubsup)
- [Das Element `<munder>`](/de/docs/Web/MathML/Reference/Element/munder)
- [Das Element `<mover>`](/de/docs/Web/MathML/Reference/Element/mover)
- [Das Element `<munderover>`](/de/docs/Web/MathML/Reference/Element/munderover)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners/Tables", "Web/MathML/Tutorials/For_beginners")}}
