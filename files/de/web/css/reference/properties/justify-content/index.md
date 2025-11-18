---
title: justify-content
slug: Web/CSS/Reference/Properties/justify-content
l10n:
  sourceCommit: 7b291dab974ec1ceb97c83f45ce76c3afada2e63
---

Die [CSS](/de/docs/Web/CSS) **`justify-content`**-Eigenschaft definiert, wie der Browser den Raum zwischen und um Inhaltsobjekte entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten demonstriert einige `justify-content`-Werte unter Verwendung des Grid-Layouts.

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
  - : Die Elemente werden bündig zueinander am Start-Rand des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `end`
  - : Die Elemente werden bündig zueinander am End-Rand des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `flex-start`
  - : Die Elemente werden bündig zueinander am Start-Rand des Ausrichtungscontainers auf der main-start Seite des Flex-Containers gepackt. Dies gilt nur für Elemente im Flex-Layout. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`
  - : Die Elemente werden bündig zueinander am End-Rand des Ausrichtungscontainers auf der main-end Seite des Flex-Containers gepackt. Dies gilt nur für Elemente im Flex-Layout. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`
  - : Die Elemente werden bündig zueinander zur Mitte des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `left`
  - : Die Elemente werden bündig zueinander zum linken Rand des Ausrichtungscontainers gepackt. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse ist, wie z. B. wenn [`flex-direction: column;`](/de/docs/Web/CSS/Reference/Properties/flex-direction) gesetzt ist, verhält sich dieser Wert wie `start`.

- `right`
  - : Die Elemente werden bündig zueinander zum rechten Rand des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (bei einem Grid-Container) oder zur Hauptachse (bei einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`
  - : Verhält sich wie `stretch`, außer im Fall von Mehrspalten-Containern mit einer nicht-`auto` [`column-width`](/de/docs/Web/CSS/Reference/Properties/column-width), in welchem Fall die Spalten ihre angegebene `column-width` einnehmen, anstatt sich zu strecken, um den Container zu füllen. Da `stretch` sich in Flex-Containern wie `start` verhält, verhält sich `normal` auch wie `start`.

- `space-between`
  - : Die Elemente werden gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar von benachbarten Elementen ist gleich. Das erste Element liegt bündig am main-start Rand, und das letzte Element bündig am main-end Rand.

- `space-around`
  - : Die Elemente werden gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar von benachbarten Elementen ist gleich. Der Leerraum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`
  - : Die Elemente werden gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar von benachbarten Elementen, dem main-start Rand und dem ersten Element, sowie dem main-end Rand und dem letzten Element ist exakt gleich.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner ist als die Größe des Ausrichtungscontainers, wird die Größe von `auto`-dimensionierten Elementen gleichmäßig (nicht proportional) erhöht, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionen) auferlegten Beschränkungen berücksichtigt werden, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Hauptachse ausfüllt.

    > [!NOTE]
    > Für [Flexboxes](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) verhält sich der `stretch` Wert wie `flex-start` oder `start`. Dies liegt daran, dass das Strecken in Flexboxes mit der {{CSSXref("flex-grow")}} Eigenschaft gesteuert wird.

- `safe`
  - : Wenn das Element den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`
  - : Selbst wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung umgesetzt. Anders als bei `safe`, welches die gewünschte Ausrichtung zugunsten des Verhinderns von Überläufen ignoriert.

## Beschreibung

Definiert im [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul, gilt `justify-content` für Multicol-Container, Flex-Container und Grid-Container. Die Eigenschaft gilt nicht für und hat keine Wirkung auf Block-Container.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}} Eigenschaft, aber nicht alle! `justify-content` ist nicht in die Baseline-Ausrichtung eingebunden und nimmt daher keine Baseline-Werte an.

In [Flex-Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout) definiert die Eigenschaft, wie positiver freier Raum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft wirkt sich auf den Raum zwischen Elementen in einer Linie aus, nicht auf den Raum zwischen Linien. Die Ausrichtung erfolgt, nachdem die Längen und automatischen Ränder angewendet wurden, was bedeutet, dass, wenn eines oder mehrere Flex-Elemente in einer Linie einen {{cssxref("flex-grow")}} Faktor größer als `0` haben, die Eigenschaft keine Wirkung hat, da kein Raum zum Verteilen entlang dieser Linie vorhanden ist. Auch da das Strecken entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch` Wert wie `flex-start`.

Beim [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) verteilt diese Eigenschaft den verfügbaren Raum zwischen oder um Grid-Spalten, nicht um Grid-Elemente. Wenn der Grid-Container größer ist als das Grid selbst, kann die `justify-content` Eigenschaft verwendet werden, um das Grid entlang der Inline-Achse zu rechtfertigen und die Grid-Spalten auszurichten.

Grid `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die `align-content` und `justify-content` Eigenschaften gestreckt werden. Daher wird ein `auto` dimensionierter Spurstandardmäßig verbleibenden Raum im Grid-Container einnehmen. Da die Inline-Größe des Grids kleiner als die Inline-Größe des Grid-Containers sein muss, damit Raum zum Verteilen vorhanden ist, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Grid-Beispiel

In diesem Beispiel haben wir ein Grid, das schmaler als sein Grid-Container ist und verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Grid-Spalten zu verteilen.

#### HTML

Der {{htmlelement("section")}} Container, unser werdender Grid-Container, hat 16 verschachtelte {{htmlelement("div")}}s, die zu Grid-Elementen werden.

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

Wir setzen die Containerbreite auf `500px` und spezifizieren drei Spalten, jede `80px` breit, was bedeutet, dass `260px` verfügbarer Raum zwischen oder um sie herum verteilt werden muss. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass es `65px` Raum vor, zwischen und nach jeder Spalte geben wird.

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

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keine Wirkung auf die Elemente oder die Ausrichtung in Grid-Bereichen hat. Grid-Elemente, sogar diejenigen, die ihre Grid-Zelle überlaufen, beeinflussen nicht die Spaltenfestlegung.

### Der `safe` Schlüsselbegriff

Dieses Beispiel demonstriert den `safe` Schlüsselbegriff. Wir spezifizieren vier zentrierte Flex-Elemente, die nicht umgebrochen werden dürfen und als Ergebnis ihren einzeiligen Flex-Container überlaufen. Durch das Hinzufügen von `safe` zu `center` in der `justify-content` Eigenschaft verhält sich der überlaufende Inhalt so, als wäre der Ausrichtungsmodus `start`.

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

Der Container ist auf `center` gesetzt, wobei jedem Container außer dem ersten das `safe` Schlüsselwort hinzugefügt wurde:

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

Da ein Element den Alignment-Container überläuft, verhält sich der Alignment-Modus mit enthaltenem `safe` als `start`, und die `center` Ausrichtung wird nicht umgesetzt. Der `safe` Schlüsselbegriff hat keine Wirkung, wenn die Elemente den Container nicht überlaufen.

### Visualisierung der Verteilung von Flex-Elementen

Dieses Beispiel beinhaltet ein mehrzeiliges Flex-Layout mit Umbruch. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor, der den gesamten verfügbaren freien Raum in der ersten Flex-Linie einnimmt.

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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die verschiedenen `justify-content` Schlüsselwortwerte zu visualisieren. Da ein Element in der ersten Linie wachsen kann, gibt es keinen verfügbaren Raum in dieser Linie für die Verteilung durch die `justify-content` Eigenschaft. Mit dem `space-between` Wert ist das erste Element in jeder Linie bündig mit dem main-start Rand, und das letzte Element ist bündig mit dem main-end Rand. Als Ergebnis wird eine Linie mit nur einem Element mit dem main-start Rand ausgerichtet (wie in der letzten Linie zu sehen). Dies ist nicht der Fall bei anderen `space-*` Werten, wie `space-evenly` und `space-around`, die einzeilige Flex-Linien zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul
