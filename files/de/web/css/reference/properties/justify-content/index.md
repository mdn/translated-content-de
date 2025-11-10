---
title: justify-content
slug: Web/CSS/Reference/Properties/justify-content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die [CSS](/de/docs/Web/CSS) **`justify-content`** Eigenschaft definiert, wie der Browser den Raum zwischen und um die Inhaltselemente entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten zeigt einige Werte von `justify-content` unter Verwendung des Grid-Layouts.

{{InteractiveExample("CSS Demo: justify-content")}}

```css interactive-example-choice
justify-content: start;
```

```css interactive-example-choice
justify-content: center;
```

```css interactive-example-choice
justify-content: space-between;
```

```css interactive-example-choice
justify-content: space-around;
```

```css interactive-example-choice
justify-content: space-evenly;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 220px;
  display: grid;
  grid-template-columns: 60px 60px;
  grid-auto-rows: 40px;
  row-gap: 10px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntax

```css
/* Positional alignment */
justify-content: center;
justify-content: start;
justify-content: end;
justify-content: flex-start;
justify-content: flex-end;
justify-content: left;
justify-content: right;

/* Normal alignment */
justify-content: normal;

/* Distributed alignment */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
justify-content: stretch;

/* Overflow alignment (for positional alignment only)*/
justify-content: safe center;
justify-content: unsafe center;

/* Global values */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;
```

### Werte

- `start`

  - : Die Elemente sind flächenbündig zueinander an der Startkante des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `end`

  - : Die Elemente sind flächenbündig zueinander an der Endkante des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `flex-start`

  - : Die Elemente sind flächenbündig zueinander an der Startkante des Ausrichtungscontainers auf der Haupt-Startseite des Flex-Containers gepackt.
    Dies gilt nur für Elemente des Flex-Layouts. Bei Elementen, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`

  - : Die Elemente sind flächenbündig zueinander an der Endkante des Ausrichtungscontainers auf der Haupt-Endseite des Flex-Containers gepackt.
    Dies gilt nur für Elemente des Flex-Layouts. Bei Elementen, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`

  - : Die Elemente sind flächenbündig zueinander an der Mitte des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `left`

  - : Die Elemente sind flächenbündig zueinander an der linken Kante des Ausrichtungscontainers gepackt. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, wie etwa bei [`flex-direction: column;`](/de/docs/Web/CSS/Reference/Properties/flex-direction), verhält sich dieser Wert wie `start`.

- `right`

  - : Die Elemente sind flächenbündig zueinander an der rechten Kante des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Grid-Container) oder der Hauptachse (in einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`

  - : Verhält sich wie `stretch`, außer im Fall von Multicolumn-Containern mit einer nicht-`auto` [`column-width`](/de/docs/Web/CSS/Reference/Properties/column-width), wobei die Spalten ihre angegebene `column-width` beibehalten, anstatt sich auszudehnen, um den Container zu füllen. Da `stretch` sich in Flex-Containern wie `start` verhält, verhält sich `normal` auch wie `start`.

- `space-between`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist flächenbündig mit der Haupt-Startkante, und das letzte Element ist flächenbündig mit der Haupt-Endkante.

- `space-around`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der Freiraum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente. Gibt es nur ein Element, wird es zentriert.

- `space-evenly`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der Haupt-Startkante und dem ersten Element sowie der Haupt-Endkante und dem letzten Element ist genau gleich.

- `stretch`

  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner als die Größe des Ausrichtungscontainers ist, werden alle `auto`-Größenelemente gleich (nicht proportional) vergrößert, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegte Beschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Hauptachse füllt.

    > [!NOTE]
    > Bei [Flexboxen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) verhält sich der Wert `stretch` wie `flex-start` oder `start`. Dies liegt daran, dass in Flexboxen die Dehnung mithilfe der {{CSSXref("flex-grow")}} Eigenschaft gesteuert wird.

- `safe`

  - : Wenn das Element den Ausrichtungscontainer überschreitet, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` ist. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`
  - : Auch wenn das Element den Ausrichtungscontainer überschreitet, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, das die gewünschte Ausrichtung zugunsten der Vermeidung von Überlauf ignoriert.

## Beschreibung

Definiert im [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/Guides/Box_alignment) Modul, gilt `justify-content` für Multicol-Container, Flex-Container und Grid-Container. Die Eigenschaft gilt nicht für Block-Container und hat auf diese keine Auswirkung.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}} Eigenschaft, aber nicht alle! `justify-content` ist nicht in die Baseline-Ausrichtung involviert und nimmt daher keine Baseline-Werte an.

In [Flex-Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout) definiert die Eigenschaft, wie positiver Freiraum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft betrifft den Raum zwischen Elementen in einer Zeile, nicht den Raum zwischen Zeilen. Die Ausrichtung erfolgt, nachdem die Längen und automatischen Ränder angewendet wurden, was bedeutet, dass, wenn ein oder mehrere Flex-Elemente in einer Zeile einen {{cssxref("flex-grow")}} Faktor größer als `0` haben, die Eigenschaft keine Auswirkungen hat, da kein Raum entlang dieser Linie zum Verteilen vorhanden ist. Da das Strecken entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch` Wert wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) verteilt diese Eigenschaft den verfügbaren Raum zwischen oder um Grid-Spalten, nicht Grid-Elemente. Ist der Grid-Container größer als das Grid selbst, kann die `justify-content` Eigenschaft verwendet werden, um das Grid entlang der Inline-Achse zu rechtfertigen und die Grid-Spalten auszurichten.

Grid `auto`-Spurgrößen (und nur `auto`-Spurgrößen) können von den Eigenschaften `align-content` und `justify-content` gedehnt werden. Daher wird standardmäßig eine `auto` dimensionierte Spur jeden verbleibenden Raum im Grid-Container einnehmen. Da die Inline-Größe des Grids kleiner als die Inline-Größe des Grid-Containers sein muss, um einen Raum zum Verteilen zu haben, hat die Eigenschaft in diesem Fall keine Auswirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Grid-Beispiel

In diesem Beispiel haben wir ein Grid, das schmaler als sein Grid-Container ist, und wir verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Grid-Spalten zu verteilen.

#### HTML

Der {{htmlelement("section")}} Container, unser künftiger Grid-Container, hat 16 eingebettete {{htmlelement("div")}}s, die zu Grid-Elementen werden.

```html
<section class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
  <div>M</div>
  <div>N</div>
  <div>O</div>
  <div>P</div>
</section>
```

#### CSS

```css hidden
.container {
  margin: 5px;
  border: 1px solid;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

Wir setzen die Containerbreite auf `500px` und spezifizieren drei Spalten, jede `80px` breit, was bedeutet, dass `260px` an verfügbarem Raum zwischen oder um sie herum zu verteilen ist. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass es `65px` Platz vor, zwischen und nach jeder Spalte geben wird.

Wir setzen unterschiedliche Breiten (und Hintergrundfarben), um zu demonstrieren, wie die Rechtfertigung auf die Spalten angewendet wird.

```css
.container {
  display: grid;
  grid: auto-flow / repeat(3, 80px);
  width: 500px;
  justify-content: space-evenly;
}

div {
  background-color: pink;
  width: 80px;
}

div:nth-of-type(n + 9) {
  width: 35px;
  background-color: lightgreen;
}

div:nth-last-of-type(3) {
  width: 250px;
  background-color: lightblue;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic grid example", "100%", 220)}}

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keine Wirkung auf die Elemente oder die Ausrichtung in Grid-Bereichen hat. Grid-Elemente, selbst diejenigen, die ihre Grid-Zelle überschreiten, beeinflussen die Spaltenrechtfertigung nicht.

### Das sichere Schlüsselwort

Dieses Beispiel demonstriert das `safe` Schlüsselwort. Wir spezifizieren vier zentrierte Flex-Elemente, die nicht umgebrochen werden sollen und daher ihren einzigen Flex-Line-Container überschreiten. Indem wir `safe` zu `center` in der `justify-content` Eigenschaft hinzufügen, verhält sich der überlaufende Inhalt so, als wäre der Ausrichtungsmodus `start`.

```html hidden
<p><code>justify-content: center;</code></p>
<section class="container safe">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</section>
<p><code>justify-content: safe center;</code></p>
<section class="container safe-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</section>
<p><code>justify-content: safe center;</code> with 3 items</p>
<section class="container safe-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</section>
```

```css hidden
.container {
  margin: 5px auto;
  border: 1px dashed;
  box-sizing: border-box;
  background-color: lightblue;
}

div {
  line-height: 1em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
  background-color: pink;
}
```

Der Container ist auf `center` gesetzt, wobei jeder Container außer dem ersten das `safe` Schlüsselwort hinzugefügt hat:

```css
.container {
  align-items: baseline;
  display: flex;
  width: 350px;
  height: 2em;
}

.safe {
  justify-content: center;
}

.safe-center {
  justify-content: safe center;
}

div {
  flex: 0 0 100px;
}
```

#### Ergebnis

{{EmbedLiveSample("the safe keyword", "100%", 260)}}

Wenn ein Element den Ausrichtungscontainer überschreitet, verhält sich der Ausrichtungsmodus mit `safe` als `start` und die `center`-Ausrichtung wird nicht umgesetzt. Das `safe` Schlüsselwort hat keine Auswirkung, wenn die Elemente den Container nicht überschreiten.

### Visualisierung der Verteilung von Flex-Elementen

Dieses Beispiel umfasst ein mehrzeiliges, umbruchfähiges Flex-Layout. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor, der den gesamten verfügbaren Freiraum in der ersten Flex-Linie verbraucht.

#### CSS

```css hidden
#container {
  margin: 5px auto;
  border: 1px dashed black;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

```css
#container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between; /* Can be changed in the live sample */
  width: 510px;
}

div {
  line-height: 2em;
  flex: 0 0 120px;
  background-color: pink;
}

div:nth-of-type(2) {
  flex-grow: 1;
  background-color: yellow;
}

div:nth-of-type(n + 9) {
  flex: 0 0 35px;
  background-color: lightgreen;
}
div:last-of-type {
  flex: 0 0 300px;
  background-color: lightblue;
}
```

```html hidden
<section id="container">
  <div>A</div>
  <div>GROW</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
  <div>M</div>
  <div>N</div>
  <div>O</div>
  <div>P</div>
</section>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
const justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", (evt) => {
  document.getElementById("container").style.justifyContent = evt.target.value;
});
```

#### Ergebnis

{{EmbedLiveSample("Visualizing_flex_item_distribution", "100%", 180)}}

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die verschiedenen `justify-content` Schlüsselwortwerte zu visualisieren. Da ein Element in der ersten Zeile wachsen kann, ist kein verfügbarer Raum in dieser Zeile vorhanden, den die `justify-content` Eigenschaft verteilen könnte. Mit dem `space-between` Wert ist das erste Element jeder Zeile flächenbündig mit der Haupt-Startkante und das letzte Element flächenbündig mit der Haupt-Endkante. Hat eine Linie nur ein Element, wird es mit der Haupt-Startkante ausgerichtet (wie in der letzten Zeile zu sehen). Dies ist nicht der Fall für andere `space-*` Werte, wie `space-evenly` und `space-around`, die einzeilige Flex-Linien zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte des Flexbox-Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS Box-Ausrichtungs](/de/docs/Web/CSS/Guides/Box_alignment) Modul
