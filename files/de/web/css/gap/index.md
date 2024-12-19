---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`gap`**-[CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) setzt die Abstände (auch als {{Glossary("gutters", "Rinnen")}} bezeichnet) zwischen Zeilen und Spalten. Diese Eigenschaft gilt für [Mehrspalten](/de/docs/Web/CSS/CSS_multicol_layout)-, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- und [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Container.

{{EmbedInteractiveExample("pages/css/gap.html")}}

## Komponenteneigenschaften

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

Diese Eigenschaft wird als Wert für `<'row-gap'>` angegeben, gefolgt von einem optionalen Wert für `<'column-gap'>`. Wenn `<'column-gap'>` weggelassen wird, wird er auf denselben Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, {{Glossary("flex_item", "Flex-Elemente")}}, Flex-Linien und {{Glossary("grid_lines", "Grid-Linien")}} trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, Flex-Elemente, Flex-Linien und Grid-Linien relativ zur Dimension des Elements trennt.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten im [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), zwischen Flex-Elementen und Flex-Linien im [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und zwischen Zeilen und Spalten im [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout).

Die erzeugten Abstände schaffen leere Räume, die die Breite oder Höhe der angegebenen Größe der Lücke haben, ähnlich einem leeren Element oder Track. Der tatsächlich sichtbare Raum zwischen den Elementen kann sich vom angegebenen `gap`-Wert unterscheiden, da Ränder, Polsterungen und verteilte Ausrichtungen den Abstand zwischen den Elementen über das hinaus erhöhen können, was durch `gap` bestimmt wird.

Im Grid-Layout definiert der erste Wert die Rinne zwischen den Zeilen, und der zweite Wert definiert die Rinne zwischen den Spalten. In beiden, Grid- und Flex-Layouts, wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

Bei Flex-Containern hängt es davon ab, ob der erste Wert der Abstand zwischen Flex-Elementen oder zwischen Flex-Linien ist, von der Richtung ab. Flex-Elemente werden entweder in Zeilen oder Spalten abhängig vom Wert der {{cssxref("flex-direction")}}-Eigenschaft angeordnet. Für Zeilen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flex-Linien und der zweite Wert den Abstand zwischen Elementen innerhalb jeder Linie. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Linie, und der zweite Wert definiert die Abstände zwischen jeder Flex-Linie.

In Mehrspalten-Containern definiert der erste Wert den Abstand zwischen den Spalten. Eine Trennlinie kann zum ansonsten "leeren Raum" hinzugefügt werden, indem die {{cssxref("column-rule-style")}}-Eigenschaft oder die {{cssxref("column-rule")}}-Kurzform verwendet wird.

Prozentuale Gap-Werte werden immer gegen die Größe des [Inhaltskastens](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Container-Elements berechnet. Das Verhalten ist gut definiert und konsistent über Layout-Modi hinweg, wenn die Containergröße definiert ist. Da diese drei Layout-Modi (Mehrspalten, Flex und Grid) zyklische prozentuale Größen unterschiedlich behandeln, tut `gap` dies auch. Im Grid-Layout lösen sich zyklische prozentuale Größen gegen null auf, um die {{Glossary("intrinsic_size", "intrinsische Größe")}} zu bestimmen, aber sie lösen sich gegen den Inhalt des Kastens auf, wenn die Inhalte angeordnet werden. Zwei Beispiele unten demonstrieren prozentuale Gap-Werte mit [expliziter Containergröße](#prozentualer_gap-wert_und_explizite_containergröße) und [impliziter Containergröße](#prozentualer_gap-wert_und_implizite_containergröße) im Beispielabschnitt.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites zu wahren, akzeptieren Browser weiterhin `grid-gap` als Alias für `gap`.

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

Wenn der Container eine feste Größe hat, basieren die Berechnungen der prozentualen Gap-Werte auf der Größe des Containers. Somit ist das Gap-Verhalten in allen Layouts konsistent. Im folgenden Beispiel gibt es zwei Container, einer mit einem Grid-Layout und der andere mit einem Flex-Layout. Die Container haben fünf rote Kinder mit 20x20px. Beide Container sind explizit auf 200px Höhe eingestellt mit `height: 200px` und das Gap ist mit `gap: 12.5% 0` gesetzt.

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

Nun inspizieren Sie die Grid- und Flex-Elemente mit dem [Inspektor-Tab in den Web-Entwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, bewegen Sie die Maus über die `<div id="grid">` und `<div id="flex">`-Tags im Inspektor. Sie werden feststellen, dass der Abstand in beiden Fällen derselbe ist, nämlich 25px.

### Prozentualer Gap-Wert und implizite Containergröße

Wenn die Größe des Containers nicht explizit festgelegt ist, verhält sich der Prozentuale-Abstand im Fall von Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container die Höhe nicht explizit festgelegt.

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

Im Fall des Grid-Layouts trägt der Prozentuale-Abstand nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird unter Verwendung eines `0px`-Abstands berechnet, sodass die tatsächliche Höhe sich auf 100px (20px x 5) beläuft. Dann wird der tatsächliche prozentuale Abstand mit der Höhe des Inhaltskastens berechnet, der Abstand beträgt `12.5px` (100px x 12.5%). Der Abstand wird unmittelbar vor dem Rendering angewendet. Somit bleibt das Grid 100px hoch, jedoch überläuft es aufgrund des prozentualen Abstands, der später unmittelbar vor dem Rendering hinzugefügt wird.

Im Fall des Flex-Layouts ergibt der prozentuale Abstand immer einen Nullwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundlegende Konzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
- [CSS-Flexbox-Layoutmodul](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS-Grid-Layoutmodul](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS-Mehrspalten-Layoutmodul](/de/docs/Web/CSS/CSS_multicol_layout)
