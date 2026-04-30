---
title: Einführung in Formatierungskontexte
short-title: Formatting contexts
slug: Web/CSS/Guides/Display/Formatting_contexts
l10n:
  sourceCommit: 19497692665c3551b4097af5cd9f52f84564cefd
---

Dieser Artikel führt in das Konzept der Formatierungskontexte ein, von denen es mehrere Typen gibt, einschließlich Blockformatierungskontexte, Inline-Formatierungskontexte und Flex-Formatierungskontexte. Die Grundlagen, wie sie sich verhalten und wie Sie diese Verhaltensweisen nutzen können, werden ebenfalls eingeführt.

Alles auf einer Seite ist Teil eines **Formatierungskontextes** oder eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise darzustellen. Ein **Blockformatierungskontext** (BFC) ordnet Kind-Elemente gemäß den Block-Layout-Regeln an, ein **Flex-Formatierungskontext** ordnet seine Kinder als {{Glossary("flex_item", "flex items")}} an, usw. Jeder Formatierungskontext hat spezifische Regeln darüber, wie das Layout in diesem Kontext funktioniert.

## Blockformatierungskontexte

Das äußerste Element in einem Dokument, das Blocklayoutregeln verwendet, etabliert den ersten oder **initialen Blockformatierungskontext**. Das bedeutet, dass jedes Element innerhalb des Blocks des `<html>`-Elements gemäß dem normalen Fluss entsprechend den Regeln für Block- und Inline-Layout ausgelegt wird. Elemente, die an einem BFC teilnehmen, verwenden die im CSS-Boxmodell beschriebenen Regeln, die definieren, wie die Ränder, Rahmen und Abstände eines Elements mit anderen Blöcken im selben Kontext interagieren.

### Erstellen eines neuen Blockformatierungskontextes

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das einen Blockformatierungskontext erstellen kann. Jedes Block-Element kann durch Anwendung bestimmter CSS-Eigenschaften dazu gebracht werden, einen BFC zu erzeugen.

Ein neuer BFC wird in den folgenden Situationen erstellt:

- Elemente, die mit {{cssxref("float")}} zum Schweben gebracht werden
- [absolut positionierte](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabellenzellen oder Elemente mit `display: table-cell`, einschließlich anonymer Tabellenzellen, die bei Verwendung der `display: table-*`-Eigenschaften erstellt werden
- Tabellenbeschriftungen oder Elemente mit `display: table-caption`
- Blockelemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- Abfragecontainer (Elemente, bei denen {{cssxref("container-type")}} nicht `normal` ist)
- {{Glossary("flex_item", "flex items")}}
- Grid-Items
- [mehrspaltige Container](/de/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Dies ist nützlich, weil ein neuer BFC sich ähnlich verhält wie das äußerste Dokument, indem er zu einem Mini-Layout im Hauptlayout wird. Ein BFC enthält alles darin, {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente im selben Formatierungskontext, und Ränder kollabieren nur zwischen Elementen im selben Kontext.

### BFC-Erstellung Beispiele

Schauen wir uns ein paar dieser Situationen an, um den Effekt der Erstellung eines neuen BFCs zu sehen.

Im nachstehenden Beispiel haben wir ein schwebendes Element in einem `<div>` mit einem angewendeten Rahmen. Der Inhalt dieses `<div>` ist neben das schwebende Element geflossen. Da der Inhalt des Schwebens höher ist als der Inhalt daneben, verläuft der Rahmen des `<div>` nun durch das Schweben. Wie im [Leitfaden zu im Fluss und außerhalb des Flusses stehenden Elementen](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow) erklärt, wurde das Schweben aus dem Fluss genommen, sodass der Hintergrund und der Rahmen des Divs nur den Inhalt und nicht das Schweben enthalten.

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

Ein neuer BFC würde das Schweben einschließen. Eine übliche Methode in der Vergangenheit bestand darin, `overflow: auto` festzulegen oder andere Werte als den Anfangswert von `overflow: visible` zu setzen.

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

Durch das Festlegen von `overflow: auto` wurde ein neuer BFC erstellt, der das Schweben einschließt. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kind-Element wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow` zur Erstellung eines neuen BFC besteht darin, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überfließendem Inhalt umgehen möchten. In einigen Fällen kann es vorkommen, dass Sie unerwünschte Scrollleisten oder abgeschnittene Schatten erhalten, wenn Sie diese Eigenschaft rein zur Erstellung eines BFC verwenden. Darüber hinaus ist es möglicherweise für einen zukünftigen Entwickler nicht sehr lesbar, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um zu erklären.

### Explizite Erstellung eines BFC mit display: flow-root

Die Verwendung von `display: flow-root` (oder `display: flow-root list-item`) auf dem umschließenden Block erstellt einen neuen BFC ohne andere potenziell problematische Nebeneffekte.

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

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nimmt alles innerhalb dieses Containers am Blockformatierungskontext dieses Containers teil, und schwebende Elemente ragen nicht aus dem Boden des Elements heraus.

Der Name des `flow-root`-Schlüsselworts bezieht sich darauf, dass Sie etwas schaffen, das im Wesentlichen wie ein neues Wurzelelement dient (wie es das {{HTMLElement("html")}} tut), angesichts der Art und Weise, wie der neue Kontext erstellt wird und seine Fluss-Layout-Funktionen.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als Kontext eines Absatzes betrachtet werden. Der Absatz erstellt einen Inline-Formatierungskontext, in dem solche Dinge wie {{HTMLElement("strong")}}, {{HTMLElement("a")}} oder {{HTMLElement("span")}}-Elemente auf Text angewendet werden.

Das Boxmodell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einer horizontalen Schreibmoduslinie werden horizontale Abstände, Rahmen und Rand auf das Element angewendet und drücken den Text nach links und rechts. Rand oberhalb und unterhalb des Elements wird jedoch nicht angewendet. Vertikaler Abstand und Rahmen werden angewendet, können jedoch Inhalte überlappen, da in einem Inline-Formatierungskontext die Linienkästen nicht durch Abstand und Rahmen auseinander gedrängt werden.

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

Dieser Leitfaden behandelt das Fluss-Layout und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Daher ist es nützlich zu wissen, dass das Erstellen eines beliebigen Formatierungskontextes das Verhalten der darin enthaltenen Elemente ändert. Dieses Verhalten wird immer in der Spezifikation und auch hier auf MDN beschrieben.

## Zusammenfassung

In diesem Leitfaden haben wir uns detaillierter mit den Block- und Inline-Formatierungskontexten und dem wichtigen Thema der Erstellung eines Blockformatierungskontextes (BFC) befasst. Im nächsten Leitfaden werden wir herausfinden, [wie der normale Fluss mit verschiedenen Schreibmodi interagiert](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes).

## Siehe auch

- [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [CSS Box Model](/de/docs/Web/CSS/Guides/Box_model)
