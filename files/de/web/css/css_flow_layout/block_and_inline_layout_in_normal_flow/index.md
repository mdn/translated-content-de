---
title: Block- und Inline-Layout im normalen Fluss
slug: Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen untersuchen, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Der normale Fluss wird in der [CSS 2.1 Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontextes_ sind. Sie können entweder block- oder inline-orientiert sein, aber nicht beides zugleich. Wir beschreiben Block-Level-Boxen als Teilnehmer in einem _Block-Formatierungskontext_, und Inline-Level-Boxen als Teilnehmer in einem _Inline-Formatierungskontext_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, wird ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> "In einem Block-Formatierungskontext werden die Boxen nacheinander vertikal, beginnend oben im umgebenden Block, angeordnet. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen angrenzenden Block-Level-Boxen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die linke äußere Kante jeder Box die linke Kante des umgebenden Blocks (bei rechts-nach-links-Formatierung berühren sich die rechten Kanten)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden die Boxen horizontal, nacheinander, beginnend oben im umgebenden Block angeordnet. Horizontale Ränder, Ränder und Abstände werden zwischen diesen Boxen berücksichtigt. Die Boxen können auf verschiedene Weise vertikal ausgerichtet werden: ihre Unterkanten oder Oberkanten können ausgerichtet sein, oder die Grundlinien des in ihnen enthaltenen Textes können ausgerichtet werden. Der rechteckige Bereich, der die Boxen enthält, die eine Zeile bilden, wird Zeilenbox genannt." - 9.4.2

Beachten Sie, dass die CSS 2.1 Spezifikation Dokumente als in einem horizontalen, von oben nach unten Schreibmodus beschreibt. Zum Beispiel, indem sie den vertikalen Abstand zwischen Block-Boxen beschreibt. Das Verhalten von Block- und Inline-Elementen ist gleich, wenn in einem vertikalen Schreibmodus gearbeitet wird, und wir werden dies in einem zukünftigen Leitfaden zu Flusslayout und Schreibmodi erkunden.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus wie Englisch werden vertikal, eines unter dem anderen, angeordnet.

![Inline-Richtung ist horizontal. Blockrichtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie dann horizontal angeordnet werden.

![Inline-Richtung ist vertikal. Blockrichtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden werden wir auf Englisch arbeiten und daher in einem horizontalen Schreibmodus. Allerdings sollte alles Beschriebene auf die gleiche Weise funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind die Abstände zwischen zwei Block-Boxen das, was die Trennung zwischen den Elementen erzeugt. Wir sehen das mit einem sehr einfachen Layout von zwei Absätzen, denen ich einen Rahmen hinzugefügt habe. Das Standard-Browser-Stylesheet fügt durch das Hinzufügen eines Abstands oben und unten zwischen den Absätzen Abstand hinzu.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow.html", '100%', 700)}}

Wenn wir die Abstände auf dem Absatz-Element auf `0` setzen, dann berühren sich die Rahmen.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-margin-zero.html", '100%', 700)}}

Standardmäßig nehmen Block-Elemente den gesamten Raum in der Inline-Richtung ein, sodass unsere Absätze sich ausbreiten und so groß wie möglich in ihrem umgebenden Block werden. Wenn wir ihnen eine Breite geben, werden sie weiterhin einer unter dem anderen angeordnet - selbst wenn genug Platz für sie vorhanden wäre, um nebeneinander zu stehen. Jedes beginnt am Anfang der Kante des umgebenden Blocks, also an der Stelle, an der in diesem Schreibmodus Sätze beginnen würden.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-width.html", '100%', 700)}}

### Zusammenfallende Abstände

Die Spezifikation erklärt, dass Abstände zwischen Block-Elementen _kollabieren_. Das bedeutet, dass wenn Sie ein Element mit einem oberen Abstand direkt nach einem Element mit einem unteren Abstand haben, anstatt dass der gesamte Raum die Summe dieser beiden Abstände ist, der Abstand kollabiert und so im Wesentlichen so groß wie der größere der beiden Abstände wird.

Im Beispiel unten haben die Absätze einen oberen Abstand von `20px` und einen unteren Abstand von `40px`. Die Größe des Abstands zwischen den Absätzen beträgt `40px`, da der kleinere obere Abstand des zweiten Absatzes mit dem größeren unteren Abstand des ersten kollabiert ist.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-collapsing.html", '100%', 500)}}

Sie können mehr über das Zusammenfallen von Abständen in unserem Artikel [Beherrschung des Zusammenfallens von Abständen](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie nicht sicher sind, ob Abstände kollabieren, prüfen Sie die Box-Modell-Werte in den Entwicklerwerkzeugen Ihres Browsers. Dies gibt Ihnen die tatsächliche Größe des Abstands an, was Ihnen helfen kann, zu erkennen, was passiert.
>
> ![Screenshot des Box-Modell-Panels in den Entwicklerwerkzeugen des Browsers, das die vier Werte für Rand, Rahmen und Abstand sowie Höhe und Breite in einer Grafik oben anzeigt und box-sizing, display, float, line-height, position und z-index unter der Grafik auflistet.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, in der die Sätze in diesem bestimmten Schreibmodus verlaufen. Obwohl wir normalerweise nicht dazu neigen, an Inline-Elemente als Boxen zu denken, haben sie wie alles in CSS welche. Diese Inline-Boxen werden nacheinander angeordnet. Wenn im umgebenden Block nicht genug Platz für alle Boxen vorhanden ist, kann eine Box auf eine neue Zeile umbrechen. Die erstellten Zeilen sind als Zeilenboxen bekannt.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt werden.

{{EmbedGHLiveSample("css-examples/flow/block-inline/inline.html", '100%', 500)}}

Die Boxen um die Wörter vor und nach dem `<strong>`-Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt werden, um sicherzustellen, dass alles in eine Box eingewickelt ist, aber solche, die wir nicht direkt ansprechen können.

Die Größe der Zeilenbox in der Blockrichtung (also die Höhe, wenn auf Englisch gearbeitet wird) wird durch die größte Box darin definiert. Im nächsten Beispiel ist das `<strong>`-Element 300%; da dieser Inhalt sich über zwei Zeilen erstreckt, definiert er jetzt die Höhe der Zeilenboxen dieser beiden Zeilen.

{{EmbedGHLiveSample("css-examples/flow/block-inline/line-box.html", '100%', 500)}}

Erfahren Sie mehr darüber, wie Block- und Inline-Boxen sich verhalten, in unserem Leitfaden zum [Visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model).

## Die Eigenschaft display und Flusslayout

Zusätzlich zu den in CSS2.1 bestehenden Regeln beschreiben neue CSS-Stufen das Verhalten von Block- und Inline-Boxen weiter. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und alle Boxen darin sich verhalten. Im CSS Display Model Level 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten von Boxen und den von ihnen erzeugten Boxen ändert.

Der Anzeigetyp eines Elements definiert den äußeren Anzeigetyp; dieser gibt vor, wie die Box neben anderen Elementen im gleichen Formatierungskontext angezeigt wird. Er definiert auch den inneren Anzeigetyp, der diktiert, wie Boxen in diesem Element sich verhalten. Wir können dies sehr deutlich sehen, wenn wir ein Flex-Layout in Betracht ziehen. Im folgenden Beispiel habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Das Flex-Container verhält sich wie ein Block-Element: Es wird auf einer neuen Zeile angezeigt und nimmt so viel Platz wie möglich in der Inline-Richtung ein. Dies ist der äußere Anzeigetyp von `block`.

Die Flex-Elemente jedoch nehmen an einem Flex-Formatierungskontext teil, da ihr Elternteil das Element mit `display: flex` ist, welches einen inneren Anzeigetyp von `flex` hat und den Flex-Formatierungskontext für die direkten Kinder festlegt.

{{EmbedGHLiveSample("css-examples/flow/block-inline/flex.html", '100%', 500)}}

Daher können Sie sich jede Box in CSS auf diese Weise vorstellen. Die Box selbst hat einen äußeren Anzeigetyp, sodass sie weiß, wie sie sich neben anderen Boxen verhalten soll. Sie hat dann einen inneren Anzeigetyp, der das Verhalten ihrer Kinder verändert. Diese Kinder haben dann auch einen äußeren und inneren Anzeigetyp. Die Flex-Elemente im vorigen Beispiel werden zu Flex-Level-Boxen, sodass ihr äußerer Anzeigetyp durch ihre Zugehörigkeit zu dem Flex-Formatierungskontext vorgegeben wird. Sie haben jedoch einen inneren Anzeigetyp von _flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die in unserem Flex-Element verschachtelt sind, ordnen sich als Block- und Inline-Elemente an, es sei denn, etwas ändert ihren Anzeigetyp.

Dieses Konzept des äußeren und inneren Anzeigetyps ist wichtig, da es uns sagt, dass ein Container, der eine Layoutmethode wie Flexbox (`display: flex`) und Rasterlayout (`display: grid`) verwendet, immer noch am Block- und Inline-Layout teilnimmt, da der äußere Anzeigetyp dieser Methoden `block` ist.

### Ändern des Formatierungskontextes, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten basierend darauf an, was normalerweise für dieses Element sinnvoll ist. Zum Beispiel wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Inhalt stark zu betonen, und wird in Browsern standardmäßig fett dargestellt. Es würde im Allgemeinen keinen Sinn machen, dass das `<strong>`-Element als Block-Level-Element angezeigt wird, das auf eine neue Zeile umbricht. Wenn Sie möchten, dass alle `<strong>`-Elemente als Blockboxen angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Fähigkeit, Inhalte mit CSS zu stylen, bedeutet, dass Sie immer die am besten geeigneten semantischen HTML-Elemente verwenden können, um Ihren Inhalt zu markieren, und dann ändern, wie sie mit CSS angezeigt werden.

{{EmbedGHLiveSample("css-examples/flow/block-inline/change-formatting.html", '100%', 500)}}

## Zusammenfassung

In diesem Leitfaden haben wir untersucht, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ohne jegliche CSS-Gestaltung auf eine lesbare Weise angezeigt. Wenn Sie verstehen, wie normaler Fluss funktioniert, wird Ihnen das Layouten leichter fallen, da Sie den Ausgangspunkt für Änderungen, wie Elemente angezeigt werden, verstehen.

## Siehe auch

- [Grundlegendes CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model)
- _[Normaler Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)_ - Layout lernen
- [Inline-Elemente](/de/docs/Glossary/Inline-level_content)
- [Block-Elemente](/de/docs/Glossary/Block-level_content)
