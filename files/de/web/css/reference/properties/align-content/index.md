---
title: "`align-content` CSS property"
short-title: align-content
slug: Web/CSS/Reference/Properties/align-content
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die [CSS](/de/docs/Web/CSS) **`align-content`** Eigenschaft legt die Verteilung des Raums zwischen und um Inhaltsobjekte entlang einer [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout)'s {{Glossary("Cross_Axis", "Querachse")}} oder einer [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder {{Glossary("Block-level_content", "Block-Element")}}'s Blockachse fest.

Diese Eigenschaft hat keine Auswirkung auf einzeilige Flex-Container (d.h. solche mit `flex-wrap: nowrap`).

Das interaktive Beispiel unten verwendet das Grid-Layout, um einige der Werte dieser Eigenschaft zu demonstrieren.

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
  - : Die Elemente werden in ihrer Standardposition gepackt, als ob kein `align-content` Wert festgelegt worden wäre.
- `start`
  - : Die Elemente werden dicht aneinanderliegend gegen den Start-Rand des Ausrichtungscontainers in der Querachse gepackt.
- `center`
  - : Die Elemente werden dicht aneinanderliegend in der Mitte des Ausrichtungscontainers entlang der Querachse gepackt.
- `end`
  - : Die Elemente werden dicht aneinanderliegend gegen den End-Rand des Ausrichtungscontainers in der Querachse gepackt.
- `flex-start`
  - : Die Elemente werden dicht aneinanderliegend gegen den Rand des Ausrichtungscontainers abhängig von der Cross-Start-Seite des Flex-Containers gepackt.
    Dies gilt nur für Flex-Layouts. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente werden dicht aneinanderliegend gegen den Rand des Ausrichtungscontainers abhängig von der Cross-End-Seite des Flex-Containers gepackt.
    Dies gilt nur für Flex-Layouts. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten- oder letzten-Baseline-Ausrichtung an: richtet die Ausrichtungs-Baseline des Boxensets der ersten oder letzten Baseline mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Set aller Boxen in seiner Baseline-Sharing-Gruppe aus.

    ![Die Grundlinie ist die Linie, auf der die meisten Buchstaben "sitzen" und unter der sich Abwärtsstriche erstrecken.](410px-typography_line_terms.svg.png)

    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.

- `space-between`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element liegt dicht am Start-Rand des Ausrichtungscontainers in der Querachse an, und das letzte Element liegt dicht am End-Rand des Ausrichtungscontainers in der Querachse an.
- `space-around`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der Start-Rand und das erste Element, sowie der End-Rand und das letzte Element, sind alle genau gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-großen Elemente gleichmäßig (nicht proportional) vergrößert, wobei gleichzeitig die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Querachse füllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Wenn das gewählte Schlüsselwort bedeutet, dass das Element über den Ausrichtungscontainer hinaussteht und Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers und unabhängig davon, ob ein Überlauf, der Datenverlust verursachen könnte, passiert, wird der gegebene Ausrichtungswert eingehalten.

> [!NOTE]
> Die `<content-distribution>` Werte (`space-between`, `space-around`, `space-evenly`, und `stretch`) haben keinen Einfluss im [Block-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables#align-content_and_justify-content), da der gesamte Inhalt in diesem Block als ein einzelnes {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Effekte verschiedener align-content-Werte

In diesem Beispiel können Sie zwischen drei verschiedenen {{cssxref("display")}} Eigenschaftswerten umschalten, einschließlich `flex`, `grid` und `block`. Sie können auch zwischen den verschiedenen Werten für `align-content` wechseln.

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

Versuchen Sie, den `display`-Wert und den `align-content`-Wert zu ändern.

{{EmbedLiveSample("Examples", 260, 310)}}

Im [Block-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables#align-content_and_justify-content) werden Kindelemente als einzelnes Element behandelt, was bedeutet, dass `space-between`, `space-around` und `space-evenly` anders funktionieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte der Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- {{Glossary("Block-level_content", "Block-Element Inhalt")}}
- {{CSSXRef("display")}}
