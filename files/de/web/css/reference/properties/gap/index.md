---
title: CSS-Eigenschaft `gap`
short-title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
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

## Enthaltene Eigenschaften

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

Die Eigenschaft `gap` definiert Abstände zwischen Spalten und Zeilen. Wie sich diese Definition auswirkt, hängt davon ab, ob der Container ein Grid-Container, ein Flexbox-Container oder ein Container mit Mehrspaltenlayout ist. Weitere Informationen zu Abständen in den verschiedenen Layouttypen finden Sie unter [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps).

Die Kurzschreibweise akzeptiert einen oder zwei Werte. Ein einzelner Wert legt sowohl `row-gap` als auch `column-gap` fest. Bei zwei Werten legt der erste `row-gap` und der zweite `column-gap` fest. Der Standardwert beider Untereigenschaften ist `normal`; wenn Sie jedoch nur einen Wert angeben, gilt er für beide.

Prozentuale Abstandswerte werden immer anhand der Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Container-Elements berechnet. Bei einer festgelegten Containergröße ist das Verhalten in allen Layoutmodi eindeutig definiert und einheitlich.

Die erzeugten Abstände schaffen leere Bereiche, deren Breite oder Höhe der angegebenen Größe des Abstands entspricht – ähnlich einem leeren Element oder Track. Der sichtbare Abstand zwischen Elementen kann vom angegebenen `gap`-Wert abweichen, da Außenabstände, Innenabstände und verteilte Ausrichtung den Abstand zwischen Elementen über den durch `gap` festgelegten Wert hinaus vergrößern können.

Abstände können sichtbare Trennlinien als Dekoration enthalten. Wenn zwischen Spalten, Zeilen oder beiden dekorative Linien vorhanden sind, erscheinen sie in der Mitte des jeweiligen Abstands, beeinflussen dessen Größe aber nicht. Solche Linien können dem ansonsten „leeren Bereich“ mit der Kurzschreibweise {{cssxref("rule")}} hinzugefügt werden.

### In Grid-Layouts

Im [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert die Eigenschaft `gap` den Abstand zwischen Zeilen und Spalten. Wenn zwei Werte angegeben werden, definiert der erste den Zwischenraum zwischen Zeilen und der zweite den Zwischenraum zwischen Spalten.

Prozentuale Werte werden anhand der Größe der [Content-Box](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Container-Elements berechnet. Bei der Bestimmung von Beiträgen zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} werden zyklische prozentuale Größen als null behandelt; beim Layout des Inhalts werden sie dagegen anhand der Content-Box des Grid-Containers berechnet. Zwei Beispiele im Abschnitt „Beispiele“ zeigen prozentuale Abstandswerte bei [expliziter Containergröße](#prozentualer_abstandswert_bei_expliziter_containergröße) und [impliziter Containergröße](#prozentualer_abstandswert_bei_impliziter_containergröße).

Positive `gap`-Werte wirken so, als hätten die Grid-Linien eine Dicke: Der Grid-Track zwischen zwei Grid-Linien ist der Bereich zwischen den Zwischenräumen, die diese Linien repräsentieren. Wenn ein Grid-Element mehrere Zeilen oder Spalten überspannt, wird der Zwischenraum bei der Berechnung der Track-Größe als zusätzlicher, leerer Track mit fester Größe behandelt und zur Abmessung in Spannrichtung addiert. Ist beispielsweise `gap: 10px` für ein 3×3-Grid mit 100px × 100px großen Feldern festgelegt, beträgt die Breite eines Grid-Elements, das zwei Spalten überspannt, `210px`. Überspannt es alle drei Spalten, beträgt seine Breite `320px`.

Der Abstand zwischen Grid-Zeilen und -Spalten kann größer als der Wert der Eigenschaft `gap` sein, wenn die Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} zusätzlichen Platz zwischen den Tracks verteilen.

Zwischenräume erscheinen nur zwischen Tracks des impliziten Grids. Wird ein Grid zwischen Tracks aufgeteilt, wird zwischen diesen Tracks kein Zwischenraum eingefügt. Vor dem ersten und nach dem letzten Track gibt es keinen Zwischenraum; ein zusammengeklappter Track hat ebenfalls keinen Zwischenraum.

In frühen Versionen der CSS-Grid-Spezifikation hieß diese Eigenschaft `grid-gap`. Um die Kompatibilität mit älteren Websites zu erhalten, akzeptieren Browser `grid-gap` als Alias für `gap`.

### In Flexbox-Layouts

Bei Flex-Containern definiert die Eigenschaft `gap` den Abstand sowohl zwischen Flex-Elementen als auch zwischen Flex-Zeilen. Ob der erste Wert den Abstand zwischen Flex-Elementen oder zwischen Flex-Zeilen festlegt, hängt von der Richtung ab. Flex-Elemente werden je nach Wert der Eigenschaft {{cssxref("flex-direction")}} in Zeilen oder Spalten angeordnet. Bei einer Anordnung in Zeilen (`row` (Standardwert) oder `row-reverse`) definiert der erste Wert den Abstand zwischen Flex-Zeilen und der zweite den Abstand zwischen Elementen innerhalb einer Zeile. Wird nur ein Wert angegeben, gilt er für beide Dimensionen.

Bei einer Anordnung in Spalten (`column` oder `column-reverse`) definiert der erste Wert den Abstand zwischen Flex-Elementen innerhalb einer Flex-Zeile und der zweite den Abstand zwischen den Flex-Zeilen. Auch hier gilt ein einzelner Wert für beide Dimensionen.

### In Mehrspaltenlayouts

Im [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) definiert die Eigenschaft den Zwischenraum zwischen Spalten und Spaltenzeilen. Der erste Wert legt den Abstand zwischen benachbarten Spaltenboxen fest. Der zweite Wert legt die Größe des Zwischenraums zwischen Spaltenzeilen fest, falls durch die Eigenschaft {{cssxref("column-height")}} mehrere Zeilen entstanden sind.

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

Wenn für den Container eine feste Größe festgelegt ist, werden prozentuale Abstandswerte anhand seiner Größe berechnet. Dadurch verhält sich der Abstand in allen Layouts einheitlich. Im folgenden Beispiel gibt es zwei Container: einen mit Grid-Layout und einen mit Flex-Layout. Die Container enthalten jeweils fünf rote, 20px × 20px große Kindelemente. Für beide Container wird mit `height: 200px` ausdrücklich eine Höhe von 200px festgelegt; der Abstand wird mit `gap: 12.5% 0` festgelegt. Weitere Informationen finden Sie unter [Abstandswerte als Prozentwerte angeben](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps#specifying_gap_values_as_percentages).

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

Untersuchen Sie nun die Grid- und Flex-Elemente auf der [Inspektor-Registerkarte der Webentwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Um die tatsächlichen Abstände zu sehen, bewegen Sie im Inspektor den Mauszeiger über die Tags `<div id="grid">` und `<div id="flex">`. Sie werden feststellen, dass der Abstand in beiden Fällen gleich groß ist: 25px.

### Prozentualer Abstandswert bei impliziter Containergröße

Wenn die Größe des Containers nicht ausdrücklich festgelegt ist, verhalten sich prozentuale Abstandswerte in Grid- und Flex-Layouts unterschiedlich. Im folgenden Beispiel ist für die Container keine Höhe ausdrücklich festgelegt.

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

Im Grid-Layout trägt der prozentuale Abstand nicht zur tatsächlichen Höhe des Grids bei. Die Höhe des Containers wird mit einem Abstand von `0px` berechnet und beträgt daher 100px (20px × 5). Anschließend wird der tatsächliche prozentuale Abstand anhand der Höhe der Content-Box berechnet. Er beträgt `12.5px` (100px × 12,5 %). Der Abstand wird erst unmittelbar vor dem Rendern angewendet. Das Grid bleibt daher 100px hoch, aber sein Inhalt ragt wegen des erst später hinzugefügten prozentualen Abstands darüber hinaus.

Im Flex-Layout ergibt ein prozentualer Abstand dagegen immer den Wert null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("rule")}}
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [Grundkonzepte des Grid-Layouts: Zwischenräume](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
- Modul [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)
- Modul [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- Modul [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
- Modul [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout)
