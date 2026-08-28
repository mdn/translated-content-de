---
title: CSS-Eigenschaft `gap`
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`gap`**-Eigenschaft der [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Abstände (auch als {{Glossary("gutters", "Rinnen")}} bezeichnet) zwischen Reihen und Spalten in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flexbox-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout) Containern fest.

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

## Bestandteilige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für folgende CSS-Eigenschaften:

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
  - : Ein Wert von `1em` bei mehrspaltigen Containern und `0` in allen anderen Kontexten.
- {{CSSxRef("&lt;length&gt;")}}
  - : Die Größe des Abstands als nicht-negativer {{CSSxRef("&lt;length&gt;")}}-Wert.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als nicht-negativer {{CSSxRef("&lt;percentage&gt;")}}-Wert relativ zur Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements in dieser Dimension.

## Beschreibung

Die `gap`-Eigenschaft definiert Abstände zwischen Spalten und Reihen, wobei die Wirkung der Definition davon abhängt, ob der Container ein Grid-Container, ein Flexbox-Container oder ein mehrspaltiges Layout-Container ist.

Die Kurzschreibweise wird als Wert für `<'row-gap'>`, gefolgt optional von einem Wert für `<'column-gap'>` angegeben. Während der Standardwert für beide Untereigenschaften `normal` ist, gilt, wenn nur ein Wert deklariert wird, dieser Wert für beide. Sowohl `<'row-gap'>` als auch `<'column-gap'>` können jeweils als `<length>`, `<percentage>` oder mit dem Schlüsselwort `normal` angegeben werden.

Prozentuale Abstandswerte werden immer relativ zur Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements berechnet. Das Verhalten ist gut definiert und konsistent über alle Layout-Modi hinweg, wenn die Containergröße definiert ist.

Die erzeugten Abstände schaffen leere Räume, die die Breite oder Höhe der angegebenen Abstandsgröße haben, ähnlich wie ein leeres Element oder eine Spur. Der sichtbare Raum zwischen Elementen kann von dem angegebenen `gap`-Wert abweichen, da Ränder, Auffüllungen und verteilten Anpassungen den Abstand zwischen Elementen über das hinaus vergrößern können, was durch `gap` bestimmt wird.

Abstände können sichtbare Trennlinien als Abstandsdekorationen enthalten. Wenn dekorative Regeln zwischen den Spalten, Reihen oder beidem vorhanden sind, erscheinen sie in der Mitte des Abstands, haben jedoch keinen Einfluss auf die Größe der Abstände. Diese dekorativen Linien können dem ansonsten "leeren Raum" hinzugefügt werden, indem die {{cssxref("rule")}}-Kurzschreibweise verwendet wird.

### In Grid-Layouts

Im [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert die `gap`-Eigenschaft den Raum zwischen Reihen und Spalten. Der erste Wert definiert die Rinne zwischen den Reihen, und der zweite den Abstand zwischen den Spalten. Wenn nur ein Wert angegeben ist, wird dieser für beide Dimensionen verwendet.

Prozentwerte werden relativ zur Größe des [Inhaltsbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements berechnet. Zyklische Prozentsatzgrößen lösen sich gegen Null auf, um die {{Glossary("intrinsic_size", "intrinsische Größe")}} zu bestimmen, lösen sich jedoch gegen den Inhaltsbereich des Grid-Containers auf, wenn der Inhalt angelegt wird. Zwei Beispiele unten zeigen Prozentabstandswerte mit [expliziter Containergröße](#prozentualer_abstandswert_und_explizite_containergröße) und [impliziter Containergröße](#prozentualer_abstandswert_und_implizite_containergröße) im Abschnitt Beispiele.

Der Effekt positiver `gap`-Werte ist, als ob die Gitternetzlinien Dicke bekämen: Die Gitternetzspur zwischen zwei Gitternetzlinien ist der Raum zwischen den Rinnen, die sie darstellen. Wenn ein Grid-Element mehrere Reihen oder Spalten überspannt, wird die Rinne für die Spurgrößenbestimmung als eine zusätzliche, leere, festgelegte Spur der angegebenen Größe betrachtet, die in der Dimension der Spannungsrichtung hinzugefügt wird. Zum Beispiel, wenn `gap: 10px` auf einem 3x3-Gitter von 100px x 100px Kästchen gesetzt wird, und ein Gitterelement zwei vertikale Spalten umfasst, wäre seine Breite `210px`. Wenn es alle drei umfasst, beträgt seine Breite `320px`.

Der Abstand zwischen Grid-Reihen und -Spalten kann größer sein als der Wert der `gap`-Eigenschaft, aufgrund von zusätzlichem Raum, der zwischen den Spuren durch die {{cssxref("justify-content")}} und {{cssxref("align-content")}} Eigenschaften hinzugefügt wird.

Rinnen erscheinen nur zwischen den Spuren des impliziten Gitters. Wenn ein Gitter zwischen Spuren fragmentiert ist, wird kein Rinnenabstand zwischen diesen Spuren hinzugefügt. Es gibt keine Rinne vor der ersten Spur oder nach der letzten Spur, und wenn eine Spur zusammengebrochen ist, wird sie keine Rinne haben.

Frühere Versionen der CSS-Gitter-Spezifikation nannten diese Eigenschaft `grid-gap`. Um die Kompatibilität mit älteren Websites aufrechtzuerhalten, akzeptieren Browser `grid-gap` als Alias für `gap`.

### In Flexbox

Bei flexiblen Containern definiert die `gap`-Eigenschaft den Raum sowohl zwischen Flex-Elementen als auch zwischen Flex-Linien. Ob der erste Wert der Abstand zwischen Flex-Elementen oder zwischen Flex-Linien ist, hängt von der Richtung ab. Flex-Elemente werden je nach Wert der {{cssxref("flex-direction")}}-Eigenschaft entweder in Reihen oder Spalten angeordnet. Für Reihen (`row` (Standard) oder `row-reverse`) definiert der erste Wert den Abstand zwischen den Flex-Linien und der zweite Wert den Abstand zwischen den Elementen innerhalb jeder Linie. Wenn nur ein Wert vorhanden ist, gilt dieser für beide Dimensionen.

Für Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Linie und der zweite den Abstand zwischen jeder Flex-Linie. Auch hier gilt, wenn nur ein Wert vorhanden ist, wird dieser für beide Dimensionen verwendet.

### In mehrspaltigen Layouts

Im [CSS mehrspaltigen Layout](/de/docs/Web/CSS/Guides/Multicol_layout) definiert die Eigenschaft die Rinne zwischen Spalten und Reihen von Spalten. Der erste Wert definiert den Abstand zwischen benachbarten Spaltenkästchen, während der zweite Wert die Größe der Rinne zwischen Reihen von Spaltenkästchen definiert, falls mehrere Reihen durch die {{cssxref("column-height")}}-Eigenschaft etabliert wurden.

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

Wenn die Containergröße festgelegt ist, basieren die Berechnungen der Abstands-Prozentwerte auf der Größe des Containers. Somit ist das Abstandsverhalten über alle Layouts hinweg gleichbleibend. Im folgenden Beispiel gibt es zwei Container, einen mit einem Grid-Layout und den anderen mit einem Flex-Layout. Die Container haben fünf rote 20x20px-Kinder. Beide Container sind explizit auf 200px Höhe gesetzt, indem `height: 200px` angegeben wird, und der Abstand wird mit `gap: 12.5% 0` festgelegt.

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

Überprüfen Sie jetzt die Grid- und Flex-Elemente mithilfe des [Inspektor-Tabs in den Webentwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, bewegen Sie die Maus über die `<div id="grid">` und `<div id="flex">`-Tags im Inspektor. Sie werden feststellen, dass der Abstand in beiden Fällen gleich ist, nämlich 25px.

### Prozentualer Abstandswert und implizite Containergröße

Wenn die Größe nicht explizit auf dem Container gesetzt ist, verhält sich der prozentuale Abstand in Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel haben die Container keine explizit gesetzte Höhe.

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

Im Falle des Grid-Layouts trägt der prozentuale Abstand nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit `0px` Abstand berechnet, sodass die tatsächliche Höhe 100px beträgt (20px x 5). Dann wird der tatsächliche prozentuale Abstand unter Verwendung der Höhe des Inhaltsbereichs berechnet; der Abstand beträgt `12.5px` (100px x 12.5%). Der Abstand wird kurz vor der Wiedergabe angewendet. Daher bleibt das Grid 100px hoch, läuft aber aufgrund des später hinzugefügten prozentualen Abstands über.

Im Falle des Flex-Layouts ergibt der prozentuale Abstand immer den Wert Null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- [Grundkonzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS Mehrspaltiges Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
