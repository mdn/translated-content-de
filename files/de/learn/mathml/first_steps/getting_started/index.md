---
title: Erste Schritte mit MathML
slug: Learn/MathML/First_steps/Getting_started
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{NextMenu("Learn/MathML/First_steps/Text_containers", "Learn/MathML/First_steps")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und sehen, wie wir MathML-Formeln darin einfügen können, wobei wir unterwegs einige Elemente einführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Arbeiten mit Dateien</a
        >, und HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das grundlegende Syntax von MathML zu verstehen und wie man es in HTML-Seiten integriert.
      </td>
    </tr>
  </tbody>
</table>

## Einfügen von Formeln in HTML über das \<math>-Element

MathML verwendet die gleiche Syntax wie HTML, um einen Baum von Elementen und Attributen darzustellen. Insbesondere wird jede mathematische Formel durch ein `<math>`-Element dargestellt, das in eine HTML-Seite eingefügt werden kann. Im folgenden Dokument befindet es sich in einem Absatztext:

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
> Wenn Sie nur "1 3" statt eines Bruchs sehen, unterstützt Ihr Browser möglicherweise kein MathML. Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](/de/docs/Web/MathML/Element/math#browser_compatibility) für weitere Details.

### Das Attribut display

Beachten Sie, dass im vorherigen Beispiel die Formel in derselben Zeile wie der Text des Absatzes steht. Es ist jedoch recht häufig, große mathematische Formeln zentriert auf einer eigenen Linie darzustellen, wie unten gezeigt. Um dies zu erreichen, müssen Sie ein `display="block"`-Attribut am `<math>`-Element anbringen.

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

Sie werden auch eine subtile Änderung im Aussehen bemerken: Der Text und der vertikale Abstand des Bruchs werden etwas größer. Ohne das `display="block"`-Attribut wird die Höhe minimiert, um den Fluss des umgebenden Texts nicht zu stören. Mit dem `display="block"`-Attribut liegt der Schwerpunkt stattdessen auf der Lesbarkeit der mathematischen Formel.

> [!NOTE]
> Dies entspricht dem LaTeX-Konzept von _inline_-Formeln (eingerahmt von Dollarzeichen `$...$`) und _display_-Formeln (eingerahmt von `\[...\]`).

> [!NOTE]
> Die oben erwähnte Änderung im Aussehen wird tatsächlich von der [`math-style`](/de/docs/Web/CSS/math-style)-Eigenschaft gesteuert, die zunächst `normal` für `<math display="block">` und ansonsten `compact` ist. In einigen MathML-Subtrees kann diese Eigenschaft automatisch `compact` werden, aber wir werden diese Feinheit in diesem einführenden Tutorial ignorieren. Auch dies ist ähnlich zu LaTeX.

## Gruppierung mit dem \<mrow>-Element

Das `<math>`-Element kann tatsächlich eine beliebige Anzahl von Kindern enthalten und wird sie im Wesentlichen in einer Reihe darstellen. Beispielsweise würde die einfache Formel "1 + 2 + 3" in MathML so kodiert:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

Das `<mrow>`-Element ist ein generisches Container-Element, das ein ähnliches Layout ausführt, jedoch überall im MathML-Unterbaum platziert werden kann. Es ist hilfreich, mehrere Elemente zusammenzufassen. Zum Beispiel ist der Zähler des folgenden Bruchs (sein erstes Kind) "eins plus zwei".

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

Als Übung überlegen Sie, wie Sie die folgenden Ausdrücke nur mit den bisherigen MathML-Elementen schreiben können. Wenn Sie nicht weiterkommen oder die Lösung überprüfen möchten, sehen Sie sich den Quellcode des Beispiels an.

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

In diesem Artikel haben wir uns angesehen, wie das `<math>`-Element verwendet wird, um eine mathematische Formel in ein HTML-Dokument einzufügen. Wir haben über die Unterschiedlichkeiten in der Darstellung zwischen `<math>`-Elementen, die `display="block"` verwenden, und solchen, die dies nicht tun, gelernt. Außerdem haben wir einige andere MathML-Elemente kennengelernt: `<mfrac>` für Brüche, `<mrow>` für Gruppierungen und letztlich einige Textelemente. Wir werden diese [Textcontainer](/de/docs/Learn/MathML/First_steps/Text_containers) im nächsten Artikel weiter analysieren.

{{LearnSidebar}}{{NextMenu("Learn/MathML/First_steps/Text_containers", "Learn/MathML/First_steps")}}

## Siehe auch

- [Verwendung von MathML](/de/docs/Web/MathML/Authoring#using_mathml)
- [Das `<math>`-Element](/de/docs/Web/MathML/Element/math)
- [Das `<mfrac>`-Element](/de/docs/Web/MathML/Element/mfrac)
- [Das `<mrow>`-Element](/de/docs/Web/MathML/Element/mrow)
- [Die `math-style`-Eigenschaft](/de/docs/Web/CSS/math-style)
- [Die `math-depth`-Eigenschaft](/de/docs/Web/CSS/math-depth)
