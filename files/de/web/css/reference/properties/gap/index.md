---
title: "`gap` CSS-Eigenschaft"
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 53745a2089268ce62bf79695d7d347bcbd0abe57
---

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Abstände (auch als {{Glossary("gutters", "Rinnen")}} bezeichnet) zwischen Reihen und Spalten in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Raster-](/de/docs/Web/CSS/Guides/Grid_layout) Containern fest.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - Ein Wert von `1em` in Mehrspalten-Containern und `0` in allen anderen Kontexten.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe des Abstands als nicht-negativer {{CSSxRef("&lt;length&gt;")}}-Wert.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als nicht-negativer {{CSSxRef("&lt;percentage&gt;")}}-Wert relativ zur Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements in dieser Dimension.

## Beschreibung

Die `gap`-Eigenschaft definiert Abstände zwischen Spalten und Reihen, wobei die Wirkung der Definition davon abhängt, ob der Container ein Raster-, Flexbox- oder ein Mehrspaltenlayout-Container ist.

Die Kurzform wird als ein Wert für `<'row-gap'>` angegeben, gefolgt optional von einem Wert für `<'column-gap'>`. Während der Standardwert `normal` für beide Untereigenschaften ist, wird, wenn nur ein Wert deklariert wird, dieser Wert für beide angewendet. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>`, `<percentage>` oder das Schlüsselwort `normal` angegeben werden.

Prozentwertlücken werden immer relativ zur Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über Layoutmodi hinweg, wenn die Containergröße bestimmt ist.

Die erzeugten Abstände schaffen leere Räume, die die Breite oder Höhe der angegebenen Größe der Lücke haben, ähnlich wie ein leeres Element oder ein Track. Der sichtbare Raum zwischen Elementen kann sich von dem angegebenen `gap`-Wert unterscheiden, da Ränder, Polsterungen und verteilte Ausrichtung die Trennung zwischen Elementen über das hinaus erhöhen können, was durch `gap` bestimmt wird.

Abstände können sichtbare Trennlinien als Lückendekorationen enthalten. Wenn es dekorative Regeln zwischen den Spalten, Reihen oder beidem gibt, erscheinen sie in der Mitte ihrer Lücke, haben jedoch keinen Einfluss auf die Größe der Lücken. Diese dekorativen Linien können in den ansonsten "leeren Raum" mittels der {{cssxref("rule")}}-Kurzschreibweise hinzugefügt werden.

### In Rasterlayouts

Im [CSS-Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout) definiert die `gap`-Eigenschaft den Raum zwischen Reihen und Spalten. Der erste Wert definiert die Rinne zwischen den Reihen, und der zweite die Rinne zwischen den Spalten. Wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

Prozentwerte werden relativ zur Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements berechnet. Zyklische Prozentgrößen lösen sich mit null für die Bestimmung von {{Glossary("intrinsic_size", "intrinsischen Größen")}} Beiträgen auf, werden jedoch gegen die Inhaltsbox des Rastercontainers aufgelöst, wenn sie den Inhalt anordnen. Zwei Beispiele unten demonstrieren Prozentlückenwerte mit [expliziter Containergröße](#prozentlückenwert_und_explizite_containergröße) und [impliziter Containergröße](#prozentlückenwert_und_implizite_containergröße) im Beispielabschnitt.

Die Wirkung positiver `gap`-Werte ist, als ob die Rasterlinien an Dicke zunehmen: Der Raster-Track zwischen zwei Rasterlinien ist der Raum zwischen den Rinnen, die sie darstellen. Wenn ein Rasterelement mehrere Reihen oder Spalten überspannt, wird die Rinne für die Zweck der Track-Größenbestimmung als extra, leerer, festgroßer Track der angegebenen Größe behandelt, der der Dimension in der Spannrichtung hinzugefügt wird. Wenn zum Beispiel `gap: 10px` auf einem 3x3-Raster mit 100px mal 100px Boxen gesetzt ist, hat ein Rasterelement, das zwei vertikale Spalten überspannt, eine Breite von `210px`. Wenn es alle drei überspannt, hat es eine Breite von `320px`.

Der Raum zwischen Rasterreihen und -spalten kann größer sein als der Wert der `gap`-Eigenschaft aufgrund von Raum, der durch die Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} zwischen Tracks hinzugefügt wird.

Rinnen erscheinen nur zwischen Tracks des impliziten Rasters. Wenn ein Raster zwischen Tracks fragmentiert ist, wird zwischen diesen Tracks kein Rinnenabstand hinzugefügt. Es gibt keine Rinne vor dem ersten oder nach dem letzten Track, und wenn ein Track zusammenbricht, hat er keine Rinne.

Frühere Versionen der CSS-Rasterspezifikation nannten diese Eigenschaft `grid-gap`. Um die Kompatibilität mit älteren Websites zu gewährleisten, akzeptieren Browser `grid-gap` als Alias für `gap`.

### In Flexbox

Bei Flex-Containern definiert die `gap`-Eigenschaft den Raum sowohl zwischen Flex-Elementen als auch Flex-Linien. Ob der erste Wert der Abstand zwischen Flex-Elementen oder zwischen Flex-Linien ist, hängt von der Richtung ab. Flex-Elemente werden entweder in Reihen oder Spalten je nach Wert der {{cssxref("flex-direction")}}-Eigenschaft angeordnet. Für Reihen (`row` (die Standardeinstellung) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flex-Linien, und der zweite Wert definiert den Abstand zwischen Elementen innerhalb jeder Linie. Wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Linie, und der zweite Wert definiert die Abstände zwischen jeder Flex-Linie. Auch hier gilt: Wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

### In Mehrspaltenlayouts

Im [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) definiert die Eigenschaft die Rinne zwischen Spalten und Spaltenreihen. Der erste Wert definiert den Abstand zwischen benachbarten Spaltenboxen, während der zweite Wert die Größe der Rinne zwischen Reihen von Spaltenboxen definiert, wenn mehrere Reihen durch die {{cssxref("column-height")}}-Eigenschaft festgelegt wurden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex Layout

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

### Prozentlückenwert und explizite Containergröße

Wenn der Container eine festgelegte Größe hat, werden die Berechnungen der Prozentlückenwerte basierend auf der Größe des Containers durchgeführt. Somit ist das Verhalten der Lücke über alle Layouts hinweg konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit einem Rasterlayout und den anderen mit einem Flexlayout. Die Container haben fünf rote 20x20px Kinder. Beide Container sind explizit auf 200px Höhe mit `height: 200px` gesetzt und die Lücke wird mit `gap: 12.5% 0` gesetzt.

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

Nun inspizieren Sie die Raster- und Flex-Elemente mit dem [Inspektor-Tab in den Entwicklerwerkzeugen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Lücken zu sehen, bewegen Sie die Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspektor. Sie werden feststellen, dass die Lücke in beiden Fällen gleich ist, nämlich 25px.

### Prozentlückenwert und implizite Containergröße

Wenn die Größe nicht explizit auf den Container gesetzt ist, verhält sich die Prozentlücke anders im Fall von Raster- und Flex-Layouts. Im folgenden Beispiel haben die Container die Höhe nicht explizit gesetzt.

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

Im Fall des Rasterlayouts trägt die Prozentlücke nicht zur tatsächlichen Höhe des Rasters bei. Die Höhe des Containers wird mit einem `0px` Lücke berechnet, daher beträgt die tatsächliche Höhe 100px (20px x 5). Dann wird die tatsächliche Prozentlücke unter Verwendung der Höhe des Inhaltsbereichs berechnet, die Lücke ergibt sich als `12.5px` (100px x 12.5%). Die Lücke wird unmittelbar vor dem Rendering angewendet. Daher bleibt das Raster 100px hoch, aber es überläuft aufgrund der prozentualen Lücke, die später direkt vor dem Rendering hinzugefügt wird.

Im Fall des Flexlayouts führt die Prozentlücke immer zu einem Nullwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Rasterlayouts: Rinnen](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS-Kasten Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS-Flexibles Kastenlayout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
