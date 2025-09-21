---
title: align-content
slug: Web/CSS/align-content
l10n:
  sourceCommit: 0ea88f719ad95045993f8a54d5bbaee857617380
---

Die [CSS](/de/docs/Web/CSS) **`align-content`** Eigenschaft legt die Verteilung des Raums zwischen und um Inhaltsobjekte entlang der {{Glossary("Cross_Axis", "Cross-Axis")}} eines [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) oder eines Block-Achse eines [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder {{Glossary("Block-level_content", "Block-Level")}} Elements fest.

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
  - : Die Elemente sind in ihrer Standardposition gepackt, als ob kein `align-content` Wert gesetzt wurde.
- `start`
  - : Die Elemente sind bündig aneinander gepackt am Anfangskante des Ausrichtungscontainers in der Cross-Axis.
- `center`
  - : Die Elemente sind in der Mitte des Ausrichtungscontainers entlang der Cross-Axis bündig aneinander gepackt.
- `end`
  - : Die Elemente sind bündig aneinander gepackt an der Endkante des Ausrichtungscontainers in der Cross-Axis.
- `flex-start`
  - : Die Elemente sind bündig aneinander gepackt an der Kante des Ausrichtungscontainers abhängig von der flex-start-Seite des Flexcontainers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind bündig aneinander gepackt an der Kante des Ausrichtungscontainers abhängig von der flex-end-Seite des Flexcontainers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Grundlinie an: richtet die Ausrichtungsgrundlinie des ersten oder letzten Grundliniensatzes der Box mit der entsprechenden Grundlinie im gemeinsamen ersten oder letzten Grundliniensatz aller Boxen in ihrer Grundlinien-Teilnehmergruppe aus.

    ![die Basislinie ist die Linie, auf der die meisten Buchstaben "sitzen" und unter der Abwärtsstricheverlängern.](410px-typography_line_terms.svg.png)

    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.

- `space-between`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Cross-Axis verteilt. Der Abstand zwischen jedem Paar von benachbarten Elementen ist derselbe. Das erste Element ist bündig mit der Anfangskante des Ausrichtungscontainers in der Cross-Axis, und das letzte Element ist bündig mit der Endkante des Ausrichtungscontainers in der Cross-Axis.
- `space-around`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Cross-Axis verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Raums zwischen jedem Paar von benachbarten Elementen.
- `space-evenly`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers entlang der Cross-Axis verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der Anfangskante und dem ersten Element sowie der Endkante und dem letzten Element ist überall exakt gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Cross-Axis kleiner als die Größe des Ausrichtungscontainers ist, wird die Größe aller auf `auto` gesetzten Elemente gleichmäßig (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder ähnliche Funktionalitäten) auferlegten Beschränkungen eingehalten werden, sodass die kombinierte Größe genau den Ausrichtungscontainer entlang der Cross-Axis füllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Wenn das gewählte Schlüsselwort dazu führt, dass das Element den Ausrichtungscontainer überfließt und Datenverlust verursacht, wird das Element so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Unabhängig von der relativen Größe des Elements und des Ausrichtungscontainers und davon, ob ein Überlauf, der Datenverlust verursachen könnte, auftritt, wird der angegebene Ausrichtungswert eingehalten.

> [!NOTE]
> Die `<content-distribution>` Werte (`space-between`, `space-around`, `space-evenly`, und `stretch`) haben keine Wirkung im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content), da der gesamte Inhalt in diesem Block als ein einziger {{Glossary("Alignment_Subject", "Ausrichtungs-Gegenstand")}} behandelt wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswirkungen verschiedener align-content Werte

In diesem Beispiel können Sie zwischen drei verschiedenen {{cssxref("display")}} Eigenschaftswerten wechseln, darunter `flex`, `grid` und `block`. Sie können auch zwischen den verschiedenen Werten für `align-content` wechseln.

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

Im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) werden Kind-Elemente als ein einziges Element behandelt, was bedeutet, dass `space-between`, `space-around` und `space-evenly` sich anders verhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- {{Glossary("Block-level_content", "Block-Level-Inhalt")}}
- {{CSSXRef("display")}}
