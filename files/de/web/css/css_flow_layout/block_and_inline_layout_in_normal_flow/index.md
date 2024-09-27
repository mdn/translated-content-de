---
title: Block und Inline-Layout im normalen Fluss
slug: Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

In diesem Leitfaden werden wir die Grundlagen untersuchen, wie Block- und Inline-Elemente im normalen Flussverhalten agieren.

Normaler Fluss ist im [CSS 2.1-Spezifikationsdokument](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) definiert, welches erklärt, dass alle Boxen im normalen Fluss Teil eines _Formatierungskontextes_ sind. Sie können entweder block oder inline sein, aber nicht beides gleichzeitig. Wir beschreiben Block-Elemente als solche, die an einem _Block-Formatierungskontext_ teilnehmen, während Inline-Elemente an einem _Inline-Formatierungskontext_ teilnehmen.

Das Verhalten von Elementen, die einen Block- oder Inline-Formatierungskontext haben, ist ebenfalls in dieser Spezifikation definiert. Für Elemente mit einem Block-Formatierungskontext sagt die Spezifikation:

> "In einem Block-Formatierungskontext werden Boxen eine nach der anderen vertikal angeordnet, beginnend am oberen Rand des umschließenden Blocks. Der vertikale Abstand zwischen zwei benachbarten Boxen wird durch die 'margin'-Eigenschaften bestimmt. Vertikale Margen zwischen benachbarten Block-Boxen in einem Block-Formatierungskontext kollabieren.\
> In einem Block-Formatierungskontext berührt der äußere linke Rand jeder Box den linken Rand des umschließenden Blocks (bei rechtem-zu-linkem Formatieren berühren die rechten Ränder)." - 9.4.1

Für Elemente mit einem Inline-Formatierungskontext:

> "In einem Inline-Formatierungskontext werden Boxen horizontal angeordnet, eine nach der anderen, beginnend am oberen Rand des umschließenden Blocks. Horizontale Margen, Ränder und Abstände werden zwischen diesen Boxen respektiert. Die Boxen können auf verschiedene Weise vertikal ausgerichtet werden: Ihre Unterkanten oder Oberkanten können ausgerichtet werden, oder die Baselines des Textes in ihnen können ausgerichtet werden. Der rechteckige Bereich, der die Boxen umfasst, die eine Zeile bilden, wird als Linien-Box bezeichnet." - 9.4.2

Beachten Sie, dass die CSS 2.1-Spezifikation Dokumente als horizontal, von oben nach unten im Schreibmodus beschreibt. Zum Beispiel durch die Beschreibung der vertikalen Abstände zwischen Block-Boxen. Das Verhalten bei Block- und Inline-Elementen ist gleich, wenn im vertikalen Schreibmodus gearbeitet wird. Wir werden dies in einem zukünftigen Leitfaden zu Flusslayout und Schreibmodi erkunden.

## Elemente, die an einem Block-Formatierungskontext teilnehmen

Blockelemente in einem horizontalen Schreibmodus wie Englisch, werden vertikal angeordnet, eines unter dem anderen.

![Inline-Richtung ist horizontal. Block-Richtung ist vertikal.](mdn-horizontal.png)

In einem vertikalen Schreibmodus würden sie dann horizontal angeordnet sein.

![Inline-Richtung ist vertikal. Block-Richtung ist horizontal.](mdn-vertical.png)

In diesem Leitfaden arbeiten wir in Englisch und daher in einem horizontalen Schreibmodus. Allerdings sollte alles Beschriebene auf die gleiche Weise funktionieren, wenn Ihr Dokument in einem vertikalen Schreibmodus ist.

Wie in der Spezifikation definiert, sind die Margen zwischen zwei Block-Boxen das, was die Trennung zwischen den Elementen schafft. Wir sehen dies an einem sehr einfachen Layout von zwei Absätzen, denen ich einen Rahmen hinzugefügt habe. Das Standard-Stylesheet des Browsers fügt den Absätzen durch Hinzufügen einer Margin oben und unten Abstand hinzu.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow.html", '100%', 700)}}

Wenn wir die Margen auf dem Absatzelement auf `0` setzen, dann werden die Ränder sich berühren.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-margin-zero.html", '100%', 700)}}

Standardmäßig nehmen Blockelemente den gesamten Platz in der Inline-Richtung ein, sodass unsere Absätze sich ausbreiten und so groß wie möglich innerhalb ihres umschließenden Blocks werden. Wenn wir ihnen eine Breite geben, werden sie weiterhin untereinander angeordnet, auch wenn genug Platz wäre, um sie nebeneinander zu setzen. Jeder beginnt an der Startkante des umschließenden Blocks, also an der Stelle, an der die Sätze in diesem Schreibmodus beginnen würden.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-width.html", '100%', 700)}}

### Margin-Kollaps

Die Spezifikation erklärt, dass Margen zwischen Block-Elementen _kollabieren_. Das bedeutet, wenn Sie ein Element mit einer oberen Margin direkt nach einem Element mit einer unteren Margin haben, wird der Gesamtabstand nicht die Summe dieser zwei Margen sein, sondern die Margin kollabiert und wird im Wesentlichen so groß wie die größere der beiden Margen.

Im folgenden Beispiel haben die Absätze eine obere Margin von `20px` und eine untere Margin von `40px`. Die Größe der Margin zwischen den Absätzen ist `40px`, da die kleinere obere Margin des zweiten Absatzes mit der größeren unteren Margin des ersten kollabiert ist.

{{EmbedGHLiveSample("css-examples/flow/block-inline/normal-flow-collapsing.html", '100%', 500)}}

Mehr über das Margin-Kollapsing können Sie in unserem Artikel [Mastering Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) lesen.

> [!NOTE]
> Wenn Sie sich nicht sicher sind, ob Margen kollabieren, prüfen Sie die Box-Model-Werte in Ihren Browser-DevTools. Dies gibt Ihnen die tatsächliche Größe der Margin und kann Ihnen helfen zu erkennen, was passiert.
>
> ![Bildschirmfoto des Box-Modell-Panels der Entwickler-Tools im Browser zeigt die vier Werte für Margin, Rahmen und Abstand sowie Höhe und Breite in einer Grafik oben und listet Box-Sizing, Anzeige, Float, Zeilenhöhe, Position und z-Index unter der Grafik auf.](box-model.png)

## Elemente, die an einem Inline-Formatierungskontext teilnehmen

Inline-Elemente werden eins nach dem anderen in der Richtung angezeigt, in der Sätze in diesem bestimmten Schreibmodus verlaufen. Während wir normalerweise nicht denken, dass Inline-Elemente eine Box haben, tun sie es, wie alles in CSS. Diese Inline-Boxen sind eine nach der anderen angeordnet. Wenn im umschließenden Block nicht genug Platz für alle Boxen ist, kann eine Box in eine neue Zeile umbrechen. Die erstellten Linien werden als Linien-Boxen bezeichnet.

Im folgenden Beispiel haben wir drei Inline-Boxen, die von einem Absatz mit einem {{HTMLElement("strong")}}-Element darin erstellt werden.

{{EmbedGHLiveSample("css-examples/flow/block-inline/inline.html", '100%', 500)}}

Die Boxen um die Wörter vor dem `<strong>`-Element und nach dem `</strong>`-Element werden als anonyme Boxen bezeichnet, Boxen, die eingeführt werden, um sicherzustellen, dass alles in einer Box verpackt ist, aber die wir nicht direkt ansprechen können.

Die Größe der Linien-Box in der Block-Richtung (also die Höhe, wenn in Englisch gearbeitet wird) wird durch die höchste Box innerhalb derselben definiert. Im nächsten Beispiel ist das `<strong>`-Element 300%; da dieser Inhalt sich über zwei Linien erstreckt, definiert er jetzt die Höhe der Linien-Boxen dieser beiden Linien.

{{EmbedGHLiveSample("css-examples/flow/block-inline/line-box.html", '100%', 500)}}

Erfahren Sie mehr darüber, wie sich Block- und Inline-Boxen in unserem Leitfaden zum [Visuellen Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model) verhalten.

## Die display-Eigenschaft und Flusslayout

Zusätzlich zu den in CSS2.1 bestehenden Regeln beschreiben neue CSS-Level weiter das Verhalten von Block- und Inline-Boxen. Die {{cssxref("display")}}-Eigenschaft definiert, wie eine Box und alle darin enthaltenen Boxen sich verhalten. Im CSS Display Model Level 3 können wir mehr darüber lernen, wie die `display`-Eigenschaft das Verhalten der Boxen und der von ihnen generierten Boxen ändert.

Der Anzeige-Typ eines Elements definiert den äußeren Anzeige-Typ; dieser diktiert, wie die Box gemeinsam mit anderen Elementen im selben Formatierungskontext angezeigt wird. Er definiert auch den inneren Anzeige-Typ, der diktiert, wie Boxen innerhalb dieses Elements sich verhalten. Wir können dies sehr deutlich sehen, wenn wir eine Flex-Layout betrachten. Im untenstehenden Beispiel habe ich ein {{HTMLElement("div")}}, dem ich `display: flex` gegeben habe. Das Flex-Container verhält sich wie ein Blockelement: Es wird in einer neuen Zeile angezeigt und nimmt so viel Platz ein, wie möglich in der Inline-Richtung. Dies ist der äußere Anzeige-Typ von `block`.

Die Flex-Elemente jedoch nehmen an einem Flex-Formatierungskontext teil, weil ihr Elternteil das Element mit `display: flex` ist, welches einen inneren Anzeige-Typ von `flex` hat, und damit den Flex-Formatierungskontext für die direkten Kinder festlegt.

{{EmbedGHLiveSample("css-examples/flow/block-inline/flex.html", '100%', 500)}}

Daher können Sie sich jede Box in CSS so vorstellen, dass sie auf diese Weise arbeitet. Die Box selbst hat einen äußeren Anzeige-Typ, so weiß sie, wie sie sich neben anderen Boxen verhalten soll. Sie hat dann einen inneren Anzeige-Typ, der die Art und Weise ändert, wie ihre Kinder sich verhalten. Diese Kinder haben wiederum einen äußeren und inneren Anzeige-Typ. Die Flex-Elemente im vorherigen Beispiel werden zu Flex-Level-Boxen, also wird ihr äußerer Anzeige-Typ durch die Tatsache bestimmt, dass sie Teil des Flex-Formatierungskontexts sind. Sie haben jedoch einen inneren Anzeige-Typ von _flow_, was bedeutet, dass ihre Kinder am normalen Fluss teilnehmen. Elemente, die in unserem Flex-Element verschachtelt sind, richten sich als Block- und Inline-Elemente aus, es sei denn, etwas ändert ihren Anzeige-Typ.

Dieses Konzept des äußeren und inneren Anzeige-Typs ist wichtig, da es uns sagt, dass ein Container, der eine Layout-Methode wie Flexbox (`display: flex`) und Grid-Layout (`display: grid`) verwendet, immer noch am Block- und Inline-Layout teilnimmt, aufgrund des äußeren Anzeige-Typs dieser Methoden `block`.

### Änderung des Formatierungskontexts, an dem ein Element teilnimmt

Browser zeigen Elemente in Block- oder Inline-Formatierungskontexten an, basierend darauf, was normalerweise für dieses Element Sinn macht. Zum Beispiel wird ein {{HTMLElement("strong")}}-Element verwendet, um einen Inhalt stark hervorzuheben und wird standardmäßig fett in Browsern dargestellt. Es würde im Allgemeinen keinen Sinn machen, dass das `<strong>`-Element als Block-Element angezeigt wird, das in eine neue Zeile umbricht. Wenn Sie jedoch alle `<strong>`-Elemente als Block-Boxen anzeigen lassen möchten, könnten Sie dies tun, indem Sie `strong { display: block; }` setzen. Die Möglichkeit, Inhalte mit CSS zu stylen, bedeutet, dass Sie immer die geeignetsten semantischen HTML-Elemente verwenden können, um Ihren Inhalt zu markieren und dann mit CSS zu ändern, wie sie angezeigt werden.

{{EmbedGHLiveSample("css-examples/flow/block-inline/change-formatting.html", '100%', 500)}}

## Zusammenfassung

In diesem Leitfaden haben wir uns angesehen, wie Elemente im normalen Fluss als Block- und Inline-Elemente dargestellt werden. Aufgrund des Standardverhaltens dieser Elemente wird ein HTML-Dokument ohne jegliche CSS-Stilierung auf eine lesbare Weise angezeigt. Wenn Sie verstehen, wie der normale Fluss funktioniert, wird der Seiten-Layout einfacher, da Sie den Ausgangspunkt kennen, um Änderungen an der Darstellung der Elemente vorzunehmen.

## Siehe auch

- [CSS-Grundlegendes Box-Modell](/de/docs/Web/CSS/CSS_box_model)
- _[Normaler Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)_ - Layout lernen
- [Inline-Level-Elemente](/de/docs/Glossary/Inline-level_content)
- [Block-Level-Elemente](/de/docs/Glossary/Block-level_content)
