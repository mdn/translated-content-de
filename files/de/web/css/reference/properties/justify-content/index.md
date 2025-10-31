---
title: justify-content
slug: Web/CSS/Reference/Properties/justify-content
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die [CSS](/de/docs/Web/CSS) **`justify-content`** Eigenschaft definiert, wie der Browser den Raum zwischen und um Inhalte entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten zeigt einige `justify-content` Werte mit Hilfe eines Grid-Layouts.

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
  - : Die Elemente werden eng aneinandergereiht zum Start-Rand des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `end`
  - : Die Elemente werden eng aneinandergereiht zum End-Rand des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `flex-start`
  - : Die Elemente werden eng aneinandergereiht zum Start-Rand des Ausrichtungscontainers auf der Hauptstart-Seite des Flexcontainers gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`
  - : Die Elemente werden eng aneinandergereiht am End-Rand des Ausrichtungscontainers auf der Hauptend-Seite des Flexcontainers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `end` behandelt.

- `center`
  - : Die Elemente werden eng aneinander zentral innerhalb des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `left`
  - : Die Elemente werden eng aneinandergereiht zum linken Rand des Ausrichtungscontainers gepackt. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse ist, wie z.B. wenn [`flex-direction: column;`](/de/docs/Web/CSS/Reference/Properties/flex-direction) gesetzt ist, verhält sich dieser Wert wie `start`.

- `right`
  - : Die Elemente werden eng aneinandergereiht zum rechten Rand des Ausrichtungscontainers entlang der geeigneten Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Grid-Container) oder der Hauptachse (in einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`
  - : Verhält sich wie `stretch`, außer im Falle von Mehrspalten-Containern mit einer nicht-`auto` [`column-width`](/de/docs/Web/CSS/Reference/Properties/column-width), in welchem Fall die Spalten ihre angegebene `column-width` annehmen, anstatt sich ausdehnen zu lassen, um den Container zu füllen. Da `stretch` sich in Flex-Containern wie `start` verhält, tut `normal` dies ebenfalls.

- `space-between`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Das erste Element liegt bündig am Hauptstart-Rand und das letzte Element liegt bündig am Hauptend-Rand.

- `space-around`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente. Gibt es nur ein Element, wird es zentriert.

- `space-evenly`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, dem Hauptstart-Rand und dem ersten Element sowie dem Hauptend-Rand und dem letzten Element ist genau derselbe.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-Elemente in ihrer Größe gleichmäßig (nicht proportional) vergrößert, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder äquivalente Funktionalität) auferlegten Einschränkungen respektiert werden, um den Ausrichtungscontainer entlang der Hauptachse genau zu füllen.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) verhält sich der `stretch` Wert wie `flex-start` oder `start`. Dies liegt daran, dass in Flexboxen das Strecken mit Hilfe der {{CSSXref("flex-grow")}} Eigenschaft gesteuert wird.

- `safe`
  - : Wenn das Element den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als wäre der Ausrichtungsmodus `start`. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`
  - : Auch wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, das die gewünschte Ausrichtung ignoriert, um Überlauf zu verhindern.

## Beschreibung

Definiert im [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul, gilt `justify-content` für Multicol-Container, Flex-Container und Grid-Container. Die Eigenschaft gilt nicht für Block-Container und hat auf diese keinen Einfluss.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}} Eigenschaft, aber nicht alle! `justify-content` ist nicht in Baseline-Ausrichtung involviert und nimmt daher keine Baseline-Werte an.

In [Flex-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert die Eigenschaft, wie positiver freier Raum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft beeinflusst den Raum zwischen Elementen in einer Linie, nicht den Raum zwischen den Linien. Die Ausrichtung erfolgt, nachdem die Längen und automatische Ränder angewendet wurden, was bedeutet, dass, wenn eines oder mehrere Flex-Elemente in einer Linie einen {{cssxref("flex-grow")}} Faktor größer als `0` haben, die Eigenschaft keinen Effekt hat, da kein Raum zu verteilen ist entlang dieser Linie. Da das Strecken entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch` Wert wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verteilt diese Eigenschaft den verfügbaren Raum zwischen oder um Grid-Spalten, nicht Grid-Elemente. Ist der Grid-Container größer als das Gitternetz selbst, kann die `justify-content` Eigenschaft verwendet werden, um das Grid entlang der Inline-Achse zu rechtfertigen, die Grid-Spalten auszurichten.

Grid `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die `align-content` und `justify-content` Eigenschaften gestreckt werden. Daher nimmt eine `auto`-Größe Spur standardmäßig allen verbleibenden Raum im Grid-Container ein. Da die Inline-Größe des Grids geringer als die des Grid-Containers sein muss, um Raum zu verteilen, hat die Eigenschaft in diesem Fall keinen Effekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Grid-Beispiel

In diesem Beispiel haben wir ein Grid, das schmaler ist als sein Grid-Container, und verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Grid-Spalten zu verteilen.

#### HTML

Der {{htmlelement("section")}} Container, unser zukünftiger Grid-Container, hat 16 verschachtelte {{htmlelement("div")}}s, die zu Grid-Elementen werden.

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

Wir setzen die Container-Breite auf `500px` und geben drei Spalten an, jede `80px` breit, was bedeutet, dass `260px` verfügbarer Raum zu verteilen ist. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass es `65px` Raum vor, zwischen und nach jeder Spalte gibt.

Wir setzen unterschiedliche Breiten (und Hintergrundfarben) ein, um zu demonstrieren, wie die Ausrichtung auf die Spalten angewendet wird.

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

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keinen Einfluss auf die Elemente oder die Ausrichtung in Grid-Bereichen hat. Grid-Elemente, selbst die, die ihre Grid-Zelle überschreiten, beeinflussen nicht die Spaltenausrichtung.

### Der safe Schlüsselbegriff

Dieses Beispiel demonstriert den `safe` Schlüsselbegriff. Wir geben vier zentrierte Flex-Elemente an, die nicht umgebrochen werden dürfen und infolgedessen ihren einzeiligen Flex-Container überlaufen. Indem wir `safe` zu `center` in der `justify-content` Eigenschaft hinzufügen, verhält sich der überlaufende Inhalt, als wäre der Ausrichtungsmodus `start`.

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

Da ein Element den Ausrichtungscontainer überläuft, verhält sich der Ausrichtungsmodus mit `safe` wie `start` und die `center` Ausrichtung wird nicht umgesetzt. Der `safe` Schlüsselbegriff hat keinen Effekt, wenn die Elemente nicht den Container überlaufen.

### Visualisierung der Flex-Element-Verteilung

Dieses Beispiel beinhaltet ein mehrzeiliges Wrap-Flex-Layout. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor und nimmt den gesamten verfügbaren freien Raum in der ersten Flex-Zeile ein.

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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die verschiedenen `justify-content` Schlüsselwortwerte zu visualisieren. Da ein Element in der ersten Zeile wachsen kann, gibt es keinen verfügbaren Platz in dieser Zeile, den die `justify-content` Eigenschaft verteilen könnte. Mit dem `space-between` Wert ist das erste Element jeder Zeile bündig mit dem Hauptstart-Rand und das letzte Element bündig mit dem Hauptend-Rand. Daher, wenn eine Zeile nur ein Element hat, wird dieses mit dem Hauptstart-Rand ausgerichtet (wie auf der letzten Zeile zu sehen). Dies ist nicht der Fall für andere `space-*` Werte wie `space-evenly` und `space-around`, die einzeilige Flex-Linien zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
