---
title: Erste Schritte mit MathML
short-title: Erste Schritte
slug: Web/MathML/Tutorials/For_beginners/Getting_started
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}

In diesem Artikel nehmen wir ein einfaches HTML-Dokument und sehen uns an, wie man MathML-Formeln darin einfügt, indem wir unterwegs einige Elemente einführen.

## Einfügen von Formeln in HTML über das \<math>-Element

MathML verwendet dieselbe Syntax wie HTML, um einen Baum von Elementen und Attributen darzustellen. Insbesondere wird jede mathematische Formel von einem `<math>`-Element repräsentiert, das in eine HTML-Seite eingefügt werden kann. Im folgenden Dokument befindet es sich in einem Absatz von Text:

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

Das `<mfrac>`-Element spezifiziert einen Bruch mit einem Zähler (sein erstes Kind) und einem Nenner (sein zweites Kind). So wird es in Ihrem Browser dargestellt:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> Wenn Sie nur "1 3" statt eines Bruchs sehen, unterstützt Ihr Browser möglicherweise kein MathML. Sehen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/MathML/Reference/Element/math#browser_compatibility) für weitere Details an.

### Das display-Attribut

Beachten Sie, dass in dem vorherigen Beispiel die Formel in derselben Zeile wie der Text des Absatzes steht. Es ist jedoch durchaus üblich, große mathematische Formeln zentriert in einer eigenen Zeile darzustellen, wie unten gezeigt. Um dies zu erreichen, müssen Sie dem `<math>`-Element ein `display="block"`-Attribut hinzufügen.

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
> Dies entspricht LaTeX' Konzept von _inline_ Formeln (begrenzt durch Dollarzeichen `$...$`) und _display_ Formeln (begrenzt durch `\[...\]`).

> [!NOTE]
> Die oben erwähnte Erscheinungsveränderung wird tatsächlich durch die [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style)-Eigenschaft gesteuert, die anfangs für `<math display="block">` `normal` und sonst `compact` ist. In einigen MathML-Unterbäumen kann diese Eigenschaft dann automatisch `compact` werden, aber wir werden diese Feinheit für dieses einführende Tutorial ignorieren. Auch dies ist ähnlich zu LaTeX.

## Gruppierung mit dem \<mrow>-Element

Das `<math>`-Element kann tatsächlich eine beliebige Anzahl von Kindern enthalten und wird sie im Wesentlichen in einer Zeile anzeigen. Zum Beispiel wird die einfache Formel "1 + 2 + 3" in MathML so codiert:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

Das `<mrow>`-Element ist ein generischer Container, der ein ähnliches Layout bietet, aber überall im MathML-Unterbaum platziert werden kann. Es ist hilfreich, mehrere Elemente zusammenzufassen. Zum Beispiel ist der Zähler des folgenden Bruchs (sein erstes Kind) "eins plus zwei".

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

### Ihr Turn: Verschachtelte Ausdrücke schreiben

Als Übung finden Sie heraus, wie man die folgenden Ausdrücke mit nur den bisher gesehenen MathML-Elementen schreibt. Wenn Sie nicht weiterkommen oder die Lösung überprüfen möchten, sehen Sie sich den Quellcode des Beispiels an.

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

In diesem Artikel haben wir uns angesehen, wie man das `<math>`-Element verwendet, um eine mathematische Formel in ein HTML-Dokument einzufügen. Wir haben die Unterschiede in der Darstellung zwischen `<math>`-Elementen, die `display="block"` verwenden oder nicht, kennengelernt. Darüber hinaus sind wir auf ein paar andere MathML-Elemente gestoßen: `<mfrac>` für Brüche, `<mrow>` für Gruppierung und schließlich einige Textelemente. Wir werden diese [Textcontainer](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers) im nächsten Artikel weiter analysieren.

## Siehe auch

- [Verwendung von MathML](/de/docs/Web/MathML/Guides/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Reference/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Reference/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Reference/Element/mrow)
- [Die `math-style`-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/math-style)
- [Die `math-depth`-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/math-depth)

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}
