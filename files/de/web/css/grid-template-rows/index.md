---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`grid-template-rows`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Liniennamen und Streckanpassungsfunktionen der {{glossary("grid_row", "Grid-Reihen")}}.

{{EmbedInteractiveExample("pages/css/grid-template-rows.html")}}

## Syntax

```css
/* Schlüsselwortwert */
grid-template-rows: none;

/* <track-list> Werte */
grid-template-rows: 100px 1fr;
grid-template-rows: [linename] 100px;
grid-template-rows: [linename1] 100px [linename2 linename3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);
grid-template-rows: subgrid;
grid-template-rows: masonry;

/* <auto-track-list> Werte */
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

/* Globale Werte */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: revert;
grid-template-rows: revert-layer;
grid-template-rows: unset;
```

Diese Eigenschaft kann angegeben werden als:

- entweder der Schlüsselwortwert `none`
- oder ein `<track-list>` Wert
- oder ein `<auto-track-list>` Wert.

### Werte

- `none`
  - : Ist ein Schlüsselwort und bedeutet, dass es kein explizites Gitter gibt. Alle Reihen werden implizit generiert und ihre Größe wird durch die {{cssxref("grid-auto-rows")}} Eigenschaft bestimmt.
- `[linename]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), das einen Namen für die Linie an dieser Stelle angibt. Das Identifikationswort kann jeder gültige String außer den reservierten Wörtern `span` und `auto` sein. Linien können mehrere Namen haben, die durch ein Leerzeichen innerhalb der eckigen Klammern getrennt sind, z.B. `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Ist eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}} Wert, relativ zur Blockgröße des Grid-Containers. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, muss der Prozentsatz für die Berechnung der intrinsischen Größe des Grid-Containers als `auto` behandelt werden. Er muss dann in Bezug auf die resultierende Größe des Grid-Containers aufgelöst werden, um das Grid und seine Elemente anzuordnen. Die intrinsischen Größenbeiträge des Tracks können an die Größe des Grid-Containers angepasst werden und können die endgültige Größe des Tracks um den Mindestbetrag erhöhen, der erforderlich wäre, um den Prozentsatz zu berücksichtigen.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jede `<flex>`-Größe nimmt einen Anteil des verbleibenden Raums im Verhältnis zu ihrem Flex-Faktor ein. Wenn sie außerhalb einer `minmax()`-Notation erscheint, impliziert sie ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Gitterelemente darstellt, die den Gitter-Track belegen.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Gitterelemente darstellt, die den Gitter-Track belegen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner ist als _min_, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Als ein Maximum setzt ein `<flex>` Wert den Flex-Faktor des Tracks. Es ist ungültig als Minimum.
- `auto`

  - : Als Maximum repräsentiert es die größte {{cssxref("max-content")}} Größe der Elemente in diesem Track.

    Als Minimum repräsentiert es die größte Mindestgröße von Elementen in diesem Track (spezifiziert durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer, die {{cssxref("min-content")}} Größe.

    Wenn außerhalb der {{cssxref("minmax", "minmax()")}}-Notation verwendet, repräsentiert `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > **Hinweis:** `auto` Track-Größen (und nur `auto` Track-Größen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gedehnt werden. Daher nimmt ein `auto`-Großteil standardmäßig jeden verbleibenden Platz im Grid-Container ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Track-Größe bei _argument_ abgeklappt wird, wenn sie größer als das `auto`-Minimum ist.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Track-Liste und ermöglicht das Schreiben einer großen Anzahl von Reihen, die ein wiederkehrendes Muster aufweisen, in einer kompakteren Form.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Der Wert masonry zeigt an, dass diese Achse gemäß dem Mauerwerk-Algorithmus angeordnet werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Der Wert `subgrid` zeigt an, dass das Gitter den umspannten Teil seines übergeordneten Gitters auf dieser Achse übernehmen wird. Anstatt explizit festgelegt zu werden, werden die Größen der Gitterreihen/-spalten von der Definition des übergeordneten Gitters übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren von Grid-Reihengrößen

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
- [Grundlegende Konzepte des Grid-Layouts: Grid-Tracks](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Definieren eines Grids](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
