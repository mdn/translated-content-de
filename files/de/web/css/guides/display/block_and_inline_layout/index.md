---
title: Block- und Inline-Layout im normalen Fluss
short-title: Block- und Inline-Layout
slug: Web/CSS/Guides/Display/Block_and_inline_layout
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

In diesem Leitfaden werden wir die Grundlagen erkunden, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Der normale Fluss wird in der [CSS 2.1-Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontextes_ sind. Sie können entweder blockartig oder inline sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Element-Boxen als Teilnahme an einem _Block-Formatierungskontext_ und Inline-Element-Boxen als Teilnahme an einem _Inline-Formatierungskontext_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, wird ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> "In einem Block-Formatierungskontext werden Boxen nacheinander vertikal angeordnet, beginnend am oberen Rand eines enthaltenden Blocks. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen benachbarten Block-Element-Boxen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die linke Außenkante jeder Box die linke Kante des enthaltenden Blocks (für Rechts-nach-Links-Formatierung berühren sich die rechten Kanten)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Boxen horizontal nacheinander angeordnet, beginnend am oberen Rand eines enthaltenden Blocks. Horizontale Ränder, Rahmen und Abstände werden zwischen diesen Boxen respektiert. Die Boxen können vertikal auf verschiedene Arten ausgerichtet sein: ihre Unterseiten oder Oberseiten können ausgerichtet werden, oder die Text-Baselines innerhalb von ihnen können ausgerichtet werden. Der rechteckige Bereich, der die Boxen enthält, die eine Linie bilden, wird als Linienbox bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1-Spezifikation Dokumente als in einem horizontalen, von oben nach unten gerichteten Schreibmodus beschreibt. Zum Beispiel durch das Beschreiben des vertikalen Abstands zwischen Block-Boxen. Das Verhalten bei Block- und Inline-Elementen ist dasselbe, wenn man in einem vertikalen Schreibmodus arbeitet; wir erkunden dies in unserem [Fluss-Layout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)-Leitfaden.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus wie Englisch werden vertikal angeordnet, eines unter dem anderen.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie dann horizontal angeordnet.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden arbeiten wir auf Englisch und deshalb in einem horizontalen Schreibmodus. Allerdings sollte alles Beschriebene auf dieselbe Weise funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind die Ränder zwischen zwei Block-Boxen das, was Trennung zwischen den Elementen schafft. Wir können dies mit dem Layout von zwei Absätzen sehen, denen ich einen Rahmen hinzugefügt habe. Das Standard-Browser-Stylesheet fügt durch das Hinzufügen eines Abstands an der Ober- und Unterseite der Absätze Platz ein.

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

Wenn wir die Ränder auf dem Absatz-Element auf `0` setzen, berühren sich die Rahmen.

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

Standardmäßig verbrauchen Block-Elemente den gesamten Raum in der Inline-Richtung, sodass sich unsere Absätze ausbreiten und so groß wie möglich werden innerhalb ihres enthaltenden Blocks. Wenn wir ihnen eine Breite geben, bleiben sie dennoch untereinander angeordnet - sogar wenn genug Platz da wäre, um sie nebeneinander zu stellen. Jede Box beginnt an der Startkante des enthaltenden Blocks, also dort, wo Sätze in diesem Schreibmodus beginnen würden.

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

Die Spezifikation erklärt, dass Ränder zwischen Block-Elementen _kollabieren_. Das bedeutet, dass wenn Sie ein Element mit einem oberen Rand direkt nach einem Element mit einem unteren Rand haben, anstatt dass der gesamte Raum die Summen dieser beiden Ränder ist, der Rand kollabiert und im Wesentlichen so groß wird wie der größere der beiden Ränder.

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

Sie können mehr über Margin-Kollaps in unserem Artikel [Margin-Kollaps meistern](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie nicht sicher sind, ob Ränder kollabieren, überprüfen Sie die Box-Modell-Werte in Ihren Browser-Entwicklungstools. Dies gibt Ihnen die tatsächliche Größe des Randes, was Ihnen helfen kann zu identifizieren, was passiert.
>
> ![Bildschirmfoto des Box-Modell-Panel in den Entwicklungswerkzeugen des Browsers, das die vier Werte für Rand, Rahmen und Abstand zusammen mit Höhe und Breite in einer Grafik oben anzeigt und box-sizing, display, float, line-height, position und z-index unter der Grafik auflistet.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, in der Sätze in diesem speziellen Schreibmodus verlaufen. Obwohl wir oft nicht daran denken, dass Inline-Elemente eine Box haben, haben sie es in CSS. Diese Inline-Boxen sind nacheinander angeordnet. Wenn nicht genug Platz im enthaltenden Block für alle Boxen vorhanden ist, kann eine Box auf eine neue Zeile umgebrochen werden. Die gebildeten Zeilen werden als Linienboxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt wurden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

{{EmbedLiveSample("inline")}}

Die Boxen um die Worte vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt werden, um sicherzustellen, dass alles in einer Box eingebettet ist, die wir jedoch nicht direkt anvisieren können.

Die Linie-Box-Größe in der Blockrichtung (also die Höhe bei Arbeiten auf Englisch) wird durch die höchste Box darin definiert. Im nächsten Beispiel ist das `<strong>`-Element 300%; da dieser Inhalt zwei Zeilen umfasst, definiert es nun die Höhe der Linienboxen dieser beiden Zeilen.

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

Erfahren Sie mehr darüber, wie Block- und Inline-Boxen sich verhalten in unserem Leitfaden zum [visuellen Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model).

## Die display-Eigenschaft und Fluss-Layout

Zusätzlich zu den bestehenden Regeln in CSS2.1 beschreiben neue CSS-Ebenen weiter das Verhalten von Block- und Inline-Boxen. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und alle Boxen darin sich verhalten. Im CSS-Anzeigemodell Level 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten von Boxen und die, die sie generieren, ändert.

Der Anzeigetyp eines Elements definiert den äußeren Anzeigetyp; dieser bestimmt, wie die Box zusammen mit anderen Elementen im selben Formatierungskontext angezeigt wird. Es definiert auch den inneren Anzeigetyp, der diktiert, wie Boxen innerhalb dieses Elements sich verhalten. Wir können das sehr klar sehen, wenn wir ein Flex-Layout betrachten. Im folgenden Beispiel habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` zugewiesen habe. Der Flex-Container verhält sich wie ein Block-Element: er wird in einer neuen Zeile angezeigt und nimmt in der Inline-Richtung so viel Platz wie möglich ein. Dies ist der äußere Anzeigetyp von `block`.

Die Flex-Elemente jedoch nehmen an einem Flex-Formatierungskontext teil, weil ihr Elternteil das Element mit `display: flex` ist, das einen inneren Anzeigetyp von `flex` hat und den Flex-Formatierungskontext für die direkten Kinder etabliert.

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

Daher können Sie sich vorstellen, dass jede Box in CSS auf diese Weise funktioniert. Die Box selbst hat einen äußeren Anzeigetyp, damit sie weiß, wie sie sich neben anderen Boxen verhalten soll. Sie hat dann einen inneren Anzeigetyp, der die Art und Weise ändert, wie ihre Kinder sich verhalten. Diese Kinder haben dann ebenfalls einen äußeren und inneren Anzeigetyp. Die Flex-Elemente im vorherigen Beispiel werden zu Flex-Level-Boxen, sodass ihr äußerer Anzeigetyp durch ihre Teilnahme am Flex-Formatierungskontext diktiert wird. Sie haben jedoch einen inneren Anzeigetyp von _Fluss_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die in unserem Flex-Element verschachtelt sind, ordnen sich als Block- und Inline-Elemente, es sei denn, etwas ändert ihren Anzeigetyp.

Dieses Konzept des äußeren und inneren Anzeigetyps ist wichtig, da es uns sagt, dass ein Container, der eine Layoutmethode wie Flexbox (`display: flex`) und Rasterlayout (`display: grid`) verwendet, immer noch am Block- und Inline-Layout teilnimmt, aufgrund des äußeren Anzeigetyps dieser Methoden `block` ist.

### Ändern des Formatierungskontextes, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten basierend auf dem, was normalerweise für dieses Element sinnvoll ist. Beispielsweise wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Inhalt stark hervorzuheben und wird standardmäßig in Browsern fett angezeigt. Es wäre im Allgemeinen nicht sinnvoll, dass das `<strong>`-Element als Block-Level-Element angezeigt wird, das in einer neuen Zeile umbricht. Wenn Sie jedoch möchten, dass alle `<strong>`-Elemente als Block-Boxen angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` festlegen. Die Fähigkeit, Inhalte mit CSS stilisieren zu können, bedeutet, dass Sie immer die am besten geeigneten semantischen HTML-Elemente verwenden können, um Ihre Inhalte zu markieren und dann zu ändern, wie sie mit CSS angezeigt werden.

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

In diesem Leitfaden haben wir uns angeschaut, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Ein HTML-Dokument ohne jegliche CSS-Bearbeitung wird aufgrund dieses Standardverhaltens auf lesbare Weise angezeigt. Zu verstehen, wie der normale Fluss funktioniert, ist ein wichtiger Ausgangspunkt für das Verständnis von CSS-Layouts insgesamt.

## Weitere Informationen

- [CSS Grundlegendes Box-Modell](/de/docs/Web/CSS/Guides/Box_model)
- [Lernen: Normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}}
- {{Glossary("Block-level_content", "Block-Level-Elemente")}}
