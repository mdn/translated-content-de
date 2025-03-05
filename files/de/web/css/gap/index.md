---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Abstände (auch genannt {{Glossary("gutters", "Rinnen")}}) zwischen Zeilen und Spalten fest. Diese Eigenschaft gilt für [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout), [Flex-](/de/docs/Web/CSS/CSS_flexible_box_layout) und [Grid-](/de/docs/Web/CSS/CSS_grid_layout) Container.

{{EmbedInteractiveExample("pages/css/gap.html")}}

## Bestandteileigenschaften

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

Diese Eigenschaft wird als Wert für `<'row-gap'>` angegeben, gefolgt optional von einem Wert für `<'column-gap'>`. Wenn `<'column-gap'>` weggelassen wird, wird er auf denselben Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Gibt die Breite der Rinne zwischen Spalten, {{Glossary("flex_item", "Flex-Items")}}, Flex-Linien und {{Glossary("grid_lines", "Grid-Linien")}} an.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Gibt die Breite der Rinne zwischen Spalten, Flex-Items, Flex-Linien und Grid-Linien relativ zur Dimension des Elements an.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten im [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout), zwischen Flex-Items und Flex-Linien im [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und zwischen Zeilen und Spalten im [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout).

Die erzeugten Abstände schaffen leere Räume, die die Breite oder Höhe der angegebenen Größe des Abstands haben, ähnlich wie ein leeres Element oder eine Spur. Der sichtbare Raum zwischen den Elementen kann vom angegebenen `gap`-Wert abweichen, da Ränder, Polsterungen und verteilte Ausrichtungen den Abstand zwischen den Elementen über das hinaus erhöhen können, was durch `gap` bestimmt wird.

Im Grid-Layout definiert der erste Wert die Rinne zwischen Zeilen und der zweite die Rinne zwischen Spalten. In sowohl Grid- als auch Flex-Layouts, wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

Bei Flex-Containern hängt es davon ab, ob der erste Wert den Abstand zwischen Flex-Items oder Flex-Linien bestimmt. Die Flex-Items werden entweder in Zeilen oder Spalten gemäß dem Wert der {{cssxref("flex-direction")}} Eigenschaft angeordnet. Bei Zeilen (`row` (die Standardeinstellung) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flex-Linien, und der zweite Wert definiert den Abstand zwischen Items innerhalb jeder Zeile. Bei Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Items innerhalb einer Flex-Linie und der zweite Wert die Abstände zwischen jeder Flex-Linie.

In Mehrspalten-Containern definiert der erste Wert den Abstand zwischen den Spalten. Eine Trennlinie kann im ansonsten "leeren Raum" hinzugefügt werden, indem die {{cssxref("column-rule-style")}} Eigenschaft oder der {{cssxref("column-rule")}} Kurzform verwendet wird.

Prozentuale Abstandsgrößen werden immer im Verhältnis zur Größe der [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über die Layout-Modi hinweg, wenn die Containergröße festgelegt ist. Da diese drei Layout-Modi (mehrspaltig, flex und grid) zyklische Prozentgrößen unterschiedlich behandeln, tut dies `gap` ebenfalls. Im Grid-Layout lösen sich zyklische Prozentgrößen gegen null auf, um Beiträge zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} zu bestimmen, aber lösen sich gegen die Inhaltsbox des Elements auf, wenn der Inhalt angeordnet wird. Zwei Beispiele unten zeigen prozentuale Abstandswerte mit [expliziter Containergröße](#prozentualer_abstands-wert_und_explizite_containergröße) und [impliziter Containergröße](#prozentualer_abstands-wert_und_implizite_containergröße) im Beispielabschnitt.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites aufrechtzuerhalten, akzeptieren Browser immer noch `grid-gap` als Alias für `gap`.

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

### Prozentualer Abstands-Wert und explizite Containergröße

Wenn die Containergröße fest eingestellt ist, basieren die Berechnungen der prozentualen Abstandswerte auf der Größe des Containers. Somit ist das Verhalten von Abständen konsistent über alle Layouts. Im folgenden Beispiel gibt es zwei Container, einen mit einem Grid-Layout und den anderen mit einem Flex-Layout. Die Container haben fünf rote 20x20px Kinder. Beide Container werden explizit auf 200px Höhe mit `height: 200px` eingestellt, und der Abstand wird mit `gap: 12.5% 0` eingestellt.

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

Jetzt inspizieren Sie die Grid- und Flex-Elemente mit dem [Inspector-Tab in den Web Developer-Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, fahren Sie mit der Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspector. Sie werden feststellen, dass der Abstand in beiden Fällen derselbe ist, nämlich 25px.

### Prozentualer Abstands-Wert und implizite Containergröße

Wenn die Größe am Container nicht explizit festgelegt ist, verhält sich der prozentuale Abstand im Grid- und Flex-Layout unterschiedlich. Im folgenden Beispiel haben die Container die Höhe nicht explizit gesetzt.

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

Im Falle des Grid-Layouts trägt der prozentuale Abstand nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit `0px` Abstand berechnet, sodass die tatsächliche Höhe 100px (20px x 5) beträgt. Dann wird der tatsächliche prozentuale Abstand mit der Höhe der Inhaltsbox berechnet, der Abstand beträgt `12.5px` (100px x 12.5%). Der Abstand wird direkt vor dem Rendern angewendet. Somit bleibt das Grid 100px hoch, läuft aber aufgrund des prozentualen Abstands über, der kurz vor dem Rendern hinzugefügt wird.

Im Fall des Flex-Layouts resultiert der prozentuale Abstand immer in einem Nullwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundlagen des Grid-Layouts: Rinnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
- [CSS-Flexible-Box-Layout-Modul](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS-Grid-Layout-Modul](/de/docs/Web/CSS/CSS_grid_layout)
- [CSS-Mehrspalten-Layout-Modul](/de/docs/Web/CSS/CSS_multicol_layout)
