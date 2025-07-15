---
title: Block-Formatierungskontext
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: 72a2f0fa7f25ba32ab8e07447a8d4bbc2f936b85
---

Ein **Block-Formatierungskontext** (BFC) ist ein Teil des visuellen CSS-Renderings einer Webseite. Es ist der Bereich, in dem das Layout von Blockboxen erfolgt und in dem Floats mit anderen Elementen interagieren.

Ein Block-Formatierungskontext wird durch mindestens eines der folgenden Kriterien erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blocks (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenüberschriften (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenüberschriften ist).
- Anonyme Tabellenzellen, die implizit durch die Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenzeilen, Tabellenkörper, Tabellenköpfe und Tabellenfüße ist) oder `inline-table` erstellt werden.
- Blockelemente, bei denen {{ cssxref("overflow") }} einen Wert hat, der nicht `visible` oder `clip` ist.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}} Elemente und Schaltflächen-{{htmlelement("input")}} Typen, die standardmäßig `display: flow-root` verwenden.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), sofern sie selbst weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/CSS_table) Container sind.
- Grid-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), sofern sie selbst weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/CSS_table) Container sind.
- Mehrspalten-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, selbst wenn das `column-span: all` Element nicht von einem Mehrspalten-Container umgeben ist.

Formatierungskontexte beeinflussen das Layout, weil ein Element, das einen neuen Block-Formatierungskontext erstellt:

- interne Floats enthält.
- externe Floats ausschließt.
- [Margenzusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) unterdrückt.

Flex- und Grid-Container, die durch das Setzen der {{ cssxref("display") }} eines Elements auf `flex`, `grid`, `inline-flex` oder `inline-grid` definiert sind, erstellen einen neuen Flex- oder Grid-Formatierungskontext. Diese ähneln dem Block-Formatierungskontext, ausgenommen, dass keine schwebenden Kinder in einem Flex- oder Grid-Container verfügbar sind, aber diese Formatierungskontexte schließen externe Floats aus und unterdrücken Margenzusammenfall.

## Beispiele

Werfen wir einen Blick auf einige dieser Fälle, um den Effekt der Erstellung eines neuen BFC zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir ein schwebendes Inhaltselement, das die gleiche Höhe wie der danebenliegende Inhalt hat. Wir haben ein schwebendes Element innerhalb eines `<div>`, auf das eine `border` angewandt wurde. Der Inhalt dieses `<div>` hat sich neben dem schwebenden Element ausgerichtet. Da der Inhalt des schwebenden Elements höher ist als der danebenliegende Inhalt, verläuft die Grenze des `<div>` nun durch das schwebende Element. Wie im [Leitfaden zu in- und aus-der-Bildfluss-Elementen](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss genommen, sodass der `background` und `border` des `<div>` nur den Inhalt und nicht den Float enthalten.

**Verwendung von `overflow: auto`**

Das Setzen von `overflow: auto` oder anderen Werten als dem Anfangswert `overflow: visible` erstellt einen neuen BFC, der den Float enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft eigentlich dazu dient, dem Browser mitzuteilen, wie mit überlaufendem Inhalt umgegangen werden soll. Es gibt einige Gelegenheiten, bei denen unerwünschte Scrollleisten oder abgeschnittene Schatten auftreten können, wenn diese Eigenschaft nur zur Erstellung eines BFC verwendet wird. Zudem ist es für zukünftige Entwickler möglicherweise nicht leicht nachvollziehbar, warum Sie `overflow` zu diesem Zweck verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, einen neuen BFC ohne andere potenziell problematische Nebenwirkungen zu erstellen. Bei Verwendung von `display: flow-root` auf dem enthaltenden Block wird ein neuer BFC erstellt.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Block-Formatierungskontext dieses Containers teil, und Floats werden nicht aus dem unteren Rand des Elements herausragen.

Der Wertname `flow-root` macht Sinn, wenn man versteht, dass man etwas erstellt, das wie das `root` Element (`<html>` Element im Browser) wirkt, indem es einen neuen Kontext für das Fließlayout innerhalb davon erstellt.

Dies ist die Standarddarstellung für {{htmlelement("button")}} Elemente und Schaltflächen-{{htmlelement("input")}} Typen, was bedeutet, dass Schaltflächen einen neuen BFC erstellen, solange ihr `display` Wert nicht auf einen Wert gesetzt ist, der nicht automatisch einen neuen BFC erstellt.

#### HTML

```html
<section>
  <div class="box1">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the container.</p>
  </div>
</section>
<section>
  <div class="box2">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the <code>overflow:auto</code> container.</p>
  </div>
</section>
<section>
  <div class="box3">
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
.box1 {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}
.box2,
.box3 {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.box2 {
  overflow: auto;
}
.box3 {
  display: flow-root;
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

Im folgenden Beispiel verwenden wir `display: flow-root` und Floats und erstellen zwei nebeneinander stehende Boxen, die zeigen, dass ein Element im normalen Fluss einen neuen BFC erstellt und sich nicht mit dem Margin-Box eines Float in demselben Block-Formatierungskontext wie das Element selbst überlappt.

#### HTML

```html
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box"><p>Normal</p></div>
</section>
<section>
  <div class="float">Try to resize this outer float</div>
  <div class="box2">
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
.box2 {
  background-color: aliceblue;
  border: 5px solid steelblue;
  display: flow-root;
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

### Margenzusammenfall verhindern

Sie können einen neuen BFC erstellen, um [Margenzusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Beispiel für Margenzusammenfall

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}} Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund des Margenzusammenfalls beträgt der vertikale Abstand zwischen ihnen `10px`, nicht die erwarteten `20px`.

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

#### Margenzusammenfall verhindern

In diesem Beispiel umschließen wir das zweite `<div>` in einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf das äußere `<div>` anwenden. Dieser neue BFC verhindert, dass die Ränder des verschachtelten `<div>` mit denen des äußeren `<div>` zusammenfallen.

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

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Margenzusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
