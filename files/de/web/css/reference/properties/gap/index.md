---
title: "`gap` CSS-Eigenschaft"
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Abstände (auch {{Glossary("gutters", "Rinnen")}} genannt) zwischen Zeilen und Spalten in [Mehrspalten](/de/docs/Web/CSS/Guides/Multicol_layout), [flex](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [grid](/de/docs/Web/CSS/Guides/Grid_layout) Containern fest.

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
  - : Ein Wert von `1em` in Mehrspalten-Containern und `0` in allen anderen Kontexten.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe der Lücke als nicht-negativer {{CSSxRef("&lt;length&gt;")}} Wert.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe der Lücke als nicht-negativer {{CSSxRef("&lt;percentage&gt;")}} Wert relativ zur Größe der [Inhaltsbox](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements in dieser Dimension.

## Beschreibung

Die `gap`-Eigenschaft definiert Lücken zwischen Spalten und Zeilen, wobei die Wirkung der Definition davon abhängt, ob der Container ein Grid-, Flexbox- oder Mehrspalten-Layout-Container ist.

Die Kurzschreibweise wird als Wert für `<'row-gap'>` angegeben, gefolgt von einem optionalen Wert für `<'column-gap'>`. Während der Standardwert für beide Untereigenschaften `normal` ist, gilt dieser Wert, wenn nur ein Wert angegeben wird, für beide. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>`, `<percentage>` oder als Schlüsselwort `normal` angegeben werden.

Prozentuale Lückenwerte werden immer basierend auf der Größe der [Inhaltsbox](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über Layoutmodi hinweg, wenn die Containergröße definiert ist.

Die erzeugten Lücken schaffen leere Räume, die die Breite oder Höhe der angegebenen Lückengröße haben, ähnlich wie ein leerer Gegenstand oder eine Spur. Der sichtbare Raum zwischen den Elementen kann sich von dem bereitgestellten `gap`-Wert unterscheiden, da Margen, Auffüllungen und verteilte Ausrichtungen die Trennung zwischen Elementen über das von `gap` Bestimmte hinaus erhöhen können.

Lücken können sichtbare Trennlinien als Lückendekorationen enthalten. Wenn es dekorative Regeln zwischen den Spalten, Zeilen oder beiden gibt, erscheinen sie in der Mitte ihrer Lücke, beeinflussen aber nicht die Größe der Lücken. Diese dekorativen Linien können dem ansonsten "leeren Raum" mit der {{cssxref("rule")}}-Kurzschreibweise hinzugefügt werden.

### In Grid-Layouts

Im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert die `gap`-Eigenschaft den Raum zwischen Zeilen und Spalten. Der erste Wert definiert die Rinne zwischen den Zeilen und der zweite die Rinne zwischen den Spalten. Wenn nur ein Wert inkludiert ist, wird dieser Wert für beide Dimensionen verwendet.

Prozentwerte werden auf Grundlage der Größe der [Inhaltsbox](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements berechnet. Zyklische Prozentgrößen werden bezüglich Null für die Bestimmung der {{Glossary("intrinsic_size", "intrinsischen Größe")}} Beiträge aufgelöst, aber bezüglich der Inhaltsbox des Grids beim Layout der Inhalte aufgelöst. Zwei Beispiele unten zeigen prozentuale Lückenwerte mit [expliziter Containergröße](#prozentuale_lückenwerte_und_explizite_containergröße) und [impliziter Containergröße](#prozentuale_lückenwerte_und_implizite_containergröße) im Abschnitt Beispiele.

Die Wirkung positiver `gap`-Werte ist, als ob die Gitterlinien Dicke erhielten: die Gitterspur zwischen zwei Gitterlinien ist der Raum zwischen den Rinnen, die sie darstellen. Wenn ein Gitterelement mehrere Zeilen oder Spalten überspannt, wird für die Spurgrößenbestimmung die Rinne als zusätzliche, leere, festgroße Spur der angegebenen Größe behandelt, die in Richtung der Überbrückung hinzugefügt wird. Zum Beispiel, wenn `gap: 10px` auf einem 3x3 Raster von 100px mal 100px Kästchen gesetzt ist, wenn ein Gitterelement zwei vertikale Spalten überspannt, hätte es eine Breite von `210px`. Wenn es alle drei überspannt, hat es eine Breite von `320px`.

Der Raum zwischen Gitterzeilen und -spalten kann aufgrund von Raum, der zwischen Spuren durch die {{cssxref("justify-content")}} und {{cssxref("align-content")}} Eigenschaften hinzugefügt wurde, größer sein als der Wert der `gap`-Eigenschaft.

Rinnen erscheinen nur zwischen Spuren des impliziten Grids. Wenn ein Grid zwischen Spuren fragmentiert ist, wird kein Rinnenraum zwischen diesen Spuren hinzugefügt. Es gibt keine Rinne vor der ersten Spur oder nach der letzten Spur, und wenn eine Spur eingeklappt ist, wird sie keine Rinne haben.

Frühere Versionen der CSS-Grid-Spezifikation nannten diese Eigenschaft `grid-gap`. Um die Kompatibilität mit älteren Websites zu gewährleisten, akzeptieren Browser `grid-gap` als Alias für `gap`.

### In Flexbox

Bei Flex-Containern definiert die `gap`-Eigenschaft den Raum zwischen sowohl Flex-Elementen als auch Flex-Zeilen. Ob der erste Wert die Lücke zwischen Flex-Elementen oder zwischen Flex-Zeilen ist, hängt von der Richtung ab. Flex-Elemente werden entweder in Zeilen oder Spalten basierend auf dem Wert der {{cssxref("flex-direction")}}-Eigenschaft ausgelegt. Für Zeilen (`row` (Standard) oder `row-reverse`) definiert der erste Wert die Lücke zwischen Flex-Zeilen und der zweite den Abstand zwischen Elementen innerhalb jeder Zeile. Wenn nur ein Wert angegeben ist, gilt dieser Wert für beide Dimensionen.

Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Zeile und der zweite die Lücken zwischen jeder Flex-Zeile. Auch hier gilt, wenn nur ein Wert angegeben ist, gilt dieser für beide Dimensionen.

### In Mehrspalten-Layouts

Im [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) definiert die Eigenschaft die Rinne zwischen Spalten und Zeilen von Spalten. Der erste Wert definiert den Abstand zwischen angrenzenden Spaltenboxen, während der zweite Wert die Größe der Rinne zwischen Zeilen von Spaltenboxen definiert, falls mehrere Zeilen durch die {{cssxref("column-height")}}-Eigenschaft festgelegt wurden.

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

### Prozentuale Lückenwerte und explizite Containergröße

Wenn die Containergröße festgelegt ist, basieren die Berechnungen der prozentualen Lückenwerte auf der Größe des Containers. Somit ist das Verhalten von Lücken in allen Layouts konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit einem Grid-Layout und den anderen mit einem Flex-Layout. Die Container haben jeweils fünf rote 20x20px Kinder. Beide Container sind explizit auf 200px Höhe mit `height: 200px` gesetzt und die Lücke ist mit `gap: 12.5% 0` festgelegt.

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

Inspectieren Sie nun die Grid- und Flex-Elemente mithilfe des [Inspectoren-Tabs in den Web-Entwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Lücken zu sehen, bewegen Sie die Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspektor. Sie werden bemerken, dass die Lücke in beiden Fällen gleich ist, nämlich 25px.

### Prozentuale Lückenwerte und implizite Containergröße

Wenn keine Größe explizit auf dem Container festgelegt ist, verhält sich der prozentuale Lückenwert bei Rastern und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container keine explizit gesetzte Höhe.

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

Im Fall des Grid-Layouts trägt der prozentuale Lückenwert nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit `0px` Lücke berechnet, sodass die tatsächliche Höhe 100px beträgt (20px x 5). Dann wird die tatsächliche prozentuale Lücke basierend auf der Höhe der Inhaltsbox berechnet, die Lücke beträgt `12.5px` (100px x 12.5%). Die Lücke wird direkt vor dem Rendern angewendet. So bleibt das Grid 100px hoch, überläuft jedoch aufgrund der später beim Rendern hinzugefügten prozentualen Lücke.

Im Fall des Flex-Layouts führt die prozentuale Lücke immer zu einem Wert von Null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS-Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
