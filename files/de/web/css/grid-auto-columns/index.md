---
title: grid-auto-columns
slug: Web/CSS/grid-auto-columns
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`grid-auto-columns`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe einer implizit erstellten Gitterspalte {{glossary("grid tracks", "Track")}} oder eines Track-Musters fest.

{{EmbedInteractiveExample("pages/css/grid-auto-columns.html")}}

Wenn ein Gitterelement in eine Spalte positioniert wird, die nicht explizit durch {{cssxref("grid-template-columns")}} dimensioniert ist, werden implizite {{glossary("grid", "Gitter")}} Tracks erstellt, um es zu halten. Dies kann entweder durch explizite Positionierung in eine Spalte, die außerhalb des Bereichs liegt, geschehen oder durch den Algorithmen zur automatischen Platzierung, der zusätzliche Spalten erstellt.

## Syntax

```css
/* Schlüsselwortwerte */
grid-auto-columns: min-content;
grid-auto-columns: max-content;
grid-auto-columns: auto;

/* <Längenwerte> */
grid-auto-columns: 100px;
grid-auto-columns: 20cm;
grid-auto-columns: 50vmax;

/* <Prozentwerte> */
grid-auto-columns: 10%;
grid-auto-columns: 33.3%;

/* <Flexwerte> */
grid-auto-columns: 0.5fr;
grid-auto-columns: 3fr;

/* minmax() Werte */
grid-auto-columns: minmax(100px, auto);
grid-auto-columns: minmax(max-content, 2fr);
grid-auto-columns: minmax(20%, 80vmax);

/* fit-content() Werte */
grid-auto-columns: fit-content(400px);
grid-auto-columns: fit-content(5cm);
grid-auto-columns: fit-content(20%);

/* Mehrere Track-Größenwerte */
grid-auto-columns: min-content max-content auto;
grid-auto-columns: 100px 150px 390px;
grid-auto-columns: 10% 33.3%;
grid-auto-columns: 0.5fr 3fr 1fr;
grid-auto-columns: minmax(100px, auto) minmax(max-content, 2fr)
  minmax(20%, 80vmax);
grid-auto-columns: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Globale Werte */
grid-auto-columns: inherit;
grid-auto-columns: initial;
grid-auto-columns: revert;
grid-auto-columns: revert-layer;
grid-auto-columns: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Ist eine nicht negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ist ein nicht negativer {{cssxref("percentage", "&lt;percentage&gt;")}} Wert relativ zur Blockgröße des Gittercontainers. Wenn die Blockgröße des Gittercontainers unbestimmt ist, wird der Prozentwert wie `auto` behandelt.
- {{cssxref("&lt;flex&gt;")}}
  - : Ist eine nicht negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-dimensionierte Track nimmt einen Anteil des verbleibenden Raumes im Verhältnis zu seinem Flex-Faktor ein.

    Wenn er außerhalb einer `minmax()` Notation erscheint, impliziert er ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Gitterelemente repräsentiert, die den Gitter-Track belegen.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Gitterelemente repräsentiert, die den Gitter-Track belegen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Als Maximum setzt ein `<flex>` Wert den Flex-Faktor des Tracks. Als Minimum wird es als null (oder minimaler Inhalt, wenn der Gittercontainer unter einer minimalen Inhaltsbegrenzung dimensioniert ist) behandelt.
- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Track-Größe auf _argument_ begrenzt wird, wenn sie größer als das `auto` Minimum ist.
- `auto`
  - : Als Maximum steht es für die größte {{cssxref("max-content")}} Größe der Elemente in diesem Track.

    Als Minimum steht es für die größte Mindestgröße der Elemente in diesem Track (spezifiziert durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist häufig, aber nicht immer, die {{cssxref("min-content")}} Größe.

    Wenn es außerhalb der {{cssxref("minmax", "minmax()")}} Notation verwendet wird, steht `auto` für den Bereich zwischen dem oben beschriebenen Minimum und Maximum. In den meisten Fällen verhält sich dies ähnlich wie `minmax(min-content,max-content)`.

    > **Hinweis:** `auto` Track-Größen (und nur `auto` Track-Größen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt ein `auto` dimensionierter Track standardmäßig jeden verbleibenden Platz im Gittercontainer ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Gitterspaltengröße

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
- [Auto-Platzierung im Gitter-Layout: Größenanpassung der Zeilen im impliziten Gitter](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout#sizing_rows_in_the_implicit_grid)
- Video: [Einführung in die automatische Platzierung von Gittern und Reihenfolge](https://gridbyexample.com/video/series-auto-placement-order/)
