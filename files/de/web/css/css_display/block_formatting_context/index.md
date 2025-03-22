---
title: Block-Formatierungs-Kontext
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Ein **Block-Formatierungs-Kontext** (BFC) ist ein Teil der visuellen CSS-Renderings einer Webseite. Es ist der Bereich, in dem das Layout von Block-Boxen stattfindet und in dem Floats mit anderen Elementen interagieren.

Ein Block-Formatierungs-Kontext wird durch mindestens eines der folgenden erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blöcke (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenbeschriftungen (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenbeschriftungen ist).
- Anonyme Tabellenzellen, die implizit durch die Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenzeilen, Tabellenkörper, Tabellenköpfe und Tabellenfußzeilen ist) oder `inline-table` erstellt werden.
- Blockelemente, bei denen {{ cssxref("overflow") }} einen anderen Wert als `visible` und `clip` hat.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}}-Elemente und button {{htmlelement("input")}}-Typen, die standardmäßig auf `display: flow-root` gesetzt sind.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), wenn sie selbst weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/CSS_table)-Container sind.
- Grid-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), wenn sie selbst weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/CSS_table)-Container sind.
- Mehrspaltige Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, auch wenn das `column-span: all`-Element nicht in einem mehrspaltigen Container enthalten ist.

Formatierungs-Kontexte beeinflussen das Layout, da ein Element, das einen neuen Block-Formatierungs-Kontext erstellt:

- interne Floats enthält.
- externe Floats ausschließt.
- [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) unterdrückt.

Flex- und Grid-Container, die durch das Festlegen des ({{ cssxref("display") }}-Wertes eines Elements auf `flex`, `grid`, `inline-flex` oder `inline-grid` definiert werden, erstellen einen neuen Flex- oder Grid-Formatierungs-Kontext. Diese sind dem Block-Formatierungs-Kontext ähnlich, außer dass es keine floatenden Kinder innerhalb eines Flex- oder Grid-Containers gibt. Jedoch schließen diese Formatierungskontexte externe Floats aus und unterdrücken den Margin-Kollaps.

## Beispiele

Lassen Sie uns einige davon betrachten, um die Wirkung zu sehen, die ein neuer BFC hat.

### Interne Floats enthalten

Im folgenden Beispiel haben wir floatenden Inhalt, der die gleiche Höhe wie der Inhalt daneben hat. Wir haben ein floatendes Element in einem `<div>` mit einer `border`, die angewendet wurde. Der Inhalt dieses `<div>` hat sich neben dem floatenden Inhalt platziert. Da der Inhalt des Floats höher ist als der Inhalt daneben, verläuft die Grenze des `<div>` jetzt durch den Float. Wie im [Leitfaden zu Fluss- und Nicht-Flusselementen](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss genommen, sodass der `background` und die `border` des `<div>` nur den Inhalt ohne den Float enthalten.

**Verwendung von `overflow: auto`**

Das Setzen von `overflow: auto` oder anderen Werten, die nicht dem Anfangswert von `overflow: visible` entsprechen, erstellt einen neuen BFC, der den Float enthält. Unser `<div>` wird jetzt zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kind-Element wird darin enthalten sein.

Das Problem mit der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überlaufendem Inhalt umgehen möchten. Es gibt einige Gelegenheiten, bei denen Sie ungewollte Bildlaufleisten oder abgeschnittene Schatten erhalten können, wenn Sie diese Eigenschaft nur zur Erstellung eines BFC verwenden. Außerdem ist es möglicherweise nicht lesbar für einen zukünftigen Entwickler, da es nicht offensichtlich sein könnte, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um ihn zu erklären.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, einen neuen BFC ohne andere potenziell problematische Nebeneffekte zu erstellen. Die Verwendung von `display: flow-root` auf dem umschließenden Block erstellt einen neuen BFC.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Block-Formatierungskontext dieses Containers teil, und Floats werden nicht aus dem unteren Bereich des Elements herausragen.

Der Wertname `flow-root` ergibt Sinn, wenn Sie verstehen, dass Sie etwas erstellen, das wie das `root`-Element (`<html>`-Element im Browser) in Bezug darauf handelt, wie es einen neuen Kontext für das Flusslayout darin erstellt.

Dies ist das standardmäßige Rendering für {{htmlelement("button")}}-Elemente und button {{htmlelement("input")}}-Typen, was bedeutet, dass Buttons einen neuen BFC erstellen, solange ihr `display`-Wert nicht auf einen Wert gesetzt ist, der nicht automatisch einen neuen BFC erstellt.

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

Im folgenden Beispiel verwenden wir `display:flow-root` und Floats, um zwei nebeneinander liegende Boxen zu erstellen, die zeigen, dass ein Element im normalen Fluss einen neuen BFC erstellt und nicht die Randbox eines Floats im gleichen Block-Formatierungskontext wie das Element selbst überlappt.

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

### Margin-Kollaps verhindern

Sie können einen neuen BFC erstellen, um [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Beispiel für Margin-Kollaps

In diesem Beispiel haben wir zwei angrenzende {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund des Margin-Kollaps beträgt der vertikale Abstand zwischen ihnen `10px` und nicht die `20px`, die wir vielleicht erwarten würden.

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

#### Margin-Kollaps verhindern

In diesem Beispiel umhüllen wir das zweite `<div>` in einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf das äußere `<div>` verwenden. Dieser neue BFC verhindert, dass die Margen des verschachtelten `<div>` mit denen des äußeren `<div>` kollabieren.

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
- [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
