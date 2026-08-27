---
title: "`gap` CSS-Eigenschaft"
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: ba3c8980510073ee92674aa71cb2c8c5b71294ab
---

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Abstände (auch {{Glossary("gutters", "Rinnen")}} genannt) zwischen Reihen und Spalten in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Gitter-](/de/docs/Web/CSS/Guides/Grid_layout) Containern fest.

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

## Bestandseigenschaften

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
  - : Ein Wert von `1em` bei Mehrspalten-Containern und `0` in allen anderen Kontexten.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe des Abstands als nicht-negativer {{CSSxRef("&lt;length&gt;")}} Wert.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als nicht-negativer {{CSSxRef("&lt;percentage&gt;")}} Wert relativ zur Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements in dieser Dimension.

## Beschreibung

Die `gap`-Eigenschaft definiert Abstände zwischen Spalten und Reihen, wobei die Wirkung der Definition davon abhängt, ob der Container ein Gittercontainer, ein Flexbox-Container oder ein Mehrspalten-Layout-Container ist.

Die Kurzform-Eigenschaft wird als ein Wert für `<'row-gap'>` angegeben, gefolgt optional von einem Wert für `<'column-gap'>`. Während der Standardwert für beide Untereigenschaften `normal` ist, gilt, wenn nur ein Wert deklariert ist, dieser Wert für beide. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>`, ein `<percentage>` oder das Schlüsselwort `normal` angegeben werden.

Prozentuale Abstandsgrößen werden immer relativ zur Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über Layout-Modi hinweg, wenn die Containergröße endgültig ist.

Die erzeugten Abstände schaffen leere Flächen, die die Breite oder Höhe der angegebenen Größe des Abstands haben, ähnlich einem leeren Element oder Spur. Der sichtbare Raum zwischen den Elementen kann wegen Rand, Auffüllung und verteilter Ausrichtung größer sein als der durch `gap` bestimmte Abstand.

Abstände können sichtbare Trennzeichen als Abstandsdekorationen enthalten. Wenn es dekorative Regeln zwischen den Spalten, Reihen oder beidem gibt, erscheinen diese in der Mitte ihres Abstands, haben aber keinen Einfluss auf die Größe der Abstände. Diese dekorativen Linien können dem sonst "leeren Raum" mithilfe der {{cssxref("rule")}} Kurzschreibweise hinzugefügt werden.

### In Gitterlayouts

Im [CSS-Gitterlayout](/de/docs/Web/CSS/Guides/Grid_layout) definiert die `gap`-Eigenschaft den Raum zwischen Reihen und Spalten. Der erste Wert definiert die Rinne zwischen Reihen, und der zweite definiert die Rinne zwischen Spalten. Wenn nur ein Wert angegeben ist, wird dieser für beide Dimensionen verwendet.

Prozentwerte werden relativ zur Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements berechnet. Zyklische Prozentgrößen werden für die Bestimmung von {{Glossary("intrinsic_size", "intrinsischer Größe")}} Beiträgen gegen null aufgelöst, aber bei der Anordnung des Inhalts gegen den Inhaltsbereich des Gittercontainers aufgelöst. Zwei Beispiele unten demonstrieren Prozentsatz-Abstandsgrößen mit [expliziter Containergröße](#prozentsatz-abstandsgröße_und_explizite_containergröße) und [impliziter Containergröße](#prozentsatz-abstandsgröße_und_implizite_containergröße) in den Beispielabschnitten.

Der Effekt positiver `gap`-Werte ist, als hätten die Gitterlinien eine Dicke erlangt: Die Gitterspur zwischen zwei Gitterlinien ist der Raum zwischen den Rinnen, die sie repräsentieren. Wenn ein Gitternetz mehrere Reihen oder Spalten überspannt, wird die Rinne für die Bestimmung der Spurgröße als zusätzliche, leere, festgelegte Spur der angegebenen Größe behandelt, die in der Spannrichtung zur Dimension hinzugefügt wird. Beispielsweise hat ein Netzteil innerhalb eines 3x3-Gitters von 100x100px-Kästen bei gesetztem `gap: 10px`, wenn es zwei vertikale Spalten überspannt, eine Breite von `210px`. Wenn es alle drei überspannt, hat es eine Breite von `320px`.

Der Raum zwischen Gitterreihen und -spalten kann aufgrund von Raum, der zwischen Spuren durch die {{cssxref("justify-content")}} und {{cssxref("align-content")}} Eigenschaften hinzugefügt wurde, größer sein als der Wert der `gap`-Eigenschaft.

Rinnen erscheinen nur zwischen Spuren des impliziten Gitters. Wenn ein Gitter zwischen Spuren fragmentiert ist, wird kein Rinnenabstand zwischen diesen Spuren hinzugefügt. Es gibt keine Rinne vor der ersten Spur oder nach der letzten Spur, und wenn eine Spur zusammenbricht, gibt es keine Rinne.

Frühere Versionen der CSS-Gitter-Spezifikation nannten diese Eigenschaft `grid-gap`. Um die Kompatibilität mit älteren Websites zu gewährleisten, akzeptieren Browser `grid-gap` als Alias für `gap`.

### In Flexbox

Bei Flex-Containern definiert die `gap`-Eigenschaft den Raum sowohl zwischen den Flex-Elementen als auch zwischen den Flex-Linien. Ob der erste Wert der Abstand zwischen Flex-Elementen oder zwischen Flex-Linien ist, hängt von der Richtung ab. Flex-Elemente werden entweder in Reihen oder Spalten anhand des Wertes der {{cssxref("flex-direction")}} Eigenschaft angeordnet. Für Reihen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flexlinien, und der zweite Wert definiert den Abstand zwischen den Elementen innerhalb jeder Linie. Ist nur ein Wert angegeben, wird dieser für beide Dimensionen verwendet.

Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen den Flex-Elementen innerhalb einer Flexlinie, und der zweite Wert die Abstände zwischen jeder Flexlinie. Wiederum, wenn nur ein Wert angegeben ist, wird dieser für beide Dimensionen verwendet.

### In Mehrspaltenlayouts

Im [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) definiert die Eigenschaft die Rinne zwischen Spalten und Reihen von Spalten. Der erste Wert definiert den Abstand zwischen angrenzenden Spaltenkästen, während der zweite Wert die Größe der Rinne zwischen Reihen von Spaltenkästen definiert, wenn mehrere Reihen durch die {{cssxref("column-height")}} Eigenschaft erstellt wurden.

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

### Gitterlayout

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

### Prozentsatz-Abstandsgröße und explizite Containergröße

Wenn der Container eine feste Größe hat, basieren die Berechnungen der Prozentsatz-Abstandsgröße auf der Größe des Containers. Dadurch bleibt das Abstandsverhalten über alle Layouts hinweg konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit einem Gitterlayout und den anderen mit einem Flex-Layout. Die Container haben fünf rote 20x20px-Kinder. Beide Container sind explizit auf eine Höhe von 200px eingestellt, indem `height: 200px` verwendet wird, und die Lücke wird mit `gap: 12.5% 0` festgelegt.

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

Nun untersuchen Sie die Gitter- und Flex-Elemente mit dem [Inspektor-Tab in den Web-Entwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die realen Lücken zu sehen, fahren Sie mit der Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspektor. Sie werden feststellen, dass der Abstand in beiden Fällen derselbe ist, nämlich 25px.

### Prozentsatz-Abstandsgröße und implizite Containergröße

Wenn die Größe nicht explizit auf den Container eingestellt ist, verhält sich die prozentuale Lücke in Fällen von Gitter- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container keine explizit eingestellte Höhe.

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

Im Fall des Gitter-Layouts trägt der Prozentsatz-Abstand nicht zur tatsächlichen Höhe des Gitters bei. Die Höhe des Containers wird unter Verwendung eines `0px` Abstandes berechnet, sodass sich die tatsächliche Höhe als 100px (20px x 5) herausstellt. Dann wird der tatsächliche Prozentsatzabstand unter Verwendung der Höhe des Inhaltsbereichs berechnet, der Abstand stellt sich als `12.5px` (100px x 12.5%) heraus. Der Abstand wird direkt vor der Darstellung angewendet. Dadurch bleibt das Gitter 100px hoch, überläuft jedoch aufgrund der vor der Darstellung hinzugefügten prozentualen Lücke.

Im Fall des Flex-Layouts ergibt der prozentuale Abstand immer einen Nullwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Gitterlayouts: Rinnen](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS-Kasten-Ausgleichsmodul](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS-Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Gitterlayout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
