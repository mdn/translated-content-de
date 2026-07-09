---
title: "`gap` CSS-Eigenschaft"
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Abstände (auch {{Glossary("gutters", "gutters")}} genannt) zwischen Reihen und Spalten in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [flexiblen](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Raster-](/de/docs/Web/CSS/Guides/Grid_layout) Containern fest.

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
/* Keyword value */
gap: normal;

/* One value */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;
gap: 16%;
gap: 100%;
gap: calc(10% + 20px);

/* Two values */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;
gap: 16% 100%;
gap: 21px 82%;
gap: calc(20px + 10%) calc(10% - 5px);

/* Global values */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

### Werte

- `normal`
  - : Ein Wert von `1em` für mehrspaltige Container und `0` in allen anderen Kontexten.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe der Lücke als nicht-negativer {{CSSxRef("&lt;length&gt;")}} Wert.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe der Lücke als nicht-negativer {{CSSxRef("&lt;percentage&gt;")}} Wert relativ zur Größe der [Inhaltsbox](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements in dieser Dimension.

## Beschreibung

Die `gap`-Eigenschaft definiert Abstände zwischen Spalten und Reihen. Die Wirkung der Definition hängt davon ab, ob der Container ein Rastercontainer, ein Flexbox-Container oder ein mehrspaltiger Layoutcontainer ist.

Die Kurzschreibweise wird als Wert für `<'row-gap'>` angegeben, gefolgt optional von einem Wert für `<'column-gap'>`. Während der Standardwert für beide Untereigenschaften `normal` ist, gilt dieser Wert für beide, wenn nur ein Wert deklariert wird. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>`, `<percentage>` oder das Schlüsselwort `normal` angegeben werden.

Prozentuale Lückenwerte werden immer relativ zur Größe der [Inhaltsbox](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über alle Layoutmodi hinweg, wenn die Containergröße fest ist.

Die erzeugten Lücken schaffen leere Räume, die die Breite oder Höhe der angegebenen Lückenmaßgröße haben, ähnlich wie ein leeres Element oder eine Spur. Der sichtbare Raum zwischen den Elementen kann vom angegebenen `gap`-Wert abweichen, da Ränder, Polsterungen und verteilte Ausrichtungen die Trennung zwischen den Elementen über das hinaus erhöhen können, was durch `gap` bestimmt wird.

Lücken können sichtbare Trennlinien als Lückendekorationen enthalten. Wenn es dekorative Regeln zwischen den Spalten, Reihen oder beidem gibt, erscheinen sie in der Mitte ihrer Lücke, haben aber keinen Einfluss auf die Größe der Lücken. Diese dekorativen Linien können in den sonst "leeren Raum" durch die Verwendung der {{cssxref("rule")}} Kurzschreibweise hinzugefügt werden.

### In Raster-Layouts

Im [CSS-Raster-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert die `gap`-Eigenschaft den Raum zwischen Reihen und Spalten. Der erste Wert definiert die Lücke zwischen den Reihen und der zweite die Lücke zwischen den Spalten. Wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

Prozentwerte werden relativ zur Größe der [Inhaltsbox](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements berechnet. Zyklische Prozentgrößen gleichen null für die Bestimmung von {{Glossary("intrinsic_size", "intrinsischen Größen")}} Beiträgen aus, werden aber gegen die Inhaltsbox des Rastercontainers aufgelöst, wenn die Inhalte angeordnet werden. Zwei Beispiele unten demonstrieren prozentuale Lückenwerte mit [expliziter Containergröße](#prozentuale_lückenwerte_und_explizite_containergröße) und [impliziter Containergröße](#prozentuale_lückenwerte_und_implizite_containergröße) im Beispielabschnitt.

Der Effekt positiver `gap`-Werte ist, als ob die Rasterlinien Dicke erworben hätten: die Rasterspur zwischen zwei Rasterlinien ist der Raum zwischen den diese Linien darstellenden Lücken. Wenn ein Rasterelement mehrere Reihen oder Spalten überspannt, wird zur Spurgrößenbestimmung die Lücke als zusätzliche, leere, festgelegte Spur der angegebenen Größe behandelt, die der Dimension in der Spannenrichtung hinzugefügt wird. Zum Beispiel, wenn `gap: 10px` auf einem 3x3-Raster mit 100px mal 100px-Kästchen eingestellt ist, beträgt die Breite eines Rasterelements, das zwei vertikale Spalten überspannt, `210px`. Wenn es alle drei überspannt, hat es eine Breite von `320px`.

Der Raum zwischen Rasterreihen und -spalten kann aufgrund von zwischen Spuren hinzugefügtem Raum durch die {{cssxref("justify-content")}} und {{cssxref("align-content")}} Eigenschaften größer sein als der Wert der `gap`-Eigenschaft.

Lücken erscheinen nur zwischen Spuren des impliziten Rasters. Wenn ein Raster zwischen den Spuren fragmentiert ist, wird keine Lückentrennung zwischen diesen Spuren hinzugefügt. Es gibt keine Lücke vor der ersten Spur oder nach der letzten Spur, und wenn eine Spur zusammenbricht, hat sie keine Lücke.

Frühere Versionen der CSS-Rasterspezifikation nannten diese Eigenschaft `grid-gap`. Um die Kompatibilität mit älteren Websites zu wahren, akzeptieren Browser `grid-gap` als Alias für `gap`.

### In der Flexbox

Bei flexiblen Containern definiert die `gap`-Eigenschaft den Raum zwischen sowohl Flex-Items als auch Flex-Linien. Ob der erste Wert die Lücke zwischen Flex-Items oder zwischen Flex-Linien ist, hängt von der Richtung ab. Flex-Items werden je nach Wert der {{cssxref("flex-direction")}} Eigenschaft entweder in Reihen oder Spalten angeordnet. Bei Reihen (`row` (Standard) oder `row-reverse`) definiert der erste Wert die Lücke zwischen Flex-Linien, und der zweite Wert definiert die Lücke zwischen Items innerhalb jeder Linie. Wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

Für Spalten (`column` oder `column-reverse`) definiert der erste Wert die Lücke zwischen Flex-Items innerhalb einer Flex-Linie, und der zweite Wert definiert die Lücken zwischen jeder Flex-Linie. Auch hier gilt: Wenn nur ein Wert angegeben ist, wird dieser Wert für beide Dimensionen verwendet.

### In mehrspaltigen Layouts

Im [CSS-mehrspaltigen Layout](/de/docs/Web/CSS/Guides/Multicol_layout) definiert die Eigenschaft die Lücke zwischen Spalten und Reihen von Spalten. Der erste Wert definiert die Lücke zwischen benachbarten Spaltenboxen, während der zweite Wert die Größe der Lücke zwischen Reihen von Spaltenboxen definiert, wenn mehrere Reihen durch die {{cssxref("column-height")}} Eigenschaft eingerichtet wurden.

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

### Raster-Layout

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

### Mehrspaltiges Layout

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

### Prozentuale Lückenwerte und explizite Containergröße

Wenn der Container eine festgelegte Größe hat, werden Berechnungen von Lückenprozentwerten auf Basis der Größe des Containers vorgenommen. Folglich ist das Verhalten der Lücken in allen Layouts konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit Raster-Layout und einen anderen mit Flex-Layout. Die Container haben fünf rote Kinder mit 20x20px. Beide Container sind explizit auf 200px Höhe gesetzt mit `height: 200px` und die Lücke ist mit `gap: 12.5% 0` festgelegt.

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

Nun können Sie die Raster- und Flex-Elemente mit dem [Inspektor-Tab in den Web Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html) inspizieren. Um die tatsächlichen Lücken zu sehen, bewegen Sie die Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspektor. Sie werden bemerken, dass die Lücke in beiden Fällen gleich ist, nämlich 25px.

### Prozentuale Lückenwerte und implizite Containergröße

Wenn die Größe nicht explizit auf den Container gesetzt ist, verhält sich der prozentuale Lückenwert im Fall von Raster- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container keine explizit gesetzte Höhe.

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

Im Fall des Raster-Layouts trägt der prozentuale Lückenwert nicht zur tatsächlichen Höhe des Rasters bei. Die Höhe des Containers wird mit `0px` Lücke berechnet, so dass die tatsächliche Höhe 100px beträgt (20px x 5). Dann wird die tatsächliche prozentuale Lücke mit der Höhe der Inhaltsbox berechnet, die Lücke beträgt `12.5px` (100px x 12.5%). Die Lücke wird kurz vor dem Rendern angewendet. Somit bleibt das Raster 100px hoch, aber es überläuft aufgrund der kurz vor dem Rendern hinzugefügten prozentualen Lücke.

Im Fall des Flex-Layouts ergibt die prozentuale Lücke immer den Wert null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Raster-Layouts: Lücken](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS Mehrspaltiges Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
