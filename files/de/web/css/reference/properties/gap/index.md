---
title: CSS-Eigenschaft `gap`
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 7b535c422322a8a330bd68075541abfc78efc4b7
---

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`gap`** legt die Abstände (auch als {{Glossary("gutters", "Rinnen")}} bezeichnet) zwischen Zeilen und Spalten in [mehrspaltigen](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout)- und [Grid-](/de/docs/Web/CSS/Guides/Grid_layout)-Containern fest.

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

## Enthaltene Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}

## Syntax

```css
/* One value */
gap: normal;
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;
gap: 16%;
gap: 100%;
gap: thick;
gap: calc(10% + 20px);

/* Two values */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;
gap: 16% 100%;
gap: 21px 82%;
gap: normal thin;
gap: thin thick;
gap: calc(20px + 10%) calc(10% - 5px);
gap: calc(20px + 10%) medium;

/* Global values */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

### Werte

Diese Eigenschaft wird als ein oder zwei Werte aus der folgenden Liste angegeben:

- `normal`
  - : Setzt den Abstand in mehrspaltigen Layouts auf `1em` und in allen anderen Kontexten auf `0`. Dies ist der Standardwert.
- {{cssxref("&lt;line-width&gt;")}}
  - : Legt die Größe des Abstands mithilfe der Schlüsselwörter `thin`, `medium` oder `thick` oder eines positiven {{cssxref("length")}}-Werts fest.
- {{CSSxRef("length-percentage")}}
  - : Setzt den Abstand auf einen nicht negativen {{CSSxRef("&lt;length&gt;")}}- oder {{CSSxRef("&lt;percentage&gt;")}}-Wert.

## Beschreibung

Die Eigenschaft `gap` definiert Abstände zwischen Spalten und Zeilen, wobei die Auswirkung der Definition davon abhängt, ob der Container ein Grid-Container, ein Flexbox-Container oder ein Container für ein mehrspaltiges Layout ist.

Die Kurzform akzeptiert einen oder zwei Werte. Ein einzelner Wert setzt sowohl `row-gap` als auch `column-gap`. Zwei Werte setzen zuerst `row-gap` und dann `column-gap`. Der Standardwert ist für beide Untereigenschaften `normal`; wenn Sie jedoch nur einen Wert deklarieren, gilt dieser für beide.

Prozentuale Abstandswerte werden immer relativ zur Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Container-Elements berechnet. Wenn die Containergröße bestimmt ist, ist das Verhalten über die Layout-Modi hinweg wohldefiniert und konsistent.

Die erzeugten Abstände schaffen leere Bereiche, deren Breite oder Höhe der angegebenen Größe des Abstands entspricht, ähnlich wie ein leeres Element oder ein leerer Track. Der sichtbare Abstand zwischen Elementen kann vom angegebenen `gap`-Wert abweichen, da Margins, Padding und verteilte Ausrichtung die Trennung zwischen Elementen über das durch `gap` Bestimmte hinaus vergrößern können.

Abstände können sichtbare Trennlinien als Abstanddekorationen enthalten. Wenn dekorative Linien zwischen den Spalten, Zeilen oder beiden vorhanden sind, erscheinen sie in der Mitte ihres Abstands, haben jedoch keinen Einfluss auf die Größe der Abstände. Diese dekorativen Linien können dem ansonsten „leeren Raum“ mithilfe der Kurzform {{cssxref("rule")}} hinzugefügt werden.

### In Grid-Layouts

Im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert die Eigenschaft `gap` den Raum zwischen Zeilen und Spalten. Wenn zwei Werte enthalten sind, definiert der erste Wert die Rinne zwischen Zeilen und der zweite die Rinne zwischen Spalten.

Prozentwerte werden relativ zur Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Container-Elements berechnet. Zyklische Prozentgrößen werden zur Bestimmung der Beiträge zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} gegen null aufgelöst, beim Layouten der Inhalte jedoch gegen die Content-Box des Grid-Containers. Zwei nachfolgende Beispiele zeigen prozentuale Abstandswerte mit [expliziter Containergröße](#prozentualer_abstandswert_und_explizite_containergröße) und [impliziter Containergröße](#prozentualer_abstandswert_und_implizite_containergröße) im Beispielabschnitt.

Die Wirkung positiver `gap`-Werte ist so, als hätten die Grid-Linien eine Dicke erhalten: Der Grid-Track zwischen zwei Grid-Linien ist der Raum zwischen den Rinnen, die sie darstellen. Wenn ein Grid-Element mehrere Zeilen oder Spalten überspannt, wird die Rinne zum Zweck der Track-Größenbestimmung als zusätzlicher, leerer Track mit fester Größe der angegebenen Größe behandelt, der der Dimension in Spannrichtung hinzugefügt wird. Wenn beispielsweise `gap: 10px` in einem 3x3-Grid aus Boxen mit 100px mal 100px gesetzt ist und ein Grid-Element zwei vertikale Spalten überspannt, beträgt seine Breite `210px`. Überspannt es alle drei, hat es eine Breite von `320px`.

Der Raum zwischen Grid-Zeilen und -Spalten kann aufgrund von Raum, der durch die Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} zwischen Tracks hinzugefügt wird, größer sein als der Wert der Eigenschaft `gap`.

Rinnen erscheinen nur zwischen Tracks des impliziten Grids. Wenn ein Grid zwischen Tracks fragmentiert wird, wird zwischen diesen Tracks kein Rinnenabstand hinzugefügt. Es gibt keine Rinne vor dem ersten Track oder nach dem letzten Track, und wenn ein Track eingeklappt ist, hat er keine Rinne.

Frühe Versionen der CSS-Grid-Spezifikation nannten diese Eigenschaft `grid-gap`. Zur Aufrechterhaltung der Kompatibilität mit älteren Websites akzeptieren Browser `grid-gap` als Alias für `gap`.

### In Flexbox

Bei Flex-Containern definiert die Eigenschaft `gap` den Raum sowohl zwischen Flex-Elementen als auch zwischen Flex-Linien. Ob der erste Wert den Abstand zwischen Flex-Elementen oder zwischen Flex-Linien darstellt, hängt von der Richtung ab. Flex-Elemente werden abhängig vom Wert der Eigenschaft {{cssxref("flex-direction")}} entweder in Zeilen oder Spalten angeordnet. Bei Zeilen (`row` (der Standardwert) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flex-Linien und der zweite Wert den Abstand zwischen Elementen innerhalb jeder Linie. Wenn nur ein Wert enthalten ist, wird dieser Wert für beide Dimensionen verwendet.

Bei Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Linie und der zweite Wert die Abstände zwischen den einzelnen Flex-Linien. Auch hier wird ein einzelner angegebener Wert für beide Dimensionen verwendet.

### In mehrspaltigen Layouts

Im [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) definiert die Eigenschaft die Rinne zwischen Spalten und Spaltenzeilen. Der erste Wert definiert den Abstand zwischen benachbarten Spaltenboxen, während der zweite Wert die Größe der Rinne zwischen Zeilen von Spaltenboxen definiert, wenn durch die Eigenschaft {{cssxref("column-height")}} mehrere Zeilen eingerichtet wurden.

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

Wenn der Container eine festgelegte Größe hat, basieren die Berechnungen prozentualer Abstandswerte auf der Größe des Containers. Daher ist das Verhalten von Abständen über alle Layouts hinweg konsistent. Im folgenden Beispiel gibt es zwei Container, einen mit Grid-Layout und den anderen mit Flex-Layout. Die Container enthalten fünf rote Kindelemente mit einer Größe von 20x20px. Beide Container werden mit `height: 200px` explizit auf eine Höhe von 200px gesetzt und der Abstand wird mit `gap: 12.5% 0` festgelegt.

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

Untersuchen Sie nun die Grid- und Flex-Elemente über den [Inspector-Tab in den Web Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, bewegen Sie den Mauszeiger im Inspector über die Tags `<div id="grid">` und `<div id="flex">`. Sie werden feststellen, dass der Abstand in beiden Fällen gleich ist und 25px beträgt.

### Prozentualer Abstandswert und implizite Containergröße

Wenn die Größe nicht explizit für den Container festgelegt wird, verhält sich der prozentuale Abstand bei Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel ist die Höhe der Container nicht explizit festgelegt.

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

Im Fall des Grid-Layouts trägt der prozentuale Abstand nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit einem Abstand von `0px` berechnet, sodass die tatsächliche Höhe 100px (20px x 5) beträgt. Anschließend wird der tatsächliche prozentuale Abstand anhand der Höhe der Content-Box berechnet; der Abstand beträgt `12.5px` (100px x 12.5%). Der Abstand wird erst unmittelbar vor dem Rendern angewendet. Somit bleibt das Grid 100px hoch, läuft aber aufgrund des später unmittelbar vor dem Rendern hinzugefügten prozentualen Abstands über.

Im Fall des Flex-Layouts ergibt der prozentuale Abstand immer den Wert null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("rule")}}
- [Grundlegende Konzepte des Grid-Layouts: Rinnen](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
- Modul [CSS box alignment](/de/docs/Web/CSS/Guides/Box_alignment)
- Modul [CSS flexible box layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- Modul [CSS grid layout](/de/docs/Web/CSS/Guides/Grid_layout)
- Modul [CSS multi-column layout](/de/docs/Web/CSS/Guides/Multicol_layout)
