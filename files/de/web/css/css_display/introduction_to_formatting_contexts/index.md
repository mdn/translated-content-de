---
title: Einführung in die Formatierungskontexte
short-title: Formatting contexts
slug: Web/CSS/CSS_display/Introduction_to_formatting_contexts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Dieser Artikel führt in das Konzept der Formatierungskontexte ein, von denen es mehrere Typen gibt, einschließlich Block-Formatierungskontexte, Inline-Formatierungskontexte und Flex-Formatierungskontexte. Die Grundlagen ihres Verhaltens und wie Sie diese Verhaltensweisen nutzen können, werden ebenfalls vorgestellt.

Alles auf einer Seite ist Teil eines **Formatierungskontextes**, oder eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise anzuordnen. Ein **Block-Formatierungskontext** (BFC) wird Kind-Elemente gemäß der Block-Layout-Regeln anordnen, ein **Flex-Formatierungskontext** wird seine Kinder als {{Glossary("flex_item", "Flex-Elemente")}} anordnen usw. Jeder Formatierungskontext hat spezifische Regeln, wie das Layout in diesem Kontext funktioniert.

## Block-Formatierungskontexte

Das äußerste Element in einem Dokument, das Block-Layout-Regeln verwendet, etabliert den ersten oder **initialen Block-Formatierungskontext**. Dies bedeutet, dass jedes Element innerhalb des `<html>`-Elements gemäß dem normalen Fluss angeordnet wird, wobei die Regeln für Block- und Inline-Layouts befolgt werden. Elemente, die an einem BFC teilnehmen, verwenden die im CSS-Box-Modell beschriebenen Regeln, die definieren, wie die Ränder, Rahmen und Polsterung eines Elements mit anderen Blöcken im selben Kontext interagieren.

### Erstellen eines neuen Block-Formatierungskontextes

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das in der Lage ist, einen Block-Formatierungskontext zu erstellen. Jedes Block-Level-Element kann durch die Anwendung bestimmter CSS-Eigenschaften dazu gebracht werden, einen BFC zu erstellen.

Ein neuer BFC wird in den folgenden Situationen erstellt:

- Elemente, die mit {{cssxref("float")}} zum Schweben gebracht werden
- [absolut positionierte](/de/docs/Web/CSS/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabellenzellen oder Elemente mit `display: table-cell`, einschließlich anonymer Tabellenzellen, die bei der Verwendung der `display: table-*`-Eigenschaften erstellt werden
- Tabellenüberschriften oder Elemente mit `display: table-caption`
- Block-Elemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- {{Glossary("flex_item", "Flex-Elemente")}}
- Grid-Items
- [Mehrspalten-Container](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}}, die auf `all` gesetzt sind

Dies ist nützlich, da ein neuer BFC sich ähnlich wie das äußerste Dokument verhält, indem er ein Mini-Layout innerhalb des Hauptlayouts wird. Ein BFC enthält alles innerhalb von sich, {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente im selben Formatierungskontext, und Ränder kollabieren nur zwischen Elementen im selben Formatierungskontext.

### Beispiele zur BFC-Erstellung

Sehen wir uns ein paar dieser Situationen an, um die Auswirkungen der Erstellung eines neuen BFC zu erkennen.

Im Beispiel unten haben wir ein schwebendes Element innerhalb eines `<div>` mit einem angewandten Rahmen. Der Inhalt dieses `<div>` ist neben dem schwebenden Element gefloatet. Da der Inhalt des Float höher ist als der Inhalt daneben, verläuft der Rahmen des `<div>` jetzt durch den Float. Wie im [Leitfaden zu in-flow und out of flow Elementen](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss genommen, sodass der Hintergrund und der Rahmen des div nur den Inhalt und nicht den Float enthalten.

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

Ein neuer BFC würde den Float enthalten. Ein typischer Weg, dies in der Vergangenheit zu tun, bestand darin, `overflow: auto` oder andere Werte als den Anfangswert von `overflow: visible` zu setzen.

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

Das Setzen von `overflow: auto` hatte einen neuen BFC erstellt, der den Float enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kind-Element wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft dafür gedacht ist, dem Browser mitzuteilen, wie Sie mit überlaufendem Inhalt umgehen möchten. Es gibt einige Gelegenheiten, bei denen Sie unerwünschte Scrollbars oder abgeschnittene Schatten erhalten, wenn Sie diese Eigenschaft nur zur Erstellung eines BFC verwenden. Zudem ist es möglicherweise für einen zukünftigen Entwickler nicht sehr lesbar, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um es zu erklären.

### Explizites Erstellen eines BFC mit display: flow-root

Die Verwendung von `display: flow-root` (oder `display: flow-root list-item`) auf dem umgebenden Block wird einen neuen BFC erstellen, ohne dass andere potenziell problematische Nebenwirkungen auftreten.

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

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nimmt alles innerhalb dieses Containers am Block-Formatierungskontext dieses Containers teil, und Floats ragen nicht aus dem unteren Ende des Elements heraus.

Der Name des `flow-root`-Schlüsselworts bezieht sich darauf, dass Sie etwas erstellen, das im Wesentlichen wie ein neues Stammes-Element fungiert (wie {{HTMLElement("html")}}), da der neue Kontext erstellt wird und seine Fließlayout-Funktionen hat.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als der Kontext eines Absatzes angesehen werden. Der Absatz erstellt einen Inline-Formatierungskontext, in dem Elemente wie {{HTMLElement("strong")}}, {{HTMLElement("a")}} oder {{HTMLElement("span")}} auf Text verwendet werden.

Das Box-Modell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einem horizontalen Schreibmodus werden horizontale Polsterung, Rahmen und Ränder auf das Element angewendet und schieben den Text nach links und rechts weg. Ränder oberhalb und unterhalb des Elements werden jedoch nicht angewandt. Vertikale Polsterung und Rahmen werden angewendet, können jedoch überlappenden Inhalt ober- und unterhalb überlappen, da im Inline-Formatierungskontext die Linienboxen nicht durch Polsterung und Rahmen auseinander gedrängt werden.

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

Dieser Leitfaden umfasst das Fließlayout und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Daher ist es nützlich zu verstehen, dass das Erstellen irgendeines Formatierungskontextes die Art und Weise ändert, wie Elemente innerhalb dieses Formatierungskontextes sich verhalten. Dieses Verhalten wird immer in der Spezifikation beschrieben und auch hier auf MDN.

## Zusammenfassung

In diesem Leitfaden haben wir uns ausführlicher mit den Block- und Inline-Formatierungskontexten und dem wichtigen Thema der Erstellung eines Block-Formatierungskontextes (BFC) befasst. Im nächsten Leitfaden werden wir herausfinden, [wie der normale Fluss mit verschiedenen Schreibmodi interagiert](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model)
