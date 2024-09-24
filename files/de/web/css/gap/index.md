---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: b53905243e8de08c6295e72b6f93441fe6670e83
---

{{CSSRef}}

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt die Abstände (auch {{glossary("gutters")}} genannt) zwischen Reihen und Spalten fest. Diese Eigenschaft gilt für [mehrspaltige](/de/docs/Web/CSS/CSS_multicol_layout), [flexible](/de/docs/Web/CSS/CSS_flexible_box_layout) und [Raster-](/de/docs/Web/CSS/CSS_grid_layout) Container.

{{EmbedInteractiveExample("pages/css/gap.html")}}

## Zusammensetzende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("column-gap")}}
- {{cssxref("row-gap")}}

## Syntax

```css
/* Ein <length>-Wert */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* Ein <percentage>-Wert */
gap: 16%;
gap: 100%;

/* Zwei <length>-Werte */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* Ein oder zwei <percentage>-Werte */
gap: 16% 100%;
gap: 21px 82%;

/* calc()-Werte */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Globale Werte */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

### Werte

Diese Eigenschaft wird als ein Wert für `<'row-gap'>`, gefolgt optional von einem Wert für `<'column-gap'>`, angegeben. Wenn `<'column-gap'>` weggelassen wird, wird er auf denselben Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Bestimmt die Breite des Gesehens zur Trennung von Spalten, {{glossary("flex item","flex items")}}, flex Zeilen und {{glossary("grid lines")}}.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Bestimmt die Breite des Gesehens zur Trennung von Spalten, flex items, flex Zeilen und grid lines relativ zur Dimension des Elements.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten im [CSS Multispalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), zwischen flex items und flex Zeilen im [CSS Flexiblen Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und zwischen Reihen und Spalten im [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout).

Die erzeugten Abstände schaffen leere Räume, die die Breite oder Höhe der angegebenen Größe des Abstands haben, ähnlich wie ein leeres Element oder eine Spur. Der sichtbare Raum zwischen Elementen kann von dem angegebenen `gap`-Wert abweichen, da Abstände, Polsterungen und verteilte Ausrichtungen den Abstand zwischen Elementen über das hinaus erhöhen können, was durch `gap` bestimmt wird.

Im Raster-Layout definiert der erste Wert den Abstand zwischen Reihen und der zweite den Abstand zwischen Spalten. In beiden Raster- und Flex-Layouts wird, wenn nur ein Wert enthalten ist, dieser für beide Dimensionen verwendet.

Bei flexiblen Containern hängt es davon ab, ob der erste Wert der Abstand zwischen flex items oder zwischen flex Zeilen ist, von der Richtung ab. Flex items sind entweder in Reihen oder Spalten angeordnet, je nach Wert der {{cssxref("flex-direction")}} Eigenschaft. Für Reihen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen flex Zeilen, und der zweite Wert den Abstand zwischen den items innerhalb jeder Zeile. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen flex items innerhalb einer flex Zeile, und der zweite Wert den Abstand zwischen jeder flex Zeile.

In mehrspaltigen Containern definiert der erste Wert den Abstand zwischen Spalten. Eine Trennlinie kann dem ansonsten "leeren Raum" hinzugefügt werden, indem die {{cssxref("column-rule-style")}} Eigenschaft oder die {{cssxref("column-rule")}} Kurzform verwendet wird.

Prozentuale Abstandswerte werden immer basierend auf der Größe des [Inhaltskastens](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Containerelements berechnet. Das Verhalten ist gut definiert und über alle Layoutmodi hinweg konsistent, wenn die Containergröße festgelegt ist. Da diese drei Layoutmodi (mehre Spalten, flexibel und Raster) zyklische prozentuale Größen unterschiedlich behandeln, tut `gap` dies auch. Im Raster-Layout lösen sich zyklische prozentuale Größen gegen Null auf, um {{glossary("intrinsic size")}} Beiträge zu bestimmen, lösen sich jedoch gegen den Inhaltskasten des Elements auf, wenn Inhalte angeordnet werden. Zwei Beispiele unten zeigen prozentuale Abstandswerte mit [expliziter Containergröße](#prozentualer_abstandswert_und_explizite_containergröße) und [impliziter Containergröße](#prozentualer_abstandswert_und_implizite_containergröße) im Beispielabschnitt.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites aufrechtzuerhalten, akzeptieren Browser immer noch `grid-gap` als ein Alias für `gap`.

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

### Prozentualer Abstandswert und explizite Containergröße

Wenn die Containergröße festgelegt ist, basieren die Berechnungen der prozentualen Abstandswerte auf der Containergröße. So ist das Abstandverhalten in allen Layoutmodi konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit Raster-Layout und den anderen mit flex Layout. Die Container haben fünf rote 20x20px Kinder. Beide Container sind explizit auf 200px Höhe mit `height: 200px` gesetzt und der Abstand ist mit `gap: 12.5% 0` gesetzt.

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

Untersuchen Sie nun die Raster- und Flex-Elemente mit dem [Inspector-Tab in den Web Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, bewegen Sie die Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspektor. Sie werden feststellen, dass der Abstand in beiden Fällen gleich ist, nämlich 25px.

### Prozentualer Abstandswert und implizite Containergröße

Wenn die Größe nicht explizit auf dem Container festgelegt ist, verhält sich der prozentuale Abstand in den Raster- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container die Höhe nicht explizit festgelegt.

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

Im Fall des Raster-Layouts trägt der prozentuale Abstand nicht zur tatsächlichen Höhe des Rasters bei. Die Höhe des Containers wird unter Verwendung eines `0px` Abstands berechnet, sodass sich die tatsächliche Höhe auf 100px (20px x 5) ergibt. Dann wird der tatsächliche prozentuale Abstand unter Verwendung der Höhe des Inhaltskastens berechnet; der Abstand ergibt sich zu `12.5px` (100px x 12.5%). Der Abstand wird unmittelbar vor dem Rendern angewendet. Daher bleibt das Raster 100px hoch, es tritt jedoch aufgrund des vor dem Rendern hinzugefügten prozentualen Abstands ein Überlauf auf.

Im Fall des Flex-Layouts führt der prozentuale Abstand immer zu einem Nullwert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundlegende Konzepte des Raster-Layouts: Abstände](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS Kasten-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
