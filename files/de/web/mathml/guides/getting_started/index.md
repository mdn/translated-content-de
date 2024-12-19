---
title: Einstieg in MathML
slug: Web/MathML/Guides/Getting_started
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

{{NextMenu("Web/MathML/Guides/Text_containers", "Web/MathML/Guides")}}

In diesem Artikel nehmen wir ein einfaches HTML-Dokument und sehen uns an, wie man MathML-Formeln darin einfügt, wobei wir einige Elemente auf dem Weg kennenlernen.

## Einfügen von Formeln in HTML über das \<math>-Element

MathML verwendet die gleiche Syntax wie HTML, um einen Baum von Elementen und Attributen darzustellen. Insbesondere wird jede mathematische Formel durch ein `<math>`-Element repräsentiert, das in eine HTML-Seite eingefügt werden kann. Im folgenden Dokument befindet es sich innerhalb eines Textabschnitts:

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

Das `<mfrac>`-Element gibt einen Bruch mit einem Zähler (seinem ersten Kind) und einem Nenner (seinem zweiten Kind) an. So wird es in Ihrem Browser gerendert:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> Wenn Sie nur "1 3" sehen anstelle eines Bruchs, unterstützt Ihr Browser möglicherweise kein MathML. Sehen Sie in der [Browser-Kompatibilitätstabelle](/de/docs/Web/MathML/Element/math#browser_compatibility) nach, um weitere Details zu erhalten.

### Das display-Attribut

Beachten Sie, dass sich in dem vorherigen Beispiel die Formel auf derselben Zeile wie der Text des Absatzes befindet. Es ist jedoch ziemlich üblich, große mathematische Formeln zentriert in einer eigenen Zeile darzustellen, wie unten gezeigt. Um dies zu erreichen, müssen Sie dem `<math>`-Element ein `display="block"`-Attribut hinzufügen.

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

Sie bemerken möglicherweise auch eine subtile Veränderung im Erscheinungsbild: Der Text und der vertikale Abstand des Bruchs werden etwas größer. Ohne das `display="block"`-Attribut wird die Höhe minimiert, um den Fluss des umgebenden Textes nicht zu stören. Mit dem `display="block"`-Attribut liegt der Schwerpunkt stattdessen auf der Lesbarkeit der mathematischen Formel.

> [!NOTE]
> Dies entspricht dem LaTeX-Konzept von _inline_-Formeln (begrenzt durch Dollarnotationen `$...$`) und _display_-Formeln (begrenzt durch `\[...\]`).

> [!NOTE]
> Die oben erwähnte Erscheinungsänderung wird tatsächlich durch die [`math-style`](/de/docs/Web/CSS/math-style)-Eigenschaft gesteuert, die anfänglich `normal` für `<math display="block">` und andernfalls `compact` ist. In einigen MathML-Teilbäumen kann diese Eigenschaft dann automatisch `compact` werden, aber wir werden diese Feinheit für dieses Einführungstutorial ignorieren. Auch dies ist ähnlich zu LaTeX.

## Gruppierung mit dem \<mrow>-Element

Das `<math>`-Element kann tatsächlich eine beliebige Anzahl von Kindern enthalten und wird im Wesentlichen in eine Reihe gerendert. Beispielsweise würde die einfache Formel "1 + 2 + 3" in MathML wie folgt kodiert werden:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

Das `<mrow>`-Element ist ein generischer Container, der ein ähnliches Layout vornimmt, aber überall im MathML-Teilbaum platziert werden kann. Es ist nützlich, um mehrere Elemente zusammenzufassen. Beispielsweise ist der Zähler des folgenden Bruchs (sein erstes Kind) "eins plus zwei".

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

Üben Sie, die folgenden Ausdrücke mit nur den bisher behandelten MathML-Elementen zu schreiben. Wenn Sie nicht weiterkommen oder die Lösung überprüfen möchten, schauen Sie sich den Quellcode des Beispiels an.

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

In diesem Artikel haben wir uns angesehen, wie man ein `<math>`-Element verwendet, um eine mathematische Formel in ein HTML-Dokument einzufügen. Wir haben Unterschiede im Rendering von `<math>`-Elementen, die `display="block"` verwenden, oder nicht, kennengelernt. Außerdem sind wir auf einige andere MathML-Elemente gestoßen: `<mfrac>` für Brüche, `<mrow>` zur Gruppierung und schließlich einige Textelemente. Wir werden diese [Textcontainer](/de/docs/Web/MathML/Guides/Text_containers) im nächsten Artikel weiter analysieren.

## Siehe auch

- [MathML verwenden](/de/docs/Web/MathML/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Element/mrow)
- [Die `math-style`-Eigenschaft](/de/docs/Web/CSS/math-style)
- [Die `math-depth`-Eigenschaft](/de/docs/Web/CSS/math-depth)

{{NextMenu("Web/MathML/Guides/Text_containers", "Web/MathML/Guides")}}
