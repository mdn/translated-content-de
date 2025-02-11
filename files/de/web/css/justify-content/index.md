---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-content`**-Eigenschaft definiert, wie der Browser den Platz zwischen und um Inhaltselemente entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers sowie der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten zeigt einige `justify-content`-Werte mithilfe des Grid-Layouts.

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

  - : Die Elemente werden bündig zueinander in Richtung des Start-Rands des Ausrichtungskontextes entlang der Hauptachse gepackt.

- `end`

  - : Die Elemente werden bündig zueinander in Richtung des End-Rands des Ausrichtungskontextes entlang der Hauptachse gepackt.

- `flex-start`

  - : Die Elemente werden bündig zueinander in Richtung des Rands des Ausrichtungskontextes gepackt, der von der Haupt-Start-Seite des Flex-Containers abhängt.
    Dies gilt nur für Elemente im Flex-Layout. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`

  - : Die Elemente werden bündig zueinander in Richtung des Rands des Ausrichtungskontextes gepackt, der von der Haupt-End-Seite des Flex-Containers abhängt.
    Dies gilt nur für Elemente im Flex-Layout. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`

  - : Die Elemente werden bündig zueinander entlang der Achse im Zentrum des Ausrichtungskontextes gepackt.

- `left`

  - : Die Elemente werden bündig zueinander in Richtung des linken Rands des Ausrichtungskontextes gepackt. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, wie z. B. bei [`flex-direction: column;`](/de/docs/Web/CSS/flex-direction), verhält sich dieser Wert wie `start`.

- `right`

  - : Die Elemente werden bündig zueinander in Richtung des rechten Rands des Ausrichtungskontextes entlang der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (bei einem Grid-Container) oder zur Hauptachse (bei einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`

  - : Verhält sich wie `stretch`, außer bei Mehrspaltensystemen mit einer nicht-`auto`-[`column-width`](/de/docs/Web/CSS/column-width), in welchem Fall die Spalten ihre angegebene `column-width` annehmen, anstatt sich zu strecken, um den Container zu füllen. Da `stretch` sich in Flex-Containern wie `start` verhält, gilt dasselbe für `normal`.

- `space-between`

  - : Die Elemente werden gleichmäßig im Ausrichtungskontext entlang der Hauptachse verteilt. Der Abstand zwischen den benachbarten Elementen ist gleich. Das erste Element liegt bündig mit dem Haupt-Start-Rand, das letzte Element bündig am Haupt-End-Rand.

- `space-around`

  - : Die Elemente werden gleichmäßig im Ausrichtungskontext entlang der Hauptachse verteilt. Der Abstand zwischen den benachbarten Elementen ist gleich. Der Abstand vor dem ersten und nach dem letzten Element beträgt die Hälfte des Abstands zwischen zwei benachbarten Elementen. Wenn es nur ein Element gibt, wird dieses zentriert.

- `space-evenly`

  - : Die Elemente werden gleichmäßig im Ausrichtungskontext entlang der Hauptachse verteilt. Der Abstand zwischen jedem benachbarten Element sowie der Abstand zwischen dem Haupt-Start-Rand und dem ersten Element und zwischen dem Haupt-End-Rand und dem letzten Element ist genau gleich.

- `stretch`

  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner ist als die Größe des Ausrichtungskontextes, werden Elemente mit `auto`-Größe gleichmäßig (nicht proportional) vergrößert, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Beschränkungen respektiert werden, sodass die kombinierte Größe den Ausrichtungskontext entlang der Hauptachse genau ausfüllt.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) verhält sich der Wert `stretch` wie `flex-start` oder `start`. Dies liegt daran, dass in Flexboxen das Strecken mithilfe der {{CSSXref("flex-grow")}}-Eigenschaft gesteuert wird.

- `safe`

  - : Wenn das Element den Ausrichtungskontext überschreitet, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` ist. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`

  - : Selbst wenn das Element den Ausrichtungskontext überschreitet, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, das die gewünschte Ausrichtung zugunsten der Vermeidung von Überläufen ignoriert.

## Beschreibung

Definiert im [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment), gilt `justify-content` für Multicol-Container, Flex-Container und Grid-Container. Diese Eigenschaft gilt jedoch nicht für Block-Container und hat dort keine Wirkung.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}}-Eigenschaft, jedoch nicht alle! `justify-content` ist nicht in die Baseline-Ausrichtung eingebunden und akzeptiert daher keine Baseline-Werte.

In [Flex-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert die Eigenschaft, wie positiver Freiraum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft wirkt sich auf den Platz zwischen den Elementen in einer Zeile, nicht aber zwischen Zeilen aus. Die Ausrichtung erfolgt nach Anwendung der Längen und automatischen Margen. Das bedeutet, wenn eines oder mehrere Flex-Elemente in einer Zeile einen {{cssxref("flex-grow")}}-Faktor größer als `0` haben, hat die Eigenschaft keine Wirkung, da es keinen freien Platz entlang dieser Zeile gibt. Da das Strecken entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der Wert `stretch` wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verteilt diese Eigenschaft den verfügbaren Platz zwischen oder um die Grid-Spalten, nicht die einzelnen Grid-Elemente. Wenn der Grid-Container größer ist als das Grid selbst, kann die Eigenschaft `justify-content` verwendet werden, um das Grid entlang der Inline-Achse zu rechtfertigen und die Grid-Spalten auszurichten.

Grid-`auto`-Spurgrößen (und nur `auto`-Spurgrößen) können durch die Eigenschaften `align-content` und `justify-content` gedehnt werden. Daher nimmt eine auf `auto` eingestellte Spur standardmäßig den verbleibenden Platz im Grid-Container ein. Da die Inline-Größe des Grids kleiner sein muss als die des Containers, damit Platz verteilt werden kann, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Grid-Beispiel

In diesem Beispiel ist das Grid kleiner als sein Grid-Container, und wir verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Grid-Spalten zu verteilen.

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

Wir setzen die Containerbreite auf `500px` und spezifizieren drei Spalten, jede `80px` breit, was bedeutet, dass es `260px` verfügbaren Raum gibt, der zwischen oder um die Spalten verteilt werden kann. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass es `65px` Platz vor, zwischen und nach jeder Spalte gibt.

Wir setzen verschiedene Breiten (und Hintergrundfarben), um zu zeigen, wie die Spalten ausgerichtet werden.

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

Beachten Sie, dass `justify-content` die Spalten ausrichtet und keine Auswirkungen auf die Elemente oder die Ausrichtung in Grid-Bereichen hat. Grid-Elemente, selbst solche, die ihre Grid-Zelle überschreiten, beeinflussen die Spaltenausrichtung nicht.

### Der Schlüsselbegriff `safe`

Dieses Beispiel demonstriert den Schlüsselbegriff `safe`. Wir spezifizieren vier zentrierte Flex-Elemente, die nicht umbrechen dürfen und folglich ihren einzigen Flex-Line-Container überlaufen. Durch das Hinzufügen von `safe` zu `center` in der `justify-content`-Eigenschaft verhält sich überlaufender Inhalt so, als ob der Ausrichtungsmodus `start` ist.

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

Der Container wird auf `center` gesetzt, wobei bei jedem Container außer dem ersten das Schlüsselwort `safe` hinzugefügt wird:

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

Da ein Element den Ausrichtungskontext überläuft, verhält sich der Ausrichtungsmodus mit eingeschlossenem `safe` wie `start`, und die `center`-Ausrichtung wird nicht umgesetzt. Der Schlüsselbegriff `safe` hat keine Wirkung, wenn die Elemente nicht aus dem Container überlaufen.

### Visualisierung der Flex-Element-Verteilung

Dieses Beispiel umfasst ein Flex-Layout mit Umbruch über mehrere Zeilen. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor und nimmt den gesamten verfügbaren Raum in der ersten Zeile ein.

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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die unterschiedlichen Schlüsselwortwerte der Eigenschaft `justify-content` zu visualisieren. Da ein Element in der ersten Zeile wachsen kann, gibt es keinen verfügbaren Raum auf dieser Zeile, den die `justify-content`-Eigenschaft verteilen könnte. Mit dem Wert `space-between` ist das erste Element jeder Zeile bündig mit dem Haupt-Start-Rand und das letzte Element bündig mit dem Haupt-End-Rand. Wenn eine Zeile nur ein Element enthält, wird diese mit dem Haupt-Start-Rand ausgerichtet (wie in der letzten Zeile zu sehen). Dies ist bei anderen `space-*`-Werten wie `space-evenly` und `space-around` nicht der Fall, die einzeilige Flex-Leisten zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlagen von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Modul
