---
title: Block-Formatting-Kontext
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Ein **Block-Formatting-Kontext** (BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Es ist der Bereich, in dem das Layout von Block-Boxen erfolgt und in dem Floats mit anderen Elementen interagieren.

Ein Block-Formatting-Kontext wird durch mindestens eines der folgenden Elemente erzeugt:

- Das Root-Element des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blocks (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenüberschriften (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenüberschriften ist).
- Anonyme Tabellenzellen, die implizit durch die Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenzeilen, Tabellenkörper, Tabellenköpfe und Tabellenfußzeilen ist) oder `inline-table` erstellt werden.
- Blockelemente, bei denen {{ cssxref("overflow") }} einen Wert ungleich `visible` und `clip` hat.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}}-Elemente und Schaltflächen {{htmlelement("input")}}-Typen mit dem Standard `display: flow-root`.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Items (direkte Nachkommen des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), wenn sie selbst weder {{Glossary("Flex_Container", "Flex")}} noch {{Glossary("Grid_Container", "Grid")}} noch [Tabellen](/de/docs/Web/CSS/Guides/Table) Container sind.
- Grid-Items (direkte Nachkommen des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), wenn sie selbst weder {{Glossary("Flex_Container", "Flex")}} noch {{Glossary("Grid_Container", "Grid")}} noch [Tabellen](/de/docs/Web/CSS/Guides/Table) Container sind.
- Multicol-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, selbst wenn das `column-span: all` Element nicht von einem Multicol-Container enthalten ist.

Formatierungskontexte beeinflussen das Layout, da ein Element, das einen neuen Block-Formatting-Kontext erzeugt, folgendes tun wird:

- Enthält interne Floats.
- Schließt externe Floats aus.
- Unterdrückt das [Zusammenfallen von Rändern](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

Flex- und Grid-Container, die durch die Einstellung von ({{ cssxref("display") }} auf `flex`, `grid`, `inline-flex` oder `inline-grid` definiert werden, etablieren einen neuen Flex- oder Grid-Formatting-Kontext. Diese sind ähnlich dem Block-Formatting-Kontext, außer dass es keine schwebenden Kinder innerhalb eines Flex- oder Grid-Containers gibt; jedoch schließen diese Formatierungskontexte externe Floats aus und unterdrücken das Zusammenfallen von Rändern.

## Beispiele

Schauen wir uns einige dieser Möglichkeiten an, um die Auswirkungen der Erstellung eines neuen BFC zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir schwimmende Inhalte, die die gleiche Höhe wie die Inhalte daneben haben. Wir haben ein schwebendes Element in einem `<div>` mit einem `border`. Der Inhalt dieses `<div>` wurde neben dem schwebenden Element platziert. Da der Inhalt des Floats höher ist als der Inhalt daneben, verläuft der Rand des `<div>` nun durch den Float. Wie im [Leitfaden zu in-flow und out-of-flow Elementen](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss entfernt, so dass der `background` und der `border` des `<div>` nur den Inhalt enthalten und nicht den Float.

**Verwendung von `overflow: auto`**

Das Setzen von `overflow: auto` oder anderen Werten als dem ursprünglichen Wert von `overflow: visible` erstellt einen neuen BFC, der den Float enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird in ihm enthalten sein.

Das Problem mit der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow` Eigenschaft dafür gedacht ist, dem Browser mitzuteilen, wie man mit überlaufenden Inhalten umgehen soll. Es gibt einige Gelegenheiten, bei denen unerwünschte Scrollbalken oder abgeschnittene Schatten auftreten, wenn diese Eigenschaft nur zur Erstellung eines BFC verwendet wird. Darüber hinaus könnte es für einen zukünftigen Entwickler möglicherweise nicht lesbar sein, da es nicht offensichtlich ist, warum `overflow` für diesen Zweck verwendet wurde. Wenn Sie `overflow` verwenden, ist es ratsam, den Code zu kommentieren, um dies zu erläutern.

**Verwendung von `display: flow-root`**

Der `display: flow-root` Wert erlaubt es uns, einen neuen BFC ohne andere potenziell problematische Nebeneffekte zu erstellen. Die Anwendung von `display: flow-root` auf den umschließenden Block erzeugt einen neuen BFC.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Block-Formatting-Kontext dieses Containers teil, und Floats werden nicht am unteren Rand des Elements herausragen.

Der Wertname `flow-root` ergibt Sinn, wenn Sie verstehen, dass Sie etwas erstellen, das wie das `root`-Element (`<html>`-Element im Browser) in Bezug auf die Erstellung eines neuen Kontexts für das Flusslayout darin agiert.

Dies ist das Standardrendering für {{htmlelement("button")}}-Elemente und Schaltflächen {{htmlelement("input")}}-Typen, was bedeutet, dass Schaltflächen einen neuen BFC erstellen, solange ihr `display`-Wert nicht auf einen Wert gesetzt ist, der nicht automatisch einen neuen BFC erstellt.

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

Im folgenden Beispiel verwenden wir `display: flow-root` und Floats und erstellen zwei nebeneinander liegende Boxen, die demonstrieren, dass ein Element im normalen Fluss einen neuen BFC etabliert und sich nicht mit dem Margenrahmen von Floats im gleichen Block-Formatting-Kontext wie das Element selbst überlappt.

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

### Verhindern von Randzusammenstürzen

Sie können einen neuen BFC erstellen, um [Randzusammenstürzen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Beispiel für Randzusammenstürzen

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund des Randzusammenstürzens beträgt der vertikale Abstand zwischen ihnen `10px`, nicht die `20px`, die wir erwarten könnten.

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

#### Verhindern des Randzusammenstürzens

In diesem Beispiel umwickeln wir das zweite `<div>` in einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf das äußere `<div>` anwenden. Dieser neue BFC verhindert, dass die Ränder des verschachtelten `<div>` mit denen des äußeren `<div>` zusammenfallen.

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
- [Randzusammenstürzen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
