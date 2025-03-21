---
title: Block-Formatierungskontext
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Ein **Block-Formatierungskontext** (BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Es ist der Bereich, in dem das Layout von Block-Boxen erfolgt und in dem Gleitobjekte mit anderen Elementen interagieren.

Ein Block-Formatierungskontext wird durch mindestens eines der folgenden Elemente erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Gleitobjekte (Elemente, bei denen {{cssxref("float")}} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{cssxref("position")}} `absolute` oder `fixed` ist).
- Inline-Blöcke (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenüberschriften (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenüberschriften ist).
- Anonyme Tabellenzellen, die implizit durch die Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenzeilen, Tabellengruppen, Tabellenköpfe und Tabellenfußgruppen ist) oder `inline-table` erstellt werden.
- Blockelemente, bei denen {{cssxref("overflow")}} einen anderen Wert als `visible` und `clip` hat.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}}-Elemente und Button-{{htmlelement("input")}}-Typen, die standardmäßig `display: flow-root` verwenden.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), falls sie weder {{Glossary("Flex_Container", "flex")}}, noch {{Glossary("Grid_Container", "grid")}}, noch [table](/de/docs/Web/CSS/CSS_table)-Container selbst sind.
- Grid-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), falls sie weder {{Glossary("Flex_Container", "flex")}}, noch {{Glossary("Grid_Container", "grid")}}, noch [table](/de/docs/Web/CSS/CSS_table)-Container selbst sind.
- Mehrspaltige Container (Elemente, bei denen {{cssxref("column-count")}} oder {{cssxref("column-width")}} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, auch wenn das `column-span: all`-Element nicht von einem mehrspaltigen Container umgeben ist.

Formatierungskontexte beeinflussen das Layout, da ein Element, das einen neuen Block-Formatierungskontext erstellt:

- interne Gleitobjekte enthält.
- externe Gleitobjekte ausschließt.
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) unterdrückt.

Flex- und Grid-Container, definiert durch das Einstellen eines Elements ({{cssxref("display")}} auf `flex`, `grid`, `inline-flex` oder `inline-grid`), etablieren einen neuen Flex- oder Grid-Formatierungskontext. Diese sind ähnlich wie der Block-Formatierungskontext, mit dem Unterschied, dass es innerhalb eines Flex- oder Grid-Containers keine schwebenden Kinder gibt, aber diese Formatierungskontexte schließen externe Gleitobjekte aus und unterdrücken Margin Collapsing.

## Beispiele

Schauen wir uns einige dieser Beispiele an, um die Auswirkung der Erstellung eines neuen BFC zu sehen.

### Interne Gleitobjekte enthalten

Im folgenden Beispiel haben wir schwebenden Inhalt, der die gleiche Höhe wie der Inhalt daneben hat. Wir haben ein schwebendes Element innerhalb eines `<div>` mit einem angewendeten `border`. Der Inhalt dieses `<div>` hat sich neben das schwebende Element gesetzt. Da der Inhalt des schwebenden Elements höher ist als der nebenstehende Inhalt, verläuft der Rand des `<div>` jetzt durch den Float. Wie im [Leitfaden für In-Flow- und Out-of-Flow-Elemente](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Flow genommen, sodass der `background` und `border` des `<div>` nur den Inhalt enthält und nicht den Float.

**Verwendung von `overflow: auto`**

Die Einstellung auf `overflow: auto` oder andere Werte als den Initialwert von `overflow: visible` schafft einen neuen BFC, der den Float enthält. Unser `<div>` wird jetzt zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft dafür gedacht ist, dem Browser mitzuteilen, wie Sie mit überfließendem Inhalt umgehen möchten. Es gibt einige Gelegenheiten, bei denen unerwünschte Scrollbalken oder abgeschnittene Schatten auftreten, wenn Sie diese Eigenschaft rein zur Erstellung eines BFC verwenden. Darüber hinaus ist es möglicherweise für einen zukünftigen Entwickler nicht lesbar, da nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren und zu erklären.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, einen neuen BFC ohne andere potenziell problematische Nebeneffekte zu erstellen. Durch die Verwendung von `display: flow-root` auf dem umgebenden Block wird ein neuer BFC erstellt.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Block-Formatierungskontext dieses Containers teil, und Gleitobjekte werden nicht vom unteren Rand des Elements hervorstehen.

Der Wertename von `flow-root` ergibt Sinn, wenn Sie verstehen, dass Sie etwas erstellen, das wie das `root`-Element (`<html>`-Element im Browser) wirkt in Bezug darauf, wie es einen neuen Kontext für das Flow-Layout innerhalb erstellt.

Dies ist die Standarddarstellung für {{htmlelement("button")}}-Elemente und Button-{{htmlelement("input")}}-Typen, was bedeutet, dass Buttons einen neuen BFC erstellen, solange ihr `display`-Wert nicht auf einen Wert gesetzt ist, der nicht automatisch einen neuen BFC erstellt.

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

### Externe Gleitobjekte ausschließen

Im folgenden Beispiel verwenden wir `display: flow-root` und Gleitobjekte und erstellen zwei nebeneinanderliegende Boxen, die zeigen, dass ein Element im normalen Fluss einen neuen BFC erstellt und nicht die Margin-Box von Gleitobjekten im gleichen Block-Formatierungskontext wie das Element selbst überlappt.

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

### Verhindern von Margin Collapsing

Sie können einen neuen BFC erstellen, um [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Beispiel für Margin Collapsing

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund von Margin Collapsing beträgt die vertikale Lücke zwischen ihnen `10px`, nicht die `20px`, die wir erwarten könnten.

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

#### Verhindern von Margin Collapsing

In diesem Beispiel umhüllen wir das zweite `<div>` in einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf dem äußeren `<div>` verwenden. Dieser neue BFC verhindert, dass die Ränder des verschachtelten `<div>` mit denen des äußeren `<div>` zusammenfallen.

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
- [Initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value), [verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
