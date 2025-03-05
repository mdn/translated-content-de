---
title: place-content
slug: Web/CSS/place-content
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`place-content`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, Inhalte gleichzeitig sowohl in Block- als auch Inline-Richtung auszurichten (d.h. die Eigenschaften {{CSSxRef("align-content")}} und {{CSSxRef("justify-content")}}) in einem relevanten Layout-System wie [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout).

{{EmbedInteractiveExample("pages/css/place-content.html")}}

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Der erste Wert ist der {{CSSxRef("align-content")}}-Eigenschaftswert, der zweite der {{CSSxRef("justify-content")}}-Eigenschaftswert.

> [!NOTE]
> Wenn der zweite Wert nicht vorhanden ist, wird der erste Wert für beide verwendet, vorausgesetzt, er ist ein gültiger Wert für beide. Wenn er für die eine oder andere ungültig ist, wird der gesamte Wert ungültig.

### Werte

- `start`
  - : Die Elemente sind bündig zueinander an der Startkante des Ausrichtungselements in der entsprechenden Achse angeordnet.
- `end`
  - : Die Elemente sind bündig zueinander an der Endkante des Ausrichtungselements in der entsprechenden Achse angeordnet.
- `flex-start`
  - : Die Elemente sind bündig zueinander an der Kante des Ausrichtungselements abhängig von der main-start oder cross-start Seite des Flex-Containers angeordnet.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind bündig zueinander an der Kante des Ausrichtungselements abhängig von der main-end oder cross-end Seite des Flex-Containers angeordnet.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `center`
  - : Die Elemente sind bündig zueinander zur Mitte des Ausrichtungselements angeordnet.
- `left`
  - : Die Elemente sind bündig zueinander an der linken Kante des Ausrichtungselements angeordnet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `right`
  - : Die Elemente sind bündig zueinander an der rechten Kante des Ausrichtungselements in der entsprechenden Achse angeordnet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse ist, verhält sich dieser Wert wie `start`.
- `space-between`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungselements verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Das erste Element ist bündig mit der main-start Kante, und das letzte Element ist bündig mit der main-end Kante.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Basislinie an: Richten Sie die Ausrichtungs-Basislinie des ersten oder letzten Basislinsensatzes des Rahmens an der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basislinsensatz aller Boxen in ihrer Basislinien-Gruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `space-around`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungselements verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist derselbe. Der Leeraum vor dem ersten und nach dem letzten Element ist gleich der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungselements verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, der main-start Kante und dem ersten Element sowie der main-end Kante und dem letzten Element sind alle exakt gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente kleiner ist als die Größe des Ausrichtungselements, wird die Größe der auf `auto`-gesetzten Elemente gleichmäßig (nicht proportional) erhöht, während dabei die durch {{CSSxRef("max-height")}}/{{CSSxRef("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen eingehalten werden, so dass die kombinierte Größe genau das Ausrichtungselement ausfüllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungsschlüsselwort verwendet. Wenn das gewählte Schlüsselwort bedeutet, dass das Element das Ausrichtungselement überläuft und Datenverlust verursacht, wird das Element stattdessen ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungsschlüsselwort verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungselements und unabhängig davon, ob ein Überlauf auftreten könnte, der Datenverlust verursacht, wird der angegebene Ausrichtungswert eingehalten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Platzierung von Inhalten in einem Flex-Container

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
- [Grundlagen des Flexbox-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- Modul [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
