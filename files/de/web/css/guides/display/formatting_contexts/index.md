---
title: Einführung in Formatierungskontexte
short-title: Formatting contexts
slug: Web/CSS/Guides/Display/Formatting_contexts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel führt das Konzept der Formatierungskontexte ein, von denen es mehrere Typen gibt, darunter Block-Formatierungskontexte, Inline-Formatierungskontexte und Flex-Formatierungskontexte. Die Grundlagen ihres Verhaltens und wie Sie diese Verhaltensaspekte nutzen können, werden ebenfalls vorgestellt.

Alles auf einer Seite ist Teil eines **Formatierungskontextes**, oder eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise zu layouten. Ein **Block-Formatierungskontext** (BFC) legt Kindelemente nach den Blocklayout-Regeln an, ein **Flex-Formatierungskontext** ordnet seine Kinder als {{Glossary("flex_item", "flex items")}}, usw. Jeder Formatierungskontext hat spezifische Regeln, wie sich Layouts innerhalb dieses Kontextes verhalten.

## Block-Formatierungskontexte

Das äußerste Element in einem Dokument, das Blocklayout-Regeln verwendet, stellt den ersten oder **initialen Block-Formatierungskontext** her. Das bedeutet, dass jedes Element innerhalb des Blockes des `<html>`-Elements nach dem normalen Fluss und den Regeln für Block- und Inline-Layouts angeordnet wird. Elemente, die an einem BFC teilnehmen, nutzen die vom CSS-Boxmodell beschriebenen Regeln, die definieren, wie die Abstände, Rahmen und Ränder eines Elements mit anderen Blöcken im gleichen Kontext interagieren.

### Einen neuen Block-Formatierungskontext erstellen

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das in der Lage ist, einen Block-Formatierungskontext zu erzeugen. Jedes Block-Level-Element kann durch die Anwendung bestimmter CSS-Eigenschaften dazu gebracht werden, einen BFC zu erstellen.

Ein neuer BFC wird in den folgenden Situationen erstellt:

- Elemente, die mit {{cssxref("float")}} schweben
- [absolut positionierte](/de/docs/Web/CSS/Reference/Properties/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabellenzellen oder Elemente mit `display: table-cell`, einschließlich anonymer Tabellenzellen, die bei Verwendung der `display: table-*`-Eigenschaften erstellt werden
- Tabellenüberschriften oder Elemente mit `display: table-caption`
- Blockelemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- {{Glossary("flex_item", "flex items")}}
- Gitterelemente
- [multicol containers](/de/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Dies ist nützlich, weil ein neuer BFC sich ähnlich wie das äußerste Dokument verhält, indem er zu einem Mini-Layout innerhalb des Hauptlayouts wird. Ein BFC enthält alles, was sich in ihm befindet. {{cssxref("float")}} und {{cssxref("clear")}} beziehen sich nur auf Elemente innerhalb desselben Formatierungskontextes, und Abstände kollabieren nur zwischen Elementen im selben Formatierungskontext.

### BFC-Erstellung Beispiele

Schauen wir uns ein paar dieser Beispiele an, um den Effekt der Erstellung eines neuen BFC zu sehen.

Im Beispiel unten haben wir ein schwebendes Element innerhalb eines `<div>` mit einer angewandten Umrandung. Der Inhalt dieses `<div>` ist neben dem schwebenden Element platziert. Da der Inhalt des schwebenden Elements höher als der danebenliegende Inhalt ist, verläuft die Umrandung des `<div>` nun durch das schwebende Element. Wie im [Leitfaden zu In-Flow- und Out-of-Flow-Elementen](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow) erklärt, wurde das schwebende Element aus dem Fluss genommen, sodass der Hintergrund und die Umrandung des Divs nur den Inhalt enthalten und nicht das schwebende Element.

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

Das Erstellen eines neuen BFC würde das schwebende Element enthalten. Eine typische Methode in der Vergangenheit war es, `overflow: auto` zu setzen oder andere Werte als den initialen Wert von `overflow: visible` zu verwenden.

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

Das Setzen von `overflow: auto` hat einen neuen BFC erstellt, der das schwebende Element enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird innerhalb enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die Eigenschaft `overflow` eigentlich dafür gedacht ist, dem Browser mitzuteilen, wie überlaufende Inhalte behandelt werden sollen. In einigen Fällen können unerwünschte Scrollleisten oder abgeschnittene Schatten auftreten, wenn Sie diese Eigenschaft nur zur Erstellung eines BFC verwenden. Darüber hinaus ist es möglicherweise nicht sehr lesbar für einen zukünftigen Entwickler, da nicht offensichtlich ist, warum `overflow` zu diesem Zweck verwendet wurde. Wenn Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

### Einen BFC explizit mit display: flow-root erstellen

Durch die Verwendung von `display: flow-root` (oder `display: flow-root list-item`) auf dem enthaltenden Block wird ein neuer BFC ohne andere potenziell problematische Nebeneffekte erstellt.

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

Mit `display: flow-root` auf dem {{HTMLElement("div")}} nimmt alles innerhalb dieses Containers am Block-Formatierungskontext dieses Containers teil, und schwebende Elemente ragen nicht aus dem unteren Bereich des Elements heraus.

Der Name des `flow-root` Schlüsselworts bezieht sich auf die Tatsache, dass Sie etwas erstellen, das im Wesentlichen wie ein neues Wurzelelement (wie {{HTMLElement("html")}}) fungiert, da der neue Kontext erstellt wird und seine Flusslayout-Funktionen bietet.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als der Kontext eines Absatzes betrachtet werden. Der Absatz erstellt einen Inline-Formatierungskontext, innerhalb dessen Elemente wie {{HTMLElement("strong")}}, {{HTMLElement("a")}} oder {{HTMLElement("span")}} auf Text angewendet werden.

Das Boxmodell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einem horizontalen Schreibrichtlinien-Zeile, horizontale Abstände, Rahmen und Ränder werden auf das Element angewendet und drängen den Text nach links und rechts weg. Abstände oberhalb und unterhalb des Elements werden jedoch nicht angewendet. Vertikale Abstände und Rahmen werden angewendet, können jedoch den Inhalt oberhalb und unterhalb überlappen, da in einem Inline-Formatierungskontext die Zeilenboxen nicht durch Abstände und Rahmen auseinander gedrängt werden.

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

Dieser Leitfaden behandelt das Flusslayout und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Es ist jedoch nützlich zu verstehen, dass das Erstellen eines beliebigen Formatierungskontexts das Verhalten der innerhalb dieses Kontextes befindlichen Elemente ändert. Dieses Verhalten wird immer in der Spezifikation und auch hier auf MDN beschrieben.

## Zusammenfassung

In diesem Leitfaden haben wir uns ausführlicher mit den Block- und Inline-Formatierungskontexten sowie dem wichtigen Thema der Erstellung eines Block-Formatierungskontextes (BFC) befasst. Im nächsten Leitfaden werden wir erfahren, [wie der normale Fluss mit unterschiedlichen Schreibrichtungen interagiert](/de/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model)
