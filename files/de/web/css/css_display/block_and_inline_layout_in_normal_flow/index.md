---
title: Block- und Inline-Layout im normalen Fluss
short-title: Block- und Inline-Layout
slug: Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen erkunden, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Der normale Fluss ist in der [CSS 2.1-Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontexts_ sind. Sie können entweder Block- oder Inline-Elemente sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Level-Boxen als Teilnehmer eines _Block-Formatierungskontexts_ und Inline-Level-Boxen als Teilnehmer eines _Inline-Formatierungskontexts_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, ist ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext besagt die Spezifikation:

> "In einem Block-Formatierungskontext werden Boxen eine nach der anderen vertikal ausgehend von oben in einem umgebenden Block angeordnet. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Abstände zwischen angrenzenden Block-Level-Boxen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die linke Außenseite jeder Box die linke Kante des umgebenden Blocks (bei rechts-nach-links-Formatierung berühren sich die rechten Kanten)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Boxen horizontal, eine nach der anderen, ausgehend von oben in einem umgebenden Block angeordnet. Zwischen diesen Boxen werden horizontale Abstände, Ränder und Polsterungen respektiert. Die Boxen können vertikal auf verschiedene Arten ausgerichtet werden: ihre Unterseiten oder Oberseiten können ausgerichtet werden, oder die Grundlinien des Textes innerhalb von ihnen können ausgerichtet werden. Der rechteckige Bereich, der die Boxen enthält, die eine Linie bilden, wird als Linienbox bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1-Spezifikation Dokumente als in einem horizontalen, von oben nach unten verlaufenden Schreibmodus beschreibt. Zum Beispiel durch die Beschreibung des vertikalen Abstands zwischen Block-Boxen. Das Verhalten bei Block- und Inline-Elementen ist das gleiche, wenn man in einem vertikalen Schreibmodus arbeitet; wir erkunden dies in unserem [Flow-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes) Leitfaden.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus wie Englisch, werden vertikal, eines unter dem anderen angeordnet.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie dann horizontal angeordnet.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden arbeiten wir in Englisch und daher in einem horizontalen Schreibmodus. Alles Beschriebene sollte jedoch auf die gleiche Weise funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind es die Abstände zwischen zwei Block-Boxen, die eine Trennung zwischen den Elementen schaffen. Wir können dies mit dem Layout von zwei Absätzen sehen, denen ich eine Umrandung hinzugefügt habe. Das standardmäßige Browser-Stylesheet fügt durch Hinzufügen eines Abstandes zum oberen und unteren Rand der Absätze eine Trennung zwischen den Absätzen hinzu.

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

Wenn wir die Abstände auf dem Absatz-Element auf `0` setzen, berühren sich die Umrandungen.

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

Standardmäßig nutzen Block-Elemente den gesamten Platz in der Inline-Richtung, sodass unsere Absätze sich ausbreiten und so groß wie möglich innerhalb ihres umgebenden Blocks werden. Wenn wir ihnen eine Breite geben, werden sie weiterhin übereinander angeordnet, selbst wenn Platz wäre, um sie nebeneinander zu platzieren. Jedes wird am Startkante des umgebenden Blocks beginnen, also an der Stelle, an der normalerweise die Sätze in diesem Schreibmodus beginnen würden.

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

### Zusammenfallen von Abständen

Die Spezifikation erklärt, dass Abstände zwischen Block-Elementen _zusammenfallen_. Das bedeutet, dass wenn Sie ein Element mit einem oberen Abstand direkt nach einem Element mit einem unteren Abstand haben, statt dass der gesamte Raum die Summe dieser beiden Abstände ist, der Abstand zusammenfällt und im Wesentlichen so groß wie der größere der beiden Abstände wird.

Im folgenden Beispiel haben die Absätze einen oberen Abstand von `20px` und einen unteren von `40px`. Die Größe des Abstandes zwischen den Absätzen beträgt `40px`, da der kleinere obere Abstand des zweiten Absatzes mit dem größeren unteren Abstand des ersten zusammengefallen ist.

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

Sie können mehr über das Zusammenfallen von Abständen in unserem Artikel [Beherrschung von zusammenfallenden Abständen](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie sich nicht sicher sind, ob Abstände zusammenfallen, überprüfen Sie die Box-Modell-Werte in den Entwicklerwerkzeugen Ihres Browsers. Dies zeigt Ihnen die tatsächliche Größe des Abstandes und kann Ihnen helfen zu erkennen, was passiert.
>
> ![Screenshot des Boxmoduls in den Entwicklerwerkzeugen des Browsers, das die vier Werte für Abstand, Rand und Polsterung zusammen mit Höhe und Breite in einer Grafik oben zeigt und box-sizing, Darstellung, Fluss, Zeilenhöhe, Position, und z-index unter der Grafik auflistet.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden eines nach dem anderen in der Richtung angezeigt, in die Sätze in diesem speziellen Schreibmodus verlaufen. Während wir normalerweise nicht dazu neigen, bei Inline-Elementen an eine Box zu denken, haben sie wie alles in CSS eine solche. Diese Inline-Boxen werden nacheinander angeordnet. Gibt es nicht genug Platz im umgebenden Block für alle Boxen, kann eine Box auf eine neue Linie umgebrochen werden. Die erstellten Linien werden als Linienboxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt wurden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

{{EmbedLiveSample("inline")}}

Die Boxen um die Wörter vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt werden, um sicherzustellen, dass alles in einer Box verpackt ist, aber solche, die wir nicht direkt ansprechen können.

Die Größe der Linienbox in der Block-Richtung (also die Höhe bei Arbeiten in Englisch) wird durch die höchste Box in ihr definiert. Im nächsten Beispiel ist das `<strong>`-Element 300%; da sich dieser Inhalt über zwei Zeilen erstreckt, definiert es jetzt die Höhe der Linienboxen dieser zwei Zeilen.

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

Erfahren Sie mehr darüber, wie sich Block- und Inline-Boxen verhalten, in unserem Leitfaden zum [visuellen Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model).

## Die display-Eigenschaft und Fluss-Layout

Zusätzlich zu den in CSS 2.1 existierenden Regeln beschreiben neue Stufen von CSS das Verhalten von Block- und Inline-Boxen weiter. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und jede Box in ihr sich verhält. Im CSS-Anzeigemodell Stufe 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten von Boxen und den Boxen, die sie erzeugen, ändert.

Der Anzeige-Typ eines Elements definiert den äußeren Anzeige-Typ; dies diktiert, wie die Box neben anderen Elementen im selben Formatierungskontext angezeigt wird. Es definiert auch den inneren Anzeige-Typ, der bestimmt, wie Boxen in diesem Element sich verhalten. Dies wird sehr deutlich, wenn man ein flexibles Layout betrachtet. Im unten stehenden Beispiel habe ich einen {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Das Flex-Container verhält sich wie ein Block-Element: Es wird in einer neuen Zeile angezeigt und nimmt den gesamten Platz ein, den es in der Inline-Richtung einnehmen kann. Dies ist der äußere Anzeige-Typ von `block`.

Die Flex-Elemente hingegen nehmen an einem Flex-Formatierungskontext teil, weil ihr übergeordnetes Element das Element mit `display: flex` ist, welches einen inneren Anzeige-Typ von `flex` hat und den Flex-Formatierungskontext für die direkten Kinder etabliert.

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

Daher können Sie sich jedes Boxen in CSS, das auf diese Weise arbeitet, vorstellen. Die Box selbst hat einen äußeren Anzeige-Typ, so dass sie weiß, wie sie sich neben anderen Boxen verhält. Dann hat sie einen inneren Anzeige-Typ, der verändert, wie ihre Kinder sich verhalten. Diese Kinder haben dann auch einen äußeren und inneren Anzeige-Typ. Die Flex-Elemente im vorherigen Beispiel werden zu Flex-Level-Boxen, so dass ihr äußerer Anzeige-Typ durch die Art und Weise bestimmt wird, dass sie Teil des Flex-Formatierungskontexts sind. Sie haben jedoch einen inneren Anzeige-Typ von _Fluss_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. In den Flex-Elementen verschachtelte Elemente legen sich als Block- und Inline-Elemente aus, es sei denn, etwas ändert ihren Anzeige-Typ.

Dieses Konzept des äußeren und inneren Anzeige-Typs ist wichtig, da es uns sagt, dass ein Container, der eine Layoutmethode wie flexbox (`display: flex`) und Raster-Layout (`display: grid`) verwendet, immer noch an Block- und Inline-Layout teilnimmt, da der äußere Anzeige-Typ dieser Methoden `block` ist.

### Ändern des Formatierungskontexts, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten basierend darauf an, was normalerweise für dieses Element sinnvoll ist. Zum Beispiel wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Inhaltsteil stark zu betonen und wird standardmäßig fett in Browsern angezeigt. Es würde allgemein keinen Sinn machen, dass dieses `<strong>`-Element als Block-Level-Element angezeigt wird, das in eine neue Zeile umbricht. Wenn Sie jedoch möchten, dass alle `<strong>`-Elemente als Block-Box angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Fähigkeit, Inhalte mit CSS zu stylen, bedeutet, dass Sie immer die am besten geeigneten semantischen HTML-Elemente verwenden können, um Ihre Inhalte zu kennzeichnen und dann ändern, wie sie mit CSS angezeigt werden.

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

In diesem Leitfaden haben wir uns angesehen, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ohne jegliche CSS-Stilgebung auf eine lesbare Weise angezeigt. Durch das Verständnis, wie der normale Fluss funktioniert, wird Ihnen das Layout leichter fallen, da Sie den Ausgangspunkt verstehen, um Änderungen an der Anzeige der Elemente vorzunehmen.

## Siehe auch

- [CSS-Grundlegendes Box-Modell](/de/docs/Web/CSS/CSS_box_model)
- [Lernen: Normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}}
- {{Glossary("Block-level_content", "Block-Level-Elemente")}}
