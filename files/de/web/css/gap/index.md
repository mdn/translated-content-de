---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Abstände (auch {{Glossary("gutters", "Rinnen")}} genannt) zwischen Zeilen und Spalten fest. Diese Eigenschaft gilt für [Mehrspalten](/de/docs/Web/CSS/CSS_multicol_layout)-, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- und [Grid-Container](/de/docs/Web/CSS/CSS_grid_layout).

{{InteractiveExample("CSS Demo: gap")}}

```css interactive-example-choice
gap: 0;
```

```css interactive-example-choice
gap: 10%;
```

```css interactive-example-choice
gap: 1em;
```

```css interactive-example-choice
gap: 10px 20px;
```

```css interactive-example-choice
gap: calc(20px + 10%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("column-gap")}}
- {{cssxref("row-gap")}}

## Syntax

```css
/* One <length> value */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* One <percentage> value */
gap: 16%;
gap: 100%;

/* Two <length> values */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* One or two <percentage> values */
gap: 16% 100%;
gap: 21px 82%;

/* calc() values */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Global values */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

### Werte

Diese Eigenschaft wird als Wert für `<'row-gap'>` angegeben, dem optional ein Wert für `<'column-gap'>` folgt. Wenn `<'column-gap'>` weggelassen wird, wird es auf denselben Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Bestimmt die Breite der Rinne, die Spalten, {{Glossary("flex_item", "Flex-Elemente")}}, Flex-Linien und {{Glossary("grid_lines", "Grid-Linien")}} trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Bestimmt die Breite der Rinne, die Spalten, Flex-Elemente, Flex-Linien und Grid-Linien im Verhältnis zur Dimension des Elements trennt.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten im [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), zwischen Flex-Elementen und Flex-Linien im [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und zwischen Zeilen und Spalten im [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout).

Die erzeugten Lücken schaffen leere Räume, die die Breite oder Höhe der angegebenen `gap`-Größe haben, ähnlich wie ein leeres Element oder eine Spur. Der sichtbare Abstand zwischen Elementen kann sich vom angegebenen `gap`-Wert unterscheiden, da Ränder, Abstände und verteilte Ausrichtungen den Abstand zwischen Elementen über das von `gap` bestimmte Maß hinaus erhöhen können.

Im Grid-Layout definiert der erste Wert die Rinne zwischen den Zeilen, und der zweite definiert die Rinne zwischen den Spalten. In sowohl Grid- als auch Flex-Layouts, wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

Bei Flex-Containern hängt es davon ab, ob der erste Wert der Abstand zwischen Flex-Elementen oder zwischen Flex-Linien ist, je nach Richtung. Flex-Elemente werden entweder in Zeilen oder Spalten entsprechend dem Wert der {{cssxref("flex-direction")}}-Eigenschaft angeordnet. Für Zeilen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flex-Linien, und der zweite Wert definiert den Abstand zwischen Elementen innerhalb jeder Linie. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Linie, und der zweite Wert definiert den Abstand zwischen jeder Flex-Linie.

In Mehrspalten-Containern definiert der erste Wert die Lücke zwischen den Spalten. Eine Trennlinie kann zum ansonsten "leeren Raum" durch die Verwendung der Eigenschaft {{cssxref("column-rule-style")}} oder der Kurzform {{cssxref("column-rule")}} hinzugefügt werden.

Prozentuale `gap`-Werte werden immer im Verhältnis zur Größe der [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Container-Elements berechnet. Das Verhalten ist gut definiert und konsistent über Layout-Modi hinweg, wenn die Containergröße bestimmt ist. Da diese drei Layout-Modi (Mehrspalten, Flex und Grid) zyklische Prozentgrößen unterschiedlich behandeln, tut auch `gap` dies. Im Grid-Layout lösen sich zyklische Prozentgrößen gegen null auf, um {{Glossary("intrinsic_size", "intrinsische Größen")}}-Beiträge zu bestimmen, aber sie lösen sich gegen die Inhaltsbox des Elements auf, wenn das Layout der Inhalte bestimmt wird. Zwei Beispiele unten zeigen prozentuale `gap`-Werte mit [expliziter Containergröße](#prozentualer_`gap`-wert_und_explizite_containergröße) und [impliziter Containergröße](#prozentualer_`gap`-wert_und_implizite_containergröße) im Beispielabschnitt.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites zu gewährleisten, akzeptieren Browser `grid-gap` weiterhin als Alias für `gap`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Layout

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Ergebnis

{{EmbedLiveSample("Flex_layout", "auto", 250)}}

### Grid-Layout

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Ergebnis

{{EmbedLiveSample("Grid_layout", "auto", 250)}}

### Mehrspalten-Layout

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  <code>gap</code> property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### Ergebnis

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

### Prozentualer `gap`-Wert und explizite Containergröße

Wenn der Container eine festgelegte Größe hat, werden Berechnungen des prozentualen `gap`-Werts auf der Größe des Containers basierend durchgeführt. Somit ist das `gap`-Verhalten über alle Layouts hinweg konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit einem Grid-Layout und den anderen mit einem Flex-Layout. Die Container haben fünf rote 20x20px-Kinder. Beide Container sind ausdrücklich auf 200px Höhe mit `height: 200px` festgelegt und der `gap`-Wert wird mit `gap: 12.5% 0` festgelegt.

```html
<span>Grid</span>
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<span>Flex</span>
<div id="flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css hidden
body > div {
  background-color: #cccccc;
  width: 200px;
  flex-flow: column;
}
```

```css
#grid {
  display: inline-grid;
  height: 200px;
  gap: 12.5% 0;
}

#flex {
  display: inline-flex;
  height: 200px;
  gap: 12.5% 0;
}

#grid > div,
#flex > div {
  background-color: coral;
  width: 20px;
  height: 20px;
}
```

{{EmbedLiveSample("Explicit container size", "auto", "200px")}}

Untersuchen Sie nun die Grid- und Flex-Elemente mit dem [Inspector-Tab in den Web Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen `gaps` zu sehen, schweben Sie mit der Maus über die `<div id="grid">`- und `<div id="flex">`-Tags im Inspector. Sie werden feststellen, dass in beiden Fällen das `gap` derselbe ist, nämlich 25px.

### Prozentualer `gap`-Wert und implizite Containergröße

Wenn die Größe am Container nicht explizit festgelegt ist, verhält sich das prozentuale `gap` im Fall von Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container keine explizit festgelegte Höhe.

```html hidden
<span>Grid</span>
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<span>Flex</span>
<div id="flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css hidden
body > div {
  background-color: #cccccc;
  width: 200px;
}

#grid {
  display: inline-grid;
  gap: 12.5% 0;
}

#flex {
  display: inline-flex;
  gap: 12.5% 0;
  flex-flow: column;
}

#grid > div,
#flex > div {
  background-color: coral;
  width: 20px;
  height: 20px;
}
```

{{EmbedLiveSample("Implicit container size", "auto", "200px")}}

Im Fall des Grid-Layouts trägt der prozentuale `gap` nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit einem `0px`-Gap berechnet, sodass die tatsächliche Höhe 100px (20px x 5) beträgt. Dann wird der tatsächliche prozentuale `gap` unter Verwendung der Inhaltsbox-Höhe berechnet, der `gap` stellt sich als `12.5px` heraus (100px x 12.5%). Der `gap` wird kurz vor dem Rendering angewendet. Somit bleibt das Grid 100px hoch, aber es läuft aufgrund des prozentual hinzugefügten `gap` kurz vor dem Rendering über.

Im Fall des Flex-Layouts ergibt der prozentuale `gap` immer den Wert null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Modul
- [CSS Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)-Modul
