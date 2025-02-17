---
title: Block-Formatting-Kontext
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Ein **Block-Formatting-Kontext** (BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Es ist der Bereich, in dem das Layout von Blockboxen erfolgt und in dem Floats mit anderen Elementen interagieren.

Ein Block-Formatting-Kontext wird durch mindestens einen der folgenden Umstände erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blöcke (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenbeschriftungen (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenbeschriftungen ist).
- Anonyme Tabellenzellen, die implizit durch Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenspalten, Tabellenkörper, Tabellenköpfe und Tabellenfußzeilen ist) oder `inline-table` erstellt werden.
- Blockelemente, bei denen {{ cssxref("overflow") }} einen anderen Wert als `visible` und `clip` hat.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}}-Elemente und Button-{{htmlelement("input")}}-Typen, die standardmäßig `display: flow-root` verwenden.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Items (direkte Kinder eines Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), sofern diese nicht selbst {{Glossary("Flex_Container", "flex")}}, {{Glossary("Grid_Container", "grid")}} oder [table](/de/docs/Web/CSS/CSS_table) Container sind.
- Grid-Items (direkte Kinder eines Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), sofern diese nicht selbst {{Glossary("Flex_Container", "flex")}}, {{Glossary("Grid_Container", "grid")}} oder [table](/de/docs/Web/CSS/CSS_table) Container sind.
- Multicol-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, auch wenn das `column-span: all`-Element nicht von einem Multicol-Container enthalten ist.

Formatting-Kontexte beeinflussen das Layout, da ein Element, das einen neuen Block-Formatting-Kontext erstellt:

- interne Floats enthält.
- externe Floats ausschließt.
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) unterdrückt.

Flex- und Grid-Container, definiert durch das Setzen des {{ cssxref("display") }}-Werts eines Elements auf `flex`, `grid`, `inline-flex` oder `inline-grid`, erstellen einen neuen Flex- oder Grid-Formatting-Kontext. Diese sind dem Block-Formatting-Kontext ähnlich, mit der Ausnahme, dass innerhalb eines Flex- oder Grid-Containers keine schwebenden Kinder verfügbar sind, aber diese Formatting-Kontexte schließen externe Floats aus und unterdrücken Margin Collapsing.

## Beispiele

Lassen Sie uns einige dieser Beispiele ansehen, um die Wirkung der Erstellung eines neuen BFC zu verstehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir Float-Inhalte, die dieselbe Höhe wie die daneben liegenden Inhalte haben. Wir haben ein schwebendes Element in einem `<div>` mit einem `border`. Der Inhalt des `<div>` wurde neben dem schwebenden Element ausgerichtet. Da der Inhalt des Floats höher ist als der daneben liegende Inhalt, verläuft der Rand des `<div>` jetzt durch den Float. Wie in der [Anleitung zu in Flow und out of Flow-Elementen](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Flow herausgenommen, sodass der `background` und `border` des `<div>` nur den Inhalt enthalten und nicht den Float.

**Verwendung von `overflow: auto`**

Wenn Sie `overflow: auto` setzen oder andere Werte als den Anfangswert `overflow: visible` verwenden, wird ein neuer BFC erstellt, der den Float enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow` zur Erstellung eines neuen BFC ist, dass die Eigenschaft `overflow` dafür gedacht ist, dem Browser mitzuteilen, wie mit überlaufendem Inhalt umgegangen werden soll. Es kann Fälle geben, in denen Sie unerwünschte Scrollbars oder abgeschnittene Schatten bekommen, wenn Sie diese Eigenschaft ausschließlich zur Erstellung eines BFC verwenden. Außerdem könnte es für einen zukünftigen Entwickler weniger lesbar sein, da möglicherweise nicht offensichtlich ist, warum `overflow` für diesen Zweck verwendet wurde. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, einen neuen BFC ohne andere potenziell problematische Nebenwirkungen zu erstellen. Die Verwendung von `display: flow-root` auf dem enthaltenen Block erstellt einen neuen BFC.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Block-Formatting-Kontext dieses Containers teil, und Floats werden nicht aus dem unteren Bereich des Elements herausragen.

Der Wertname `flow-root` macht Sinn, wenn man versteht, dass man etwas erstellt, das wie das `root`-Element (das `<html>`-Element im Browser) in Bezug auf die Erstellung eines neuen Kontexts für das Fluss-Layout darin wirkt.

Dies ist die Standarddarstellung für {{htmlelement("button")}}-Elemente und Button-{{htmlelement("input")}}-Typen, was bedeutet, dass Buttons einen neuen BFC erstellen, solange ihr `display`-Wert nicht auf einen Wert gesetzt ist, der keinen neuen BFC erstellt.

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

Im folgenden Beispiel verwenden wir `display: flow-root` und Floats, um zwei nebeneinander liegende Boxen zu erstellen, die demonstrieren, dass ein Element im normalen Flow einen neuen BFC erstellt und sich nicht über die Margin-Box eines Floats im selben Block-Formatting-Kontext wie das Element selbst hinaus erstreckt.

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

Sie können einen neuen BFC erstellen, um [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Beispiel für Margin Collapsing

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Abstand von `10px` haben. Aufgrund von Margin Collapsing beträgt der vertikale Abstand zwischen ihnen `10px`, nicht die `20px`, die wir erwarten könnten.

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

In diesem Beispiel umwickeln wir das zweite `<div>` mit einem äußeren `<div>` und erstellen einen neuen BFC durch die Verwendung von `overflow: hidden` auf dem äußeren `<div>`. Dieser neue BFC verhindert, dass sich die Margen des verschachtelten `<div>` mit denen des äußeren `<div>` überlagern.

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
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Anfangs-, berechnete, verwendete und tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
