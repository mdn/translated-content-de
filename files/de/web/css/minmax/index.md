---
title: minmax()
slug: Web/CSS/minmax
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`minmax()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert einen Größenbereich, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Sie wird mit [CSS-Grids](/de/docs/Web/CSS/CSS_grid_layout) verwendet.

{{InteractiveExample("CSS Demo: minmax()")}}

```css interactive-example-choice
grid-template-columns: minmax(20px, auto) 1fr 1fr;
```

```css interactive-example-choice
grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
```

```css interactive-example-choice
grid-template-columns: minmax(2ch, 10ch) 1fr 1fr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One. This column has more text in it.</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-gap: 10px;
  width: 250px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  text-align: left;
}
```

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

Jeder Parameter kann eine `<length>`, ein `<percentage>`, ein `<flex>`-Wert oder einer der Schlüsselwortwerte `max-content`, `min-content` oder `auto` sein.

Wenn _max_ < _min_ ist, wird _max_ ignoriert und `minmax(min,max)` wird als _min_ behandelt. Als Maximum setzt ein {{cssxref("flex_value","&lt;flex&gt;")}}-Wert den Flex-Faktor einer Grid-Spur; es ist als Minimum ungültig.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz bezogen auf die Inline-Größe des Grid-Containers in Spaltengitterspuren und die Blockgröße des Grid-Containers in Zeilengitterspuren. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss das `<percentage>` als `auto` behandelt werden. Der {{Glossary("user_agent", "User-Agent")}} kann die intrinsischen Beitragsgrößen der Spur zur Größe des Grid-Containers anpassen und die endgültige Größe der Spur um den minimalen Betrag erhöhen, der erforderlich ist, um den Prozentsatz zu erfüllen.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-dimensionierte Spur erhält einen Anteil des verbleibenden Raums im Verhältnis zu ihrem Flex-Faktor.
- `max-content`
  - : Repräsentiert den größten Max-Content-Beitrag der Grid-Elemente, die die Grid-Spur belegen.
- `min-content`
  - : Repräsentiert den größten Min-Content-Beitrag der Grid-Elemente, die die Grid-Spur belegen.
- `auto`
  - : Als `min` repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Grid-Elemente, die die Grid-Spur belegen.
    Als `max` ist es identisch mit `max-content`. Im Gegensatz zu `max-content` erlaubt es jedoch die Erweiterung der Spur durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} mit Werten wie `normal` und `stretch`.

## Formale Syntax

{{CSSSyntax}}

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

- [Grundkonzepte des Grid-Layouts: Spurgrößenanpassung mit minmax()](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#track_sizing_and_minmax)
- [CSS-Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- Video: [Einführung in minmax()](https://gridbyexample.com/video/series-minmax/)
