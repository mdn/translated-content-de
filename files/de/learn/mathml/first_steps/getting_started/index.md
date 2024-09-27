---
title: Erste Schritte mit MathML
slug: Learn/MathML/First_steps/Getting_started
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{NextMenu("Learn/MathML/First_steps/Text_containers", "Learn/MathML/First_steps")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und sehen, wie man MathML-Formeln hinzufügt, und dabei einige Elemente kennenlernen.

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
        Das grundlegende Syntax von MathML zu verstehen und wie es in HTML-Seiten integriert werden kann.
      </td>
    </tr>
  </tbody>
</table>

## Einfügen von Formeln in HTML über das `<math>`-Element

MathML verwendet die gleiche Syntax wie HTML, um einen Baum von Elementen und Attributen darzustellen. Insbesondere wird jede mathematische Formel durch ein `<math>`-Element dargestellt, das in eine HTML-Seite eingefügt werden kann. Im folgenden Dokument befindet es sich innerhalb eines Textabsatzes:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>My first math page</title>
  </head>
  <body>
    <p>
      The fraction
      <math>
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math>
      is not a decimal number.
    </p>
  </body>
</html>
```

Das `<mfrac>`-Element spezifiziert einen Bruch mit einem Zähler (seinem ersten Kind) und einem Nenner (seinem zweiten Kind). So wird es in Ihrem Browser dargestellt:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> Wenn Sie nur "1 3" anstelle eines Bruchs sehen, unterstützt Ihr Browser möglicherweise kein MathML. Schauen Sie in die [Browser-Kompatibilitäts-Tabelle](/de/docs/Web/MathML/Element/math#browser_compatibility) für weitere Details.

### Das display-Attribut

Beachten Sie, dass in dem vorherigen Beispiel die Formel in derselben Zeile wie der Text des Absatzes ist. Es ist jedoch ziemlich üblich, große mathematische Formeln stattdessen zentriert in einer eigenen Zeile darzustellen, wie unten gezeigt. Um dies zu erreichen, müssen Sie ein `display="block"`-Attribut an das `<math>`-Element anhängen.

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <title>My first math page</title>
  </head>
  <body>
    <p>
      The fraction
      <math display="block">
        <mfrac>
          <mn>1</mn>
          <mn>3</mn>
        </mfrac>
      </math>
      is not a decimal number.
    </p>
  </body>
</html>
```

{{ EmbedLiveSample('The_display_attribute', 700, 100, "", "") }}

Sie werden möglicherweise auch eine subtile Änderung im Aussehen bemerken: Der Text und der vertikale Abstand des Bruchs werden etwas größer. Ohne das `display="block"`-Attribut wird die Höhe minimiert, um den Fluss des umgebenden Textes nicht zu stören. Mit dem `display="block"`-Attribut wird stattdessen die Lesbarkeit der mathematischen Formel priorisiert.

> [!NOTE]
> Dies entspricht dem Konzept von _Inline_-Formeln in LaTeX (begrenzt durch Dollarzeichen `$...$`) und _Display_-Formeln (begrenzt durch `\[...\]`).

> [!NOTE]
> Die oben erwähnte Änderung im Aussehen wird tatsächlich durch die [`math-style`](/de/docs/Web/CSS/math-style)-Eigenschaft gesteuert, die initial `normal` für `<math display="block">` und `compact` anderweitig ist. In einigen MathML-Unterbäumen kann diese Eigenschaft dann automatisch `compact` werden, aber wir werden diese Feinheit in diesem Einführungstutorial ignorieren. Wiederum ist dies ähnlich zu LaTeX.

## Gruppierung mit dem `<mrow>`-Element

Das `<math>`-Element kann tatsächlich eine beliebige Anzahl von Kindern enthalten und wird sie im Wesentlichen in einer Reihe darstellen. Zum Beispiel würde die einfache Formel "1 + 2 + 3" in MathML so kodiert:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

Das `<mrow>`-Element ist ein generischer Container, der ein ähnliches Layout ausführt, aber überall im MathML-Unterbaum platziert werden kann. Es ist hilfreich, mehrere Elemente zusammen zu gruppieren. Zum Beispiel ist der Zähler des folgenden Bruchs (sein erstes Kind) "eins plus zwei".

```html
<math>
  <mfrac>
    <mrow>
      <mn>1</mn>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mn>3</mn>
  </mfrac>
</math>
```

### Aktives Lernen: Verschachtelte Ausdrücke

Als Übung, versuchen Sie herauszufinden, wie Sie die folgenden Ausdrücke nur mit den MathML-Elementen, die wir bisher gesehen haben, schreiben können. Wenn Sie feststecken oder die Lösung überprüfen möchten, sehen Sie sich den Quellcode des Beispiels an.

```html hidden
<ol>
  <li>
    "one half" plus "two third":
    <!-- It's correct but unnecessary to group the children of the math element with an mrow element. -->
    <math>
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
      <mo>+</mo>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </math>
  </li>
  <li>
    "one plus two plus three" over "four plus five":
    <math>
      <mfrac>
        <mrow>
          <mn>1</mn>
          <mo>+</mo>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
        </mrow>
        <mrow>
          <mn>4</mn>
          <mo>+</mo>
          <mn>5</mn>
        </mrow>
      </mfrac>
    </math>
  </li>
  <li>
    "one quarter" over "two plus three":
    <math>
      <mfrac>
        <mfrac>
          <mn>1</mn>
          <mn>4</mn>
        </mfrac>
        <mrow>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
        </mrow>
      </mfrac>
    </math>
  </li>
</ol>
```

{{ EmbedLiveSample('Active_learning_nested_expressions', 700, 200, "", "") }}

## Zusammenfassung

In diesem Artikel haben wir uns angesehen, wie man das `<math>`-Element verwendet, um eine mathematische Formel in einem HTML-Dokument einzufügen. Wir haben gelernt über Darstellungsunterschiede zwischen `<math>`-Elementen, die `display="block"` verwenden oder nicht. Zusätzlich sind wir auf ein paar andere MathML-Elemente gestoßen: `<mfrac>` für Brüche, `<mrow>` für Gruppierung und schließlich einige Textelemente. Wir werden diese [Textcontainer](/de/docs/Learn/MathML/First_steps/Text_containers) im nächsten Artikel weiter analysieren.

{{LearnSidebar}}{{NextMenu("Learn/MathML/First_steps/Text_containers", "Learn/MathML/First_steps")}}

## Siehe auch

- [Using MathML](/de/docs/Web/MathML/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Element/mrow)
- [Die `math-style`-Eigenschaft](/de/docs/Web/CSS/math-style)
- [Die `math-depth`-Eigenschaft](/de/docs/Web/CSS/math-depth)
