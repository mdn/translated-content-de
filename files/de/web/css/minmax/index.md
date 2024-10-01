---
title: minmax()
slug: Web/CSS/minmax
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`minmax()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions) definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Sie wird mit [CSS-Grids](/de/docs/Web/CSS/CSS_grid_layout) verwendet.

{{EmbedInteractiveExample("pages/css/function-minmax.html")}}

## Syntax

```css
/* <inflexible-breadth>, <track-breadth> values */
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)

/* <fixed-breadth>, <track-breadth> values */
minmax(200px, 1fr)
minmax(30%, 300px)
minmax(400px, 50%)
minmax(50%, min-content)
minmax(300px, max-content)
minmax(200px, auto)

/* <inflexible-breadth>, <fixed-breadth> values */
minmax(400px, 50%)
minmax(30%, 300px)
minmax(min-content, 200px)
minmax(max-content, 200px)
minmax(auto, 300px)
```

Eine Funktion, die zwei Parameter, _min_ und _max_, übernimmt.

Jeder Parameter kann eine `<length>`, ein `<percentage>`, ein `<flex>`-Wert oder einer der Schlüsselwortwerte `max-content`, `min-content` oder `auto` sein.

Wenn _max_ < _min_ ist, wird _max_ ignoriert und `minmax(min,max)` wird als _min_ behandelt. Als Maximum legt ein {{cssxref("flex_value","&lt;flex&gt;")}}-Wert den Flex-Faktor eines Grid-Tracks fest; es ist als Minimum ungültig.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz relativ zur Inlinegröße des Grid-Containers in Spaltengrids und zur Blockgröße des Grid-Containers in Zeilengrids. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, muss das `<percentage>` als `auto` behandelt werden. Der {{Glossary("user_agent", "User-Agent")}} kann die intrinsischen Größenbeiträge des Tracks an die Größe des Grid-Containers anpassen und die endgültige Größe des Tracks um den minimalen Betrag erhöhen, der erforderlich ist, um den Prozentsatz zu berücksichtigen.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-große Track nimmt einen Anteil des verbleibenden Platzes im Verhältnis zu seinem Flex-Faktor ein.
- `max-content`
  - : Repräsentiert den größten max-content-Beitrag der Grid-Elemente, die den Grid-Track belegen.
- `min-content`
  - : Repräsentiert den größten min-content-Beitrag der Grid-Elemente, die den Grid-Track belegen.
- `auto`
  - : Als `min` repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} spezifiziert) der Grid-Elemente, die den Grid-Track belegen. Als `max` ist es identisch mit `max-content`. Im Gegensatz zu `max-content` ermöglicht es jedoch die Erweiterung des Tracks durch die {{cssxref("align-content")}}- und {{cssxref("justify-content")}}-Eigenschaftswerte wie `normal` und `stretch`.

### Formale Syntax

{{csssyntax}}

### CSS-Eigenschaften

Die `minmax()`-Funktion kann innerhalb verwendet werden:

- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-rows")}}

## Beispiele

### CSS

```css
#container {
  display: grid;
  grid-template-columns: minmax(min-content, 300px) minmax(200px, 1fr) 150px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### HTML

```html
<div id="container">
  <div>Item as wide as the content, but at most 300 pixels.</div>
  <div>Item with flexible width but a minimum of 200 pixels.</div>
  <div>Inflexible item of 150 pixels width.</div>
</div>
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte des Grid-Layouts: Track-Sizing mit minmax()](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#track_sizing_and_minmax)
- [CSS-Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- Video: [Introducing minmax()](https://gridbyexample.com/video/series-minmax/)
