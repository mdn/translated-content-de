---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-content`** Eigenschaft definiert, wie der Browser den Platz zwischen und um Inhaltselemente entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Raster- und Mehrspalten-Containern verteilt.

Das interaktive Beispiel unten demonstriert einige `justify-content` Werte unter Verwendung des Rasterlayouts.

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
  - : Die Elemente werden bündig zueinander zur Startkante des Ausrichtungscontainers entlang der Hauptachse ausgerichtet.

- `end`
  - : Die Elemente werden bündig zueinander zur Endkante des Ausrichtungscontainers entlang der Hauptachse ausgerichtet.

- `flex-start`
  - : Die Elemente werden bündig zueinander zur Startkante des Ausrichtungscontainers auf der main-start Seite des Flex-Containers ausgerichtet.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`
  - : Die Elemente werden bündig zueinander zur Endkante des Ausrichtungscontainers auf der main-end Seite des Flex-Containers ausgerichtet.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`
  - : Die Elemente werden bündig zueinander zur Mitte des Ausrichtungscontainers entlang der Hauptachse ausgerichtet.

- `left`
  - : Die Elemente werden bündig zueinander zur linken Kante des Ausrichtungscontainers ausgerichtet. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse ist, wie etwa wenn [`flex-direction: column;`](/de/docs/Web/CSS/flex-direction) gesetzt ist, verhält sich dieser Wert wie `start`.

- `right`
  - : Die Elemente werden bündig zueinander zur rechten Kante des Ausrichtungscontainers in der entsprechenden Achse ausgerichtet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Raster-Container) oder der Hauptachse (in einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`
  - : Verhält sich wie `stretch`, außer im Fall von Mehrspalten-Containern mit einer nicht-`auto` [`column-width`](/de/docs/Web/CSS/column-width), in dem Fall nehmen die Spalten ihre spezifizierte `column-width` an, anstatt sich zu dehnen, um den Container zu füllen. Da `stretch` in Flex-Containern wie `start` funktioniert, verhält sich `normal` auch wie `start`.

- `space-between`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist bündig mit der main-start Kante, und das letzte Element ist bündig mit der main-end Kante.

- `space-around`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der main-start Kante und dem ersten Element, sowie der main-end Kante und dem letzten Element ist genau gleich.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner ist als die Größe des Ausrichtungscontainers, wird die Größe der `auto`-großen Elemente gleichmäßig (nicht proportional) erhöht, unter Berücksichtigung der durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Hauptachse füllt.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) verhält sich der `stretch`-Wert wie `flex-start` oder `start`. Dies liegt daran, dass in Flexboxen das Dehnen mit der {{CSSXref("flex-grow")}} Eigenschaft gesteuert wird.

- `safe`
  - : Wenn das Element den Ausrichtungscontainer überläuft, wird es ausgerichtet, als wäre der Ausrichtungsmodus `start`. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`
  - : Selbst wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, das die gewünschte Ausrichtung ignoriert, um Überlauf zu verhindern.

## Beschreibung

Definiert im [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul, gilt `justify-content` für Mehrspalten-Container, Flex-Container und Raster-Container. Die Eigenschaft gilt nicht für und hat keine Wirkung auf Block-Container.

Diese Eigenschaft teilt sich viele Schlüsselwortwerte mit der {{cssxref("align-content")}} Eigenschaft, aber nicht alle! `justify-content` ist nicht an Baseline-Ausrichtung beteiligt und nimmt daher keine Baseline-Werte an.

In [Flex-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert die Eigenschaft, wie positiver freier Raum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft beeinflusst den Raum zwischen Elementen in einer Zeile, nicht den Raum zwischen den Zeilen. Die Ausrichtung erfolgt, nachdem die Längen und automatischen Margen angewendet wurden, was bedeutet, dass wenn ein oder mehrere Flex-Elemente in einer Zeile einen {{cssxref("flex-grow")}} Faktor größer als `0` haben, die Eigenschaft keine Auswirkung hat, da es keinen Raum gibt, der entlang dieser Zeile verteilt werden kann. Da das Dehnen entlang der Hauptachse von {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch`-Wert wie `flex-start`.

Mit [Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) verteilt diese Eigenschaft verfügbaren Raum zwischen oder um Rasterspalten, nicht Rasterelemente. Wenn der Raster-Container größer als das Raster selbst ist, kann die `justify-content` Eigenschaft verwendet werden, um das Raster entlang der Inline-Achse zu rechtfertigen und die Rasterspalten auszurichten.

`Auto` Raster-Spurgrößen (und nur `auto` Spurgrößen) können durch die `align-content` und `justify-content` Eigenschaften gedehnt werden. Daher nimmt standardmäßig eine `auto`-große Spur jeden verbleibenden Raum im Raster-Container ein. Da die Inline-Größe des Rasters kleiner sein muss als die Inline-Größe des Raster-Containers, damit es Raum zu verteilen gibt, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Rasterbeispiel

In diesem Beispiel haben wir ein Raster, das schmaler als sein Raster-Container ist, und wir verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Rasterspalten zu verteilen.

#### HTML

Der {{htmlelement("section")}} Container, unser zukünftiger Raster-Container, hat 16 verschachtelte {{htmlelement("div")}}s, die zu Rasterelementen werden.

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

Wir setzen die Containern-Breite auf `500px` und spezifizieren drei Spalten, jede `80px` breit, was bedeutet, dass es `260px` verfügbaren Raum gibt, der zwischen oder um sie herum verteilt werden kann. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass es `65px` Raum vor, zwischen und nach jeder Spalte geben wird.

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

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keine Auswirkung auf die Elemente oder die Ausrichtung in Rasterbereichen hat. Rasterelemente, selbst die, die ihre Rasterzelle überlaufen, beeinflussen nicht die Spaltenrechtfertigung.

### Der Safe-Schlüsselbegriff

Dieses Beispiel demonstriert den `safe`-Schlüsselbegriff. Wir spezifizieren vier zentrierte Flex-Elemente, die sich nicht umschlagen lassen, und überlaufen daher ihren einzeiligen Flex-Container. Indem `safe` zu `center` in der `justify-content` Eigenschaft hinzugefügt wird, verhält sich überlaufender Inhalt, als wäre der Ausrichtungsmodus `start`.

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

Der Container ist auf `center` gesetzt, wobei jedem Container außer dem ersten das `safe` Schlüsselwort hinzugefügt wird:

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

Wenn ein Element den Ausrichtungscontainer überläuft, verhält sich der Ausrichtungsmodus mit `safe` als `start` und die `center` Ausrichtung wird nicht umgesetzt. Der `safe`-Schlüsselbegriff hat keine Wirkung, wenn die Elemente nicht den Container überlaufen.

### Visualisierung der Flex-Element-Verteilung

Dieses Beispiel umfasst ein mehrzeiliges, flexibles Layout. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor und nutzt den gesamten verfügbaren freien Raum in der ersten Flexzeile.

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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü aus, um die unterschiedlichen `justify-content` Schlüsselwortwerte zu visualisieren. Da ein Element in der ersten Linie wachsen kann, gibt es keinen verfügbaren Raum in dieser Linie, den die `justify-content` Eigenschaft verteilen könnte. Mit dem `space-between` Wert ist das erste Element in jeder Zeile bündig mit der main-start Kante und das letzte Element bündig mit der main-end Kante. Daher, wenn eine Zeile nur ein Element hat, wird es mit der main-start Kante ausgerichtet (wie in der letzten Zeile zu sehen). Dies ist nicht der Fall bei anderen `space-*` Werten, wie `space-evenly` und `space-around`, die einzeilige Flex-Linien zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Raster-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
