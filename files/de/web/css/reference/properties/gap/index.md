---
title: CSS-Eigenschaft `gap`
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`gap`** legt die Abstände (auch {{Glossary("gutters", "Gutters")}} genannt) zwischen Zeilen und Spalten in Containern mit [mehrspaltigem Layout](/de/docs/Web/CSS/Guides/Multicol_layout), [Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) fest.

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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Diese Eigenschaft wird mit einem oder zwei Werten aus der folgenden Liste angegeben:

- `normal`
  - : Setzt den Abstand in mehrspaltigen Layouts auf `1em` und in allen anderen Kontexten auf `0`. Dies ist der Standardwert.
- {{cssxref("&lt;line-width&gt;")}}
  - : Legt die Größe des Abstands mit den Schlüsselwörtern `thin`, `medium` oder `thick` oder mit einem positiven {{cssxref("length")}}-Wert fest.
- {{CSSxRef("length-percentage")}}
  - : Setzt den Abstand auf einen nicht negativen {{CSSxRef("&lt;length&gt;")}}- oder {{CSSxRef("&lt;percentage&gt;")}}-Wert.

## Beschreibung

Die Eigenschaft `gap` definiert Abstände zwischen Spalten und Zeilen. Wie sich diese Definition auswirkt, hängt davon ab, ob es sich um einen Grid-Container, einen Flexbox-Container oder einen Container mit mehrspaltigem Layout handelt. Weitere Informationen zu Abständen in den verschiedenen Layouttypen finden Sie unter [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps).

Die Kurzschreibweise akzeptiert einen oder zwei Werte. Ein einzelner Wert legt sowohl `row-gap` als auch `column-gap` fest. Bei zwei Werten wird zuerst `row-gap` und dann `column-gap` festgelegt. Der Standardwert beider Untereigenschaften ist `normal`. Wenn Sie jedoch nur einen Wert angeben, gilt er für beide.

Prozentuale Werte für `gap` werden immer anhand der Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Container-Elements berechnet. Wenn die Größe des Containers eindeutig festgelegt ist, ist das Verhalten in allen Layoutmodi klar definiert und einheitlich.

Die erzeugten Abstände bilden leere Bereiche, deren Breite oder Höhe der angegebenen Größe des Abstands entspricht – ähnlich einem leeren Element oder Track. Der sichtbare Abstand zwischen Elementen kann vom angegebenen `gap`-Wert abweichen, da Außenabstände, Innenabstände und eine verteilte Ausrichtung den Abstand zwischen Elementen über den durch `gap` festgelegten Wert hinaus vergrößern können.

Abstände können sichtbare Trennlinien als dekorative Elemente enthalten. Wenn zwischen den Spalten, Zeilen oder beiden dekorative Linien vorhanden sind, erscheinen sie in der Mitte des jeweiligen Abstands, beeinflussen dessen Größe aber nicht. Mit der Kurzschreibweise {{cssxref("rule")}} können solche Linien zum ansonsten „leeren Bereich“ hinzugefügt werden.

### In Grid-Layouts

Im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert die Eigenschaft `gap` den Abstand zwischen Zeilen und Spalten. Werden zwei Werte angegeben, definiert der erste den Abstand zwischen Zeilen und der zweite den Abstand zwischen Spalten.

Prozentuale Werte werden anhand der Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Container-Elements berechnet. Zyklische prozentuale Größen werden bei der Bestimmung von Beiträgen zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} als null behandelt; beim Layout des Inhalts beziehen sie sich dagegen auf die Content-Box des Grid-Containers. Zwei Beispiele weiter unten zeigen prozentuale Werte für `gap` bei [expliziter Containergröße](#prozentualer-gap-wert-und-explizite-containergroße) und [impliziter Containergröße](#prozentualer-gap-wert-und-implizite-containergroße).

Positive `gap`-Werte wirken so, als hätten die Grid-Linien eine Dicke: Der Grid-Track zwischen zwei Grid-Linien ist der Bereich zwischen den Abständen, die diese Linien repräsentieren. Wenn sich ein Grid-Element über mehrere Zeilen oder Spalten erstreckt, wird der Abstand bei der Größenberechnung der Tracks als zusätzlicher leerer Track mit fester Größe behandelt. Seine angegebene Größe wird zur Abmessung in der Richtung addiert, über die sich das Element erstreckt. Wenn beispielsweise `gap: 10px` für ein 3×3-Grid aus Boxen mit einer Größe von jeweils 100px × 100px festgelegt ist, hat ein Grid-Element, das sich über zwei Spalten erstreckt, eine Breite von `210px`. Erstreckt es sich über alle drei Spalten, beträgt seine Breite `320px`.

Der Abstand zwischen Grid-Zeilen und -Spalten kann größer sein als der Wert der Eigenschaft `gap`, wenn durch die Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} zusätzlicher Platz zwischen Tracks verteilt wird.

Abstände erscheinen nur zwischen Tracks des impliziten Grids. Wird ein Grid zwischen Tracks aufgeteilt, wird zwischen diesen Tracks kein zusätzlicher Abstand eingefügt. Vor dem ersten und nach dem letzten Track gibt es keinen solchen Abstand. Auch ein zusammengeklappter Track hat keinen Abstand.

In frühen Versionen der CSS-Grid-Spezifikation hieß diese Eigenschaft `grid-gap`. Um die Kompatibilität mit älteren Websites zu gewährleisten, akzeptieren Browser `grid-gap` als Alias für `gap`.

### In Flexbox-Layouts

Bei Flex-Containern definiert die Eigenschaft `gap` den Abstand sowohl zwischen Flex-Elementen als auch zwischen Flex-Zeilen. Ob der erste Wert den Abstand zwischen Flex-Elementen oder zwischen Flex-Zeilen festlegt, hängt von der Richtung ab. Je nach Wert der Eigenschaft {{cssxref("flex-direction")}} werden Flex-Elemente in Zeilen oder Spalten angeordnet. Bei Zeilen (`row` (der Standardwert) oder `row-reverse`) legt der erste Wert den Abstand zwischen Flex-Zeilen und der zweite den Abstand zwischen Elementen innerhalb einer Zeile fest. Wird nur ein Wert angegeben, gilt er für beide Richtungen.

Bei Spalten (`column` oder `column-reverse`) legt der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Zeile und der zweite den Abstand zwischen den Flex-Zeilen fest. Auch hier gilt ein einzelner Wert für beide Richtungen.

### In mehrspaltigen Layouts

Im [mehrspaltigen CSS-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) definiert die Eigenschaft den Abstand zwischen Spalten und Spaltenzeilen. Der erste Wert definiert den Abstand zwischen benachbarten Spaltenboxen. Der zweite Wert definiert den Abstand zwischen Zeilen von Spaltenboxen, falls durch die Eigenschaft {{cssxref("column-height")}} mehrere solche Zeilen erzeugt wurden.

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

### Prozentualer `gap`-Wert und explizite Containergröße

Wenn für den Container eine feste Größe festgelegt ist, werden prozentuale Werte für `gap` anhand seiner Größe berechnet. Damit verhält sich `gap` in allen Layouts einheitlich. Im folgenden Beispiel gibt es zwei Container: einen mit Grid-Layout und einen mit Flex-Layout. Beide enthalten jeweils fünf rote Kindelemente mit einer Größe von 20 × 20px. Die Höhe beider Container ist mit `height: 200px` explizit auf 200px festgelegt; der Abstand wird mit `gap: 12.5% 0` angegeben. Weitere Informationen finden Sie unter [Abstandswerte als Prozentwerte angeben](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps#specifying_gap_values_as_percentages).

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

Untersuchen Sie nun die Grid- und Flex-Elemente mit dem [Inspektor der Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, bewegen Sie im Inspektor den Mauszeiger über die Tags `<div id="grid">` und `<div id="flex">`. Sie werden feststellen, dass der Abstand in beiden Fällen gleich ist: 25px.

### Prozentualer `gap`-Wert und implizite Containergröße

Wenn die Größe des Containers nicht explizit festgelegt ist, verhalten sich prozentuale Werte für `gap` in Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel ist die Höhe der Container nicht explizit festgelegt.

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

Beim Grid-Layout trägt der prozentuale Abstand nicht zur berechneten Höhe des Grids bei. Die Höhe des Containers wird mit einem Abstand von `0px` berechnet und beträgt daher 100px (20px × 5). Anschließend wird der tatsächliche prozentuale Abstand anhand der Höhe der Content-Box berechnet. Er beträgt `12.5px` (100px × 12,5 %). Der Abstand wird erst unmittelbar vor dem Rendern angewendet. Das Grid bleibt somit 100px hoch, sein Inhalt ragt aber wegen des später hinzugefügten prozentualen Abstands darüber hinaus.

Beim Flex-Layout ergibt ein prozentualer Abstand in diesem Fall immer den Wert null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("rule")}}
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [Grundkonzepte des Grid-Layouts: Abstände](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
- Modul [CSS box alignment](/de/docs/Web/CSS/Guides/Box_alignment)
- Modul [CSS flexible box layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- Modul [CSS grid layout](/de/docs/Web/CSS/Guides/Grid_layout)
- Modul [CSS multi-column layout](/de/docs/Web/CSS/Guides/Multicol_layout)
