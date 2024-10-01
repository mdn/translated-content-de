---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`grid-template-rows`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Liniennamen und Größenfunktionen der {{Glossary("grid_row", "Rasterzeilen")}}.

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

## Syntax

```css
/* Keyword value */
grid-template-rows: none;

/* <track-list> values */
grid-template-rows: 100px 1fr;
grid-template-rows: [linename] 100px;
grid-template-rows: [linename1] 100px [linename2 linename3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);
grid-template-rows: subgrid;
grid-template-rows: masonry;

/* <auto-track-list> values */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-rows:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-rows:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: revert;
grid-template-rows: revert-layer;
grid-template-rows: unset;
```

Diese Eigenschaft kann wie folgt angegeben werden:

- entweder der Schlüsselwortwert `none`
- oder ein `<track-list>` Wert
- oder ein `<auto-track-list>` Wert.

### Werte

- `none`
  - : Ist ein Schlüsselwort, das bedeutet, dass kein explizites Raster vorhanden ist. Alle Zeilen werden implizit generiert und ihre Größe wird durch die Eigenschaft {{cssxref("grid-auto-rows")}} bestimmt.
- `[linename]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), das einen Namen für die Linie an dieser Stelle angibt. Das Ident kann beliebige gültige Zeichenfolgen außer den reservierten Wörtern `span` und `auto` sein. Linien können mehrere Namen haben, die innerhalb der eckigen Klammern durch ein Leerzeichen getrennt sind, beispielsweise `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Ist eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}} Wert, relativ zur Blockgröße des Rastercontainers. Wenn die Größe des Rastercontainers von der Größe seiner Spuren abhängt, muss der Prozentsatz für die Berechnung der intrinsischen Größe des Rastercontainers als `auto` behandelt werden. Er muss dann für das Layout des Rasters und seiner Elemente gegen die resultierende Größe des Rastercontainers aufgelöst werden. Die intrinsischen Größenbeiträge der Spur können an die Größe des Rastercontainers angepasst werden und die endgültige Größe der Spur um den minimalen Betrag erhöhen, der erforderlich ist, um den Prozentsatz zu berücksichtigen.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Raums im Verhältnis zu ihrem Flex-Faktor ein. Wenn sie außerhalb einer `minmax()` Notation erscheint, impliziert sie ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Rasterelemente repräsentiert, die die Rasterspur besetzen.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Rasterelemente repräsentiert, die die Rasterspur besetzen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Als Maximum setzt ein `<flex>` Wert den Flex-Faktor der Spur. Es ist ungültig als Minimum.
- `auto`

  - : Als Maximum repräsentiert es die größte {{cssxref("max-content")}} Größe der Elemente in dieser Spur.

    Als Minimum repräsentiert es die größte minimale Größe der Elemente in dieser Spur (angegeben durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer, die {{cssxref("min-content")}} Größe.

    Wenn außerhalb der {{cssxref("minmax", "minmax()")}} Notation verwendet, repräsentiert `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > **Hinweis:** `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher wird eine `auto`-große Spur standardmäßig jeden verbleibenden Raum im Rastercontainer einnehmen.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Spurgröße bei _argument_ begrenzt wird, wenn es größer als das `auto` Minimum ist.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Spurliste, das es ermöglicht, eine große Anzahl von Zeilen, die ein wiederkehrendes Muster aufweisen, in kompakterer Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Der `masonry` Wert bedeutet, dass diese Achse nach dem Mauerwerksalgorithmus ausgelegt werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Der `subgrid` Wert bedeutet, dass das Raster den gespannten Abschnitt seines übergeordneten Rasters auf dieser Achse übernimmt. Anstatt explizit angegeben zu werden, werden die Größen der Rasterzeilen/-spalten aus der Definition des übergeordneten Rasters übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren von Rasterzeilengrößen

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
  height: 100px;
  grid-template-rows: 30px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Ergebnis

{{EmbedLiveSample("Specifying_grid_row_sizes", "40px", "100px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- [Grundkonzepte des Rasters: Rasterspuren](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Defining a grid](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
