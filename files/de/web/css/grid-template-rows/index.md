---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`grid-template-rows`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Liniennamen und Spurgrößenfunktionen der [Grid-Reihen](/de/docs/Glossary/grid_row).

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

- entweder als Schlüsselwortwert `none`
- oder als `<track-list>`-Wert
- oder als `<auto-track-list>`-Wert.

### Werte

- `none`
  - : Ein Schlüsselwort, das bedeutet, dass es kein explizites Grid gibt. Alle Reihen werden implizit generiert und ihre Größe wird durch die {{cssxref("grid-auto-rows")}}-Eigenschaft bestimmt.
- `[linename]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), der einen Namen für die Linie an dieser Position angibt. Die Identifikatoren können jede gültige Zeichenfolge sein, außer den reservierten Wörtern `span` und `auto`. Linien können mehrere Namen haben, die durch ein Leerzeichen in den eckigen Klammern getrennt sind, z.B. `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Ist eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert, relativ zur Blockgröße des Grid-Containers. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss der Prozentsatz für die Berechnung der intrinsischen Größe des Grid-Containers als `auto` behandelt werden. Er muss dann in Bezug auf die resultierende Größe des Grid-Containers aufgelöst werden, um das Grid und seine Elemente zu layouten. Die intrinsischen Größenbeiträge der Spur können an die Größe des Grid-Containers angepasst werden und die endgültige Größe der Spur um das Mindestmaß erhöhen, das erforderlich ist, um den Prozentsatz zu honorieren.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Raums im Verhältnis zu ihrem Flex-Faktor ein. Wenn sie außerhalb einer `minmax()`-Notation erscheint, impliziert sie ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Grid-Elemente darstellt, die die Grid-Spur einnehmen.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Grid-Elemente darstellt, die die Grid-Spur einnehmen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion als _min_ behandelt. Als Maximum legt ein `<flex>`-Wert den Flex-Faktor der Spur fest. Es ist ungültig als Minimum.
- `auto`

  - : Als Maximum repräsentiert es die größte {{cssxref("max-content")}}-Größe der Elemente in dieser Spur.

    Als Minimum repräsentiert es die größte Mindestgröße der Elemente in dieser Spur (angegeben durch die {{cssxref("min-width")}} / {{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer die {{cssxref("min-content")}}-Größe.

    Wenn außerhalb der {{cssxref("minmax", "minmax()")}}-Notation verwendet, repräsentiert `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > **Note:** `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt eine `auto`-große Spur standardmäßig jeglichen verbleibenden Platz im Grid-Container ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Spurgröße an _argument_ geklammert wird, wenn sie größer als das `auto` Minimum ist.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Spurliste, wodurch eine große Anzahl von Reihen, die ein wiederkehrendes Muster zeigen, in kompakterer Form geschrieben werden kann.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Der Travail-Wert zeigt an, dass diese Achse gemäß dem Travails-Algorithmus angeordnet werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Der `subgrid`-Wert zeigt an, dass das Grid den überdeckten Teil seines übergeordneten Grids auf dieser Achse übernimmt. Anstatt explizit festgelegt zu werden, werden die Größen der Grid-Reihen/Spalten aus der Definition des übergeordneten Grids übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der Größen von Grid-Reihen

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
- [Grundlegende Konzepte des Grid-Layouts: Grid-Spuren](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Defining a grid](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
