---
title: Einführung in MathML
short-title: Getting started
slug: Web/MathML/Tutorials/For_beginners/Getting_started
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und sehen, wie man MathML-Formeln darin einfügt und dabei einige Elemente einführt.

## Einfügen von Formeln in HTML über das \<math>-Element

MathML verwendet die gleiche Syntax wie HTML, um einen Baum von Elementen und Attributen darzustellen. Insbesondere wird jede mathematische Formel durch ein `<math>`-Element repräsentiert, das innerhalb einer HTML-Seite platziert werden kann. Im folgenden Dokument befindet es sich in einem Absatz von Text:

```html live-sample___inserting_formulas_in_HTML
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
```

Das `<mfrac>`-Element spezifiziert einen Bruch mit einem Zähler (sein erstes Kind) und einem Nenner (sein zweites Kind). So wird es in Ihrem Browser dargestellt:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> Wenn Sie nur "1 3" anstelle eines Bruches sehen, dann unterstützt Ihr Browser möglicherweise kein MathML. Überprüfen Sie die [Browser-Kompatibilitäts-Tabelle](/de/docs/Web/MathML/Reference/Element/math#browser_compatibility) für weitere Details.

### Das display-Attribut

Beachten Sie, dass in dem vorherigen Beispiel die Formel auf der gleichen Zeile wie der Text des Absatzes ist. Es ist jedoch recht üblich, stattdessen große mathematische Formeln zentriert auf einer eigenen Zeile darzustellen, wie unten gezeigt. Um dies zu erreichen, müssen Sie ein `display="block"`-Attribut an das `<math>`-Element anhängen.

```html hidden live-sample___the_display_attribute
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
```

{{ EmbedLiveSample('The_display_attribute', 700, 100, "", "") }}

Sie werden möglicherweise auch eine subtile Veränderung im Erscheinungsbild bemerken: Der Text und der vertikale Abstand des Bruches werden etwas größer. Ohne das `display="block"`-Attribut wird die Höhe minimiert, um den Fluss des umgebenden Textes nicht zu stören. Mit dem `display="block"`-Attribut liegt der Schwerpunkt stattdessen auf der Lesbarkeit der mathematischen Formel.

> [!NOTE]
> Dies entspricht dem LaTeX-Konzept von _inline_-Formeln (begrenzt durch Dollarzeichen `$...$`) und _display_-Formeln (begrenzt durch `\[...\]`).

> [!NOTE]
> Die oben erwähnte Änderung im Erscheinungsbild wird tatsächlich durch die [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style)-Eigenschaft gesteuert, die anfänglich `normal` für `<math display="block">` und `compact` ansonsten ist. In einigen MathML-Teilbäumen kann diese Eigenschaft dann automatisch `compact` werden, aber wir werden diese Feinheit für dieses Einführungstutorial ignorieren. Auch dies ist ähnlich wie bei LaTeX.

## Gruppierung mit dem \<mrow>-Element

Das `<math>`-Element kann tatsächlich eine beliebige Anzahl von Kindern enthalten und wird sie im Wesentlichen in einer Zeile rendern. Zum Beispiel würde die einfache Formel "1 + 2 + 3" in MathML so kodiert werden:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

Das `<mrow>`-Element ist ein generisches Container-Element, das ein ähnliches Layoutfunktionen bietet, jedoch überall im MathML-Teilbaum platziert werden kann. Es ist hilfreich, um mehrere Elemente zusammenzufassen. Zum Beispiel ist der Zähler des folgenden Bruches (sein erstes Kind) "eins plus zwei".

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

### Ihr Zug: Verschachtelte Ausdrücke schreiben

Als Übung herausfinden, wie Sie die folgenden Ausdrücke nur mit den bisher gesehenen MathML-Elementen schreiben. Wenn Sie feststecken oder die Lösung überprüfen möchten, schauen Sie sich den Quellcode des Beispiels an.

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

In diesem Artikel haben wir uns angesehen, wie man das `<math>`-Element verwendet, um eine mathematische Formel in ein HTML-Dokument einzufügen. Wir haben die Unterschiede in der Darstellung zwischen `<math>`-Elementen, die `display="block"` verwenden oder nicht, gelernt. Darüber hinaus sind wir auf ein paar weitere MathML-Elemente gestoßen: `<mfrac>` für Brüche, `<mrow>` für Gruppierungen und schließlich einige Textelemente. Diese [Textcontainer](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers) werden wir im nächsten Artikel weiter analysieren.

## Siehe auch

- [Verwendung von MathML](/de/docs/Web/MathML/Guides/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Reference/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Reference/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Reference/Element/mrow)
- [Die `math-style`-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/math-style)
- [Die `math-depth`-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/math-depth)

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}
