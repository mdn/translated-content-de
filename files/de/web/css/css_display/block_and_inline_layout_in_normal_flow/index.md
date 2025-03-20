---
title: Block- und Inline-Layout im normalen Fluss
slug: Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: 6d55eec58e38583da60aa635d41393ad051d1c6d
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen erkunden, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Normaler Fluss ist in der [CSS 2.1 Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontexts_ sein werden. Sie können entweder Block oder Inline sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Level-Boxen als Teilnehmer an einem _Block-Formatierungskontext_ und Inline-Level-Boxen als Teilnehmer an einem _Inline-Formatierungskontext_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, ist ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> "In einem Block-Formatierungskontext werden Boxen nacheinander vertikal angeordnet, beginnend am oberen Rand eines umschließenden Blockes. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen benachbarten Block-Level-Boxen in einem Block-Formatierungskontext kollabieren.
> In einem Block-Formatierungskontext berührt der linke äußere Rand jeder Box den linken Rand des umschließenden Blocks (bei einer von rechts nach links formatierenden Ausrichtung berühren sich rechte Ränder)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Boxen horizontal, eine nach der anderen, angeordnet, beginnend am oberen Rand eines umschließenden Blocks. Horizontale Abstände, Rahmen und Abstände werden zwischen diesen Boxen respektiert. Die Boxen können auf verschiedene Weise vertikal ausgerichtet werden: ihre Böden oder Oberseiten können ausgerichtet werden, oder die Baselines des Textes innerhalb von ihnen können ausgerichtet werden. Der rechteckige Bereich, der die Boxen enthält, die eine Zeile bilden, wird als Zeilenbox bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1-Spezifikation Dokumente als in einem horizontalen, von oben nach unten schreibenden Modus beschreibt. Zum Beispiel durch die Beschreibung des vertikalen Abstands zwischen Blockboxen. Das Verhalten bei Block- und Inline-Elementen ist dasselbe, wenn in einem vertikalen Schreibmodus gearbeitet wird; wir untersuchen dies in unserem [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes) Leitfaden.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus wie Englisch, werden vertikal, eins unter dem anderen angeordnet.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus dann würden sie sich horizontal anordnen.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden werden wir auf Englisch arbeiten und daher in einem horizontalen Schreibmodus. Alles Beschriebene sollte jedoch auf die gleiche Weise funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind die Abstände zwischen zwei Blockboxen das, was die Trennung zwischen den Elementen schafft. Wir können dies mit dem Layout von zwei Absätzen sehen, denen ich einen Rand hinzugefügt habe. Das Standard-Browser-Stylesheet fügt den Absätzen durch Hinzufügen eines Abstands nach oben und unten einen Abstand hinzu.

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

Wenn wir die Abstände auf dem Absatz-Element auf `0` setzen, dann werden die Ränder sich berühren.

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

Standardmäßig werden Block-Elemente den gesamten Platz in der Inline-Richtung einnehmen, sodass sich unsere Absätze ausbreiten und so groß wie möglich innerhalb ihres umschließenden Blocks werden. Wenn wir ihnen eine Breite geben, werden sie weiterhin eins unter dem anderen angeordnet, selbst wenn es Platz gäbe, damit sie nebeneinander stehen. Jeder beginnt an der Startkante des umschließenden Blocks, also dem Punkt, an dem Sätze in diesem Schreibmodus beginnen würden.

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

### Ränder kollabieren

Die Spezifikation erklärt, dass Ränder zwischen Block-Elementen _kollabieren_. Das bedeutet, dass wenn Sie ein Element mit einem oberen Rand direkt nach einem Element mit einem unteren Rand haben, anstatt dass der gesamte Raum die Summe dieser beiden Ränder ist, der Rand kollabiert und damit so groß wie der größere der beiden Ränder wird.

Im folgenden Beispiel haben die Absätze einen oberen Rand von `20px` und einen unteren Rand von `40px`. Die Größe des Randes zwischen den Absätzen beträgt `40px`, da der kleinere obere Rand des zweiten Absatzes mit dem größeren unteren Rand des ersten Absatzes kollabiert ist.

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

Sie können mehr über Ränder-Kollaps in unserem Artikel [Mastering Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie nicht sicher sind, ob Ränder kollabieren, überprüfen Sie die Box-Modell-Werte in Ihren Browser-Entwicklertools. Dies gibt Ihnen die tatsächliche Größe des Randes, was Ihnen helfen kann, zu identifizieren, was passiert.
>
> ![Screenshot des Box-Modell-Panels in den Browser-Entwicklungstools, das die vier Werte für Rand, Rahmen und Auffüllung zusammen mit Höhe und Breite in einer Grafik oben zeigt und Box-Sizing, Anzeige, Float, Zeilenhöhe, Position und Z-Index unter der Grafik auflistet.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, in der Sätze in diesem bestimmten Schreibmodus laufen. Während wir normalerweise nicht dazu neigen, Inline-Elemente als Boxen wahrzunehmen, haben sie, wie alles in CSS, Boxen. Diese Inline-Boxen sind nacheinander angeordnet. Wenn im umschließenden Block nicht genug Platz für alle Boxen ist, kann eine Box auf eine neue Zeile umgebrochen werden. Die erstellten Zeilen werden als Zeilenboxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt wurden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

{{EmbedLiveSample("inline")}}

Die Boxen um die Wörter vor dem `<strong>` Element und nach dem `</strong>` Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt wurden, um sicherzustellen, dass alles in einer Box verpackt ist, aber solche, die wir nicht direkt anvisieren können.

Die Größe der Zeilenbox in der Blockrichtung (also die Höhe beim Arbeiten auf Englisch) wird durch die höchste Box innerhalb davon definiert. Im nächsten Beispiel ist das `<strong>` Element 300%; da dieser Inhalt sich über zwei Zeilen erstreckt, definiert es jetzt die Höhe der Zeilenboxen dieser beiden Zeilen.

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

Erfahren Sie mehr darüber, wie sich Block- und Inline-Boxen in unserem Leitfaden zum [visuellen Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model) verhalten.

## Die display-Eigenschaft und Flusslayout

Zusätzlich zu den in CSS2.1 existierenden Regeln beschreiben neue Ebenen von CSS weiter das Verhalten von Block- und Inline-Boxen. Die {{cssxref("display")}}-Eigenschaft definiert, wie sich eine Box und alle Boxen innerhalb davon verhalten. In der CSS Display Model Level 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten von Boxen und den von ihnen generierten Boxen verändert.

Der Anzeigentyp eines Elements definiert den äußeren Anzeigentyp; dieser bestimmt, wie die Box neben anderen Elementen im gleichen Formatierungskontext angezeigt wird. Es definiert auch den inneren Anzeigentyp, der bestimmt, wie sich Boxen innerhalb dieses Elements verhalten. Wir können dies sehr deutlich sehen, wenn wir ein Flex-Layout betrachten. Im folgenden Beispiel habe ich ein {{HTMLElement("div")}}, das ich mit `display: flex` versehen habe. Der Flex-Container verhält sich wie ein Block-Element: Er wird in einer neuen Zeile angezeigt und nimmt den gesamten Platz ein, den er in der Inline-Richtung kann. Dies ist der äußere Anzeigentyp von `block`.

Die Flex-Elemente jedoch nehmen an einem Flex-Formatierungskontext teil, weil ihr Elternteil das Element mit `display: flex` ist, das einen inneren Anzeigentyp von `flex` hat und den Flex-Formatierungskontext für die direkten Kinder festlegt.

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

Daher können Sie denken, dass jede Box in CSS auf diese Weise funktioniert. Die Box selbst hat einen äußeren Anzeigentyp, sodass sie weiß, wie sie neben anderen Boxen zu verhalten ist. Sie hat dann einen inneren Anzeigentyp, der die Art und Weise ändert, wie sich ihre Kinder verhalten. Diese Kinder haben dann auch einen äußeren und inneren Anzeigentyp. Die Flex-Elemente im vorherigen Beispiel werden zu Flex-Level-Boxen, sodass ihr äußerer Anzeigentyp durch die Teilnahme am Flex-Formatierungskontext bestimmt wird. Sie haben jedoch einen inneren Anzeigentyp von _flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die innerhalb unseres Flex-Elements verschachtelt sind, legen sich als Block- und Inline-Elemente aus, es sei denn, etwas ändert ihren Anzeigentyp.

Dieses Konzept des äußeren und inneren Anzeigentyps ist wichtig, da es uns sagt, dass ein Container, der eine Layout-Methode wie Flexbox (`display: flex`) und Grid-Layout (`display: grid`) verwendet, weiterhin an Block- und Inline-Layout teilnimmt, da der äußere Anzeigentyp dieser Methoden `block` ist.

### Änderung des Formatierungskontexts, in dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten basierend auf dem an, was normalerweise für dieses Element sinnvoll ist. Zum Beispiel wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Inhalt stark zu betonen und wird standardmäßig in Browsern fett angezeigt. Es würde normalerweise keinen Sinn machen, dass dieses `<strong>`-Element als Block-Level-Element angezeigt wird, das in eine neue Zeile umbricht. Wenn Sie jedoch alle `<strong>`-Elemente als Block-Boxen anzeigen möchten, könnten Sie dies tun, indem Sie `strong { display: block; }` festlegen. Die Möglichkeit, Inhalte mit CSS zu gestalten, bedeutet, dass Sie immer die geeignetsten semantischen HTML-Elemente verwenden können, um Ihren Inhalt zu kennzeichnen, und dann ändern, wie sie mit CSS angezeigt werden.

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

In diesem Leitfaden haben wir uns angesehen, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ganz ohne CSS-Styling auf eine lesbare Weise angezeigt. Indem Sie verstehen, wie der normale Fluss funktioniert, wird Ihnen das Layouten einfacher fallen, da Sie den Ausgangspunkt verstehen, um Veränderungen daran vorzunehmen, wie Elemente angezeigt werden.

## Siehe auch

- [CSS-Grundboxmodell](/de/docs/Web/CSS/CSS_box_model)
- [Lernen: Normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)
- {{Glossary("Inline-level_content", "Inhalt auf Inline-Ebene")}}
- {{Glossary("Block-level_content", "Inhalt auf Block-Ebene")}}
