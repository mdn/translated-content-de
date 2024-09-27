---
title: place-content
slug: Web/CSS/place-content
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`place-content`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, Inhalte sowohl in Block- als auch in Inline-Richtung gleichzeitig zu alignieren (d.h. die Eigenschaften {{CSSxRef("align-content")}} und {{CSSxRef("justify-content")}}) in einem relevanten Layoutsystem wie [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout).

{{EmbedInteractiveExample("pages/css/place-content.html")}}

## Bestandteileigenschaften

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
> Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert für beide verwendet, sofern er für beide ein gültiger Wert ist. Wenn er für einen der beiden ungültig ist, wird der gesamte Wert ungültig sein.

### Werte

- `start`
  - : Die Elemente sind bündig zueinander und in Richtung der Startkante des Ausrichtungscontainers auf der entsprechenden Achse.
- `end`
  - : Die Elemente sind bündig zueinander und in Richtung der Endkante des Ausrichtungscontainers auf der entsprechenden Achse.
- `flex-start`
  - : Die Elemente sind bündig zueinander in Richtung der Kante des Ausrichtungscontainers je nach der main-start oder cross-start Seite des Flexcontainers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind bündig zueinander in Richtung der Kante des Ausrichtungscontainers je nach der main-end oder cross-end Seite des Flexcontainers.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flexcontainers sind, wird dieser Wert wie `end` behandelt.
- `center`
  - : Die Elemente sind bündig zueinander zur Mitte des Ausrichtungscontainers.
- `left`
  - : Die Elemente sind bündig zueinander zur linken Kante des Ausrichtungscontainers. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente sind bündig zueinander zur rechten Kante des Ausrichtungscontainers auf der entsprechenden Achse. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `space-between`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element ist bündig mit der Haupt-Startkante und das letzte Element mit der Haupt-Endkante.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: Die Ausrichtungsbaseline des ersten oder letzten Baselinesatzes der Box wird mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baselinesatz aller Boxen in seiner Baseline-Sharing-Gruppe ausgerichtet.
    Die Ausweichausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `space-around`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der Leerraum vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungscontainers verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der Haupt-Startkante und dem ersten Element, sowie der Haupt-Endkante und dem letzten Element ist exakt gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die des Ausrichtungscontainers, wird die Größe von `auto`-dimensionierten Elementen gleichmäßig (nicht proportional) vergrößert, wobei die Einschränkungen von {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder ähnlichen Funktionen) eingehalten werden, sodass die kombinierte Größe genau den Ausrichtungscontainer füllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Wenn das gewählte Schlüsselwort bedeutet, dass das Element den Ausrichtungscontainer überläuft und Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers und unabhängig davon, ob ein Überlauf Datenverlust verursachen könnte, wird der angegebene Ausrichtungswert eingehalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Platzieren von Inhalten in einem Flexcontainer

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

{{EmbedLiveSample("Platzieren_von_Inhalten_in_einem_Flexcontainer", "370", "300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-content")}}
- {{cssxref("justify-content")}}
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flexcontainer](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
