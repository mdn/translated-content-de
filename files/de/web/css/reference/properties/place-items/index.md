---
title: place-items
slug: Web/CSS/Reference/Properties/place-items
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die [CSS](/de/docs/Web/CSS) **`place-items`** [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) richtet Elemente sowohl in Block- als auch in Inline-Richtung gleichzeitig aus. Sie setzt die Werte der {{CSSxRef("align-items")}}- und {{CSSxRef("justify-items")}}-Eigenschaften. Wenn der zweite Wert nicht gesetzt ist, wird der erste Wert auch dafür verwendet.

{{InteractiveExample("CSS Demo: place-items")}}

```css interactive-example-choice
place-items: center stretch;
```

```css interactive-example-choice
place-items: center start;
```

```css interactive-example-choice
place-items: start end;
```

```css interactive-example-choice
place-items: end center;
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
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("align-items")}}
- {{cssxref("justify-items")}}

## Syntax

```css
/* Positional alignment */
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

/* Baseline alignment */
place-items: baseline normal;
place-items: first baseline legacy;
place-items: last baseline normal;
place-items: stretch legacy;

/* Global values */
place-items: inherit;
place-items: initial;
place-items: revert;
place-items: revert-layer;
place-items: unset;
```

### Werte

Eine der folgenden Formen:

- Ein einzelner {{cssxref("align-items")}}-Wert, der für die Ausrichtung sowohl in Block- als auch in Inline-Richtung verwendet wird.
- Ein {{cssxref("align-items")}}-Wert, der die Ausrichtung in Block-Richtung festlegt, gefolgt von einem {{cssxref("justify-items")}}-Wert, der die Ausrichtung in Inline-Richtung festlegt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Elemente in einem Flex-Container platzieren

Im Flexbox-Layout ist {{cssxref("justify-self")}} oder {{cssxref("justify-items")}} nicht anwendbar, da auf der Hauptachse die Elemente als Gruppe behandelt werden. Daher wird der zweite Wert ignoriert.

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
  place-items: stretch; /* You can change this value by selecting another option in the list */
  background-color: #8c8c8c;
  display: flex;
}
```

#### Ergebnis

{{EmbedLiveSample("Placing_items_in_a_flex_container", 260, 290)}}

### Elemente in einem Grid-Container platzieren

Der folgende Grid-Container enthält Elemente, die kleiner als die zugewiesenen Rasterflächen sind, daher wird `place-items` sie in den Block- und Inline-Dimensionen verschieben.

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
<div id="grid-container">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
</div>

<div class="row">
  <label for="grid-values">place-items: </label>
  <select id="grid-values">
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
const values = document.getElementById("grid-values");
const container = document.getElementById("grid-container");

values.addEventListener("change", (evt) => {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#grid-container {
  height: 200px;
  width: 240px;
  place-items: stretch; /* You can change this value by selecting another option in the list */
  background-color: #8c8c8c;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#grid-container > div {
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
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Raster-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
