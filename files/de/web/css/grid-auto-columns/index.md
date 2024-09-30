---
title: grid-auto-columns
slug: Web/CSS/grid-auto-columns
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`grid-auto-columns`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Größe einer implizit erstellten Rasterspalte [track](/de/docs/Glossary/grid_tracks) oder eines Musters von Spalten fest.

{{EmbedInteractiveExample("pages/css/grid-auto-columns.html")}}

Wenn ein Rasterelement in eine Spalte positioniert ist, die nicht explizit durch {{cssxref("grid-template-columns")}} dimensioniert ist, werden implizite [Grid](/de/docs/Glossary/grid)-Spuren erstellt, um es zu halten. Dies kann entweder durch explizites Positionieren in einer Spalte geschehen, die außerhalb des Bereichs liegt, oder durch den Algorithmus zur automatischen Platzierung, der zusätzliche Spalten erstellt.

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
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert relativ zur Blockgröße des Grid-Containers. Wenn die Blockgröße des Grid-Containers undefiniert ist, wird der Prozentwert wie `auto` behandelt.
- {{cssxref("&lt;flex&gt;")}}

  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-dimensionierte Spur nimmt einen Anteil des verbleibenden Raums proportional zu ihrem Flex-Faktor ein.

    Wenn sie außerhalb einer `minmax()`-Notierung erscheint, impliziert sie ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der die Rasterspur belegenden Rasterelemente darstellt.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der die Rasterspur belegenden Rasterelemente darstellt.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flex-Faktor der Spur. Als Minimum wird es als Null (oder minimaler Inhalt, wenn der Grid-Container unter einer minimalen Inhaltsbeschränkung dimensioniert ist) behandelt.
- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Stellt die Formel `min(max-content, max(auto, argument))` dar, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Spurgröße auf _argument_ geklemmt wird, wenn sie größer als das `auto`-Minimum ist.
- `auto`

  - : Als Maximum repräsentiert es die größte {{cssxref("max-content")}}-Größe der Elemente in dieser Spur.

    Als Minimum repräsentiert es die größte Mindestgröße der Elemente in dieser Spur (festgelegt durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer, die {{cssxref("min-content")}}-Größe.

    Wenn es außerhalb der {{cssxref("minmax", "minmax()")}}-Notation verwendet wird, repräsentiert `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > **Note:** `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt eine `auto`-dimensionierte Spur standardmäßig jeden verbleibenden Raum im Grid-Container ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Rasterspaltengröße

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
- [Automatische Platzierung im Grid-Layout: Größenanpassung von Zeilen im impliziten Raster](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout#sizing_rows_in_the_implicit_grid)
- Video: [Einführung in die automatische Platzierung und Reihenfolge im Raster](https://gridbyexample.com/video/series-auto-placement-order/)
