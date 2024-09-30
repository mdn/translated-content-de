---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: b53905243e8de08c6295e72b6f93441fe6670e83
---

{{CSSRef}}

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Abstände (auch [Rinnen](/de/docs/Glossary/gutters) genannt) zwischen Zeilen und Spalten fest. Diese Eigenschaft gilt für [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout), [flexible](/de/docs/Web/CSS/CSS_flexible_box_layout) und [Grid-](/de/docs/Web/CSS/CSS_grid_layout) Container.

{{EmbedInteractiveExample("pages/css/gap.html")}}

## Bestandeigenschaften

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

Diese Eigenschaft wird als Wert für `<'row-gap'>` angegeben, gefolgt optional von einem Wert für `<'column-gap'>`. Wenn `<'column-gap'>` weggelassen wird, wird es auf den gleichen Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, [flexible Elemente](/de/docs/Glossary/flex_item), Flexzeilen und [Gitternetzlinien](/de/docs/Glossary/grid_lines) trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Gibt die Breite der Rinne an, die Spalten, flexible Elemente, Flexzeilen und Gitternetzlinien relativ zur Größe des Elements trennt.

## Beschreibung

Diese Eigenschaft definiert Abstände zwischen Spalten im [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), zwischen flexiblen Elementen und Flexzeilen im [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und zwischen Zeilen und Spalten im [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout).

Die erzeugten Abstände schaffen leere Räume, die die Breite oder Höhe der angegebenen Größe des Abstands haben, ähnlich wie ein leeres Element oder Spur. Der sichtbare Abstand zwischen Elementen kann von dem angegebenen `gap`-Wert abweichen, da Ränder, Abstände und verteilte Ausrichtung den Abstand zwischen Elementen über das von `gap` bestimmte Maß hinaus erhöhen können.

Im Grid-Layout definiert der erste Wert die Rinne zwischen Zeilen, und der zweite Wert definiert die Rinne zwischen Spalten. In beiden Layouts, Grid und Flex, wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

Bei Flex-Containern hängt es davon ab, ob der erste Wert der Abstand zwischen flexiblen Elementen oder Zwischen Flexzeilen ist, davon, in welche Richtung sie angeordnet sind. Flexible Elemente werden je nach Wert der {{cssxref("flex-direction")}} Eigenschaft in Zeilen oder Spalten angeordnet. Für Zeilen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flexzeilen und der zweite Wert den Abstand zwischen Elementen innerhalb jeder Zeile. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen flexiblen Elementen innerhalb einer Flexzeile, und der zweite Wert definiert die Abstände zwischen jeder Flexzeile.

In Mehrspalten-Containern definiert der erste Wert den Abstand zwischen Spalten. Eine Trennlinie kann dem ansonsten "leeren Raum" hinzugefügt werden, indem die {{cssxref("column-rule-style")}} Eigenschaft oder die {{cssxref("column-rule")}} Kurzschreibweise verwendet wird.

Prozentuale Gap-Werte werden immer relativ zur Größe des [Inhaltsfeldes](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über Layoutmodi hinweg, wenn die Containergröße definitiv ist. Da diese drei Layout-Modi (Mehrspalten-, Flex- und Grid-Layout) zyklische Prozentgrößen unterschiedlich behandeln, tut dies auch `gap`. Im Grid-Layout lösen zyklische Prozentsatzgrößen sich zu Null auf, um [intrinsische Größen](/de/docs/Glossary/intrinsic_size) Beiträge zu bestimmen, lösen sich aber zum Inhaltsfeld des Elements auf, wenn die Inhalte abgelegt werden. Zwei Beispiele unten demonstrieren prozentuale Gap-Werte mit [expliziter Containergröße](#prozentsatz_lückenwert_und_explizite_containergröße) und [impliziter Containergröße](#prozentsatz_lückenwert_und_implizite_containergröße) im Beispielabschnitt.

Frühe Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites zu wahren, akzeptieren Browser immer noch `grid-gap` als Alias für `gap`.

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

### Prozentsatz Lückenwert und explizite Containergröße

Wenn der Container eine feste Größe besitzt, basieren die Berechnungen der prozentualen Lückenwerte auf der Größe des Containers. Somit ist das Lückenverhalten über alle Layouts hinweg konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit einem Grid-Layout und den anderen mit einem Flex-Layout. Die Container haben fünf rote 20x20px Kinder. Beide Container sind explizit auf 200px Höhe mittels `height: 200px` gesetzt und die Lücke ist mit `gap: 12.5% 0` festgelegt.

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

Nun inspizieren Sie die Grid- und Flex-Elemente mit dem [Inspektor-Tab in den Web-Entwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Lücken zu sehen, schweben Sie mit der Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspektor. Sie werden bemerken, dass die Lücke in beiden Fällen gleich ist, nämlich 25px.

### Prozentsatz Lückenwert und implizite Containergröße

Wenn die Größe nicht explizit auf den Container gesetzt ist, verhält sich die prozentuale Lücke im Fall von Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container keine ausdrücklich gesetzte Höhe.

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

Beim Grid-Layout trägt die prozentuale Lücke nicht zur tatsächlichen Höhe des Grids bei. Die Containerhöhe wird unter Verwendung einer `0px` Lücke berechnet, so dass sich die tatsächliche Höhe als 100px (20px x 5) herausstellt. Dann wird die tatsächliche prozentuale Lücke unter Verwendung der Höhe des Inhaltsfeldes berechnet, die Lücke stellt sich als `12.5px` (100px x 12.5%) heraus. Die Lücke wird kurz vor dem Rendern angewendet. Somit bleibt das Grid 100px hoch, aber es läuft über aufgrund der prozentualen Lücke, die kurz vor dem Rendern hinzugefügt wird.

Im Fall des Flex-Layouts ergibt die prozentuale Lücke immer einen Wert von null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
