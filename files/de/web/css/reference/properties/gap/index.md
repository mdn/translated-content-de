---
title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Abstände (auch {{Glossary("gutters", "Rinnen")}} genannt) zwischen Zeilen und Spalten fest. Diese Eigenschaft gilt für [mehrspaltige](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und [Grid](/de/docs/Web/CSS/CSS_grid_layout) Container.

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

## Bestandesigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Diese Eigenschaft wird als Wert für `<'row-gap'>` angegeben, gefolgt optional von einem Wert für `<'column-gap'>`. Wenn `<'column-gap'>` ausgelassen wird, wird er auf denselben Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, {{Glossary("flex_item", "Flex-Items")}}, Flexlinien und {{Glossary("grid_lines", "Gitterlinien")}} trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, Flex-Items, Flexlinien und Gitterlinien relativ zur Dimension des Elements trennt.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten im [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), zwischen Flex-Items und Flexlinien im [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und zwischen Zeilen und Spalten im [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout).

Die erzeugten Abstände schaffen leere Räume, die die Breite oder Höhe der angegebenen Größe des Abstands haben, ähnlich einem leeren Item oder Track. Der sichtbare Raum zwischen Elementen kann von dem angegebenen `gap`-Wert abweichen, da Margen, Auffüllungen und verteilte Ausrichtung die Trennung zwischen Elementen über das von `gap` bestimmte Maß hinaus erhöhen können.

Im Grid-Layout definiert der erste Wert die Rinne zwischen Zeilen, und der zweite definiert die Rinne zwischen Spalten. In beiden, Grid- und Flex-Layouts, wenn nur ein Wert angegeben wird, wird dieser Wert für beide Dimensionen verwendet.

Bei Flex-Containern hängt es davon ab, ob der erste Wert den Abstand zwischen Flex-Items oder Flexlinien beschreibt, in welcher Richtung. Flex-Items werden entweder in Zeilen oder Spalten angeordnet, je nach Wert der Eigenschaft {{cssxref("flex-direction")}}. Für Zeilen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flexlinien und der zweite Wert den Abstand zwischen Items innerhalb jeder Zeile. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Items innerhalb einer Flexlinie, und der zweite Wert definiert die Abstände zwischen jeder Flexlinie.

In mehrspaltigen Containern definiert der erste Wert den Abstand zwischen Spalten. Eine Trennlinie kann dem ansonsten "leeren Raum" durch Einsatz der Eigenschaft {{cssxref("column-rule-style")}} oder der Kurzschreibweise {{cssxref("column-rule")}} hinzugefügt werden.

Prozentuale Abstandsgrößen werden immer relativ zur Größe des [Inhaltskastens](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über Layoutmodi hinweg, wenn die Containergröße bestimmt ist. Da diese drei Layoutmodi (Mehrspalten-, Flex- und Grid-Layout) zyklische Prozentgrößen unterschiedlich behandeln, tut dies `gap` auch. Im Grid-Layout lösen sich zyklische Prozentgrößen gegen Null auf, um Beiträge zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} zu bestimmen, lösen sich jedoch gegen den Inhaltskasten des Elements auf, wenn die Inhalte angeordnet werden. Zwei Beispiele unten zeigen prozentuale Abstandsgrößen mit [explizierter Containergröße](#prozentuale_abstandsgrößen_und_explizite_containergröße) und [implizierter Containergröße](#prozentuale_abstandsgrößen_und_implizite_containergröße) im Abschnitt Beispiele.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites zu gewährleisten, akzeptieren Browser `grid-gap` immer noch als Alias für `gap`.

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

### Prozentuale Abstandsgrößen und explizite Containergröße

Wenn der Container eine festgelegte Größe hat, dann basieren die Berechnungen für prozentuale Abstandsgrößen auf der Größe des Containers. Somit ist das Abstandsverhalten konsistent über alle Layouts hinweg. Im folgenden Beispiel gibt es zwei Container, einen mit einem Grid-Layout und einen anderen mit einem Flex-Layout. Die Container haben fünf rote 20x20px Kinder. Beide Container sind explizit auf 200px Höhe mit `height: 200px` gesetzt und der Abstand ist mit `gap: 12.5% 0` gesetzt.

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

Untersuchen Sie nun die Grid- und Flex-Elemente mit der [Inspector-Registerkarte in den Web Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, fahren Sie mit der Maus über die `<div id="grid">`- und `<div id="flex">`-Tags im Inspektor. Sie werden bemerken, dass der Abstand in beiden Fällen derselbe ist, nämlich 25px.

### Prozentuale Abstandsgrößen und implizite Containergröße

Wenn die Größe nicht explizit auf dem Container festgelegt ist, dann verhalten sich die prozentualen Abstandsgrößen im Grid- und Flex-Layout unterschiedlich. Im folgenden Beispiel haben die Container keine explizit festgelegte Höhe.

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

Im Fall des Grid-Layouts trägt der prozentuale Abstand nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit `0px` Abstand berechnet, sodass die tatsächliche Höhe 100px beträgt (20px x 5). Dann wird der tatsächliche prozentuale Abstand anhand der Höhe des Inhaltskastens berechnet, wobei sich der Abstand als `12.5px` herausstellt (100px x 12.5%). Der Abstand wird unmittelbar vor dem Rendern angewendet. Somit bleibt das Grid 100px hoch, hat aber einen Überfluss aufgrund des prozentualen Abstands, der später unmittelbar vor dem Rendern hinzugefügt wird.

Im Fall des Flex-Layouts ergibt sich der prozentuale Abstand immer in einem Nullwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
