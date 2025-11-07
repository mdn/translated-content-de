---
title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Abstände (auch {{Glossary("gutters", "Rinnen")}} genannt) zwischen Zeilen und Spalten fest. Diese Eigenschaft gilt für [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout) Container.

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

## Bestandteile der Eigenschaft

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

Diese Eigenschaft wird als Wert für `<'row-gap'>` angegeben, gefolgt optional von einem Wert für `<'column-gap'>`. Wenn `<'column-gap'>` weggelassen wird, wird er auf denselben Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Legt die Breite der Rinne fest, die Spalten, {{Glossary("flex_item", "Flex-Elemente")}}, Flex-Linien und {{Glossary("grid_lines", "Grid-Linien")}} trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Legt die Breite der Rinne fest, die Spalten, Flex-Elemente, Flex-Linien und Grid-Linien relativ zur Dimension des Elements trennt.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten im [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout), zwischen Flex-Elementen und Flex-Linien im [CSS-Flexiblen Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) und zwischen Zeilen und Spalten im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout).

Die erzeugten Abstände schaffen leere Räume, die die Breite oder Höhe der angegebenen Gap-Größe haben, ähnlich wie ein leeres Element oder Spur. Der sichtbare Raum zwischen Elementen kann vom angegebenen `gap`-Wert abweichen, da Margen, Polsterung und verteilte Ausrichtung den Abstand zwischen Elementen über das durch `gap` bestimmte Maß hinaus vergrößern können.

Im Grid-Layout definiert der erste Wert die Rinne zwischen Zeilen und der zweite Wert die Rinne zwischen Spalten. In Grid- und Flex-Layouts wird, wenn nur ein Wert angegeben ist, dieser für beide Dimensionen verwendet.

Bei Flex-Containern hängt es von der Richtung ab, ob der erste Wert den Abstand zwischen Flex-Elementen oder zwischen Flex-Linien definiert. Flex-Elemente werden abhängig vom Wert der {{cssxref("flex-direction")}}-Eigenschaft entweder in Zeilen oder Spalten angeordnet. Bei Zeilen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flex-Linien und der zweite den Abstand zwischen Elementen innerhalb jeder Linie. Bei Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Linie und der zweite den Abstand zwischen den einzelnen Flex-Linien.

In Mehrspalten-Containern definiert der erste Wert den Abstand zwischen Spalten. Eine Trennlinie kann dem ansonsten „leeren Raum“ hinzugefügt werden, indem die {{cssxref("column-rule-style")}}-Eigenschaft oder Kurzform {{cssxref("column-rule")}} verwendet wird.

Prozentuale Gap-Werte werden immer relativ zur Größe des [Inhaltskastens](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Containerelements berechnet. Das Verhalten ist wohldefiniert und konsistent über Layout-Modi hinweg, wenn die Containergröße bestimmt ist. Da diese drei Layout-Modi (Mehrspalten, Flex und Grid) zyklische Prozentsatzgrößen unterschiedlich behandeln, verhält sich `gap` ebenfalls so. Im Grid-Layout werden zyklische Prozentsatzgrößen für die Bestimmung der {{Glossary("intrinsic_size", "intrinsischen Größe")}} auf null aufgelöst, aber beim Anordnen der Inhalte gegen den Inhaltskasten des Elements aufgelöst. Zwei Beispiele unten zeigen prozentuale Gap-Werte mit [expliziter Containergröße](#prozentualer_gap-wert_und_explizite_containergröße) und [impliziter Containergröße](#prozentualer_gap-wert_und_implizite_containergröße) im Beispielabschnitt.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites beizubehalten, akzeptieren Browser weiterhin `grid-gap` als Alias für `gap`.

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

### Prozentualer Gap-Wert und explizite Containergröße

Wenn der Container eine festgelegte Größe hat, basieren die Berechnungen des prozentualen Gap-Wertes auf der Größe des Containers. Somit ist das Verhalten des Gaps über alle Layouts hinweg konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit Grid-Layout und einen mit Flex-Layout. Die Container haben fünf rote 20x20px Kinder. Beide Container sind explizit auf 200px Höhe mit `height: 200px` gesetzt und der Gap ist mit `gap: 12.5% 0` gesetzt.

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

Untersuchen Sie nun die Grid- und Flex-Elemente mit dem [Inspector-Tab in den Web Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Gaps zu sehen, bewegen Sie die Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspector. Sie werden feststellen, dass der Gap in beiden Fällen derselbe ist, nämlich 25px.

### Prozentualer Gap-Wert und implizite Containergröße

Wenn die Größe nicht explizit auf dem Container festgelegt ist, verhält sich der prozentuale Gap im Fall von Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container keine explizit festgelegte Höhe.

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

Im Fall des Grid-Layouts trägt der prozentuale Gap nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird unter Verwendung eines `0px` Gaps berechnet, sodass sich die tatsächliche Höhe auf 100px (20px x 5) beläuft. Dann wird der tatsächliche prozentuale Gap unter Verwendung der Höhe des Inhaltkastens berechnet, der Gap beläuft sich auf `12.5px` (100px x 12.5%). Der Gap wird kurz vor dem Rendern angewendet. Somit bleibt das Grid 100px hoch, aber es überläuft aufgrund des später genau vor dem Rendern hinzugefügten prozentualen Gaps.

Im Fall des Flex-Layouts ergibt der prozentuale Gap immer einen Nullwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
