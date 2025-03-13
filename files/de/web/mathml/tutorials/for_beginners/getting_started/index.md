---
title: Einführung in MathML
short-title: Erste Schritte
slug: Web/MathML/Tutorials/For_beginners/Getting_started
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und sehen, wie man MathML-Formeln darin einfügt, wobei wir einige Elemente auf dem Weg einführen.

## Einfügen von Formeln in HTML über das \<math>-Element

MathML verwendet dieselbe Syntax wie HTML, um einen Baum von Elementen und Attributen darzustellen. Insbesondere wird jede mathematische Formel durch ein `<math>`-Element repräsentiert, das innerhalb einer HTML-Seite platziert werden kann. Im folgenden Dokument befindet es sich in einem Absatz von Text:

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

Das `<mfrac>`-Element spezifiziert einen Bruch mit einem Zähler (sein erstes Kind) und einem Nenner (sein zweites Kind). So wird es in Ihrem Browser gerendert:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> Wenn Sie nur "1 3" statt eines Bruchs sehen, dann unterstützt Ihr Browser möglicherweise MathML nicht. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/MathML/Reference/Element/math#browser_compatibility) für weitere Details an.

### Das Anzeige-Attribut

Beachten Sie, dass die Formel im vorherigen Beispiel in derselben Zeile wie der Text des Absatzes steht. Es ist jedoch recht häufig, dass große mathematische Formeln stattdessen zentriert in einer eigenen Zeile dargestellt werden, wie unten gezeigt. Um dies zu erreichen, müssen Sie ein `display="block"`-Attribut an das `<math>`-Element anhängen.

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

Sie werden möglicherweise auch eine subtile Veränderung im Erscheinungsbild bemerken: Der Text und der vertikale Abstand des Bruchs werden etwas größer. Ohne das `display="block"`-Attribut wird die Höhe minimiert, um den Fluss des umgebenden Textes nicht zu stören. Mit dem `display="block"`-Attribut wird stattdessen der Lesbarkeit der mathematischen Formel Priorität eingeräumt.

> [!NOTE]
> Dies entspricht dem LaTeX-Konzept von _inline_-Formeln (eingerahmt durch Dollarzeichen `$...$`) und _display_-Formeln (eingerahmt durch `\[...\]`).

> [!NOTE]
> Die oben erwähnte Aussehensveränderung wird tatsächlich durch die [`math-style`](/de/docs/Web/CSS/math-style)-Eigenschaft gesteuert, die für `<math display="block">` ursprünglich `normal` und ansonsten `compact` ist. In einigen MathML-Teilbäumen kann diese Eigenschaft dann automatisch `compact` werden, aber wir werden diese Feinheit für dieses Einführungstutorial ignorieren. Auch dies ist ähnlich zu LaTeX.

## Gruppierung mit dem \<mrow>-Element

Das `<math>`-Element kann tatsächlich eine beliebige Anzahl von Kindern enthalten und wird sie im Wesentlichen in einer Reihe rendern. Zum Beispiel würde die einfache Formel "1 + 2 + 3" in MathML so kodiert werden:

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

### Aktives Lernen: verschachtelte Ausdrücke

Als Übung versuchen Sie, die folgenden Ausdrücke mit den bisher gesehenen MathML-Elementen zu schreiben. Wenn Sie feststecken oder die Lösung überprüfen möchten, schauen Sie sich den Quellcode des Beispiels an.

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

In diesem Artikel haben wir uns angesehen, wie man das `<math>`-Element verwendet, um eine mathematische Formel in ein HTML-Dokument einzufügen. Wir haben über die Unterschiedlichkeiten im Rendering zwischen `<math>`-Elementen gelernt, die `display="block"` verwenden oder nicht. Zusätzlich sind uns ein paar andere MathML-Elemente begegnet: `<mfrac>` für Brüche, `<mrow>` zur Gruppierung und schließlich einige Textelemente. Wir werden diese [Textcontainer](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers) im nächsten Artikel weiter analysieren.

## Siehe auch

- [Using MathML](/de/docs/Web/MathML/Guides/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Reference/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Reference/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Reference/Element/mrow)
- [Die `math-style`-Eigenschaft](/de/docs/Web/CSS/math-style)
- [Die `math-depth`-Eigenschaft](/de/docs/Web/CSS/math-depth)

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}
