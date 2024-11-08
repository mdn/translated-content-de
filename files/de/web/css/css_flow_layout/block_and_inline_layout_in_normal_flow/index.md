---
title: Block- und Inline-Layout im normalen Fluss
slug: Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen erkunden, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Der normale Fluss wird in der [CSS 2.1 Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, welche erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontextes_ sein werden. Sie können entweder Block- oder Inline-Elemente sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Level-Boxen als Teilnehmer an einem _Blockformatierungskontext_ und Inline-Level-Boxen als Teilnehmer an einem _Inlineformatierungskontext_.

Das Verhalten von Elementen, die einen Block- oder Inlineformatierungskontext haben, wird ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Blockformatierungskontext sagt die Spezifikation:

> "In einem Blockformatierungskontext werden die Boxen nacheinander, vertikal, beginnend am oberen Rand eines enthaltenen Blocks angeordnet. Der vertikale Abstand zwischen zwei Nachbarboxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen benachbarten Block-Level-Boxen in einem Blockformatierungskontext kollabieren.\
> In einem Blockformatierungskontext berührt die linke Außenkante jeder Box die linke Kante des enthaltenen Blocks (bei rechts-nach-links-Formatierung berühren sich die rechten Kanten)." - 9.4.1

Für Elemente mit einem Inlineformatierungskontext:

> "In einem Inlineformatierungskontext werden die Boxen horizontal, nacheinander, beginnend am oberen Rand eines enthaltenen Blocks angeordnet. Horizontale Ränder, Rahmen und Abstände werden zwischen diesen Boxen beachtet. Die Boxen können auf unterschiedliche Weise vertikal ausgerichtet sein: ihre Unterseiten oder Oberseiten können ausgerichtet sein oder die Baselines des Texts innerhalb können ausgerichtet sein. Der rechteckige Bereich, der die Boxen enthält, die eine Zeile bilden, wird als Zeilenbox bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1 Spezifikation Dokumente als in einem horizontalen, von oben nach unten Schreibmodus beschreibt. Zum Beispiel durch die Beschreibung des vertikalen Abstands zwischen Block-Boxen. Das Verhalten von Block- und Inline-Elementen ist dasselbe, wenn man in einem vertikalen Schreibmodus arbeitet, und wir werden dies in einem zukünftigen Leitfaden über Flusslayout und Schreibmodi erkunden.

## Elemente, die an einem Blockformatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus wie Englisch, werden vertikal, untereinander angeordnet.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie horizontal angeordnet.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden arbeiten wir auf Englisch und daher in einem horizontalen Schreibmodus. Jedoch sollte alles Beschriebene auf die gleiche Weise funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind die Ränder zwischen zwei Block-Boxen das, was die Trennung zwischen den Elementen schafft. Wir sehen dies bei einem sehr einfachen Layout von zwei Absätzen, denen ich einen Rahmen hinzugefügt habe. Das Standard-Browser-Stylesheet fügt durch Hinzufügen eines Randes oben und unten Abstände zwischen den Absätzen hinzu.

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
    drawing any special inspiration from the fact.”
  </p>
</div>
```

```css live-sample___normal-flow
p {
  border: 2px solid green;
}
```

{{EmbedLiveSample("normal-flow", "", "200px")}}

Wenn wir die Ränder auf dem Absatz-Element auf `0` setzen, werden die Rahmen sich berühren.

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
    drawing any special inspiration from the fact.”
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

Standardmäßig werden Block-Elemente den gesamten Platz in der Inline-Richtung einnehmen, sodass sich unsere Absätze ausbreiten und so groß werden, wie sie innerhalb ihres umschließenden Blocks können. Wenn wir ihnen eine Breite geben, werden sie sich weiterhin untereinander anordnen – selbst wenn Platz für sie wäre, um nebeneinander zu sein. Jeder beginnt an der Startkante des umschließenden Blocks, also dort, wo Sätze in diesem Schreibmodus beginnen würden.

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
    drawing any special inspiration from the fact.”
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

### Randkollaps

Die Spezifikation erklärt, dass die Ränder zwischen Block-Elementen _kollabieren_. Das bedeutet, dass wenn Sie ein Element mit einem oberen Rand direkt nach einem Element mit einem unteren Rand haben, anstatt dass der gesamte Raum die Summe dieser beiden Ränder ist, der Rand kollabiert und wird im Grunde so groß wie der größere der beiden Ränder.

Im folgenden Beispiel haben die Absätze einen oberen Rand von `20px` und einen unteren Rand von `40px`. Die Größe des Randes zwischen den Absätzen beträgt `40px`, da der kleinere obere Rand beim zweiten Absatz mit dem größeren unteren Rand des ersten kollabiert ist.

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
    drawing any special inspiration from the fact.”
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

Sie können mehr über Randkollaps in unserem Artikel [Mastering Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie sich nicht sicher sind, ob Ränder kollabieren, überprüfen Sie die Werte des Box-Modells in den Entwicklertools Ihres Browsers. Dies gibt Ihnen die tatsächliche Größe des Randes, was Ihnen helfen kann, zu erkennen, was passiert.
>
> ![Bildschirmfoto des Box-Model-Panels in den Entwicklerwerkzeugen des Browsers, das die vier Werte für Rand, Rahmen und Padding zusammen mit Höhe und Breite in einer Grafik oben zeigt und box-sizing, display, float, line-height, position und z-index unter der Grafik auflistet.](box-model.png)

## Elemente, die an einem Inlineformatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, in der Sätze in diesem speziellen Schreibmodus verlaufen. Während wir dazu neigen, nicht an Inline-Elemente als Boxen zu denken, haben sie wie alles in CSS eine. Diese Inline-Boxen werden nacheinander angeordnet. Wenn nicht genug Platz im umschließenden Block für alle Boxen ist, kann eine Box auf eine neue Zeile umbrechen. Die erstellten Zeilen werden als Zeilenboxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt wurden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.”
</p>
```

{{EmbedLiveSample("inline")}}

Die Boxen um die Wörter vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt werden, um sicherzustellen, dass alles in einer Box verpackt ist, aber solche, die wir nicht direkt anvisieren können.

Die Größe der Zeilenbox in der Blockrichtung (also die Höhe, wenn man auf Englisch arbeitet) wird durch die höchste Box darin definiert. Im nächsten Beispiel ist das `<strong>`-Element 300%; da sich dieser Inhalt über zwei Zeilen erstreckt, definiert es nun die Höhe der Zeilenboxen dieser zwei Zeilen.

```html live-sample___line-box
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.”
</p>
```

```css live-sample___line-box
strong {
  font-size: 300%;
}
```

{{EmbedLiveSample("line-box")}}

Erfahren Sie mehr darüber, wie sich Block- und Inline-Boxen in unserem Leitfaden zum [Visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model) verhalten.

## Die Eigenschaft display und Flusslayout

Zusätzlich zu den in CSS2.1 bestehenden Regeln beschreiben neue CSS-Level weiter das Verhalten von Block- und Inline-Boxen. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und alle Boxen, die sie enthalten, sich verhalten. Im CSS Display Model Level 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten von Boxen und den von ihnen erzeugten Boxen ändert.

Der Anzeigetyp eines Elements definiert den äußeren Anzeigetyp; dieser bestimmt, wie die Box neben anderen Elementen im selben Formatierungskontext angezeigt wird. Er definiert auch den inneren Anzeigetyp, der bestimmt, wie sich Boxen innerhalb dieses Elements verhalten. Wir können dies sehr deutlich sehen, wenn wir ein Flex-Layout in Betracht ziehen. Im folgenden Beispiel habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` zugewiesen habe. Der Flex-Container verhält sich wie ein Block-Element: Er wird auf einer neuen Zeile angezeigt und nimmt den gesamten Platz in der Inline-Richtung ein, den er kann. Dies ist der äußere Anzeigetyp von `block`.

Die Flex-Items jedoch nehmen an einem Flexformatierungskontext teil, weil ihr Elternteil das Element mit `display: flex` ist, welches einen inneren Anzeigetyp von `flex` hat, was den Flexformatierungskontext für die direkten Kinder etabliert.

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

Daher können Sie sich jede Box in CSS vorstellen, die auf diese Weise funktioniert. Die Box selbst hat einen äußeren Anzeigetyp, sodass sie weiß, wie sie sich neben anderen Boxen verhält. Sie hat dann einen inneren Anzeigetyp, der ändert, wie sich ihre Kinder verhalten. Diese Kinder haben dann auch einen äußeren und inneren Anzeigetyp. Die Flex-Items im vorherigen Beispiel werden zu Flex-Level-Boxen, daher wird ihr äußerer Anzeigetyp durch die Teilnahme am Flexformatierungskontext bestimmt. Sie haben jedoch einen inneren Anzeigetyp von _flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. In unserem Flex-Item verschachtelte Elemente legen sich, sofern nichts ihren Anzeigetyp ändert, als Block- und Inline-Elemente aus.

Dieses Konzept des äußeren und inneren Anzeigetyps ist wichtig, da es uns sagt, dass ein Container, der eine Layoutmethode wie Flexbox (`display: flex`) und Rasterlayout (`display: grid`) verwendet, immer noch am Block- und Inline-Layout teilnimmt, aufgrund des äußeren Anzeigetyps dieser Methoden, welche `block` ist.

### Ändern des Formatierungskontexts, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inlineformatierungskontexten basierend darauf an, was normalerweise für dieses Element sinnvoll ist. Zum Beispiel wird ein {{HTMLElement("strong")}} Element verwendet, um einen Inhalt stark zu betonen und wird standardmäßig fett in Browsern angezeigt. Es würde im Allgemeinen keinen Sinn machen, dass das `<strong>`-Element als Block-Level-Element angezeigt wird, das auf eine neue Zeile umbricht. Wenn Sie möchten, dass alle `<strong>`-Elemente als Block-Boxen angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Möglichkeit, Inhalte mit CSS zu gestalten, bedeutet, dass Sie immer die am besten geeigneten semantischen HTML-Elemente verwenden können, um Ihre Inhalte zu markieren, und dann ändern, wie sie mit CSS angezeigt werden.

```html live-sample___change-formatting
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.”
</p>
```

```css live-sample___change-formatting
strong {
  display: block;
}
```

{{EmbedLiveSample("change-formatting")}}

## Zusammenfassung

In diesem Leitfaden haben wir uns angesehen, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ohne jegliche CSS-Styling in einer lesbaren Weise angezeigt. Durch das Verständnis, wie der normale Fluss funktioniert, wird Ihnen das Layout leichter fallen, da Sie den Ausgangspunkt für Änderungen daran verstehen, wie Elemente angezeigt werden.

## Siehe auch

- [CSS Basic Box Model](/de/docs/Web/CSS/CSS_box_model)
- _[Normaler Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)_ - Lernen Layout
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}}
- {{Glossary("Block-level_content", "Block-Level-Elemente")}}
