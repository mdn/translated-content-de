---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`grid-template-columns`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Liniennamen und Spurgrößenfunktionen der [Gitterspalten](/de/docs/Glossary/grid_column).

{{EmbedInteractiveExample("pages/css/grid-template-columns.html")}}

## Syntax

```css
/* Keyword value */
grid-template-columns: none;

/* <track-list> values */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* <auto-track-list> values */
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

/* Global values */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: revert;
grid-template-columns: revert-layer;
grid-template-columns: unset;
```

### Werte

- `none`
  - : Gibt an, dass es kein explizites Gitter gibt. Alle Spalten werden implizit erzeugt und ihre Größe wird durch die Eigenschaft {{cssxref("grid-auto-columns")}} bestimmt.
- `[linename]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), das einen Namen für die Linie an dieser Stelle angibt. Der Identifikator kann jede gültige Zeichenkette außer den reservierten Wörtern `span` und `auto` sein. Linien können mehrere Namen haben, die durch ein Leerzeichen in den eckigen Klammern getrennt sind, z. B. `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge, die die Breite der Spalte angibt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert relativ zur Inlinegröße des Gittercontainers. Wenn die Größe des Gittercontainers von der Größe seiner Spuren abhängt, muss der Prozentsatz als `auto` behandelt werden. Die intrinsischen Größenbeiträge der Spur können an die Größe des Gittercontainers angepasst werden und die endgültige Spurgröße um das mindeste erforderliche Maß erhöhen, das zur Einhaltung des Prozentsatzes erforderlich ist.
- {{cssxref("&lt;flex&gt;")}}

  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, welche den Flex-Faktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Raums proportional zu ihrem Flex-Faktor ein.

    Wenn es außerhalb einer `minmax()`-Notation erscheint, impliziert es ein automatisches Minimum (d. h. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten [maximalen Inhaltsbeitrag](https://www.w3.org/TR/css-sizing-3/#max-content) der Gitterelemente repräsentiert, die die Gitterspur belegen. Wenn beispielsweise das erste Element der Gitterspur den Satz _"Repetitio est mater studiorum"_ und das zweite Element den Satz _"Dum spiro, spero"_ enthält, wird der maximale Inhaltsbeitrag durch die Größe des größten Satzes unter allen Gitterelementen definiert - _"Repetitio est mater studiorum"_.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten [minimalen Inhaltsbeitrag](https://www.w3.org/TR/css-sizing-3/#min-content) der Gitterelemente repräsentiert, die die Gitterspur belegen. Wenn beispielsweise das erste Element der Gitterspur den Satz _"Repetitio est mater studiorum"_ und das zweite Element den Satz _"Dum spiro, spero"_ enthält, wird der minimale Inhaltsbeitrag durch die Größe des größten Wortes unter allen Sätzen in den Gitterelementen definiert - _"studiorum"_.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich größer oder gleich _min_ und kleiner oder gleich _max_ definiert. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flex-Faktor der Spur. Es ist als Minimum ungültig.
- `auto`

  - : Als Maximum repräsentiert es die größte {{cssxref("max-content")}}-Größe der Elemente in dieser Spur.

    Als Minimum repräsentiert es die größte Mindestgröße von Elementen in dieser Spur (angegeben durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer, die {{cssxref("min-content")}}-Größe.

    Wenn außerhalb der {{cssxref("minmax", "minmax()")}}-Notation verwendet, stellt `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum dar. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > **Hinweis:** `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gedehnt werden. Daher nimmt eine `auto`-große Spur standardmäßig den verbleibenden Raum im Gittercontainer ein.

- `{{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`
  - : Repräsentiert die Formel `max(minimum, min(limit, max-content))`, wobei _minimum_ ein `auto`-Minimum darstellt (was oft, aber nicht immer, einem {{cssxref("min-content")}}-Minimum entspricht), und _limit_ ist die Spurgrößenfunktion, die als Argument an `fit-content()` übergeben wird. Dies wird im Wesentlichen als das kleinere von `minmax(auto, max-content)` und `minmax(auto, limit)` berechnet.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Stellt ein wiederholtes Fragment der Spurliste dar und ermöglicht es, eine große Anzahl von Spalten, die ein wiederkehrendes Muster aufweisen, in kompakterer Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Der `masonry`-Wert gibt an, dass diese Achse entsprechend dem `masonry`-Algorithmus layoutiert werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Der `subgrid`-Wert gibt an, dass das Gitter den überspannten Teil des Eltern-Gitters in dieser Achse übernimmt. Anstatt explizit angegeben zu werden, werden die Größen der Gitterreihen/-spalten aus der Definition des Eltern-Gitters übernommen.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Angabe von Gitterspaltengrößen

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
- [Grundlagen des Gitterlayouts: Gitterspuren](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Definieren eines Gitters](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
