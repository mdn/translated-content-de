---
title: Block- und Inline-Layout im normalen Fluss
slug: Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen untersuchen, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Der normale Fluss wird in der [CSS 2.1 Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontexts_ sind. Sie können entweder Block oder Inline, jedoch nicht beides gleichzeitig sein. Wir beschreiben Block-Level-Boxen als Teilnehmer an einem _Block-Formatierungskontext_ und Inline-Level-Boxen als Teilnehmer an einem _Inline-Formatierungskontext_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, ist ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext heißt es in der Spezifikation:

> "In einem Block-Formatierungskontext werden Boxen nacheinander, vertikal, vom oberen Rand eines umschließenden Blockes angeordnet. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen angrenzenden Block-Level-Boxen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die linke Außenkante jeder Box die linke Kante des umschließenden Blocks (für rechts-nach-links-Formatierung berühren sich die rechten Kanten)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Boxen horizontal, nacheinander, vom oberen Rand eines umschließenden Blocks angeordnet. Horizontale Ränder, Rahmen und Abstände werden zwischen diesen Boxen eingehalten. Die Boxen können vertikal auf verschiedene Weisen ausgerichtet sein: ihre Unterseiten oder Oberseiten können ausgerichtet sein oder die Baselines des Textes innerhalb von ihnen können ausgerichtet sein. Der rechteckige Bereich, der die Boxen enthält, die eine Zeile bilden, wird als Linien-Box bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1 Spezifikation Dokumente in einem horizontalen, von oben nach unten verlaufenden Schreibmodus beschreibt. Zum Beispiel, indem sie den vertikalen Abstand zwischen Block-Boxen beschreibt. Das Verhalten bei Block- und Inline-Elementen ist gleich, wenn man in einem vertikalen Schreibmodus arbeitet, was wir in einem zukünftigen Leitfaden über Flusslayout und Schreibmodi untersuchen werden.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus, wie Englisch, werden vertikal, eines unter dem anderen, angeordnet.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie dann horizontal angeordnet.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden arbeiten wir auf Englisch und daher in einem horizontalen Schreibmodus. Alles Beschriebene sollte jedoch auf die gleiche Weise funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind die Abstände zwischen zwei Block-Boxen das, was die Trennung zwischen den Elementen schafft. Dies sehen wir bei einem sehr einfachen Layout von zwei Absätzen, denen ich eine Umrandung hinzugefügt habe. Das Standard-Stylesheet des Browsers fügt einen Abstand zwischen den Absätzen hinzu, indem es einen Rand oben und unten hinzufügt.

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

Standardmäßig werden Block-Elemente den gesamten Platz in der Inline-Richtung einnehmen, sodass sich unsere Absätze ausdehnen und so groß wie möglich innerhalb ihres umschließenden Blocks werden. Wenn wir ihnen eine Breite geben, werden sie sich weiterhin untereinander anordnen - auch wenn Platz vorhanden wäre, um sie nebeneinander anzuordnen. Jeder wird gegen die Startkante des umschließenden Blocks beginnen, also an der Stelle, an der Sätze in diesem Schreibmodus anfangen würden.

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

### Randkollaps

Die Spezifikation erklärt, dass die Abstände zwischen Block-Elementen _kollabieren_. Das bedeutet, dass wenn Sie ein Element mit einem oberen Rand direkt nach einem Element mit einem unteren Rand haben, anstatt dass der Gesamtraum die Summe dieser beiden Ränder ist, der Rand kollabiert und somit im Wesentlichen so groß wie der größere der beiden Ränder wird.

Im folgenden Beispiel haben die Absätze einen oberen Rand von `20px` und einen unteren Rand von `40px`. Die Größe des Randes zwischen den Absätzen ist `40px`, da der kleinere obere Rand des zweiten Absatzes mit dem größeren unteren Rand des ersten kollabiert ist.

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

Sie können mehr über Randkollaps in unserem Artikel [Meisterung von Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie sich nicht sicher sind, ob Ränder kollabieren, überprüfen Sie die Box-Modell-Werte in den Entwicklerwerkzeugen Ihres Browsers. Dies wird Ihnen die tatsächliche Größe des Randes geben, was Ihnen helfen kann, herauszufinden, was passiert.
>
> ![Screenshot des Box-Modell-Panels in den Entwicklerwerkzeugen des Browsers, welcher die vier Werte für Rand, Rahmen und Abstand zusammen mit Höhe und Breite in einem grafischen Element oben zeigt und unten die Auflistung von box-sizing, display, float, line-height, position und z-index.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, die Sätze in diesem speziellen Schreibmodus laufen. Auch wenn wir normalerweise nicht an Inline-Elemente als Boxen denken, haben sie wie alles in CSS doch Boxen. Diese Inline-Boxen sind nacheinander angeordnet. Wenn nicht genügend Platz im umschließenden Block für alle Boxen ist, kann eine Box in eine neue Zeile brechen. Die gebildeten Zeilen werden als Linien-Boxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt wurden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

{{EmbedLiveSample("inline")}}

Die Boxen um die Wörter vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt wurden, um sicherzustellen, dass alles in einer Box eingeschlossen ist, aber solche, die wir nicht direkt ansprechen können.

Die Größe der Linien-Box in Blockrichtung (also die Höhe beim Arbeiten in Englisch) wird durch die höchste Box darin definiert. Im nächsten Beispiel ist das `<strong>`-Element 300%; da dieser Inhalt sich über zwei Zeilen erstreckt, definiert es nun die Höhe der Linien-Boxen dieser beiden Zeilen.

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

Erfahren Sie mehr darüber, wie sich Block- und Inline-Boxen in unserem Leitfaden zum [Visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model) verhalten.

## Die display-Eigenschaft und Flusslayout

Zusätzlich zu den existierenden Regeln in CSS2.1 beschreiben neue Ebenen von CSS weiter, wie sich Block- und Inline-Boxen verhalten. Die {{cssxref("display")}}-Eigenschaft definiert, wie sich eine Box und alle Boxen darin verhalten. Im CSS Displays Modell Level 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten von Boxen und den von ihnen erzeugten Boxen verändert.

Der Anzeigetyp eines Elements definiert den äußeren Anzeigetyp; dies bestimmt, wie die Box neben anderen Elementen im gleichen Formatierungskontext angezeigt wird. Es definiert auch den inneren Anzeigetyp, der bestimmt, wie sich Boxen innerhalb dieses Elements verhalten. Wir können dies sehr deutlich sehen, wenn wir ein Flex-Layout betrachten. Im folgenden Beispiel habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Der Flex-Container verhält sich wie ein Block-Element: er wird in einer neuen Zeile angezeigt und nimmt den gesamten Platz ein, den er in der Inline-Richtung kann. Das ist der äußere Anzeigetyp von `block`.

Die Flex-Items hingegen nehmen an einem Flex-Formatierungskontext teil, da ihr Elternteil das Element mit `display: flex` ist, das einen inneren Anzeigetyp von `flex` hat, der den Flex-Formatierungskontext für die direkten Kinder etabliert.

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

Daher können Sie sich vorstellen, dass jede Box in CSS auf diese Weise funktioniert. Die Box selbst hat einen äußeren Anzeigetyp, damit sie weiß, wie sie sich neben anderen Boxen verhält. Sie hat dann einen inneren Anzeigetyp, der verändert, wie sich ihre Kinder verhalten. Diese Kinder haben dann auch einen äußeren und inneren Anzeigetyp. Die Flex-Items im vorherigen Beispiel werden zu Flex-Level-Boxen, sodass ihr äußerer Anzeigetyp durch ihre Zugehörigkeit zum Flex-Formatierungskontext bestimmt wird. Sie haben jedoch einen inneren Anzeigetyp von _flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die in unserem Flex-Item verschachtelt sind, legen sich als Block- und Inline-Elemente aus, es sei denn, etwas ändert ihren Anzeigetyp.

Dieses Konzept des äußeren und inneren Anzeigetyps ist wichtig, da es uns sagt, dass ein Container, der eine Layoutmethode wie Flexbox (`display: flex`) und Rasterlayout (`display: grid`) verwendet, immer noch an Block- und Inline-Layouts teilnimmt, da der äußere Anzeigetyp dieser Methoden `block` ist.

### Den Formatierungskontext ändern, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten basierend darauf an, was normalerweise für dieses Element sinnvoll ist. Zum Beispiel wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Inhaltsteil stark zu betonen, und wird standardmäßig in Browsern fett angezeigt. Es würde im Allgemeinen keinen Sinn machen, dass dieses `<strong>`-Element als Block-Level-Element angezeigt wird, das in eine neue Zeile bricht. Wenn Sie möchten, dass alle `<strong>`-Elemente als Block-Boxen angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` festlegen. Die Möglichkeit, Inhalte mit CSS zu stylen, bedeutet, dass Sie immer die am besten geeigneten semantischen HTML-Elemente verwenden können, um Ihre Inhalte zu kennzeichnen und dann zu ändern, wie sie mit CSS angezeigt werden.

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

In diesem Leitfaden haben wir uns angesehen, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument, ganz ohne CSS-Styling, auf eine lesbare Weise angezeigt. Durch das Verständnis, wie der normale Fluss funktioniert, wird Ihnen das Layouten leichter fallen, da Sie den Ausgangspunkt für Änderungen daran verstehen, wie Elemente angezeigt werden.

## Siehe auch

- [CSS Grundlegendes Box-Modell](/de/docs/Web/CSS/CSS_box_model)
- [Erlernen: Normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}}
- {{Glossary("Block-level_content", "Block-Level-Elemente")}}
