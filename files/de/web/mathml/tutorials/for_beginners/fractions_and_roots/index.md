---
title: MathML-Brüche und -Wurzeln
short-title: Brüche und Wurzeln
slug: Web/MathML/Tutorials/For_beginners/Fractions_and_roots
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners")}}

Unter Verwendung von Textcontainern beschreibt dieser Artikel, wie man komplexere MathML-Ausdrücke erstellt, indem man Brüche und Wurzeln verschachtelt.

## Teilbäume von \<mfrac>, \<msqrt> und \<mroot>

Im Artikel [Erste Schritte mit MathML](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started) haben wir bereits das `<mfrac>`-Element kennengelernt, um einen Bruch zu beschreiben. Betrachten wir ein einfaches Beispiel, das neue Elemente für Wurzeln (`<msqrt>` und `<mroot>`) hinzufügt:

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

Unten sehen Sie einen Screenshot, wie es von einem Browser gerendert wird:

![Screenshot von mfrac, msqrt, mroot](mfrac-msqrt-mroot.png)

- Wir wissen bereits, dass das `<mfrac>`-Element als Bruch gerendert wird: Das erste Kind (der Zähler) wird über dem zweiten Kind (der Nenner) gezeichnet, getrennt durch einen horizontalen Strich.
- Das `<msqrt>` wird als Quadratwurzel gerendert: seine Kinder werden wie ein [`<mrow>`](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started#grouping_with_the_mrow_element) angeordnet, vorangestellt von einem Wurzelsymbol √ und vollständig von einer Überline bedeckt.
- Schließlich wird das `<mroot>`-Element als n-te Wurzel gerendert: Das erste Element wird vom Radikalsymbol bedeckt, während das zweite Element als Grad der Wurzel verwendet und als Präfix-Superscript gerendert wird.

### Aktives Lernen: Verschachtelung verschiedener Elemente

Hier ist eine Übung, um zu überprüfen, ob Sie die Beziehung zwischen einem MathML-Teilbaum und dessen visueller Darstellung verstanden haben. Das Dokument enthält eine MathML-Formel und Sie müssen alle Teilbäume überprüfen, die einem Teilbaum in dieser MathML-Formel entsprechen. Sobald Sie fertig sind, können Sie den Quelltext der MathML-Formel inspizieren und überprüfen, ob er Ihrer Erwartung entspricht.

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
  font-family:
    Latin Modern Math,
    STIX Two Math,
    math;
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
    ? document.getElementById(mathml)
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

{{ EmbedLiveSample('Active_learning_nesting_different_elements', 700, 600, "", "") }}

## Dehnbare Radikalsymbole

Wie zuvor gesehen, dehnt sich die Überlinie der `<msqrt>`- und `<mroot>`-Elemente horizontal aus, um ihren Inhalt abzudecken. Tatsächlich dehnt sich auch das Wurzelsymbol √ aus, um so hoch wie der Inhalt zu sein.

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
> Spezielle [Mathe-Fonts](/de/docs/Web/MathML/Guides/Fonts) sind in der Regel erforderlich, um diese Dehnung zu ermöglichen, das vorherige Beispiel basiert auf [Web-Fonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts).

## Brüche ohne Strich

Einige mathematische Konzepte werden manchmal mit bruchähnlichen Notationen geschrieben, wie zum Beispiel [Binomialkoeffizienten](https://en.wikipedia.org/wiki/Combination) oder [Legendre-Symbole](https://en.wikipedia.org/wiki/Legendre_symbol). Es ist angemessen, ein `<mfrac>`-Element zu verwenden, um solche Notationen zu markieren. Für bruchähnliche Notationen, die keinen horizontalen Strich zeichnen, fügen Sie dem `<mfrac>`-Element ein Attribut `linethickness="0"` hinzu:

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

{{ EmbedLiveSample('Fraction_without_bar', 700, 200, "", "") }}

> [!NOTE]
> Obwohl das `linethickness`-Attribut verwendet werden kann, um eine beliebige Dicke anzugeben, ist es besser, den Standardwert beizubehalten, der aus in der Mathe-Font angegebenen Parametern berechnet wird.

## Zusammenfassung

In dieser Lektion haben wir gesehen, wie man Brüche und Wurzeln mit den Elementen `<mfrac>`, `<msqrt>` und `<mroot>` erstellt. Wir haben einige spezielle Funktionen dieser Elemente bemerkt, nämlich das Bruch- und das Radikalsymbol. Wir haben gelernt, wie das `linethickness`-Attribut verwendet wird, um Brüche ohne Striche zu zeichnen. Im nächsten Artikel werden wir mit grundlegenden mathematischen Notationen fortfahren und [Schriften](/de/docs/Web/MathML/Tutorials/For_beginners/Scripts) betrachten.

## Siehe auch

- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Reference/Element/mfrac)
- [Das `<msqrt>`-Element](/de/docs/Web/MathML/Reference/Element/msqrt)
- [Das `<mroot>`-Element](/de/docs/Web/MathML/Reference/Element/mroot)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners/Scripts", "Web/MathML/Tutorials/For_beginners")}}
