---
title: "`gap` CSS-Eigenschaft"
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) setzt die Abstände (auch {{Glossary("gutters", "Rinnen")}} genannt) zwischen Zeilen und Spalten. Diese Eigenschaft gilt für [Mehrspalten](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Container.

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

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Diese Eigenschaft wird als ein Wert für `<'row-gap'>` angegeben, gefolgt von einem optionalen Wert für `<'column-gap'>`. Wenn `<'column-gap'>` weggelassen wird, wird es auf denselben Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, {{Glossary("flex_item", "Flex-Elemente")}}, Flex-Linien und {{Glossary("grid_lines", "Grid-Linien")}} trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, Flex-Elemente, Flex-Linien und Grid-Linien relativ zur Dimension des Elements trennt.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten im [CSS Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout), zwischen Flex-Elementen und Flex-Linien im [CSS Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) und zwischen Zeilen und Spalten im [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout).

Die erzeugten Abstände schaffen Leerstellen, die die Breite oder Höhe der angegebenen Größe des Abstands haben, ähnlich wie ein leeres Element oder eine Spur. Der sichtbare Raum zwischen Elementen kann sich von dem angegebenen `gap`-Wert unterscheiden, da Ränder, Abstände und verteilte Ausrichtung den Abstand zwischen Elementen über das hinaus erhöhen können, was durch `gap` bestimmt wird.

Im Grid-Layout definiert der erste Wert die Rinne zwischen Zeilen und der zweite die Rinne zwischen Spalten. In sowohl Grid- als auch Flex-Layouts wird, wenn nur ein Wert angegeben ist, dieser Wert für beide Dimensionen verwendet.

In Flex-Containern hängt davon ab, ob der erste Wert der Abstand zwischen Flex-Elementen oder Flex-Linien ist, in welche Richtung. Flex-Elemente werden je nach Wert der {{cssxref("flex-direction")}}-Eigenschaft in Zeilen oder Spalten angeordnet. Für Zeilen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flex-Linien und der zweite Wert den Abstand zwischen Elementen innerhalb jeder Linie. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Linie und der zweite Wert den Abstand zwischen jeder Flex-Linie.

In Mehrspalten-Containern definiert der erste Wert den Abstand zwischen Spalten. Eine Trennlinie kann zum sonst "leeren Raum" hinzugefügt werden, indem die {{cssxref("column-rule-style")}}-Eigenschaft oder die {{cssxref("column-rule")}}-Kurzschreibweise verwendet wird.

Prozentuale Abstandsangaben werden immer gegen die Größe des [Inhaltsbereichs](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über Layout-Modi hinweg, wenn die Containergröße bestimmt ist. Da diese drei Layout-Modi (Mehrspalte, Flex und Grid) zyklische Prozentsatzgrößen unterschiedlich behandeln, tut `gap` dies ebenfalls. Im Grid-Layout lösen sich zyklische Prozentsatzgrößen bei der Bestimmung von {{Glossary("intrinsic_size", "intrinsischer Größe")}} gegen null auf, aber lösen sich gegen die Content-Box des Elements auf, wenn der Inhalt angeordnet wird. Zwei Beispiele unten demonstrieren Prozentwert-Lücken mit [expliziter Containergröße](#prozentwert-lücke_und_explizite_containergröße) und [impliziter Containergröße](#prozentwert-lücke_und_implizite_containergröße) im Beispielbereich.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites aufrechtzuerhalten, akzeptieren Browser weiterhin `grid-gap` als Alias für `gap`.

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

### Prozentwert-Lücke und explizite Containergröße

Wenn der Container eine feste Größe hat, berechnen sich die Prozentwerte der Lücken basierend auf der Größe des Containers. Somit ist das Lückenverhalten über alle Layouts hinweg konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit einem Grid-Layout und den anderen mit einem Flex-Layout. Die Container haben fünf rote 20x20px Kinder. Beide Container sind explizit auf 200px Höhe mit `height: 200px` gesetzt und die Lücke ist mit `gap: 12.5% 0` eingestellt.

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

Nun inspizieren Sie die Grid- und Flex-Elemente mit dem [Inspector-Tab in den Web Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Lücken zu sehen, bewegen Sie die Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspektor. Sie werden feststellen, dass die Lücke in beiden Fällen gleich ist, nämlich 25px.

### Prozentwert-Lücke und implizite Containergröße

Wenn die Größe nicht explizit am Container gesetzt ist, verhält sich die prozentuale Lücke unterschiedlich im Fall von Grid- und Flex-Layouts. Im folgenden Beispiel haben die Container keine Höhe explizit gesetzt.

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

Im Fall des Grid-Layouts trägt der Prozentwert der Lücke nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mithilfe eines `0px`-Abstands berechnet, sodass sich die tatsächliche Höhe auf 100px (20px x 5) beläuft. Dann wird der tatsächliche Prozentwert-Lücke mithilfe der Höhe der Content-Box berechnet, die Lücke ergibt sich als `12.5px` (100px x 12.5%). Die Lücke wird kurz vor dem Rendern angewendet. Somit bleibt das Grid 100px hoch, aber es kommt zu Überläufen aufgrund der prozentualen Lücke, die später kurz vor dem Rendern hinzugefügt wird.

Im Fall des Flex-Layouts führt die prozentuale Lücke immer zu einem Wert von Null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Grid-Layouts: Rinne](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
