---
title: Block- und Inline-Layout im normalen Fluss
slug: Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen untersuchen, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Normaler Fluss ist in der [CSS 2.1-Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontextes_ sind. Sie können entweder blockartig oder inline sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Level-Boxen als Teilnehmende an einem _Block-Formatierungskontext_ und Inline-Level-Boxen als Teilnehmende an einem _Inline-Formatierungskontext_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, wird ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> "In einem Block-Formatierungskontext werden Boxen nacheinander vertikal angeordnet, beginnend am oberen Rand eines umgebenden Blocks. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen benachbarten Block-Level-Boxen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die äußere linke Kante jeder Box die linke Kante des umgebenden Blocks (bei rechts-nach-links Formatierung berühren sich die rechten Kanten)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Boxen horizontal nacheinander angeordnet, beginnend am oberen Rand eines umgebenden Blocks. Horizontale Ränder, Rahmen und Abstände werden zwischen diesen Boxen eingehalten. Die Boxen können vertikal auf unterschiedliche Weise ausgerichtet werden: Ihre Unterseiten oder Oberseiten können ausgerichtet sein, oder die Baselines von Text innerhalb dieser Boxen können ausgerichtet sein. Der rechteckige Bereich, der die Boxen enthält, die eine Zeile bilden, wird als Zeilenbox bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1-Spezifikation Dokumente als horizontal, von oben nach unten schreibend beschreibt. Zum Beispiel, indem der vertikale Abstand zwischen Block-Boxen beschrieben wird. Das Verhalten bei Block- und Inline-Elementen ist das gleiche, wenn man in einem vertikalen Schreibmodus arbeitet; dies wird in unserem [Flusslayout und Schreibmodi](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes) Leitfaden untersucht.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus wie auf Englisch werden vertikal angeordnet, eins unter dem anderen.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie dann horizontal angeordnet.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden arbeiten wir auf Englisch und daher in einem horizontalen Schreibmodus. Allerdings sollte alles Beschriebene auf die gleiche Weise funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind die Abstände zwischen zwei Block-Boxen das, was die Trennung zwischen den Elementen erzeugt. Dies können wir am Layout von zwei Absätzen sehen, denen ich einen Rahmen hinzugefügt habe. Das Standard-Browser-Stylesheet fügt durch Hinzufügen eines Margins oben und unten Abstände zwischen den Absätzen hinzu.

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

Wenn wir Margins auf das Absatz-Element auf `0` setzen, dann werden die Rahmen aneinander berühren.

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

Standardmäßig beanspruchen Block-Elemente den gesamten Raum in der Inline-Richtung, sodass sich unsere Absätze ausbreiten und so groß wie möglich innerhalb ihres umgebenden Blocks werden. Wenn wir ihnen eine Breite geben, werden sie weiterhin eines unter das andere angeordnet, selbst wenn genug Platz vorhanden wäre, um sie nebeneinander zu platzieren. Jedes beginnt an der Startkante des umgebenden Blocks, also dort, wo in diesem Schreibmodus Sätze beginnen würden.

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

Die Spezifikation erklärt, dass Margins zwischen Block-Elementen _kollabieren_. Das bedeutet, dass, wenn Sie ein Element mit oberem Margin direkt nach einem Element mit unterem Margin haben, anstatt dass der gesamte Raum die Summe dieser beiden Margins ist, der Margin kollabiert, und so wird er im Wesentlichen so groß wie der größere der beiden Margins.

Im folgenden Beispiel haben die Absätze einen oberen Margin von `20px` und einen unteren Margin von `40px`. Die Größe des Margins zwischen den Absätzen beträgt `40px`, da der kleinere obere Margin des zweiten Absatzes mit dem größeren unteren Margin des ersten kollabiert ist.

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

Sie können mehr über Margin-Kollaps in unserem Artikel [Beherrschen des Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie sich nicht sicher sind, ob Margins kollabieren, überprüfen Sie die Box-Modell-Werte in Ihren Browser-DevTools. Diese geben Ihnen die tatsächliche Größe des Margins an, was Ihnen helfen kann, zu erkennen, was passiert.
>
> ![Screenshot des Box-Modell-Panels in den DevTools des Browsers, der die vier Werte für Margin, Rahmen und Abstände zusammen mit Höhe und Breite in einer Grafik oben anzeigt und box-sizing, display, float, line-height, position und z-index unter der Grafik auflistet.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, in der Sätze in diesem speziellen Schreibmodus verlaufen. Obwohl wir nicht dazu neigen, an Inline-Elemente als Boxen zu denken, haben sie, wie alles in CSS, dennoch welche. Diese Inline-Boxen werden nacheinander angeordnet. Wenn nicht genug Platz im umgebenden Block für alle Boxen vorhanden ist, kann eine Box auf eine neue Linie wechseln. Die erstellten Linien werden als Zeilenboxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt werden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

{{EmbedLiveSample("inline")}}

Die Boxen um die Wörter vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt werden, um sicherzustellen, dass alles in einer Box verpackt ist, aber solche, die wir nicht direkt anvisieren können.

Die Zeilenboxgröße in der Blockrichtung (also die Höhe, wenn man auf Englisch arbeitet) wird durch die größte Box innerhalb dieser definiert. Im nächsten Beispiel hat das `<strong>`-Element 300%; da dieser Inhalt sich über zwei Zeilen erstreckt, definiert es jetzt die Höhe der Zeilenboxen dieser beiden Linien.

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

Erfahren Sie mehr darüber, wie Block- und Inline-Boxen sich verhalten, in unserem Leitfaden zum [visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model).

## Die display-Eigenschaft und Flusslayout

Zusätzlich zu den in CSS2.1 bestehenden Regeln beschreiben neue CSS-Stufen weiter das Verhalten von Block- und Inline-Boxen. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und alle darin enthaltenen Boxen sich verhalten. In dem CSS Display Model Level 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten von Boxen und der Boxen, die sie erzeugen, verändert.

Der Anzeige-Typ eines Elements definiert den äußeren Anzeige-Typ; dies bestimmt, wie die Box zusammen mit anderen Elementen im selben Formatierungskontext angezeigt wird. Es definiert auch den inneren Anzeige-Typ, der bestimmt, wie Boxen innerhalb dieses Elements sich verhalten. Wir können dies sehr deutlich sehen, wenn wir ein Flex-Layout betrachten. Im folgenden Beispiel habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Der Flex-Container verhält sich wie ein Block-Element: Er wird in einer neuen Zeile angezeigt und nimmt so viel Platz in der Inline-Richtung ein, wie er kann. Dies ist der äußere Anzeige-Typ `block`.

Die Flex-Elemente hingegen nehmen an einem Flex-Formatierungskontext teil, da ihr Elternteil das Element mit `display: flex` ist, das einen inneren Anzeige-Typ von `flex` hat, der den Flex-Formatierungskontext für die direkten Kinder etabliert.

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

Daher können Sie sich vorstellen, dass jede Box in CSS auf diese Weise arbeitet. Die Box selbst hat einen äußeren Anzeige-Typ, sodass sie weiß, wie sie sich neben anderen Boxen verhält. Sie hat dann einen inneren Anzeige-Typ, der die Art und Weise ändert, wie ihre Kinder sich verhalten. Diese Kinder haben dann ebenfalls einen äußeren und inneren Anzeige-Typ. Die Flex-Elemente im vorherigen Beispiel werden zu Flex-Level-Boxen, sodass ihr äußerer Anzeige-Typ durch ihren Anteil am Flex-Formatierungskontext bestimmt wird. Sie haben jedoch einen inneren Anzeige-Typ von _Fluss_, was bedeutet, dass ihre Kinder an einem normalen Fluss teilnehmen. Elemente, die in unsere Flex-Elemente geschachtelt sind, legen sich selbst als Block- und Inline-Elemente aus, es sei denn, etwas ändert ihren Anzeige-Typ.

Dieses Konzept des äußeren und inneren Anzeige-Typs ist wichtig, da es uns sagt, dass ein Container, der eine Layout-Methode wie Flexbox (`display: flex`) und Raster-Layout (`display: grid`) verwendet, weiterhin an Block- und Inline-Layout teilnimmt, aufgrund des äußeren Anzeige-Typs dieser Methoden, der `block` ist.

### Ändern des Formatierungskontextes, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten basierend auf dem an, was normalerweise für dieses Element sinnvoll ist. Zum Beispiel wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Inhalt stark zu betonen und wird in Browsern standardmäßig fett angezeigt. Es würde normalerweise keinen Sinn machen, dass das `<strong>`-Element als Block-Level-Element angezeigt wird, das auf einer neuen Zeile beginnt. Wenn Sie jedoch wollen, dass alle `<strong>`-Elemente als Blockboxen angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Fähigkeit, Inhalte mit CSS zu gestalten, bedeutet, dass Sie immer die geeignetsten semantischen HTML-Elemente verwenden können, um Ihren Inhalt zu markieren und dann mit CSS zu ändern, wie sie angezeigt werden.

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

In diesem Leitfaden haben wir untersucht, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ganz ohne CSS-Styling auf eine lesbare Weise angezeigt. Indem Sie verstehen, wie der normale Fluss funktioniert, werden Sie das Layout einfacher finden, da Sie den Ausgangspunkt für Änderungen an der Anzeige von Elementen verstehen.

## Siehe auch

- [CSS Grundlegendes Box-Modell](/de/docs/Web/CSS/CSS_box_model)
- [Lernen: Normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)
- {{Glossary("Inline-level_content", "Inline-Elemente auf Ebene")}}
- {{Glossary("Block-level_content", "Block-Elemente auf Ebene")}}
