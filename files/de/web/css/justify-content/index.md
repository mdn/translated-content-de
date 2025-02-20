---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: e0372718e0dfb95948fb77a5026667b6e338c3d1
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-content`**-Eigenschaft definiert, wie der Browser Platz zwischen und um Inhaltsobjekte entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten zeigt einige `justify-content`-Werte mit einem Grid-Layout.

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

  - : Die Elemente werden bündig zueinander an den Start-Rand des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `end`

  - : Die Elemente werden bündig zueinander an den End-Rand des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `flex-start`

  - : Die Elemente werden bündig zueinander an den Start-Rand des Ausrichtungscontainers auf der Haupt-Start-Seite des Flex-Containers gepackt.
    Dies gilt nur für Objekte innerhalb eines Flex-Layouts. Bei Elementen, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`

  - : Die Elemente werden bündig zueinander an den End-Rand des Ausrichtungscontainers auf der Haupt-End-Seite des Flex-Containers gepackt.
    Dies gilt nur für Objekte innerhalb eines Flex-Layouts. Bei Elementen, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`

  - : Die Elemente werden bündig zueinander zum Zentrum des Ausrichtungscontainers entlang der Hauptachse ausgerichtet.

- `left`

  - : Die Elemente werden bündig zueinander an den linken Rand des Ausrichtungscontainers ausgerichtet. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse liegt, wie z. B. bei [`flex-direction: column;`](/de/docs/Web/CSS/flex-direction), verhält sich dieser Wert wie `start`.

- `right`

  - : Die Elemente werden bündig zueinander an den rechten Rand des Ausrichtungscontainers in der jeweiligen Achse ausgerichtet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Grid-Container) oder der Hauptachse (in einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`

  - : Verhält sich wie `stretch`, außer bei Multicol-Containern mit einer nicht-`auto` [`column-width`](/de/docs/Web/CSS/column-width), in welchem Fall die Spalten ihre angegebene `column-width` annehmen, anstatt sich an den Container anzupassen. Da `stretch` sich in Flex-Containern wie `start` verhält, verhält sich `normal` ebenfalls wie `start`.

- `space-between`

  - : Die Elemente werden gleichmäßig entlang der Hauptachse innerhalb des Ausrichtungscontainers verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist identisch. Das erste Element ist bündig mit dem Haupt-Start-Rand und das letzte Element ist bündig mit dem Haupt-End-Rand.

- `space-around`

  - : Die Elemente werden gleichmäßig entlang der Hauptachse innerhalb des Ausrichtungscontainers verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist identisch. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`

  - : Die Elemente werden gleichmäßig entlang der Hauptachse innerhalb des Ausrichtungscontainers verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, dem Haupt-Start-Rand und dem ersten Element sowie dem Haupt-End-Rand und dem letzten Element ist jeweils gleich.

- `stretch`

  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner ist als die Größe des Ausrichtungscontainers, wird die Größe von `auto`-bemaßten Elementen gleichermaßen (nicht proportional) vergrößert, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder vergleichbare Funktionalitäten) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Hauptachse ausfüllt.

    > [!NOTE]
    > Für [Flexbox-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) verhält sich der Wert `stretch` wie `flex-start` oder `start`. Dies liegt daran, dass das Strecken in Flexbox-Layouts durch die {{CSSXref("flex-grow")}}-Eigenschaft gesteuert wird.

- `safe`

  - : Wenn das Element den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`

  - : Auch wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, das die gewünschte Ausrichtung zugunsten der Vermeidung von Überläufen ignoriert.

## Beschreibung

Definiert im [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Modul, gilt `justify-content` für Multicol-Container, Flex-Container und Grid-Container. Die Eigenschaft gilt nicht für Block-Container und hat dort keine Wirkung.

Diese Eigenschaft teilt sich viele Schlüsselwort-Werte mit der {{cssxref("align-content")}}-Eigenschaft, jedoch nicht alle! `justify-content` ist nicht an der Basislinien-Ausrichtung beteiligt und nimmt daher keine Basislinien-Werte an.

In [Flex-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert die Eigenschaft, wie positiver freier Raum zwischen oder um Flex-Items entlang der Hauptachse verteilt wird. Diese Eigenschaft wirkt sich auf den Raum zwischen den Elementen einer Zeile aus, nicht auf den Raum zwischen den Zeilen. Die Ausrichtung erfolgt, nachdem die Längen und automatischen Ränder angewendet wurden, was bedeutet, dass, wenn eines oder mehrere Flex-Items in einer Zeile einen {{cssxref("flex-grow")}}-Faktor größer als `0` haben, die Eigenschaft keine Wirkung hat, da kein Platz vorhanden ist, der auf diese Zeile verteilt werden kann. Außerdem, da das Strecken entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch`-Wert wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verteilt diese Eigenschaft den verfügbaren Raum zwischen oder um die Grid-Spalten, nicht die Grid-Items. Wenn der Grid-Container größer ist als das Grid selbst, kann die `justify-content`-Eigenschaft verwendet werden, um das Grid entlang der Inline-Achse auszurichten und die Grid-Spalten zu justieren.

Grid-`auto`-Track-Größen (und nur `auto`-Track-Größen) können durch die Eigenschaften `align-content` und `justify-content` gestreckt werden. Daher nimmt eine `auto`-bemaßte Spur standardmäßig jeden verbleibenden Platz im Raster-Container ein. Da die Inline-Größe des Grids kleiner sein muss als die Inline-Größe des Grid-Containers, damit Platz zum Verteilen vorhanden ist, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Grid-Beispiel

In diesem Beispiel haben wir ein Grid, das schmaler ist als sein Grid-Container, und verwenden `justify-content`, um den verfügbaren Platz gleichmäßig um und zwischen den Grid-Spalten zu verteilen.

#### HTML

Der {{htmlelement("section")}}-Container, unser zukünftiger Grid-Container, enthält 16 verschachtelte {{htmlelement("div")}}s, die zu Grid-Items werden.

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

Wir setzen die Container-Breite auf `500px` und legen drei Spalten fest, die jeweils `80px` breit sind, was bedeutet, dass `260px` an verfügbarem Platz zwischen oder um sie herum verteilt werden können. Wir verwenden dann `justify-content: space-evenly`, was bedeutet, dass es `65px` Platz vor, zwischen und nach jeder Spalte gibt.

Wir setzen unterschiedliche Breiten (und Hintergrundfarben), um zu zeigen, wie die Justierung auf die Spalten angewendet wird.

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

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keinen Einfluss auf die Items oder die Ausrichtung innerhalb der Grid-Bereiche hat. Grid-Items, selbst solche, die ihre Rasterzelle überschreiten, haben keinen Einfluss auf die Spaltenausrichtung.

### Das Schlüsselwort `safe`

Dieses Beispiel demonstriert das Schlüsselwort `safe`. Wir geben vier zentrierte Flex-Items an, die nicht umbrechen dürfen und daher ihren einzeiligen Flex-Container überlaufen. Durch Hinzufügen von `safe` zu `center` in der `justify-content`-Eigenschaft verhält sich überlaufender Inhalt so, als wäre der Ausrichtungsmodus `start`.

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

Der Container wird auf `center` gesetzt, wobei jeder Container außer dem ersten das Schlüsselwort `safe` hinzugefügt bekommt:

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

Wenn ein Element den Ausrichtungscontainer überläuft, verhält sich der Ausrichtungsmodus mit `safe` wie `start` und die `center`-Ausrichtung wird nicht umgesetzt. Das Schlüsselwort `safe` hat keine Wirkung, wenn die Items den Container nicht überlaufen.

### Visualisierung der Verteilung von Flex-Items

Dieses Beispiel enthält ein mehrzeiliges, umbrochenes Flex-Layout. Das zweite Flex-Item hat einen positiven Flex-Wachstumsfaktor und nimmt den gesamten verfügbaren freien Platz in der ersten Flex-Zeile ein.

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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die verschiedenen `justify-content`-Schlüsselwortwerte zu visualisieren. Da ein Element in der ersten Zeile wachsen kann, gibt es keinen verfügbaren Platz in dieser Zeile, den die `justify-content`-Eigenschaft verteilen könnte. Beim Wert `space-between` ist das erste Element jeder Zeile bündig mit dem Haupt-Start-Rand und das letzte Element bündig mit dem Haupt-End-Rand. Infolgedessen wird eine Zeile mit nur einem Item mit dem Haupt-Start-Rand ausgerichtet (wie in der letzten Zeile zu sehen). Dies ist bei anderen `space-*`-Werten wie `space-evenly` und `space-around`, die einzeilige Flex-Zeilen zentrieren, nicht der Fall.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Items in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Modul
