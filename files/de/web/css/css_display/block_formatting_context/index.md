---
title: Block Formatting Context
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{CSSRef}}

Ein **Block Formatting Context** (BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Es ist der Bereich, in dem das Layout der Blockboxen stattfindet und in dem Floats mit anderen Elementen interagieren.

Ein Block Formatting Context wird durch mindestens eines der folgenden Elemente erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{cssxref("float")}} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{cssxref("position")}} `absolute` oder `fixed` ist).
- Inline-Blöcke (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was die Standardeinstellung für HTML-Tabellenzellen ist).
- Tabellenüberschriften (Elemente mit {{cssxref("display", "display: table-caption")}}, was die Standardeinstellung für HTML-Tabellenüberschriften ist).
- Anonyme Tabellenzellen, die implizit durch die Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was die Standardeinstellung für HTML-Tabellen, Tabellenzeilen, Tabellenkörper, Tabellenköpfe und Tabellenfüße ist) oder `inline-table` erstellt werden.
- Blockelemente, bei denen {{cssxref("overflow")}} einen anderen Wert als `visible` oder `clip` hat.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}}-Elemente und Button-{{htmlelement("input")}}-Typen, die standardmäßig `display: flow-root` haben.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Items (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), wenn sie selbst keine [flex](/de/docs/Glossary/Flex_Container)-, [grid](/de/docs/Glossary/Grid_Container)- oder [table](/de/docs/Web/CSS/CSS_table)-Container sind.
- Grid-Items (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), wenn sie selbst keine [flex](/de/docs/Glossary/Flex_Container)-, [grid](/de/docs/Glossary/Grid_Container)- oder [table](/de/docs/Web/CSS/CSS_table)-Container sind.
- Multicol-Container (Elemente, bei denen {{cssxref("column-count")}} oder {{cssxref("column-width")}} nicht `auto` ist, einschließlich Elementen mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, auch wenn das `column-span: all`-Element nicht von einem Multicol-Container umschlossen ist.

Formatierungskontexte beeinflussen das Layout, da ein Element, das einen neuen Block Formatting Context erstellt:

- interne Floats enthält.
- externe Floats ausschließt.
- das [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) unterdrückt.

Flex- und Grid-Container, definiert durch das Setzen des Elements auf ({{cssxref("display")}} `flex`, `grid`, `inline-flex` oder `inline-grid`, schaffen einen neuen Flex- oder Grid-Formatierungskontext. Diese sind dem Block Formatting Context ähnlich, außer dass es keine schwebenden Kinder innerhalb eines Flex- oder Grid-Containers gibt, aber diese Formatierungskontexte schließen externe Floats aus und unterdrücken das Margin Collapsing.

## Beispiele

Lassen Sie uns einige dieser Beispiele betrachten, um die Auswirkungen der Erstellung eines neuen BFC zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir schwebenden Inhalt, der die gleiche Höhe wie der danebenliegende Inhalt hat. Wir haben ein schwebendes Element in einem `<div>` mit einem `border`, der darauf angewendet wird. Der Inhalt dieses `<div>` ist neben dem schwebenden Element geschwebt. Da der Inhalt des schwebenden Elements höher ist als der des danebenliegenden Inhalts, verläuft der Rand des `<div>` nun durch den Float. Wie im [Leitfaden für In-Flow- und Out-of-Flow-Elemente](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss genommen, sodass der `background` und der `border` des `<div>` nur den Inhalt und nicht den Float enthalten.

**Verwendung von `overflow: auto`**

Das Festlegen von `overflow: auto` oder anderen Werten als dem Anfangswert `overflow: visible` erstellt einen neuen BFC, der den Float enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, ist, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überlappendem Inhalt umgehen möchten. Es gibt einige Gelegenheiten, in denen Sie unerwünschte Bildlaufleisten oder abgeschnittene Schatten bemerken, wenn Sie diese Eigenschaft nur verwenden, um einen BFC zu erstellen. Darüber hinaus ist es möglicherweise für einen zukünftigen Entwickler nicht lesbar, da es nicht offensichtlich ist, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie `overflow` verwenden, ist es eine gute Idee, den Code zu kommentieren, um eine Erklärung zu geben.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, einen neuen BFC ohne andere potenziell problematische Nebeneffekte zu erstellen. Die Verwendung von `display: flow-root` auf dem umgebenden Block erzeugt einen neuen BFC.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Block Formatting Context dieses Containers teil, und Floats ragen nicht aus dem unteren Bereich des Elements heraus.

Der Wertname `flow-root` macht Sinn, wenn Sie verstehen, dass Sie etwas erstellen, das wie das `root`-Element (das `<html>`-Element im Browser) in Bezug darauf handelt, wie es einen neuen Kontext für das Flusslayout darin erstellt.

Dies ist die Standardeinstellung für die Darstellung von {{htmlelement("button")}}-Elementen und Button-{{htmlelement("input")}}-Typen, was bedeutet, dass Buttons einen neuen BFC erstellen, solange ihr `display`-Wert nicht auf einen Wert gesetzt wird, der nicht automatisch einen neuen BFC erstellt.

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

Im folgenden Beispiel verwenden wir `display:flow-root` und Floats, um zwei nebeneinander liegende Kästchen zu erstellen, die zeigen, dass ein Element im normalen Fluss einen neuen BFC bildet und sich nicht mit dem Randkasten von Floats im gleichen Block Formatting Context überschneidet wie das Element selbst.

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

Sie können einen neuen BFC erstellen, um das [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Beispiel für Margin Collapsing

In diesem Beispiel haben wir zwei angrenzende {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund des Margin Collapsing ist der vertikale Abstand zwischen ihnen `10px` und nicht die `20px`, die wir erwarten könnten.

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

In diesem Beispiel umwickeln wir das zweite `<div>` mit einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf das äußere `<div>` anwenden. Dieser neue BFC verhindert, dass die Ränder des verschachtelten `<div>`s mit denen des äußeren `<div>`s zusammenfallen.

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

- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete Werte](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
