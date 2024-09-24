---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`grid-template-columns`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Linienneamen und die Funktionen zur Spurgrößenbestimmung der {{glossary("grid column", "Gittersäulen")}}.

{{EmbedInteractiveExample("pages/css/grid-template-columns.html")}}

## Syntax

```css
/* Schlüsselwortwert */
grid-template-columns: none;

/* <track-list> Werte */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* <auto-track-list> Werte */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-columns:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-columns:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Globale Werte */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: revert;
grid-template-columns: revert-layer;
grid-template-columns: unset;
```

### Werte

- `none`
  - : Gibt an, dass kein explizites Raster vorhanden ist. Alle Spalten werden implizit generiert und ihre Größe wird durch die {{cssxref("grid-auto-columns")}} Eigenschaft bestimmt.
- `[linename]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), das einen Namen für die Linie an dieser Stelle angibt. Der Identifikator kann jeder gültige String sein, außer den reservierten Wörtern `span` und `auto`. Linien können mehrere Namen haben, die innerhalb der eckigen Klammern durch ein Leerzeichen getrennt sind, zum Beispiel `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge, die die Breite der Spalte angibt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}} Wert relativ zur Inline-Größe des Rastercontainers. Wenn die Größe des Rastercontainers von der Größe seiner Spuren abhängt, muss der Prozentsatz als `auto` behandelt werden.
    Die intrinsischen Größenbeiträge der Spur können an die Größe des Rastercontainers angepasst werden und die endgültige Größe der Spur um das Minimum erhöhen, das erforderlich ist, um den Prozentsatz zu erfüllen.
- {{cssxref("&lt;flex&gt;")}}

  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-Größe der Spur nimmt einen Anteil des verbleibenden Raums proportional zu ihrem Flex-Faktor ein.

    Wenn sie außerhalb einer `minmax()`-Notation erscheint, impliziert sie ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten [maximalen Inhaltsbeitrag](https://www.w3.org/TR/css-sizing-3/#max-content) der die Gitterspur belegenden Gitterelemente darstellt. Zum Beispiel, wenn das erste Element der Gitterspur den Satz _"Repetitio est mater studiorum"_ enthält und das zweite Element den Satz _"Dum spiro, spero"_, wird der maximale Inhaltsbeitrag durch die Größe des größten Satzes unter allen Gitterelementen definiert - _"Repetitio est mater studiorum"_.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten [minimalen Inhaltsbeitrag](https://www.w3.org/TR/css-sizing-3/#min-content) der die Gitterspur belegenden Gitterelemente darstellt. Zum Beispiel, wenn das erste Element der Gitterspur den Satz _"Repetitio est mater studiorum"_ enthält und das zweite Element den Satz _"Dum spiro, spero"_, wird der minimale Inhaltsbeitrag durch die Größe des größten Wortes unter allen Sätzen in den Gitterelementen definiert - _"studiorum"_.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine Funktionalnotation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion als _min_ behandelt. Als Maximum setzt ein `<flex>` Wert den Flex-Faktor der Spur. Es ist als Minimum ungültig.
- `auto`

  - : Als Maximum repräsentiert es die größte {{cssxref("max-content")}} Größe der Elemente in dieser Spur.

    Als Minimum repräsentiert es die größte minimale Größe der Elemente in dieser Spur (definiert durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer, die {{cssxref("min-content")}} Größe.

    Wenn es außerhalb der {{cssxref("minmax", "minmax()")}} Notation verwendet wird, repräsentiert `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > **Note:** `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die {{cssxref("align-content")}} und {{cssxref("justify-content")}} Eigenschaften gestreckt werden. Daher nimmt eine `auto` Größe standardmäßig den verbleibenden Platz im Rastercontainer ein.

- `{{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`
  - : Repräsentiert die Formel `max(minimum, min(limit, max-content))`, wobei _minimum_ ein `auto` Minimum repräsentiert (das oft, aber nicht immer, gleich einem {{cssxref("min-content")}} Minimum ist) und _limit_ die Spurgrößenfunktion ist, die als Argument an fit-content() übergeben wird. Dies wird im Wesentlichen als das kleinere von `minmax(auto, max-content)` und `minmax(auto, limit)` berechnet.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Spurliste und ermöglicht es, eine große Anzahl von Spalten, die ein wiederkehrendes Muster aufweisen, in einer kompakten Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Der Wert masonry gibt an, dass diese Achse gemäß dem Masonry-Algorithmus angeordnet werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Der Wert `subgrid` gibt an, dass das Raster den überspannten Teil seines übergeordneten Rasters entlang dieser Achse übernimmt. Die Größen der Rasterzeilen/-spalten werden nicht explizit festgelegt, sondern aus der Definition des übergeordneten Rasters übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größen von Gitterspalten angeben

#### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Ergebnis

{{EmbedLiveSample("Specifying_grid_column_sizes", "100%", "20px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- [Grundlegende Konzepte des Rasterlayouts: Rasterspuren](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Defining a grid](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
