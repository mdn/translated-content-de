---
title: grid-auto-rows
slug: Web/CSS/grid-auto-rows
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`grid-auto-rows`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe einer implizit erstellten Grid-Zeile {{glossary("grid tracks", "track")}} oder ein Muster von Tracks fest.

{{EmbedInteractiveExample("pages/css/grid-auto-rows.html")}}

Wenn ein Gitterelement in eine Zeile positioniert ist, die nicht explizit durch {{cssxref("grid-template-rows")}} dimensioniert ist, werden implizite {{glossary("grid", "grid")}}-Tracks erstellt, um sie aufzunehmen. Dies kann entweder durch explizites Positionieren in eine Zeile, die außerhalb des Bereichs liegt, geschehen oder durch den Auto-Platzierungsalgorithmus, der zusätzliche Zeilen erstellt.

## Syntax

```css
/* Schlüsselwortwerte */
grid-auto-rows: min-content;
grid-auto-rows: max-content;
grid-auto-rows: auto;

/* <length>-Werte */
grid-auto-rows: 100px;
grid-auto-rows: 20cm;
grid-auto-rows: 50vmax;

/* <percentage>-Werte */
grid-auto-rows: 10%;
grid-auto-rows: 33.3%;

/* <flex>-Werte */
grid-auto-rows: 0.5fr;
grid-auto-rows: 3fr;

/* minmax()-Werte */
grid-auto-rows: minmax(100px, auto);
grid-auto-rows: minmax(max-content, 2fr);
grid-auto-rows: minmax(20%, 80vmax);

/* fit-content()-Werte */
grid-auto-rows: fit-content(400px);
grid-auto-rows: fit-content(5cm);
grid-auto-rows: fit-content(20%);

/* Mehrere Track-Größenwerte */
grid-auto-rows: min-content max-content auto;
grid-auto-rows: 100px 150px 390px;
grid-auto-rows: 10% 33.3%;
grid-auto-rows: 0.5fr 3fr 1fr;
grid-auto-rows: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-rows: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Globale Werte */
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
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert relativ zur Blockgröße des Grid-Containers. Wenn die Blockgröße des Grid-Containers undefiniert ist, wird der Prozentwert wie `auto` behandelt.
- {{cssxref("&lt;flex&gt;")}}

  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-dimensionierte Track nimmt einen Anteil des verbleibenden Raums proportional zu seinem Flex-Faktor ein.

    Wenn es außerhalb einer `minmax()`-Notation erscheint, impliziert es ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Gitterelemente darstellt, die den Grid-Track belegen.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Gitterelemente darstellt, die den Grid-Track belegen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flex-Faktor des Tracks. Als Minimum wird es als null (oder minimaler Inhalt, wenn der Grid-Container unter einer minimalen Inhaltsbeschränkung dimensioniert wird) behandelt.
- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Stellt die Formel `min(max-content, max(auto, argument))` dar, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Track-Größe bei _argument_ begrenzt wird, wenn es größer als das `auto`-Minimum ist.
- `auto`

  - : Als Maximum steht es für die größte {{cssxref("max-content")}}-Größe der Elemente in diesem Track.

    Als Minimum steht es für die größte Mindestgröße der Elemente in diesem Track (angegeben durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer, die {{cssxref("min-content")}}-Größe.

    Wenn es außerhalb der {{cssxref("minmax", "minmax()")}}-Notation verwendet wird, stellt `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum dar. Dieses Verhalten ähnelt in den meisten Fällen `minmax(min-content,max-content)`.

    > **Hinweis:** `auto`-Track-Größen (und nur `auto`-Track-Größen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt ein `auto`-dimensionierter Track standardmäßig den verbleibenden Raum im Grid-Container ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Größe von Grid-Zeilen

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
- [Auto-Platzierung im Grid-Layout - Zeilen im impliziten Gitter dimensionieren](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout#sizing_rows_in_the_implicit_grid)
- Video: [Introducing grid auto-placement and order](https://gridbyexample.com/video/series-auto-placement-order/)
