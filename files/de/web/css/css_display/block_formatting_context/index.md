---
title: Blockformatierungskontext
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{CSSRef}}

Ein **Blockformatierungskontext** (BFC) ist Teil der visuellen CSS-Darstellung einer Webseite. Es ist der Bereich, in dem das Layout von Block-Boxen erfolgt und in dem Floats mit anderen Elementen interagieren.

Ein Blockformatierungskontext wird durch mindestens eines der folgenden Merkmale erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blöcke (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenelemente (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenelemente ist).
- Tabellenunterschriften (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenunterschriften ist).
- Anonyme Tabellenelemente, die implizit durch die Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenreihen, Tabellengruppen, Tabellenüberschriften und Tabellenfußzeilen ist) oder `inline-table` erstellt werden.
- Blockelemente, bei denen {{ cssxref("overflow") }} einen Wert hat, der nicht `visible` und `clip` ist.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}}-Elemente und Schaltfläche {{htmlelement("input")}}-Typen, die standardmäßig auf `display: flow-root` eingestellt sind.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), wenn sie selbst keine [Flex](/de/docs/Glossary/Flex_Container)-, [Grid](/de/docs/Glossary/Grid_Container)- oder [Table](/de/docs/Web/CSS/CSS_table)-Container sind.
- Grid-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), wenn sie selbst keine [Flex](/de/docs/Glossary/Flex_Container)-, [Grid](/de/docs/Glossary/Grid_Container)- oder [Table](/de/docs/Web/CSS/CSS_table)-Container sind.
- Mehrspalten-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, auch wenn das `column-span: all`-Element nicht in einem Mehrspalten-Container enthalten ist.

Formatierungskontexte beeinflussen das Layout, da ein Element, das einen neuen Blockformatierungskontext erstellt, folgendes wird:

- interne Floats enthalten.
- externe Floats ausschließen.
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) unterdrücken.

Flex- und Grid-Container, die durch Festlegen des {{ cssxref("display") }}-Werts eines Elements auf `flex`, `grid`, `inline-flex` oder `inline-grid` definiert werden, erstellen einen neuen Flex- oder Grid-Formatierungskontext. Diese sind dem Blockformatierungskontext ähnlich, außer dass es keine schwebenden Kinder innerhalb eines Flex- oder Grid-Containers gibt, aber diese Formatierungskontexte schließen externe Floats aus und unterdrücken Margin Collapsing.

## Beispiele

Lassen Sie uns einige dieser Beispiele betrachten, um den Effekt der Erstellung eines neuen BFC zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir schwebenden Inhalt, der die gleiche Höhe wie der danebenstehende Inhalt hat. Wir haben ein schwebendes Element innerhalb eines `<div>`, auf das ein `border` angewendet wurde. Der Inhalt dieses `<div>` ist an dem schwebenden Element ausgerichtet. Da der Inhalt des Floats höher ist als der danebenstehende Inhalt, verläuft die Grenze des `<div>` jetzt durch den Float. Wie im [Leitfaden für In-Flow- und Out-of-Flow-Elemente](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss genommen, sodass der `background` und der `border` des `<div>` nur den Inhalt und nicht den Float enthalten.

**Verwendung von `overflow: auto`**

Das Setzen von `overflow: auto` oder anderer Werte als dem Anfangswert von `overflow: visible` erstellt einen neuen BFC, der den Float enthält. Unser `<div>` wird nun ein Mini-Layout in unserem Layout. Jedes Kindelement wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft dem Browser mitteilen soll, wie Sie mit überlaufendem Inhalt umgehen möchten. Es gibt einige Gelegenheiten, bei denen Sie unerwünschte Bildlaufleisten oder abgeschnittene Schatten erhalten, wenn Sie diese Eigenschaft rein zur Erstellung eines BFC verwenden. Außerdem ist es möglicherweise nicht lesbar für einen zukünftigen Entwickler, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

**Verwendung von `display: flow-root`**

Der `display: flow-root`-Wert lässt uns einen neuen BFC erstellen, ohne dass andere potenziell problematische Nebeneffekte auftreten. Die Verwendung von `display: flow-root` auf dem umgebenden Block erstellt einen neuen BFC.

Mit `display: flow-root;` auf dem `<div>` nehmen alle Elemente innerhalb dieses Containers am Blockformatierungskontext dieses Containers teil und Floats werden nicht aus dem unteren Bereich des Elements herausragen.

Der Wertname `flow-root` macht Sinn, wenn Sie verstehen, dass Sie etwas erstellen, das wie das `root`-Element (`<html>` Element im Browser) in Bezug darauf funktioniert, wie es einen neuen Kontext für das Fluss-Layout darin erstellt.

Dies ist das Standard-Rendering für {{htmlelement("button")}}-Elemente und Schaltfläche {{htmlelement("input")}}-Typen, was bedeutet, dass Schaltflächen einen neuen BFC erstellen, solange ihr `display`-Wert nicht auf einen Wert eingestellt ist, der automatisch keinen neuen BFC erstellt.

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

Im folgenden Beispiel verwenden wir `display:flow-root` und Floats, um zwei nebeneinander angeordnete Boxen zu erstellen, die zeigen, dass ein Element im normalen Fluss einen neuen BFC erstellt und nicht die Margen-Box von Floats im gleichen Blockformatierungskontext wie das Element selbst überlappt.

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

### Margin Collapsing verhindern

Sie können einen neuen BFC erstellen, um [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) zwischen zwei nebeneinanderliegenden Elementen zu vermeiden.

#### Beispiel für Margin Collapsing

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund des Margin Collapse beträgt der vertikale Abstand zwischen ihnen `10px`, nicht die `20px`, die wir erwarten könnten.

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

#### Margin Collapsing verhindern

In diesem Beispiel umschließen wir das zweite `<div>` mit einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf dem äußeren `<div>` verwenden. Dieser neue BFC verhindert, dass die Ränder des verschachtelten `<div>` mit denen des äußeren `<div>` zusammenfallen.

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
- [Inheritance](/de/docs/Web/CSS/Inheritance)
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Anfängliche](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete Werte](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertdefinition Syntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
