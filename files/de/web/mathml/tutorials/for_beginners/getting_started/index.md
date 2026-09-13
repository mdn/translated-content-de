---
title: Einstieg in MathML
short-title: Erste Schritte
slug: Web/MathML/Tutorials/For_beginners/Getting_started
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und sehen, wie man MathML-Formeln darin einfügt, wobei wir auf dem Weg einige Elemente einführen.

## Einfügen von Formeln in HTML mit dem \<math>-Element

MathML verwendet dieselbe Syntax wie HTML, um einen Baum von Elementen und Attributen darzustellen. Insbesondere wird jede mathematische Formel durch ein `<math>`-Element repräsentiert, das in eine HTML-Seite eingefügt werden kann. Im folgenden Dokument befindet es sich innerhalb eines Textabsatzes:

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

Das `<mfrac>`-Element gibt einen Bruch mit einem Zähler (seinem ersten Kind) und einem Nenner (seinem zweiten Kind) an. So wird es in Ihrem Browser dargestellt:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> Wenn Sie nur "1 3" statt eines Bruchs sehen, unterstützt Ihr Browser möglicherweise kein MathML. Schauen Sie sich die [Browser-Kompatibilitätstabelle](/de/docs/Web/MathML/Reference/Element/math#browser_compatibility) für weitere Details an.

### Das display-Attribut

Beachten Sie, dass im vorherigen Beispiel die Formel in derselben Zeile wie der Text des Absatzes ist. Es ist jedoch sehr gebräuchlich, stattdessen große mathematische Formeln zentriert in ihrer eigenen Zeile darzustellen, wie unten gezeigt. Um dies zu erreichen, müssen Sie ein `display="block"`-Attribut an das `<math>`-Element anhängen.

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

Vielleicht bemerken Sie auch eine subtile Änderung im Erscheinungsbild: Der Text und der vertikale Abstand des Bruchs werden etwas größer. Ohne das `display="block"`-Attribut wird die Höhe minimiert, um den Fluss des umgebenden Textes nicht zu stören. Mit dem `display="block"`-Attribut wird stattdessen auf die Lesbarkeit der mathematischen Formel Wert gelegt.

> [!NOTE]
> Dies entspricht dem LaTeX-Konzept von _Inline_-Formeln (begrenzt durch Dollarzeichen `$...$`) und _Display_-Formeln (begrenzt durch `\[...\]`).

> [!NOTE]
> Die oben erwähnte Erscheinungsbildveränderung wird tatsächlich durch die {{cssxref("math-style")}}-Eigenschaft kontrolliert, die zunächst `normal` für `<math display="block">` und `compact` sonst ist. In einigen MathML-Unterbäumen kann diese Eigenschaft dann automatisch `compact` werden, aber wir ignorieren diese Feinheit für dieses Einführungs-Tutorial. Auch dies ist ähnlich wie bei LaTeX.

## Gruppierung mit dem \<mrow>-Element

Das `<math>`-Element kann tatsächlich eine beliebige Anzahl von Kindern enthalten und stellt sie im Wesentlichen in einer Reihe dar. Zum Beispiel würde die einfache Formel "1 + 2 + 3" in MathML so codiert werden:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

Das `<mrow>`-Element ist ein generischer Container, der ein ähnliches Layout ausführt, aber überall im MathML-Unterbaum platziert werden kann. Es ist hilfreich, mehrere Elemente zusammenzufassen. Beispielsweise ist der Zähler des folgenden Bruchs (sein erstes Kind) "eins plus zwei".

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

### Ihr Einsatz: Verschachtelte Ausdrücke schreiben

Als Übung finden Sie heraus, wie die folgenden Ausdrücke nur mit den bisher gesehenen MathML-Elementen geschrieben werden. Wenn Sie stecken bleiben oder die Lösung überprüfen möchten, sehen Sie sich den Quellcode des Beispiels an.

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

In diesem Artikel haben wir uns angesehen, wie das `<math>`-Element verwendet wird, um eine mathematische Formel in ein HTML-Dokument einzufügen. Wir haben die Darstellungsunterschiede zwischen `<math>`-Elementen kennengelernt, die `display="block"` verwenden oder nicht. Außerdem haben wir auf ein paar andere MathML-Elemente gestoßen: `<mfrac>` für Brüche, `<mrow>` für Gruppierungen und schließlich einige Textelemente. Wir werden diese [Textcontainer](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers) im nächsten Artikel weiter analysieren.

## Siehe auch

- [Verwendung von MathML](/de/docs/Web/MathML/Guides/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Reference/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Reference/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Reference/Element/mrow)
- {{cssxref("math-style")}}-Eigenschaft
- {{cssxref("math-depth")}}-Eigenschaft

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}
