---
title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 18257cdbf1d31e61780c52ef36e6fd582eba8d3c
---

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Abstände (auch als {{Glossary("gutters", "Rinnen")}} bezeichnet) zwischen Reihen und Spalten fest. Diese Eigenschaft gilt für [Mehrspaltige](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Container.

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

## Aufbauende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}

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

Diese Eigenschaft wird als ein Wert für `<'row-gap'>` angegeben, gefolgt von einem optionalen Wert für `<'column-gap'>`. Wird `<'column-gap'>` weggelassen, wird derselbe Wert wie `<'row-gap'>` verwendet. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Bestimmt die Breite der Rinne, die Spalten, {{Glossary("flex_item", "Flex-Elemente")}}, Flex-Linien und {{Glossary("grid_lines", "Grid-Linien")}} trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Bestimmt die Breite der Rinne, die Spalten, Flex-Elemente, Flex-Linien und Grid-Linien relativ zur Dimension des Elements trennt.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten im [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout), zwischen Flex-Elementen und Flex-Linien im [CSS-Flexboxlayout](/de/docs/Web/CSS/Guides/Flexible_box_layout) und zwischen Reihen und Spalten im [CSS-Gridlayout](/de/docs/Web/CSS/Guides/Grid_layout).

Die erzeugten Lücken schaffen leere Räume, die die definierte Breite oder Höhe der angegebenen Lücke haben, ähnlich wie ein leeres Element oder ein leerer Track. Der sichtbare Raum zwischen den Elementen kann sich vom angegebenen `gap`-Wert unterscheiden, da Margen, Abstände und verteilte Ausrichtung den Abstand zwischen Elementen möglicherweise über den durch `gap` bestimmten Wert hinaus vergrößern.

Im Grid-Layout definiert der erste Wert die Rinne zwischen den Reihen, und der zweite definiert die Rinne zwischen den Spalten. In sowohl Grid- als auch Flex-Layouts wird, wenn nur ein Wert angegeben ist, dieser Wert für beide Dimensionen verwendet.

In Flex-Containern hängt es davon ab, ob der erste Wert die Lücke zwischen Flex-Elementen oder zwischen Flex-Linien ist, welche Richtung gewählt wurde. Flex-Elemente werden je nach Wert der {{cssxref("flex-direction")}} Eigenschaft entweder in Reihen oder Spalten angeordnet. Für Reihen (`row` (Standard) oder `row-reverse`) definiert der erste Wert die Lücke zwischen Flex-Linien und der zweite Wert die Lücke zwischen Elementen innerhalb jeder Zeile. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert die Lücke zwischen Flex-Elementen innerhalb einer Flex-Linie und der zweite Wert die Lücken zwischen jeder Flex-Linie.

In mehrspaltigen Containern definiert der erste Wert die Lücke zwischen den Spalten. Eine Trennlinie kann dem ansonsten "leeren Raum" hinzugefügt werden, indem die Eigenschaft {{cssxref("column-rule-style")}} oder die Kurzform {{cssxref("column-rule")}} verwendet wird.

Prozentuale Werte für Abstände werden immer gegenüber der Größe des [Inhaltskasten](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über Layout-Modi hinweg, wenn die Containergröße fest definiert ist. Da diese drei Layout-Modi (Mehrspaltig, Flex und Grid) zyklische Prozentgrößen unterschiedlich behandeln, macht dies auch `gap`. Im Grid-Layout lösen zyklische Prozentgrößen gegen null auf, um Beiträge zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} zu bestimmen, lösen aber gegen die Inhaltsbox des Elements auf, wenn der Inhalt layoutiert wird. Zwei nachfolgende Beispiele zeigen prozentuale Abstandsangaben mit [expliziter Containergröße](#prozentuale_abstandsangabe_und_explizite_containergröße) und [impliziter Containergröße](#prozentuale_abstandsangabe_und_implizite_containergröße) im Abschnitt Beispiele.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites zu wahren, akzeptieren Browser `grid-gap` immer noch als Alias für `gap`.

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

### Mehrspaltenlayout

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

### Prozentuale Abstandsangabe und explizite Containergröße

Wenn der Container eine festgelegte Größe hat, basieren die Berechnungen der prozentualen Abstandsangabe auf der Größe des Containers. Somit ist das Verhalten von Abständen über alle Layouts hinweg konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit Grid-Layout und den anderen mit Flex-Layout. Die Container haben fünf rote 20x20px Kinder. Beide Container sind explizit auf 200px Höhe mithilfe von `height: 200px` festgelegt und der Abstand ist mit `gap: 12.5% 0` festgelegt.

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

Jetzt inspizieren Sie die Grid- und Flex-Elemente mit dem [Inspektor-Tab in den Web-Entwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, schweben Sie mit dem Mauszeiger über die Tags `<div id="grid">` und `<div id="flex">` im Inspektor. Sie werden feststellen, dass der Abstand in beiden Fällen gleich ist, nämlich 25px.

### Prozentuale Abstandsangabe und implizite Containergröße

Wenn die Größe des Containers nicht explizit festgelegt ist, verhält sich der prozentuale Abstand im Fall von Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container die Höhe nicht explizit festgelegt.

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

Im Fall des Grid-Layouts trägt der prozentuale Abstand nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit `0px` Abstand berechnet, sodass die tatsächliche Höhe 100px (20px x 5) beträgt. Dann wird der tatsächliche prozentuale Abstand anhand der Höhe der Inhaltsbox berechnet, der Abstand beträgt dann `12.5px` (100px x 12.5%). Der Abstand wird unmittelbar vor dem Rendering angewendet. Daher bleibt das Grid 100px hoch, läuft aber wegen des später hinzugefügten prozentualen Abstands über.

Im Fall des Flex-Layouts resultiert der prozentuale Abstand immer in einem Wert von null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
