---
title: align-content
slug: Web/CSS/align-content
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`align-content`** Eigenschaft legt die Verteilung des Raums zwischen und um Inhaltselemente entlang der {{Glossary("Cross_Axis", "Querachse")}} eines [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Layouts oder der Blockachse eines [Grid](/de/docs/Web/CSS/CSS_grid_layout)- oder {{Glossary("Block-level_content", "Block-Level")}}-Elements fest.

Das interaktive Beispiel unten verwendet Grid-Layout, um einige der Werte dieser Eigenschaft zu demonstrieren.

{{EmbedInteractiveExample("pages/css/align-content.html")}}

Diese Eigenschaft hat keine Auswirkung auf einzeilige Flexbox-Container (d. h. Container mit `flex-wrap: nowrap`).

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
  - : Die Elemente werden in ihrer Standardposition angeordnet, als ob kein `align-content`-Wert festgelegt wäre.
- `start`
  - : Die Elemente sind bündig aneinander gegen den Start-Rand des Ausrichtungscontainers auf der Querachse ausgerichtet.
- `center`
  - : Die Elemente sind bündig aneinander in der Mitte des Ausrichtungscontainers entlang der Querachse ausgerichtet.
- `end`
  - : Die Elemente sind bündig aneinander gegen den End-Rand des Ausrichtungscontainers auf der Querachse ausgerichtet.
- `flex-start`
  - : Die Elemente sind bündig aneinander gegen den Rand des Ausrichtungscontainers je nach der Start-Seite der Querachse des Flexbox-Containers ausgerichtet.
    Dies gilt nur für Flexbox-Layout-Elemente. Für Elemente, die keine Kinder eines Flexbox-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind bündig aneinander gegen den Rand des Ausrichtungscontainers je nach der End-Seite der Querachse des Flexbox-Containers ausgerichtet.
    Dies gilt nur für Flexbox-Layout-Elemente. Für Elemente, die keine Kinder eines Flexbox-Containers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`

  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Basislinie an: Richten Sie die Ausrichtungsbasislinie des ersten oder letzten Basissatzes der Box mit der entsprechenden Basislinie in dem gemeinsamen ersten oder letzten Basissatz aller Boxen in ihrer Basislinien-Gruppe aus.

    ![Die Basislinie ist die Linie, auf der die meisten Buchstaben „sitzen“ und unter der sich Absenkungen erstrecken.](410px-typography_line_terms.svg.png)

    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.

- `space-between`
  - : Die Elemente sind entlang der Querachse gleichmäßig innerhalb des Ausrichtungscontainers verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist bündig mit dem Start-Rand des Ausrichtungscontainers auf der Querachse, und das letzte Element ist bündig mit dem End-Rand des Ausrichtungscontainers auf der Querachse.
- `space-around`
  - : Die Elemente sind entlang der Querachse gleichmäßig innerhalb des Ausrichtungscontainers verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der Leerraum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind entlang der Querachse gleichmäßig innerhalb des Ausrichtungscontainers verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, dem Start-Rand und dem ersten Element sowie dem End-Rand und dem letzten Element ist exakt gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-größengebundenen Elemente gleichmäßig (nicht proportional) vergrößert, unter Beachtung von Einschränkungen durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder entsprechende Funktionalitäten), sodass die kombinierte Größe genau die Querachse des Ausrichtungscontainers ausfüllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungsschlüsselwort verwendet. Falls das gewählte Schlüsselwort dazu führt, dass das Element den Ausrichtungscontainer überläuft und Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungsschlüsselwort verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers und davon, ob ein Überlauf, der Datenverlust verursachen könnte, stattfindet, wird der angegebene Ausrichtungswert beachtet.

> [!NOTE]
> Die `<content-distribution>`-Werte (`space-between`, `space-around`, `space-evenly` und `stretch`) haben keine Auswirkung im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content), da der gesamte Inhalt in diesem Block als ein einzelnes {{Glossary("Alignment_Subject", "Alignment-Subject")}} behandelt wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Auswirkungen verschiedener align-content-Werte

In diesem Beispiel können Sie zwischen drei verschiedenen {{cssxref("display")}}-Eigenschaftswerten wechseln, einschließlich `flex`, `grid` und `block`. Sie können auch zwischen den verschiedenen Werten für `align-content` wechseln.

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

Im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) werden die untergeordneten Elemente als ein einzelnes Element behandelt, was bedeutet, dass sich `space-between`, `space-around` und `space-evenly` anders verhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- [Block- und Inline-Layout im Standardfluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- {{Glossary("Block-level_content", "Block-level_content")}}
- {{CSSXRef("display")}}
