---
title: "`minmax()`-CSS-Funktion"
short-title: minmax()
slug: Web/CSS/Reference/Values/minmax
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die **`minmax()`**-[CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert einen Größenbereich, der mindestens _min_ und höchstens _max_ beträgt. Sie wird mit [CSS-Grids](/de/docs/Web/CSS/Guides/Grid_layout) verwendet.

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
  background-color: rgb(0 0 255 / 0.2);
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

Die Funktion nimmt zwei Parameter entgegen: _min_ und _max_.

Jeder Parameter kann ein `<length>`, ein `<percentage>` oder einer der Schlüsselwortwerte `max-content`, `min-content` oder `auto` sein.

Der zweite Parameter _max_ akzeptiert außerdem {{cssxref("flex_value","&lt;flex&gt;")}}-Werte. (`fr`-Einheiten können nur für _max_ verwendet werden und sind für _min_ ungültig.)

Wenn _max_ < _min_ ist, wird _max_ ignoriert und `minmax(min,max)` als _min_ behandelt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht negativer Prozentwert, der sich bei Spalten-Tracks auf die Inline-Größe des Grid-Containers und bei Zeilen-Tracks auf dessen Block-Größe bezieht. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, muss `<percentage>` als `auto` behandelt werden. Der {{Glossary("user_agent", "User Agent")}} kann die intrinsischen Größenbeiträge des Tracks zur Größe des Grid-Containers anpassen und die endgültige Größe des Tracks um den Mindestbetrag erhöhen, der erforderlich ist, um den Prozentwert einzuhalten.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht negative Größe mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder mit `<flex>` dimensionierte Track erhält einen Anteil des verbleibenden Platzes proportional zu seinem Flex-Faktor.
- {{cssxref("max-content")}}
  - : Repräsentiert den größten max-content-Beitrag der Grid-Elemente, die den Grid-Track belegen.
- {{cssxref("min-content")}}
  - : Repräsentiert den größten min-content-Beitrag der Grid-Elemente, die den Grid-Track belegen.
- `auto`
  - : Als `min` repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} festgelegt) der Grid-Elemente, die den Grid-Track belegen.
    Als `max` ist es identisch mit `max-content`. Anders als `max-content` ermöglicht es jedoch, den Track durch Werte der Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} wie `normal` und `stretch` zu vergrößern.

## Formale Syntax

{{CSSSyntax}}

### CSS-Eigenschaften

Die Funktion `minmax()` kann innerhalb folgender Eigenschaften verwendet werden:

- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-rows")}}

## Beispiele

### HTML

```html
<div id="container">
  <div>Item as wide as the content, but at most 300 pixels.</div>
  <div>Item with flexible width but a minimum of 200 pixels.</div>
  <div>Inflexible item of 150 pixels width.</div>
</div>
```

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

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte des Grid-Layouts: Track-Größen mit minmax() festlegen](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#track_sizing_and_minmax)
- [CSS-Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- Video: [Einführung in minmax()](https://gridbyexample.com/video/series-minmax/)
