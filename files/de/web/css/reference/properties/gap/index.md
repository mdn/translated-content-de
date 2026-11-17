---
title: CSS-Eigenschaft `gap`
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: e57c161bccdd08db7e46922255e1dc3ea74058d4
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`gap`** legt die Abstände (auch {{Glossary("gutters", "Zwischenräume")}} genannt) zwischen Zeilen und Spalten in [Mehrspalten-](/de/docs/Web/CSS/Guides/Multicol_layout), [Flex-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Grid-Containern](/de/docs/Web/CSS/Guides/Grid_layout) fest.

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

Für diese Eigenschaft werden ein oder zwei Werte aus der folgenden Liste angegeben:

- `normal`
  - : Setzt den Abstand in Mehrspaltenlayouts auf `1em` und in allen anderen Kontexten auf `0`. Dies ist der Standardwert.
- {{cssxref("&lt;line-width&gt;")}}
  - : Legt die Größe des Abstands mit den Schlüsselwörtern `thin`, `medium` oder `thick` oder mit einem positiven {{cssxref("length")}}-Wert fest.
- {{CSSxRef("length-percentage")}}
  - : Setzt den Abstand auf einen nicht negativen {{CSSxRef("&lt;length&gt;")}}- oder {{CSSxRef("&lt;percentage&gt;")}}-Wert.

## Beschreibung

Die Eigenschaft `gap` definiert Abstände zwischen Spalten und Zeilen. Wie sich diese Definition auswirkt, hängt davon ab, ob es sich um einen Grid-Container, einen Flexbox-Container oder einen Mehrspaltenlayout-Container handelt. Weitere Informationen zu den Abständen in den verschiedenen Layouttypen finden Sie unter [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps).

Die Kurzschreibweise akzeptiert einen oder zwei Werte. Ein einzelner Wert legt sowohl `row-gap` als auch `column-gap` fest. Bei zwei Werten wird zuerst `row-gap` und dann `column-gap` festgelegt. Der Standardwert für beide Untereigenschaften ist `normal`; wenn Sie jedoch nur einen Wert angeben, gilt er für beide.

Prozentuale Abstandswerte werden immer anhand der Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Container-Elements berechnet. Wenn die Containergröße feststeht, ist das Verhalten über alle Layoutmodi hinweg eindeutig definiert und konsistent.

Die erzeugten Abstände bilden leere Bereiche mit der angegebenen Breite oder Höhe, ähnlich einem leeren Element oder Track. Der sichtbare Abstand zwischen Elementen kann vom angegebenen `gap`-Wert abweichen, weil Außenabstände, Innenabstände und die Verteilung von freiem Platz bei der Ausrichtung den Abstand über den durch `gap` festgelegten Wert hinaus vergrößern können.

Abstände können sichtbare Trennlinien als Dekoration enthalten. Befinden sich dekorative Linien zwischen Spalten, Zeilen oder beiden, erscheinen sie in der Mitte des jeweiligen Abstands, beeinflussen dessen Größe aber nicht. Mit der Kurzschreibweise {{cssxref("rule")}} lassen sich solche Linien zum ansonsten „leeren Bereich“ hinzufügen.

### In Grid-Layouts

Im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert die Eigenschaft `gap` den Abstand zwischen Zeilen und Spalten. Werden zwei Werte angegeben, definiert der erste den Zwischenraum zwischen Zeilen und der zweite den Zwischenraum zwischen Spalten.

Prozentuale Werte werden anhand der Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Container-Elements berechnet. Bei der Bestimmung der Beiträge zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} werden zyklische prozentuale Größen als null behandelt; beim Layout des Inhalts werden sie hingegen anhand der Content-Box des Grid-Containers aufgelöst. Zwei Beispiele im Abschnitt „Beispiele“ veranschaulichen prozentuale Abstandswerte bei [expliziter Containergröße](#prozentualer_abstandswert_bei_expliziter_containergröße) und [impliziter Containergröße](#prozentualer_abstandswert_bei_impliziter_containergröße).

Positive `gap`-Werte wirken so, als hätten die Grid-Linien eine Dicke: Der Grid-Track zwischen zwei Grid-Linien ist der Bereich zwischen den Zwischenräumen, die diese Linien repräsentieren. Wenn sich ein Grid-Element über mehrere Zeilen oder Spalten erstreckt, wird der Zwischenraum bei der Größenberechnung der Tracks wie ein zusätzlicher, leerer Track mit fester Größe behandelt und zur Abmessung in Spannrichtung addiert. Wenn beispielsweise `gap: 10px` für ein 3×3-Grid aus Boxen mit jeweils 100px Breite und 100px Höhe festgelegt ist, hat ein Grid-Element, das sich über zwei Spalten erstreckt, eine Breite von `210px`. Erstreckt es sich über alle drei Spalten, beträgt seine Breite `320px`.

Der Abstand zwischen Grid-Zeilen und -Spalten kann größer sein als der Wert der Eigenschaft `gap`, wenn die Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} zusätzlichen Platz zwischen den Tracks verteilen.

Zwischenräume erscheinen nur zwischen Tracks des impliziten Grids. Wird ein Grid zwischen Tracks fragmentiert, wird zwischen diesen Tracks kein Zwischenraum hinzugefügt. Vor dem ersten und nach dem letzten Track gibt es keinen Zwischenraum; auch ein zusammengeklappter Track hat keinen Zwischenraum.

In frühen Versionen der CSS-Grid-Spezifikation hieß diese Eigenschaft `grid-gap`. Um die Kompatibilität mit älteren Websites zu gewährleisten, akzeptieren Browser `grid-gap` als Alias für `gap`.

### In Flexbox-Layouts

Bei Flex-Containern definiert die Eigenschaft `gap` den Abstand sowohl zwischen Flex-Elementen als auch zwischen Flex-Zeilen. Ob der erste Wert den Abstand zwischen Flex-Elementen oder zwischen Flex-Zeilen festlegt, hängt von der Ausrichtung ab. Flex-Elemente werden je nach Wert der Eigenschaft {{cssxref("flex-direction")}} in Zeilen oder Spalten angeordnet. Bei Zeilen (`row` (Standardwert) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flex-Zeilen und der zweite den Abstand zwischen Elementen innerhalb einer Zeile. Wird nur ein Wert angegeben, gilt er für beide Dimensionen.

Bei Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Zeile und der zweite den Abstand zwischen Flex-Zeilen. Auch hier gilt ein einzelner Wert für beide Dimensionen.

### In Mehrspaltenlayouts

Im [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) definiert die Eigenschaft die Zwischenräume zwischen Spalten und zwischen Spaltenzeilen. Der erste Wert definiert den Abstand zwischen benachbarten Spaltenboxen. Der zweite Wert definiert die Größe des Zwischenraums zwischen Zeilen von Spaltenboxen, sofern durch die Eigenschaft {{cssxref("column-height")}} mehrere Zeilen entstanden sind.

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

### Prozentualer Abstandswert bei expliziter Containergröße

Wenn für den Container eine feste Größe festgelegt ist, werden prozentuale Abstandswerte anhand dieser Größe berechnet. Das Verhalten der Abstände ist daher in allen Layouts konsistent. Im folgenden Beispiel gibt es zwei Container: einen mit Grid-Layout und einen mit Flex-Layout. Die Container enthalten jeweils fünf rote Kindelemente mit einer Größe von 20 × 20px. Für beide Container wird mit `height: 200px` ausdrücklich eine Höhe von 200px festgelegt; der Abstand wird mit `gap: 12.5% 0` festgelegt. Weitere Informationen finden Sie unter [Abstandswerte als Prozentangaben festlegen](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps#specifying_gap_values_as_percentages).

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

{{EmbedLiveSample("percentage_gap_value_and_explicit_container_size", "auto", "200px")}}

Untersuchen Sie nun die Grid- und Flex-Elemente auf dem [Inspector-Tab der Webentwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, bewegen Sie den Mauszeiger im Inspector über die Tags `<div id="grid">` und `<div id="flex">`. Sie werden feststellen, dass der Abstand in beiden Fällen gleich ist: 25px.

### Prozentualer Abstandswert bei impliziter Containergröße

Wenn für den Container keine Größe ausdrücklich festgelegt ist, verhält sich der prozentuale Abstand in Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel ist für die Container keine Höhe ausdrücklich festgelegt.

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

{{EmbedLiveSample("percentage_gap_value_and_implicit_container_size", "auto", "200px")}}

Beim Grid-Layout trägt der prozentuale Abstand nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit einem Abstand von `0px` berechnet und beträgt daher 100px (20px × 5). Anschließend wird der tatsächliche prozentuale Abstand anhand der Höhe der Content-Box berechnet: Er beträgt `12.5px` (100px × 12,5 %). Der Abstand wird erst unmittelbar vor dem Rendern angewendet. Das Grid bleibt somit 100px hoch, läuft aber wegen des nachträglich hinzugefügten prozentualen Abstands über.

Beim Flex-Layout ergibt der prozentuale Abstand immer den Wert null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("rule")}}
- [Überblick über CSS-Abstände und Eigenschaften zur Dekoration von Abständen](/de/docs/Web/CSS/Guides/Gaps/Overview)
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [CSS-Trennlinien definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_rules)
- [Grundlagen des Grid-Layouts: Zwischenräume](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
- Modul [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)
- Modul [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- Modul [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
- Modul [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout)
