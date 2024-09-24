---
title: Einführung in Formatierungskontexte
slug: Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Dieser Artikel führt in das Konzept der Formatierungskontexte ein, von denen es mehrere Typen gibt, darunter Block-Formatierungskontexte, Inline-Formatierungskontexte und Flex-Formatierungskontexte. Die Grundlagen, wie sie sich verhalten und wie Sie diese Verhaltensweisen nutzen können, werden ebenfalls vorgestellt.

Alles auf einer Seite ist Teil eines **Formatierungskontexts** oder eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise anzuordnen. Ein **Block-Formatierungskontext** (BFC) ordnet untergeordnete Elemente gemäß den Block-Layout-Regeln an, ein **Flex-Formatierungskontext** ordnet seine Kinder als {{Glossary("flex item", "flex items")}} an, usw. Jeder Formatierungskontext hat spezifische Regeln, wie sich das Layout innerhalb dieses Kontexts verhält.

## Block-Formatierungskontexte

Das äußerste Element in einem Dokument, das Block-Layout-Regeln verwendet, etabliert den ersten oder **initialen Block-Formatierungskontext**. Dies bedeutet, dass jedes Element innerhalb des Blocks des `<html>`-Elements gemäß dem normalen Ablauf angeordnet wird, entsprechend den Regeln für Block- und Inline-Layouts. Elemente, die an einem BFC teilnehmen, verwenden die vom CSS Box Model skizzierten Regeln, die definieren, wie sich die Ränder, Rahmen und Abstände eines Elements mit anderen Blöcken im gleichen Kontext verhalten.

### Einen neuen Block-Formatierungskontext erstellen

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das in der Lage ist, einen Block-Formatierungskontext zu erstellen. Jedes Block-Element kann durch die Anwendung bestimmter CSS-Eigenschaften dazu gebracht werden, einen BFC zu erstellen.

Ein neuer BFC wird in folgenden Situationen erstellt:

- Elemente, die durch {{cssxref("float")}} zum Schweben gebracht werden
- [absolut positionierte](/de/docs/Web/CSS/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabellenelemente oder Elemente mit `display: table-cell`, einschließlich anonymer Tabellenelemente, die bei Verwendung der `display: table-*` Eigenschaften erstellt werden
- Tabellenüberschriften oder Elemente mit `display: table-caption`
- Blockelemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- {{Glossary("flex item", "flex items")}}
- Gitterelemente
- [Mehrspalten-Container](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Dies ist nützlich, da ein neuer BFC sich ähnlich wie das äußerste Dokument verhält, da er zu einem Mini-Layout im Hauptlayout wird. Ein BFC umfasst alles, was darin enthalten ist, {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente innerhalb des gleichen Formatierungskontexts, und Ränder kollabieren nur zwischen Elementen im gleichen Formatierungskontext.

### Beispiele zur Erstellung eines BFC

Schauen wir uns einige dieser Beispiele an, um zu sehen, welchen Effekt die Erstellung eines neuen BFC hat.

Im unten stehenden Beispiel haben wir ein schwebendes Element in einem `<div>` mit einem angewendeten Rahmen. Der Inhalt dieses `<div>` wurde neben das schwebende Element angeordnet. Da der Inhalt des schwebenden Elements höher ist als der danebenliegende Inhalt, verläuft der Rahmen des `<div>` nun durch das Schwebeelement. Wie im [Leitfaden zu active- und passive-Elementen](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow) erklärt, wurde das Schwebeelement aus dem Fluss genommen, sodass der Hintergrund und der Rahmen des Divs nur den Inhalt, nicht das Schwebeelement, umfassen.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

Die Erstellung eines neuen BFC würde das Schwebeelement aufnehmen. Eine typische Methode, dies in der Vergangenheit zu tun, war die Einstellung von `overflow: auto` oder anderen Werten als dem Anfangswert von `overflow: visible`.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}

Mit `overflow: auto` wurde ein neuer BFC erstellt, der das Schwebeelement enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird darin enthalten sein.

Das Problem beim Verwenden von `overflow` zur Erstellung eines neuen BFC besteht darin, dass die `overflow`-Eigenschaft ursprünglich vorgesehen ist, dem Browser mitzuteilen, wie Sie mit überlaufendem Inhalt umgehen möchten. Es gibt manchmal Situationen, in denen Sie ungewollte Scrollleisten oder abgeschnittene Schatten erhalten, wenn Sie diese Eigenschaft nur zur Erstellung eines BFC verwenden. Außerdem könnte es für einen zukünftigen Entwickler potenziell nicht sehr lesbar sein, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` zu diesem Zweck verwendet haben. Wenn Sie dies tun, wäre es eine gute Idee, den Code mit einem Kommentar zu versehen, um es zu erklären.

### Einen BFC explizit mit display: flow-root erstellen

Wenn Sie `display: flow-root` (oder `display: flow-root list-item`) auf den umschließenden Block anwenden, wird ein neuer BFC erstellt, ohne andere möglicherweise problematische Nebeneffekte.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 720)}}

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nimmt alles innerhalb dieses Containers am Block-Formatierungskontext dieses Containers teil, und Schwebeelemente ragen nicht unterhalb des Elements heraus.

Der Name des `flow-root`-Schlüsselworts bezieht sich auf die Tatsache, dass Sie etwas erstellen, das im Wesentlichen als neues Wurzelelement dient (wie es {{HTMLElement("html")}} tut), da der neue Kontext erstellt wird und sein Fluss-Layout funktioniert.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als der Kontext eines Absatzes betrachtet werden. Der Absatz erstellt einen Inline-Formatierungskontext, in dem Elemente wie {{HTMLElement("strong")}}, {{HTMLElement("a")}} oder {{HTMLElement("span")}} auf Text verwendet werden.

Das Box-Modell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einem horizontalen Schreibmodus werden horizontale Abstände, Rahmen und Ränder auf das Element angewendet und drücken den Text nach links und rechts weg. Jedoch werden Ränder oberhalb und unterhalb des Elements nicht angewendet. Vertikale Abstände und Rahmen werden angewendet, können jedoch Inhalte überlappen, da im Inline-Formatierungskontext die Linienboxen nicht durch Abstände und Rahmen auseinandergedrückt werden.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/inline.html", '100%', 720)}}

## Andere Formatierungskontexte

Dieser Leitfaden behandelt das Fluss-Layout und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Es ist jedoch nützlich zu verstehen, dass die Erstellung jeder Art von Formatierungskontext das Verhalten von Elementen innerhalb dieses Kontexts ändern wird. Dieses Verhalten wird immer in der Spezifikation und auch hier auf MDN beschrieben.

## Zusammenfassung

In diesem Leitfaden haben wir uns eingehender mit den Block- und Inline-Formatierungskontexten und dem wichtigen Thema der Erstellung eines Block-Formatierungskontexts (BFC) befasst. Im nächsten Leitfaden werden wir herausfinden, [wie der normale Fluss mit verschiedenen Schreibmodi interagiert](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
- [CSS Box Model](/de/docs/Web/CSS/CSS_box_model)
