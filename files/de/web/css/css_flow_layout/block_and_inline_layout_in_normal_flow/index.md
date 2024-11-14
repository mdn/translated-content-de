---
title: Block- und Inline-Layout im normalen Fluss
slug: Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: 5755d6dfbac15abc29ddcd924cee110c4139b073
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen erforschen, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Der normale Fluss wird in der [CSS 2.1 Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontexts_ sind. Sie können entweder blockförmig oder inline sein, aber nicht beides gleichzeitig. Wir beschreiben block-level-Boxen als Teilnehmer eines _Block-Formatierungskontexts_ und inline-level-Boxen als Teilnehmer eines _Inline-Formatierungskontexts_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, wird ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> „In einem Block-Formatierungskontext werden Boxen nacheinander vertikal angeordnet, beginnend am oberen Rand eines umschließenden Blocks. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen angrenzenden Block-Elementen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die linke äußere Kante jeder Box die linke Kante des umschließenden Blocks (bei Rechts-nach-Links-Formatierung berühren sich die rechten Kanten).“ - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> „In einem Inline-Formatierungskontext werden Boxen horizontal, nacheinander, beginnend am oberen Rand eines umschließenden Blocks angeordnet. Horizontale Abstände, Rahmen und Abstände zwischen diesen Boxen werden beachtet. Die Boxen können in verschiedenen Weisen vertikal ausgerichtet werden: Ihre Unterseiten oder Oberseiten können ausgerichtet sein, oder die Baselines des Textes innerhalb von ihnen können ausgerichtet sein. Der rechteckige Bereich, der die Boxen enthält, die eine Linie bilden, wird als Zeilenbox bezeichnet.“ - 9.4.2

Beachten Sie, dass die CSS 2.1-Spezifikation Dokumente als horizontal, von oben nach unten im Schreibmodus beschreibt. Zum Beispiel durch die Beschreibung des vertikalen Abstands zwischen Block-Boxen. Das Verhalten bei Block- und Inline-Elementen ist dasselbe, wenn im vertikalen Schreibmodus gearbeitet wird, und wir werden dies in einem zukünftigen Leitfaden über Flusslayout und Schreibmodi erforschen.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Blockelemente im horizontalen Schreibmodus wie Englisch, werden vertikal angeordnet, eines unter dem anderen.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

Im vertikalen Schreibmodus würden sie dann horizontal angeordnet.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden werden wir auf Englisch arbeiten und daher ein horizontaler Schreibmodus. Allerdings sollte alles, was beschrieben wird, auf die gleiche Weise funktionieren, wenn Ihr Dokument im vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind es die Abstände zwischen zwei Block-Boxen, die die Trennung zwischen den Elementen erzeugen. Wir sehen dies bei einem sehr einfachen Layout von zwei Absätzen, denen ich einen Rahmen hinzugefügt habe. Das Standard-Styling des Browsers fügt durch Hinzufügen eines Abstands oben und unten zwischen den Absätzen einen Abstand hinzu.

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

Wenn wir Abstände beim Absatz-Element auf `0` setzen, werden die Rahmen einander berühren.

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

Standardmäßig nutzen Blockelemente den gesamten Raum in der Inline-Richtung, sodass sich unsere Absätze ausbreiten und so groß wie möglich im umschließenden Block werden. Wenn wir ihnen eine Breite geben, werden sie weiter untereinander angeordnet, auch wenn Platz für sie wäre, um nebeneinander zu stehen. Jedes beginnt an der Startkante des umschließenden Blocks, also dem Punkt, an dem Sätze in diesem Schreibmodus beginnen würden.

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

Die Spezifikation erklärt, dass Abstände zwischen Blockelementen _kollabieren_. Das bedeutet, dass wenn Sie ein Element mit einem oberen Abstand unmittelbar nach einem Element mit einem unteren Abstand haben, anstatt dass der gesamte Abstand die Summe dieser beiden Abstände ist, der Abstand kollabiert und somit im Wesentlichen so groß wird wie der größere der beiden Abstände.

Im folgenden Beispiel haben die Absätze einen oberen Abstand von `20px` und einen unteren Abstand von `40px`. Die Größe des Abstands zwischen den Absätzen beträgt `40px`, da der kleinere obere Abstand des zweiten Absatzes mit dem größeren unteren Abstand des ersten zusammengefallen ist.

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

Sie können mehr über den Margin-Kollaps in unserem Artikel [Beherrschung des Margin-Kollapses](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie sich nicht sicher sind, ob Abstände zusammenfallen, überprüfen Sie die Box-Modell-Werte in den Entwicklungswerkzeugen Ihres Browsers. Dies wird Ihnen die tatsächliche Größe des Abstands geben, was Ihnen helfen kann zu erkennen, was passiert.
>
> ![Screenshot des Box-Modell-Panels in den Entwickler-Werkzeugen des Browsers, das die vier Werte für Margin, Border und Padding neben der Höhe und Breite in einer Grafik oben zeigt und Box-Sizing, Display, Float, Line-Height, Position und Z-Index unterhalb der Grafik auflistet.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, in der Sätze in diesem speziellen Schreibmodus verlaufen. Während wir dazu neigen, nicht an Inline-Elemente als Boxen zu denken, haben sie in CSS, wie alles, eine Box. Diese Inline-Boxen werden nacheinander angeordnet. Wenn im umschließenden Block nicht genügend Platz für alle Boxen ist, kann eine Box in eine neue Zeile übergehen. Die erstellten Linien werden als Zeilenboxen bezeichnet.

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

Die Größe der Zeilenbox in der Blockrichtung (also die Höhe beim Arbeiten in Englisch) wird durch die höchste Box darin definiert. Im nächsten Beispiel hat das `<strong>`-Element 300%; da dieser Inhalt zwei Zeilen umspannt, definiert er nun die Höhe der Zeilenboxen dieser beiden Zeilen.

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

## Die `display`-Eigenschaft und das Flusslayout

Zusätzlich zu den in CSS2.1 vorhandenen Regeln beschreiben neue CSS-Ebenen weiter das Verhalten von Block- und Inline-Boxen. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und alle Boxen darin sich verhalten. Im CSS Display Model Level 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten von Boxen und der von ihnen erzeugten Boxen verändert.

Der Anzeigetyp eines Elements definiert den äußeren Anzeigetyp; dieser gibt vor, wie die Box neben anderen Elementen im selben Formatierungskontext angezeigt wird. Er definiert auch den inneren Anzeigetyp, der vorgibt, wie Boxen innerhalb dieses Elements sich verhalten. Wir können dies sehr klar erkennen, wenn wir ein Flexlayout betrachten. Im Beispiel unten habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Der Flex-Container verhält sich wie ein Block-Element: Er wird in einer neuen Zeile angezeigt und nimmt den gesamten Raum ein, den er in der Inline-Richtung kann. Dies ist der äußere Anzeigetyp von `block`.

Die Flex-Items hingegen nehmen an einem Flex-Formatierungskontext teil, da ihr Elternteil das Element mit `display: flex` ist, das einen inneren Anzeigetyp von `flex` hat und den Flex-Formatierungskontext für die direkten Kinder festlegt.

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

Daher können Sie sich jedes Box-Element in CSS auf diese Weise vorstellen. Die Box selbst hat einen äußeren Anzeigetyp, sodass sie weiß, wie sie sich neben anderen Boxen verhält. Dann hat sie einen inneren Anzeigetyp, der ändert, wie ihre Kinder sich verhalten. Diese Kinder haben dann auch einen äußeren und inneren Anzeigetyp. Die Flex-Items im vorherigen Beispiel werden zu flex-level-Boxen, also wird ihr äußerer Anzeigetyp durch ihre Teilnahme am Flex-Formatierungskontext diktiert. Sie haben jedoch einen inneren Anzeigetyp von _flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die in unser Flex-Item verschachtelt sind, ordnen sich als Block- und Inline-Elemente an, solange nichts ihren Anzeigetyp ändert.

Dieses Konzept des äußeren und inneren Anzeigetyps ist wichtig, da es uns sagt, dass ein Container, der eine Layoutmethode wie Flexbox (`display: flex`) und Rasterlayout (`display: grid`) verwendet, weiterhin am Block- und Inline-Layout teilnimmt, da der äußere Anzeigetyp dieser Methoden `block` ist.

### Ändern des Formatierungskontexts, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten an, basierend darauf, was normalerweise für dieses Element sinnvoll ist. Beispielsweise wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Textbereich stark hervorzuheben und wird standardmäßig in Browsern fett dargestellt. Es würde normalerweise keinen Sinn machen, dass dieses `<strong>`-Element als Block-Element angezeigt wird, das in eine neue Zeile umbricht. Wenn Sie jedoch möchten, dass alle `<strong>`-Elemente als Block-Boxen angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Möglichkeit, Inhalte mit CSS zu stylen, bedeutet, dass Sie immer die am besten geeigneten semantischen HTML-Elemente verwenden können, um Ihre Inhalte zu strukturieren, und dann ändern können, wie sie mit CSS dargestellt werden.

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

In diesem Leitfaden haben wir uns angesehen, wie Elemente im normalen Fluss angezeigt werden, als Block- und Inline-Elemente. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ganz ohne CSS-Styling auf eine lesbare Weise angezeigt. Wenn Sie verstehen, wie der normale Fluss funktioniert, wird Ihnen das Layout leichter fallen, da Sie den Ausgangspunkt für Änderungen daran verstehen, wie Elemente angezeigt werden.

## Siehe auch

- [CSS Grundlegendes Box-Modell](/de/docs/Web/CSS/CSS_box_model)
- _[Normaler Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)_ - Layout lernen
- {{Glossary("Inline-level_content", "Inline-Elemente")}}
- {{Glossary("Block-level_content", "Block-Elemente")}}
