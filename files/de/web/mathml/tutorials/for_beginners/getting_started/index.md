---
title: Erste Schritte mit MathML
short-title: Erste Schritte
slug: Web/MathML/Tutorials/For_beginners/Getting_started
l10n:
  sourceCommit: 6b01bafc68dffb3a50f70882d2ba24cd6f9d886f
---

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und sehen, wie man MathML-Formeln darin einfügt, und dabei einige Elemente vorstellen.

## Einfügen von Formeln in HTML über das \<math>-Element

MathML verwendet die gleiche Syntax wie HTML, um einen Baum aus Elementen und Attributen darzustellen. Insbesondere wird jede mathematische Formel durch ein `<math>`-Element dargestellt, das in eine HTML-Seite eingefügt werden kann. Im folgenden Dokument befindet es sich in einem Absatz des Textes:

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

Das `<mfrac>`-Element spezifiziert einen Bruch mit einem Zähler (sein erstes Kind) und einem Nenner (sein zweites Kind). So wird es in Ihrem Browser gerendert:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> Wenn Sie nur "1 3" anstelle eines Bruchs sehen, unterstützt Ihr Browser möglicherweise kein MathML. Überprüfen Sie die [Browser-Kompatibilitätstabelle](/de/docs/Web/MathML/Reference/Element/math#browser_compatibility) für weitere Details.

### Das display-Attribut

Beachten Sie, dass in dem vorherigen Beispiel die Formel in derselben Zeile wie der Text des Absatzes steht. Es ist jedoch ziemlich üblich, große mathematische Formeln stattdessen zentriert in einer eigenen Zeile darzustellen, wie unten gezeigt. Um dies zu erreichen, müssen Sie das Attribut `display="block"` an das `<math>`-Element anhängen.

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

Sie werden vielleicht auch eine subtile Veränderung im Erscheinungsbild bemerken: Der Text und der vertikale Abstand des Bruchs werden etwas größer. Ohne das `display="block"`-Attribut wird die Höhe minimiert, um den Fluss des umgebenden Textes nicht zu stören. Mit dem `display="block"`-Attribut wird stattdessen die Lesbarkeit der mathematischen Formel priorisiert.

> [!NOTE]
> Dies entspricht dem LaTeX-Konzept der _Inline_-Formeln (eingeschlossen in Dollarzeichen `$...$`) und _Display_-Formeln (eingeschlossen in `\[...\]`).

> [!NOTE]
> Die oben erwähnte Erscheinungsbildänderung wird tatsächlich durch die {{cssxref("math-style")}}-Eigenschaft kontrolliert, die initial `normal` für `<math display="block">` und sonst `compact` ist. In einigen MathML-Unterbäumen kann diese Eigenschaft dann automatisch `compact` werden, aber wir werden diese Feinheit in diesem Einführungstutorial ignorieren. Auch dies ist ähnlich zu LaTeX.

## Gruppierung mit dem \<mrow>-Element

Das `<math>`-Element kann tatsächlich eine beliebige Anzahl von Kindern enthalten und wird diese im Wesentlichen in einer Reihe rendern. Zum Beispiel würde die einfache Formel "1 + 2 + 3" in MathML wie folgt kodiert:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

Das `<mrow>`-Element ist ein generisches Container-Element, das ähnliche Layouts ausführt, aber überall im MathML-Unterbaum platziert werden kann. Es ist nützlich, um mehrere Elemente zusammenzufassen. Zum Beispiel ist der Zähler des folgenden Bruchs (sein erstes Kind) "eins plus zwei".

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

### Ihre Aufgabe: Verschachtelte Ausdrücke schreiben

Als Übung versuchen Sie, die folgenden Ausdrücke unter Verwendung der bisher gesehenen MathML-Elemente zu schreiben. Wenn Sie nicht weiterkommen oder die Lösung überprüfen möchten, schauen Sie sich den Quellcode des Beispiels an.

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

In diesem Artikel haben wir uns angesehen, wie man das `<math>`-Element verwendet, um eine mathematische Formel in ein HTML-Dokument einzufügen. Wir haben etwas über die Rendierungsunterschiede zwischen `<math>`-Elementen gelernt, die `display="block"` verwenden oder nicht. Außerdem sind wir auf einige andere MathML-Elemente gestoßen: `<mfrac>` für Brüche, `<mrow>` für Gruppierung und schließlich einige Textelemente. Wir werden diese [Textcontainer](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers) im nächsten Artikel weiter analysieren.

## Siehe auch

- [Verwendung von MathML](/de/docs/Web/MathML/Guides/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Reference/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Reference/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Reference/Element/mrow)
- {{cssxref("math-style")}}-Eigenschaft
- {{cssxref("math-depth")}}-Eigenschaft

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}
