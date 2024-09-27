---
title: Block formatting context
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{CSSRef}}

Ein **Block-Formatting-Kontext** (BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Es ist der Bereich, in dem das Layout von Block-Boxen stattfindet und in dem Floats mit anderen Elementen interagieren.

Ein Block-Formatting-Kontext wird durch mindestens eines der folgenden Merkmale erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Float-Elemente (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blocks (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenbeschriftungen (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenbeschriftungen ist).
- Anonyme Tabellenzellen, die implizit von den Elementen mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenreihen, Tabellenkörper, Tabellenköpfe und Tabellenfußzeilen ist) oder `inline-table` erstellt werden.
- Block-Elemente, bei denen {{ cssxref("overflow") }} einen anderen Wert als `visible` und `clip` hat.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}}-Elemente und Schaltflächen-{{htmlelement("input")}}-Typen, die standardmäßig auf `display: flow-root` eingestellt sind.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content`, oder `paint`.
- Flex-Items (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), wenn sie weder [flex](/de/docs/Glossary/Flex_Container) noch [grid](/de/docs/Glossary/Grid_Container) noch [table](/de/docs/Web/CSS/CSS_table) Container selbst sind.
- Grid-Items (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), wenn sie weder [flex](/de/docs/Glossary/Flex_Container) noch [grid](/de/docs/Glossary/Grid_Container) noch [table](/de/docs/Web/CSS/CSS_table) Container selbst sind.
- Mehrspalten-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, selbst wenn das `column-span: all` Element nicht von einem Mehrspalten-Container enthalten ist.

Formatierungskontexte beeinflussen das Layout, da ein Element, das einen neuen Block-Formatting-Kontext etabliert, folgendes bewirken wird:

- interne Floats enthalten.
- externe Floats ausschließen.
- [Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) unterdrücken.

Flex- und Grid-Container, die durch das Festlegen eines Elements ({{ cssxref("display") }} auf `flex`, `grid`, `inline-flex` oder `inline-grid` definiert sind, etablieren einen neuen Flex- oder Grid-Formatting-Kontext. Diese sind ähnlich wie der Block-Formatting-Kontext, außer dass es keine schwebende Kinder innerhalb eines Flex- oder Grid-Containers gibt, aber diese Formatierungskontexte schließen externe Floats aus und unterdrücken Margin-Collapsing.

## Beispiele

Schauen wir uns einige Beispiele an, um die Auswirkungen der Erstellung eines neuen BFC zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir schwebende Inhalte, die die gleiche Höhe wie der begleitende Inhalt haben. Wir haben ein schwebendes Element in einem `<div>` mit einem `border` angewendet. Der Inhalt dieses `<div>` ist entlang des schwebenden Elements geflossen. Da der Inhalt des Floats höher ist als der begleitende Inhalt, verläuft der Rahmen des `<div>` nun durch den Float. Wie im [Leitfaden zu in-flow und out-of-flow Elementen](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss genommen, sodass der `background` und der `border` des `<div>` nur den Inhalt, nicht aber den Float enthalten.

**using `overflow: auto`**

Das Setzen von `overflow: auto` oder das Setzen anderer Werte als den Initialwert von `overflow: visible` erstellt einen neuen BFC, der den Float enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kind-Element wird darin enthalten sein.

Das Problem mit der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überlaufendem Inhalt umgehen möchten. In einigen Fällen werden Sie feststellen, dass Sie unerwünschte Scrollleisten oder abgeschnittene Schatten erhalten, wenn Sie diese Eigenschaft ausschließlich zur Erstellung eines BFC verwenden. Außerdem ist es möglicherweise nicht lesbar für einen zukünftigen Entwickler, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` zu diesem Zweck verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

**using `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, einen neuen BFC zu erstellen, ohne andere potenziell problematische Nebenwirkungen. Mit `display: flow-root` auf dem enthaltenden Block wird ein neuer BFC erstellt.

Mit `display: flow-root;` auf dem `<div>`, nimmt alles innerhalb dieses Containers am Block-Formatting-Kontext dieses Containers teil, und Floats werden nicht aus dem unteren Bereich des Elements herausragen.

Der Wertname `flow-root` macht Sinn, wenn man versteht, dass man etwas erstellt, das wie das `root` Element (das `<html>` Element im Browser) handelt, in Bezug darauf, wie es einen neuen Kontext für das Flusslayout innerhalb davon erstellt.

Dies ist die Standard-Darstellung für {{htmlelement("button")}}-Elemente und Schaltflächen-{{htmlelement("input")}}-Typen, was bedeutet, dass Schaltflächen einen neuen BFC erstellen, solange ihr `display`-Wert nicht auf einen Wert gesetzt ist, der nicht automatisch einen neuen BFC erstellt.

#### HTML

```html
<section>
  <div class="box">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the container.</p>
  </div>
</section>
<section>
  <div class="box" style="overflow:auto">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the <code>overflow:auto</code> container.</p>
  </div>
</section>
<section>
  <div class="box" style="display:flow-root">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the <code>display:flow-root</code> container.</p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}
.box[style] {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: rgb(255 255 255 / 50%);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("Contain_internal_floats", 200, 480)}}

### Externe Floats ausschließen

Im folgenden Beispiel verwenden wir `display:flow-root` und Floats, indem wir zwei nebeneinander platzierte Boxen erstellen, um zu demonstrieren, dass ein Element im normalen Fluss einen neuen BFC erstellt und nicht den Margin-Rahmen von Floats im selben Blockformatierungskontext wie das Element selbst überlappt.

#### HTML

```html
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box"><p>Normal</p></div>
</section>
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box" style="display:flow-root">
    <p><code>display:flow-root</code></p>
  </div>
</section>
```

#### CSS

```css
section {
  height: 150px;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}
.box[style] {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.float {
  float: left;
  overflow: hidden; /* required by resize:both */
  resize: both;
  margin-right: 25px;
  width: 200px;
  height: 100px;
  background-color: rgb(255 255 255 / 75%);
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("Exclude_external_floats", 200, 330)}}

### Margin-Collapsing verhindern

Sie können einen neuen BFC erstellen, um das [Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) zwischen zwei benachbarten Elementen zu verhindern.

#### Margin-Collapsing Beispiel

In diesem Beispiel haben wir zwei angrenzende {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Abstand von `10px` haben. Aufgrund des Margin-Collapsings beträgt der vertikale Abstand zwischen ihnen `10px`, nicht die `20px`, die wir erwarten könnten.

```html
<div class="blue"></div>
<div class="red"></div>
```

```css
.blue,
.red {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red {
  background: red;
}
```

{{EmbedLiveSample("Margin collapsing example", 120, 170)}}

#### Margin-Collapsing verhindern

In diesem Beispiel umwickeln wir das zweite `<div>` mit einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf das äußere `<div>` anwenden. Dieser neue BFC verhindert, dass die Ränder des verschachtelten `<div>` mit denen des äußeren `<div>` kollabieren.

```html
<div class="blue"></div>
<div class="outer">
  <div class="red"></div>
</div>
```

```css
.blue,
.red {
  height: 50px;
  margin: 10px 0;
}

.blue {
  background: blue;
}

.red {
  background: red;
}

.outer {
  overflow: hidden;
  background: transparent;
}
```

{{EmbedLiveSample("Preventing margin collapsing", 120, 170)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Anfangs-,](/de/docs/Web/CSS/initial_value) [berechnete,](/de/docs/Web/CSS/computed_value) [verwendete und](/de/docs/Web/CSS/used_value) [tatsächliche Werte](/de/docs/Web/CSS/actual_value)
- [Wert-Definitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
