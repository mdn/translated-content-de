---
title: align-content
slug: Web/CSS/align-content
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die CSS-Eigenschaft **`align-content`** legt die Verteilung des Platzes zwischen und um Inhaltselemente entlang einer [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-{{Glossary("Cross_Axis", "Querachse")}} oder der Blockachse eines [Grid](/de/docs/Web/CSS/CSS_grid_layout)- oder {{Glossary("Block-level_content", "Block-Level")}}-Elements fest.

Das interaktive Beispiel unten verwendet Grid-Layout, um einige der Werte dieser Eigenschaft zu demonstrieren.

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

Diese Eigenschaft hat keine Wirkung auf einzeilige Flex-Container (d.h. solche mit `flex-wrap: nowrap`).

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
  - : Die Elemente sind in ihrer Standardposition verpackt, als ob kein `align-content`-Wert gesetzt wäre.
- `start`
  - : Die Elemente sind direkt nebeneinander an der Startkante des Ausrichtungscontainers entlang der Querachse ausgerichtet.
- `center`
  - : Die Elemente sind direkt nebeneinander in der Mitte des Ausrichtungscontainers entlang der Querachse ausgerichtet.
- `end`
  - : Die Elemente sind direkt nebeneinander an der Endkante des Ausrichtungscontainers entlang der Querachse ausgerichtet.
- `flex-start`
  - : Die Elemente sind direkt nebeneinander an der Kante des Ausrichtungscontainers, abhängig von der Flex-Container-Queranfangsseite, ausgerichtet.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind direkt nebeneinander an der Kante des Ausrichtungscontainers, abhängig von der Flex-Container-Querendseite, ausgerichtet.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`

  - : Gibt eine Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: richtet die Ausrichtungs-Baseline des ersten oder letzten Baseline-Sets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Set aller Boxen der Baseline-Teilungsgruppe aus.

    ![die Grundlinie ist die Linie, auf der die meisten Buchstaben "sitzen" und unter der sich die Unterlängen erstrecken.](410px-typography_line_terms.svg.png)

    Die Rückfallausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.

- `space-between`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist an der Startkante des Ausrichtungscontainers entlang der Querachse direkt nebeneinander und das letzte Element an der Endkante des Ausrichtungscontainers entlang der Querachse direkt nebeneinander.
- `space-around`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der Leerraum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der Startkante und dem ersten Element, sowie der Endkante und dem letzten Element ist genau gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers, wird bei allen Elementen mit `auto`-Größe die Größe gleichmäßig (nicht proportional) erhöht, während weiterhin die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder entsprechende Funktionalität) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Querachse ausfüllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungsschlüsselwort verwendet. Wenn das gewählte Schlüsselwort bedeutet, dass das Element den Ausrichtungscontainer verlässt und dadurch Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungsschlüsselwort verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers und ob es zu einem Überlauf kommt, der Datenverlust verursacht, wird der angegebene Ausrichtungswert eingehalten.

> [!NOTE]
> Die `<content-distribution>`-Werte (`space-between`, `space-around`, `space-evenly` und `stretch`) haben keine Wirkung im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content), da der gesamte Inhalt in diesem Block als ein einziges {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswirkungen verschiedener align-content-Werte

In diesem Beispiel können Sie zwischen drei verschiedenen Werten der {{cssxref("display")}}-Eigenschaft wechseln, einschließlich `flex`, `grid` und `block`. Sie können auch zwischen den verschiedenen Werten für `align-content` wechseln.

#### HTML

```html-nolint hidden
<div class="wrapper">
```

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

```html-nolint hidden
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
</div>
```

#### CSS

```css hidden
.wrapper {
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
document.addEventListener("load", () => {
  updatePage();
});
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
```

#### Ergebnis

Versuchen Sie, den `display`-Wert und den `align-content`-Wert zu ändern.

{{EmbedLiveSample("Examples", 260, 310)}}

Im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) werden Kindelemente als ein einziges Element behandelt, was bedeutet, dass `space-between`, `space-around` und `space-evenly` sich anders verhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlagen des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Kastenausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Kastenausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- [Block und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- {{Glossary("Block-level_content", "Block-Level-Inhalt")}}
- {{CSSXRef("display")}}
