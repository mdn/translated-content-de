---
title: "`justify-content` CSS property"
short-title: justify-content
slug: Web/CSS/Reference/Properties/justify-content
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die [CSS](/de/docs/Web/CSS) **`justify-content`**-Eigenschaft definiert, wie der Browser den Raum zwischen und um die Inhaltselemente entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten demonstriert einige `justify-content`-Werte unter Verwendung eines Grid-Layouts.

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
  - : Die Elemente sind bündig zueinander an der Anfangskante des Ausrichtungscontainers in der Hauptachse verpackt.

- `end`
  - : Die Elemente sind bündig zueinander an der Endkante des Ausrichtungscontainers in der Hauptachse verpackt.

- `flex-start`
  - : Die Elemente sind bündig zueinander an der Anfangskante des Ausrichtungscontainers auf der Haupt-Startseite des Flex-Containers verpackt. Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`
  - : Die Elemente sind bündig zueinander an der Endkante des Ausrichtungscontainers auf der Haupt-Endseite des Flex-Containers verpackt. Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`
  - : Die Elemente sind bündig zueinander zur Mitte des Ausrichtungscontainers entlang der Hauptachse verpackt.

- `left`
  - : Die Elemente sind bündig zueinander entlang der linken Kante des Ausrichtungscontainers verpackt. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse ist, wie zum Beispiel bei [`flex-direction: column;`](/de/docs/Web/CSS/Reference/Properties/flex-direction), verhält sich dieser Wert wie `start`.

- `right`
  - : Die Elemente sind bündig zueinander entlang der rechten Kante des Ausrichtungscontainers auf der entsprechenden Achse verpackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Grid-Container) oder der Hauptachse (in einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`
  - : Verhält sich wie `stretch`, mit Ausnahme von Mehrspalten-Containern mit einer nicht-`auto` {{cssxref("column-width")}}, in diesem Fall nehmen die Spalten ihre angegebene `column-width` statt sich zu dehnen, um den Container zu füllen. Da `stretch` sich in Flex-Containern wie `start` verhält, verhält sich `normal` ebenfalls wie `start`.

- `space-between`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist bündig mit der Haupt-Startkante, und das letzte Element ist bündig mit der Haupt-Endkante.

- `space-around`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Raums zwischen jedem Paar benachbarter Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der Haupt-Startkante und dem ersten Element sowie der Haupt-Endkante und dem letzten Element ist jeweils genau gleich.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner ist als die des Ausrichtungscontainers, wird die Größe aller auf `auto` eingestellten Elemente gleichmäßig (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Beschränkungen respektiert werden, sodass die kombinierte Größe den Ausrichtungscontainer entlang der Hauptachse genau füllt.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) verhält sich der Wert `stretch` wie `flex-start` oder `start`. Dies liegt daran, dass in Flexboxen das Strecken mithilfe der Eigenschaft {{CSSXref("flex-grow")}} gesteuert wird.

- `safe`
  - : Wenn das Element den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als wäre der Ausrichtungsmodus `start`. Die gewünschte Ausrichtung wird nicht implementiert.

- `unsafe`
  - : Auch wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung implementiert. Im Gegensatz zu `safe`, das die gewünschte Ausrichtung ignoriert, um ein Überlaufen zu verhindern.

## Beschreibung

Die in dem [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment) definierte Eigenschaft `justify-content` gilt für mehrspaltige Container, Flex-Container und Grid-Container. Die Eigenschaft gilt nicht für Block-Container und hat auf diese keine Auswirkung.

Diese Eigenschaft teilt sich viele Stichwortwerte mit der {{cssxref("align-content")}}-Eigenschaft, jedoch nicht alle! `justify-content` ist nicht an der Baseline-Ausrichtung beteiligt und nimmt daher keine Base-Werte.

In [Flex-Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout) definiert die Eigenschaft, wie positiver freier Raum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft beeinflusst den Raum zwischen Elementen in einer Zeile, nicht den Raum zwischen Zeilen. Die Ausrichtung erfolgt, nachdem die Längen und Automargen angewendet wurden, was bedeutet, dass die Eigenschaft keinen Effekt hat, wenn ein oder mehrere Flex-Elemente in einer Zeile einen {{cssxref("flex-grow")}}-Faktor größer als `0` haben, da es keinen Raum gibt, der entlang dieser Zeile verteilt werden könnte. Da das Strecken entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch`-Wert wie `flex-start`.

Mit [Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout) verteilt diese Eigenschaft den verfügbaren Raum zwischen oder um die Grid-Spalten, nicht die Grid-Elemente. Wenn der Grid-Container größer als das Grid selbst ist, kann die `justify-content`-Eigenschaft verwendet werden, um das Grid entlang der Inline-Achse zu rechtfertigen und die Grid-Spalten auszurichten.

Grid-`auto`-Spurgrößen (und nur `auto`-Spurgrößen) können durch die Eigenschaften `align-content` und `justify-content` gestreckt werden. Daher nimmt eine `auto`-große Spur standardmäßig jeden verbleibenden Raum im Grid-Container ein. Da die Inline-Größe des Grids kleiner als die Inline-Größe des Grid-Containers sein muss, damit es Raum zu verteilen gibt, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Grid-Beispiel

In diesem Beispiel haben wir ein Grid, das schmaler als sein Grid-Container ist, und wir verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Grid-Spalten zu verteilen.

#### HTML

Der {{htmlelement("section")}}-Container, unser zukünftiger Grid-Container, enthält 16 verschachtelte {{htmlelement("div")}}s, die zu Grid-Elementen werden.

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

Wir setzen die Containerbreite auf `500px` und spezifizieren drei Spalten, jede `80px` breit, was bedeutet, dass `260px` verfügbarer Raum verteilt werden soll. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass es `65px` Raum vor, zwischen und nach jeder Spalte geben wird.

Wir setzen unterschiedliche Breiten (und Hintergrundfarben) ein, um zu demonstrieren, wie die Rechtfertigung auf die Spalten angewendet wird.

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

Beachten Sie, dass `justify-content` die Spalten ausrichtet und keine Auswirkung auf die Elemente oder die Ausrichtung in Grid-Bereichen hat. Grid-Elemente, selbst solche, die ihre Grid-Zelle überlaufen, beeinflussen die Spaltenausrichtung nicht.

### Das sichere Stichwort

Dieses Beispiel demonstriert das `safe`-Stichwort. Wir spezifizieren vier zentrierte Flex-Elemente, die sich nicht umbrechen dürfen und daher ihren einzeiligen Flex-Container überlaufen. Durch das Hinzufügen von `safe` zu `center` in der `justify-content`-Eigenschaft verhält sich überlaufender Inhalt, als wäre der Ausrichtungsmodus `start`.

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

Der Container ist auf `center` gesetzt, wobei jeder Container außer dem ersten das `safe`-Stichwort hinzugefügt hat:

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

Wenn ein Element den Ausrichtungscontainer überläuft, verhält sich der Ausrichtungsmodus mit eingeschlossenem `safe` wie `start` und die `center`-Ausrichtung wird nicht implementiert. Das `safe`-Stichwort hat keine Auswirkung, wenn die Elemente den Container nicht überlaufen.

### Visualisierung der Verteilung von Flex-Elementen

Dieses Beispiel beinhaltet ein mehrzeiliges, umwickeltes Flex-Layout. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor und nutzt den gesamten verfügbaren freien Raum in der ersten Flex-Zeile.

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

Wählen Sie verschiedene Stichwörter aus dem Dropdown-Menü aus, um die verschiedenen `justify-content`-Stichwortwerte zu visualisieren. Da ein Element in der ersten Zeile wachsen kann, gibt es keinen verfügbaren Raum in dieser Zeile, den die `justify-content`-Eigenschaft verteilen könnte. Mit dem Wert `space-between` ist das erste Element in jeder Zeile bündig mit der Haupt-Startkante und das letzte Element bündig mit der Haupt-Endkante. Infolgedessen, wenn eine Zeile nur ein Element hat, wird es an der Haupt-Startkante ausgerichtet (wie in der letzten Zeile zu sehen). Dies ist nicht der Fall für andere `space-*`-Werte, wie `space-evenly` und `space-around`, die einzeilige Flex-Linien zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
