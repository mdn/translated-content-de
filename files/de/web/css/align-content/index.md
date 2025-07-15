---
title: align-content
slug: Web/CSS/align-content
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die [CSS](/de/docs/Web/CSS) **`align-content`** Eigenschaft bestimmt die Verteilung des Raumes zwischen und um Inhaltelemente entlang der [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) {{Glossary("Cross_Axis", "cross axis")}} oder der Blockachse eines [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder {{Glossary("Block-level_content", "Block-Level")}} Elements.

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

Diese Eigenschaft hat keinen Effekt auf einzeilige Flex-Container (d.h. solche mit `flex-wrap: nowrap`).

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
  - : Die Elemente sind in ihrer Standardposition gepackt, als ob kein `align-content` Wert gesetzt wäre.
- `start`
  - : Die Elemente sind direkt aneinander gepackt gegen die Startkante des Ausrichtungscontainers in der Cross-Achse.
- `center`
  - : Die Elemente sind direkt aneinander gepackt im Zentrum des Ausrichtungscontainers entlang der Cross-Achse.
- `end`
  - : Die Elemente sind direkt aneinander gepackt gegen die Endkante des Ausrichtungscontainers in der Cross-Achse.
- `flex-start`
  - : Die Elemente sind direkt aneinander gepackt gegen die Kante des Ausrichtungscontainers je nach der Cross-Start-Seite des Flex-Containers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind direkt aneinander gepackt gegen die Kante des Ausrichtungscontainers je nach der Cross-End-Seite des Flex-Containers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: richtet die Ausrichtungs-Baseline des Box-Erste- oder Letzte-Baseline-Satzes mit der entsprechenden Basislinie in der gemeinsamen ersten oder letzten Baseline-Satz aller Boxen in seiner Baseline-Gruppierung aus.

    ![die Basislinie ist die Linie, auf der die meisten Buchstaben "sitzen" und unter der die Absenker sich erstrecken.](410px-typography_line_terms.svg.png)

    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.

- `space-between`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Cross-Achse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element flush mit der Startkante des Ausrichtungscontainers in der Cross-Achse und das letzte Element flush mit der Endkante des Ausrichtungscontainers in der Cross-Achse.
- `space-around`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Cross-Achse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Raums zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer entlang der Cross-Achse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der Startkante und dem ersten Element, und der Endkante und dem letzten Element, ist genau gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Cross-Achse kleiner ist als die Größe des Ausrichtungscontainers, werden alle in `auto`-Größe gesetzten Elemente gleichmäßig (nicht proportional) vergrößert, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder entsprechende Funktionalität) auferlegten Einschränkungen eingehalten werden, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Cross-Achse ausfüllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Wenn das gewählte Schlüsselwort bedeutet, dass das Element den Ausrichtungscontainer überläuft und Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Ungeachtet der relativen Größen des Elements und des Ausrichtungscontainers und ob ein Überlauf, der Datenverlust verursachen könnte, auftreten kann, wird der gegebene Ausrichtungswert beibehalten.

> [!NOTE]
> Die `<content-distribution>` Werte (`space-between`, `space-around`, `space-evenly`, und `stretch`) haben keinen Effekt im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content), da alle Inhalte in diesem Block als ein einzelnes {{Glossary("Alignment_Subject", "alignment-subject")}} behandelt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Effekte verschiedener align-content Werte

In diesem Beispiel können Sie zwischen drei verschiedenen {{cssxref("display")}} Eigenschaftswerten, einschließlich `flex`, `grid` und `block`, wechseln. Sie können auch zwischen den verschiedenen Werten für `align-content` wechseln.

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

Versuchen Sie, den `display` Wert und den `align-content` Wert zu ändern.

{{EmbedLiveSample("Examples", 260, 310)}}

Im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) werden Kindelemente als ein einziges Element betrachtet, was bedeutet, dass `space-between`, `space-around`, und `space-evenly` unterschiedlich verhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- {{Glossary("Block-level_content", "Block-Level Inhalte")}}
- {{CSSXRef("display")}}
