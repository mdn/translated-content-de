---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`justify-content`** definiert, wie der Browser den Platz zwischen und um Inhaltselemente entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten demonstriert einige `justify-content`-Werte mit einem Grid-Layout.

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
  background-color: rgba(0, 0, 255, 0.2);
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

/* Overflow alignment */
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

  - : Die Elemente werden bündig zueinander am Start-Rand des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `end`

  - : Die Elemente werden bündig zueinander am End-Rand des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `flex-start`

  - : Die Elemente werden bündig zueinander am Start-Rand des Ausrichtungscontainers auf der main-start-Seite des Flex-Containers gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`

  - : Die Elemente werden bündig zueinander am End-Rand des Ausrichtungscontainers auf der main-end-Seite des Flex-Containers gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`

  - : Die Elemente werden bündig zueinander zur Mitte des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `left`

  - : Die Elemente werden bündig zueinander am linken Rand des Ausrichtungscontainers gepackt. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse ist, wie bei Einstellung von [`flex-direction: column;`](/de/docs/Web/CSS/flex-direction), verhält sich dieser Wert wie `start`.

- `right`

  - : Die Elemente werden bündig zueinander am rechten Rand des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Grid-Container) oder der Hauptachse (in einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`

  - : Verhält sich wie `stretch`, außer im Fall von Multi-Column-Containern mit einer nicht-`auto`-[`column-width`](/de/docs/Web/CSS/column-width), in dem Fall nehmen die Spalten ihre angegebene `column-width` an, anstatt sich zu dehnen, um den Container zu füllen. Da sich `stretch` in Flex-Containern wie `start` verhält, verhält sich `normal` auch wie `start`.

- `space-between`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Das erste Element ist am main-start-Rand bündig, und das letzte Element ist am main-end-Rand bündig.

- `space-around`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Der Leerraum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, dem main-start-Rand und dem ersten Element sowie dem main-end-Rand und dem letzten Element ist genau derselbe.

- `stretch`

  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner als die Größe des Ausrichtungscontainers ist, werden alle `auto`-größen Elemente gleichmäßig vergrößert (nicht proportional), unter Beachtung der Einschränkungen, die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionen) auferlegt werden, so dass die kombinierte Größe exakt den Ausrichtungscontainer entlang der Hauptachse füllt.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) verhält sich der `stretch`-Wert wie `flex-start` oder `start`. Dies liegt daran, dass in Flexboxen das Dehnen mithilfe der {{CSSXref("flex-grow")}}-Eigenschaft gesteuert wird.

- `safe`

  - : Wenn das Element den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`

  - : Auch wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, das die gewünschte Ausrichtung ignorieren wird, um ein Überlaufen zu verhindern.

## Beschreibung

Definiert im [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Modul, gilt `justify-content` für Multicol-Container, Flex-Container und Grid-Container. Die Eigenschaft gilt nicht für Block-Container und hat auf diese keine Auswirkungen.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}}-Eigenschaft, jedoch nicht alle! `justify-content` ist nicht an der Baseline-Ausrichtung beteiligt und nimmt daher keine Baseline-Werte an.

In [Flex-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert die Eigenschaft, wie positiver Freiraum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft betrifft den Raum zwischen Elementen in einer Linie, nicht den Raum zwischen den Linien. Die Ausrichtung erfolgt nach Anwendung der Längen und automatischen Ränder, was bedeutet, dass, wenn ein oder mehrere Flex-Elemente in einer Zeile einen {{cssxref("flex-grow")}}-Faktor größer als `0` haben, die Eigenschaft keine Wirkung hat, da es keinen Platz gibt, der entlang dieser Linie verteilt werden kann. Da das Dehnen entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch`-Wert wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verteilt diese Eigenschaft den verfügbaren Raum zwischen oder um Gitterspalten, nicht Gitterelemente. Wenn der Grid-Container größer als das Gitter selbst ist, kann die `justify-content`-Eigenschaft verwendet werden, um das Gitter entlang der Inline-Achse auszurichten und die Gitterspalten zu justieren.

Grid `auto`-Spurgrößen (und nur `auto`-Spurgrößen) können durch die `align-content`- und `justify-content`-Eigenschaften gedehnt werden. Daher nimmt eine `auto`-Größe Spur standardmäßig jeden verbleibenden Raum im Grid-Container ein. Da die Inline-Größe des Grids kleiner als die Inline-Größe des Grid-Containers sein muss, damit Raum verteilt werden kann, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Grid-Beispiel

In diesem Beispiel haben wir ein Grid, das schmaler als sein Grid-Container ist, und wir verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Gitterspalten zu verteilen.

#### HTML

Der {{htmlelement("section")}}-Container, unser zukünftiger Grid-Container, enthält 16 verschachtelte {{htmlelement("div")}}s, die zu Gitterelementen werden.

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

Wir setzen die Containerbreite auf `500px` und spezifizieren drei Spalten, jede `80px` breit, was bedeutet, dass `260px` verfügbarer Raum verteilt werden muss. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass `65px` Raum vor, zwischen und nach jeder Spalte vorhanden sein wird.

Wir setzen unterschiedliche Breiten (und Hintergrundfarben), um zu demonstrieren, wie die Justierung auf die Spalten angewendet wird.

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

Beachten Sie, dass `justify-content` die Spalten ausrichtet und keinen Einfluss auf die Elemente oder die Ausrichtung in Grid-Bereichen hat. Grid-Elemente, selbst solche, die ihre Grid-Zelle überlaufen, beeinflussen die Spaltenjustierung nicht.

### Der sichere Schlüsselbegriff

Dieses Beispiel zeigt den `safe` Schlüsselbegriff. Wir spezifizieren vier zentrierte Flex-Elemente, die sich nicht umwickeln lassen und daher ihren einzigen Flex-Line-Container überlaufen. Durch Hinzufügen von `safe` zu `center` in der `justify-content`-Eigenschaft, verhält sich überlaufender Inhalt so, als ob der Ausrichtungsmodus `start` wäre

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

Der Container ist auf `center` gesetzt, wobei jeder Container außer dem ersten das `safe`-Schlüsselwort hinzugefügt hat:

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

Da ein Element den Ausrichtungscontainer überläuft, verhält sich der Ausrichtungsmodus mit eingeschlossenem `safe` wie `start`, und die `center`-Ausrichtung wird nicht umgesetzt. Der `safe` Schlüsselbegriff hat keine Auswirkungen, wenn die Elemente den Container nicht überlaufen.

### Visualisierung der Flex-Element-Verteilung

Dieses Beispiel umfasst ein mehrzeiliges Flex-Layout mit Umbruch. Das zweite Flex-Element hat einen positiven Wachstumsfaktor und nimmt den gesamten verfügbaren Freiraum in der ersten Flex-Zeile ein.

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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die unterschiedlichen `justify-content`-Schlüsselwortwerte zu visualisieren. Da ein Element in der ersten Zeile wachsen kann, gibt es keinen verfügbaren Platz in dieser Zeile, den die `justify-content`-Eigenschaft verteilen könnte. Mit dem `space-between`-Wert ist das erste Element in jeder Zeile am main-start-Rand bündig, und das letzte Element ist am main-end-Rand bündig. Als Ergebnis, wenn eine Zeile nur ein Element hat, wird es mit dem main-start-Rand ausgerichtet (wie in der letzten Zeile zu sehen). Dies ist nicht der Fall für andere `space-*` Werte, wie `space-evenly` und `space-around`, die eine Flex-Zeilen mit einem Element zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
