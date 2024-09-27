---
title: Einführung in Formatierungskontexte
slug: Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Dieser Artikel führt in das Konzept der Formatierungskontexte ein, von denen es verschiedene Typen gibt, einschließlich Block-Formatierungskontexte, Inline-Formatierungskontexte und Flex-Formatierungskontexte. Die Grundlagen ihres Verhaltens und wie Sie diese Verhaltensweisen nutzen können, werden ebenfalls vorgestellt.

Alles auf einer Seite ist Teil eines **Formatierungskontextes**, oder eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise anzuordnen. Ein **Block-Formatierungskontext** (BFC) ordnet Kind-Elemente gemäß den Block-Layout-Regeln an, ein **Flex-Formatierungskontext** wird seine Kinder als [Flex-Elemente](/de/docs/Glossary/flex_item) anordnen, usw. Jeder Formatierungskontext hat spezifische Regeln dafür, wie das Layout in diesem Kontext funktioniert.

## Block-Formatierungskontexte

Das äußerste Element in einem Dokument, das Block-Layout-Regeln verwendet, etabliert den ersten oder **initialen Block-Formatierungskontext**. Das bedeutet, dass jedes Element innerhalb des Blocks des `<html>`-Elements gemäß dem normalen Fluss der Regeln für Block- und Inline-Layout angeordnet wird. Elemente, die an einem BFC teilnehmen, nutzen die im CSS-Box-Modell umrissenen Regeln, die definieren, wie die Ränder, Rahmen und Abstände eines Elements mit anderen Blöcken im selben Kontext interagieren.

### Erstellen eines neuen Block-Formatierungskontextes

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das in der Lage ist, einen Block-Formatierungskontext zu erstellen. Jedes Block-Element kann durch Anwendung bestimmter CSS-Eigenschaften dazu gebracht werden, einen BFC zu schaffen.

Ein neuer BFC wird in folgenden Situationen erstellt:

- Elemente, die mit {{cssxref("float")}} schweben
- [absolut positionierte](/de/docs/Web/CSS/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabellenzellen oder Elemente mit `display: table-cell`, einschließlich anonymer Tabellenzellen, die bei Verwendung der `display: table-*`-Eigenschaften erstellt werden
- Tabellencaptions oder Elemente mit `display: table-caption`
- Block-Elemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- [Flex-Elemente](/de/docs/Glossary/flex_item)
- Grid-Elemente
- [Multicol-Container](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Dies ist nützlich, weil ein neuer BFC sich ähnlich wie das äußerste Dokument verhält, indem er zu einem Mini-Layout im Hauptlayout wird. Ein BFC enthält alles in ihm drin, {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente im selben Formatierungskontext, und Ränder kollabieren nur zwischen Elementen im selben Formatierungskontext.

### Beispiele für die Erstellung eines BFC

Lassen Sie uns ein paar dieser Beispiele betrachten, um den Effekt der Erstellung eines neuen BFC zu sehen.

Im nachstehenden Beispiel haben wir ein schwebendes Element innerhalb eines `<div>` mit einem angewendeten Rahmen. Der Inhalt dieses `<div>` ist neben dem schwebenden Element angeordnet. Da der Inhalt des Floats höher ist als der Inhalt daneben, verläuft der Rahmen des `<div>` nun durch den Float. Wie im [Leitfaden zu inflow und out-of-flow-Elementen](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow) erklärt, ist der Float aus dem Fluss genommen worden, so dass der Hintergrund und der Rahmen des Div nur den Inhalt und nicht den Float enthalten.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

Ein neuer BFC würde den Float enthalten. Eine übliche Methode, dies in der Vergangenheit zu tun, war das Setzen von `overflow: auto` oder anderen Werten als dem Anfangswert von `overflow: visible`.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}

Das Setzen von `overflow: auto` hat einen neuen BFC erstellt, der den Float enthält. Unser `<div>` wird jetzt ein Mini-Layout innerhalb unseres Layouts. Jedes Kind-Element wird darin enthalten sein.

Das Problem mit der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überfließendem Inhalt umgehen möchten. Es gibt einige Gelegenheiten, bei denen Sie feststellen werden, dass Sie unerwünschte Scrollleisten oder abgeschnittene Schatten erhalten, wenn Sie diese Eigenschaft nur zur Erstellung eines BFC verwenden. Außerdem ist es für einen zukünftigen Entwickler möglicherweise nicht sehr lesbar, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um zu erklären.

### Explizites Erstellen eines BFC mit display: flow-root

Die Verwendung von `display: flow-root` (oder `display: flow-root list-item`) auf dem enthaltenden Block wird einen neuen BFC erstellen, ohne dass andere potenziell problematische Nebeneffekte auftreten.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 720)}}

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nimmt alles in diesem Container am Block-Formatierungskontext dieses Containers teil, und Floats ragen nicht aus dem unteren Ende des Elements heraus.

Der Name des `flow-root`-Schlüsselworts bezieht sich auf die Tatsache, dass Sie etwas erstellen, das im Wesentlichen wie ein neues Wurzelelement (wie {{HTMLElement("html")}}) dient, da der neue Kontext erstellt wird und seine Flusslayout-Funktionen erfüllt.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als der Kontext eines Absatzes betrachtet werden. Der Absatz erstellt einen Inline-Formatierungskontext, innerhalb dessen solche Dinge wie {{HTMLElement("strong")}}, {{HTMLElement("a")}} oder {{HTMLElement("span")}}-Elemente auf Text verwendet werden.

Das Box-Modell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einem horizontalen Schreibmodus werden horizontale Abstände, Rahmen und Ränder auf das Element angewendet und schieben den Text nach links und rechts weg. Allerdings werden Ränder oberhalb und unterhalb des Elements nicht angewendet. Vertikale Abstände und Rahmen werden angewendet, können aber überlappende Inhalte darüber und darunter haben, da in einem Inline-Formatierungskontext die Linienboxen nicht durch Abstände und Rahmen auseinander gedrückt werden.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/inline.html", '100%', 720)}}

## Andere Formatierungskontexte

Dieser Leitfaden behandelt das Flusslayout und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Daher ist es nützlich zu verstehen, dass die Erstellung jeder Art von Formatierungskontext das Verhalten der innerhalb dieses Kontextes befindlichen Elemente ändert. Dieses Verhalten wird stets in der Spezifikation beschrieben und auch hier auf MDN.

## Zusammenfassung

In diesem Leitfaden haben wir uns eingehender mit den Block- und Inline-Formatierungskontexten und dem wichtigen Thema der Erstellung eines Block-Formatierungskontextes (BFC) befasst. Im nächsten Leitfaden werden wir herausfinden, [wie der normale Fluss mit verschiedenen Schreibmodi interagiert](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model)
