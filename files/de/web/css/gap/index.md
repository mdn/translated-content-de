---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Abstände (auch {{Glossary("gutters", "Rinnen")}} genannt) zwischen Reihen und Spalten fest. Diese Eigenschaft gilt für [mehrspaltige](/de/docs/Web/CSS/CSS_multicol_layout), [flexible](/de/docs/Web/CSS/CSS_flexible_box_layout) und [Raster-](/de/docs/Web/CSS/CSS_grid_layout) Container.

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## Zusammengesetzte Eigenschaften

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

Diese Eigenschaft wird als Wert für `<'row-gap'>` angegeben, gefolgt optional von einem Wert für `<'column-gap'>`. Wenn `<'column-gap'> weggelassen wird, wird er auf denselben Wert wie `<'row-gap'>`gesetzt. Sowohl`<'row-gap'>`als auch`<'column-gap'>`können jeweils als`\<length>`oder`\<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, {{Glossary("flex_item", "flexible Elemente")}}, flexible Linien und {{Glossary("grid_lines", "Rasterlinien")}} trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, flexible Elemente, flexible Linien und Rasterlinien relativ zur Dimension des Elements trennt.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten in einem [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), zwischen flexiblen Elementen und flexiblen Linien in einem [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und zwischen Reihen und Spalten in einem [CSS-Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout).

Die erzeugten Lücken schaffen leere Räume, die die Breite oder Höhe der angegebenen Lückengröße haben, ähnlich wie ein leeres Element oder eine Spur. Der sichtbare Raum zwischen den Elementen kann sich vom angegebenen `gap`-Wert unterscheiden, da Ränder, Abstände und verteilte Ausrichtung den Abstand zwischen den Elementen über das hinaus erhöhen können, was durch `gap` bestimmt wird.

Im Rasterlayout definiert der erste Wert die Rinne zwischen den Reihen, und der zweite definiert die Rinne zwischen den Spalten. In beiden, Raster und flexiblen Layouts, wenn nur ein Wert angegeben wird, wird dieser Wert für beide Dimensionen verwendet.

Bei flexiblen Containern hängt es von der Richtung ab, ob der erste Wert der Abstand zwischen flexiblen Elementen oder zwischen flexiblen Linien ist. Flexible Elemente werden entweder in Reihen oder Spalten basierend auf dem Wert der {{cssxref("flex-direction")}}-Eigenschaft angeordnet. Für Reihen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen flexiblen Linien und der zweite Wert den Abstand zwischen den Elementen innerhalb jeder Linie. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen flexiblen Elementen innerhalb einer flexiblen Linie und der zweite Wert den Abstand zwischen jeder flexiblen Linie.

Bei mehrspaltigen Containern definiert der erste Wert den Abstand zwischen Spalten. Eine Trennlinie kann dem ansonsten "leeren Raum" durch Verwendung der {{cssxref("column-rule-style")}}-Eigenschaft oder der {{cssxref("column-rule")}}-Kurzform hinzugefügt werden.

Prozentuale Lückenwerte werden immer basierend auf der Größe des [Inhaltsrahmens](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über Layoutmodi hinweg, wenn die Containergröße bestimmt ist. Da diese drei Layoutmodi (Mehrspalten, flexibel und Raster) zyklische Prozentgrößen unterschiedlich behandeln, tut dies auch `gap`. Im Rasterlayout lösen sich zyklische Prozentgrößen im Hinblick auf die Bestimmung von {{Glossary("intrinsic_size", "intrinsischen Größen")}} gegen null auf, während sie sich beim Layouterstellung gegen den Inhaltsrahmen des Elements auflösen. Zwei Beispiele unten zeigen prozentuale Lückenwerte mit [expliziter Containergröße](#prozentualer_lückenwert_und_explizite_containergröße) und [impliziter Containergröße](#prozentualer_lückenwert_und_implizite_containergröße) im Abschnitt Beispiele.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap` und um die Kompatibilität mit älteren Websites aufrechtzuerhalten, akzeptieren Browser `grid-gap` weiterhin als Alias für `gap`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flexibles Layout

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

### Rasterlayout

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

### Prozentualer Lückenwert und explizite Containergröße

Wenn die Containergröße festgelegt ist, basieren die Berechnungen des prozentualen Lückenwerts auf der Größe des Containers. Daher ist das Lückenverhalten in allen Layouts konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit Rasterlayout und einen mit flexiblem Layout. Die Container haben fünf rote 20x20px-Kinder. Beide Container sind explizit auf 200px Höhe mit `height: 200px` gesetzt und die Lücke wird mit `gap: 12.5% 0` festgelegt.

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
  background-color: #ccc;
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

Überprüfen Sie nun die Raster- und Flex-Elemente mit dem [Inspektor-Tab in den Webentwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Lücken zu sehen, fahren Sie mit der Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspektor. Sie werden bemerken, dass die Lücke in beiden Fällen gleich ist, nämlich 25px.

### Prozentualer Lückenwert und implizite Containergröße

Wenn die Größe nicht explizit am Container festgelegt ist, verhält sich die prozentuale Lücke im Fall von Raster- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container die Höhe nicht explizit festgelegt.

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
  background-color: #ccc;
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

Im Fall des Rasterlayouts trägt die prozentuale Lücke nicht zur tatsächlichen Höhe des Rasters bei. Die Containerhöhe wird unter Verwendung von `0px` Lücke berechnet, sodass sich die tatsächliche Höhe auf 100px (20px x 5) beläuft. Dann wird die tatsächliche prozentuale Lücke unter Verwendung der Höhe des Inhaltsrahmens berechnet, die Lücke beträgt `12.5px` (100px x 12.5%). Die Lücke wird unmittelbar vor der Darstellung angewandt. Daher bleibt das Raster 100px hoch, läuft jedoch wegen der kurz vor der Darstellung hinzugefügten prozentualen Lücke über.

Im Fall des flexiblen Layouts führt die prozentuale Lücke immer zu einem Nullwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundlegende Konzepte des Rasterlayouts: Rinnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
