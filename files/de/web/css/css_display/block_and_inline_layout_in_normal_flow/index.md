---
title: Block- und Inline-Layout im normalen Fluss
short-title: Block- und Inline-Layout
slug: Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In diesem Leitfaden werden wir die Grundlagen erkunden, wie sich Block- und Inline-Elemente verhalten, wenn sie Teil des normalen Flusses sind.

Normaler Fluss ist definiert in der [CSS 2.1-Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow), die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontextes_ sind. Sie können entweder block- oder inline-orientiert sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Level-Boxen als Teilnehmer an einem _Block-Formatierungskontext_ und Inline-Level-Boxen als Teilnehmer an einem _Inline-Formatierungskontext_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, wird ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> "In einem Block-Formatierungskontext werden Boxen nacheinander vertikal layoutet, beginnend am oberen Rand eines umgebenden Blocks. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen benachbarten Block-Level-Boxen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die linke Außenkante jeder Box die linke Kante des umgebenden Blocks (für eine von rechts nach links formatierte Darstellung berühren sich die rechten Kanten)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Boxen horizontal nacheinander layoutet, beginnend am oberen Rand eines umgebenden Blocks. Horizontale Ränder, Rahmen und Abstände werden zwischen diesen Boxen berücksichtigt. Die Boxen können auf verschiedene Weise vertikal ausgerichtet werden: ihre Unterseiten oder Oberseiten können ausgerichtet werden, oder die Grundlinien des Textes innerhalb von ihnen können ausgerichtet werden. Der rechteckige Bereich, der die Boxen, die eine Zeile bilden, enthält, wird als Linienbox bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1-Spezifikation Dokumente als in einem horizontalen, von oben nach unten verlaufenden Schreibmodus beschreibt. Zum Beispiel, indem sie den vertikalen Abstand zwischen Block-Boxen beschreibt. Das Verhalten bei Block- und Inline-Elementen ist im vertikalen Schreibmodus dasselbe; wir erkunden dies in unserem [Leitfaden zu Flusslayout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes).

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus wie Englisch werden vertikal, eins unter dem anderen, layoutet.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie sich horizontal ausrichten.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden werden wir in Englisch arbeiten und daher in einem horizontalen Schreibmodus. Dennoch sollte alles Beschriebene auf die gleiche Weise funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind die Ränder zwischen zwei Block-Boxen das, was die Trennung zwischen den Elementen schafft. Dies können wir mit der Anordnung von zwei Absätzen sehen, denen ich einen Rahmen hinzugefügt habe. Das Standardsheet des Browsers fügt durch das Hinzufügen eines Randes oben und unten Abstände zwischen den Absätzen hinzu.

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

Wenn wir die Ränder auf dem Absatzelement auf `0` setzen, berühren sich die Rahmen.

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

Standardmäßig nehmen Block-Elemente den gesamten Platz in der Inline-Richtung ein, sodass sich unsere Absätze ausdehnen und so groß wie möglich innerhalb ihres umgebenden Blocks werden. Wenn wir ihnen eine Breite geben, werden sie weiterhin untereinander layoutet - auch wenn es Platz geben würde, um sie nebeneinander zu stellen. Jedes beginnt an der Startkante des umgebenden Blocks, also dort, wo Sätze in diesem Schreibmodus beginnen würden.

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

### Rand-Kollaps

Die Spezifikation erklärt, dass Ränder zwischen Block-Elementen _kollabieren_. Das bedeutet, wenn Sie ein Element mit einem oberen Rand direkt nach einem Element mit einem unteren Rand haben, anstatt dass der gesamte Platz die Summe dieser beiden Ränder ist, kollabieren die Ränder und werden im Wesentlichen so groß wie der größere der beiden Ränder.

Im folgenden Beispiel haben die Absätze einen oberen Rand von `20px` und einen unteren Rand von `40px`. Die Größe des Randes zwischen den Absätzen beträgt `40px`, da der kleinere obere Rand am zweiten Absatz mit dem größeren unteren Rand des ersten kollabiert ist.

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

Sie können mehr über Rand-Kollaps in unserem Artikel [Mastering Margin Collapsing](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie sich nicht sicher sind, ob Ränder kollabieren, überprüfen Sie die Box-Modell-Werte in den DevTools Ihres Browsers. Dies gibt Ihnen die tatsächliche Größe des Randes an und kann Ihnen helfen, zu identifizieren, was passiert.
>
> ![Screenshot des Box-Modell-Panels in den Entwickler-Tools des Browsers, der die vier Werte für Rand, Rahmen und Abstände zusammen mit Höhe und Breite in einem grafischen oberen Bereich zeigt und box-sizing, display, float, line-height, position und z-index unter dem grafischen Bereich auflistet.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden hintereinander in der Richtung angezeigt, in der Sätze in diesem speziellen Schreibmodus verlaufen. Während wir nicht dazu neigen, an Inline-Elemente als eine Box zu denken, haben sie wie alles in CSS auch eine. Diese Inline-Boxen werden hintereinander angeordnet. Wenn im umgebenden Block nicht genug Platz für alle Boxen ist, kann eine Box in eine neue Zeile umgebrochen werden. Die so entstehenden Zeilen werden als Linienboxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt wurden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

{{EmbedLiveSample("inline")}}

Die Boxen um die Wörter vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt werden, um sicherzustellen, dass alles in einer Box eingeschlossen ist, aber solche, die wir nicht direkt ansprechen können.

Die Linienbox-Größe in der Blockrichtung (also die Höhe bei Arbeiten in Englisch) wird durch die höchste Box darin definiert. Im nächsten Beispiel ist das `<strong>`-Element 300 %; da dieser Inhalt zwei Zeilen umspannt, definiert er jetzt die Höhe der Linienboxen dieser beiden Zeilen.

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

Erfahren Sie mehr darüber, wie Block- und Inline-Boxen in unserem Leitfaden zum [visuellen Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) funktionieren.

## Die display-Eigenschaft und Flusslayout

Zusätzlich zu den Regeln, die in CSS2.1 existieren, beschreiben neue CSS-Ebenen weiter das Verhalten von Block- und Inline-Boxen. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und alle Boxen innerhalb dieser sich verhalten. Im CSS Display Model Level 3 können wir mehr darüber lernen, wie die `display`-Eigenschaft das Verhalten von Boxen und den Boxen, die sie generieren, verändert.

Der Anzeigetyp eines Elements definiert den äußeren Anzeigetyp; dies bestimmt, wie die Box neben anderen Elementen im gleichen Formatierungskontext angezeigt wird. Er definiert auch den inneren Anzeigetyp, der festlegt, wie Boxen innerhalb dieses Elements sich verhalten. Wir können dies sehr klar sehen, wenn wir ein Flex-Layout betrachten. Im untenstehenden Beispiel habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` zugewiesen habe. Der Flex-Container verhält sich wie ein Block-Element: Er wird in einer neuen Zeile angezeigt und nimmt den gesamten Platz ein, den er in der Inline-Richtung kann. Dies ist der äußere Anzeigetyp von `block`.

Die Flex-Items hingegen nehmen an einem Flex-Formatierungskontext teil, da ihr Elternteil das Element mit `display: flex` ist, das einen inneren Anzeigetyp von `flex` hat und somit den Flex-Formatierungskontext für die direkten Kinder etabliert.

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

Daher können Sie sich vorstellen, dass jede Box in CSS auf diese Weise arbeitet. Die Box selbst hat einen äußeren Anzeigetyp, sodass sie weiß, wie sie sich neben anderen Boxen verhalten soll. Dann hat sie einen inneren Anzeigetyp, der die Art und Weise ändert, wie ihre Kinder sich verhalten. Diese Kinder haben dann auch einen äußeren und inneren Anzeigetyp. Die Flex-Items im vorherigen Beispiel werden zu Flex-Level-Boxen, sodass ihr äußerer Anzeigetyp durch ihre Teilnahme am Flex-Formatierungskontext bestimmt wird. Sie haben jedoch einen inneren Anzeigetyp von _flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die sich in unserem Flex-Element befinden, layouten sich als Block- und Inline-Elemente, es sei denn, etwas ändert ihren Anzeigetyp.

Dieses Konzept des äußeren und inneren Anzeigetyps ist wichtig, da es uns sagt, dass ein Container, der eine Layout-Methode wie Flexbox (`display: flex`) und Grid-Layout (`display: grid`) verwendet, weiterhin am Block- und Inline-Layout teilnimmt, da der äußere Anzeigetyp dieser Methoden `block` ist.

### Ändern des Formatierungskontextes, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten basierend darauf an, was für dieses Element normalerweise sinnvoll ist. Ein {{HTMLElement("strong")}}-Element wird beispielsweise verwendet, um einen Inhaltsteil stark zu betonen und wird standardmäßig in Browsern fett angezeigt. Es würde im Allgemeinen keinen Sinn ergeben, dass dieses `<strong>`-Element als Block-Level-Element angezeigt wird, das in eine neue Zeile umbricht. Wenn Sie dennoch alle `<strong>`-Elemente als Block-Boxen anzeigen möchten, können Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Fähigkeit, Inhalte mit CSS zu stylen, bedeutet, dass Sie immer die am besten geeigneten semantischen HTML-Elemente zur Markierung Ihres Inhalts verwenden können und dann ändern können, wie sie mit CSS angezeigt werden.

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

In diesem Leitfaden haben wir untersucht, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ganz ohne CSS-Styling auf eine lesbare Weise angezeigt. Indem Sie verstehen, wie der normale Fluss funktioniert, wird Ihnen das Layouten einfacher fallen, da Sie den Ausgangspunkt für Änderungen an der Anzeige der Elemente verstehen.

## Siehe auch

- [CSS Basis-Boxmodell](/de/docs/Web/CSS/Guides/Box_model)
- [Lernen: Normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}}
- {{Glossary("Block-level_content", "Block-Level-Elemente")}}
