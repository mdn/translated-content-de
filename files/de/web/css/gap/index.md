---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Abstände (auch als {{Glossary("gutters", "Rinnen")}} bezeichnet) zwischen Zeilen und Spalten fest. Diese Eigenschaft gilt für [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout), [Flex-](/de/docs/Web/CSS/CSS_flexible_box_layout) und [Grid-](/de/docs/Web/CSS/CSS_grid_layout) Container.

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

## Zugehörige Eigenschaften

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

Diese Eigenschaft wird als Wert für `<'row-gap'>` angegeben, gefolgt optional von einem Wert für `<'column-gap'>`. Wenn `<'column-gap'>` weggelassen wird, wird es auf denselben Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Bestimmt die Breite der Rinne, die Spalten, {{Glossary("flex_item", "Flex-Elemente")}}, Flexlinien und {{Glossary("grid_lines", "Grid-Linien")}} voneinander trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Bestimmt die Breite der Rinne, die Spalten, Flex-Elemente, Flexlinien und Grid-Linien relativ zur Dimension des Elements voneinander trennt.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten in [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), zwischen Flex-Elementen und Flexlinien im [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und zwischen Zeilen und Spalten im [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout).

Die erzeugten Abstände schaffen leere Bereiche, die die Breite oder Höhe der angegebenen Größe des Abstands haben, ähnlich einem leeren Element oder Track. Der sichtbare Raum zwischen Elementen kann sich von dem bereitgestellten `gap`-Wert unterscheiden, da Ränder, Abstände und verteilte Ausrichtung den Abstand zwischen Elementen über den durch `gap` bestimmten hinaus erhöhen können.

Im Grid-Layout definiert der erste Wert die Rinne zwischen den Zeilen, und der zweite definiert die Rinne zwischen den Spalten. In beiden Grid- und Flex-Layouts wird derselbe Wert für beide Dimensionen verwendet, wenn nur ein Wert enthalten ist.

Bei Flex-Containern hängt es von der Richtung ab, ob der erste Wert der Abstand zwischen Flex-Elementen oder zwischen Flexlinien ist. Flex-Elemente werden entweder in Zeilen oder Spalten angeordnet, je nach dem Wert der {{cssxref("flex-direction")}} Eigenschaft. Für Zeilen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flexlinien und der zweite Wert den Abstand zwischen Elementen innerhalb jeder Linie. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flexlinie und der zweite Wert den Abstand zwischen jeder Flexlinie.

In Mehrspalten-Containern definiert der erste Wert den Abstand zwischen den Spalten. Eine Trennlinie kann dem ansonsten "leeren Raum" hinzugefügt werden, indem die {{cssxref("column-rule-style")}} Eigenschaft oder die {{cssxref("column-rule")}} Kurzform verwendet wird.

Prozentuale `gap`-Werte werden immer relativ zur Größe des [Inhaltsbereichs](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Containerelements berechnet. Das Verhalten ist wohl definiert und konsistent über Layout-Modi hinweg, wenn die Containergröße festgelegt ist. Da diese drei Layout-Modi (Mehrspalten-, Flex- und Grid-Layout) zyklische Prozentsatzgrößen unterschiedlich behandeln, tut `gap` dies ebenfalls. Im Grid-Layout lösen sich zyklische Prozentsatzgrößen gegen Null auf, um Beiträge zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} zu bestimmen, aber sie beziehen sich auf den Inhaltsbereich des Elements beim Anordnen der Inhalte. Zwei untenstehende Beispiele zeigen prozentuale `gap`-Werte mit [expliziter Containergröße](#prozentualer_`gap`-wert_und_explizite_containergröße) und [impliziter Containergröße](#prozentualer_`gap`-wert_und_implizite_containergröße) im Abschnitt Beispiele.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites zu bewahren, akzeptieren Browser `grid-gap` weiterhin als Alias für `gap`.

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

Wenn der Container eine festgelegte Größe hat, basieren die Berechnungen des prozentualen `gap`-Werts auf der Größe des Containers. Somit ist das `gap`-Verhalten über alle Layouts hinweg konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit einem Grid-Layout und den anderen mit einem Flex-Layout. Die Container haben fünf rote 20x20px Kinder. Beide Container sind explizit auf 200px Höhe eingestellt mit `height: 200px`, und der `gap` ist mit `gap: 12.5% 0` festgelegt.

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

Untersuchen Sie nun die Grid- und Flex-Elemente mit dem [Inspector-Tab in Web Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, schweben Sie mit der Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspector. Sie werden feststellen, dass der Abstand in beiden Fällen gleich ist, nämlich 25px.

### Prozentualer `gap`-Wert und implizite Containergröße

Wenn die Größe am Container nicht explizit festgelegt ist, verhält sich der prozentuale `gap`-Wert im Grid- und Flex-Layout unterschiedlich. Im folgenden Beispiel haben die Container keine explizit festgelegte Höhe.

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

Im Fall des Grid-Layouts trägt der prozentuale `gap` nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit `0px` Abstand berechnet, so dass sich die tatsächliche Höhe auf 100px (20px x 5) beläuft. Dann wird der tatsächliche prozentuale `gap` unter Verwendung der Höhe des Inhaltsbereichs berechnet, was zu einem `gap` von `12,5px` (100px x 12,5%) führt. Der `gap` wird kurz vor dem Rendern angewendet. Damit bleibt das Grid 100px hoch, aber es überläuft aufgrund des später hinzugefügten prozentualen `gap` kurz vor dem Rendern.

Beim Flex-Layout führt der prozentuale `gap` immer zu einem Wert von null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundlegende Konzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS-Box-Ausrichtungs-](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS-Flexible-Box-Layout-](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Grid-Layout-](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Mehrspalten-Layout-](/de/docs/Web/CSS/CSS_multicol_layout) Modul
