---
title: "`justify-content` CSS property"
short-title: justify-content
slug: Web/CSS/Reference/Properties/justify-content
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die [CSS](/de/docs/Web/CSS) **`justify-content`**-Eigenschaft definiert, wie der Browser Platz zwischen und um Inhaltselemente entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inlinachse")}} von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten demonstriert einige `justify-content`-Werte anhand eines Grid-Layouts.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `start`
  - : Die Elemente werden bündig zueinander hin zur Startkante des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `end`
  - : Die Elemente werden bündig zueinander hin zur Endkante des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `flex-start`
  - : Die Elemente werden bündig zueinander hin zur Startkante des Ausrichtungscontainers auf der Flex-Container-Hauptstartseite gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`
  - : Die Elemente werden bündig zueinander an der Endkante des Ausrichtungscontainers auf der Flex-Container-Hauptendseite gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`
  - : Die Elemente werden bündig zueinander entlang der Hauptachse zur Mitte des Ausrichtungscontainers gepackt.

- `left`
  - : Die Elemente werden bündig zueinander hin zur linken Kante des Ausrichtungscontainers gepackt. Wenn die horizontale Achse der Eigenschaft nicht mit der Inlinachse parallel ist, wie zum Beispiel, wenn [`flex-direction: column;`](/de/docs/Web/CSS/Reference/Properties/flex-direction) gesetzt ist, verhält sich dieser Wert wie `start`.

- `right`
  - : Die Elemente werden bündig zueinander hin zur rechten Kante des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht mit der Inlinachse (in einem Grid-Container) oder der Hauptachse (in einem Flexbox-Container) parallel ist, verhält sich dieser Wert wie `start`.

- `normal`
  - : Verhält sich wie `stretch`, außer im Fall von Mehrspalten-Containern mit einer nicht-`auto` {{cssxref("column-width")}}, in welchem Fall die Spalten ihre angegebene `column-width` annehmen, anstatt sich auszudehnen, um den Container zu füllen. Da `stretch` sich in Flex-Containern wie `start` verhält, verhält sich `normal` ebenfalls wie `start`.

- `space-between`
  - : Die Elemente werden gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar angrenzender Elemente ist derselbe. Das erste Element liegt bündig an der Hauptstartkante und das letzte Element liegt bündig an der Hauptendkante.

- `space-around`
  - : Die Elemente werden gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar angrenzender Elemente ist derselbe. Der Leerraum vor dem ersten und nach dem letzten Element ist halb so groß wie der Abstand zwischen jedem Paar angrenzender Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`
  - : Die Elemente werden gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar angrenzender Elemente, der Hauptstartkante und dem ersten Element sowie der Hauptendkante und dem letzten Element ist exakt derselbe.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-abmessenden Elemente gleichmäßig (nicht proportional) vergrößert, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Beschränkungen weiterhin respektiert werden, sodass die kombinierte Größe exakt den Ausrichtungscontainer entlang der Hauptachse füllt.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) verhält sich der Wert `stretch` wie `flex-start` oder `start`. Denn in Flexboxen wird das Dehnen mit der Eigenschaft {{CSSXref("flex-grow")}} gesteuert.

- `safe`
  - : Wenn das Element den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`
  - : Auch wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, das die gewünschte Ausrichtung ignoriert, um Überlauf zu verhindern.

## Beschreibung

Definiert im [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment), gilt `justify-content` für Multicol-Container, Flex-Container und Grid-Container. Die Eigenschaft gilt nicht für Block-Container und hat auf diese keine Auswirkungen.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}}-Eigenschaft, aber nicht alle! `justify-content` ist nicht an der Baseline-Ausrichtung beteiligt und nimmt daher keine Baseline-Werte an.

In [Flex-Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout) definiert die Eigenschaft, wie positiver freier Raum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft beeinflusst den Abstand zwischen Elementen in einer Linie, nicht den Abstand zwischen den Linien. Die Ausrichtung erfolgt nachdem die Längen und automatischen Ränder angewendet wurden, was bedeutet, dass, wenn ein oder mehrere Flex-Elemente in einer Linie einen {{cssxref("flex-grow")}} Faktor größer als `0` haben, die Eigenschaft keine Wirkung hat, da kein Raum entlang dieser Linie zu verteilen ist. Da das Dehnen entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch`-Wert wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) verteilt diese Eigenschaft den verfügbaren Raum zwischen oder um die Grid-Spalten, nicht um die Grid-Elemente. Wenn der Grid-Container größer ist als das Grid selbst, kann die `justify-content`-Eigenschaft verwendet werden, um das Grid entlang der Inlinachse zu rechtfertigen und die Grid-Spalten auszurichten.

Grid-`auto`-Spurengrößen (und nur `auto`-Spurengrößen) können durch die Eigenschaften `align-content` und `justify-content` gestreckt werden. Daher nimmt eine spurengröße mit `auto` standardmäßig jeden verbleibenden Platz im Grid-Container ein. Da die Inline-Größe des Grids kleiner sein muss als die Inline-Größe des Grid-Containers, damit Platz zum Verteilen vorhanden ist, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Einfaches Grid-Beispiel

In diesem Beispiel haben wir ein Grid, das schmaler als sein Grid-Container ist, und wir verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Grid-Spalten zu verteilen.

#### HTML

Der {{htmlelement("section")}}-Container, unser zukünftiger Grid-Container, hat 16 verschachtelte {{htmlelement("div")}}s, die zu Grid-Elementen werden.

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

Wir setzen die Containerbreite auf `500px` und spezifizieren drei Spalten, jeweils `80px` breit, was bedeutet, dass es `260px` an verfügbarem Raum gibt, um sie zu verteilen. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass es `65px` Raum vor, zwischen und nach jeder Spalte gibt.

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

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keine Auswirkungen auf die Elemente oder die Ausrichtung in den Grid-Bereichen hat. Grid-Elemente, sogar solche, die ihre Grid-Zelle überlaufen, haben keine Auswirkung auf die Spaltenrechtfertigung.

### Der sichere Schlüsselbegriff

Dieses Beispiel demonstriert den Schlüsselbegriff `safe`. Wir geben vier zentrierte Flex-Elemente an, die sich nicht umbrechen lassen und somit den einzelnen flex-line-container überlaufen. Durch das Hinzufügen von `safe` zu `center` in der `justify-content` Eigenschaft, verhält sich der überlaufende Inhalt so, als ob der Ausrichtungsmodus `start` ist.

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

Der Container ist auf `center` gesetzt, wobei jeder Container außer dem ersten das Schlüsselwort `safe` hinzugefügt hat:

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

Da ein Element den Ausrichtungscontainer überläuft, verhält sich der Ausrichtungsmodus mit eingeschlossenem `safe` wie `start` und die `center`-Ausrichtung wird nicht umgesetzt. Der Schlüsselbegriff `safe` hat keine Wirkung, wenn die Elemente nicht den Container überlaufen.

### Visualisierung der Flex-Element-Verteilung

Dieses Beispiel umfasst ein mehrfach umgebrochenes Flex-Layout. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor und nimmt den gesamten verfügbaren freien Raum in der ersten Flex-Linie ein.

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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die unterschiedlichen `justify-content`-Schlüsselwortwerte zu visualisieren. Da ein Element in der ersten Linie wachsen kann, gibt es keinen verfügbaren Raum in dieser Linie, den die `justify-content`-Eigenschaft verteilen könnte. Mit dem Wert `space-between` ist das erste Element jeder Linie bündig mit der Hauptstartkante und das letzte Element bündig mit der Hauptendkante. Daher, wenn eine Linie nur ein Element hat, wird es mit der Hauptstartlinie ausgerichtet (wie in der letzten Linie zu sehen). Dies ist nicht der Fall bei anderen `space-*` Werten wie `space-evenly` und `space-around`, die einzelelementige Flex-Linien zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
