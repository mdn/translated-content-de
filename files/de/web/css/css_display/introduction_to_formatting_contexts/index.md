---
title: Einführung in Formatierungskontexte
slug: Web/CSS/CSS_display/Introduction_to_formatting_contexts
l10n:
  sourceCommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

{{CSSRef}}

Dieser Artikel führt das Konzept der Formatierungskontexte ein, von denen es mehrere Typen gibt, einschließlich Block-Formatierungskontexte, Inline-Formatierungskontexte und Flex-Formatierungskontexte. Die Grundlagen ihres Verhaltens und wie Sie diese Verhaltensweisen nutzen können, werden ebenfalls eingeführt.

Alles auf einer Seite ist Teil eines **Formatierungskontextes**, oder eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise anzuordnen. Ein **Block-Formatierungskontext** (BFC) ordnet untergeordnete Elemente gemäß den Blocklayout-Regeln an, ein **Flex-Formatierungskontext** ordnet seine Kinder als {{Glossary("flex_item", "Flex-Elemente")}} an usw. Jeder Formatierungskontext hat spezifische Regeln dafür, wie sich das Layout in diesem Kontext verhält.

## Block-Formatierungskontexte

Das äußerste Element in einem Dokument, das Blocklayout-Regeln verwendet, etabliert den ersten oder **initialen Block-Formatierungskontext**. Dies bedeutet, dass jedes Element innerhalb des Blocks des `<html>`-Elements gemäß dem normalen Fluss unter Beachtung der Regeln für Block- und Inline-Layouts angeordnet wird. Elemente, die an einem BFC teilnehmen, verwenden die im CSS-Boxmodell umrissenen Regeln, die definieren, wie sich die Ränder, Rahmen und Abstände eines Elements mit anderen Blöcken im gleichen Kontext verhalten.

### Erstellen eines neuen Block-Formatierungskontextes

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das in der Lage ist, einen Block-Formatierungskontext zu erstellen. Jedes Block-Level-Element kann so angepasst werden, dass es durch die Anwendung bestimmter CSS-Eigenschaften einen BFC erstellt.

Ein neuer BFC wird in folgenden Situationen erstellt:

- Elemente, die durch {{cssxref("float")}} schweben
- [absolut positionierte](/de/docs/Web/CSS/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabellenzellen oder Elemente mit `display: table-cell`, einschließlich anonymer Tabellenzellen, die bei der Verwendung der `display: table-*`-Eigenschaften erstellt werden
- Tabellenüberschriften oder Elemente mit `display: table-caption`
- Block-Elemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- {{Glossary("flex_item", "flex items")}}
- Grid-Elemente
- [Multicol-Container](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Dies ist nützlich, weil ein neuer BFC sich sehr ähnlich wie das äußerste Dokument verhält, indem er zu einem Minilayout innerhalb des Hauptlayouts wird. Ein BFC enthält alles innerhalb davon, {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente im gleichen Formatierungskontext, und Ränder überlappen nur zwischen Elementen im gleichen Formatierungskontext.

### Beispiele zur BFC-Erstellung

Schauen wir uns ein paar dieser Beispiele an, um den Effekt der Erstellung eines neuen BFC zu sehen.

Im folgenden Beispiel haben wir ein schwebendes Element innerhalb eines `<div>` mit einem angewendeten Rahmen. Der Inhalt dieses `<div>` ist neben dem schwebenden Element platziert worden. Da der Inhalt des schwebenden Elements höher als der danebenliegende Inhalt ist, verläuft der Rahmen des `<div>` nun durch das schwebende Element. Wie im [Leitfaden zu in-flow und out of flow Elementen](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde das schwebende Element aus dem Fluss genommen, sodass der Hintergrund und der Rahmen des Divs nur den Inhalt und nicht das Schwebe-Element enthalten.

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

Das Erstellen eines neuen BFC würde das schwebende Element enthalten. Eine typische Methode, dies in der Vergangenheit zu tun, war das Setzen von `overflow: auto` oder anderen Werten als dem Anfangswert `overflow: visible`.

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

Durch das Setzen von `overflow: auto` wurde ein neuer BFC erstellt, der das schwebende Element enthält. Unser `<div>` wird nun zu einem Minilayout innerhalb unseres Layouts. Jedes Kindelement wird darin enthalten sein.

Das Problem beim Verwenden von `overflow`, um einen neuen BFC zu erstellen, ist, dass die `overflow`-Eigenschaft dafür gedacht ist, dem Browser mitzuteilen, wie Sie mit überlaufenden Inhalten umgehen möchten. Es gibt einige Gelegenheiten, in denen Sie unerwünschte Bildlaufleisten oder abgeschnittene Schatten erhalten können, wenn Sie diese Eigenschaft ausschließlich verwenden, um einen BFC zu erstellen. Darüber hinaus ist es möglicherweise nicht sehr lesbar für einen zukünftigen Entwickler, da es nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

### Explizite Erstellung eines BFCs mit display: flow-root

Das Verwenden von `display: flow-root` (oder `display: flow-root list-item`) auf dem enthaltenen Block erstellt einen neuen BFC ohne andere potenziell problematische Nebeneffekte.

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

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nimmt alles innerhalb dieses Containers am Block-Formatierungskontext dieses Containers teil, und schwebende Elemente ragen nicht mehr aus dem unteren Ende des Elements heraus.

Der Name des `flow-root`-Schlüsselworts bezieht sich auf die Tatsache, dass Sie etwas erstellen, das im Wesentlichen wie ein neues Wurzelelement dient (wie es {{HTMLElement("html")}} tut), angesichts der Art und Weise, wie der neue Kontext erstellt wird und wie sein Flusslayout funktioniert.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als der Kontext eines Absatzes betrachtet werden. Der Absatz erstellt einen Inline-Formatierungskontext, innerhalb dessen Elemente wie {{HTMLElement("strong")}}, {{HTMLElement("a")}} oder {{HTMLElement("span")}} auf Text verwendet werden.

Das Boxmodell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einem horizontalen Schreibmodus werden horizontale Abstände, Rahmen und Margen auf das Element angewendet und drücken den Text nach links und rechts weg. Margen oberhalb und unterhalb des Elements werden jedoch nicht angewendet. Vertikale Abstände und Rahmen werden angewendet, können aber Inhalte oberhalb und unterhalb überlappen, da in einem Inline-Formatierungskontext die Linienkästen nicht durch Abstände und Rahmen auseinandergeschoben werden.

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

Dieser Leitfaden behandelt das Flusslayout und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Daher ist es nützlich zu verstehen, dass das Erstellen eines jeden Formatierungskontextes die Art und Weise ändert, wie Elemente innerhalb dieses Formatierungskontextes sich verhalten. Dieses Verhalten wird immer in der Spezifikation beschrieben und auch hier auf MDN.

## Zusammenfassung

In diesem Leitfaden haben wir uns näher mit den Block- und Inline-Formatierungskontexten und dem wichtigen Thema der Erstellung eines Block-Formatierungskontextes (BFC) befasst. Im nächsten Leitfaden werden wir herausfinden, [wie der normale Fluss mit verschiedenen Schreibmodi interagiert](/de/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model)
