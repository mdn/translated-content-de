---
title: Block- und Inline-Layout im normalen Fluss
slug: Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen erkunden, wie Block- und Inline-Elemente sich verhalten, wenn sie Teil des normalen Flusses sind.

Der normale Fluss ist in der [CSS 2.1 Spezifikation](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, die erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontexts_ sein werden. Sie können entweder Block- oder Inline-Elemente sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Level-Boxen als Teil eines _Block-Formatierungskontexts_ und Inline-Level-Boxen als Teil eines _Inline-Formatierungskontexts_.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, ist ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> "In einem Block-Formatierungskontext werden Boxen nacheinander vertikal von oben nach unten in einem umschließenden Block angeordnet. Der vertikale Abstand zwischen zwei benachbarten Boxen wird von den 'margin'-Eigenschaften bestimmt. Vertikale Ränder zwischen benachbarten Block-Elementen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt die linke Außenkante jeder Box die linke Kante des umschließenden Blocks (für rechts-nach-links-Formatierungen berühren sich die rechten Kanten)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Boxen horizontal nacheinander von oben nach unten in einem umschließenden Block angeordnet. Horizontale Ränder, Rahmen und Abstände werden zwischen diesen Boxen berücksichtigt. Die Boxen können auf verschiedene Weise vertikal ausgerichtet werden: Ihre Unterseiten oder Oberseiten können ausgerichtet werden, oder die Grundlinien des Texts innerhalb von ihnen können ausgerichtet werden. Der rechteckige Bereich, der die Boxen umfasst, die eine Zeile bilden, wird als Zeilenbox bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1 Spezifikation Dokumente als in einem horizontalen, von oben nach unten verlaufenden Schreibmodus beschreibt. Zum Beispiel durch die Beschreibung des vertikalen Abstands zwischen Block-Boxen. Das Verhalten bei Block- und Inline-Elementen bleibt gleich, wenn man im vertikalen Schreibmodus arbeitet, und wir werden dies in einem zukünftigen Leitfaden über Flow-Layout und Schreibmodi erkunden.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Block-Elemente in einem horizontalen Schreibmodus wie Englisch, werden vertikal ausgelegt, eines unter dem anderen.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie dann horizontal ausgelegt.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden werden wir auf Englisch arbeiten und daher einen horizontalen Schreibmodus verwenden. Dennoch sollte alles Beschriebene auf die gleiche Weise funktionieren, wenn Ihr Dokument im vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind die Ränder zwischen zwei Block-Boxen das, was die Trennung zwischen den Elementen schafft. Dies sehen wir bei einem sehr einfachen Layout von zwei Absätzen, denen ich einen Rahmen hinzugefügt habe. Das standardmäßige Browser-Stylesheet fügt zwischen den Absätzen Abstand hinzu, indem es einen Rand oben und unten hinzufügt.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow.html", '100%', 700)}}

Wenn wir die Ränder beim Absatz-Element auf `0` setzen, dann werden die Rahmen sich berühren.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-margin-zero.html", '100%', 700)}}

Standardmäßig werden Block-Elemente den gesamten Platz in der Inline-Richtung einnehmen, sodass unsere Absätze sich ausbreiten und so groß werden, wie sie können, innerhalb ihres umschließenden Blocks. Wenn wir ihnen eine Breite geben, werden sie weiterhin eins unter dem anderen ausgelegt, selbst wenn Platz für sie nebeneinander wäre. Jeder beginnt an der Startkante des umschließenden Blocks, also dort, wo Sätze in diesem Schreibmodus beginnen würden.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-width.html", '100%', 700)}}

### Rand-Kollaps

Die Spezifikation erklärt, dass Ränder zwischen Block-Elementen _kollabieren_. Das bedeutet, dass wenn Sie ein Element mit einem oberen Rand direkt nach einem Element mit einem unteren Rand haben, anstatt dass der gesamte Raum die Summe dieser beiden Ränder ist, die Ränder kollabieren und im Wesentlichen so groß werden wie der größere der beiden Ränder.

Im folgenden Beispiel haben die Absätze einen oberen Rand von `20px` und einen unteren Rand von `40px`. Die Größe des Randes zwischen den Absätzen beträgt `40px`, da der kleinere obere Rand beim zweiten Absatz mit dem größeren unteren Rand des ersten kollabiert ist.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-collapsing.html", '100%', 500)}}

Mehr über den Rand-Kollaps können Sie in unserem Artikel [Beherrschung des Margin-Kollapses](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie sich nicht sicher sind, ob Ränder kollabieren, überprüfen Sie die Box-Modell-Werte in den Entwicklertools Ihres Browsers. Dies gibt Ihnen die tatsächliche Größe des Randes, was Ihnen helfen kann zu verstehen, was passiert.
>
> ![Screenshot des Box-Modells in den Entwickler-Tools des Browsers, das die vier Werte für Rand, Rahmen und Abstand zusammen mit Höhe und Breite in einer Grafik oben zeigt und unten die Auflistung von Box-Sizing, Display, Float, Zeilenhöhe, Position und Z-Index.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden nacheinander in der Richtung angezeigt, in der Sätze in diesem bestimmten Schreibmodus verlaufen. Obwohl wir dazu neigen, nicht an Inline-Elemente als Boxen zu denken, haben sie, wie alles in CSS, eine Box. Diese Inline-Boxen werden nacheinander angeordnet. Wenn nicht genug Platz im umschließenden Block für alle Boxen ist, kann eine Box in eine neue Zeile umbrochen werden. Die erstellten Zeilen werden als Zeilenboxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die durch einen Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt werden.

{{EmbedGHLiveSample("css-examples/flow/block-inline/inline.html", '100%', 500)}}

Die Boxen um die Wörter vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt wurden, um sicherzustellen, dass alles in einer Box umhüllt ist, aber solche, die wir nicht direkt ansprechen können.

Die Größe der Zeilenbox in der Blockrichtung (also die Höhe, wenn man auf Englisch arbeitet) wird durch die höchste Box darin definiert. Im nächsten Beispiel ist das `<strong>`-Element 300%; da dieser Inhalt sich über zwei Zeilen spannt, definiert er jetzt die Höhe der Zeilenboxen dieser beiden Zeilen.

{{EmbedGHLiveSample("css-examples/flow/block-inline/line-box.html", '100%', 500)}}

Erfahren Sie mehr darüber, wie sich Block- und Inline-Boxen in unserem Leitfaden zum [Visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model) verhalten.

## Die Eigenschaft display und das Flow-Layout

Zusätzlich zu den Regeln, die in CSS2.1 existieren, beschreiben neue CSS-Level das Verhalten von Block- und Inline-Boxen weiter. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und alle Boxen in ihr sich verhalten. Im CSS Display Model Level 3 können wir mehr darüber erfahren, wie die `display`-Eigenschaft das Verhalten von Boxen und den von ihnen generierten Boxen verändert.

Der Anzeigetyp eines Elements definiert den äußeren Anzeigetyp; dieser bestimmt, wie die Box zusammen mit anderen Elementen im gleichen Formatierungskontext angezeigt wird. Er definiert auch den inneren Anzeigetyp, der bestimmt, wie Boxen in diesem Element sich verhalten. Dies sehen wir sehr klar, wenn wir über ein Flex-Layout nachdenken. Im folgenden Beispiel habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Der Flex-Container verhält sich wie ein Block-Element: Er wird in einer neuen Zeile angezeigt und nimmt so viel Platz ein, wie er kann, in der Inline-Richtung. Dies ist der äußere Anzeigetyp von `block`.

Die Flex-Elemente hingegen nehmen an einem Flex-Formatierungskontext teil, weil ihr Elternteil das Element mit `display: flex` ist, das einen inneren Anzeigetyp von `flex` hat und den Flex-Formatierungskontext für die direkten Kinder festlegt.

{{EmbedGHLiveSample("css-examples/flow/block-inline/flex.html", '100%', 500)}}

Daher können Sie sich vorstellen, dass jede Box in CSS auf diese Weise arbeitet. Die Box selbst hat einen äußeren Anzeigetyp, sodass sie weiß, wie sie sich zusammen mit anderen Boxen verhalten soll. Sie hat dann einen inneren Anzeigetyp, der ändert, wie ihre Kinder sich verhalten. Diese Kinder haben dann auch einen äußeren und inneren Anzeigetyp. Die Flex-Elemente im vorherigen Beispiel werden zu Flex-Level-Boxen, sodass ihr äußerer Anzeigetyp dadurch bestimmt wird, dass sie Teil des Flex-Formatierungskontexts sind. Sie haben jedoch einen inneren Anzeigetyp von _flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die in unserem Flex-Element verschachtelt sind, legen sich als Block- und Inline-Elemente an, es sei denn, etwas ändert ihren Anzeigetyp.

Dieses Konzept des äußeren und inneren Anzeigetyps ist wichtig, da es uns sagt, dass ein Container, der eine Layoutmethode wie Flexbox (`display: flex`) und Grid-Layout (`display: grid`) verwendet, immer noch am Block- und Inline-Layout teilnimmt, da der äußere Anzeigetyp dieser Methoden `block` ist.

### Ändern des Formatierungskontextes, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten an, basierend darauf, was normalerweise für dieses Element Sinn macht. Zum Beispiel wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Textabschnitt stark hervorzuheben, und wird standardmäßig fett in Browsern angezeigt. Es würde nicht allgemein Sinn machen, wenn dieses `<strong>`-Element als Block-Level-Element angezeigt wird, das in eine neue Zeile umbricht. Wenn Sie möchten, dass alle `<strong>`-Elemente als Block-Boxen angezeigt werden, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Fähigkeit, Inhalte mit CSS zu stylen, bedeutet, dass Sie immer die geeignetsten semantischen HTML-Elemente verwenden können, um Ihre Inhalte zu markieren, und dann ändern, wie sie mit CSS angezeigt werden.

{{EmbedGHLiveSample("css-examples/flow/block-inline/change-formatting.html", '100%', 500)}}

## Zusammenfassung

In diesem Leitfaden haben wir untersucht, wie Elemente im normalen Fluss als Block- und Inline-Elemente angezeigt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ganz ohne CSS-Styling auf eine lesbare Weise angezeigt. Indem Sie verstehen, wie der normale Fluss funktioniert, wird Ihnen das Layout einfacher fallen, da Sie den Ausgangspunkt für Änderungen, wie Elemente angezeigt werden, verstehen.

## Siehe auch

- [CSS Grundlegendes Box-Modell](/de/docs/Web/CSS/CSS_box_model)
- _[Normaler Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)_ - Layout lernen
- [Inline-Level-Elemente](/de/docs/Glossary/Inline-level_content)
- [Block-Level-Elemente](/de/docs/Glossary/Block-level_content)
