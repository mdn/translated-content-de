---
title: Blockformatierungskontext
slug: Web/CSS/CSS_display/Block_formatting_context
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Ein **Blockformatierungskontext** (BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Es ist der Bereich, in dem das Layout von Blockboxen erfolgt und in dem Floats mit anderen Elementen interagieren.

Ein Blockformatierungskontext wird durch mindestens eines der folgenden Elemente erstellt:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} `absolute` oder `fixed` ist).
- Inline-Block-Elemente (Elemente mit {{cssxref("display", "display: inline-block")}}).
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}, was der Standard für HTML-Tabellenzellen ist).
- Tabellenbeschriftungen (Elemente mit {{cssxref("display", "display: table-caption")}}, was der Standard für HTML-Tabellenbeschriftungen ist).
- Anonyme Tabellenzellen, die implizit durch Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (welches der Standard für HTML-Tabellen, Tabellenzeilen, Tabellengruppen, Tabellenheader und Tabellenfußzeilen ist) oder `inline-table` erstellt wurden.
- Blockelemente, bei denen {{ cssxref("overflow") }} einen Wert hat, der weder `visible` noch `clip` ist.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- {{htmlelement("button")}}-Elemente und Schaltflächentypen von {{htmlelement("input")}}, die standardmäßig `display: flow-root` haben.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Flex-Elemente (direkte Kinder eines Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), sofern sie selbst keine {{Glossary("Flex_Container", "Flex")}}-, {{Glossary("Grid_Container", "Grid")}}- oder [Table](/de/docs/Web/CSS/CSS_table)-Container sind.
- Grid-Elemente (direkte Kinder eines Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), sofern sie selbst keine {{Glossary("Flex_Container", "Flex")}}-, {{Glossary("Grid_Container", "Grid")}}- oder [Table](/de/docs/Web/CSS/CSS_table)-Container sind.
- Mehrspalten-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elemente mit `column-count: 1`).
- {{cssxref("column-span", "column-span: all")}}, selbst wenn das `column-span: all`-Element nicht in einem Mehrspalten-Container enthalten ist.

Formatierungskontexte beeinflussen das Layout, weil ein Element, das einen neuen Blockformatierungskontext erstellt:

- interne Floats enthält.
- externe Floats ausschließt.
- [Rand-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) unterdrückt.

Flex- und Grid-Container, die durch das Setzen des {{ cssxref("display") }} eines Elements auf `flex`, `grid`, `inline-flex` oder `inline-grid` definiert sind, erstellen einen neuen Flex- oder Grid-Formatierungskontext. Diese ähneln dem Blockformatierungskontext mit der Ausnahme, dass es keine schwebenden Kinder innerhalb eines Flex- oder Grid-Containers gibt. Jedoch schließt auch dieser Formatierungskontext externe Floats aus und unterdrückt den Rand-Zusammenfall.

## Beispiele

Schauen wir uns ein paar dieser Fälle an, um den Effekt der Erstellung eines neuen BFCs zu sehen.

### Interne Floats enthalten

Im folgenden Beispiel haben wir schwebende Inhalte, die die gleiche Höhe haben wie der daneben liegende Inhalt. Wir haben ein schwebendes Element innerhalb eines `<div>` mit einem `border`. Der Inhalt dieses `<div>` ist neben dem schwebenden Element platziert. Da der Inhalt des Floats höher ist als der daneben liegende Inhalt, verläuft der Rand des `<div>` jetzt durch den Float. Wie im [Leitfaden zu flussgesteuerten und flussfreien Elementen](/de/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow) erklärt, wurde der Float aus dem Fluss genommen, sodass der `background` und der `border` des `<div>` nur den Inhalt und nicht den Float enthalten.

**Verwendung von `overflow: auto`**

Das Setzen von `overflow: auto` oder anderen Werten als dem Anfangswert von `overflow: visible` erstellt einen neuen BFC, der den Float enthält. Unser `<div>` wird nun zu einem Mini-Layout innerhalb unseres Layouts. Jedes Kindelement wird darin enthalten sein.

Das Problem bei der Verwendung von `overflow`, um einen neuen BFC zu erstellen, ist, dass die `overflow`-Eigenschaft eigentlich dazu gedacht ist, dem Browser mitzuteilen, wie mit überfließendem Inhalt umgegangen werden soll. Es kann vorkommen, dass unerwünschte Scrollleisten oder abgeschnittene Schatten entstehen, wenn Sie diese Eigenschaft ausschließlich zur Erstellung eines BFC verwenden. Außerdem ist es möglicherweise für zukünftige Entwickler nicht eindeutig ersichtlich, warum Sie `overflow` für diesen Zweck verwendet haben. Wenn Sie `overflow` nutzen, ist es sinnvoll, den Code zu kommentieren und zu erklären.

**Verwendung von `display: flow-root`**

Der Wert `display: flow-root` ermöglicht es uns, einen neuen BFC ohne andere potenziell problematische Nebeneffekte zu erstellen. Durch die Verwendung von `display: flow-root` auf dem enthaltenen Block wird ein neuer BFC erstellt.

Mit `display: flow-root;` auf dem `<div>` nimmt alles innerhalb dieses Containers an dem Blockformatierungskontext des Containers teil, und Floats ragen nicht aus der Unterseite des Elements heraus.

Der Wertname `flow-root` macht Sinn, wenn Sie verstehen, dass Sie etwas erstellen, das wie das `root`-Element (`<html>`-Element im Browser) wirkt, in Bezug darauf, wie es einen neuen Kontext für das Flusslayout innerhalb erstellt.

Dies ist die Standarddarstellung für {{htmlelement("button")}}-Elemente und Schaltflächentypen von {{htmlelement("input")}}, was bedeutet, dass Schaltflächen einen neuen BFC erstellen, solange ihr `display`-Wert nicht auf einen Wert gesetzt wird, der nicht automatisch einen neuen BFC erstellt.

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

Im folgenden Beispiel verwenden wir `display:flow-root` und Floats, um zwei nebeneinander stehende Boxen zu erstellen und zu demonstrieren, dass ein Element im normalen Fluss einen neuen BFC erstellt und nicht den Randabstand von Floats im gleichen Blockformatierungskontext wie das Element selbst überlappt.

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

### Rand-Zusammenfall verhindern

Sie können einen neuen BFC erstellen, um [Rand-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing) zwischen zwei benachbarten Elementen zu verhindern.

#### Beispiel für Rand-Zusammenfall

In diesem Beispiel haben wir zwei nebeneinander stehende {{HTMLElement("div")}}-Elemente, die jeweils einen vertikalen Rand von `10px` haben. Aufgrund des Rand-Zusammenfalls beträgt der vertikale Abstand zwischen ihnen `10px` und nicht die erwarteten `20px`.

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

#### Verhindern von Rand-Zusammenfall

In diesem Beispiel umhüllen wir das zweite `<div>` in ein äußeres `<div>` und erstellen einen neuen BFC, indem wir `overflow: hidden` auf dem äußeren `<div>` verwenden. Dieser neue BFC verhindert das Zusammenfallen der Ränder des verschachtelten `<div>` mit denen des äußeren `<div>`.

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
- [Rand-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Syntax für Wertedefinitionen](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
