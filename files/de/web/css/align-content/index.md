---
title: align-content
slug: Web/CSS/align-content
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`align-content`** Eigenschaft legt die Verteilung des Raums zwischen und um Inhaltsobjekte entlang der {{Glossary("Cross_Axis", "querachse")}} eines [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), oder entlang einer Blockachse eines [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder {{Glossary("Block-level_content", "Block-Level")}} Elements fest.

Das unten stehende interaktive Beispiel verwendet Grid-Layout, um einige der Werte dieser Eigenschaft zu demonstrieren.

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
  - : Die Objekte sind in ihrer Standardposition gepackt, als ob kein `align-content`-Wert gesetzt wäre.
- `start`
  - : Die Objekte sind bündig aneinander gepackt am Start-Rand des Ausrichtungscontainers in der Querachse.
- `center`
  - : Die Objekte sind bündig aneinander gepackt im Zentrum des Ausrichtungscontainers entlang der Querachse.
- `end`
  - : Die Objekte sind bündig aneinander gepackt am End-Rand des Ausrichtungscontainers in der Querachse.
- `flex-start`
  - : Die Objekte sind bündig aneinander gepackt am Rand des Ausrichtungscontainers, abhängig von der Startseite der Querachse des Flex-Containers.
    Dies gilt nur für Flex-Layout-Objekte. Für Objekte, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Objekte sind bündig aneinander gepackt am Rand des Ausrichtungscontainers, abhängig von der Endseite der Querachse des Flex-Containers.
    Dies gilt nur für Flex-Layout-Objekte. Für Objekte, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Basislinienausrichtung an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basisliniensatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basisliniensatz aller Boxen in seiner Basislinie-Austauschgruppe aus.

    ![Die Basislinie ist die Linie, auf der die meisten Buchstaben "sitzen" und unter der die Unterlängen herausragen.](410px-typography_line_terms.svg.png)

    Die Ausweichausrichtung für `first baseline` ist `start`, für `last baseline` ist es `end`.

- `space-between`
  - : Die Objekte sind gleichmäßig verteilt innerhalb des Ausrichtungscontainers entlang der Querachse. Der Abstand zwischen jedem Paar benachbarter Objekte ist gleich. Das erste Objekt ist bündig mit dem Startrand des Ausrichtungscontainers in der Querachse und das letzte Objekt bündig mit dem Endrand des Ausrichtungscontainers in der Querachse.
- `space-around`
  - : Die Objekte sind gleichmäßig verteilt innerhalb des Ausrichtungscontainers entlang der Querachse. Der Abstand zwischen jedem Paar benachbarter Objekte ist gleich. Der Leerraum vor dem ersten und nach dem letzten Objekt entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Objekte.
- `space-evenly`
  - : Die Objekte sind gleichmäßig verteilt innerhalb des Ausrichtungscontainers entlang der Querachse. Der Abstand zwischen jedem Paar benachbarter Objekte, der Startrand und das erste Objekt sowie der Endrand und das letzte Objekt sind genau gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Objekte entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-dimensionierten Objekte gleichermaßen (nicht proportional) vergrößert, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Querachse füllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungsschlüsselwort verwendet. Wenn das gewählte Schlüsselwort bedeutet, dass das Objekt den Ausrichtungscontainer überläuft und Datenverlust verursacht, wird das Objekt stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungsschlüsselwort verwendet. Unabhängig von den relativen Größen des Objekts und des Ausrichtungscontainers und davon, ob ein Überlauf, der Datenverlust verursacht, eintreten könnte, wird der angegebene Ausrichtungwert eingehalten.

> [!NOTE]
> Die `<content-distribution>`-Werte (`space-between`, `space-around`, `space-evenly` und `stretch`) haben im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) keine Wirkung, da alle Inhalte in diesem Block als einzelnes {{Glossary("Alignment_Subject", "Ausrichtungsobjekt")}} behandelt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswirkungen der verschiedenen align-content Werte

In diesem Beispiel können Sie zwischen drei verschiedenen {{cssxref("display")}} Eigenschaftswerten wechseln, einschließlich `flex`, `grid` und `block`. Sie können auch zwischen den verschiedenen Werten für `align-content` wechseln.

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

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- {{Glossary("Block-level_content", "Block-Level-Inhalte")}}
- {{CSSXRef("display")}}
