---
title: Einführung in Formatierungskontexte
short-title: Formatting contexts
slug: Web/CSS/CSS_display/Introduction_to_formatting_contexts
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Dieser Artikel führt in das Konzept der Formatierungskontexte ein, von denen es mehrere Typen gibt, einschließlich Block-Formatierungskontexte, Inline-Formatierungskontexte und Flex-Formatierungskontexte. Die Grundlagen ihres Verhaltens und wie Sie diese Verhaltensweisen nutzen können, werden ebenfalls eingeführt.

Alles auf einer Seite ist Teil eines **Formatierungskontextes** oder eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise anzuordnen. Ein **Block-Formatierungskontext** (BFC) ordnet Kind-Elemente gemäß den Blocklayout-Regeln an, ein **Flex-Formatierungskontext** ordnet seine Kinder als {{Glossary("flex_item", "Flex-Elemente")}} an, usw. Jeder Formatierungskontext hat spezifische Regeln darüber, wie das Layout in diesem Kontext funktioniert.

## Block-Formatierungskontexte

Das äußerste Element in einem Dokument, das Blocklayout-Regeln verwendet, etabliert den ersten oder **initialen Block-Formatierungskontext**. Das bedeutet, dass jedes Element im Block des `<html>`-Elements gemäß dem normalen Fluss basierend auf den Regeln für Block- und Inlinelayout angeordnet wird. Elemente, die an einem BFC teilnehmen, verwenden die im CSS-Box-Modell beschriebenen Regeln, das definiert, wie die Ränder, Rahmen und Abstände eines Elements mit anderen Blöcken im selben Kontext interagieren.

### Einen neuen Block-Formatierungskontext erstellen

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das einen Block-Formatierungskontext erstellen kann. Jedes Block-Level-Element kann durch die Anwendung bestimmter CSS-Eigenschaften dazu gebracht werden, einen BFC zu erstellen.

Ein neuer BFC wird in den folgenden Situationen erstellt:

- Elemente, die durch {{cssxref("float")}} fließend gemacht werden
- [absolut positionierte](/de/docs/Web/CSS/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabellenzellen oder Elemente mit `display: table-cell`, einschließlich anonymer Tabellenzellen, die bei Verwendung der `display: table-*`-Eigenschaften erstellt werden
- Tabellenbeschriftungen oder Elemente mit `display: table-caption`
- Blockelemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- {{Glossary("flex_item", "Flex-Elemente")}}
- Grid-Items
- [Multicol-Container](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Dies ist nützlich, da ein neuer BFC sich ähnlich wie das äußerste Dokument verhält, indem er zu einem Mini-Layout innerhalb des Hauptlayouts wird. Ein BFC enthält alles, was sich in ihm befindet, {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente im selben Formatierungskontext, und Ränder kollabieren nur zwischen Elementen im selben Formatierungskontext.

### Beispiele zur Erstellung von BFCs

Sehen wir uns einige Beispiele an, um den Effekt der Erstellung eines neuen BFCs zu verstehen.

Im Beispiel unten haben wir ein fließend gemachtes Element innerhalb eines `<div>` mit einem angewendeten Rahmen. Der Inhalt dieses `<div>` wurde neben das fließend gemachte Element verschoben. Da der Inhalt des Floats höher als der Inhalt daneben ist, verläuft der Rahmen des `<div>` nun durch das Float. Wie im [Leitfaden zu in-flow und out-of-flow-Elementen](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss genommen, sodass der Hintergrund und der Rahmen des Divs nur den Inhalt und nicht das Float enthalten.

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

Das Erstellen eines neuen BFC würde das Float enthalten. Eine übliche Methode, dies in der Vergangenheit zu tun, bestand darin, `overflow: auto` einzustellen oder andere Werte als den Initialwert von `overflow: visible`.

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

Das Setzen von `overflow: auto` erstellte einen neuen BFC, der den Float enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kind-Element wird darin enthalten.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überfließendem Inhalt umgehen möchten. Es gibt einige Gelegenheiten, bei denen Sie unerwünschte Scrollbars oder abgeschnittene Schatten finden, wenn Sie diese Eigenschaft nur verwenden, um einen BFC zu erstellen. Außerdem ist es möglicherweise nicht sehr lesbar für einen zukünftigen Entwickler, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

### Einen BFC explizit mit display: flow-root erstellen

Die Verwendung von `display: flow-root` (oder `display: flow-root list-item`) auf dem enthaltenden Block wird einen neuen BFC ohne andere potenziell problematische Nebeneffekte erstellen.

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

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nimmt alles innerhalb dieses Containers am Block-Formatierungskontext dieses Containers teil, und Floats werden nicht aus dem unteren Ende des Elements herausragen.

Der Name des `flow-root`-Schlüsselworts bezieht sich darauf, dass Sie etwas erstellen, das im Wesentlichen wie ein neues Wurzelelement (wie es {{HTMLElement("html")}} tut) fungiert, da der neue Kontext erstellt wird und sein Fließlayout funktioniert.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als der Kontext eines Absatzes betrachtet werden. Der Absatz erstellt einen Inline-Formatierungskontext, in dem solche Dinge wie {{HTMLElement("strong")}}, {{HTMLElement("a")}} oder {{HTMLElement("span")}}-Elemente auf Text verwendet werden.

Das Box-Modell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einer horizontalen Schreibmoduszeile werden horizontale Abstände, Rahmen und Ränder auf das Element angewendet und verschieben den Text nach links und rechts. Ränder oberhalb und unterhalb des Elements werden jedoch nicht angewendet. Vertikale Abstände und Rahmen werden angewendet, können jedoch Inhalte oberhalb und unterhalb überlappen, da in einem Inline-Formatierungskontext die Linienboxen nicht durch Abstände und Rahmen auseinandergeschoben werden.

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

Dieser Leitfaden behandelt das Fließlayout und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Daher ist es nützlich zu verstehen, dass das Erstellen eines beliebigen Formatierungskontextes das Verhalten der Elemente innerhalb dieses Formatierungskontextes ändern wird. Dieses Verhalten wird immer in der Spezifikation und auch hier auf MDN beschrieben.

## Zusammenfassung

In diesem Leitfaden haben wir uns detaillierter mit dem Block- und Inline-Formatierungskontext sowie dem wichtigen Thema der Erstellung eines Block-Formatierungskontextes (BFC) befasst. Im nächsten Leitfaden werden wir herausfinden, [wie der normale Fluss mit verschiedenen Schreibmodi interagiert](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)
