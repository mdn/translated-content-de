---
title: Einstieg in MathML
slug: Learn/MathML/First_steps/Getting_started
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{NextMenu("Learn/MathML/First_steps/Text_containers", "Learn/MathML/First_steps")}}

In diesem Artikel nehmen wir ein einfaches HTML-Dokument und sehen uns an, wie man MathML-Formeln darin einfügt, wobei wir einige Elemente vorstellen.

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
        > und HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Um die grundlegende Syntax von MathML zu verstehen und wie man es in HTML-Seiten integriert.
      </td>
    </tr>
  </tbody>
</table>

## Formeln in HTML über das \<math>-Element einfügen

MathML verwendet dieselbe Syntax wie HTML, um einen Baum aus Elementen und Attributen darzustellen. Insbesondere wird jede mathematische Formel durch ein `<math>`-Element dargestellt, das in eine HTML-Seite eingefügt werden kann. Im folgenden Dokument befindet es sich innerhalb eines Textabsatzes:

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

Das `<mfrac>`-Element gibt einen Bruch mit einem Zähler (erstes Kind) und einem Nenner (zweites Kind) an. So wird es in Ihrem Browser dargestellt:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> Wenn Sie nur "1 3" anstelle eines Bruchs sehen, dann unterstützt Ihr Browser möglicherweise MathML nicht. Sehen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/MathML/Element/math#browser_compatibility) für weitere Details an.

### Das Attribut display

Beachten Sie, dass die Formel im vorherigen Beispiel in derselben Zeile wie der Text des Absatzes steht. Es ist jedoch ziemlich üblich, große mathematische Formeln stattdessen zentriert auf ihrer eigenen Zeile darzustellen, wie unten gezeigt. Um dies zu erreichen, müssen Sie ein `display="block"`-Attribut an das `<math>`-Element anhängen.

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

Sie werden möglicherweise auch eine subtile Veränderung im Erscheinungsbild bemerken: Der Text und der vertikale Abstand des Bruchs werden etwas größer. Ohne das `display="block"`-Attribut wird die Höhe minimiert, um den Fluss des umgebenden Textes nicht zu stören. Mit dem `display="block"`-Attribut wird stattdessen die Lesbarkeit der mathematischen Formel priorisiert.

> [!NOTE]
> Dies entspricht dem LaTeX-Konzept von _Inline_-Formeln (begrenzt durch Dollarzeichen `$...$`) und _Display_-Formeln (begrenzt durch `\[...\]`).

> [!NOTE]
> Die oben erwähnte Erscheinungsbildänderung wird tatsächlich durch die [`math-style`](/de/docs/Web/CSS/math-style)-Eigenschaft gesteuert, die anfangs `normal` für `<math display="block">` und sonst `compact` ist. In einigen MathML-Unterbäumen kann diese Eigenschaft dann automatisch `compact` werden, aber wir werden diese Feinheit für dieses Einführungstutorial ignorieren. Auch dies ist ähnlich zu LaTeX.

## Gruppierung mit dem \<mrow>-Element

Das `<math>`-Element kann tatsächlich eine beliebige Anzahl von Kindelementen enthalten und wird im Wesentlichen in einer Reihe dargestellt. Zum Beispiel würde die einfache Formel "1 + 2 + 3" in MathML so kodiert werden:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

Das `<mrow>`-Element ist ein generischer Container, der ein ähnliches Layout durchführt, aber überall im MathML-Unterbaum platziert werden kann. Es ist hilfreich, um mehrere Elemente zusammenzufassen. Zum Beispiel ist der Zähler des folgenden Bruchs (erstes Kind) "eins plus zwei".

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

### Aktives Lernen: verschachtelte Ausdrücke

Als Übung erarbeiten Sie, wie Sie die folgenden Ausdrücke mit nur den bisher gesehenen MathML-Elementen schreiben können. Wenn Sie stecken bleiben oder die Lösung überprüfen möchten, schauen Sie sich den Quellcode des Beispiels an.

```html hidden
<ol>
  <li>
    "ein Halb" plus "zwei Drittel":
    <!-- Es ist korrekt, aber unnötig, die Kinder des math-Elements mit einem mrow-Element zu gruppieren. -->
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
    "eins plus zwei plus drei" über "vier plus fünf":
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
    "ein Viertel" über "zwei plus drei":
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

In diesem Artikel haben wir uns angesehen, wie man das `<math>`-Element verwendet, um eine mathematische Formel in ein HTML-Dokument einzufügen. Wir haben über Renderunterschiede zwischen `<math>`-Elementen gelernt, die `display="block"` verwenden oder nicht. Außerdem sind wir auf ein paar andere MathML-Elemente gestoßen: `<mfrac>` für Brüche, `<mrow>` zur Gruppierung und schließlich einige Textelemente. Wir werden diese [Textcontainer](/de/docs/Learn/MathML/First_steps/Text_containers) im nächsten Artikel weiter analysieren.

{{LearnSidebar}}{{NextMenu("Learn/MathML/First_steps/Text_containers", "Learn/MathML/First_steps")}}

## Siehe auch

- [Verwendung von MathML](/de/docs/Web/MathML/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Element/mrow)
- [Die `math-style`-Eigenschaft](/de/docs/Web/CSS/math-style)
- [Die `math-depth`-Eigenschaft](/de/docs/Web/CSS/math-depth)