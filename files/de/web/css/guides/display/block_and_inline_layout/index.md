---
title: Block- und Inline-Layout im Normalfluss
short-title: Block- und Inline-Layout
slug: Web/CSS/Guides/Display/Block_and_inline_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden werden wir die Grundlagen untersuchen, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des Normalflusses sind.

Der Normalfluss ist in der [CSS 2.1-Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Kästchen im Normalfluss Teil eines _Formatierungskontextes_ sind. Sie können entweder block- oder inlinebasiert sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Level-Kästchen als Teil eines _Block-Formatierungskontextes_, und Inline-Level-Kästchen als Teil eines _Inline-Formatierungskontextes_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, ist ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> "In einem Block-Formatierungskontext werden Kästchen eines nach dem anderen vertikal, beginnend am oberen Rand eines Umfassungsblocks, ausgelegt. Der vertikale Abstand zwischen zwei benachbarten Kästchen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen benachbarten Block-Level-Kästchen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die linke Außenkante jedes Kästchens die linke Kante des Umfassungsblocks (bei rechts-nach-links-Formatierung berühren sich die rechten Kanten)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Kästchen horizontal, eines nach dem anderen, beginnend am oberen Rand eines Umfassungsblocks, ausgelegt. Horizontale Ränder, Umrandungen und Abstände werden zwischen diesen Kästchen respektiert. Die Kästchen können auf verschiedene Weise vertikal ausgerichtet werden: ihre Unterseiten oder Oberseiten können ausgerichtet werden, oder die Grundlinien des darin enthaltenen Textes können ausgerichtet werden. Der rechteckige Bereich, der die Kästchen enthält, die eine Linie bilden, wird als Zeilenkasten bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1-Spezifikation Dokumente als in einem horizontalen von oben nach unten Schreibmodus beschreibt. Zum Beispiel durch die Beschreibung des vertikalen Abstands zwischen Block-Kästchen. Das Verhalten bei Block- und Inline-Elementen ist dasselbe, wenn in einem vertikalen Schreibmodus gearbeitet wird; wir erkunden dies in unserem [Fluss-Layout und Schreibmodi](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)-Leitfaden.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus, wie im Englischen, werden vertikal, eines unter dem anderen, ausgelegt.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie dann horizontal ausgelegt.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden werden wir auf Englisch arbeiten und daher einen horizontalen Schreibmodus verwenden. Allerdings sollte alles Beschriebene genauso funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind die Ränder zwischen zwei Block-Kästchen das, was die Trennung zwischen den Elementen schafft. Wir können dies mit dem Layout von zwei Absätzen sehen, denen ich eine Umrandung hinzugefügt habe. Das Standard-Stylesheet des Browsers fügt durch das Hinzufügen eines oberen und unteren Randes Abstand zwischen den Absätzen hinzu.

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

Wenn wir die Ränder des Absatz-Elements auf `0` setzen, werden die Umrandungen berühren.

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

Standardmäßig werden Block-Elemente den gesamten Raum in der Inline-Richtung einnehmen, sodass sich unsere Absätze ausbreiten und so groß wie möglich innerhalb ihres Umfassungsblocks werden. Wenn wir ihnen eine Breite geben, werden sie weiterhin untereinander ausgelegt, auch wenn Platz für sie nebeneinander wäre. Jedes beginnt an der Startkante des Umfassungsblocks, also dort, wo in diesem Schreibmodus die Sätze beginnen würden.

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

Die Spezifikation erklärt, dass Ränder zwischen Block-Elementen _zusammenfallen_. Das bedeutet, dass wenn Sie ein Element mit einem oberen Rand direkt nach einem Element mit einem unteren Rand haben, der Gesamtabstand nicht die Summe dieser beiden Ränder ist. Der Rand kollabiert, und wird im Wesentlichen so groß wie der größere der beiden Ränder.

Im folgenden Beispiel haben die Absätze einen oberen Rand von `20px` und einen unteren Rand von `40px`. Die Größe des Randes zwischen den Absätzen beträgt `40px`, da der kleinere obere Rand des zweiten Absatzes mit dem größeren unteren Rand des ersten kollabiert ist.

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

Mehr über Rand-Kollapsierung erfahren Sie in unserem Artikel [Mastering Margin Collapsing](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

> [!NOTE]
> Wenn Sie sich nicht sicher sind, ob Ränder kollabieren, überprüfen Sie die Box-Modell-Werte in den DevTools Ihres Browsers. Dies gibt Ihnen die tatsächliche Größe des Randes, was Ihnen helfen kann, zu erkennen, was passiert.
>
> ![Screenshot des Box-Modell-Panels in den DevTools des Browsers, der die vier Werte für Rand, Umrandung und Abstände sowie Höhe und Breite in einer Grafik oben zeigt und Box-Sizing, Anzeige, Float, Zeilenhöhe, Position und Z-Index unterhalb der Grafik auflistet.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden eines nach dem anderen in der Richtung angezeigt, in der Sätze in diesem speziellen Schreibmodus verlaufen. Auch wenn wir nicht dazu neigen, an Inline-Elemente als Kästchen zu denken, haben sie, wie alles in CSS, doch Kästchen. Diese Inline-Kästchen werden eines nach dem anderen angeordnet. Wenn im Umfassungsblock nicht genug Platz für alle Kästchen vorhanden ist, kann ein Kasten in eine neue Zeile umgebrochen werden. Die erstellten Linien werden als Zeilenkästen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Kästchen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt wurden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

{{EmbedLiveSample("inline")}}

Die Kästchen um die Worte vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Kästchen bezeichnet, Kästchen, die eingeführt werden, um sicherzustellen, dass alles in einem Kasten eingeschlossen ist, aber solche, die wir nicht direkt ansprechen können.

Die Zeilenkastenhöhe in der Block-Richtung (also die Höhe im Englischen) wird durch das höchste Kasten in ihm definiert. Im nächsten Beispiel ist das `<strong>`-Element 300%; da dieser Inhalt sich über zwei Zeilen erstreckt, definiert es jetzt die Höhe der Zeilenkästen dieser beiden Zeilen.

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

Erfahren Sie mehr darüber, wie Block- und Inline-Kästchen sich in unserem Leitfaden zum [visuellen Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) verhalten.

## Die Display-Eigenschaft und das Fluss-Layout

Zusätzlich zu den in CSS2.1 existierenden Regeln beschreiben neue CSS-Stufen weiter das Verhalten von Block- und Inline-Kästchen. Die {{cssxref("display")}}-Eigenschaft definiert, wie ein Kasten und alle darin enthaltenen Kästchen sich verhalten. Im CSS Display Model Level 3 können wir mehr darüber erfahren, wie die Anzeige-Eigenschaft das Verhalten von Kästchen und den von ihnen erzeugten Kästchen verändert.

Der Anzeigetyp eines Elements definiert den äußeren Anzeigetyp; dies bestimmt, wie der Kasten neben anderen Elementen im selben Formatierungskontext dargestellt wird. Es definiert auch den inneren Anzeigetyp, der bestimmt, wie Kästchen innerhalb dieses Elements sich verhalten. Wir können dies sehr deutlich bei der Betrachtung eines Flex-Layouts sehen. Im Beispiel unten habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Der Flex-Container verhält sich wie ein Block-Element: Er wird in einer neuen Zeile dargestellt und nimmt so viel Platz ein, wie er kann, in der Inline-Richtung. Dies ist der äußere Anzeigetyp von `block`.

Die Flex-Elemente hingegen nehmen an einem flexiblen Formatierungskontext teil, weil ihr Elternteil das Element mit `display: flex` ist, das einen inneren Anzeigetyp von `flex` hat und den flexiblen Formatierungskontext für die direkten Kinder etabliert.

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

Daher können Sie denken, dass jeder Kasten in CSS auf diese Weise funktioniert. Der Kasten selbst hat einen äußeren Anzeigetyp, sodass er weiß, wie er sich neben anderen Kästchen verhalten soll. Er hat dann einen inneren Anzeigetyp, der die Verhaltensweise seiner Kinder ändert. Diese Kinder haben dann auch einen äußeren und inneren Anzeigetyp. Die Flex-Elemente im vorherigen Beispiel werden zu flexiblen Level-Kästchen, sodass ihr äußerer Anzeigetyp durch die Teilnahme an dem flexiblen Formatierungskontext bestimmt wird. Sie haben jedoch einen inneren Anzeigetyp von _Fluss_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die in unserem Flex-Element verschachtelt sind, ordnen sich als Block- und Inline-Elemente an, es sei denn, etwas ändert ihren Anzeigetyp.

Dieses Konzept des äußeren und inneren Anzeigetyps ist wichtig, da es uns sagt, dass ein Container, der eine Layout-Methode wie das Flexbox- (`display: flex`) und Grid-Layout (`display: grid`) verwendet, immer noch an Block- und Inline-Layouts teilnimmt, da der äußere Anzeigetyp dieser Methoden `block` ist.

### Ändern des Formatierungskontextes, an dem ein Element teilnimmt

Browser stellen Elemente in Block- oder Inline-Formatierungskontexten dar, basierend darauf, was normalerweise für dieses Element sinnvoll ist. Zum Beispiel wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Inhaltsteil stark hervorzuheben und wird standardmäßig in Browsern fett dargestellt. Es wäre normalerweise nicht sinnvoll, dieses `<strong>`-Element als Block-Level-Element darzustellen, das in einer neuen Zeile umbricht. Wenn Sie alle `<strong>`-Elemente als Block-Kästen anzeigen möchten, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Möglichkeit, Inhalte mit CSS zu gestalten, bedeutet, dass Sie immer die am besten geeigneten semantischen HTML-Elemente verwenden können, um Ihre Inhalte zu markieren und dann durch CSS zu ändern, wie sie dargestellt werden.

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

In diesem Leitfaden haben wir untersucht, wie Elemente im Normalfluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ohne jegliche CSS-Stilgebung auf eine lesbare Weise angezeigt. Wenn Sie verstehen, wie der Normalfluss funktioniert, wird Ihnen das Layout leichter fallen, da Sie den Ausgangspunkt für Änderungen an der Darstellung von Elementen verstehen.

## Siehe auch

- [CSS Basic Box Model](/de/docs/Web/CSS/Guides/Box_model)
- [Lernen: Normaler Fluss](/de/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow)
- {{Glossary("Inline-level_content", "Inline-Level-Elemente")}}
- {{Glossary("Block-level_content", "Block-Level-Elemente")}}
