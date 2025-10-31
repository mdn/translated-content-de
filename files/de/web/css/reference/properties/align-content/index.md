---
title: align-content
slug: Web/CSS/Reference/Properties/align-content
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die [CSS](/de/docs/Web/CSS) **`align-content`**-Eigenschaft legt die Verteilung des Raums zwischen und um Inhaltselemente entlang einer [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)'s {{Glossary("Cross_Axis", "Querseite")}} oder der Blockachse eines [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder {{Glossary("Block-level_content", "block-level")}} Elements fest.

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
  - : Die Elemente sind in ihrer Standardposition gepackt, als wäre kein `align-content`-Wert gesetzt.
- `start`
  - : Die Elemente sind bündig aneinander gepackt gegen den Start-Rand des Ausrichtungscontainers entlang der Querseite.
- `center`
  - : Die Elemente sind bündig aneinander in der Mitte des Ausrichtungscontainers entlang der Querseite gepackt.
- `end`
  - : Die Elemente sind bündig aneinander gepackt gegen den End-Rand des Ausrichtungscontainers entlang der Querseite.
- `flex-start`
  - : Die Elemente sind bündig aneinander gepackt gegen den Rand des Ausrichtungscontainers je nach Querstarter-Seite des Flex-Containers. Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind bündig aneinander gepackt gegen den Rand des Ausrichtungscontainers je nach Querendseite des Flex-Containers. Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten- oder letzten-Baseline-Ausrichtung an: richtet die Ausrichtungsbaseline des ersten oder letzten Baseline-Sets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Set aller Boxen in seiner Baseline-Gruppe aus.

    ![die Baseline ist die Linie, auf der die meisten Buchstaben "sitzen" und unter der Nachschriften verlängert werden.](410px-typography_line_terms.svg.png)

    Die Fallback-Ausrichtung für `first baseline` ist `start`, und für `last baseline` ist `end`.

- `space-between`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Querseite verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Das erste Element ist bündig mit dem Start-Rand des Ausrichtungscontainers entlang der Querseite und das letzte Element ist bündig mit dem End-Rand des Ausrichtungscontainers entlang der Querseite.
- `space-around`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Querseite verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Der freie Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Querseite verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, dem Start-Rand und dem ersten Element, und dem End-Rand und dem letzten Element, ist überall genau gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querseite kleiner als die Größe des Ausrichtungscontainers ist, werden alle `auto`-dimensionierten Elemente gleichmäßig (nicht proportional) vergrößert, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertigen Funktionen) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe den Ausrichtungscontainer entlang der Querseite genau ausfüllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungs-Keyword verwendet. Wenn das gewählte Keyword bedeutet, dass das Element den Ausrichtungscontainer überläuft und Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungs-Keyword verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers und ob ein Überlauf, der Datenverlust verursachen könnte, eintritt oder nicht, wird der gegebene Ausrichtungswert eingehalten.

> [!NOTE]
> Die `<content-distribution>`-Werte (`space-between`, `space-around`, `space-evenly`, and `stretch`) haben im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) keine Wirkung, da der gesamte Inhalt in diesem Block als ein einzelnes {{Glossary("Alignment_Subject", "Alignment-Subject")}} behandelt wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswirkungen verschiedener align-content-Werte

In diesem Beispiel können Sie zwischen drei verschiedenen {{cssxref("display")}}-Eigenschaftswerten wechseln, darunter `flex`, `grid` und `block`. Sie können auch zwischen den verschiedenen Werten für `align-content` wechseln.

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

#### Resultat

Versuchen Sie, den `display`-Wert und den `align-content`-Wert zu ändern.

{{EmbedLiveSample("Examples", 260, 310)}}

Im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) werden Kind-Elemente als einzelnes Element behandelt, was bedeutet, dass `space-between`, `space-around` und `space-evenly` sich anders verhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte der Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- {{Glossary("Block-level_content", "Inhaltsblockebene")}}
- {{CSSXRef("display")}}
