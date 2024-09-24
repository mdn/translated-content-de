---
title: place-items
slug: Web/CSS/place-items
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`place-items`** [abkürzende Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, Elemente gleichzeitig in Block- und Inline-Richtung in einem relevanten Layoutsystem wie [Grid](/de/docs/Web/CSS/CSS_grid_layout) oder [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) auszurichten (d.h. die Eigenschaften {{CSSxRef("align-items")}} und {{CSSxRef("justify-items")}}). Wenn der zweite Wert nicht gesetzt ist, wird der erste Wert auch für diesen verwendet.

{{EmbedInteractiveExample("pages/css/place-items.html")}}

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

- [`align-items`](/de/docs/Web/CSS/align-items)
- [`justify-items`](/de/docs/Web/CSS/justify-items)

## Syntax

```css
/* Positionsausrichtung */
place-items: center;
place-items: normal start;
place-items: center normal;
place-items: start legacy;
place-items: end normal;
place-items: self-start legacy;
place-items: self-end normal;
place-items: flex-start legacy;
place-items: flex-end normal;
place-items: anchor-center;

/* Baseline-Ausrichtung */
place-items: baseline normal;
place-items: first baseline legacy;
place-items: last baseline normal;
place-items: stretch legacy;

/* Globale Werte */
place-items: inherit;
place-items: initial;
place-items: revert;
place-items: revert-layer;
place-items: unset;
```

### Werte

Eine der folgenden Formen:

- Ein einzelner {{cssxref("align-items")}}-Wert, der zur Ausrichtung in beiden Richtungen, Block- und Inline-Richtung, verwendet wird.
- Ein {{cssxref("align-items")}}-Wert, der die Ausrichtung in der Blockrichtung festlegt, gefolgt von einem {{cssxref("justify-items")}}-Wert, der die Ausrichtung in der Inline-Richtung festlegt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Platzierung von Elementen in einem Flex-Container

In Flexbox gelten {{cssxref("justify-self")}} oder {{cssxref("justify-items")}} nicht, da auf der Hauptachse die Elemente als Gruppe behandelt werden. Daher wird der zweite Wert ignoriert.

```css hidden
div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
  font-size: 2em;
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
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="container">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
</div>

<div class="row">
  <label for="values">place-items: </label>
  <select id="values">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#container {
  height: 200px;
  width: 240px;
  place-items: stretch; /* Sie können diesen Wert ändern, indem Sie eine andere Option in der Liste auswählen */
  background-color: #8c8c8c;
  display: flex;
}
```

#### Ergebnis

{{EmbedLiveSample("Placing_items_in_a_flex_container", 260, 290)}}

### Platzierung von Elementen in einem Grid-Container

Der folgende Grid-Container enthält Elemente, die kleiner sind als die Rasterbereiche, in denen sie sich befinden. Daher verschiebt `place-items` sie in den Block- und Inline-Abmessungen.

```css hidden
div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
  font-size: 2em;
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
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="gridcontainer">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
</div>

<div class="row">
  <label for="gridvalues">place-items: </label>
  <select id="gridvalues">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("gridvalues");
const container = document.getElementById("gridcontainer");

values.addEventListener("change", (evt) => {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#gridcontainer {
  height: 200px;
  width: 240px;
  place-items: stretch; /* Sie können diesen Wert ändern, indem Sie eine andere Option in der Liste auswählen */
  background-color: #8c8c8c;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#gridcontainer > div {
  width: 50px;
}
```

#### Ergebnis

{{EmbedLiveSample("Placing_items_in_a_grid_container", 260, 290)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("justify-items")}}
- {{CSSxRef("justify-self")}}
- [Grundlagen von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Ausrichtung von Boxen in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
