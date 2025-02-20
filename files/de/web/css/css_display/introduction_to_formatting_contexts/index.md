---
title: Einführung in Formatierungskontexte
slug: Web/CSS/CSS_display/Introduction_to_formatting_contexts
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Dieser Artikel führt in das Konzept der Formatierungskontexte ein, von denen es verschiedene Typen gibt, einschließlich Block-Formatierungskontexte, Inline-Formatierungskontexte und Flex-Formatierungskontexte. Die Grundlagen ihres Verhaltens und ihrer Nutzungsmöglichkeiten werden ebenfalls erläutert.

Alles auf einer Seite ist Teil eines **Formatierungskontexts**, also eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise anzuordnen. Ein **Block-Formatierungskontext** (BFC) ordnet Kindelemente gemäß den Blocklayout-Regeln an, ein **Flex-Formatierungskontext** ordnet seine Kinder als {{Glossary("flex_item", "Flex-Elemente")}} an usw. Jeder Formatierungskontext hat spezifische Regeln darüber, wie das Layout in diesem Kontext funktioniert.

## Block-Formatierungskontexte

Das äußerste Element in einem Dokument, das Blocklayout-Regeln verwendet, legt den ersten, oder **ursprünglichen Block-Formatierungskontext** fest. Das bedeutet, dass jedes Element innerhalb des `<html>`-Elements gemäß dem normalen Fluss nach den Regeln für Block- und Inline-Layout angeordnet wird. Elemente in einem BFC verwenden die Regeln des CSS-Box-Modells, das definiert, wie die Ränder, Rahmen und Abstände eines Elements mit anderen Blöcken im selben Kontext interagieren.

### Erstellen eines neuen Block-Formatierungskontexts

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das einen Block-Formatierungskontext erstellen kann. Jedes Blockelement kann so gestaltet werden, dass es durch die Anwendung bestimmter CSS-Eigenschaften einen BFC erstellt.

Ein neuer BFC wird unter folgenden Bedingungen erstellt:

- Elemente, die mit {{cssxref("float")}} zum Schweben gebracht werden
- [absolut positionierte](/de/docs/Web/CSS/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabellenzellen oder Elemente mit `display: table-cell`, einschließlich anonymer Tabellenzellen, die durch die Verwendung der `display: table-*` Eigenschaften erstellt werden
- Tabellenüberschriften oder Elemente mit `display: table-caption`
- Blockelemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- {{Glossary("flex_item", "Flex-Elemente")}}
- Grid-Elemente
- [Multicol-Container](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Dies ist hilfreich, weil ein neuer BFC sich wie das äußerste Dokument verhält, in dem er zu einem Minilayout innerhalb des Hauptlayouts wird. Ein BFC enthält alles in ihm, {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente im selben Formatierungskontext, und Margen kollabieren nur zwischen Elementen im selben Formatierungskontext.

### Beispiele zur BFC-Erstellung

Betrachten wir einige dieser Situationen, um die Auswirkungen der Erstellung eines neuen BFC zu sehen.

Im folgenden Beispiel haben wir ein schwebendes Element innerhalb eines `<div>` mit einer angewandten Umrandung. Der Inhalt dieses `<div>` ist neben dem schwebenden Element angeordnet. Da der Inhalt des schwebenden Elements höher ist als der Inhalt daneben, verläuft die Umrandung des `<div>` nun durch das schwebende Element. Wie im [Leitfaden zu innerhalb des Flusses und außerhalb des Flusses liegenden Elementen](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde das schwebende Element aus dem Fluss entfernt, sodass der Hintergrund und die Umrandung des Divs nur den Inhalt und nicht das schwebende Element umfassen.

```html live-sample___float
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}

.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}

.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("float")}}

Das Erstellen eines neuen BFC würde das schwebende Element einschließen. Eine typische Vorgehensweise war es in der Vergangenheit, `overflow: auto` oder andere Werte als den Anfangswert `overflow: visible` einzusetzen.

```html hidden live-sample___bfc-overflow
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
```

```css live-sample___bfc-overflow
body {
  font: 1.2em sans-serif;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
  overflow: auto;
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("bfc-overflow", "", "220px")}}

Das Setzen von `overflow: auto` hat einen neuen BFC erstellt, der das schwebende Element umfasst. Unser `<div>` wird nun zu einem Minilayout innerhalb unseres Layouts. Jedes Kindelement wird darin eingeschlossen.

Das Problem beim Einsatz von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser anzugeben, wie überlaufender Inhalt behandelt werden soll. Es gibt Situationen, in denen unerwünschte Scrollleisten oder abgeschnittene Schatten entstehen, wenn diese Eigenschaft ausschließlich zur Erstellung eines BFC verwendet wird. Außerdem ist dies möglicherweise für einen zukünftigen Entwickler nicht sehr leserlich, da es nicht offensichtlich sein könnte, warum `overflow` für diesen Zweck verwendet wurde. Falls Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

### Explizites Erstellen eines BFC mit display: flow-root

Die Verwendung von `display: flow-root` (oder `display: flow-root list-item`) auf dem enthaltenden Block erstellt einen neuen BFC ohne andere potenziell problematische Nebenwirkungen.

```html hidden live-sample___bfc-flow-root
<div class="box">
  <div class="float">I am a floated box!</div>
  <p>I am content inside the container.</p>
</div>
```

```css live-sample___bfc-flow-root
body {
  font: 1.2em sans-serif;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
  display: flow-root;
}
```

```css hidden live-sample___bfc-flow-root
.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("bfc-flow-root")}}

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nimmt alles in diesem Container am Block-Formatierungskontext dieses Containers teil, und schwebende Elemente ragen nicht aus dem unteren Bereich des Elements heraus.

Der Name des Keywords `flow-root` bezieht sich darauf, dass dadurch etwas erstellt wird, das im Wesentlichen wie ein neues Stamm-Element fungiert (ähnlich wie {{HTMLElement("html")}}), da ein neuer Kontext erstellt wird und dessen Fließlayout-Funktionen greift.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als der Kontext eines Absatzes angesehen werden. Der Absatz erstellt einen Inline-Formatierungskontext, in dem Elemente wie {{HTMLElement("strong")}}, {{HTMLElement("a")}} oder {{HTMLElement("span")}} auf Text verwendet werden.

Das Boxmodell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einer horizontalen Schreibrichtung werden horizontale Ränder, Rahmen und Abstände auf das Element angewandt und schieben den Text nach links und rechts. Margen oberhalb und unterhalb des Elements werden jedoch nicht angewandt. Vertikale Abstände und Rahmen werden zwar angewandt, können sich jedoch über die Inhalte oben und unten überlappen, da die Zeilenboxen im Inline-Formatierungskontext nicht durch Abstände und Rahmen auseinandergeschoben werden.

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

```css live-sample___inline
body {
  font: 1.2em sans-serif;
}
p {
  margin-top: 2em;
}
strong {
  margin: 20px;
  padding: 20px;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("inline")}}

## Andere Formatierungskontexte

Dieser Leitfaden behandelt das Fließlayout und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Es ist hilfreich zu verstehen, dass die Schaffung eines Formatierungskontexts jeder Art das Verhalten der darin enthaltenen Elemente verändert. Dieses Verhalten wird immer in der Spezifikation und hier auf MDN beschrieben.

## Zusammenfassung

In diesem Leitfaden haben wir die Block- und Inline-Formatierungskontexte sowie das wichtige Thema der Erstellung eines Block-Formatierungskontexts (BFC) detaillierter betrachtet. Im nächsten Leitfaden werden wir herausfinden, [wie der normale Fluss mit verschiedenen Schreibrichtungen interagiert](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)
