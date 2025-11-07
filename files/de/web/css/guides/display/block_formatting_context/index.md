---
title: Blockformatierungskontext
slug: Web/CSS/Guides/Display/Block_formatting_context
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein **Blockformatierungskontext** (BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Es ist der Bereich, in dem das Layout von Blockboxen stattfindet und in dem das floaten mit anderen Elementen interagiert.

Ein Blockformatierungskontext wird durch mindestens eines der folgenden Elemente erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blöcke (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenüberschriften (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenüberschriften ist).
- Anonyme Tabellenzellen, die implizit von den Elementen mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenzeilen, Tabellenkörper, Tabellenköpfe und -füße ist) oder `inline-table` erstellt werden.
- Blockelemente, bei denen {{ cssxref("overflow") }} einen anderen Wert als `visible` und `clip` hat.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}} Elemente und Button-{{htmlelement("input")}}-Typen, die standardmäßig als `display: flow-root` gerendert werden.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Items (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), wenn sie selbst keine {{Glossary("Flex_Container", "Flex")}}-, {{Glossary("Grid_Container", "Grid")}}- oder [Table](/de/docs/Web/CSS/Guides/Table)-Container sind.
- Grid-Items (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), wenn sie selbst keine {{Glossary("Flex_Container", "Flex")}}-, {{Glossary("Grid_Container", "Grid")}}- oder [Table](/de/docs/Web/CSS/Guides/Table)-Container sind.
- Multicol-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, selbst wenn das Element `column-span: all` nicht von einem Multicol-Container eingeschlossen ist.

Formatierungskontexte beeinflussen das Layout, da ein Element, das einen neuen Blockformatierungskontext erstellt, folgende Auswirkungen hat:

- Interne Floats enthalten.
- Externe Floats ausschließen.
- [Marginabgleich](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) unterdrücken.

Flex- und Grid-Container, die durch das Festlegen eines Elements auf ({{ cssxref("display") }} mit `flex`, `grid`, `inline-flex` oder `inline-grid` definiert sind, erstellen einen neuen Flex- oder Grid-Formatierungskontext. Diese sind ähnlich dem Blockformatierungskontext, mit der Ausnahme, dass es keine schwebenden Kinder innerhalb eines Flex- oder Grid-Containers gibt, diese Formatierungskontexte jedoch externe Floats ausschließen und Marginabgleich unterdrücken.

## Beispiele

Werfen wir einen Blick auf einige dieser Beispiele, um die Auswirkungen der Erstellung eines neuen BFC zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir ein floatendes Inhaltselement, das die gleiche Höhe wie das danebenliegende Inhaltselement hat. Wir haben ein schwebendes Element in einem `<div>`, auf das ein `border` angewendet wurde. Der Inhalt dieses `<div>` bewegt sich entlang des schwebenden Elements. Da der Inhalt des Floats größer ist als der des danebenliegenden Inhalts, verläuft der Rand des `<div>` nun durch den Float. Wie im [Leitfaden zu enthaltenen und nicht enthaltenen Elementen](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow) erklärt wird, wurde der Float aus dem Fluss entfernt, sodass der `background` und der `border` des `<div>` nur den Inhalt und nicht den Float umfassen.

**Verwendung von `overflow: auto`**

Das Setzen von `overflow: auto` oder andere Werte als der anfängliche Wert `overflow: visible` erstellt einen neuen BFC, der den Float enthält. Unser `<div>` wird jetzt zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, ist, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie überlaufender Inhalt behandelt werden soll. Es gibt einige Gelegenheiten, bei denen unerwünschte Scrollbars oder abgeschnittene Schatten auftreten können, wenn diese Eigenschaft ausschließlich zur Erstellung eines BFC verwendet wird. Außerdem ist es möglicherweise für einen zukünftigen Entwickler nicht lesbar, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

**Verwendung von `display: flow-root`**

Der `display: flow-root`-Wert ermöglicht es uns, einen neuen BFC ohne weitere potenziell problematische Nebeneffekte zu erstellen. Die Verwendung von `display: flow-root` auf dem enthaltenen Block erstellt einen neuen BFC.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Blockformatierungskontext dieses Containers teil, und Floats werden nicht unten aus dem Element herausragen.

Der Wertname `flow-root` ergibt Sinn, wenn Sie verstehen, dass Sie etwas erstellen, das wie das `root`-Element (`<html>`-Element im Browser) wirkt, in dem Sinne, wie es einen neuen Kontext für das Layout schafft.

Dies ist das Standardrendering für {{htmlelement("button")}}-Elemente und Button-{{htmlelement("input")}}-Typen, was bedeutet, dass Button-Elemente einen neuen BFC erstellen, solange ihr `display`-Wert nicht so gesetzt wird, dass kein neuer BFC automatisch erstellt wird.

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

Im folgenden Beispiel verwenden wir `display: flow-root` und Floats, um zwei nebeneinanderliegende Boxen zu erstellen, die zeigen, dass ein Element im normalen Fluss einen neuen BFC erstellt und nicht die Margin-Box von Floats im selben Blockformatierungskontext, wie das Element selbst, überschneidet.

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

### Marginabgleich verhindern

Sie können einen neuen BFC erstellen, um [Marginabgleich](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Marginabgleich-Beispiel

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund des Marginabgleichs ist der vertikale Abstand zwischen ihnen `10px`, nicht die `20px`, die wir erwarten könnten.

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

#### Marginabgleich verhindern

In diesem Beispiel umschließen wir das zweite `<div>` in einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf das äußere `<div>` anwenden. Dieser neue BFC verhindert, dass die Ränder des verschachtelten `<div>` mit denen des äußeren `<div>` kollidieren.

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
- {{Glossary("Layout_mode", "Layoutmodi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Marginabgleich](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Initiale](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
