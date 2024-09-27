---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: b53905243e8de08c6295e72b6f93441fe6670e83
---

{{CSSRef}}

Die **`gap`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt die Abstände (auch [Gutters](/de/docs/Glossary/gutters) genannt) zwischen Zeilen und Spalten fest. Diese Eigenschaft gilt für [Mehrspalten-](/de/docs/Web/CSS/CSS_multicol_layout), [Flex-](/de/docs/Web/CSS/CSS_flexible_box_layout) und [Grid-](/de/docs/Web/CSS/CSS_grid_layout) Container.

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

Diese Eigenschaft wird als Wert für `<'row-gap'>` spezifiziert, gefolgt optional von einem Wert für `<'column-gap'>`. Wenn `<'column-gap'>` weggelassen wird, wird er auf denselben Wert wie `<'row-gap'>` gesetzt. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>` oder `<percentage>` angegeben werden.

- {{CSSxRef("&lt;length&gt;")}}
  - : Gibt die Breite des Abstands an, der Spalten, [Flex-Elemente](/de/docs/Glossary/flex_item), Flex-Linien und [Grid-Linien](/de/docs/Glossary/grid_lines) trennt.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Gibt die Breite des Abstands an, der Spalten, Flex-Elemente, Flex-Linien und Grid-Linien im Verhältnis zur Dimension des Elements trennt.

## Beschreibung

Diese Eigenschaft definiert die Abstände zwischen Spalten im [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), zwischen Flex-Elementen und Flex-Linien im [CSS Flexiblen Boxen-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) sowie zwischen Zeilen und Spalten im [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout).

Die erzeugten Abstände schaffen leere Räume, die die Breite oder Höhe der angegebenen Größe des Abstands haben, ähnlich wie ein leeres Element oder eine Spur. Der sichtbare Abstand zwischen Elementen kann von dem angegebenen `gap`-Wert abweichen, da Ränder, Innenabstände und verteilte Ausrichtungen den Abstand zwischen Elementen über das hinaus erhöhen können, was durch `gap` bestimmt wird.

Im Grid-Layout definiert der erste Wert den Abstand zwischen den Zeilen, und der zweite den Abstand zwischen den Spalten. In beiden Grid- und Flex-Layouts, wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

Bei Flex-Containern hängt es davon ab, ob der erste Wert der Abstand zwischen Flex-Elementen oder zwischen Flex-Linien ist, welchen die Richtung bestimmt. Flex-Elemente werden entweder in Zeilen oder Spalten angeordnet, abhängig vom Wert der {{cssxref("flex-direction")}} Eigenschaft. Für Zeilen (`row` (der Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flex-Linien, und der zweite Wert definiert den Abstand zwischen Elementen innerhalb jeder Linie. Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Linie, und der zweite Wert definiert die Abstände zwischen jeder Flex-Linie.

In Mehrspalten-Containern definiert der erste Wert den Abstand zwischen Spalten. Eine Trennlinie kann dem sonst "leeren Raum" hinzugefügt werden, indem die {{cssxref("column-rule-style")}} Eigenschaft oder Kurzform {{cssxref("column-rule")}} verwendet wird.

Prozentuale `gap`-Werte werden immer im Verhältnis zur Größe des [Inhaltskastens](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Container-Elements berechnet. Das Verhalten ist wohldefiniert und konsistent über Layout-Modi, wenn die Containergröße bestimmt ist. Da diese drei Layout-Modi (Mehrspalten, Flex und Grid) sich zyklische Prozentgrößen unterschiedlich behandeln, tut dies auch `gap`. Im Grid-Layout werden zyklische Prozentgrößen gegen Null aufgelöst, um [intrinsische Größen-](/de/docs/Glossary/intrinsic_size) Beiträge zu bestimmen, aber gegen den Inhaltskasten des Elements aufgelöst, wenn die Inhalte angeordnet werden. Zwei Beispiele unten demonstrieren prozentuale `gap`-Werte mit [expliziter Containergröße](#prozentualer_`gap`-wert_und_explizite_containergröße) und [impliziter Containergröße](#prozentualer_`gap`-wert_und_implizite_containergröße) im Beispielabschnitt.

Frühere Versionen der Spezifikation nannten diese Eigenschaft `grid-gap`, und um die Kompatibilität mit älteren Websites zu wahren, akzeptieren Browser immer noch `grid-gap` als Alias für `gap`.

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

Wenn der Container eine festgelegte Größe hat, dann basieren die Berechnungen der Gap-Prozentwerte auf der Größe des Containers. Somit ist das Gap-Verhalten über alle Layouts konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit einem Grid-Layout und den anderen mit einem Flex-Layout. Die Container haben fünf rote 20x20px-Kinder. Beide Container sind auf eine Höhe von 200px explizit festgelegt, indem `height: 200px` verwendet wird, und das Gap ist mit `gap: 12.5% 0` gesetzt.

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

Jetzt inspizieren Sie die Grid- und Flex-Elemente mit dem [Inspector-Tab in den Entwicklerwerkzeugen für das Web](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Lücken zu sehen, bewegen Sie die Maus über die `<div id="grid">` und `<div id="flex">` Tags im Inspector. Sie werden feststellen, dass der Gap in beiden Fällen gleich ist, nämlich 25px.

### Prozentualer `gap`-Wert und implizite Containergröße

Wenn die Größe nicht ausdrücklich auf dem Container festgelegt ist, verhält sich das prozentuale Gap im Falle von Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container keine explizit festgelegte Höhe.

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

Im Falle des Grid-Layouts trägt der prozentuale Gap nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit einem `0px` Gap berechnet, sodass die tatsächliche Höhe 100px (20px x 5) beträgt. Dann wird das tatsächliche prozentuale Gap mit der Höhe des Inhaltskastens berechnet, das Gap beträgt `12.5px` (100px x 12,5%). Das Gap wird unmittelbar vor dem Rendern angewendet, sodass das Grid 100px hoch bleibt, aber durch das später hinzugefügte prozentuale Gap überläuft.

Im Falle des Flex-Layouts führt das prozentuale Gap immer zu einem Wert von null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Grid-Layouts: Gutters](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibler Boxen-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
