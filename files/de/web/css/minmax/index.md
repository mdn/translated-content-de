---
title: minmax()
slug: Web/CSS/minmax
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`minmax()`**-Funktion in [CSS](/de/docs/Web/CSS/CSS_Functions) definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Sie wird mit [CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) verwendet.

{{EmbedInteractiveExample("pages/css/function-minmax.html")}}

## Syntax

```css
/* <inflexible-breadth>, <track-breadth> Werte */
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)

/* <fixed-breadth>, <track-breadth> Werte */
minmax(200px, 1fr)
minmax(30%, 300px)
minmax(400px, 50%)
minmax(50%, min-content)
minmax(300px, max-content)
minmax(200px, auto)

/* <inflexible-breadth>, <fixed-breadth> Werte */
minmax(400px, 50%)
minmax(30%, 300px)
minmax(min-content, 200px)
minmax(max-content, 200px)
minmax(auto, 300px)
```

Eine Funktion, die zwei Parameter annimmt, _min_ und _max_.

Jeder Parameter kann eine `<length>`, ein `<percentage>`, ein `<flex>`-Wert oder einer der Schlüsselwort-Werte `max-content`, `min-content` oder `auto` sein.

Wenn _max_ < _min_ ist, wird _max_ ignoriert und `minmax(min,max)` wird als _min_ behandelt. Ein {{cssxref("flex_value","&lt;flex&gt;")}}-Wert als Maximum setzt den Flexfaktor einer Rasterspur; er ist als Minimum ungültig.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz, der relativ zur Inline-Größe des Grid-Containers bei Spaltengittern sowie zur Blockgröße des Grid-Containers bei Zeilengittern ist. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss der `<percentage>` als `auto` behandelt werden. Der {{glossary("user agent")}} kann die intrinsischen Größenbeiträge der Spur an die Größe des Grid-Containers anpassen und die endgültige Größe der Spur um das Mindestmaß erhöhen, das zur Einhaltung des Prozentsatzes führen würde.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-Größe einer Spur nimmt einen Anteil des verbleibenden Raums proportional zu ihrem Flex-Faktor ein.
- `max-content`
  - : Repräsentiert den größten max-content-Beitrag der Grid-Items, die die Spur belegen.
- `min-content`
  - : Repräsentiert den größten min-content-Beitrag der Grid-Items, die die Spur belegen.
- `auto`
  - : Als `min` repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} spezifiziert) der Grid-Items, die die Spur belegen.
    Als `max` ist es identisch mit `max-content`. Anders als `max-content` erlaubt es jedoch die Erweiterung der Spur durch die {{cssxref("align-content")}}- und {{cssxref("justify-content")}}-Eigenschaftenwerte wie `normal` und `stretch`.

### Formale Syntax

{{csssyntax}}

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
  <div>Element so breit wie der Inhalt, aber maximal 300 Pixel.</div>
  <div>Element mit flexibler Breite, aber mindestens 200 Pixel.</div>
  <div>Unflexibles Element mit einer Breite von 150 Pixel.</div>
</div>
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte des Grid-Layouts: Spurgrößenanpassung mit minmax()](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#track_sizing_and_minmax)
- [CSS-Gitter, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- Video: [Einführung von minmax()](https://gridbyexample.com/video/series-minmax/)
