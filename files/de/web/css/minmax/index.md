---
title: minmax()
slug: Web/CSS/minmax
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`minmax()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Sie wird mit [CSS-Grids](/de/docs/Web/CSS/CSS_grid_layout) verwendet.

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

Eine Funktion, die zwei Parameter annimmt, _min_ und _max_.

Jeder Parameter kann eine \<length\>, ein \<percentage\>, ein \<flex\>-Wert oder einer der Schlüsselwortwerte `max-content`, `min-content` oder `auto` sein.

Wenn _max_ < _min_ ist, wird _max_ ignoriert und `minmax(min,max)` wird als _min_ behandelt. Als Maximum setzt ein {{cssxref("flex_value","&lt;flex&gt;")}}-Wert den Flexfaktor einer Grid-Spur; es ist als Minimum ungültig.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz, relativ zur Inline-Größe des Grid-Containers in Spalten-Grid-Spuren und zur Blockgröße des Grid-Containers in Zeilen-Grid-Spuren. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss das `<percentage>` als `auto` behandelt werden. Der {{Glossary("user_agent", "User-Agent")}} kann die intrinsischen Größe-Beteiligungen der Spur an die Größe des Grid-Containers anpassen und die endgültige Größe der Spur um den kleinsten Betrag erhöhen, der zur Einhaltung des Prozentsatzes erforderlich ist.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flexfaktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Raums proportional zu ihrem Flexfaktor ein.
- `max-content`
  - : Stellt den größten max-content-Beitrag der Grid-Elemente dar, die die Grid-Spur besetzen.
- `min-content`
  - : Stellt den größten min-content-Beitrag der Grid-Elemente dar, die die Grid-Spur besetzen.
- `auto`
  - : Als `min` repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} vorgegeben) der Grid-Elemente, die die Grid-Spur besetzen.
    Als `max` ist es identisch mit `max-content`. Im Gegensatz zu `max-content` erlaubt es jedoch die Erweiterung der Spur durch die Werte der Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} wie `normal` und `stretch`.

## Formale Syntax

{{CSSSyntax}}

### CSS-Eigenschaften

Die `minmax()`-Funktion kann verwendet werden in:

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

- [Grundkonzepte des Grid-Layouts: Spurgrößen mit minmax()](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#track_sizing_and_minmax)
- [CSS-Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- Video: [Einführung in minmax()](https://gridbyexample.com/video/series-minmax/)
