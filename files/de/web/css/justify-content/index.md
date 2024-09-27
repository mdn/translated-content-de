---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-content`**-Eigenschaft legt fest, wie der Browser den Abstand zwischen und um Inhaltselemente entlang der [Hauptachse](/de/docs/Glossary/main_axis) eines Flex-Containers und der [Inline-Achse](/de/docs/Glossary/Logical_properties#inline_direction) von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten demonstriert einige `justify-content`-Werte unter Verwendung eines Grid-Layouts.

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

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

  - : Die Elemente sind bündig zueinander an der Startkante des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `end`

  - : Die Elemente sind bündig zueinander an der Endkante des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `flex-start`

  - : Die Elemente sind bündig zueinander an der Kante des Ausrichtungscontainers entsprechend der Haupt-Start-Seite des Flex-Containers gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`

  - : Die Elemente sind bündig zueinander an der Kante des Ausrichtungscontainers entsprechend der Haupt-End-Seite des Flex-Containers gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`

  - : Die Elemente sind bündig zueinander in der Mitte des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `left`

  - : Die Elemente sind bündig zueinander an der linken Kante des Ausrichtungscontainers gepackt. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse ist, wie z.B. bei [`flex-direction: column;`](/de/docs/Web/CSS/flex-direction), verhält sich dieser Wert wie `start`.

- `right`

  - : Die Elemente sind bündig zueinander an der rechten Kante des Ausrichtungscontainers auf der geeigneten Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Grid-Container) oder der Hauptachse (in einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`

  - : Verhält sich wie `stretch`, außer bei Mehrspalten-Containern mit nicht-`auto` [`column-width`](/de/docs/Web/CSS/column-width), in welchem Fall die Spalten ihre angegebene `column-width` übernehmen, anstatt sich auszudehnen, um den Container zu füllen. Da `stretch` sich in Flex-Containern wie `start` verhält, verhält sich `normal` auch wie `start`.

- `space-between`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist bündig mit der Haupt-Startkante und das letzte Element ist bündig mit der Haupt-Endkante.

- `space-around`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der Haupt-Startkante und dem ersten Element sowie der Haupt-Endkante und dem letzten Element ist genau gleich.

- `stretch`

  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner als die Größe des Ausrichtungscontainers ist, wird bei allen `auto`-Größen die Größe gleichmäßig (nicht proportional) vergrößert, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder entsprechende Funktionalitäten) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe den Ausrichtungscontainer entlang der Hauptachse genau füllt.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) verhält sich der `stretch`-Wert wie `flex-start` oder `start`. Dies liegt daran, dass das Strecken in Flexboxen über die {{CSSXref("flex-grow")}}-Eigenschaft gesteuert wird.

- `safe`

  - : Wenn das Element den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`

  - : Selbst wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, welches die gewünschte Ausrichtung zugunsten der Vermeidung von Überlauf ignoriert.

## Beschreibung

Im [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) definiert, gilt `justify-content` für Multicol-Container, Flex-Container und Grid-Container. Die Eigenschaft hat keine Auswirkungen auf Block-Container.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}}-Eigenschaft, aber nicht alle! `justify-content` ist nicht an der Basislinienausrichtung beteiligt und nimmt daher keine Basislinienwerte an.

In [Flex-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert die Eigenschaft, wie positiver Freiraum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft beeinflusst den Abstand zwischen Elementen in einer Zeile, nicht den Abstand zwischen Zeilen. Die Ausrichtung erfolgt, nachdem die Längen und automatischen Margen angewendet wurden, was bedeutet, dass, wenn ein oder mehrere Flex-Elemente in einer Zeile einen {{cssxref("flex-grow")}}-Faktor größer als `0` haben, die Eigenschaft keine Wirkung hat, da kein Raum vorhanden ist, um entlang dieser Zeile verteilt zu werden. Auch da das Strecken entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch`-Wert wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verteilt diese Eigenschaft den verfügbaren Raum zwischen oder um die Grid-Spalten herum, nicht um die Grid-Elemente. Wenn der Grid-Container größer als das Grid selbst ist, kann die `justify-content`-Eigenschaft verwendet werden, um das Grid entlang der Inline-Achse zu rechtfertigen und die Grid-Spalten auszurichten.

Grid-`auto`-Spurgrößen (und nur `auto`-Spurgrößen) können durch die `align-content` und `justify-content`-Eigenschaften gestreckt werden. Daher nimmt eine `auto`-große Spur standardmäßig jeden verbleibenden Raum im Grid-Container ein. Da die Inline-Größe des Grids kleiner als die Inline-Größe des Grid-Containers sein muss, damit es Raum zu verteilen gibt, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Grid-Beispiel

In diesem Beispiel haben wir ein Grid, das schmaler als sein Grid-Container ist, und wir verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Grid-Spalten zu verteilen.

#### HTML

Der {{htmlelement("section")}}-Container, unser zukünftiger Grid-Container, enthält 16 eingebettete {{htmlelement("div")}}s, die zu Grid-Elementen werden.

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

Wir setzen die Containerbreite auf `500px` und geben drei Spalten an, die jeweils `80px` breit sind, was bedeutet, dass `260px` verfügbarer Raum zur Verteilung zwischen oder um sie herum vorhanden ist. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass es `65px` Raum vor, zwischen und nach jeder Spalte gibt.

Wir setzen verschiedene Breiten (und Hintergrundfarben), um zu demonstrieren, wie die Rechtfertigung auf die Spalten angewendet wird.

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

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keine Auswirkungen auf die Elemente oder die Ausrichtung in den Grid-Bereichen hat. Grid-Elemente, selbst solche, die ihre Grid-Zelle überlaufen, beeinflussen nicht die Spaltenrechtfertigung.

### Der „safe“-Schlüsselbegriff

Dieses Beispiel zeigt den `safe`-Schlüsselbegriff. Wir geben vier zentrierte Flex-Elemente an, die nicht umbrochen werden dürfen und infolgedessen ihren Einzelzeilen-Flex-Container überfluten. Durch Hinzufügen von `safe` zu `center` in der `justify-content`-Eigenschaft verhält sich überlaufender Inhalt so, als ob der Ausrichtungsmodus `start` wäre.

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

Da ein Element den Ausrichtungscontainer überläuft, verhält sich mit `safe` der Ausrichtungsmodus wie `start` und die `center`-Ausrichtung wird nicht umgesetzt. Der `safe`-Schlüsselbegriff hat keine Wirkung, wenn die Elemente nicht den Container überlaufen.

### Visualisierung der Verteilung von Flex-Elementen

Dieses Beispiel beinhaltet ein mehrzeiliges, umbruchfähiges Flex-Layout. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor und verbraucht den gesamten verfügbaren Freiraum in der ersten Flex-Zeile.

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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die verschiedenen `justify-content`-Schlüsselwortwerte zu visualisieren. Da ein Element in der ersten Zeile wachsen kann, gibt es keinen verfügbaren Raum in dieser Zeile, um die `justify-content`-Eigenschaft zu verteilen. Mit dem `space-between`-Wert ist das erste Element jeder Zeile bündig mit der Haupt-Startkante und das letzte Element bündig mit der Haupt-Endkante. Infolgedessen wird, wenn eine Zeile nur ein Element enthält, dieses mit der Haupt-Startkante ausgerichtet (wie in der letzten Zeile zu sehen). Dies ist nicht der Fall bei anderen `space-*`-Werten wie `space-evenly` und `space-around`, die einzeilige Flex-Zeilen zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte der Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
