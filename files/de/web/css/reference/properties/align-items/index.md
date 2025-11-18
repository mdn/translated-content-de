---
title: align-items
slug: Web/CSS/Reference/Properties/align-items
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die [CSS](/de/docs/Web/CSS) **`align-items`**-Eigenschaft setzt den {{cssxref("align-self")}}-Wert für alle direkten Kinder als Gruppe. In Flexbox steuert sie die Ausrichtung der Elemente auf der {{Glossary("cross_axis", "Kreuzachse")}}. Im Grid-Layout steuert sie die Ausrichtung der Elemente auf der Blockachse innerhalb ihrer {{Glossary("grid_areas", "Grid-Bereiche")}}.

{{InteractiveExample("CSS Demo: align-items")}}

```css interactive-example-choice
align-items: stretch;
```

```css interactive-example-choice
align-items: center;
```

```css interactive-example-choice
align-items: start;
```

```css interactive-example-choice
align-items: end;
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
  width: 200px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

Das interaktive Beispiel unten demonstriert einige der Werte für `align-items` unter Verwendung von Grid- und Flex-Layout.

## Syntax

```css
/* Basic keywords */
align-items: normal;
align-items: stretch;

/* Positional alignment */
/* align-items does not take left and right values */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;
align-items: anchor-center;

/* Baseline alignment */
align-items: baseline;
align-items: first baseline;
align-items: last baseline;

/* Overflow alignment (for positional alignment only) */
align-items: safe center;
align-items: unsafe center;

/* Global values */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
```

### Werte

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layoutmodus ab, in dem wir uns befinden:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position absolut positionierter Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `center`
  - : Die Margenboxen der Flex-Elemente sind innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße eines Elements größer als der Flex-Container ist, wird es gleichmäßig in beide Richtungen überlaufen.

- `start`
  - : Die Elemente sind bündig zueinander gepackt am Startrand des Ausrichtungscontainers auf der entsprechenden Achse.

- `end`
  - : Die Elemente sind bündig zueinander gepackt am Endrand des Ausrichtungscontainers auf der entsprechenden Achse.

- `self-start`
  - : Die Elemente sind bündig zum Rand der Startseite des Items im Ausrichtungscontainer auf der entsprechenden Achse.

- `self-end`
  - : Die Elemente sind bündig zum Rand der Endseite des Items im Ausrichtungscontainer auf der entsprechenden Achse.

- `baseline`, `first baseline`, `last baseline`
  - : Alle Flex-Elemente sind so angeordnet, dass ihre [Flex-Container-Basislinien](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) übereinstimmen. Das Element mit der größten Entfernung zwischen seinem Kreuz-Start-Margenrand und seiner Basislinie wird mit dem Kreuz-Start-Rand der Linie bündig gemacht.

- `stretch`
  - : Wenn die Kreuzgröße des Elements `auto` ist, wird die verwendete Größe auf die notwendige Länge gesetzt, um dem Container so nahe wie möglich zu kommen, wobei die Breiten- und Höhenbegrenzungen des Elements beachtet werden. Wenn das Element nicht automatisch dimensioniert ist, fällt dieser Wert auf `flex-start` zurück und auf `self-start` oder `self-end`, wenn das {{cssxref("align-content")}} des Containers `first baseline` (oder `baseline`) oder `last baseline` ist.

- `anchor-center`
  - : Bei [anker-positionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen richtet es die Elemente in der Blockrichtung mittig zum zugehörigen Ankerelement aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

- `safe`
  - : Verwendet zusammen mit einem Ausrichtungs-Schlüsselwort. Wenn das gewählte Schlüsselwort bedeutet, dass das Element den Ausrichtungscontainer überläuft und dabei Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.

- `unsafe`
  - : Verwendet zusammen mit einem Ausrichtungs-Schlüsselwort. Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers und ob ein Überlauf, der Datenverlust verursacht, auftreten könnte, wird der gegebene Ausrichtungswert respektiert.

Es gibt auch zwei Werte, die für Flexbox definiert wurden, da sie auf Konzepten der [Flexmodellachsen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) basieren, die auch im Grid-Layout funktionieren:

- `flex-start`
  - : Nur im Flex-Layout verwendet, richtet die Flex-Elemente bündig gegen die Haupt-Start- oder Kreuz-Start-Seite des Flex-Containers aus. Außerhalb eines Flex-Formatierkontexts verhält sich dieser Wert wie `start`.

- `flex-end`
  - : Nur im Flex-Layout verwendet, richtet die Flex-Elemente bündig gegen die Haupt-End- oder Kreuz-End-Seite des Flex-Containers aus. Außerhalb eines Flex-Formatierkontexts verhält sich dieser Wert wie `end`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel haben wir einen Container mit sechs Kindern. Ein {{htmlelement("select")}} Dropdown-Menü ermöglicht das Umschalten des {{cssxref("display")}} des Containers zwischen `grid` und `flex`. Ein zweites Menü ermöglicht das Ändern des Wertes der `align-items`-Eigenschaft des Containers.

### CSS

Wir gestalten den Container und die Elemente so, dass wir zwei Zeilen oder Reihen von Elementen haben. Wir haben `.flex` und `.grid` Klassen definiert, die dem Container mit JavaScript zugewiesen werden. Sie setzen den {{cssxref("display")}} Wert des Containers und ändern seine Hintergrund- und Randfarben, was einen zusätzlichen Hinweis darauf gibt, dass sich das Layout geändert hat. Die sechs Flex-Elemente haben jeweils eine andere Hintergrundfarbe, wobei das 4. Element zwei Zeilen lang ist und das 6. Element eine vergrößerte Schriftart hat.

```css
.flex,
.grid {
  height: 200px;
  width: 500px;
  align-items: initial; /* Change the value in the live sample */
  border: solid 5px transparent;
  gap: 3px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  background-color: #8c8c9f;
  border-color: magenta;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  background-color: #9f8c8c;
  border-color: slateblue;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}
```

```css hidden
select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}

div > div {
  box-sizing: border-box;
  border: 2px solid white;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### HTML

Wir fügen einen {{htmlelement("div")}} Container mit sechs geschachtelten `<div>`-Kinderelementen ein. Der HTML-Code für das Formular und das JavaScript, das die Klassenzuordnung des Containers ändert, wurde zur Kürze ausgeblendet.

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4<br />line 2</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>
```

```html hidden
<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const display = document.getElementById("display");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", (evt) => {
  container.className = evt.target.value;
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "260", "290")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-self")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-items")}} Shorthand
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Ausrichtung von Boxen im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS Flexibles Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
