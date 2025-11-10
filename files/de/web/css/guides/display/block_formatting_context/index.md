---
title: Blockformatierungskontext
slug: Web/CSS/Guides/Display/Block_formatting_context
l10n:
  sourceCommit: ab05178c343ca7ea0f8ac860dc84e3521397a070
---

Ein **Blockformatierungskontext** (BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Es ist der Bereich, in dem das Layout von Blockboxen stattfindet und in dem Floats mit anderen Elementen interagieren.

Ein Blockformatierungskontext wird durch mindestens eines der folgenden Elemente erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Blocks (Elemente mit {{cssxref("display", "display: inline-block")}}). Dies ist der Standardanzeigetyp für {{htmlelement("button")}} und {{htmlelement("input")}}-Button-Elemente.
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenüberschriften (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenüberschriften ist).
- Anonyme Tabellenzellen, die implizit durch Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (was der Standard für HTML-Tabellen, Tabellenzeilen, Tabellenkörper, Tabellenköpfe und Tabellenfußzeilen ist) oder `inline-table` erstellt werden.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- Flex-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), wenn sie selbst weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/Guides/Table) Container sind.
- Grid-Elemente (direkte Kinder des Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), wenn sie selbst weder {{Glossary("Flex_Container", "flex")}} noch {{Glossary("Grid_Container", "grid")}} noch [table](/de/docs/Web/CSS/Guides/Table) Container sind.
- Block-Elemente, bei denen {{ cssxref("overflow") }} einen anderen Wert als `visible` und `clip` hat.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Mehrspalten-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, selbst wenn das `column-span: all`-Element nicht von einem Mehrspalten-Container umgeben ist.

Formatierungskontexte beeinflussen das Layout, weil ein Element, das einen neuen Blockformatierungskontext erstellt, Folgendes bewirkt:

- enthält interne Floats.
- schließt externe Floats aus.
- unterdrückt [Rand-Zusammenfallen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

Flex- und Grid-Container, definiert durch das Setzen des `display`-Werts eines Elements auf `flex`, `grid`, `inline-flex` oder `inline-grid`, erstellen einen neuen Flex- oder Gridformatierungskontext. Diese sind ähnlich wie der Blockformatierungskontext, außer dass es keine schwebenden Kindelemente innerhalb eines Flex- oder Grid-Containers gibt, aber diese Formatierungskontexte schließen externe Floats aus und unterdrücken Rand-Zusammenfallen.

## Beispiele

Lassen Sie uns einige dieser Fälle ansehen, um die Wirkung der Erstellung eines neuen BFC zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir Float-Inhalt, der die gleiche Höhe wie der daneben liegende Inhalt hat. Wir haben ein schwebendes Element in einem `<div>` mit einem `border` angewendet. Der Inhalt dieses `<div>` ist neben dem schwebenden Element angeordnet. Da der Inhalt des Floats höher ist als der daneben liegende Inhalt, verläuft der Rand des `<div>` jetzt durch den Float. Wie im [Leitfaden zu In-Flow- und Out-of-Flow-Elementen](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss herausgenommen, sodass der `background` und der `border` des `<div>` nur den Inhalt enthalten und nicht den Float.

**Verwendung von `overflow: auto`**

Das Setzen von `overflow: auto` oder anderen Werten als dem Anfangswert von `overflow: visible` erstellt einen neuen BFC, der den Float enthält. Unser `<div>` wird jetzt zu einem Mini-Layout in unserem Layout. Jedes Kindelement wird darin enthalten sein.

Das Problem mit der Verwendung von `overflow`, um einen neuen BFC zu erstellen, besteht darin, dass die `overflow`-Eigenschaft dazu gedacht ist, dem Browser mitzuteilen, wie Sie mit überlaufendem Inhalt umgehen möchten. Es gibt einige Fälle, in denen Sie unerwünschte Scrollbars oder abgeschnittene Schatten erhalten, wenn Sie diese Eigenschaft nur verwenden, um einen BFC zu erstellen. Außerdem könnte es für einen zukünftigen Entwickler potentiell nicht lesbar sein, da es möglicherweise nicht offensichtlich ist, warum Sie `overflow` zu diesem Zweck verwendet haben. Wenn Sie `overflow` verwenden, empfiehlt es sich, den Code zu kommentieren, um dies zu erklären.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, einen neuen BFC zu erstellen, ohne andere potenziell problematische Nebenwirkungen. Durch die Verwendung von `display: flow-root` auf dem enthaltenden Block wird ein neuer BFC erstellt.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers am Blockformatierungskontext dieses Containers teil und Floats werden nicht mehr aus dem unteren Bereich des Elements herausragen.

Der Wertname `flow-root` ergibt Sinn, wenn Sie verstehen, dass Sie etwas erstellen, das wie das `root`-Element (`<html>`-Element im Browser) handelt, in Bezug darauf, wie es einen neuen Kontext für das Flusslayout innerhalb davon erstellt.

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

Im folgenden Beispiel verwenden wir `display: flow-root` und Floats und erstellen zwei nebeneinander liegende Boxen, um zu demonstrieren, dass ein Element im normalen Fluss einen neuen BFC etabliert und die Randbox eines jeden Floats in demselben Blockformatierungskontext wie das Element selbst nicht überlappt.

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

### Rand-Zusammenfallen verhindern

Sie können einen neuen BFC erstellen, um [Rand-Zusammenfallen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) zwischen zwei benachbarten Elementen zu vermeiden.

#### Beispiel für Rand-Zusammenfallen

In diesem Beispiel haben wir zwei benachbarte {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund von Rand-Zusammenfallen beträgt der vertikale Abstand zwischen ihnen `10px`, nicht die erwarteten `20px`.

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

#### Rand-Zusammenfallen verhindern

In diesem Beispiel umschließen wir das zweite `<div>` in einem äußeren `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf das äußere `<div>` anwenden. Dieser neue BFC verhindert, dass die Ränder des verschachtelten `<div>` mit denen des äußeren `<div>` zusammenfallen.

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
- [Rand-Zusammenfallen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Initiale](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendete](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Wertdefinition-Syntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
