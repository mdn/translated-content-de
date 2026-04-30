---
title: Block-Formatting-Kontext
slug: Web/CSS/Guides/Display/Block_formatting_context
l10n:
  sourceCommit: 19497692665c3551b4097af5cd9f52f84564cefd
---

Ein **Block-Formatting-Kontext** (BFC) ist ein Teil des visuellen CSS-Renderings einer Webseite. Es ist der Bereich, in dem das Layout von Blockboxen stattfindet und in dem Floats mit anderen Elementen interagieren.

Ein Block-Formatting-Kontext wird durch mindestens eines der folgenden Elemente erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blöcke (Elemente mit {{cssxref("display", "display: inline-block")}}). Dies ist der Standardanzeigetyp für {{htmlelement("button")}} und Button-{{htmlelement("input")}} Elemente.
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenbeschriftungen (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenbeschriftungen ist).
- Anonyme Tabellenzellen, die implizit durch die Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenzeilen, Tabellengruppen, Tabellenheader und Tabellenfußzeilen ist) oder `inline-table` erstellt werden.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- Flex-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), wenn sie weder {{Glossary("Flex_Container", "Flex-Container")}} noch {{Glossary("Grid_Container", "Grid-Container")}} noch [Table](/de/docs/Web/CSS/Guides/Table) Container selbst sind.
- Grid-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), wenn sie weder {{Glossary("Flex_Container", "Flex-Container")}} noch {{Glossary("Grid_Container", "Grid-Container")}} noch [Table](/de/docs/Web/CSS/Guides/Table) Container selbst sind.
- Block-Elemente, bei denen {{ cssxref("overflow") }} einen Wert hat, der nicht `visible` und `clip` ist.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Abfrage-Container (Elemente, bei denen {{cssxref("container-type")}} nicht `normal` ist).
- Mehrspalten-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, auch wenn das `column-span: all` Element nicht von einem Mehrspalten-Container aufgenommen wird.

Formatting-Kontexte beeinflussen das Layout, da ein Element, das einen neuen Block-Formatting-Kontext bildet, folgendes bewirkt:

- Es enthält interne Floats.
- Es schließt externe Floats aus.
- Es unterdrückt das [Margin Collapsing](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

Flex- und Grid-Container, die durch das Setzen eines Elements auf ({{ cssxref("display") }} zu `flex`, `grid`, `inline-flex` oder `inline-grid`) definiert werden, bilden einen neuen Flex- oder Grid-Formatting-Kontext. Diese sind ähnlich wie ein Block-Formatting-Kontext, außer dass es innerhalb eines Flex- oder Grid-Containers keine schwebenden Kinder gibt, aber diese Formatting-Kontexte schließen externe Floats aus und unterdrücken das Margin Collapsing.

## Beispiele

Lassen Sie uns einen Blick auf ein paar dieser Beispiele werfen, um die Wirkung der Erstellung eines neuen BFC zu sehen.

### Innere Floats enthalten

Im folgenden Beispiel haben wir schwebenden Inhalt, der genauso hoch wie der danebenliegende Inhalt ist. Wir haben ein schwebendes Element innerhalb eines `<div>` mit einem `border`. Der Inhalt dieses `<div>` wurde neben dem schwebenden Element positioniert. Da der Inhalt des Floats höher ist als der danebenliegende Inhalt, läuft der Rand des `<div>` jetzt durch den Float. Wie im [Leitfaden zu in Flow und aus Flow Elementen](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss genommen, sodass der `background` und der `border` des `<div>` nur den Inhalt und nicht den Float enthalten.

**Verwendung von `overflow: auto`**

Das Setzen von `overflow: auto` oder anderen Werten als dem anfänglichen Wert von `overflow: visible` erstellt eine neue BFC, die den Float enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kind-Element wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um eine neue BFC zu erstellen, ist, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überlaufendem Inhalt umgehen möchten. Es gibt einige Gelegenheiten, bei denen Sie möglicherweise unerwünschte Bildlaufleisten oder abgeschnittene Schatten bekommen, wenn Sie diese Eigenschaft nur verwenden, um eine BFC zu erstellen. Darüber hinaus ist es möglicherweise nicht lesbar für einen zukünftigen Entwickler, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, eine neue BFC ohne andere potenziell problematische Nebeneffekte zu erstellen. Die Verwendung von `display: flow-root` auf dem enthaltenen Block erzeugt eine neue BFC.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Block-Formatting-Kontext dieses Containers teil, und Floats ragen nicht mehr aus dem unteren Ende des Elements heraus.

Der Wertname `flow-root` macht Sinn, wenn Sie verstehen, dass Sie etwas erstellen, das wie das `root`-Element (`<html>`-Element im Browser) in Bezug darauf handelt, wie es einen neuen Kontext für das Flusslayout innerhalb dessen erstellt.

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

Im folgenden Beispiel verwenden wir `display: flow-root` und Floats, um zwei nebeneinanderliegende Boxen zu erstellen, die demonstrieren, dass ein Element im normalen Fluss eine neue BFC etabliert und nicht über die Margin-Box von Floats im gleichen Block-Formatting-Kontext hinausläuft, wie das Element selbst.

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

### Verhindern von Margin Collapsing

Sie können eine neue BFC erstellen, um [Margin Collapsing](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) zwischen zwei benachbarten Elementen zu verhindern.

#### Beispiel für Margin Collapsing

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}} Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund des Margin Collapsings beträgt der vertikale Abstand zwischen ihnen `10px`, nicht die `20px`, die wir vielleicht erwarten würden.

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

#### Verhinderung von Margin Collapsing

In diesem Beispiel umhüllen wir das zweite `<div>` in einem äußeren `<div>`, und erstellen eine neue BFC durch die Verwendung von `overflow: hidden` auf dem äußeren `<div>`. Diese neue BFC verhindert, dass die Ränder des geschachtelten `<div>` mit denen des äußeren `<div>` zusammenfallen.

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

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Margin Collapsing](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used values](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Definitionssyntax von Werten](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
