---
title: Einführung in Formatierungskontexte
slug: Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts
l10n:
  sourceCommit: 5755d6dfbac15abc29ddcd924cee110c4139b073
---

{{CSSRef}}

Dieser Artikel führt in das Konzept der Formatierungskontexte ein, von denen es mehrere Typen gibt, einschließlich Block-Formatierungskontexten, Inline-Formatierungskontexten und Flex-Formatierungskontexten. Es werden die Grundlagen ihres Verhaltens und wie Sie diese nutzen können, vorgestellt.

Alles auf einer Seite ist Teil eines **Formatierungskontexts** oder eines Bereichs, der definiert wurde, um Inhalte auf eine bestimmte Weise zu gestalten. Ein **Block-Formatierungskontext** (BFC) legt die Kind-Elemente gemäß den Block-Layout-Regeln aus, ein **Flex-Formatierungskontext** ordnet seine Kindelemente als {{Glossary("flex_item", "flex items")}} an usw. Jeder Formatierungskontext hat spezifische Regeln darüber, wie das Layout innerhalb dieses Kontexts funktioniert.

## Block-Formatierungskontexte

Das äußerste Element in einem Dokument, das Block-Layout-Regeln verwendet, etabliert den ersten oder **initialen Block-Formatierungskontext**. Das bedeutet, dass jedes Element innerhalb des Blocks des `<html>`-Elements gemäß dem normalen Fluss ausgelegt wird, indem die Regeln für Block- und Inline-Layout befolgt werden. Elemente, die an einem BFC teilnehmen, verwenden die Regeln des CSS-Box-Modells, das definiert, wie die Ränder, Ränder und Abstände eines Elements mit anderen Blöcken im selben Kontext interagieren.

### Einen neuen Block-Formatierungskontext erstellen

Das {{HTMLElement("html")}}-Element ist nicht das einzige Element, das einen Block-Formatierungskontext erzeugen kann. Jedes Block-level-Element kann durch die Anwendung bestimmter CSS-Eigenschaften dazu gebracht werden, einen BFC zu erzeugen.

Ein neuer BFC wird in folgenden Situationen erstellt:

- Elemente, die mit {{cssxref("float")}} zum Schweben gebracht wurden
- [absolut positionierte](/de/docs/Web/CSS/position#types_of_positioning) Elemente
- Elemente mit {{cssxref("display", "display: inline-block", "#inline-block")}}
- Tabelleneinheiten oder Elemente mit `display: table-cell`, einschließlich anonymer Tabelleneinheiten, die bei Verwendung der `display: table-*` Eigenschaften erstellt werden
- Tabellenüberschriften oder Elemente mit `display: table-caption`
- Block-Elemente, bei denen `overflow` einen anderen Wert als `visible` hat
- Elemente mit `display: flow-root` oder `display: flow-root list-item`
- Elemente mit {{cssxref("contain", "contain: layout", "#layout")}}, `content` oder `strict`
- {{Glossary("flex_item", "flex items")}}
- Grid-Elemente
- [mehrspaltige Container](/de/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
- Elemente mit {{cssxref("column-span")}} auf `all` gesetzt

Dies ist nützlich, weil ein neuer BFC sich ähnlich wie das äußere Dokument verhält, indem er ein Mini-Layout innerhalb des Hauptlayouts wird. Ein BFC enthält alles, was in ihm ist; {{cssxref("float")}} und {{cssxref("clear")}} gelten nur für Elemente im gleichen Formatierungskontext und Ränder kollabieren nur zwischen Elementen im gleichen Formatierungskontext.

### Beispiele zur Erstellung eines BFC

Schauen wir uns einige dieser Beispiele an, um zu sehen, welche Auswirkungen die Erstellung eines neuen BFC hat.

Im unteren Beispiel haben wir ein schwebendes Element innerhalb eines `<div>` mit einem angewendeten Rahmen. Der Inhalt dieses `<div>` wurde neben dem schwebenden Element platziert. Da der Inhalt des schwebenden Elements höher ist als der Inhalt daneben, verläuft der Rahmen des `<div>` jetzt durch das schweben. Wie im [Leitfaden zu in-Flow- und außer-Flow-Elementen](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow) erklärt, wurde das schwebende Element aus dem Fluss genommen, sodass der Hintergrund und der Rahmen des `<div>` nur den Inhalt enthalten und nicht das schwebende Element.

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

Die Erstellung eines neuen BFC würde das Schweben enthalten. Eine typische Methode, dies in der Vergangenheit zu erreichen, war die Einstellung von `overflow: auto` oder andere Werte als den Anfangswert von `overflow: visible`.

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

Die Einstellung von `overflow: auto` hat einen neuen BFC erstellt, der das schweben enthält. Unser `<div>` wird jetzt ein Mini-Layout innerhalb unseres Layouts. Jedes Kind-Element wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft dem Browser mitteilen soll, wie Sie mit überfließendem Inhalt umgehen möchten. Es gibt einige Fälle, in denen Sie unerwünschte Bildlaufleisten oder abgeschnittene Schatten erhalten könnten, wenn Sie diese Eigenschaft nur verwenden, um einen BFC zu erstellen. Darüber hinaus ist es möglicherweise nicht sehr lesbar für zukünftige Entwickler, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie dies tun, wäre es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

### Explizite Erstellung eines BFC mit display: flow-root

Die Verwendung von `display: flow-root` (oder `display: flow-root list-item`) auf dem enthaltenden Block erstellt einen neuen BFC ohne sonstige potenziell problematische Nebenwirkungen.

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

Mit `display: flow-root` auf dem {{HTMLElement("div")}} wird alles innerhalb dieses Containers am Block-Formatierungskontext dieses Containers teilnehmen und schwebende Elemente werden nicht aus dem unteren Teil des Elements herausragen.

Der Name des `flow-root`-Schlüsselworts bezieht sich darauf, dass Sie etwas erstellen, das im Wesentlichen wie ein neues Wurzelelement funktioniert (ähnlich wie es das {{HTMLElement("html")}} tut), im Hinblick darauf, wie der neue Kontext erstellt wird und wie er im Fluss-Layout funktioniert.

## Inline-Formatierungskontexte

Inline-Formatierungskontexte existieren innerhalb anderer Formatierungskontexte und können als der Kontext eines Absatzes betrachtet werden. Der Absatz erstellt einen Inline-Formatierungskontext, in dem Dinge wie {{HTMLElement("strong")}}, {{HTMLElement("a")}}, oder {{HTMLElement("span")}}-Elemente auf Text angewendet werden.

Das Box-Modell gilt nicht vollständig für Elemente, die an einem Inline-Formatierungskontext teilnehmen. In einem horizontalen Schreibmodus werden horizontale Abstände, Ränder und Ränder auf das Element angewendet und verschieben den Text nach links und rechts. Ränder oberhalb und unterhalb des Elements werden jedoch nicht angewendet. Vertikale Abstände und Ränder werden angewendet, können jedoch Inhalte überlappen, da im Inline-Formatierungskontext die Zeilenboxen nicht durch Abstände und Ränder getrennt werden.

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

Dieser Leitfaden behandelt den Fluss-Layout und bezieht sich daher nicht auf andere mögliche Formatierungskontexte. Daher ist es nützlich zu verstehen, dass die Erstellung eines beliebigen Formatierungskontextes das Verhalten von Elementen innerhalb dieses Kontexts verändert. Dieses Verhalten wird immer in der Spezifikation und auch hier auf MDN beschrieben.

## Zusammenfassung

In diesem Leitfaden haben wir einen detaillierteren Blick auf die Block- und Inline-Formatierungskontexte und das wichtige Thema der Erstellung eines Block-Formatierungskontexts (BFC) geworfen. Im nächsten Leitfaden werden wir herausfinden, [wie der normale Fluss mit verschiedenen Schreibrichtungen interagiert](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes).

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model)
