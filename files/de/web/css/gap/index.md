---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt die Abstände (auch {{Glossary("gutters", "gutters")}} genannt) zwischen Zeilen und Spalten. Diese Eigenschaft gilt für [Mehrspalten](/de/docs/Web/CSS/CSS_multicol_layout)-, [Flex](/de/docs/Web/CSS/CSS_flexible_box_layout)- und [Grid](/de/docs/Web/CSS/CSS_grid_layout)-Container.

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

Diese Eigenschaft wird als ein Wert für `<'row-gap'>` angegeben, gefolgt optional von einem Wert für `<'column-gap'>`. Wenn `<'column-gap'>` weggelassen wird, wird er auf denselben Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, {{Glossary("flex_item", "Flex-Items")}}, Flexlinien und {{Glossary("grid_lines", "Gitterlinien")}} voneinander trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, Flex-Items, Flexlinien und Gitterlinien relativ zur Dimension des Elements voneinander trennt.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten im [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), zwischen Flex-Items und Flexlinien im [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout), und zwischen Zeilen und Spalten im [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout).

Die entstehenden Lücken erzeugen leere Räume, die die Breite oder Höhe der angegebenen Größe der Lücke haben, ähnlich wie ein leeres Element oder eine Spur. Der sichtbare Platz zwischen Elementen kann sich vom angegebenen `gap`-Wert unterscheiden, da Abstände, Rand und verteilte Ausrichtung die Trennung zwischen Elementen über den durch `gap` bestimmten Wert hinaus erhöhen können.

Im Grid-Layout definiert der erste Wert die Rinne zwischen den Zeilen und der zweite die Rinne zwischen den Spalten. In den Grid- und Flex-Layouts, wenn nur ein Wert angegeben ist, wird dieser Wert für beide Dimensionen verwendet.

Bei Flex-Containern hängt es davon ab, ob der erste Wert die Lücke zwischen Flex-Items oder zwischen Flexlinien ist, von der Richtung ab. Flex-Items werden entweder in Reihen oder Spalten ausgelegt, abhängig vom Wert der {{cssxref("flex-direction")}}-Eigenschaft. Für Reihen (`row` (standardmäßig) oder `row-reverse`) definiert der erste Wert die Lücke zwischen Flexlinien, und der zweite Wert die Lücke zwischen den Items innerhalb jeder Linie. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert die Lücke zwischen Flex-Items innerhalb einer Flexlinie, und der zweite Wert die Lücken zwischen jeder Flexlinie.

In Mehrspalten-Containern definiert der erste Wert die Lücke zwischen Spalten. Eine Trennlinie kann dem ansonsten "leeren Raum" mit der Eigenschaft {{cssxref("column-rule-style")}} oder der Kurzform {{cssxref("column-rule")}} hinzugefügt werden.

Prozentuale Lückenwerte werden immer im Verhältnis zur Größe des [Inhaltskasten](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Container-Elements berechnet. Das Verhalten ist wohl definiert und konsistent über die Layout-Modi hinweg, wenn die Containergröße festgelegt ist. Da diese drei Layout-Modi (Mehrspalten, Flex und Grid) zyklische Prozentgrößen unterschiedlich behandeln, tut `gap` dies ebenfalls. Im Grid-Layout lösen sich zyklische Prozentgrößen gegen null auf, um {{Glossary("intrinsic_size", "intrinsische Größen")}} Beiträge zu bestimmen, lösen sich jedoch gegen den Inhaltskasten des Elements auf, wenn der Inhalt angeordnet wird. Zwei Beispiele unten zeigen prozentuale Lückenwerte mit [explizierter Containergröße](#prozentwert_der_lücke_und_explizite_containergröße) und [implizierter Containergröße](#prozentwert_der_lücke_und_implizite_containergröße) im Beispiele-Abschnitt.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites zu erhalten, akzeptieren Browser noch `grid-gap` als Alias für `gap`.

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

### Prozentwert der Lücke und explizite Containergröße

Wenn der Container eine festgelegte Größe hat, dann basieren die Berechnungen des prozentualen Lückenwerts auf der Größe des Containers. Somit ist das Lückenverhalten über alle Layouts hinweg konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit einem Grid-Layout und den anderen mit einem Flex-Layout. Die Container haben fünf rote 20x20px Kinder. Beide Container werden explizit auf 200px Höhe mittels `height: 200px` gesetzt und die Lücke wird mit `gap: 12.5% 0` festgelegt.

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

Untersuchen Sie nun die Grid- und Flex-Elemente mit der [Inspektor-Registerkarte in den Web-Entwickler-Werkzeugen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Lücken zu sehen, bewegen Sie die Maus über die Tags `<div id="grid">` und `<div id="flex">` im Inspektor. Sie werden feststellen, dass die Lücke in beiden Fällen gleich ist, nämlich 25px.

### Prozentwert der Lücke und implizite Containergröße

Wenn die Größe nicht explizit am Container gesetzt ist, verhält sich die prozentuale Lücke im Falle der Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container nicht explizit gesetzte Höhen.

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

Im Fall des Grid-Layouts trägt die prozentuale Lücke nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mithilfe `0px` Lücke berechnet, sodass sich die tatsächliche Höhe als 100px (20px x 5) herausstellt. Dann wird die tatsächliche prozentuale Lücke basierend auf der Höhe des Inhaltskastens berechnet, und die Lücke stellt sich als `12.5px` (100px x 12.5%) heraus. Die Lücke wird direkt vor dem Rendern angewendet. Somit bleibt das Grid 100px hoch, läuft jedoch wegen der später vor dem Rendern hinzugefügten prozentualen Lücke über.

Im Fall des Flex-Layouts ergibt die prozentuale Lücke immer den Wert null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundlegende Konzepte des Gitterlayouts: Rinnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)-Modul
