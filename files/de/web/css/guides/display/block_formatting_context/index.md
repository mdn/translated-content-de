---
title: Block-Formatierungskontext
slug: Web/CSS/Guides/Display/Block_formatting_context
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Ein **Block-Formatierungskontext** (BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Er ist der Bereich, in dem das Layout von Blockboxen erfolgt und in dem Floats mit anderen Elementen interagieren.

Ein Block-Formatierungskontext wird durch mindestens eines der folgenden Elemente erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blöcke (Elemente mit {{cssxref("display", "display: inline-block")}}). Dies ist der Standard-Anzeigetyp für {{htmlelement("button")}} und Button-{{htmlelement("input")}}-Elemente.
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenbeschriftungen (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenbeschriftungen ist).
- Anonyme Tabellenzellen, die implizit durch die Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenreihen, Tabellenkörper, Tabellenköpfe und Tabellenfußzeilen ist) oder `inline-table` erstellt werden.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- Flex-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), wenn sie selbst weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/Guides/Table) Container sind.
- Grid-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), wenn sie selbst weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/Guides/Table) Container sind.
- Block-Elemente, bei denen {{ cssxref("overflow") }} einen anderen Wert als `visible` und `clip` hat.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Mehrspalten-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, auch wenn das `column-span: all`-Element nicht von einem Mehrspalten-Container umgeben ist.

Formatierungskontexte beeinflussen das Layout, da ein Element, das einen neuen Block-Formatierungskontext erstellt, Folgendes bewirken wird:

- interne Floats enthalten.
- externe Floats ausschließen.
- [Margin Collapsing](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) unterdrücken.

Flex- und Grid-Container, die durch Festlegen des {{ cssxref("display") }} eines Elements auf `flex`, `grid`, `inline-flex` oder `inline-grid` definiert werden, schaffen einen neuen Flex- oder Grid-Formatierungskontext. Diese sind ähnlich wie Block-Formatierungskontext, außer dass es keine Floating-Kinder innerhalb eines Flex- oder Grid-Containers gibt, aber diese Formatierungskontexte schließen externe Floats aus und unterdrücken Margin-Collapsing.

## Beispiele

Sehen wir uns einige davon an, um die Wirkung des Erstellens eines neuen BFC zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir Float-Inhalte, die die gleiche Höhe wie der danebenliegende Inhalt haben. Wir haben ein gefloatetes Element innerhalb eines `<div>` mit einem `border`. Der Inhalt dieses `<div>` hat sich neben dem gefloateten Element platziert. Da der Inhalt des Floats höher ist als der danebenliegende Inhalt, verläuft der Rahmen des `<div>` jetzt durch den Float. Wie im [Leitfaden zu in-Flow- und out-of-Flow-Elementen](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow) erklärt wird, wurde der Float aus dem Fluss genommen, sodass der `background` und `border` des `<div>` nur den Inhalt und nicht den Float enthalten.

**Verwendung von `overflow: auto`**

Die Einstellung `overflow: auto` oder anderer Werte als der Initialwert `overflow: visible` hat einen neuen BFC erstellt, der den Float enthält. Unser `<div>` wird jetzt zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, ist, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überfließendem Inhalt umgehen möchten. Es gibt einige Fälle, in denen Sie unerwünschte Scrollbars oder abgeschnittene Schatten erhalten, wenn Sie diese Eigenschaft rein zur Erstellung eines BFC verwenden. Darüber hinaus ist es für einen zukünftigen Entwickler möglicherweise nicht lesbar, da es nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um dies zu erklären.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, einen neuen BFC zu erstellen, ohne andere potenziell problematische Nebenwirkungen. Die Verwendung von `display: flow-root` auf dem enthaltenen Block erstellt einen neuen BFC.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Block-Formatierungskontext dieses Containers teil, und Floats werden nicht aus dem unteren Bereich des Elements herausragen.

Der Werte-Name `flow-root` ergibt Sinn, wenn Sie verstehen, dass Sie etwas erschaffen, das wie das `root`-Element (das `<html>`-Element im Browser) in Bezug auf die Erstellung eines neuen Kontextes für das Flusslayout innerhalb davon funktioniert.

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

Im folgenden Beispiel verwenden wir `display: flow-root` und Floats, um zwei nebeneinanderliegende Boxen zu erstellen, um zu zeigen, dass ein Element im normalen Fluss einen neuen BFC erstellt und sich nicht mit der Margenbox von Floats im gleichen Block-Formatierungskontext wie das Element selbst überschneidet.

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

### Margin Collapsing verhindern

Sie können einen neuen BFC erstellen, um [Margin Collapsing](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Beispiel für Margin Collapsing

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund von Margin Collapsing beträgt der vertikale Abstand zwischen ihnen `10px`, nicht die `20px`, die wir erwarten könnten.

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

In diesem Beispiel umgeben wir das zweite `<div>` mit einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf das äußere `<div>` anwenden. Dieser neue BFC verhindert, dass die Margen des geschachtelten `<div>` mit denen des äußeren `<div>` kollabieren.

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
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [benutzte Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
