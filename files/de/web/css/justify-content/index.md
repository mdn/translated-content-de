---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`justify-content`** Eigenschaft bestimmt, wie der Browser den Platz zwischen und um Inhaltselemente entlang der {{Glossary("main axis")}} eines Flex-Containers und der [inline-Achse](/de/docs/Glossary/Logical_properties#inline_direction) von Grid- und Multicol-Containern verteilt.

Das interaktive Beispiel unten zeigt einige `justify-content` Werte unter Verwendung des Grid-Layouts.

{{EmbedInteractiveExample("pages/css/justify-content.html")}}

## Syntax

```css
/* Positionsausrichtung */
justify-content: center;
justify-content: start;
justify-content: end;
justify-content: flex-start;
justify-content: flex-end;
justify-content: left;
justify-content: right;

/* Normale Ausrichtung */
justify-content: normal;

/* Verteilte Ausrichtung */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
justify-content: stretch;

/* Überlauf-Ausrichtung */
justify-content: safe center;
justify-content: unsafe center;

/* Globale Werte */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;
```

### Werte

- `start`

  - : Die Elemente sind bündig zueinander und am Startpunkt des Ausrichtungscontainers entlang der Hauptachse angeordnet.

- `end`

  - : Die Elemente sind bündig zueinander und am Endpunkt des Ausrichtungscontainers entlang der Hauptachse angeordnet.

- `flex-start`

  - : Die Elemente sind bündig zueinander und abhängig von der Hauptanfangsseite des Flex-Containers am Rand des Ausrichtungscontainers angeordnet. Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`

  - : Die Elemente sind bündig zueinander und abhängig von der Hauptendseite des Flex-Containers am Rand des Ausrichtungscontainers angeordnet. Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`

  - : Die Elemente sind bündig zueinander in der Mitte des Ausrichtungscontainers entlang der Hauptachse angeordnet.

- `left`

  - : Die Elemente sind bündig zueinander am linken Rand des Ausrichtungscontainers angeordnet. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse ist, wie wenn [`flex-direction: column;`](/de/docs/Web/CSS/flex-direction) gesetzt ist, verhält sich dieser Wert wie `start`.

- `right`

  - : Die Elemente sind bündig zueinander am rechten Rand des Ausrichtungscontainers in der entsprechenden Achse angeordnet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Grid-Container) oder zur Hauptachse (in einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`

  - : Verhält sich wie `stretch`, außer bei mehrspaltigen Containern mit einer nicht `auto` [`column-width`](/de/docs/Web/CSS/column-width), in welchem Fall die Spalten ihre spezifizierte `column-width` annehmen, anstatt sich zu strecken, um den Container zu füllen. Da `stretch` sich wie `start` in Flex-Containern verhält, verhält sich `normal` auch wie `start`.

- `space-between`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist bündig mit dem Main-Startpunkt, und das letzte Element ist bündig mit dem Main-Endpunkt.

- `space-around`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`

  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, dem Main-Startpunkt und dem ersten Element, und dem Main-Endpunkt und dem letzten Element, ist überall genau gleich.

- `stretch`

  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner als die des Ausrichtungscontainers ist, werden alle `auto`-skalierten Elemente gleichmäßig vergrößert (nicht proportional), während gleichzeitig die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder entsprechende Funktionalitäten) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe den Ausrichtungscontainer entlang der Hauptachse genau ausfüllt.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) verhält sich der `stretch`-Wert wie `flex-start` oder `start`. Das liegt daran, dass das Strecken in Flexboxen mit der {{CSSXref("flex-grow")}} Eigenschaft gesteuert wird.

- `safe`

  - : Wenn das Element den Ausrichtungscontainer überfließt, wird das Element so ausgerichtet, als wäre der Ausrichtungsmodus `start`. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`

  - : Auch wenn das Element den Ausrichtungscontainer überfließt, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, das die gewünschte Ausrichtung ignoriert, um Überlauf zu vermeiden.

## Beschreibung

Definiert im [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment), gilt `justify-content` für Mehrspaltencontainer, Flex-Container und Grid-Container. Die Eigenschaft gilt nicht für Block-Container und hat keine Auswirkung darauf.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}} Eigenschaft, aber nicht alle! `justify-content` ist nicht in die Basislinienausrichtung involviert und nimmt daher keine Basislinienwerte an.

In [Flex-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert die Eigenschaft, wie positiver Freiraum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft beeinflusst den Raum zwischen Elementen in einer Zeile, nicht den Raum zwischen Zeilen. Die Ausrichtung erfolgt, nachdem die Längen und Auto-Ränder angewendet wurden, was bedeutet, dass wenn ein oder mehrere Flex-Elemente in einer Zeile einen {{cssxref("flex-grow")}} Faktor größer als `0` haben, die Eigenschaft keine Wirkung hat, da es keinen Platz gibt, der in dieser Zeile verteilt werden könnte. Da das Strecken entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch`-Wert wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verteilt diese Eigenschaft den verfügbaren Platz zwischen oder um die Gitterspalten, nicht die Gitter-Elemente. Wenn der Grid-Container größer als das Grid selbst ist, kann die `justify-content`-Eigenschaft verwendet werden, um das Grid entlang der Inline-Achse zu rechtfertigen, wobei die Gitterspalten ausgerichtet werden.

Grid-`auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die `align-content` und `justify-content`-Eigenschaften gestreckt werden. Daher nimmt eine `auto`-skalierte Spur standardmäßig jeglichen verbleibenden Platz im Grid-Container ein. Da die Inline-Größe des Grids kleiner als die des Grid-Containers sein muss, um Platz zu verteilen, hat die Eigenschaft in diesem Fall keine Auswirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Grid-Beispiel

In diesem Beispiel haben wir ein Grid, das schmaler als sein Grid-Container ist, und wir verwenden `justify-content`, um den verfügbaren Platz gleichmäßig um und zwischen die Grid-Spalten zu verteilen.

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

Wir setzen die Containerbreite auf `500px` und spezifizieren drei Spalten, die jeweils `80px` breit sind, was bedeutet, dass `260px` verfügbarer Platz zum Verteilen zwischen oder um sie herum vorhanden ist. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass es `65px` Platz vor, zwischen und nach jeder Spalte gibt.

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

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keinen Einfluss auf die Elemente oder die Ausrichtung in Grid-Bereichen hat. Grid-Elemente, sogar solche, die ihre Rasterzelle überschreiten, haben keinen Einfluss auf die Spaltenjustierung.

### Der sichere Schlüsselbegriff

Dieses Beispiel demonstriert den `safe` Schlüsselbegriff. Wir spezifizieren vier zentrierte Flex-Elemente, die sich nicht umschlagen lassen und dadurch ihren einzigen Flex-Line-Container überlaufen. Indem wir `safe` zu `center` in der `justify-content`-Eigenschaft hinzugefügt haben, verhält sich überlaufener Inhalt so, als wäre der Ausrichtungsmodus `start`.

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
<p><code>justify-content: safe center;</code> mit 3 Elementen</p>
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

Der Container ist auf `center` gesetzt, wobei zu jedem Container außer dem ersten das `safe` Schlüsselwort hinzugefügt wurde:

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

Wenn ein Element den Ausrichtungscontainer überläuft, verhält sich der Ausrichtungsmodus mit eingeschlossenem `safe` wie `start` und die `center` Ausrichtung wird nicht umgesetzt. Der `safe` Schlüsselbegriff hat keinen Effekt, wenn die Elemente die Containergröße nicht überschreiten.

### Visualisierung der Verteilung von Flex-Elementen

Dieses Beispiel umfasst ein Flex-Layout mit automatischem Zeilenumbruch. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor und nimmt dadurch den gesamten verfügbaren freien Platz der ersten Flex-Zeile ein.

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
  justify-content: space-between; /* Kann im Live-Beispiel geändert werden */
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

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü aus, um die verschiedenen `justify-content` Schlüsselwort-Werte zu visualisieren. Da ein Element in der ersten Zeile wachsen kann, gibt es keinen verfügbaren Platz in dieser Zeile, den die `justify-content` Eigenschaft verteilen könnte. Mit dem `space-between` Wert ist das erste Element jeder Zeile bündig mit dem Main-Start-Rand, und das letzte Element bündig mit dem Main-End-Rand. Infolgedessen, wenn eine Zeile nur ein Element hat, wird es mit dem Main-Start-Rand ausgerichtet (wie in der letzten Zeile zu sehen). Dies ist nicht der Fall für andere `space-*` Werte, wie `space-evenly` und `space-around`, die einzeilige Flex-Linien zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
