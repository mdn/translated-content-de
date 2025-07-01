---
title: place-content
slug: Web/CSS/place-content
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`place-content`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, Inhalte sowohl in Block- als auch in Inline-Richtung gleichzeitig auszurichten (d.h. die Eigenschaften {{CSSxRef("align-content")}} und {{CSSxRef("justify-content")}}) in einem relevanten Layout-System wie [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout).

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

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`align-content`](/de/docs/Web/CSS/align-content)
- [`justify-content`](/de/docs/Web/CSS/justify-content)

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

Der erste Wert ist der Wert der Eigenschaft {{CSSxRef("align-content")}}, der zweite der von {{CSSxRef("justify-content")}}.

> [!NOTE]
> Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert für beide verwendet, vorausgesetzt, er ist für beide gültig. Wenn er für die eine oder andere ungültig ist, ist der gesamte Wert ungültig.

### Werte

- `start`
  - : Die Elemente werden bündig zueinander am Anfangsrand des Ausrichtungscontainers entlang der entsprechenden Achse gepackt.
- `end`
  - : Die Elemente werden bündig zueinander am Endrand des Ausrichtungscontainers entlang der entsprechenden Achse gepackt.
- `flex-start`
  - : Die Elemente werden bündig zueinander am Rand des Ausrichtungscontainers entsprechend der Haupt- oder Querachse des Flex-Containers gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente werden bündig zueinander am Rand des Ausrichtungscontainers entsprechend der Haupt- oder Querachse des Flex-Containers gepackt.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `center`
  - : Die Elemente werden bündig zueinander in die Mitte des Ausrichtungscontainers gepackt.
- `left`
  - : Die Elemente werden bündig zueinander an den linken Rand des Ausrichtungscontainers gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente werden bündig zueinander an den rechten Rand des Ausrichtungscontainers entlang der entsprechenden Achse gepackt. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, verhält sich dieser Wert wie `start`.
- `space-between`
  - : Die Elemente werden gleichmäßig im Ausrichtungscontainer verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Das erste Element ist bündig mit dem Hauptstart-Rand und das letzte Element bündig mit dem Hauptend-Rand.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Baseline an: richtet die Ausrichtungsbaseline des ersten oder letzten Baseline-Sets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Set aller Boxen in seiner Baseline-Teilen-Gruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `space-around`
  - : Die Elemente werden gleichmäßig im Ausrichtungscontainer verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Der freie Raum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente werden gleichmäßig im Ausrichtungscontainer verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, dem Hauptstart-Rand und dem ersten Element sowie dem Hauptend-Rand und dem letzten Element ist genau derselbe.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die des Ausrichtungscontainers, wird die Größe aller `auto`-großen Elemente gleichermaßen (nicht proportional) erhöht, wobei die Einschränkungen durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) respektiert werden, sodass die kombinierte Größe genau den Ausrichtungscontainer ausfüllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungs-Keyword verwendet. Wenn das gewählte Keyword bedeutet, dass das Element den Ausrichtungscontainer überlappt und zu Datenverlust führt, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungs-Keyword verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers und unabhängig davon, ob Überlauf, der zu Datenverlust führen könnte, auftreten könnte, wird der gegebene Ausrichtungswert eingehalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inhalte in einem Flex-Container platzieren

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
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
