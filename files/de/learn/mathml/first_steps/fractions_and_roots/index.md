---
title: MathML-Brüche und -Wurzeln
slug: Learn/MathML/First_steps/Fractions_and_roots
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Text_containers", "Learn/MathML/First_steps/Scripts", "Learn/MathML/First_steps")}}

Auf Basis von Textcontainern beschreibt dieser Artikel, wie komplexere MathML-Ausdrücke durch Verschachteln von Brüchen und Wurzeln erstellt werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        > und HTML-Grundlagen (lesen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit MathML-Elementen, die zum Schreiben von Brüchen und Quadratwurzeln verwendet werden.
      </td>
    </tr>
  </tbody>
</table>

## Teilbäume von \<mfrac>, \<msqrt> und \<mroot>

Im Artikel [Erste Schritte mit MathML](/de/docs/Learn/MathML/First_steps/Getting_started) haben wir das `<mfrac>`-Element getroffen, um einen Bruch zu beschreiben. Betrachten wir ein einfaches Beispiel, das neue Elemente für Wurzeln (`<msqrt>` und `<mroot>`) hinzufügt:

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

Unten ist ein Screenshot, wie es von einem Browser gerendert wird:

![Screenshot von mfrac, msqrt, mroot](mfrac-msqrt-mroot.png)

- Wir wissen bereits, dass das `<mfrac>`-Element als Bruch gerendert wird: Das erste Kind (der Zähler) wird über dem zweiten Kind (dem Nenner) gezeichnet, getrennt durch einen horizontalen Balken.
- Das `<msqrt>` wird als Quadratwurzel gerendert: Seine Kinder sind angeordnet wie ein [`<mrow>`](/de/docs/Learn/MathML/First_steps/Getting_started#grouping_with_the_mrow_element), dem ein Wurzelsymbol √ vorangestellt ist und das vollständig von einem Überstrich bedeckt ist.
- Schließlich wird das `<mroot>`-Element als n-te Wurzel gerendert: Das erste Element wird vom Wurzelsymbol bedeckt, während das zweite Element als Grad der Wurzel verwendet und als Präfix-Superskript dargestellt wird.

### Aktives Lernen: Verschachteln verschiedener Elemente

Hier ist eine einfache Übung, um zu überprüfen, ob Sie die Beziehung zwischen einem MathML-Teilbaum und seiner visuellen Darstellung verstanden haben. Das Dokument enthält eine MathML-Formel und Sie müssen alle Teilbäume überprüfen, die einem Teilbaum in dieser MathML-Formel entsprechen. Sobald Sie fertig sind, können Sie den Quellcode der MathML-Formel untersuchen und überprüfen, ob er mit Ihrer Erwartung übereinstimmt.

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Meine Seite mit mathematischen Zeichen</title>
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
          data-comment="Überprüfen Sie die Reihenfolge der Kinder in einem mfrac!" />
        Ein mfrac mit einem mroot als erstem Kind und einem msqrt als zweitem Kind.
      </li>
      <li>
        <input
          type="checkbox"
          data-highlight="mroot2"
          data-comment="Die '6 über 7'-te Wurzel von fünf." />
        Ein mroot mit einem mn als erstem Kind und einem mfrac als zweitem Kind.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="Diese Formel enthält keinen Bruch innerhalb einer Quadratwurzel!" />
        Ein msqrt, das ein mfrac-Element enthält.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="Die Quadratwurzel von zwei."
          data-highlight="msqrt1" />
        Ein msqrt mit einem mn-Kind.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="Überprüfen Sie die Reihenfolge der Kinder in einem mroot!" />
        Ein mroot mit einem mfrac als erstem Kind und mn als zweitem Kind.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="Die Quadratwurzel von 'acht minus neun'."
          data-highlight="msqrt2" />
        Ein msqrt mit folgender Kinderliste: mn, mo, mn.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="Die Quadratwurzel von zwei über die Kubikwurzel von vier."
          data-highlight="mfrac1" />
        Ein mfrac mit einem msqrt als erstem Kind und einem mroot als zweitem Kind.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="mfrac muss genau zwei Kinder haben!" />
        Ein mfrac mit folgender Kinderliste: msqrt, mn, msqrt.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="mroot muss genau zwei Kinder haben!" />
        Ein mroot mit einem mn-Kind.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="Der Bruch sechs über sieben."
          data-highlight="mfrac2" />
        Ein mfrac mit zwei mn-Kindern.
      </li>
      <li>
        <input
          type="checkbox"
          data-comment="Diese Formel enthält keine Quadratwurzel mit mehr als zwei Zahlen!" />
        Ein msqrt mit fünf mn-Kindern.
      </li>
      <li>
        <input
          type="checkbox"
          data-highlight="mroot1"
          data-comment="Die Kubikwurzel von vier." />
        Ein mroot mit zwei mn-Kindern.
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
    STIX Two Math;
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
  let mathml = checkbox.dataset.highlight;
  if (mathml) {
    mathml = document.getElementById(mathml);
  }
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
    ? "Herzlichen Glückwunsch, Sie haben alle richtigen Antworten angekreuzt!"
    : "";
}
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    verifyOption(checkbox);
  });
});
```

{{ EmbedLiveSample('Active_learning_nesting_different_elements', 700, 600, "", "") }}

## Dehnbare Wurzelsymbole

Wie bereits gesehen, erstreckt sich der Überstrich der `<msqrt>`- und `<mroot>`-Elemente horizontal, um ihren Inhalt zu bedecken. Tatsächlich dehnt sich auch das Wurzelsymbol √ vertikal, um so hoch wie ihr Inhalt zu sein.

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
> Spezielle [Mathematik-Schriftarten](/de/docs/Web/MathML/Fonts) sind in der Regel erforderlich, um diese Dehnung zu ermöglichen. Das vorherige Beispiel verwendet [Web-Schriftarten](/de/docs/Learn/CSS/Styling_text/Web_fonts).

## Brüche ohne Balken

Einige mathematische Konzepte werden manchmal unter Verwendung von bruchähnlichen Notationen geschrieben, wie [binomiale Koeffizienten](https://en.wikipedia.org/wiki/Combination) oder [Legendre-Symbole](https://en.wikipedia.org/wiki/Legendre_symbol). Es ist angebracht, ein `<mfrac>`-Element zu verwenden, um solche Notationen zu markieren. Für bruchähnliche Notationen, die keinen horizontalen Balken zeichnen, fügen Sie ein `linethickness="0"`-Attribut an das `<mfrac>`-Element an:

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
> Obwohl das `linethickness`-Attribut verwendet werden kann, um eine beliebige Dicke anzugeben, ist es besser, den Standardwert beizubehalten, der aus in der Mathematik-Schriftart angegebenen Parametern berechnet wird.

## Zusammenfassung

In dieser Lektion haben wir gesehen, wie man Brüche und Wurzeln mit den `<mfrac>`, `<msqrt>` und `<mroot>`-Elementen erstellt. Wir haben einige spezielle Merkmale dieser Elemente bemerkt, nämlich das Bruch- und Wurzelsymbol. Wir haben gesehen, wie das `linethickness`-Attribut verwendet wird, um Brüche ohne Balken zu zeichnen. Im nächsten Artikel werden wir mit grundlegenden mathematischen Notationen fortfahren und [Skripte](/de/docs/Learn/MathML/First_steps/Scripts) betrachten.

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Text_containers", "Learn/MathML/First_steps/Scripts", "Learn/MathML/First_steps")}}

## Siehe auch

- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Element/mfrac)
- [Das `<msqrt>`-Element](/de/docs/Web/MathML/Element/msqrt)
- [Das `<mroot>`-Element](/de/docs/Web/MathML/Element/mroot)
