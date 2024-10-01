---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-content`** Eigenschaft definiert, wie der Browser den Platz zwischen und um Inhaltsobjekte entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten demonstriert einige `justify-content` Werte anhand des Grid-Layouts.

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

  - : Die Elemente werden bündig zueinander an den Anfangsrand des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `end`

  - : Die Elemente werden bündig zueinander an den Endrand des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `flex-start`

  - : Die Elemente werden bündig zueinander in Richtung des Randes des Ausrichtungscontainers gepackt, je nach der Haupt-Startseite des Flex-Containers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`

  - : Die Elemente werden bündig zueinander in Richtung des Randes des Ausrichtungscontainers gepackt, je nach der Haupt-Endseite des Flex-Containers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`

  - : Die Elemente werden bündig zueinander in Richtung der Mitte des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `left`

  - : Die Elemente werden bündig zueinander in Richtung des linken Randes des Ausrichtungscontainers gepackt. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, wie zum Beispiel, wenn [`flex-direction: column;`](/de/docs/Web/CSS/flex-direction) gesetzt ist, verhält sich dieser Wert wie `start`.

- `right`

  - : Die Elemente werden bündig zueinander in Richtung des rechten Randes des Ausrichtungscontainers entlang der passenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Grid-Container) oder zur Hauptachse (in einem Flexbox-Container) verläuft, verhält sich dieser Wert wie `start`.

- `normal`

  - : Verhält sich wie `stretch`, außer im Fall von mehrspaltigen Containern mit einer nicht-`auto` [`column-width`](/de/docs/Web/CSS/column-width), bei denen die Spalten ihre angegebene `column-width` annehmen, anstatt sich zu dehnen, um den Container zu füllen. Da `stretch` sich wie `start` in Flex-Containern verhält, verhält sich `normal` auch wie `start`.

- `space-between`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Das erste Element ist bündig mit dem Haupt-Start-Rand und das letzte Element ist bündig mit dem Haupt-End-Rand.

- `space-around`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Der Leerraum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, dem Haupt-Start-Rand und dem ersten Element und dem Haupt-End-Rand und dem letzten Element ist jeweils genau gleich.

- `stretch`

  - : Wenn die kombinierte Größe der Gegenstände entlang der Hauptachse kleiner ist als die Größe des Ausrichtungscontainers, wird die Größe aller `auto`-größer Ten Elemente gleichmäßig (nicht proportional) erhöht, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder eine gleichwertige Funktionalität) auferlegten Beschränkungen eingehalten werden, damit die kombinierte Größe genau den Ausrichtungscontainer entlang der Hauptachse ausfüllt.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) verhält sich der `stretch` Wert wie `flex-start` oder `start`. Dies liegt daran, dass das Strecken in Flexboxen mit der {{CSSXref("flex-grow")}} Eigenschaft gesteuert wird.

- `safe`

  - : Wenn das Element den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als wäre der Ausrichtungsmodus `start`. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`

  - : Selbst wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, das die gewünschte Ausrichtung ignoriert, zugunsten der Vermeidung von Überlauf.

## Beschreibung

Definiert im [CSS Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul, gilt `justify-content` für Multicol-Container, Flex-Container und Grid-Container. Diese Eigenschaft gilt nicht für Block-Container und hat dort keine Wirkung.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}} Eigenschaft, aber nicht alle! `justify-content` ist nicht an der Baseline-Ausrichtung beteiligt und nimmt daher keine Baseline-Werte an.

In [Flex-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert die Eigenschaft, wie positiver freier Platz zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft beeinflusst den Platz zwischen Elementen in einer Linie, nicht den Platz zwischen den Zeilen. Die Ausrichtung erfolgt nachdem die Längen und automatischen Ränder angewendet worden sind, was bedeutet, dass wenn ein oder mehrere Flex-Elemente in einer Linie einen {{cssxref("flex-grow")}} Faktor größer als `0` haben, hat die Eigenschaft keine Wirkung, da es keinen Platz gibt, der entlang dieser Linie verteilt werden kann. Außerdem verhält sich das Strecken entlang der Hauptachse, das durch {{cssxref("flex")}} kontrolliert wird, bei dem Wert `stretch` wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verteilt diese Eigenschaft den verfügbaren Platz zwischen oder um die Gitterspalten, nicht zwischen Gitterelementen. Wenn der Grid-Container größer ist als das Gitter selbst, kann die `justify-content` Eigenschaft verwendet werden, um das Gitter entlang der Inline-Achse zu rechtfertigen und die Gitterspalten auszurichten.

Grid `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die Eigenschaften `align-content` und `justify-content` gedehnt werden. Dementsprechend nimmt eine `auto`-Größe Spur standardmäßig den übrigen Platz im Grid-Container ein. Da die Inline-Größe des Gitters kleiner als die des Grid-Containers sein muss, damit Platz zum Verteilen vorhanden ist, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Grid-Beispiel

In diesem Beispiel haben wir ein Gitter, das schmaler ist als sein Grid-Container, und wir verwenden `justify-content`, um den verfügbaren Platz gleichmäßig um und zwischen den Gitterspalten zu verteilen.

#### HTML

Der {{htmlelement("section")}} Container, unser zukünftiger Grid-Container, hat 16 verschachtelte {{htmlelement("div")}}s, die zu Gitterelementen werden.

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

Wir setzen die Containerbreite auf `500px` und spezifizieren drei Spalten, die jeweils `80px` breit sind, was bedeutet, dass `260px` verfügbarer Platz verteilt werden kann. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass `65px` Raum vor, zwischen und nach jeder Spalte vorhanden ist.

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

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keine Auswirkungen auf die Elemente oder die Ausrichtung in Grid-Bereichen hat. Grid-Elemente, selbst solche, die ihre Gitterzelle überlaufen, wirken sich nicht auf die Spaltenausrichtung aus.

### Der sichere Begriff

Dieses Beispiel zeigt den `safe` Begriff. Wir spezifizieren vier zentrierte Flex-Elemente, die sich nicht umschlagen dürfen und daher ihren einzelnen Flex-Zeilen-Container überlaufen. Durch das Hinzufügen von `safe` zu `center` in der `justify-content` Eigenschaft verhält sich überlaufender Inhalt so, als wäre der Ausrichtungsmodus `start`.

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

Der Container ist auf `center` gesetzt, wobei alle Container außer dem ersten das `safe` Schlüsselwort hinzugefügt bekommen:

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

Da ein Element den Ausrichtungscontainer überläuft, verhält sich der Ausrichtungsmodus mit `safe` wie `start` und die `center` Ausrichtung wird nicht umgesetzt. Der `safe` Begriff hat keine Wirkung, wenn die Elemente den Container nicht überlaufen.

### Visualisierung der Verteilung von Flex-Elementen

Dieses Beispiel umfasst ein mehrzeiliges Wickel-Flex-Layout. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor und nutzt den gesamten verfügbaren Freiraum in der ersten Flex-Zeile.

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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die verschiedenen `justify-content` Schlüsselwortwerte zu visualisieren. Da ein Element in der ersten Zeile wachsen kann, gibt es keinen verfügbaren Raum in dieser Zeile, den die `justify-content` Eigenschaft verteilen könnte. Mit dem `space-between` Wert ist das erste Element in jeder Zeile bündig mit dem Haupt-Start-Rand und das letzte Element ist bündig mit dem Haupt-End-Rand. Daher, wenn eine Zeile nur ein Element hat, wird es mit dem Haupt-Start-Rand ausgerichtet (wie in der letzten Zeile zu sehen). Dies ist nicht der Fall bei anderen `space-*` Werten, wie `space-evenly` und `space-around`, die Flex-Zeilen mit einem Element zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
