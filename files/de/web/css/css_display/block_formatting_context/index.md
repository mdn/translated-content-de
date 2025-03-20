---
title: Block Formatterungskontext
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{CSSRef}}

Ein **Block Formatterungskontext** (BFC) ist ein Teil der visuellen CSS-Renderings einer Webseite. Es ist der Bereich, in dem das Layout von Blockboxen erfolgt und in dem Floats mit anderen Elementen interagieren.

Ein Block Formatterungskontext wird durch mindestens eines der folgenden Elemente erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blocks (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenbeschriftungen (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenbeschriftungen ist).
- Anonyme Tabellenzellen, die implizit von Elementen mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenreihen, Tabellenkörper, Tabellenheader und Tabellenfußzeilen ist) oder `inline-table` erstellt werden.
- Blockelemente, bei denen {{ cssxref("overflow") }} einen anderen Wert als `visible` und `clip` hat.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}}-Elemente und {{htmlelement("input")}}-Buttontypen, die standardmäßig `display: flow-root` sind.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), wenn sie weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/CSS_table) Container selbst sind.
- Grid-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), wenn sie weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/CSS_table) Container selbst sind.
- Multicol-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, auch wenn das Element mit `column-span: all` nicht von einem Multicol-Container umschlossen ist.

Formatterungskontexte beeinflussen das Layout, da ein Element, das einen neuen Blockformatterungskontext erstellt:

- interne Floats enthält.
- externe Floats ausschließt.
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) unterdrückt.

Flex- und Grid-Container, die durch Setzen eines Elements auf ({{ cssxref("display") }} zu `flex`, `grid`, `inline-flex` oder `inline-grid`) definiert werden, schaffen einen neuen Flex- oder Grid-Formatterungskontext. Diese sind ähnlich wie der Block Formatterungskontext, mit der Ausnahme, dass es keine schwebenden Kinder in einem Flex- oder Grid-Container gibt, aber diese Formatterungskontexte schließen externe Floats aus und unterdrücken Margin Collapsing.

## Beispiele

Lassen Sie uns einige dieser Fälle betrachten, um die Wirkung eines neuen BFC zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir schwebende Inhalte, die die gleiche Höhe wie der danebenliegende Inhalt haben. Wir haben ein geschwebtes Element in einem `<div>` mit einem `border` angewendet. Der Inhalt dieses `<div>` schwebt neben dem geschwebten Element. Da der Inhalt des Floats höher ist als der danebenliegende Inhalt, verläuft der Rand des `<div>` nun durch den Float. Wie im [Leitfaden zu In-Flow- und Out-of-Flow-Elementen](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erläutert, wurde der Float aus dem Flow genommen, so dass der `background` und der `border` des `<div>` nur den Inhalt und nicht den Float enthalten.

**Verwendung von `overflow: auto`**

Das Festlegen von `overflow: auto` oder das Einstellen anderer Werte als den Initialwert von `overflow: visible` erstellte ein neues BFC, das den Float enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird innerhalb davon enthalten sein.

Das Problem bei der Verwendung von `overflow`, um ein neues BFC zu erstellen, ist, dass die `overflow`-Eigenschaft dafür gedacht ist, dem Browser mitzuteilen, wie mit überlaufendem Inhalt umgegangen werden soll. In einigen Fällen kann es vorkommen, dass unerwünschte Scrollbars oder abgeschnittene Schatten entstehen, wenn Sie diese Eigenschaft rein zur Erstellung eines BFC verwenden. Darüber hinaus ist es möglicherweise für einen zukünftigen Entwickler nicht nachvollziehbar, warum Sie `overflow` aus diesem Grund verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, ein neues BFC ohne andere potenziell problematische Nebenwirkungen zu erstellen. Die Verwendung von `display: flow-root` auf dem enthaltenden Block erstellt ein neues BFC.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Block Formatterungskontext dieses Containers teil, und Floats werden nicht aus der Unterseite des Elements herausragen.

Der Wertname `flow-root` macht Sinn, wenn Sie verstehen, dass Sie etwas erschaffen, das wie das `root`-Element (das `<html>`-Element im Browser) wirkt, indem es einen neuen Kontext für das Flow-Layout innerhalb davon erstellt.

Dies ist das Standardrendering für {{htmlelement("button")}}-Elemente und {{htmlelement("input")}}-Buttontypen, was bedeutet, dass Buttons ein neues BFC erstellen, solange ihr `display`-Wert nicht auf einen Wert gesetzt ist, der nicht automatisch ein neues BFC erstellt.

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

Im folgenden Beispiel verwenden wir `display:flow-root` und Floats, um zwei nebeneinanderliegende Boxen zu erstellen, die zeigen, dass ein Element im normalen Flow ein neues BFC erstellt und sich nicht mit der Margin-Box von Floats im gleichen Block Formatterungskontext als das Element selbst überschneidet.

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

Sie können ein neues BFC erstellen, um [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Beispiel für Margin Collapsing

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Margin von `10px` haben. Aufgrund von Margin Collapsing beträgt der vertikale Abstand zwischen ihnen `10px` und nicht die `20px`, die man erwarten könnte.

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

In diesem Beispiel umhüllen wir das zweite `<div>` in einem äußeren `<div>` und erstellen ein neues BFC, indem wir `overflow: hidden` auf das äußere `<div>` anwenden. Dieses neue BFC verhindert, dass die Ränder des verschachtelten `<div>` mit denen des äußeren `<div>` kollabieren.

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
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initiale](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
