---
title: Block- und Inline-Layout im normalen Fluss
slug: Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen untersuchen, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Normaler Fluss wird in der [CSS 2.1-Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert. Diese erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontexts_ sind. Sie können entweder Block oder Inline sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Level-Boxen als Teilnehmer eines _Block-Formatierungskontexts_ und Inline-Level-Boxen als Teilnehmer eines _Inline-Formatierungskontexts_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, wird ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext erklärt die Spezifikation:

> „In einem Block-Formatierungskontext werden Boxen nacheinander vertikal vom oberen Rand eines umgebenden Blocks layoutet. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen benachbarten Block-Level-Boxen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die äußere linke Kante jeder Box die linke Kante des umgebenden Blocks (für ein rechts-nach-links-Layout berühren sich die rechten Kanten).“ - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> „In einem Inline-Formatierungskontext werden Boxen horizontal nacheinander layoutet, beginnend am oberen Rand eines umgebenden Blocks. Horizontale Margins, Borders und Paddings werden zwischen diesen Boxen berücksichtigt. Die Boxen können auf verschiedene Weise vertikal ausgerichtet werden: Ihre Unterkanten oder Oberkanten können ausgerichtet sein, oder die Grundlinien des Texts in ihnen können ausgerichtet sein. Der rechteckige Bereich, der die Boxen umfasst, die eine Zeile bilden, wird Zeilenbox genannt.“ - 9.4.2

Beachten Sie, dass die CSS 2.1-Spezifikation Dokumente als in einem horizontalen, von oben nach unten führenden Schreibrichtung-Modus beschreibt. Zum Beispiel wird der vertikale Abstand zwischen Block-Boxen beschrieben. Das Verhalten bei Block- und Inline-Elementen ist dasselbe, wenn in einem vertikalen Schreibrichtung-Modus gearbeitet wird; wir untersuchen dies in unserem Leitfaden [Flow-Layout und Schreibrichtungen](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes).

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibrichtungsmodus wie Englisch werden vertikal nacheinander layoutet.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibrichtungsmodus würden diese horizontal layoutet.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden arbeiten wir in Englisch und daher in einem horizontalen Schreibrichtungsmodus. Alles Beschriebene sollte jedoch genauso funktionieren, wenn Ihr Dokument in einem vertikalen Schreibrichtungsmodus ist.

Wie in der Spezifikation definiert, erzeugen die Margins zwischen zwei Block-Boxen den Abstand zwischen den Elementen. Dies sehen wir bei einem sehr einfachen Layout von zwei Absätzen, denen ich eine Border hinzugefügt habe. Das Standard-Browser-Stylesheet fügt durch Hinzufügen einer Margin oben und unten Abstand zwischen den Absätzen hinzu.

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

Wenn wir die Margins auf dem Absatz-Element auf `0` setzen, berühren sich die Borders.

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

Standardmäßig konsumieren Block-Elemente den gesamten Platz in der Inline-Richtung, sodass unsere Absätze sich ausdehnen und so groß wie möglich innerhalb ihres umgebenden Blocks werden. Wenn wir ihnen eine Breite geben, werden sie weiterhin untereinander layoutet, selbst wenn es Platz gibt, dass sie nebeneinander passen. Jeder beginnt gegen die Anfangskante des umgebenden Blocks, also dem Punkt, an dem Sätze in dieser Schreibrichtung beginnen würden.

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

### Collapsing von Margins

Die Spezifikation erklärt, dass Margins zwischen Block-Elementen _kollabieren_. Das bedeutet, dass, wenn ein Element mit einer oberen Margin direkt nach einem Element mit einer unteren Margin kommt, anstatt der Gesamtabstand die Summe dieser beiden Margins zu sein, die Margin kollabiert und im Wesentlichen so groß wird wie die größere der beiden Margins.

Im folgenden Beispiel haben die Absätze eine obere Margin von `20px` und eine untere Margin von `40px`. Die Größe der Margin zwischen den Absätzen beträgt `40px`, da die kleinere obere Margin des zweiten Absatzes mit der größeren unteren Margin des ersten kollabiert ist.

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

Sie können mehr über das Collapsing von Margins in unserem Artikel [Beherrschen des Margin-Collapsings](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie sich unsicher sind, ob Margins kollabieren, überprüfen Sie die Werte des Box-Modells in den DevTools Ihres Browsers. Dies gibt Ihnen die tatsächliche Größe der Margin und kann helfen zu identifizieren, was passiert.
>
> ![Screenshot des Box-Modell-Panels in den DevTools des Browsers, das die vier Werte für Margin, Border und Padding sowie Höhe und Breite in einer Grafik oben zeigt und unterhalb der Grafik box-sizing, display, float, line-height, position und z-index auflistet.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, in der Sätze in diesem Schreibrichtungsmodus verlaufen. Während wir normalerweise nicht dazu neigen, bei Inline-Elementen an Boxen zu denken, haben sie wie alles in CSS tatsächlich welche. Diese Inline-Boxen werden nacheinander arrangiert. Wenn nicht genug Platz im umgebenden Block für alle Boxen vorhanden ist, kann eine Box in eine neue Zeile brechen. Die durch diese Linien gebildeten Zeilen werden als Zeilenboxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erzeugt werden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

{{EmbedLiveSample("inline")}}

Die Boxen um die Wörter vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Boxen bezeichnet. Diese Boxen existieren, um sicherzustellen, dass alles in einer Box verpackt ist, können aber nicht direkt angesprochen werden.

Die Größe der Linienbox in der Block-Richtung (also die Höhe bei Englisch) wird durch die größte Box in ihr definiert. Im nächsten Beispiel ist das `<strong>`-Element 300%; da dieser Inhalt zwei Zeilen umfasst, definiert es nun die Höhe der Linienboxen dieser zwei Zeilen.

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

Erfahren Sie mehr darüber, wie Block- und Inline-Boxen in unserem Leitfaden zum [Visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model) funktionieren.

## Die display-Eigenschaft und Fluss-Layout

Zusätzlich zu den in CSS2.1 existierenden Regeln beschreiben neue CSS-Niveaus weiter das Verhalten von Block- und Inline-Boxen. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und alle darin enthaltenen Boxen sich verhalten. Im CSS Display Model Level 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten der Boxen und die Boxen, die sie generieren, verändert.

Der `display`-Typ eines Elements definiert den äußeren Anzeige-Typ; dieser bestimmt, wie die Box im Verhältnis zu anderen Elementen im selben Formatierungskontext angezeigt wird. Er definiert auch den inneren Anzeige-Typ, der diktiert, wie Boxen innerhalb dieses Elements sich verhalten. Dies wird sehr deutlich, wenn wir uns ein Flex-Layout ansehen. Im untenstehenden Beispiel gibt es ein {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Der Flex-Container verhält sich wie ein Block-Element: Er wird in einer neuen Zeile angezeigt und nimmt in der Inline-Richtung so viel Platz wie möglich ein. Dies ist der äußere Anzeige-Typ von `block`.

Die Flex-Items hingegen nehmen an einem Flex-Formatierungskontext teil, weil ihr Eltern-Element das Element mit `display: flex` ist, welches einen inneren Anzeige-Typ von `flex` hat und damit den Flex-Formatierungskontext für die direkten Kinder etabliert.

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

Deshalb können Sie sich vorstellen, dass jede Box in CSS auf diese Weise fungiert. Die Box selbst hat einen äußeren Anzeige-Typ, sodass sie weiß, wie sie sich im Verhältnis zu anderen Boxen verhält. Sie hat dann einen inneren Anzeige-Typ, der das Verhalten ihrer Kinder verändert. Diese Kinder haben ebenfalls einen äußeren und inneren Anzeige-Typ. Die Flex-Items im vorherigen Beispiel werden zu Flex-Level-Boxen, daher wird ihr äußerer Anzeige-Typ durch ihren Anteil am Flex-Formatierungskontext bestimmt. Sie haben einen inneren Anzeige-Typ von _Flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die in unserem Flex-Item verschachtelt sind, layouten sich als Block- und Inline-Elemente, es sei denn, etwas ändert ihren Anzeige-Typ.

Dieses Konzept des äußeren und inneren Anzeige-Typs ist wichtig, da es uns sagt, dass ein Container, der eine Layout-Methode wie Flexbox (`display: flex`) oder Grid-Layout (`display: grid`) verwendet, weiterhin am Block- und Inline-Layout teilnimmt, da der äußere Anzeige-Typ dieser Methoden `block` ist.

### Den Formatierungskontext eines Elements ändern

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten an, basierend auf dem, was für dieses Element normalerweise sinnvoll ist. Zum Beispiel wird ein {{HTMLElement("strong")}}-Element verwendet, um Inhalte stark zu betonen, und wird standardmäßig fett in Browsern angezeigt. Es würde allgemein keinen Sinn ergeben, dieses `<strong>`-Element als Block-Element anzuzeigen, das in eine neue Zeile bricht. Wenn Sie jedoch möchten, dass alle `<strong>`-Elemente als Block-Boxen angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Möglichkeit, Inhalte mit CSS zu stylen, ermöglicht es Ihnen, die passendsten semantischen HTML-Elemente zur Markierung Ihrer Inhalte zu verwenden und dann mit CSS zu ändern, wie sie angezeigt werden.

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

In diesem Leitfaden haben wir betrachtet, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ohne CSS-Styling auf eine lesbare Weise dargestellt. Indem Sie verstehen, wie der normale Fluss funktioniert, wird es Ihnen leichter fallen, Layouts zu gestalten, da Sie den Ausgangspunkt für Änderungen an der Anzeige von Elementen verstehen.

## Siehe auch

- [CSS-Basis-Box-Modell](/de/docs/Web/CSS/CSS_box_model)
- [Lernen: Normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}}
- {{Glossary("Block-level_content", "Block-Level-Elemente")}}
