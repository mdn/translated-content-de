---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`grid-template-rows`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Liniennamen und die Größenfunktionen der {{Glossary("grid_row", "Gitternetzreihen")}}.

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

## Syntax

```css
/* Keyword value */
grid-template-rows: none;

/* <track-list> values */
grid-template-rows: 100px 1fr;
grid-template-rows: [line-name] 100px;
grid-template-rows: [line-name1] 100px [line-name2 line-name3];
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
  [line-name1] 100px [line-name2]
  repeat(auto-fit, [line-name3 line-name4] 300px)
  100px;
grid-template-rows:
  [line-name1 line-name2] 100px
  repeat(auto-fit, [line-name1] 300px) [line-name3];

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
  - : Ist ein Schlüsselwort, das bedeutet, dass es kein explizites Gitter gibt. Alle Reihen werden implizit generiert und ihre Größe wird durch die Eigenschaft {{cssxref("grid-auto-rows")}} bestimmt.
- `[line-name]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), das einen Namen für die Linie an dieser Position angibt. Der Identifikator kann eine beliebige gültige Zeichenkette sein, außer den reservierten Wörtern `span` und `auto`. Linien können mehrere Namen haben, die durch ein Leerzeichen innerhalb der eckigen Klammern getrennt sind, z. B. `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Ist eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}} Wert, relativ zur Blockgröße des Gittercontainers. Wenn die Größe des Gittercontainers von der Größe seiner Bahnen abhängt, muss der Prozentsatz für die Berechnung der inhärenten Größe des Gittercontainers als `auto` behandelt werden. Es muss dann für das Layout des Gitters und seiner Elemente gegen die resultierende Gittercontainergröße aufgelöst werden. Die inhärenten Größenbeiträge der Bahn können an die Größe des Gittercontainers angepasst werden und die endgültige Größe der Bahn um den minimalen Betrag erhöhen, der zur Einhaltung des Prozentsatzes erforderlich wäre.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flexfaktor der Bahn angibt. Jede `<flex>`-große Bahn nimmt einen Anteil des verbleibenden Raumes im Verhältnis zu ihrem Flexfaktor ein. Wenn sie außerhalb einer `minmax()` Notation auftaucht, impliziert sie ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Gitterelemente darstellt, die die Gitterbahn einnehmen.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Gitterelemente darstellt, die die Gitterbahn einnehmen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Als Maximum setzt ein `<flex>` Wert den Flexfaktor der Bahn. Es ist als Minimum ungültig.
- `auto`

  - : Als Maximale repräsentiert die größte {{cssxref("max-content")}} Größe der Elemente in dieser Bahn.

    Als Minimale steht es für die größte Mindestgröße der Elemente in dieser Bahn (spezifiziert durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer, die {{cssxref("min-content")}} Größe.

    Wenn außerhalb der {{cssxref("minmax", "minmax()")}} Notation verwendet, repräsentiert `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > **Note:** `auto` Bahngrößen (und nur `auto` Bahngrößen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt eine `auto`-große Bahn standardmäßig jeden verbleibenden Platz im Gittercontainer ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Bahnengröße beim Argument begrenzt wird, wenn sie größer als das `auto` Minimum ist.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Bahnliste, das es ermöglicht, eine große Anzahl von Reihen, die ein sich wiederholendes Muster aufweisen, in einer kompakteren Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Der Wert masonry zeigt an, dass diese Achse nach dem Mauerwerksalgorithmus angeordnet werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Der `subgrid` Wert zeigt an, dass das Gitter den überspannten Teil seines Muttergitters in dieser Achse übernehmen wird. Anstatt explizit angegeben zu werden, werden die Größen der Gitterreihen/Spalten aus der Definition des Muttergitters übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gitternetzreihengrößen angeben

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
- [Grundlagen des Gitterlayouts: Gitternetzbahnen](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Ein Gitter definieren](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
