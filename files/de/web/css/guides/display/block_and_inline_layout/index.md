---
title: Block- und Inline-Layout im normalen Fluss
short-title: Block- und Inline-Layout
slug: Web/CSS/Guides/Display/Block_and_inline_layout
l10n:
  sourceCommit: 2c6196c0352ac439f13adc6a0a83d79993ef5a1e
---

In diesem Leitfaden werden wir die Grundlagen untersuchen, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Der normale Fluss wird in der [CSS 2.1 Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontextes_ sein werden. Sie können entweder Block oder Inline sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Level-Boxen als Teilnehmer an einem _Blockformatierungskontext_ und Inline-Level-Boxen als Teilnehmer an einem _Inline-Formatierungskontext_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, ist ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> "In einem Blockformatierungskontext werden Boxen nacheinander, vertikal, beginnend am oberen Rand eines umgebenden Blocks angeordnet. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Abstände zwischen benachbarten Block-Level-Boxen in einem Blockformatierungskontext kollabieren.\
> In einem Blockformatierungskontext berührt jede Box mit ihrem linken Außenrand den linken Rand des umgebenden Blocks (bei rechts-nach-links-Formatierung berühren die rechten Ränder)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Boxen horizontal, eine nach der anderen, beginnend am oberen Rand eines umgebenden Blocks angeordnet. Horizontale Abstände, Rahmen und Abstände werden zwischen diesen Boxen respektiert. Die Boxen können auf verschiedene Weise vertikal ausgerichtet werden: Ihre Unterseiten oder Oberseiten können ausgerichtet werden, oder die Grundlinien des Textes innerhalb von ihnen können ausgerichtet werden. Der rechteckige Bereich, der die Boxen enthält, die eine Linie bilden, wird als Linienbox bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1 Spezifikation Dokumente als in einem horizontalen, von oben nach unten verlaufenden Schreibmodus beschreibt. Zum Beispiel durch die Beschreibung des vertikalen Abstands zwischen Block-Boxen. Das Verhalten von Block- und Inline-Elementen ist dasselbe, wenn in einem vertikalen Schreibmodus gearbeitet wird; dies wird in unserem [Flusslayout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes) Leitfaden untersucht.

## Elemente, die an einem Blockformatierungskontext teilnehmen

Blockelemente in einem horizontalen Schreibmodus wie Englisch werden vertikal angeordnet, eines unter dem anderen.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie horizontal angeordnet.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden arbeiten wir auf Englisch und daher in einem horizontalen Schreibmodus. Alles, was beschrieben wird, sollte jedoch auf die gleiche Weise funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind es die Abstände zwischen zwei Block-Boxen, die die Trennung zwischen den Elementen schaffen. Dies können wir anhand des Layouts von zwei Absätzen sehen, denen ich einen Rahmen hinzugefügt habe. Das Standard-Browser-Stylesheet fügt eine Spanne zwischen den Absätzen hinzu, indem es einen Abstand oben und unten hinzufügt.

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

Wenn wir die Abstände auf dem Absatz-Element auf `0` setzen, berühren sich die Rahmen.

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

Standardmäßig verbrauchen Blockelemente den gesamten Platz in der Inline-Richtung, daher breiten sich unsere Absätze aus und werden so groß wie möglich innerhalb ihres umschließenden Blocks. Wenn wir ihnen eine Breite geben, legen sie sich weiterhin untereinander - selbst wenn genug Platz für eine seitliche Anordnung vorhanden wäre. Jeder beginnt an der Anfängerkante des umschließenden Blocks, also an der Stelle, an der die Sätze in diesem Schreibmodus beginnen würden.

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

### Margenkollaps

Die Spezifikation erklärt, dass Abstände zwischen Blockelementen _kollabieren_. Das bedeutet, dass wenn Sie ein Element mit einem oberen Rand unmittelbar nach einem Element mit einem unteren Rand haben, der Gesamtabstand nicht die Summe dieser beiden Abstände ist, sondern der Abstand kollabiert und im Wesentlichen so groß wie der größere der beiden Abstände wird.

Im folgenden Beispiel haben die Absätze einen oberen Rand von `20px` und einen unteren Rand von `40px`. Die Größe des Abstands zwischen den Absätzen beträgt `40px`, da der kleinere obere Rand des zweiten Absatzes mit dem größeren unteren Rand des ersten kollabiert ist.

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

Mehr über den Margenkollaps erfahren Sie in unserem Artikel [Beherrschung des Margenkollapses](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

> [!NOTE]
> Wenn Sie sich nicht sicher sind, ob Abstände kollabieren, überprüfen Sie die Box-Model-Werte in Ihren Browser-DevTools. Dies gibt Ihnen die tatsächliche Größe des Abstands an, was Ihnen helfen kann zu identifizieren, was passiert.
>
> ![Screenshot des Box-Model-Panels in den Entwicklerwerkzeugen des Browsers, das die vier Werte für Rand, Rahmen und Polsterung zusammen mit Höhe und Breite in einer Grafik oben und Auflistungen von Box-Größe, Anzeige, Float, Zeilenhöhe, Position und Z-Index unter der Grafik zeigt.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, in der Sätze in diesem speziellen Schreibmodus verlaufen. Obwohl wir im Allgemeinen nicht dazu neigen, an Inline-Elemente als Boxen zu denken, haben sie wie alles in CSS dies. Diese Inline-Boxen werden nacheinander angeordnet. Wenn nicht genug Platz im umschließenden Block für alle Boxen vorhanden ist, kann eine Box auf eine neue Zeile umgebrochen werden. Die erzeugten Zeilen werden als Linienboxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}} Element in ihm erzeugt werden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

{{EmbedLiveSample("inline")}}

Die Boxen um die Wörter vor dem `<strong>` Element und nach dem `</strong>` Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt werden, um sicherzustellen, dass alles in einer Box umschlossen ist, aber solche, die wir nicht direkt anvisieren können.

Die Größe der Linienbox in der Blockrichtung (also die Höhe beim Arbeiten in Englisch) wird durch die höchste Box in ihr definiert. Im nächsten Beispiel ist das `<strong>` Element 300%; da dieser Inhalt sich auf zwei Zeilen erstreckt, definiert er nun die Höhe der Linienboxen dieser beiden Zeilen.

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

Erfahren Sie mehr darüber, wie sich Block- und Inline-Boxen in unserem Leitfaden zum [visuellen Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) verhalten.

## Die Display-Eigenschaft und das Flusslayout

Zusätzlich zu den in CSS2.1 bestehenden Regeln beschreiben neue CSS-Versionen das Verhalten von Block- und Inline-Boxen weiter. Die {{cssxref("display")}} Eigenschaft definiert, wie eine Box und alle darin befindlichen Boxen sich verhalten. Im CSS Display Model Level 3 können wir mehr darüber erfahren, wie die `display` Eigenschaft das Verhalten von Boxen und den Boxen, die sie erzeugen, verändert.

Der Anzeige-Typ eines Elements definiert den äußeren Anzeige-Typ; dies bestimmt, wie die Box neben anderen Elementen im gleichen Formatierungskontext angezeigt wird. Es definiert auch den inneren Anzeige-Typ, der festlegt, wie Boxen innerhalb dieses Elements sich verhalten. Wir können dies sehr deutlich sehen, wenn wir ein Flex-Layout betrachten. Im folgenden Beispiel habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Der Flex-Container verhält sich wie ein Blockelement: Er wird auf einer neuen Zeile angezeigt und nimmt den gesamten Platz ein, den er kann, in der Inlinerichtung. Dies ist der äußere Anzeige-Typ von `block`.

Die Flex-Elemente hingegen nehmen an einem Flex-Formatierungskontext teil, weil ihr Elternteil das Element mit `display: flex` ist, welches einen inneren Anzeige-Typ von `flex` hat und den Flex-Formatierungskontext für die direkten Kinder festlegt.

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

Daher können Sie denken, dass jede Box in CSS auf diese Weise arbeitet. Die Box selbst hat einen äußeren Anzeige-Typ, sodass sie weiß, wie sie sich neben anderen Boxen verhalten soll. Sie hat dann einen inneren Anzeige-Typ, der die Weise verändert, wie sich ihre Kinder verhalten. Diese Kinder haben dann ebenfalls einen äußeren und inneren Anzeige-Typ. Die Flex-Elemente im vorherigen Beispiel werden zu Boxen auf Flex-Level, sodass ihr äußerer Anzeige-Typ durch den Weg diktiert wird, Teil des Flex-Formatierungskontextes zu sein. Sie haben jedoch einen inneren Anzeige-Typ von _flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die innerhalb unseres Flex-Elements verschachtelt sind, ordnen sich als Block- und Inline-Elemente an, es sei denn, etwas ändert ihren Anzeige-Typ.

Dieses Konzept des äußeren und inneren Anzeige-Typs ist wichtig, da es uns sagt, dass ein Container, der eine Layoutmethode wie Flexbox (`display: flex`) und Rasterlayout (`display: grid`) verwendet, weiterhin an Block- und Inline-Layout teilnimmt, da der äußere Anzeige-Typ dieser Methoden `block` ist.

### Den Formatierungskontext eines Elements ändern

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten basierend auf dem an, was normalerweise für dieses Element am meisten Sinn macht. Zum Beispiel wird ein {{HTMLElement("strong")}} Element verwendet, um eine Inhaltspanne stark zu betonen und wird standardmäßig fett in Browsern angezeigt. Es hätte im Allgemeinen keinen Sinn, dass das `<strong>` Element als Block-Level-Element angezeigt wird, das auf eine neue Zeile umbrochen wird. Wenn Sie möchten, dass alle `<strong>` Elemente als Block-Boxen angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Möglichkeit, Inhalte mit CSS zu stylen, bedeutet, dass Sie immer die geeignetsten semantischen HTML-Elemente verwenden können, um Ihre Inhalte zu markieren und dann zu ändern, wie sie mit CSS angezeigt werden.

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

In diesem Leitfaden haben wir uns angesehen, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Ein HTML-Dokument ohne jegliches CSS-Styling wird aufgrund dieses Standardverhaltens auf eine lesbare Weise angezeigt. Zu verstehen, wie der normale Fluss funktioniert, ist ein wichtiger Ausgangspunkt, um das CSS-Layout als Ganzes zu verstehen.

## Siehe auch

- [CSS-Grundlagen des Box-Modells](/de/docs/Web/CSS/Guides/Box_model)
- [Lernen: Normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)
- {{Glossary("Inline-level_content", "Inline-Elemente")}}
- {{Glossary("Block-level_content", "Block-Elemente")}}
