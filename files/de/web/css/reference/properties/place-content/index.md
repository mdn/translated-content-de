---
title: place-content
slug: Web/CSS/Reference/Properties/place-content
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`place-content`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es Ihnen, Inhalte sowohl entlang der Block- als auch der Inline-Richtung gleichzeitig auszurichten (d.h. die {{CSSxRef("align-content")}} und {{CSSxRef("justify-content")}} Eigenschaften) in einem relevanten Layout-System wie [Grid](/de/docs/Web/CSS/Guides/Grid_layout) oder [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout).

{{InteractiveExample("CSS Demo: place-content")}}

```css interactive-example-choice
place-content: end space-between;
```

```css interactive-example-choice
place-content: space-around start;
```

```css interactive-example-choice
place-content: start space-evenly;
```

```css interactive-example-choice
place-content: end center;
```

```css interactive-example-choice
place-content: end;
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
  height: 180px;
  width: 220px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Elementare Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("align-content")}}
- {{cssxref("justify-content")}}

## Syntax

```css
/* Positional alignment */
/* align-content does not take left and right values */
place-content: center start;
place-content: start center;
place-content: end left;
place-content: flex-start center;
place-content: flex-end center;

/* Baseline alignment */
/* justify-content does not take baseline values */
place-content: baseline center;
place-content: first baseline space-evenly;
place-content: last baseline right;

/* Distributed alignment */
place-content: space-between space-evenly;
place-content: space-around space-evenly;
place-content: space-evenly stretch;
place-content: stretch space-evenly;

/* Global values */
place-content: inherit;
place-content: initial;
place-content: revert;
place-content: revert-layer;
place-content: unset;
```

Der erste Wert ist der Wert der {{CSSxRef("align-content")}}-Eigenschaft, der zweite der der {{CSSxRef("justify-content")}}-Eigenschaft.

> [!NOTE]
> Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert für beide verwendet, vorausgesetzt, er ist ein gültiger Wert für beide. Wenn er für eine der beiden ungültig ist, wird der gesamte Wert ungültig.

### Werte

- `start`
  - : Die Elemente sind bündig zueinander am Anfangsrand des Ausrichtungscontainers in der entsprechenden Achse gepackt.
- `end`
  - : Die Elemente sind bündig zueinander am Endrand des Ausrichtungscontainers in der entsprechenden Achse gepackt.
- `flex-start`
  - : Die Elemente sind bündig zueinander am Rand des Ausrichtungscontainers gepackt, abhängig von der main-start oder cross-start Seite des Flex-Containers.
    Dies gilt nur für Elemente eines Flex-Layouts. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind bündig zueinander am Rand des Ausrichtungscontainers gepackt, abhängig von der main-end oder cross-end Seite des Flex-Containers.
    Dies gilt nur für Elemente eines Flex-Layouts. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `center`
  - : Die Elemente sind bündig zueinander zur Mitte des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente sind bündig zueinander am linken Rand des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente sind bündig zueinander am rechten Rand des Ausrichtungscontainers in der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, verhält sich dieser Wert wie `start`.
- `space-between`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist bündig mit der main-start Kante, und das letzte Element ist bündig mit der main-end Kante.
- `baseline`, `first baseline`, `last baseline`
  - : Bestimmt die Teilnahme an der Ersten- oder Letzten-Baseline-Ausrichtung: richtet die Ausrichtungsbaseline des ersten oder letzten Baseline-Sets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Set aller Boxen in seiner Baseline-Teilungsgruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `space-around`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der leere Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind gleichmäßig im Ausrichtungscontainer verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der main-start Kante und dem ersten Element, sowie der main-end Kante und dem letzten Element ist genau gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungscontainers, werden alle `auto`-dimensierten Elemente gleichmäßig (nicht proportional) vergrößert, wobei dennoch die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalitäten) auferlegten Einschränkungen eingehalten werden, sodass die kombinierte Größe genau den Ausrichtungscontainer füllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungs-Keyword verwendet. Wenn das gewählte Keyword bedeutet, dass das Element den Ausrichtungscontainer überläuft und Datenverlust verursacht, wird das Element stattdessen ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungs-Keyword verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers und unabhängig davon, ob ein Überlauf, der Datenverlust verursachen könnte, auftritt, wird der angegebene Ausrichtungswert beachtet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Platzieren von Inhalten in einem Flex-Container

#### HTML

```html
<div id="container">
  <div class="small">Lorem</div>
  <div class="small">Lorem<br />ipsum</div>
  <div class="large">Lorem</div>
  <div class="large">Lorem<br />ipsum</div>
  <div class="large"></div>
  <div class="large"></div>
</div>
```

```html hidden
<code>writing-mode:</code
><select id="writingMode">
  <option value="horizontal-tb" selected>horizontal-tb</option>
  <option value="vertical-rl">vertical-rl</option>
  <option value="vertical-lr">vertical-lr</option>
  <option value="sideways-rl">sideways-rl</option>
  <option value="sideways-lr">sideways-lr</option></select
><code>;</code><br />

<code>direction:</code
><select id="direction">
  <option value="ltr" selected>ltr</option>
  <option value="rtl">rtl</option></select
><code>;</code><br />

<code>place-content:</code
><select id="alignContentAlignment">
  <option value="normal">normal</option>
  <option value="first baseline">first baseline</option>
  <option value="last baseline">last baseline</option>
  <option value="baseline">baseline</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly" selected>space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center">center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option>
</select>
<select id="justifyContentAlignment">
  <option value="normal">normal</option>
  <option value="space-between">space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
  <option value="center" selected>center</option>
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="safe">safe</option>
  <option value="unsafe">unsafe</option></select
><code>;</code>
```

```js hidden
function update() {
  document.getElementById("container").style.placeContent =
    `${document.getElementById("alignContentAlignment").value} ` +
    `${document.getElementById("justifyContentAlignment").value}`;
}

const alignContentAlignment = document.getElementById("alignContentAlignment");
alignContentAlignment.addEventListener("change", update);

const justifyContentAlignment = document.getElementById(
  "justifyContentAlignment",
);
justifyContentAlignment.addEventListener("change", update);

const writingM = document.getElementById("writingMode");
writingM.addEventListener("change", (evt) => {
  document.getElementById("container").style.writingMode = evt.target.value;
});

const direction = document.getElementById("direction");
direction.addEventListener("change", (evt) => {
  document.getElementById("container").style.direction = evt.target.value;
});
```

#### CSS

```css
#container {
  display: flex;
  height: 240px;
  width: 240px;
  flex-wrap: wrap;
  background-color: #8c8c8c;
  writing-mode: horizontal-tb; /* Can be changed in the live sample */
  direction: ltr; /* Can be changed in the live sample */
  place-content: flex-end center; /* Can be changed in the live sample */
}

div > div {
  border: 2px solid #8c8c8c;
  width: 50px;
  background-color: #a0c8ff;
}

.small {
  font-size: 12px;
  height: 40px;
}

.large {
  font-size: 14px;
  height: 50px;
}
```

#### Ergebnis

{{EmbedLiveSample("Placing_content_in_a_flex_container", "370", "300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-content")}}
- {{cssxref("justify-content")}}
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Ausrichtung von Boxen im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
