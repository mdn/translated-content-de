---
title: MathML-Brüche und Wurzeln
short-title: Brüche und Wurzeln
slug: Web/MathML/Tutorials/For_beginners/Fractions_and_roots
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners")}}

Aufbauend auf Textcontainern beschreibt dieser Artikel, wie Sie durch das Verschachteln von Brüchen und Wurzeln komplexere MathML-Ausdrücke erstellen.

## Teilbäume von \<mfrac>, \<msqrt> und \<mroot>

Im Artikel [Erste Schritte mit MathML](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started) haben wir das Element `<mfrac>` bereits kennengelernt, mit dem sich ein Bruch darstellen lässt. Betrachten wir ein einfaches Beispiel, das zusätzlich Elemente für Wurzeln (`<msqrt>` und `<mroot>`) verwendet:

```html
<math>
  <mfrac>
    <mtext>child1</mtext>
    <mtext>child2</mtext>
  </mfrac>
</math>
<br />
<math>
  <msqrt>
    <mtext>child1</mtext>
    <mtext>child2</mtext>
    <mtext>...</mtext>
    <mtext>childN</mtext>
  </msqrt>
</math>
<br />
<math>
  <mroot>
    <mtext>child1</mtext>
    <mtext>child2</mtext>
  </mroot>
</math>
```

Der folgende Screenshot zeigt, wie ein Browser das Beispiel darstellt:

![Screenshot von mfrac, msqrt und mroot](mfrac-msqrt-mroot.png)

- Das Element `<mfrac>` wird als Bruch dargestellt: Das erste Kindelement (der Zähler) steht über dem zweiten Kindelement (dem Nenner); beide sind durch einen horizontalen Bruchstrich getrennt.
- `<msqrt>` wird als Quadratwurzel dargestellt: Seine Kindelemente werden wie bei einem [`<mrow>`](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started#grouping_with_the_mrow_element) angeordnet. Davor steht das Wurzelzeichen √, und ein horizontaler Strich überspannt den gesamten Inhalt.
- Das Element `<mroot>` wird als n-te Wurzel dargestellt: Das Wurzelzeichen überspannt das erste Kindelement. Das zweite Kindelement gibt den Wurzelexponenten an und wird links oben am Wurzelzeichen angezeigt.

### Verschachteln verschiedener Elemente

Mit der folgenden Übung können Sie überprüfen, ob Sie den Zusammenhang zwischen einem MathML-Teilbaum und seiner visuellen Darstellung verstanden haben. Das Dokument enthält eine MathML-Formel. Markieren Sie alle visuellen Bereiche, die jeweils einem Teilbaum dieser Formel entsprechen. Anschließend können Sie den Quelltext der MathML-Formel ansehen und prüfen, ob er Ihren Erwartungen entspricht.

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with math characters</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <p>
      <math>
        <mfrac id="mfrac1">
          <msqrt id="msqrt1">
            <mn>2</mn>
          </msqrt>
          <mroot id="mroot1">
            <mn>4</mn>
            <mn>3</mn>
          </mroot>
        </mfrac>
        <mo>+</mo>
        <mroot id="mroot2">
          <mn>5</mn>
          <mfrac id="mfrac2">
            <mn>6</mn>
            <mn>7</mn>
          </mfrac>
        </mroot>
        <mo>+</mo>
        <msqrt id="msqrt2">
          <mn>8</mn>
          <mo>−</mo>
          <mn>9</mn>
        </msqrt>
      </math>
    </p>

    <ol id="options">
      <li>
        <input
          type="checkbox"
          data-comment="Verify the order of children in an mfrac!" />
        An mfrac with an mroot as its first child and an msqrt as its second
        child.
      </li>
      <li>
        <input
          type="checkbox"
          data-highlight="mroot2"
          data-comment="The '6 over 7'-th root of five." />
        An mroot with an mn as its first child and mfrac as its second child.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="This formula does not contain any fraction inside a square root!" />
        An msqrt containing an mfrac element.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="The square root of two."
          data-highlight="msqrt1" />
        An msqrt with one mn child.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="Verify the order of children in an mroot!" />
        An mroot with an mfrac as its first child and mn as its second child.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="The square root of 'eight minus nine'."
          data-highlight="msqrt2" />
        An msqrt with the following list of children: mn, mo, mn.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="The square root of two over the cubic root of four."
          data-highlight="mfrac1" />
        An mfrac with an msqrt as its first child and an mroot as its second
        child.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="mfrac must have exactly two children!" />
        An mfrac with the following list of children: msqrt, mn, msqrt.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="mroot must have exactly two children!" />
        An mroot with one mn child.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="The fraction six over seven."
          data-highlight="mfrac2" />
        An mfrac with two mn children.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="This formula does not contain any square root with more than two numbers!" />
        An msqrt with five mn children.
      </li>
      <li>
        <input
          type="checkbox"
          data-highlight="mroot1"
          data-comment="The cubic root of four." />
        An mroot with two mn children.
      </li>
    </ol>
    <p>
      <strong id="comment"></strong>
    </p>
    <p>
      <strong id="status"></strong>
    </p>
  </body>
</html>
```

```css hidden
math {
  font-family: "Latin Modern Math", "STIX Two Math", math;
  font-size: 200%;
}
math .highlight {
  background: pink;
}
math [id] .highlight {
  background: lightblue;
}
p {
  padding: 0.5em;
}
```

```js hidden
const options = document.getElementById("options");
const comment = document.getElementById("comment");
const checkboxes = Array.from(options.getElementsByTagName("input"));
const status = document.getElementById("status");
function verifyOption(checkbox) {
  const mathml = checkbox.dataset.highlight
    ? document.getElementById(checkbox.dataset.highlight)
    : null;
  if (checkbox.checked) {
    comment.textContent = checkbox.dataset.comment;
    if (mathml) {
      mathml.classList.add("highlight");
    } else {
      checkbox.checked = false;
    }
  } else {
    comment.textContent = "";
    if (mathml) {
      mathml.classList.remove("highlight");
    }
  }
  const finished = checkboxes.every(
    (checkbox) => !!checkbox.checked === !!checkbox.dataset.highlight,
  );
  status.textContent = finished
    ? "Congratulations, you checked all the correct answers!"
    : "";
}
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    verifyOption(checkbox);
  });
});
```

{{ EmbedLiveSample('nesting_different_elements', 700, 600, "", "") }}

## Dehnbare Wurzelzeichen

Wie bereits gezeigt, dehnt sich der horizontale Strich der Elemente `<msqrt>` und `<mroot>` aus, um ihren Inhalt zu überspannen. Auch das Wurzelzeichen √ passt seine Höhe an den Inhalt an.

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <mroot>
    <msqrt>
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
    </msqrt>
    <mn>3</mn>
  </mroot>
</math>
```

{{ EmbedLiveSample('Stretchy_radical_symbols', 700, 200, "", "") }}

> [!WARNING]
> Für diese Anpassung sind in der Regel spezielle [Mathematikschriftarten](/de/docs/Web/MathML/Guides/Fonts) erforderlich. Das vorherige Beispiel verwendet [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts).

## Brüche ohne Bruchstrich

Manche mathematischen Konzepte, etwa [Binomialkoeffizienten](https://en.wikipedia.org/wiki/Combination) oder [Legendre-Symbole](https://en.wikipedia.org/wiki/Legendre_symbol), werden in einer bruchähnlichen Schreibweise dargestellt. Für solche Schreibweisen eignet sich das Element `<mfrac>`. Wenn kein horizontaler Bruchstrich angezeigt werden soll, fügen Sie dem Element `<mfrac>` das Attribut `linethickness="0"` hinzu:

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mfrac linethickness="0">
      <mn>3</mn>
      <mn>2</mn>
    </mfrac>
    <mo>)</mo>
  </mrow>
  <mo>=</mo>
  <mn>3</mn>
  <mo>≠</mo>
  <mfrac>
    <mn>3</mn>
    <mn>2</mn>
  </mfrac>
</math>
```

{{ EmbedLiveSample('fractions_without_bar', 700, 200, "", "") }}

> [!NOTE]
> Mit dem Attribut `linethickness` lässt sich zwar eine beliebige Strichstärke festlegen, es ist jedoch besser, den Standardwert beizubehalten. Dieser wird aus Parametern der Mathematikschriftart berechnet.

## Zusammenfassung

In dieser Lektion haben Sie gelernt, mit den Elementen `<mfrac>`, `<msqrt>` und `<mroot>` Brüche und Wurzeln zu erstellen. Dabei haben Sie besondere Merkmale dieser Elemente kennengelernt: den Bruchstrich und das Wurzelzeichen. Außerdem haben Sie gesehen, wie sich mit dem Attribut `linethickness` Brüche ohne Bruchstrich darstellen lassen. Im nächsten Artikel geht es mit grundlegender mathematischer Notation und [hoch- und tiefgestellten Ausdrücken](/de/docs/Web/MathML/Tutorials/For_beginners/Scripts) weiter.

## Siehe auch

- [Das Element `<mfrac>`](/de/docs/Web/MathML/Reference/Element/mfrac)
- [Das Element `<msqrt>`](/de/docs/Web/MathML/Reference/Element/msqrt)
- [Das Element `<mroot>`](/de/docs/Web/MathML/Reference/Element/mroot)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners")}}
