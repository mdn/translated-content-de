---
title: grid-auto-rows
slug: Web/CSS/Reference/Properties/grid-auto-rows
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`grid-auto-rows`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Größe einer implizit erstellten Grid-Zeile {{Glossary("grid_tracks", "Track")}} oder eines Musters von Tracks fest.

{{InteractiveExample("CSS Demo: grid-auto-rows")}}

```css interactive-example-choice
grid-auto-rows: auto;
```

```css interactive-example-choice
grid-auto-rows: 50px;
```

```css interactive-example-choice
grid-auto-rows: min-content;
```

```css interactive-example-choice
grid-auto-rows: minmax(30px, auto);
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
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  font-size: 22px;
}

#example-element div:last-child {
  font-size: 13px;
}
```

Wenn ein Grid-Item in eine Zeile positioniert wird, die nicht explizit durch {{cssxref("grid-template-rows")}} dimensioniert ist, werden implizite {{Glossary("grid", "Grid")}}-Tracks erstellt, um es zu halten. Dies kann entweder dadurch geschehen, dass explizit in eine Zeile positioniert wird, die außerhalb des Bereichs liegt, oder durch den Auto-Placement-Algorithmus, der zusätzliche Zeilen erstellt.

## Syntax

```css
/* Keyword values */
grid-auto-rows: min-content;
grid-auto-rows: max-content;
grid-auto-rows: auto;

/* <length> values */
grid-auto-rows: 100px;
grid-auto-rows: 20cm;
grid-auto-rows: 50vmax;

/* <percentage> values */
grid-auto-rows: 10%;
grid-auto-rows: 33.3%;

/* <flex> values */
grid-auto-rows: 0.5fr;
grid-auto-rows: 3fr;

/* minmax() values */
grid-auto-rows: minmax(100px, auto);
grid-auto-rows: minmax(max-content, 2fr);
grid-auto-rows: minmax(20%, 80vmax);

/* fit-content() values */
grid-auto-rows: fit-content(400px);
grid-auto-rows: fit-content(5cm);
grid-auto-rows: fit-content(20%);

/* multiple track-size values */
grid-auto-rows: min-content max-content auto;
grid-auto-rows: 100px 150px 390px;
grid-auto-rows: 10% 33.3%;
grid-auto-rows: 0.5fr 3fr 1fr;
grid-auto-rows: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-rows: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Global values */
grid-auto-rows: inherit;
grid-auto-rows: initial;
grid-auto-rows: revert;
grid-auto-rows: revert-layer;
grid-auto-rows: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Ist eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert relativ zur Blockgröße des Grid-Containers. Wenn die Blockgröße des Grid-Containers unbestimmt ist, wird der Prozentwert wie `auto` behandelt.
- {{cssxref("&lt;flex&gt;")}}

  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-dimensionierte Track nimmt einen Anteil des verbleibenden Platzes im Verhältnis zu seinem Flex-Faktor ein.

    Wenn es außerhalb einer `minmax()`-Notation erscheint, impliziert es ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Grid-Items darstellt, die den Grid-Track einnehmen.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Grid-Items darstellt, die den Grid-Track einnehmen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flex-Faktor des Tracks. Als Minimum wird es als null (oder minimaler Inhalt, wenn der Grid-Container unter einer minimalen Inhaltsbeschränkung dimensioniert ist) behandelt.
- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Stellt die Formel `min(max-content, max(auto, argument))` dar, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Track-Größe bei _argument_ begrenzt wird, wenn es größer als das `auto`-Minimum ist.
- `auto`

  - : Als Maximum repräsentiert das größte {{cssxref("max-content")}} Größe der Items in diesem Track.

    Als Minimum repräsentiert es die größte minimale Größe von Items in diesem Track (spezifiziert durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Items). Dies ist häufig, aber nicht immer, die {{cssxref("min-content")}} Größe.

    Wenn es außerhalb der {{cssxref("minmax", "minmax()")}}-Notation verwendet wird, repräsentiert `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > [!NOTE] > `auto`-Trackgrößen (und nur `auto`-Trackgrößen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt ein `auto`-dimensionierter Track standardmäßig den verbleibenden Platz im Grid-Container ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grid-Zeilengröße festlegen

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
  width: 200px;
  display: grid;
  grid-template-areas: "a a";
  gap: 10px;
  grid-auto-rows: 100px;
}

#grid > div {
  background-color: lime;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_grid_row_size", "210px", "210px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- [Auto-Placement im Grid-Layout - Zeilen in der impliziten Grid dimensionieren](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement#sizing_rows_in_the_implicit_grid)
- Video: [Einführung in automatische Platzierung und Reihenfolge im Grid](https://gridbyexample.com/video/series-auto-placement-order/)
