---
title: align-content
slug: Web/CSS/Reference/Properties/align-content
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die [CSS](/de/docs/Web/CSS) **`align-content`**-Eigenschaft legt die Verteilung des Raums zwischen und um Inhaltelemente entlang der [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) {{Glossary("Cross_Axis", "cross axis")}} oder der Blockachse eines [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder {{Glossary("Block-level_content", "Block-Level")}} Elements fest.

Diese Eigenschaft hat keine Wirkung auf einzeilige Flex-Container (d.h. solche mit `flex-wrap: nowrap`).

Das interaktive Beispiel unten verwendet ein Grid-Layout, um einige der Werte dieser Eigenschaft zu demonstrieren.

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

- `normal`
  - : Die Elemente sind in ihrer Standardposition gepackt, als ob kein `align-content`-Wert gesetzt wäre.
- `start`
  - : Die Elemente sind aneinander gepackt und an der Startkante des Ausrichtungscontainers entlang der Cross-Achse ausgerichtet.
- `center`
  - : Die Elemente sind aneinander gepackt und im Zentrum des Ausrichtungscontainers entlang der Cross-Achse ausgerichtet.
- `end`
  - : Die Elemente sind aneinander gepackt und an der Endkante des Ausrichtungscontainers entlang der Cross-Achse ausgerichtet.
- `flex-start`
  - : Die Elemente sind aneinander gepackt gegen die Kante des Ausrichtungscontainers je nach Cross-Start-Seite des Flex-Containers.
    Dies gilt nur für Flex-Layoutelemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind aneinander gepackt gegen die Kante des Ausrichtungscontainers je nach Cross-End-Seite des Flex-Containers.
    Dies gilt nur für Flex-Layoutelemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`
  - : Legt die Teilnahme an der First- oder Last-Baseline-Ausrichtung fest: Richtet die Ausrichtungs-Baseline des Boxensets mit der entsprechenden Baseline im gemeinsamen First- oder Last-Baseline-Set aller Boxen in ihrer Baseline-Sharing-Gruppe aus.

    ![Die Baseline ist die Linie, auf der die meisten Buchstaben "liegen" und unter die Descender hinausragen.](410px-typography_line_terms.svg.png)

    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.

- `space-between`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Cross-Achse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist bündig mit der Startkante des Ausrichtungscontainers entlang der Cross-Achse und das letzte Element ist bündig mit der Endkante des Ausrichtungscontainers entlang der Cross-Achse.
- `space-around`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Cross-Achse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Cross-Achse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der Startkante und dem ersten Element sowie der Endkante und dem letzten Element sind genau gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Cross-Achse kleiner ist als die Größe des Ausrichtungscontainers, werden alle auf `auto`-dimensionierten Elemente gleichermaßen (nicht proportional) vergrößert, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Beschränkungen eingehalten werden, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Cross-Achse füllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungs-Keyword verwendet. Wenn das gewählte Keyword bedeutet, dass das Element den Ausrichtungscontainer überläuft und Datenverluste verursacht, wird das Element stattdessen ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungs-Keyword verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers und davon, ob durch Überlauf Datenverluste verursacht werden könnten, wird der angegebene Ausrichtungswert eingehalten.

> [!NOTE]
> Die `<content-distribution>`-Werte (`space-between`, `space-around`, `space-evenly` und `stretch`) haben keine Wirkung im [block layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables#align-content_and_justify-content), da der gesamte Inhalt in diesem Block als einzelnes {{Glossary("Alignment_Subject", "alignment-subject")}} behandelt wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswirkungen verschiedener `align-content`-Werte

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

Versuchen Sie, den Wert von `display` und den Wert von `align-content` zu ändern.

{{EmbedLiveSample("Examples", 260, 310)}}

Im [Block-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables#align-content_and_justify-content) werden Kind-Elemente als einzelnes Element behandelt, was bedeutet, dass `space-between`, `space-around` und `space-evenly` anders funktionieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- {{Glossary("Block-level_content", "Block-Level-Inhalte")}}
- {{CSSXRef("display")}}
