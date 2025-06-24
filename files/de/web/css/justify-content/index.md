---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-content`** Eigenschaft definiert, wie der Browser den Raum zwischen und um die Inhaltselemente entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten demonstriert einige `justify-content` Werte, indem es das Grid-Layout verwendet.

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

  - : Die Elemente sind zusammengepackt zur Startkante des Ausrichtungscontainers auf der Hauptachse.

- `end`

  - : Die Elemente sind zusammengepackt zur Endkante des Ausrichtungscontainers auf der Hauptachse.

- `flex-start`

  - : Die Elemente sind zusammengepackt zur Startkante des Ausrichtungscontainers auf der Haupt-Startseite des Flex-Containers.
    Dies gilt nur für Flex-Layout-Elemente. Bei Elementen, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`

  - : Die Elemente sind zusammengepackt an der Endkante des Ausrichtungscontainers auf der Haupt-Endseite des Flex-Containers.
    Dies gilt nur für Flex-Layout-Elemente. Bei Elementen, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`

  - : Die Elemente sind zusammengepackt zur Mitte des Ausrichtungscontainers entlang der Hauptachse.

- `left`

  - : Die Elemente sind zusammengepackt zur linken Kante des Ausrichtungscontainers. Wenn die horizontale Achse der Eigenschaft nicht mit der Inline-Achse parallel ist, wie wenn [`flex-direction: column;`](/de/docs/Web/CSS/flex-direction) gesetzt ist, verhält sich dieser Wert wie `start`.

- `right`

  - : Die Elemente sind zusammengepackt zur rechten Kante des Ausrichtungscontainers auf der entsprechenden Achse. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist (in einem Grid-Container) oder zur Hauptachse (in einem Flexbox-Container), verhält sich dieser Wert wie `start`.

- `normal`

  - : Verhält sich wie `stretch`, außer im Fall von Mehrspalten-Containern mit einer nicht-`auto` [`column-width`](/de/docs/Web/CSS/column-width), in welchem Fall die Spalten ihre angegebene `column-width` annehmen, anstatt sich zu dehnen, um den Container zu füllen. Da `stretch` sich in Flex-Containern wie `start` verhält, verhält sich auch `normal` wie `start`.

- `space-between`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist bündig mit der Haupt-Start-Kante, und das letzte Element ist bündig mit der Haupt-End-Kante.

- `space-around`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der Leerraum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der Haupt-Start-Kante und dem ersten Element, sowie der Haupt-End-Kante und dem letzten Element ist genau gleich.

- `stretch`

  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-großen Elemente gleichmäßig (nicht proportional) vergrößert, während dabei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder entsprechende Funktionalität) auferlegten Beschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Hauptachse ausfüllt.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) verhält sich der `stretch` Wert wie `flex-start` oder `start`. Dies liegt daran, dass in Flexboxen das Strecken durch die {{CSSXref("flex-grow")}} Eigenschaft gesteuert wird.

- `safe`

  - : Wenn das Element den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre. Die gewünschte Ausrichtung wird nicht implementiert.

- `unsafe`
  - : Selbst wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung implementiert. Anders als `safe`, welches die gewünschte Ausrichtung zugunsten der Vermeidung von Überläufen ignoriert.

## Beschreibung

Definiert im [CSS-Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul, gilt `justify-content` für Multicol-Container, Flex-Container und Grid-Container. Die Eigenschaft gilt nicht für und hat keine Auswirkung auf Block-Container.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}} Eigenschaft, aber nicht alle! `justify-content` ist nicht in die Basislinienausrichtung involviert und nimmt daher keine Basislinienwerte an.

In [Flex-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert die Eigenschaft, wie positiver Freiraum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft beeinflusst den Raum zwischen den Elementen in einer Zeile, nicht den Raum zwischen Zeilen. Die Ausrichtung erfolgt nach der Anwendung der Längen und Auto-Ränder, was bedeutet, dass die Eigenschaft keine Wirkung hat, wenn eines oder mehrere Flex-Elemente in einer Zeile einen {{cssxref("flex-grow")}} Faktor größer als `0` haben, da es dann keinen Raum zur Verteilung entlang dieser Zeile gibt. Außerdem, da das Strecken entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch` Wert wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verteilt diese Eigenschaft verfügbaren Raum zwischen oder um die Gitterspalten, nicht die Gitterelemente. Wenn der Grid-Container größer als das Raster selbst ist, kann die `justify-content` Eigenschaft verwendet werden, um das Raster entlang der Inline-Achse zu rechtfertigen, wobei die Gitterspalten ausgerichtet werden.

Grid `auto` Spurengrößen (und nur `auto` Spurengrößen) können durch die `align-content` und `justify-content` Eigenschaften gedehnt werden. Daher wird eine `auto`-große Spur standardmäßig jeden verbleibenden Raum im Grid-Container einnehmen. Da die Inline-Größe des Rasters kleiner sein muss als die Inline-Größe des Grid-Containers, damit es Raum zum Verteilen gibt, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfache Grid-Beispiel

In diesem Beispiel haben wir ein Gitter, das schmaler ist als sein Gitter-Container, und wir verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Gitterspalten zu verteilen.

#### HTML

Der {{htmlelement("section")}} Container, unser zukünftiger Gitter-Container, hat 16 verschachtelte {{htmlelement("div")}}s, die zu Gitter-Elementen werden.

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

Wir setzen die Container-Breite auf `500px` und spezifizieren drei Spalten, jede `80px` breit, was bedeutet, dass `260px` verfügbarer Raum zu verteilen ist. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass `65px` Raum vor, zwischen und nach jeder Spalte sein werden.

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

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keine Auswirkung auf die Elemente oder die Ausrichtung in Gitterbereichen hat. Gitterelemente, selbst solche, die ihre Gitterzelle überlaufen, beeinflussen nicht die Spaltenrechtfertigung.

### Der Safe-Begriff

Dieses Beispiel demonstriert den `safe` Begriff. Wir spezifizieren vier zentrierte Flex-Elemente, die sich nicht umbrechen lassen und als Ergebnis ihren einzigen Flex-Line-Container überlaufen. Durch Hinzufügen von `safe` zu `center` in der `justify-content` Eigenschaft verhält sich überlaufender Inhalt, als wäre der Ausrichtungsmodus `start`.

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

Da ein Element den Ausrichtungscontainer überläuft, verhält sich der Ausrichtungsmodus mit eingeschlossenem `safe` wie `start` und die `center`-Ausrichtung wird nicht implementiert. Der `safe`-Begriff hat keine Wirkung, wenn die Elemente den Container nicht überlaufen.

### Visualisierung der Flex-Element-Verteilung

Dieses Beispiel beinhaltet ein mehrzeiliges Flex-Layout. Das zweite Flex-Element hat einen positiven Wachstumfaktor und nutzt den gesamten verfügbaren Freiraum in der ersten Flex-Zeile.

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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die verschiedenen `justify-content` Schlüsselwortwerte zu visualisieren. Da ein Element auf der ersten Zeile wachsen kann, gibt es keinen verfügbaren Raum auf dieser Zeile für die `justify-content` Eigenschaft zur Verteilung. Mit dem `space-between` Wert ist das erste Element jeder Zeile bündig mit der Haupt-Start-Kante und das letzte Element bündig mit der Haupt-End-Kante. Daher wird, wenn eine Zeile nur ein Element hat, es mit der Haupt-Start-Kante ausgerichtet (wie in der letzten Zeile zu sehen ist). Dies ist nicht der Fall für andere `space-*` Werte, wie `space-evenly` und `space-around`, die einzeilige Flex-Lines zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlagen von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
