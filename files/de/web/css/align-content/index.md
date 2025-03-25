---
title: align-content
slug: Web/CSS/align-content
l10n:
  sourceCommit: 42b9da9e3b6293fe17fbb3a4171e9551a5198afe
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`align-content`**-Eigenschaft legt die Verteilung des Raums zwischen und um Inhaltsobjekte auf einer [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)'s {{Glossary("Cross_Axis", "Querachse")}} oder der Blockachse eines [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder {{Glossary("Block-level_content", "block-level")}} Elements fest.

Das folgende interaktive Beispiel verwendet das Grid-Layout, um einige der Werte dieser Eigenschaft zu demonstrieren.

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

Diese Eigenschaft hat keine Auswirkung auf einzeilige Flex-Container (d.h. solche mit `flex-wrap: nowrap`).

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
  - : Die Objekte sind in ihrer Standardposition gepackt, als ob kein `align-content` Wert gesetzt wäre.
- `start`
  - : Die Objekte sind bündig zueinander gegen den Startkante des Ausrichtungscontainers auf der Querachse gepackt.
- `center`
  - : Die Objekte sind bündig zueinander im Zentrum des Ausrichtungscontainers entlang der Querachse gepackt.
- `end`
  - : Die Objekte sind bündig zueinander gegen den Endkante des Ausrichtungscontainers auf der Querachse gepackt.
- `flex-start`
  - : Die Objekte sind bündig zueinander gegen die Kante des Ausrichtungscontainers, abhängig von der Startseite der Flex-Container-Querachse gepackt.
    Dies gilt nur für Objekte im Flex-Layout. Für Objekte, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Objekte sind bündig zueinander gegen die Kante des Ausrichtungscontainers, abhängig von der Endseite der Flex-Container-Querachse gepackt.
    Dies gilt nur für Objekte im Flex-Layout. Für Objekte, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`

  - : Gibt die Teilnahme an der Ausrichtung an der ersten oder letzten Basislinie an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basissatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basissatz aller Boxen in ihrer Gruppe mit Basisausrichtungsbeteiligung aus.

    ![die Basislinie ist die Linie, auf der die meisten Buchstaben "sitzen" und unter der sich die Unterlängen erstrecken.](410px-typography_line_terms.svg.png)

    Die Ausweichausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.

- `space-between`
  - : Die Objekte sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Objekte ist gleich. Das erste Objekt ist bündig mit der Startkante des Ausrichtungscontainers auf der Querachse, das letzte Objekt ist bündig mit der Endkante des Ausrichtungscontainers auf der Querachse.
- `space-around`
  - : Die Objekte sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Objekte ist gleich. Der Leerraum vor dem ersten und nach dem letzten Objekt ist halb so groß wie der zwischen jedem Paar benachbarter Objekte.
- `space-evenly`
  - : Die Objekte sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Objekte, der Startkante und dem ersten Objekt sowie der Endkante und dem letzten Objekt ist genau gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Objekte entlang der Querachse kleiner als die des Ausrichtungscontainers ist, wird die Größe von `auto`-großen Objekten gleichmäßig (nicht proportional) erhöht, wobei die durch {{cssxref("max-height")}}/ {{cssxref("max-width")}} (oder äquivalente Funktionalität) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe den Ausrichtungscontainer entlang der Querachse genau ausfüllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungsstichwort verwendet. Wenn das gewählte Stichwort bedeutet, dass das Objekt den Ausrichtungscontainer überläuft und zu Datenverlust führt, wird das Objekt so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungsstichwort verwendet. Unabhängig von den relativen Größen des Objekts und des Ausrichtungscontainers und unabhängig davon, ob ein Überlauf, der zu Datenverlust führt, auftreten könnte, wird der angegebene Ausrichtungswert beachtet.

> [!NOTE]
> Die `<content-distribution>` Werte (`space-between`, `space-around`, `space-evenly` und `stretch`) haben im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) keine Wirkung, da der gesamte Inhalt in diesem Block als ein einziges {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswirkungen verschiedener align-content Werte

In diesem Beispiel können Sie zwischen drei verschiedenen {{cssxref("display")}}-Eigenschaftenwerten wechseln, einschließlich `flex`, `grid` und `block`. Sie können auch zwischen den verschiedenen Werten für `align-content` wechseln.

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

Im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) werden Kind-Elemente als ein einzelnes Element behandelt, was bedeutet, dass `space-between`, `space-around` und `space-evenly` anders funktionieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Objekten in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- {{Glossary("Block-level_content", "Block-Level-Inhalte")}}
- {{CSSXRef("display")}}
