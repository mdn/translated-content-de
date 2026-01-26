---
title: grid-auto-columns
slug: Web/CSS/Reference/Properties/grid-auto-columns
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`grid-auto-columns`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Größe einer implizit erstellten Grid-Spalte {{Glossary("grid_tracks", "Track")}} oder ein Muster von Tracks.

{{InteractiveExample("CSS Demo: grid-auto-columns")}}

```css interactive-example-choice
grid-auto-columns: auto;
```

```css interactive-example-choice
grid-auto-columns: 1fr;
```

```css interactive-example-choice
grid-auto-columns: min-content;
```

```css interactive-example-choice
grid-auto-columns: minmax(10px, auto);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div></div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}

#example-element > div:nth-child(1) {
  grid-column: 1 / 3;
}

#example-element > div:nth-child(2) {
  grid-column: 2;
}
```

Wenn ein Grid-Element in einer Spalte positioniert wird, die nicht explizit durch {{cssxref("grid-template-columns")}} definiert ist, werden implizite {{Glossary("grid", "Grid")}} Tracks erstellt, um das Element aufzunehmen. Dies kann entweder durch explizites Positionieren in einer Spalte außerhalb des Bereichs geschehen oder durch den Auto-Placement-Algorithmus, der zusätzliche Spalten erstellt.

## Syntax

```css
/* Keyword values */
grid-auto-columns: min-content;
grid-auto-columns: max-content;
grid-auto-columns: auto;

/* <length> values */
grid-auto-columns: 100px;
grid-auto-columns: 20cm;
grid-auto-columns: 50vmax;

/* <percentage> values */
grid-auto-columns: 10%;
grid-auto-columns: 33.3%;

/* <flex> values */
grid-auto-columns: 0.5fr;
grid-auto-columns: 3fr;

/* minmax() values */
grid-auto-columns: minmax(100px, auto);
grid-auto-columns: minmax(max-content, 2fr);
grid-auto-columns: minmax(20%, 80vmax);

/* fit-content() values */
grid-auto-columns: fit-content(400px);
grid-auto-columns: fit-content(5cm);
grid-auto-columns: fit-content(20%);

/* multiple track-size values */
grid-auto-columns: min-content max-content auto;
grid-auto-columns: 100px 150px 390px;
grid-auto-columns: 10% 33.3%;
grid-auto-columns: 0.5fr 3fr 1fr;
grid-auto-columns: minmax(100px, auto) minmax(max-content, 2fr)
  minmax(20%, 80vmax);
grid-auto-columns: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Global values */
grid-auto-columns: inherit;
grid-auto-columns: initial;
grid-auto-columns: revert;
grid-auto-columns: revert-layer;
grid-auto-columns: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Ist eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert, relativ zur Blockgröße des Grid-Containers. Wenn die Blockgröße des Grid-Containers undefiniert ist, wird der Prozentwert wie `auto` behandelt.
- {{cssxref("&lt;flex&gt;")}}
  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks spezifiziert. Jeder `<flex>`-dimensionierte Track nimmt einen Anteil des verbleibenden Raums proportional zu seinem Flex-Faktor ein.

    Wenn es außerhalb einer `minmax()`-Notation auftritt, impliziert es ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Grid-Elemente repräsentiert, die den Grid-Track belegen.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Grid-Elemente repräsentiert, die den Grid-Track belegen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich größer oder gleich _min_ und kleiner oder gleich _max_ definiert. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flex-Faktor des Tracks. Als Minimum wird es als Null behandelt (oder als Minimalinhalt, wenn der Grid-Container unter einer minimalen Inhaltsbeschränkung dimensioniert wird).
- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), mit der Ausnahme, dass die Track-Größe auf _argument_ abgegrenzt wird, wenn diese größer als das `auto`-Minimum ist.
- `auto`
  - : Als Maximum repräsentiert es die größte {{cssxref("max-content")}}-Größe der Elemente in diesem Track.

    Als Minimum repräsentiert es die größte Mindestgröße der Elemente in diesem Track (spezifiziert durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer, die {{cssxref("min-content")}}-Größe.

    Wenn außerhalb einer {{cssxref("minmax()")}}-Notation verwendet, repräsentiert `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > [!NOTE]
    > `auto` Track-Größen (und nur `auto` Track-Größen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher wird ein `auto` dimensionierter Track standardmäßig den verbleibenden Raum im Grid-Container einnehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grid-Spaltengröße einstellen

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css
#grid {
  height: 100px;
  display: grid;
  grid-template-areas: "a a";
  gap: 10px;
  grid-auto-columns: 200px;
}

#grid > div {
  background-color: lime;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_grid_column_size", "410px", "100px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- [Autoplanung im Grid-Layout: Reihen in der impliziten Grid-Größe](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement#sizing_rows_in_the_implicit_grid)
- Video: [Einführung in die automatische Platzierung und Reihenfolge des Grids](https://gridbyexample.com/video/series-auto-placement-order/)
