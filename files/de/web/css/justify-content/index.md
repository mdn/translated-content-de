---
title: justify-content
slug: Web/CSS/justify-content
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die [CSS](/de/docs/Web/CSS) **`justify-content`** Eigenschaft definiert, wie der Browser den Raum zwischen und um Inhaltelemente entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers und der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Spalten-Containern verteilt.

Das interaktive Beispiel unten demonstriert einige `justify-content` Werte mit Hilfe von Grid-Layout.

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
  - : Die Elemente werden bündig zueinander in Richtung des Start-Rands des Ausrichtungscontainers auf der Hauptachse gepackt.

- `end`
  - : Die Elemente werden bündig zueinander in Richtung des End-Rands des Ausrichtungscontainers auf der Hauptachse gepackt.

- `flex-start`
  - : Die Elemente werden bündig zueinander in Richtung des Start-Rands des Ausrichtungscontainers auf der Haupt-Start-Seite des Flex-Containers gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`
  - : Die Elemente werden bündig zueinander am End-Rand des Ausrichtungscontainers auf der Haupt-End-Seite des Flex-Containers gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`
  - : Die Elemente werden bündig zueinander in Richtung der Mitte des Ausrichtungscontainers entlang der Hauptachse gepackt.

- `left`
  - : Die Elemente werden bündig zueinander zum linken Rand des Ausrichtungscontainers gepackt. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse ist, wie zum Beispiel, wenn [`flex-direction: column;`](/de/docs/Web/CSS/flex-direction) gesetzt ist, verhält sich dieser Wert wie `start`.

- `right`
  - : Die Elemente werden bündig zueinander zum rechten Rand des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Grid-Container) oder zur Hauptachse (in einem Flexbox-Container) ist, verhält sich dieser Wert wie `start`.

- `normal`
  - : Verhält sich wie `stretch`, außer im Fall von Mehrspalten-Containern mit einer nicht-`auto` [`column-width`](/de/docs/Web/CSS/column-width), in diesem Fall nehmen die Spalten ihre festgelegte `column-width` an, anstatt sich zu strecken, um den Container zu füllen. Da `stretch` in Flex-Containern wie `start` wirkt, verhält sich `normal` auch wie `start`.

- `space-between`
  - : Die Elemente werden gleichmäßig im Ausrichtungscontainer entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar angrenzender Elemente ist derselbe. Das erste Element liegt am Haupt-Start-Rand an und das letzte Element liegt am Haupt-End-Rand an.

- `space-around`
  - : Die Elemente werden gleichmäßig im Ausrichtungscontainer entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar angrenzender Elemente ist derselbe. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar angrenzender Elemente. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`
  - : Die Elemente werden gleichmäßig im Ausrichtungscontainer entlang der Hauptachse verteilt. Der Abstand zwischen jedem Paar angrenzender Elemente, dem Haupt-Start-Rand und dem ersten Element, und dem Haupt-End-Rand und dem letzten Element ist überall genau gleich.

- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Hauptachse kleiner ist als die Größe des Ausrichtungscontainers, erhalten alle `auto`-größen Elemente eine gleichmäßige (nicht proportionale) Vergrößerung, unter Beachtung der durch {{cssxref("max-height")}}/{{cssxref("max-width")}} festgelegten Einschränkungen (oder gleichwertiger Funktionalität), so dass die kombinierte Größe den Ausrichtungscontainer entlang der Hauptachse genau füllt.

    > [!NOTE]
    > Für [Flexboxen](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) verhält sich der `stretch` Wert wie `flex-start` oder `start`. Dies ist der Fall, weil das Strecken in Flexboxen mit der {{CSSXref("flex-grow")}} Eigenschaft gesteuert wird.

- `safe`
  - : Wenn das Element den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre. Die gewünschte Ausrichtung wird nicht umgesetzt.

- `unsafe`
  - : Auch wenn das Element den Ausrichtungscontainer überläuft, wird die gewünschte Ausrichtung umgesetzt. Im Gegensatz zu `safe`, welches die gewünschte Ausrichtung ignoriert, um Überlauf zu verhindern.

## Beschreibung

Definiert im [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul, gilt `justify-content` für Mehrspalten-Container, Flex-Container und Grid-Container. Die Eigenschaft gilt nicht für Block-Container und hat keine Auswirkungen auf diese.

Diese Eigenschaft teilt viele Schlüsselwortwerte mit der {{cssxref("align-content")}} Eigenschaft, aber nicht alle! `justify-content` ist nicht an der Baseline-Ausrichtung beteiligt und nimmt daher keine Baseline-Werte an.

In [Flex-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert die Eigenschaft, wie der verbleibende freie Raum zwischen oder um Flex-Elemente entlang der Hauptachse verteilt wird. Diese Eigenschaft wirkt sich nur auf den Raum zwischen Elementen in einer Zeile aus, nicht auf den Raum zwischen den Zeilen. Die Ausrichtung erfolgt nach der Anwendung von Längen und automatischen Rändern, was bedeutet, dass wenn ein oder mehrere Flex-Elemente in einer Zeile einen {{cssxref("flex-grow")}} Faktor größer als `0` haben, die Eigenschaft keinen Effekt hat, da es keinen Raum gibt, der entlang dieser Zeile verteilt werden könnte. Da das Strecken entlang der Hauptachse durch {{cssxref("flex")}} gesteuert wird, verhält sich der `stretch` Wert wie `flex-start`.

Mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verteilt diese Eigenschaft den verfügbaren Raum zwischen oder um Gitterspalten, nicht um Gitterelemente. Ist der Grid-Container größer als das eigentliche Grid, kann die `justify-content` Eigenschaft verwendet werden, um das Grid entlang der Inline-Achse zu rechtfertigen und die Gitterspalten auszurichten.

Gitter `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die `align-content` und `justify-content` Eigenschaften gestreckt werden. Daher nimmt eine `auto`-Größe Spur standardmäßig jeden verbleibenden Raum im Gittercontainer ein. Da die Inline-Größe des Grids kleiner als die Inline-Größe des Grid-Containers sein muss, damit Raum verteilt werden kann, hat die Eigenschaft in diesem Fall keinen Effekt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Grid-Beispiel

In diesem Beispiel haben wir ein Gitter, das schmaler ist als sein Gittercontainer, und wir verwenden `justify-content`, um den verfügbaren Raum gleichmäßig um und zwischen den Gitterspalten herum zu verteilen.

#### HTML

Der {{htmlelement("section")}} Container, unser zukünftiger Gittercontainer, hat 16 verschachtelte {{htmlelement("div")}}s, die zu Gitterelementen werden.

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

Wir setzen die Containerbreite auf `500px` und geben drei Spalten an, jede `80px` breit, was bedeutet, dass `260px` verfügbarer Raum um oder zwischen ihnen zu verteilen ist. Wir setzen dann `justify-content: space-evenly`, was bedeutet, dass vor, zwischen und nach jeder Spalte `65px` Raum sein werden.

Wir setzen unterschiedliche Breiten (und Hintergrundfarben), um zu zeigen, wie die Rechtfertigung auf die Spalten angewendet wird.

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

{{EmbedLiveSample("Grundlegendes Grid-Beispiel", "100%", 220)}}

Beachten Sie, dass `justify-content` die Spalten ausrichtet und keine Auswirkungen auf die Elemente oder die Ausrichtung in Gittern hat. Gitterelemente, selbst solche, die ihre Gitterzelle überlaufen, beeinflussen die Spaltenrechtfertigung nicht.

### Der safe-Schlüsselbegriff

Dieses Beispiel demonstriert den `safe`-Schlüsselbegriff. Wir spezifizieren vier zentrierte Flex-Elemente, die nicht gewrappt werden dürfen und infolgedessen ihren einzigen Flex-Line-Container überlaufen. Durch Hinzufügen von `safe` zu `center` in der `justify-content` Eigenschaft verhält sich der überlaufende Inhalt, als ob der Ausrichtungsmodus `start` wäre.

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

{{EmbedLiveSample("der safe-Schlüsselbegriff", "100%", 260)}}

Da ein Element den Ausrichtungscontainer überläuft, verhält sich der Ausrichtungsmodus mit eingeschlossenem `safe` wie `start`, und die `center` Ausrichtung wird nicht umgesetzt. Der `safe`-Schlüsselbegriff hat keine Auswirkung, wenn die Elemente den Container nicht überlaufen.

### Visualisierung der Flex-Element-Verteilung

Dieses Beispiel beinhaltet ein mehrzeiliges, umbruchfähiges Flex-Layout. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor und nimmt den gesamten verfügbaren freien Raum in der ersten Flex-Zeile ein.

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

{{EmbedLiveSample("Visualisierung der Flex-Element-Verteilung", "100%", 180)}}

Wählen Sie unterschiedliche Schlüsselwörter aus dem Dropdown-Menü, um die verschiedenen `justify-content` Schlüsselwortwerte zu visualisieren. Da ein Element in der ersten Zeile wachsen kann, ist auf dieser Linie kein verfügbarer Raum, den die `justify-content` Eigenschaft verteilen könnte. Mit dem `space-between` Wert liegt das erste Element jeder Linie bündig am Haupt-Start-Rand an, und das letzte Element liegt bündig am Haupt-End-Rand an. Wenn eine Linie nur ein Element hat, wird es mit dem Haupt-Start-Rand ausgerichtet (wie in der letzten Linie zu sehen). Dies ist nicht der Fall für andere `space-*` Werte wie `space-evenly` und `space-around`, die einzeilige Flex-Linien zentrieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul
