---
title: Einführung in Formatierungs-Kontexte
short-title: Formatting contexts
slug: Web/CSS/CSS_display/Introduction_to_formatting_contexts
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel führt in das Konzept der Formatierungs-Kontexte ein, von denen es mehrere Typen gibt, einschließlich Block-Formatierungs-Kontexte, Inline-Formatierungs-Kontexte und Flex-Formatierungs-Kontexte. Die Grundlagen, wie sie sich verhalten und wie Sie diese Verhaltensweisen nutzen können, werden ebenfalls vorgestellt.

Alles auf einer Seite ist Teil eines **Formatierungs-Kontextes** oder eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise anzuordnen. Ein **Block-Formatierungs-Kontext** (BFC) ordnet untergeordnete Elemente entsprechend den Block-Layout-Regeln an, ein **Flex-Formatierungs-Kontext** ordnet seine Kinder als {{Glossary("flex_item", "Flex-Elemente")}} an, usw. Jeder Formatierungs-Kontext hat spezifische Regeln dafür, wie das Layout in diesem Kontext funktioniert.

## Block-Formatierungs-Kontexte

Das äußerste Element in einem Dokument, das Block-Layout-Regeln verwendet, etabliert den ersten oder **initialen Block-Formatierungs-Kontext**. Das bedeutet, dass jedes Element innerhalb des `<html>`-Elements gemäß dem normalen Fluss unter Beachtung der Regeln für Block- und Inline-Layouts angeordnet wird. Elemente, die an einem BFC teilnehmen, verwenden die im CSS Box Model beschriebenen Regeln, die definieren, wie sich die Abstände, Rahmen und Abstände eines Elements mit anderen Blöcken im selben Kontext verhalten.

### Erstellen eines neuen Block-Formatierungs-Kontexts

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das in der Lage ist, einen Block-Formatierungs-Kontext zu erstellen. Jedes Blockebenen-Element kann durch die Anwendung bestimmter CSS-Eigenschaften dazu gebracht werden, einen BFC zu erstellen.

Ein neuer BFC wird in folgenden Situationen erstellt:

- Elemente, die durch {{cssxref("float")}} zum Schweben gebracht werden
- [absolut positionierte](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabelleneinheiten oder Elemente mit `display: table-cell`, einschließlich anonymer Tabelleneinheiten, die bei Verwendung der `display: table-*`-Eigenschaften erstellt werden
- Tabellenüberschriften oder Elemente mit `display: table-caption`
- Blockelemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- {{Glossary("flex_item", "Flex-Elemente")}}
- Gitter-Elemente
- [Multicol-Container](/de/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Dies ist nützlich, da ein neuer BFC sich wie das äußerste Dokument verhält, indem er zu einem Mini-Layout innerhalb des Hauptlayouts wird. Ein BFC enthält alles innerhalb von sich, {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente im selben Formatierungs-Kontext, und Abstände werden nur zwischen Elementen im selben Formatierungs-Kontext zusammengefasst.

### Beispiele zur Erstellung eines BFC

Schauen wir uns ein paar dieser Beispiele an, um den Effekt der Erstellung eines neuen BFC zu sehen.

Im untenstehenden Beispiel haben wir ein schwebendes Element innerhalb eines `<div>` mit einem angewendeten Rahmen. Der Inhalt dieses `<div>` wurde neben das schwebende Element gestellt. Da der Inhalt des Schwebeelements größer ist als der Inhalt daneben, verläuft der Rahmen des `<div>` jetzt durch das Schwebeelement. Wie im [Leitfaden zu Elementen im Fluss und außerhalb des Flusses](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow) erklärt, wurde das Schwebeelement aus dem Fluss genommen, sodass der Hintergrund und der Rahmen des div nur den Inhalt und nicht das Schwebeelement enthalten.

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

Das Erstellen eines neuen BFC würde den Float enthalten. Eine typische Möglichkeit, dies in der Vergangenheit zu tun, bestand darin, `overflow: auto` zu setzen oder andere Werte als den anfänglichen Wert von `overflow: visible` zu verwenden.

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

Durch das Setzen von `overflow: auto` wurde ein neuer BFC erstellt, der das Schwebeelement enthält. Unser `<div>` wird jetzt zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, ist, dass die `overflow`-Eigenschaft eigentlich dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überfließendem Inhalt umgehen möchten. Es kann vorkommen, dass Sie unerwünschte Scrollbars oder abgeschnittene Schatten erhalten, wenn Sie diese Eigenschaft lediglich verwenden, um einen BFC zu erstellen. Außerdem ist es möglicherweise nicht sehr lesbar für einen zukünftigen Entwickler, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

### Einen BFC explizit mit display: flow-root erstellen

Die Verwendung von `display: flow-root` (oder `display: flow-root list-item`) auf dem enthaltenden Block erstellt einen neuen BFC ohne andere potenziell problematische Nebeneffekte.

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

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nimmt alles innerhalb dieses Containers am Block-Formatierungs-Kontext dieses Containers teil, und Schwebeelemente werden nicht aus dem unteren Ende des Elements herausragen.

Der Name des `flow-root`-Schlüsselworts bezieht sich auf die Tatsache, dass Sie etwas erstellen, das im Wesentlichen wie ein neues Wurzelelement (wie {{HTMLElement("html")}}) fungiert, angesichts dessen, wie der neue Kontext erstellt wird und seine Fluss-Layout-Funktionen.

## Inline-Formatierungs-Kontexte

Inline-Formatierungs-Kontexte existieren innerhalb anderer Formatierungs-Kontexte und können als der Kontext eines Absatzes angesehen werden. Der Absatz erstellt einen Inline-Formatierungs-Kontext, in dem solche Dinge wie {{HTMLElement("strong")}}, {{HTMLElement("a")}}, oder {{HTMLElement("span")}} Elemente auf Text angewendet werden.

Das Box-Modell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungs-Kontext teilnehmen. In einer horizontalen Schreibmoduslinie werden horizontale Abstände, Rahmen und Margen auf das Element angewendet und schieben den Text nach links und rechts weg. Allerdings werden Margen über und unter dem Element nicht angewendet. Vertikale Abstände und Rahmen werden angewendet, können jedoch Inhalte darüber und darunter überlappen, da im Inline-Formatierungs-Kontext die Linienboxen nicht durch Abstände und Rahmen auseinander gedrängt werden.

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

## Andere Formatierungs-Kontexte

Dieser Leitfaden behandelt das Fluss-Layout und bezieht sich daher nicht auf andere mögliche Formatierungs-Kontexte. Daher ist es nützlich zu verstehen, dass die Erstellung irgendeines Formatierungs-Kontextes die Art und Weise, wie sich Elemente innerhalb dieses Kontextes verhalten, ändert. Dieses Verhalten wird immer in der Spezifikation und auch hier auf MDN beschrieben.

## Zusammenfassung

In diesem Leitfaden haben wir detaillierter die Block- und Inline-Formatierungs-Kontexte und das wichtige Thema der Erstellung eines Block-Formatierungs-Kontextes (BFC) betrachtet. Im nächsten Leitfaden erfahren wir, [wie der normale Fluss mit verschiedenen Schreibmodi interagiert](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungs-Kontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [CSS Box Model](/de/docs/Web/CSS/Guides/Box_model)
