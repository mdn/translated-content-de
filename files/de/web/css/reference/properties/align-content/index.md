---
title: "`align-content` CSS property"
short-title: align-content
slug: Web/CSS/Reference/Properties/align-content
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die [CSS](/de/docs/Web/CSS) **`align-content`**-Eigenschaft legt die Verteilung des Raums zwischen und um Inhaltselemente entlang der {{Glossary("Cross_Axis", "Querachse")}} eines [Flexcontainers](/de/docs/Web/CSS/Guides/Flexible_box_layout) oder entlang der Blockachse eines [Gitters](/de/docs/Web/CSS/Guides/Grid_layout) oder eines {{Glossary("Block-level_content", "Block-Levels")}} fest.

Diese Eigenschaft hat keine Auswirkung auf Flexcontainer mit nur einer Zeile (d.h. solche mit `flex-wrap: nowrap`).

Das interaktive Beispiel unten verwendet das Rasterlayout, um einige der Werte dieser Eigenschaft zu demonstrieren.

{{InteractiveExample("CSS Demo: align-content")}}

```css interactive-example-choice
align-content: start;
```

```css interactive-example-choice
align-content: center;
```

```css interactive-example-choice
align-content: space-between;
```

```css interactive-example-choice
align-content: space-around;
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
  display: grid;
  grid-template-columns: 60px 60px;
  grid-auto-rows: 40px;
  column-gap: 10px;
  height: 180px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntax

```css
/* Normal alignment */
align-content: normal;

/* Basic positional alignment */
/* align-content does not take left and right values */
align-content: start;
align-content: center;
align-content: end;
align-content: flex-start;
align-content: flex-end;

/* Baseline alignment */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* Distributed alignment */
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
align-content: stretch;

/* Overflow alignment */
align-content: safe center;
align-content: unsafe center;

/* Global values */
align-content: inherit;
align-content: initial;
align-content: revert;
align-content: revert-layer;
align-content: unset;
```

### Werte

Diese Eigenschaft wird mit einem oder zwei der folgenden Schlüsselwortwerte angegeben:

- `normal`
  - : Die Elemente sind in ihrer Standardposition angeordnet, als ob kein `align-content`-Wert gesetzt wäre.
- `start`
  - : Die Elemente sind bündig gegeneinander an der Startkante des Ausrichtungscontainers in der Querachse angeordnet.
- `center`
  - : Die Elemente sind bündig gegeneinander im Zentrum des Ausrichtungscontainers entlang der Querachse angeordnet.
- `end`
  - : Die Elemente sind bündig gegeneinander an der Endkante des Ausrichtungscontainers in der Querachse angeordnet.
- `flex-start`
  - : Die Elemente sind bündig gegeneinander an der Kante des Ausrichtungscontainers angeordnet, abhängig von der Quer-Startseite des Flexcontainers. Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind bündig gegeneinander an der Kante des Ausrichtungscontainers angeordnet, abhängig von der Quer-Endseite des Flexcontainers. Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: richtet die Ausrichtungsbaseline des ersten oder letzten Baselinesets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baselineset aller Boxen in ihrer Baseline-Teilungsgruppe aus.

    ![Die Basislinie ist die Linie, auf der die meisten Buchstaben "sitzen" und unter der die Unterlängen sich erstrecken.](410px-typography_line_terms.svg.png)

    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.

- `space-between`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist bündig mit der Startkante des Ausrichtungscontainers in der Querachse und das letzte Element bündig mit der Endkante des Ausrichtungscontainers in der Querachse.
- `space-around`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der Leerraum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Raums zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, dem Start und dem ersten Element, sowie dem Ende und dem letzten Element sind exakt gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-Größen-Elemente gleichmäßig erhöht (nicht proportional), wobei die Beschränkungen durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) weiterhin respektiert werden, so dass die kombinierte Größe genau den Ausrichtungscontainer entlang der Querachse füllt.
- `safe`
  - : In Verbindung mit einem Ausrichtungs-Schlüsselwort verwendet. Wenn das gewählte Schlüsselwort bedeutet, dass das Element den Ausrichtungscontainer überläuft und Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : In Verbindung mit einem Ausrichtungs-Schlüsselwort verwendet. Ungeachtet der relativen Größen des Elements und des Ausrichtungscontainers und ob Überlauf, der möglicherweise Datenverlust verursacht, auftritt, wird der gegebene Ausrichtungswert eingehalten.

> [!NOTE]
> Die `<content-distribution>`-Werte (`space-between`, `space-around`, `space-evenly` und `stretch`) haben keine Wirkung im [Block-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables#align-content_and_justify-content), da alle Inhalte in diesem Block als einzelnes {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswirkungen verschiedener align-content-Werte

In diesem Beispiel können Sie zwischen drei verschiedenen {{cssxref("display")}}-Eigenschaftswerten wechseln, einschließlich `flex`, `grid` und `block`. Sie können auch zwischen den verschiedenen Werten für `align-content` wechseln.

#### HTML

```html
<section>
  <div class="olive">Olive</div>
  <div class="coral">Coral</div>
  <div class="deepskyblue">Deep<br />sky<br />blue</div>
  <div class="orchid">Orchid</div>
  <div class="slateblue">Slateblue</div>
  <div class="maroon">Maroon</div>
</section>
```

```html hidden
<fieldset class="controls">
  <legend>Controls</legend>
  <div class="row">
    <label for="display">display: </label>
    <select id="display">
      <option value="block" selected>block</option>
      <option value="flex">flex</option>
      <option value="grid">grid</option>
    </select>
  </div>
  <div class="row">
    <label for="alignContent">align-content: </label>
    <select id="alignContent">
      <option value="normal" selected>normal</option>
      <option value="start">start</option>
      <option value="center">center</option>
      <option value="end">end</option>
      <option value="flex-start">flex-start</option>
      <option value="flex-end">flex-end</option>
      <option value="space-between">space-between</option>
      <option value="space-around">space-around</option>
      <option value="space-evenly">space-evenly</option>
    </select>
  </div>
  <p>CSS applied</p>
  <pre>
section {
  display: <span id="displayStyle">block</span>;
  align-content: <span id="align">normal</span>
}
  </pre>
</fieldset>
```

#### CSS

```css hidden
body {
  font-size: 1.25rem;
  display: flex;
  gap: 1rem;
}
section div {
  font-family: monospace;
  padding: 3px;
}
```

```css
section {
  border: solid 1.5px tomato;
  height: 300px;
  width: 300px;
  flex-wrap: wrap; /* used by flex only */
  gap: 0.2rem; /* not used by block */
}
.olive {
  background-color: olive;
}
.coral {
  background-color: coral;
}
.deepskyblue {
  background-color: deepskyblue;
}
.orchid {
  background-color: orchid;
}
.slateblue {
  background-color: slateblue;
  color: white;
}
.maroon {
  background-color: maroon;
  color: white;
}
```

```js hidden
const alignContent = document.querySelector("#alignContent");
const display = document.querySelector("#display");
const container = document.querySelector("section");
const displayStyle = document.querySelector("#displayStyle");
const alignStyle = document.querySelector("#align");

alignContent.addEventListener("change", () => {
  updatePage();
});
display.addEventListener("change", () => {
  updatePage();
});
function updatePage() {
  const alVal = alignContent.value;
  const dVal = display.value;
  container.style.alignContent = alVal;
  container.style.display = dVal;
  alignStyle.innerText = alVal;
  displayStyle.innerText = dVal;
}
updatePage();
```

#### Ergebnis

Versuchen Sie, den Wert von `display` und `align-content` zu ändern.

{{EmbedLiveSample("Examples", 260, 310)}}

Im [Block-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables#align-content_and_justify-content) werden Kind-Elemente als ein einzelnes Element behandelt, was bedeutet, dass sich `space-between`, `space-around` und `space-evenly` anders verhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- {{Glossary("Block-level_content", "Block-Level-Inhalt")}}
- {{CSSXRef("display")}}
