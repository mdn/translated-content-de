---
title: Einführung in Formatierungskontexte
slug: Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts
l10n:
  sourceCommit: afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{CSSRef}}

Dieser Artikel führt in das Konzept der Formatierungskontexte ein, von denen es verschiedene Typen gibt, einschließlich Block-Formatierungskontexte, Inline-Formatierungskontexte und Flex-Formatierungskontexte. Es wird auch das grundlegende Verhalten dieser Kontexte und wie Sie diese Verhaltensweisen nutzen können, vorgestellt.

Alles auf einer Seite ist Teil eines **Formatierungskontexts**, also eines Bereichs, der zur Anordnung von Inhalten auf eine bestimmte Weise definiert wurde. Ein **Block-Formatierungskontext** (BFC) ordnet untergeordnete Elemente nach den Blocklayout-Regeln an, ein **Flex-Formatierungskontext** wird seine Kinder als {{Glossary("flex_item", "Flex-Elemente")}} anordnen usw. Jeder Formatierungskontext hat spezifische Regeln, wie das Layout in diesem Kontext funktioniert.

## Block-Formatierungskontexte

Das äußerste Element in einem Dokument, das Blocklayout-Regeln verwendet, schafft den ersten oder **initialen Block-Formatierungskontext**. Das bedeutet, dass jedes Element innerhalb des Blocks des `<html>`-Elements gemäß dem normalen Fluss angepasst wird und den Regeln für Block- und Inline-Layout folgt. Elemente, die an einem BFC teilnehmen, verwenden die im CSS-Box-Modell beschriebenen Regeln, welche festlegen, wie die Ränder, Ränder und Abstände eines Elements mit anderen Blöcken im selben Kontext interagieren.

### Erstellen eines neuen Block-Formatierungskontexts

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das einen Block-Formatierungskontext erstellen kann. Jedes Blockelement kann durch die Anwendung bestimmter CSS-Eigenschaften dazu veranlasst werden, einen BFC zu erstellen.

Ein neuer BFC wird in den folgenden Situationen erstellt:

- Elemente, die mit {{cssxref("float")}} zum Schweben gebracht werden
- [absolut positionierte](/de/docs/Web/CSS/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabellzellen oder Elemente mit `display: table-cell`, einschließlich anonymen Tabellzellen, die bei Verwendung der `display: table-*` Eigenschaften erstellt werden
- Tabellenüberschriften oder Elemente mit `display: table-caption`
- Blockelemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- {{Glossary("flex_item", "Flex-Elemente")}}
- Raster-Elemente
- [Multicol-Container](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Dies ist nützlich, da ein neuer BFC sich ähnlich wie das äußere Dokument verhält, indem er ein Mini-Layout innerhalb des Hauptlayouts wird. Ein BFC enthält alles in seinem Inneren, {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente im selben Formatierungskontext, und Ränder kollabieren nur zwischen Elementen im selben Formatierungskontext.

### Beispiele zur BFC-Erstellung

Schauen wir uns ein paar dieser Beispiele an, um zu sehen, welche Auswirkungen das Erstellen eines neuen BFC hat.

Im Beispiel unten haben wir ein schwebendes Element innerhalb eines `<div>`, auf das ein Rahmen angewendet wurde. Der Inhalt dieses `<div>` ist neben das schwebende Element geflossen. Da der Inhalt des schwebenden Elements größer ist als der Inhalt daneben, verläuft der Rahmen des `<div>` nun durch das schwebende Element. Wie im [Leitfaden für in Fluss und außerhalb des Flusses befindliche Elemente](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow) erklärt, wurde das schwebende Element aus dem Fluss entfernt, sodass der Hintergrund und der Rahmen des Divs nur den Inhalt und nicht das schwebende Element enthalten.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

Das Erstellen eines neuen BFC würde das schweben Element enthalten. Ein typischer Weg, dies in der Vergangenheit zu tun, war die Einstellung von `overflow: auto` oder das Setzen anderer Werte als den Anfangswert `overflow: visible`.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-overflow.html", '100%', 720)}}

Das Setzen von `overflow: auto` hat einen neuen BFC erstellt, der das schwebende Element enthält. Unser `<div>` wird jetzt zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird innerhalb davon enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, ist, dass die `overflow`-Eigenschaft festlegen soll, wie Sie mit überlaufenden Inhalten umgehen möchten. Es gibt einige Gelegenheiten, bei denen unerwünschte Scrollleisten oder abgeschnittene Schatten auftreten, wenn Sie diese Eigenschaft rein zum Erstellen eines BFC verwenden. Darüber hinaus ist es möglicherweise nicht sehr lesbar für einen zukünftigen Entwickler, da möglicherweise nicht offensichtlich ist, warum Sie `overflow` zu diesem Zweck verwendet haben. Wenn Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um die Verwendung zu erklären.

### Explizites Erstellen eines BFC mit display: flow-root

Die Verwendung von `display: flow-root` (oder `display: flow-root list-item`) auf dem umgebenden Block erstellt einen neuen BFC ohne andere potenziell problematische Nebeneffekte.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/bfc-flow-root.html", '100%', 720)}}

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nehmen alle Inhalte in diesem Container am Block-Formatierungskontext dieses Containers teil, und schwebende Inhalte werden nicht aus dem unteren Bereich des Elements herausragen.

Der Name des `flow-root`-Schlüsselworts bezieht sich darauf, dass Sie etwas erstellen, das im Wesentlichen wie ein neues Wurzelelement (wie es {{HTMLElement("html")}} tut) dient, angesichts dessen, wie der neue Kontext erstellt wird und seine Flusslayout-Funktionen arbeiten.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als der Kontext eines Absatzes betrachtet werden. Der Absatz erstellt einen Inline-Formatierungskontext, innerhalb dessen solche Dinge wie {{HTMLElement("strong")}}, {{HTMLElement("a")}} oder {{HTMLElement("span")}}-Elemente für den Text verwendet werden.

Das Box-Modell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einem horizontalen Schreibmodus werden horizontale Abstände, Ränder und Rahmen auf das Element angewendet und schieben den Text nach links und rechts weg. Jedoch werden Ränder über und unter dem Element nicht angewendet. Vertikale Abstände und Rahmen werden angewendet, können jedoch den Inhalt darüber und darunter überlappen, da in einem Inline-Formatierungskontext die Linienboxen nicht durch Abstände und Rahmen auseinandergedrängt werden.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/inline.html", '100%', 720)}}

## Andere Formatierungskontexte

Dieser Leitfaden behandelt das Flusslayout und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Es ist daher nützlich zu verstehen, dass das Erstellen eines beliebigen Formatierungskontexts das Verhalten der Elemente innerhalb dieses Formatierungskontexts verändert. Dieses Verhalten wird immer in der Spezifikation und auch hier auf MDN beschrieben.

## Zusammenfassung

In diesem Leitfaden haben wir uns eingehender mit den Block- und Inline-Formatierungskontexten und dem wichtigen Thema der Erstellung eines Block-Formatierungskontexts (BFC) befasst. Im nächsten Leitfaden werden wir herausfinden, [wie der normale Fluss mit verschiedenen Schreibmodi interagiert](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)
