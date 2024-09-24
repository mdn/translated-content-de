---
title: align-content
slug: Web/CSS/align-content
l10n:
  sourceCommit: 8b4e6b773d03959d5a5b2d02200243c4714079b9
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`align-content`**-Eigenschaft bestimmt die Verteilung des Raums zwischen und um Inhaltselemente entlang einer [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-[Querachse](/de/docs/Glossary/Cross_Axis) oder einer [Gitter](/de/docs/Web/CSS/CSS_grid_layout)- oder [Block-Level](/de/docs/Glossary/Block-level_content)-Elementblockachse.

Das interaktive Beispiel unten verwendet das Gitterlayout, um einige der Werte dieser Eigenschaft zu demonstrieren.

{{EmbedInteractiveExample("pages/css/align-content.html")}}

Diese Eigenschaft hat keine Wirkung auf Flex-Container mit einer einzigen Zeile (d. h. solche mit `flex-wrap: nowrap`).

## Syntax

```css
/* Normale Ausrichtung */
align-content: normal;

/* Grundlegende Positionsausrichtung */
/* align-content nimmt keine left- und right-Werte */
align-content: start;
align-content: center;
align-content: end;
align-content: flex-start;
align-content: flex-end;

/* Grundlinienausrichtung */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* Verteilte Ausrichtung */
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
align-content: stretch;

/* Überlauf-Ausrichtung */
align-content: safe center;
align-content: unsafe center;

/* Globale Werte */
align-content: inherit;
align-content: initial;
align-content: revert;
align-content: revert-layer;
align-content: unset;
```

### Werte

- `normal`
  - : Die Elemente sind in ihrer Standardposition angeordnet, als ob kein `align-content`-Wert gesetzt wäre.
- `start`
  - : Die Elemente sind bündig gegen den Start der Ausrichtungskontainerkante entlang der Querachse gepackt.
- `center`
  - : Die Elemente sind in der Mitte des Ausrichtungskontainers entlang der Querachse bündig aneinander gepackt.
- `end`
  - : Die Elemente sind bündig gegen die Endkante des Ausrichtungskontainers entlang der Querachse gepackt.
- `flex-start`
  - : Die Elemente sind bündig gegeneinander gegen die Kante des Ausrichtungskontainers gepackt, abhängig von der flex-container Quer-Startseite.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.
- `flex-end`
  - : Die Elemente sind bündig gegeneinander gegen die Kante des Ausrichtungskontainers gepackt, abhängig von der flex-container Quer-Endseite.
    Dies gilt nur für Flex-Layout-Elemente. Für Elemente, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.
- `baseline`, `first baseline`, `last baseline`

  - : Gibt die Teilnahme an der ersten oder letzten Grundlinienausrichtung an: richtet die Ausrichtungsgrundlinie des Box-Ersten oder letzten Grundliniensatzes mit der entsprechenden Grundlinie im gemeinsamen ersten oder letzten Grundliniensatz aller Boxen in seiner Grundlinien-Gruppe aus.

    ![Die Grundlinie ist die Linie, auf der die meisten Buchstaben "sitzen" und unter der sich Abstriche erstrecken.](410px-typography_line_terms.svg.png)

    Die Ersatz-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.

- `space-between`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungskontainers entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Das erste Element liegt bündig am Anfang der Ausrichtungskontainerkante entlang der Querachse, und das letzte Element bündig am Ende der Ausrichtungskontainerkante in der Querachse.
- `space-around`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungskontainers entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente ist gleich. Der Abstand vor dem ersten und nach dem letzten Element entspricht der Hälfte des Abstands zwischen jedem Paar benachbarter Elemente.
- `space-evenly`
  - : Die Elemente sind gleichmäßig innerhalb des Ausrichtungskontainers entlang der Querachse verteilt. Der Abstand zwischen jedem Paar benachbarter Elemente, dem Anfangsrand und dem ersten Element sowie dem Endrand und dem letzten Element ist genau gleich.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungskontainers, werden alle `auto`-dimensionierten Elemente gleichmäßig (nicht proportional) vergrößert, wobei die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Beschränkungen eingehalten werden, sodass die kombinierte Größe den Ausrichtungskontainer entlang der Querachse genau ausfüllt.
- `safe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Wenn das gewählte Schlüsselwort bedeutet, dass das Element den Ausrichtungskontainer überläuft und dadurch Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungskontainers und ob ein Überlauf, der Datenverlust verursachen könnte, auftreten könnte, wird der gegebene Ausrichtungswert eingehalten.

> [!NOTE]
> Die `<content-distribution>`-Werte (`space-between`, `space-around`, `space-evenly`, und `stretch`) haben keine Wirkung im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content), da der gesamte Inhalt in diesem Block als ein einziges [Ausrichtungs-Subjekt](/de/docs/Glossary/Alignment_Subject) behandelt wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Effekte verschiedener align-content-Werte

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
    <p>CSS angewandt</p>
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

Im [Block-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables#align-content_and_justify-content) werden Kind-Elemente als ein einziges Element behandelt, was bedeutet, dass `space-between`, `space-around` und `space-evenly` sich anders verhalten.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Gitterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- [Block- und Inline-Layout im normalen Ablauf](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Block-level_content](/de/docs/Glossary/Block-level_content)
- {{CSSXRef("display")}}
