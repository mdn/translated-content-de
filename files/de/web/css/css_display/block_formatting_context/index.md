---
title: Block-Formatierungs-Kontext
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Ein **Block-Formatierungs-Kontext** (BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Es ist der Bereich, in dem das Layout von Blockboxen erfolgt und in dem Floats mit anderen Elementen interagieren.

Ein Block-Formatierungs-Kontext wird durch mindestens eines der folgenden Elemente geschaffen:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blöcke (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenspalten (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenspalten ist).
- Tabellenüberschriften (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenüberschriften ist).
- Anonyme Tabellenspalten, die implizit durch die Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (die Standardeinstellung für HTML-Tabellen, Tabellenzeilen, Tabellengruppen, Tabellenköpfe und Tabellenfüße) oder `inline-table` erstellt werden.
- Blockelemente, bei denen {{ cssxref("overflow") }} einen anderen Wert als `visible` und `clip` hat.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}}-Elemente und `button` {{htmlelement("input")}}-Typen, die standardmäßig `display: flow-root` haben.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Items (direkte Kinder eines Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), sofern sie selbst weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/CSS_table) Container sind.
- Grid-Items (direkte Kinder eines Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), sofern sie selbst weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/CSS_table) Container sind.
- Multicol-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, selbst wenn das `column-span: all` Element nicht von einem Multicol-Container umschlossen ist.

Formatierungskontexte beeinflussen das Layout, weil ein Element, das einen neuen Block-Formatierungs-Kontext schafft:

- interne Floats enthält.
- externe Floats ausschließt.
- [Randüberlagerung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) unterdrückt.

Flex- und Grid-Container, definiert durch das Setzen eines Elements auf ({{ cssxref("display") }} `flex`, `grid`, `inline-flex` oder `inline-grid`, schaffen einen neuen Flex- oder Grid-Formatierungs-Kontext. Diese sind ähnlich dem Block-Formatierungs-Kontext, außer dass darin keine schwebenden Kinder verfügbar sind, aber diese Formatierungskontexte schließen externe Floats aus und unterdrücken Randüberlagerungen.

## Beispiele

Schauen wir uns ein paar dieser Beispiele an, um den Effekt der Erstellung eines neuen BFC zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir ein schwebendes Element, das die gleiche Höhe wie der daneben befindliche Inhalt hat. Wir haben ein schwebendes Element in einem `<div>` mit einem `border` angewendet. Der Inhalt dieses `<div>` hat sich neben dem schwebenden Element platziert. Da der Inhalt des schwebenden Elements höher ist als der daneben befindliche Inhalt, läuft der Rand des `<div>` nun durch das schwebende Element. Wie im [Leitfaden für in Fluss und außerhalb des Flusses befindliche Elemente](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde das schwebende Element aus dem Fluss entfernt, sodass der `background` und der `border` des `<div>` nur den Inhalt und nicht das schwebende Element enthalten.

**Verwendung von `overflow: auto`**

Das Festlegen von `overflow: auto` oder anderen Werten als der Anfangswert von `overflow: visible` erstellt einen neuen BFC, der das schwebende Element enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kind-Element wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, ist, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überfließendem Inhalt umgehen möchten. Es gibt einige Gelegenheiten, bei denen Sie festzustellen werden, dass Sie unerwünschte Scrollbalken oder abgeschnittene Schatten erhalten, wenn Sie diese Eigenschaft rein zur Erstellung eines BFC verwenden. Außerdem ist es möglicherweise für einen zukünftigen Entwickler nicht lesbar, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um eine Erklärung zu geben.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, einen neuen BFC ohne andere potenziell problematische Nebeneffekte zu erstellen. Die Verwendung von `display: flow-root` auf dem enthaltenen Block erstellt einen neuen BFC.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Block-Formatierungs-Kontext des Containers teil, und Floats ragen nicht aus dem unteren Ende des Elements hervor.

Der Wertname `flow-root` ergibt Sinn, wenn Sie verstehen, dass Sie etwas schaffen, das wie das `Wurzel`-Element (`<html>`-Element im Browser) funktioniert, in Bezug darauf, wie es einen neuen Kontext für das Flusslayout in sich erstellt.

Dies ist das Standard-Rendering für {{htmlelement("button")}}-Elemente und `button` {{htmlelement("input")}}-Typen, was bedeutet, dass Schaltflächen einen neuen BFC erstellen, solange ihr `display`-Wert nicht auf einen Wert gesetzt ist, der nicht automatisch einen neuen BFC erstellt.

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

Im folgenden Beispiel verwenden wir `display:flow-root` und Floats, um zwei nebeneinander liegende Kästen zu erstellen, die demonstrieren, dass ein Element im normalen Fluss einen neuen BFC erzeugt und nicht das Randfeld der Floats in demselben Block-Formatierungs-Kontext wie das Element selbst überlappt.

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

### Randüberlagerung verhindern

Sie können einen neuen BFC erstellen, um [Randüberlagerung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Beispiel zur Randüberlagerung

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund der Randüberlagerung beträgt der vertikale Abstand zwischen ihnen `10px`, nicht die `20px`, die wir erwarten könnten.

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

#### Verhindern der Randüberlagerung

In diesem Beispiel umhüllen wir das zweite `<div>` mit einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf dem äußeren `<div>` verwenden. Dieser neue BFC verhindert, dass die Ränder des verschachtelten `<div>` mit denen des äußeren `<div>` überlagern.

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
- [Randüberlagerung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Wertedefinitions-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
