---
title: Blockformatierungskontext
slug: Web/CSS/Guides/Display/Block_formatting_context
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Ein **Blockformatierungskontext** (Block Formatting Context, BFC) ist ein Teil der visuellen CSS-Darstellung einer Webseite. Er ist der Bereich, in dem Blockboxen angeordnet werden und in dem Floats mit anderen Elementen interagieren.

Ein Blockformatierungskontext entsteht durch mindestens eines der folgenden Elemente:

- Das Wurzelelement des Dokuments (`<html>`).
- Floats (Elemente, bei denen {{ cssxref("float") }} nicht `none` ist).
- Absolut positionierte Elemente (Elemente, bei denen {{ cssxref("position") }} den Wert `absolute` oder `fixed` hat).
- Inline-Blöcke (Elemente mit {{cssxref("display", "display: inline-block")}}). Dies ist der standardmäßige Anzeigetyp für {{htmlelement("button")}}-Elemente und {{htmlelement("input")}}-Elemente für Schaltflächen.
- Tabellenzellen (Elemente mit {{cssxref("display", "display: table-cell")}}; dies ist der Standardwert für HTML-Tabellenzellen).
- Tabellenbeschriftungen (Elemente mit {{cssxref("display", "display: table-caption")}}; dies ist der Standardwert für HTML-Tabellenbeschriftungen).
- Anonyme Tabellenzellen, die implizit durch Elemente mit {{cssxref("display", "display: table")}}, `table-row`, `table-row-group`, `table-header-group`, `table-footer-group` (die jeweiligen Standardwerte für HTML-Tabellen, Tabellenzeilen, Tabellenkörper, Tabellenköpfe und Tabellenfüße) oder `inline-table` erzeugt werden.
- Elemente mit {{cssxref("display", "display: flow-root")}}.
- Flex-Elemente (direkte Kindelemente eines Elements mit {{cssxref("display", "display: flex")}} oder `inline-flex`), sofern sie nicht selbst {{Glossary("Flex_Container", "Flex-")}}, {{Glossary("Grid_Container", "Grid-")}} oder [Tabellen-Container](/de/docs/Web/CSS/Guides/Table) sind.
- Grid-Elemente (direkte Kindelemente eines Elements mit {{cssxref("display", "display: grid")}} oder `inline-grid`), sofern sie nicht selbst {{Glossary("Flex_Container", "Flex-")}}, {{Glossary("Grid_Container", "Grid-")}} oder [Tabellen-Container](/de/docs/Web/CSS/Guides/Table) sind.
- Blockelemente, bei denen {{ cssxref("overflow") }} einen anderen Wert als `visible` oder `clip` hat.
- Elemente mit {{cssxref("contain", "contain: layout")}}, `content` oder `paint`.
- Abfragecontainer (Elemente, bei denen {{cssxref("container-type")}} nicht `normal` ist).
- Mehrspalten-Container (Elemente, bei denen {{ cssxref("column-count") }} oder {{ cssxref("column-width") }} nicht `auto` ist, einschließlich Elementen mit `column-count: 1`).
- Elemente mit {{cssxref("column-span", "column-span: all")}}, auch wenn sich das Element mit `column-span: all` nicht in einem Mehrspalten-Container befindet.

Formatierungskontexte beeinflussen das Layout, weil ein Element, das einen neuen Blockformatierungskontext erzeugt:

- interne Floats einschließt.
- externe Floats ausschließt.
- das [Zusammenfallen von Außenabständen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) verhindert.

Flex- und Grid-Container, die entstehen, wenn {{ cssxref("display") }} eines Elements auf `flex`, `grid`, `inline-flex` oder `inline-grid` gesetzt wird, erzeugen einen neuen Flex- beziehungsweise Grid-Formatierungskontext. Diese ähneln Blockformatierungskontexten. Innerhalb eines Flex- oder Grid-Containers können jedoch keine Kindelemente floaten. Diese Formatierungskontexte schließen ebenfalls externe Floats aus und verhindern das Zusammenfallen von Außenabständen.

## Beispiele

Sehen wir uns einige Beispiele an, um die Auswirkungen eines neuen BFC zu erkennen.

### Interne Floats einschließen

Im folgenden Beispiel befindet sich ein gefloatetes Element innerhalb eines `<div>` mit einem `border`. Der übrige Inhalt des `<div>` wird neben dem gefloateten Element angeordnet. Da das gefloatete Element höher ist als der Inhalt daneben, verläuft der Rahmen des `<div>` durch das Float. Wie im [Leitfaden zu Elementen innerhalb und außerhalb des normalen Flusses](/de/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow) erläutert, wurde das Float aus dem normalen Fluss genommen. Deshalb umschließen `background` und `border` des `<div>` nur den übrigen Inhalt, nicht aber das Float.

**Mit `overflow: auto`**

Wenn Sie `overflow: auto` oder einen anderen Wert als den Ausgangswert `overflow: visible` setzen, entsteht ein neuer BFC, der das Float einschließt. Unser `<div>` bildet nun ein eigenes kleines Layout innerhalb des übergeordneten Layouts. Alle seine Kindelemente bleiben darin eingeschlossen.

Das Problem bei der Verwendung von `overflow` zum Erzeugen eines neuen BFC ist, dass die Eigenschaft eigentlich festlegt, wie der Browser mit überlaufendem Inhalt umgehen soll. Wenn Sie diese Eigenschaft ausschließlich zum Erzeugen eines BFC verwenden, können unerwünschte Bildlaufleisten oder abgeschnittene Schatten auftreten. Außerdem ist für andere Entwickler möglicherweise nicht ersichtlich, warum Sie `overflow` zu diesem Zweck verwendet haben. Wenn Sie `overflow` verwenden, sollten Sie den Grund im Code kommentieren.

**Mit `display: flow-root`**

Mit dem Wert `display: flow-root` können Sie einen neuen BFC erzeugen, ohne andere potenziell problematische Nebeneffekte auszulösen. Wird `display: flow-root` auf den umschließenden Block angewendet, entsteht ein neuer BFC.

Mit `display: flow-root;` auf dem `<div>` nehmen alle Elemente innerhalb dieses Containers an dessen Blockformatierungskontext teil. Floats ragen dann nicht über den unteren Rand des Elements hinaus.

Der Name `flow-root` wird verständlich, wenn Sie das Element als eine Art `root`-Element betrachten (im Browser das `<html>`-Element): Es erzeugt einen neuen Kontext für das Flusslayout in seinem Inneren.

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

Im folgenden Beispiel erzeugen wir mit `display: flow-root` und Floats zwei nebeneinanderliegende Boxen. Sie zeigen, dass ein Element im normalen Fluss einen neuen BFC erzeugt und seine Außenabstandsbox keine Floats überlappt, die sich im selben Blockformatierungskontext wie das Element befinden.

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

### Das Zusammenfallen von Außenabständen verhindern

Sie können einen neuen BFC erzeugen, um das [Zusammenfallen von Außenabständen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing) zwischen zwei benachbarten Elementen zu verhindern.

#### Beispiel für zusammenfallende Außenabstände

In diesem Beispiel gibt es zwei benachbarte {{HTMLElement("div")}}-Elemente mit jeweils einem vertikalen Außenabstand von `10px`. Da die Außenabstände zusammenfallen, beträgt der vertikale Abstand zwischen ihnen `10px` statt der möglicherweise erwarteten `20px`.

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

#### Zusammenfallende Außenabstände verhindern

In diesem Beispiel umschließen wir das zweite `<div>` mit einem äußeren `<div>` und erzeugen durch `overflow: hidden` auf dem äußeren `<div>` einen neuen BFC. Dadurch fallen die Außenabstände des verschachtelten `<div>` nicht mit denen des äußeren `<div>` zusammen.

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
- [Zusammenfallen von Außenabständen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Anfangswerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Syntax zur Definition von Werten](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
