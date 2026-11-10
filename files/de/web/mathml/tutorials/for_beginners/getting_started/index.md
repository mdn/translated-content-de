---
title: Erste Schritte mit MathML
short-title: Erste Schritte
slug: Web/MathML/Tutorials/For_beginners/Getting_started
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}

In diesem Artikel sehen wir uns an einem einfachen HTML-Dokument an, wie sich MathML-Formeln einfügen lassen. Dabei lernen wir einige Elemente kennen.

## Formeln mit dem Element \<math> in HTML einfügen

MathML verwendet dieselbe Syntax wie HTML, um eine Baumstruktur aus Elementen und Attributen darzustellen. Jede mathematische Formel wird durch ein `<math>`-Element repräsentiert, das in eine HTML-Seite eingefügt werden kann. Im folgenden Dokument steht es innerhalb eines Textabsatzes:

```html live-sample___inserting_formulas_in_html
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

Das `<mfrac>`-Element definiert einen Bruch mit einem Zähler (seinem ersten Kindelement) und einem Nenner (seinem zweiten Kindelement). So wird er in Ihrem Browser dargestellt:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> Wenn Sie statt eines Bruchs nur „1 3“ sehen, unterstützt Ihr Browser MathML möglicherweise nicht. Weitere Informationen finden Sie in der [Browser-Kompatibilitätstabelle](/de/docs/Web/MathML/Reference/Element/math#browser_compatibility).

### Das Attribut display

Beachten Sie, dass die Formel im vorherigen Beispiel in derselben Zeile wie der Absatztext steht. Größere mathematische Formeln werden jedoch häufig zentriert in einer eigenen Zeile dargestellt, wie unten gezeigt. Dazu müssen Sie dem `<math>`-Element das Attribut `display="block"` hinzufügen.

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

Möglicherweise fällt Ihnen auch eine kleine Veränderung im Erscheinungsbild auf: Die Schrift und die vertikalen Abstände des Bruchs werden etwas größer. Ohne das Attribut `display="block"` wird die Höhe möglichst gering gehalten, damit der umgebende Textfluss nicht gestört wird. Mit dem Attribut `display="block"` hat dagegen die Lesbarkeit der mathematischen Formel Vorrang.

> [!NOTE]
> Dies entspricht dem LaTeX-Konzept der _Inline_-Formeln (begrenzt durch Dollarzeichen `$...$`) und der _Display_-Formeln (begrenzt durch `\[...\]`).

> [!NOTE]
> Die oben erwähnte Veränderung des Erscheinungsbilds wird durch die Eigenschaft {{cssxref("math-style")}} gesteuert. Sie hat für `<math display="block">` anfangs den Wert `normal`, andernfalls den Wert `compact`. In manchen MathML-Teilbäumen kann diese Eigenschaft anschließend automatisch den Wert `compact` annehmen. Auf diese Feinheit gehen wir in diesem einführenden Tutorial jedoch nicht ein. Auch das ist ähnlich wie bei LaTeX.

## Elemente mit \<mrow> gruppieren

Das `<math>`-Element kann beliebig viele Kindelemente enthalten und stellt sie im Wesentlichen nebeneinander dar. Die einfache Formel „1 + 2 + 3“ wird in MathML beispielsweise so geschrieben:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

Das `<mrow>`-Element ist ein allgemeiner Container, der seine Inhalte ähnlich anordnet, aber an beliebiger Stelle im MathML-Teilbaum verwendet werden kann. Es hilft dabei, mehrere Elemente zu gruppieren. Der Zähler des folgenden Bruchs (sein erstes Kindelement) lautet beispielsweise „eins plus zwei“.

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

### Jetzt sind Sie dran: Verschachtelte Ausdrücke schreiben

Versuchen Sie als Übung, die folgenden Ausdrücke ausschließlich mit den MathML-Elementen zu schreiben, die Sie bisher kennengelernt haben. Wenn Sie nicht weiterkommen oder Ihre Lösung überprüfen möchten, sehen Sie sich den Quellcode des Beispiels an.

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

{{ EmbedLiveSample('nested-expressions', 700, 200, "", "") }}

## Zusammenfassung

In diesem Artikel haben wir uns angesehen, wie sich mit dem `<math>`-Element eine mathematische Formel in ein HTML-Dokument einfügen lässt. Wir haben die Unterschiede bei der Darstellung von `<math>`-Elementen mit und ohne `display="block"` kennengelernt. Außerdem sind uns einige weitere MathML-Elemente begegnet: `<mfrac>` für Brüche, `<mrow>` zum Gruppieren und einige Textelemente. Diese [Textcontainer](/de/docs/Web/MathML/Tutorials/For_beginners/Text_containers) sehen wir uns im nächsten Artikel genauer an.

## Siehe auch

- [MathML verwenden](/de/docs/Web/MathML/Guides/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Reference/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Reference/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Reference/Element/mrow)
- Die Eigenschaft {{cssxref("math-style")}}
- Die Eigenschaft {{cssxref("math-depth")}}

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}
