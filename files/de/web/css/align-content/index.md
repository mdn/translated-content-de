---
title: align-content
slug: Web/CSS/align-content
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`align-content`**-Eigenschaft legt die Verteilung von Raum zwischen und um Inhaltelemente entlang der {{Glossary("Cross_Axis", "cross axis")}} eines [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), oder entlang der Blockachse eines [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder einer {{Glossary("Block-level_content", "block-level")}}-Element fest.

Das interaktive Beispiel unten verwendet ein Grid-Layout, um einige der Werte dieser Eigenschaft zu demonstrieren.

{{EmbedInteractiveExample("pages/css/align-content.html")}}

Diese Eigenschaft hat keine Wirkung auf einzeilige Flex-Container (z.B. solche mit `flex-wrap: nowrap`).

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
  - : Die Elemente werden in ihrer Standardposition gepackt, als wäre kein `align-content`-Wert gesetzt worden.
- `start`
  - : Die Elemente werden bündig aneinander entlang der Startkante des Ausrichtungscontainers in der Cross-Axis gepackt.
- `center`
  - : Die Elemente werden bündig aneinander in der Mitte des Ausrichtungscontainers entlang der Cross-Axis gepackt.
- `end`
  - : Die Elemente werden bündig aneinander entlang der Endkante des Ausrichtungscontainers in der Cross-Axis gepackt.
- `flex-start`
  - : Die Elemente werden bündig aneinander entlang der Kante des Ausrichtungscontainers gepackt, orientiert an der Cross-Start-Seite des Flex-Containers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente werden bündig aneinander entlang der Kante des Ausrichtungscontainers gepackt, orientiert an der Cross-End-Seite des Flex-Containers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`

  - : Gibt an, dass die Teilnahme an einer Erstausrichtung oder Letztausrichtung der Baseline erfolgt: richtet die Baseline des Kastens mit dem entsprechenden Baseline-Set in der gemeinsam genutzten ersten oder letzten Baseline-Gruppe aller Kästen aus.

    ![Die Baseline ist die Linie, auf der die meisten Buchstaben "sitzen" und unter die Abstriche hinausragen.](410px-typography_line_terms.svg.png)

    Die Rückfallausrichtung für `first baseline` ist `start`, für `last baseline` ist es `end`.

- `space-between`
  - : Die Elemente werden gleichmäßig innerhalb des Ausrichtungscontainers entlang der Cross-Axis verteilt. Der Abstand zwischen jedem benachbarten Elementpaar ist gleich. Das erste Element liegt bündig an der Startkante des Ausrichtungscontainers in der Cross-Axis, und das letzte Element liegt bündig an der Endkante des Containers.
- `space-around`
  - : Die Elemente werden gleichmäßig innerhalb des Ausrichtungscontainers entlang der Cross-Axis verteilt. Der Abstand zwischen jedem benachbarten Elementpaar ist gleich. Der Leerraum vor dem ersten und nach dem letzten Element ist halb so groß wie der Abstand zwischen benachbarten Elementen.
- `space-evenly`
  - : Die Elemente werden gleichmäßig innerhalb des Ausrichtungscontainers entlang der Cross-Axis verteilt. Der Abstand zwischen jedem benachbarten Element, der Startkante und dem ersten Element sowie der Endkante und dem letzten Element ist genau gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Cross-Axis kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-großen Elemente gleichermaßen (nicht proportional) vergrößert, unter der Berücksichtigung von Einschränkungen wie {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder äquivalenter Funktionalität), damit die kombinierte Größe genau den Ausrichtungscontainer entlang der Cross-Axis ausfüllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Wenn das gewählte Schlüsselwort dazu führt, dass das Element den Ausrichtungscontainer überläuft und Datenverluste verursacht, wird das Element so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Unabhängig von den relativen Größen des Elements und des Containers oder davon, ob ein Überlauf stattfindet, der Datenverluste verursacht, wird der angegebene Ausrichtungswert beachtet.

> [!NOTE]
> Die `<content-distribution>`-Werte (`space-between`, `space-around`, `space-evenly` und `stretch`) haben keine Auswirkungen im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content), da der gesamte Inhalt in dieser Ebene als ein einziges {{Glossary("Alignment_Subject", "alignment-subject")}} behandelt wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Effekte verschiedener align-content-Werte

In diesem Beispiel können Sie zwischen drei verschiedenen {{cssxref("display")}}-Eigenschaftswerten wechseln, einschließlich `flex`, `grid` und `block`. Außerdem können Sie zwischen den verschiedenen Werten für `align-content` wechseln.

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

Versuchen Sie, die Werte von `display` und `align-content` zu ändern.

{{EmbedLiveSample("Examples", 260, 310)}}

Im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) werden die Kind-Elemente als ein einziges Element behandelt. Das bedeutet, dass `space-between`, `space-around` und `space-evenly` unterschiedlich verhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- {{Glossary("Block-level_content", "Block-level_content")}}
- {{CSSXRef("display")}}
