---
title: Block- und Inline-Layout im normalen Fluss
slug: Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen untersuchen, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Der normale Fluss wird in der [CSS 2.1 Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontextes_ sind. Sie können entweder Block- oder Inline-Elemente sein, jedoch nicht beides gleichzeitig. Wir beschreiben Block-Level-Boxen als Teil eines _Block-Formatierungskontextes_ und Inline-Level-Boxen als Teil eines _Inline-Formatierungskontextes_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, wird ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> "In einem Block-Formatierungskontext werden Boxen nacheinander vertikal, beginnend am oberen Rand eines umschließenden Blocks, angeordnet. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Abstände zwischen angrenzenden Block-Elementen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die linke äußere Kante jeder Box die linke Kante des umschließenden Blocks (bei rechts-nach-links-Formatierungen berühren sich die rechten Kanten)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Boxen horizontal, nacheinander ab der Oberkante eines umschließenden Blocks angeordnet. Horizontale Abstände, Ränder und Innenabstände (Padding) zwischen diesen Boxen werden berücksichtigt. Die Boxen können auf verschiedene Weise vertikal ausgerichtet werden: Ihre unteren oder oberen Kanten können ausgerichtet werden, oder die Baselines des Textes innerhalb können ausgerichtet werden. Der rechteckige Bereich, der die Boxen bildet, die eine Zeile formen, wird als Zeilenbox bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1 Spezifikation Dokumente als in einem horizontalen, von-oben-nach-unten Schreibrichtung beschreibend ansieht. Beispielsweise durch die Beschreibung des vertikalen Abstands zwischen Block-Boxen. Das Verhalten von Block- und Inline-Elementen ist dasselbe, wenn in einer vertikalen Schreibrichtung gearbeitet wird; wir erkunden dies in unserem [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes) Leitfaden.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus wie Englisch werden vertikal, eins unter dem anderen, angeordnet.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie dann horizontal angeordnet.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden arbeiten wir auf Englisch und damit in einem horizontalen Schreibmodus. Alles Beschriebene sollte jedoch genauso funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind es die Abstände zwischen zwei Block-Boxen, die eine Trennung zwischen den Elementen schaffen. Wir sehen dies in einem sehr einfachen Layout von zwei Absätzen, denen ich eine Umrandung hinzugefügt habe. Die standardmäßigen Browser-Stylesheets fügen den Absätzen Abstände hinzu, indem sie einen Abstand am oberen und unteren Rand hinzufügen.

```html live-sample___normal-flow
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___normal-flow
p {
  border: 2px solid green;
}
```

{{EmbedLiveSample("normal-flow", "", "200px")}}

Wenn wir Abstände auf dem Absatz-Element auf `0` setzen, werden die Ränder sich berühren.

```html live-sample___normal-flow-margin-zero
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___normal-flow-margin-zero
p {
  border: 2px solid green;
  margin: 0;
}
```

{{EmbedLiveSample("normal-flow-margin-zero")}}

Standardmäßig werden Block-Elemente den gesamten Platz in der Inline-Richtung einnehmen, sodass unsere Absätze sich entfalten und so groß wie möglich in ihrem umschließenden Block werden. Wenn wir ihnen eine Breite geben, werden sie weiterhin einer unter dem anderen angeordnet, selbst wenn Platz wäre, damit sie nebeneinander stehen könnten. Jeder beginnt an der Startkante des umschließenden Blocks, also an dem Ort, an dem in diesem Schreibmodus Sätze beginnen würden.

```html live-sample___normal-flow-width
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___normal-flow-width
p {
  border: 2px solid green;
  width: 40%;
}
```

{{EmbedLiveSample("normal-flow-width", "", "370px")}}

### Margin-Kollaps

Die Spezifikation erklärt, dass die Abstände zwischen Block-Elementen _kollabieren_. Das bedeutet, dass, wenn Sie ein Element mit einem oberen Abstand direkt nach einem Element mit einem unteren Abstand haben, anstatt dass der Gesamtplatz die Summe dieser beiden Abstände ist, der Abstand kollabiert und so im Wesentlichen so groß wie der größere der beiden Abstände wird.

Im folgenden Beispiel haben die Absätze einen oberen Abstand von `20px` und einen unteren Abstand von `40px`. Die Größe des Abstands zwischen den Absätzen ist `40px`, da der kleinere obere Abstand des zweiten Absatzes mit dem größeren unteren Abstand des ersten zusammenkollabiert ist.

```html live-sample___normal-flow-collapsing
<div class="box">
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css live-sample___normal-flow-collapsing
p {
  border: 2px solid green;
  margin: 20px 0 40px 0;
}
```

{{EmbedLiveSample("normal-flow-collapsing", "", "230px")}}

Sie können mehr über das Margin-Kollapsing in unserem Artikel [Beherrschung des Margin-Kollapses](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) erfahren.

> [!NOTE]
> Wenn Sie nicht sicher sind, ob Abstände kollabieren, prüfen Sie die Box-Modell-Werte in den DevTools Ihres Browsers. Diese geben Ihnen die tatsächliche Größe des Abstandes an, was Ihnen helfen kann zu identifizieren, was passiert.
>
> ![Screenshot des Box-Modell-Panels in den Browser-Entwicklungstools, welches die vier Werte für Abstand, Umrandung und Innenabstand zusammen mit Höhe und Breite in einer Grafik oben anzeigt und darunter Box-Sizing, Display, Float, Zeilenhöhe, Position und Z-Index auflistet.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, in der in diesem bestimmten Schreibmodus Sätze verlaufen. Auch wenn wir Inline-Elemente nicht unbedingt als Boxen betrachten, sind sie es nach den Regeln von CSS doch. Diese Inline-Boxen sind nacheinander angeordnet. Wenn im umschließenden Block nicht genug Platz für alle Boxen ist, kann eine Box auf eine neue Zeile umbrechen. Die erstellten Zeilen werden als Zeilenboxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt werden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

{{EmbedLiveSample("inline")}}

Die Boxen um die Wörter vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt wurden, um sicherzustellen, dass alles in einer Box eingehüllt ist, aber solche, die wir nicht direkt anvisieren können.

Die Größe der Zeilenbox in der Block-Richtung (also die Höhe im Englischen) wird durch die höchste Box in ihr definiert. Im nächsten Beispiel ist das `<strong>`-Element auf 300%; da dieses Element zwei Zeilen umfasst, bestimmt es nun die Höhe der Zeilenboxen dieser beiden Zeilen.

```html live-sample___line-box
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

```css live-sample___line-box
strong {
  font-size: 300%;
}
```

{{EmbedLiveSample("line-box")}}

Erfahren Sie mehr darüber, wie Block- und Inline-Boxen sich in unserem Leitfaden zum [visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model) verhalten.

## Die display-Eigenschaft und Fluss-Layout

Zusätzlich zu den in CSS2.1 vorhandenen Regeln beschreiben neue CSS-Stufen weiter das Verhalten von Block- und Inline-Boxen. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und alle innen enthaltenen Boxen sich verhalten. Im CSS Display Model Level 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten von Boxen und der von ihnen erzeugten Boxen ändert.

Der Anzeigetyp eines Elements definiert den äußeren Anzeigetyp; dieser bestimmt, wie die Box zusammen mit anderen Elementen im selben Formatierungskontext angezeigt wird. Er definiert auch den inneren Anzeigetyp, der bestimmt, wie sich Boxen innerhalb dieses Elements verhalten. Wir können dies sehr deutlich sehen, wenn wir ein Flex-Layout betrachten. Im folgenden Beispiel habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Der Flex-Container verhält sich wie ein Block-Element: Er wird in einer neuen Zeile angezeigt und nimmt den gesamten Platz ein, den er in der Inline-Richtung kann. Das ist der äußere Anzeigetyp von `block`.

Die Flex-Elemente hingegen nehmen an einem Flex-Formatierungskontext teil, weil ihr Parent das Element mit `display: flex` ist, welches einen inneren Anzeigetyp von `flex` hat, wodurch der Flex-Formatierungskontext für die direkten Kinder hergestellt wird.

```html live-sample___flex
<div class="container">
  <div>Flex Item</div>
  <div>Flex Item</div>
  <div>
    <div>Children</div>
    <div>are in</div>
    <div>normal flow</div>
  </div>
</div>
```

```css live-sample___flex
.container {
  display: flex;
}

.container > * {
  border: 1px solid green;
}
```

{{EmbedLiveSample("flex")}}

Daher können Sie sich jedes Element in CSS vorstellen, das auf diese Weise funktioniert. Die Box selbst hat einen äußeren Anzeigetyp, sodass sie weiß, wie sie sich im Vergleich zu anderen Boxen verhält. Sie hat dann einen inneren Anzeigetyp, der die Verhaltensweise ihrer Kinder ändert. Diese Kinder haben dann auch einen äußeren und inneren Anzeigetyp. Die Flex-Elemente im vorherigen Beispiel werden durch den Flex-Formatierungskontext an Flex-Level-Boxen angepasst, sodass ihr äußerer Anzeigetyp durch die Teilhabe an dem Flex-Formatierungskontext geregelt wird. Sie haben jedoch einen inneren Anzeigetyp von _flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Innerhalb unserer Flex-Elemente angeordnete Elemente ordnen sich als Block- und Inline-Elemente an, es sei denn, etwas ändert ihren Anzeigetyp.

Dieses Konzept des äußeren und inneren Anzeigetyps ist wichtig, da es uns sagt, dass ein Container, der eine Layoutmethode wie Flexbox (`display: flex`) und Rasterlayout (`display: grid`) verwendet, immer noch am Block- und Inline-Layout teilnimmt, da der äußere Anzeigetyp dieser Methoden `block` ist.

### Ändern des Formatierungskontextes, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten basierend darauf an, was normalerweise für dieses Element sinnvoll ist. Zum Beispiel wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Inhalt stark zu betonen, und wird standardmäßig fett in Browsern angezeigt. Es würde im Allgemeinen keinen Sinn machen, dass dieses `<strong>`-Element als Block-Element angezeigt wird, das auf eine neue Zeile umbricht. Wenn Sie jedoch möchten, dass alle `<strong>`-Elemente als Block-Boxen angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Fähigkeit, Inhalte mit CSS zu stylen, bedeutet, dass Sie immer die am besten geeigneten semantischen HTML-Elemente verwenden können, um Ihre Inhalte auszuzeichnen und dann zu ändern, wie sie mit CSS angezeigt werden.

```html live-sample___change-formatting
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

```css live-sample___change-formatting
strong {
  display: block;
}
```

{{EmbedLiveSample("change-formatting")}}

## Zusammenfassung

In diesem Leitfaden haben wir betrachtet, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ohne jegliche CSS-Stilgebung auf eine lesbare Weise angezeigt. Durch das Verständnis, wie der normale Fluss funktioniert, wird das Layouten einfacher, weil Sie den Ausgangspunkt für die Änderung der Darstellung von Elementen verstehen.

## Siehe auch

- [CSS Basis-Box-Modell](/de/docs/Web/CSS/CSS_box_model)
- [Lernen: Normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)
- {{Glossary("Inline-level_content", "Inline-Elemente")}}
- {{Glossary("Block-level_content", "Block-Elemente")}}
