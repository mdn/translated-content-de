---
title: Einführung in Formatierungskontexte
slug: Web/CSS/CSS_display/Introduction_to_formatting_contexts
l10n:
  sourceCommit: 6d55eec58e38583da60aa635d41393ad051d1c6d
---

{{CSSRef}}

Dieser Artikel führt in das Konzept der Formatierungskontexte ein, von denen es verschiedene Typen gibt, darunter Block-Formatierungskontexte, Inline-Formatierungskontexte und Flex-Formatierungskontexte. Die Grundprinzipien ihres Verhaltens und wie Sie diese Verhaltensweisen nutzen können, werden ebenfalls vorgestellt.

Alles auf einer Seite ist Teil eines **Formatierungskontextes** oder eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise anzuordnen. Ein **Block-Formatierungskontext** (BFC) ordnet Kindelemente gemäß den Block-Layout-Regeln an, ein **Flex-Formatierungskontext** ordnet seine Kinder als {{Glossary("flex_item", "Flex-Elemente")}} an usw. Jeder Formatierungskontext hat bestimmte Regeln, wie sich Layouts in diesem Kontext verhalten.

## Block-Formatierungskontexte

Das äußerste Element in einem Dokument, das Block-Layout-Regeln verwendet, etabliert den ersten oder **initialen Block-Formatierungskontext**. Dies bedeutet, dass jedes Element innerhalb des Blocks des `<html>`-Elements gemäß dem normalen Fluss nach den Regeln für Block- und Inline-Layout angeordnet wird. Elemente, die an einem BFC teilnehmen, verwenden die im CSS-Boxmodell beschriebenen Regeln, die definieren, wie sich die Ränder, Rahmen und Abstände eines Elements mit anderen Blöcken im gleichen Kontext verhalten.

### Einen neuen Block-Formatierungskontext erstellen

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das einen Block-Formatierungskontext erstellen kann. Jedes Block-Level-Element kann durch Anwendung bestimmter CSS-Eigenschaften dazu gebracht werden, einen BFC zu erstellen.

Ein neuer BFC wird in den folgenden Situationen erstellt:

- Elemente, die mit {{cssxref("float")}} flottiert gemacht werden
- [absolut positionierte](/de/docs/Web/CSS/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabellenzellen oder Elemente mit `display: table-cell`, einschließlich anonymer Tabellenzellen, die bei der Verwendung der `display: table-*`-Eigenschaften erstellt werden
- Tabellenüberschriften oder Elemente mit `display: table-caption`
- Block-Elemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- {{Glossary("flex_item", "Flex-Elemente")}}
- Grid-Elemente
- [Multicol-Container](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Das ist nützlich, weil ein neuer BFC sich ähnlich wie das äußerste Dokument verhält, indem er ein Mini-Layout innerhalb des Hauptlayouts wird. Ein BFC enthält alles in ihm, {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente innerhalb desselben Formatierungskontextes, und Ränder kollabieren nur zwischen Elementen im selben Formatierungskontext.

### Beispiele zur BFC-Erstellung

Schauen wir uns ein paar Beispiele an, um die Wirkung der Erstellung eines neuen BFC zu sehen.

Im folgenden Beispiel haben wir ein flottiertes Element innerhalb eines `<div>` mit einem angewendeten Rahmen. Der Inhalt dieses `<div>` ist neben dem flottierten Element angeordnet. Da der Inhalt des Floats höher ist als der Inhalt daneben, verläuft der Rahmen des `<div>` jetzt durch den Float. Wie im [Leitfaden zu in-flow und out-of-flow Elementen](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss genommen, sodass der Hintergrund und der Rahmen des Div nur den Inhalt enthalten und nicht den Float.

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

Das Erstellen eines neuen BFC würde den Float enthalten. In der Vergangenheit wurde dies typischerweise erreicht, indem `overflow: auto` oder andere Werte als der anfängliche Wert von `overflow: visible` gesetzt wurden.

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

Das Setzen von `overflow: auto` hat einen neuen BFC geschaffen, der den Float enthält. Unser `<div>` wird nun ein Mini-Layout in unserem Layout. Jedes Kindelement wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu schaffen, besteht darin, dass die Eigenschaft `overflow` eigentlich dafür gedacht ist, dem Browser mitzuteilen, wie Sie mit überlaufendem Inhalt umgehen möchten. In einigen Fällen können unerwünschte Bildlaufleisten oder abgeschnittene Schatten auftreten, wenn Sie diese Eigenschaft ausschließlich zur Erstellung eines BFC verwenden. Zudem ist es für einen zukünftigen Entwickler möglicherweise nicht sehr leserlich, da möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

### Explizites Erstellen eines BFC mit display: flow-root

Die Verwendung von `display: flow-root` (oder `display: flow-root list-item`) auf dem beinhaltenden Block erstellt einen neuen BFC ohne andere potenziell problematische Nebeneffekte.

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

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nehmen alle darin enthaltenen Elemente an dem Block-Formatierungskontext dieses Containers teil, und Floats werden nicht aus dem unteren Ende des Elements herausragen.

Der Name des `flow-root`-Schlüsselworts bezieht sich darauf, dass Sie im Wesentlichen etwas schaffen, das wie ein neues Wurzelelement dient (wie es {{HTMLElement("html")}} tut), wenn der neue Kontext erstellt wird und seine Fluss-Layout-Funktionen.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als der Kontext eines Absatzes betrachtet werden. Der Absatz erstellt einen Inline-Formatierungskontext, innerhalb dessen Elemente wie {{HTMLElement("strong")}}, {{HTMLElement("a")}} oder {{HTMLElement("span")}} auf Text angewendet werden.

Das Boxmodell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einem horizontalen Schreibmodusträger werden horizontale Abstände, Rahmen und Ränder auf das Element angewendet und drücken den Text links und rechts weg. Ränder oberhalb und unterhalb des Elements werden jedoch nicht angewendet. Vertikale Abstände und Rahmen werden angewendet, können jedoch Inhalte ober- und unterhalb überlappen, da im Inline-Formatierungskontext die Zeilenboxen nicht durch Abstände und Rahmen auseinander gedrückt werden.

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

Dieser Leitfaden behandelt Fluss-Layouts und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Es ist jedoch nützlich zu verstehen, dass das Erstellen eines beliebigen Formatierungskontextes das Verhalten der Elemente innerhalb dieses Formatierungskontextes ändert. Dieses Verhalten wird stets in der Spezifikation und auch hier auf MDN beschrieben.

## Zusammenfassung

In diesem Leitfaden haben wir uns eingehender mit den Block- und Inline-Formatierungskontexten sowie dem wichtigen Thema der Erstellung eines Block-Formatierungskontextes (BFC) befasst. Im nächsten Leitfaden erfahren wir, [wie der normale Fluss mit verschiedenen Schreibmodi interagiert](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [CSS Boxmodell](/de/docs/Web/CSS/CSS_box_model)
