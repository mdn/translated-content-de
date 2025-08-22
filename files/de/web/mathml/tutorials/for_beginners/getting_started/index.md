---
title: Erste Schritte mit MathML
short-title: Erste Schritte
slug: Web/MathML/Tutorials/For_beginners/Getting_started
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und sehen, wie man MathML-Formeln darin einfügt, wobei wir einige Elemente auf dem Weg vorstellen.

## Einfügen von Formeln in HTML über das \<math>-Element

MathML verwendet die gleiche Syntax wie HTML, um einen Baum aus Elementen und Attributen darzustellen. Insbesondere wird jede mathematische Formel durch ein `<math>`-Element dargestellt, das in eine HTML-Seite eingefügt werden kann. Im folgenden Dokument befindet es sich innerhalb eines Textabsatzes:

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

Das `<mfrac>`-Element gibt einen Bruch mit einem Zähler (seinem ersten Kind) und einem Nenner (seinem zweiten Kind) an. So wird es in Ihrem Browser dargestellt:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> Wenn Sie nur "1 3" sehen, anstatt eines Bruchs, unterstützt Ihr Browser möglicherweise MathML nicht. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/MathML/Reference/Element/math#browser_compatibility) für weitere Details an.

### Das Attribut display

Beachten Sie, dass im vorherigen Beispiel die Formel in derselben Zeile wie der Text des Absatzes steht. Es ist jedoch ziemlich üblich, große mathematische Formeln stattdessen zentriert auf einer eigenen Zeile darzustellen, wie unten gezeigt. Um dies zu erreichen, müssen Sie ein `display="block"`-Attribut an das `<math>`-Element anhängen.

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

Sie werden möglicherweise auch eine subtile Änderung im Aussehen bemerken: Der Text und der vertikale Abstand des Bruchs werden etwas größer. Ohne das `display="block"`-Attribut wird die Höhe minimiert, um den Fluss des umgebenden Textes nicht zu stören. Mit dem `display="block"`-Attribut liegt der Schwerpunkt stattdessen auf der Lesbarkeit der mathematischen Formel.

> [!NOTE]
> Dies entspricht dem LaTeX-Konzept von _inline_-Formeln (begrenzt durch Dollarzeichen `$...$`) und _display_-Formeln (begrenzt durch `\[...\]`).

> [!NOTE]
> Die oben erwähnte Änderungserscheinung wird tatsächlich durch die [`math-style`](/de/docs/Web/CSS/math-style)-Eigenschaft gesteuert, die anfänglich für `<math display="block">` `normal` und andernfalls `compact` ist. In einigen MathML-Unterbäumen kann diese Eigenschaft dann automatisch `compact` werden, aber wir werden diese Feinheit für dieses einführende Tutorial ignorieren. Auch dies ist ähnlich zu LaTeX.

## Gruppierung mit dem \<mrow>-Element

Das `<math>`-Element kann tatsächlich eine beliebige Anzahl von Kindern enthalten und wird sie im Wesentlichen in einer Reihe darstellen. Zum Beispiel würde die einfache Formel "1 + 2 + 3" in MathML so kodiert aussehen:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

Das `<mrow>`-Element ist ein generischer Container, der ein ähnliches Layout bietet, aber überall im MathML-Unterbaum platziert werden kann. Es ist hilfreich, um mehrere Elemente zusammenzufassen. Zum Beispiel ist der Zähler des folgenden Bruchs (sein erstes Kind) "eins plus zwei".

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

### Ihr Turn: Schreiben verschachtelter Ausdrücke

Als Übung überlegen, wie man die folgenden Ausdrücke mit nur den bisher gesehenen MathML-Elementen schreibt. Wenn Sie stecken bleiben oder die Lösung überprüfen möchten, sehen Sie sich den Quellcode des Beispiels an.

```html hidden live-sample___nested-expressions
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

{{ EmbedLiveSample('nested_expressions', 700, 200, "", "") }}

## Zusammenfassung

In diesem Artikel haben wir uns angeschaut, wie man das `<math>`-Element verwendet, um eine mathematische Formel in ein HTML-Dokument einzufügen. Wir haben die Unterschiede in der Darstellung zwischen `<math>`-Elementen, die `display="block"` verwenden oder nicht, kennengelernt. Außerdem sind wir auf einige andere MathML-Elemente gestoßen: `<mfrac>` für Brüche, `<mrow>` für Gruppierungen und schließlich einige Textelemente. Diese [Textcontainer](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers) werden wir im nächsten Artikel weiter analysieren.

## Siehe auch

- [Verwendung von MathML](/de/docs/Web/MathML/Guides/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Reference/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Reference/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Reference/Element/mrow)
- [Die `math-style`-Eigenschaft](/de/docs/Web/CSS/math-style)
- [Die `math-depth`-Eigenschaft](/de/docs/Web/CSS/math-depth)

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}
