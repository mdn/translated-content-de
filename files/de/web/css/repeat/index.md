---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) repräsentiert ein wiederholtes Fragment der [Spurliste](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), sodass eine große Anzahl von Spalten oder Zeilen, die ein wiederkehrendes Muster aufweisen, in einer kompakteren Form geschrieben werden können.

{{EmbedInteractiveExample("pages/css/function-repeat.html")}}

Diese Funktion kann in den CSS-Grid-Eigenschaften {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} verwendet werden.

## Syntax

```css
/* <track-repeat> values */
repeat(4, 1fr)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] 1fr [col-end])
repeat(4, [col-start] min-content [col-end])
repeat(4, [col-start] max-content [col-end])
repeat(4, [col-start] auto [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(4, [col-start] min-content [col-middle] max-content [col-end])

/* <auto-repeat> values */
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(auto-fill, [col-start] 250px [col-end])
repeat(auto-fit, [col-start] 250px [col-end])
repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])
repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])

/* <fixed-repeat> values */
repeat(4, 250px)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])
```

Die `repeat()`-Funktion nimmt zwei Argumente an:

- **Wiederholungsanzahl**: Das erste Argument gibt an, wie oft die Spurliste wiederholt werden soll. Es wird mit einem ganzzahligen Wert von 1 oder mehr angegeben oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit). Diese Schlüsselwortwerte wiederholen die Menge der Spuren so oft, wie es nötig ist, um den Grid-Container zu füllen.
- **Spuren**: Das zweite Argument gibt die Menge der zu wiederholenden Spuren an. Grundsätzlich besteht es aus einem oder mehreren Werten, wobei jeder Wert die Größe dieser Spur repräsentiert. Jede Größe wird entweder mit einem [`<track-size>`](#track-size)-Wert oder einem [`<fixed-size>`](#fixed-size)-Wert angegeben. Sie können auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) vor oder nach jeder Spur angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Spurgröße bereitstellen.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie nur Spurgrößen mit dem Typ [`<fixed-size>`](#fixed-size) und nicht mit dem Typ [`<track-size>`](#track-size) angeben. Dies gibt uns drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - eine ganze Zahl, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size)-Werte, um die Spurgrößen festzulegen.
- `<auto-repeat>`, das verwendet:
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit), um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size), um die Spurgrößen festzulegen.
- `<fixed-repeat>`, das verwendet:
  - eine ganze Zahl, um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size)-Werte, um die Spurgrößen festzulegen.

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, ist es nur erlaubt, `<fixed-repeat>` für zusätzliche `repeat()`-Aufrufe zu verwenden. Zum Beispiel ist dies ungültig, da es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Diese wird nur mit dem [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)-Schlüsselwort verwendet und spezifiziert nur Liniennamen, keine Spurgrößen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
      - `max`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Raumes proportional zu ihrem Flex-Faktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive Ganzzahllänge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}}-Werte, durch Leerzeichen getrennt und in eckige Klammern eingeschlossen, wie folgt: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz relativ zur Inline-Größe des Grid-Containers bei Spalten-Spuren und zur Blockgröße des Grid-Containers bei Reihen-Spuren. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss der `<percentage>` als `auto` behandelt werden. Der User-Agent kann die intrinsischen Größenbeiträge der Spur an die Größe des Grid-Containers anpassen und die endgültige Größe der Spur um den minimalen Betrag erhöhen, der erforderlich wäre, um den Prozentsatz zu ehren.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("fit-content_function", "fit-content()")}}-Funktion, der ein {{cssxref("&lt;length-percentage&gt;")}}-Wert übergeben wird.
- `auto`
  - : Als Maximum identisch zu `max-content`. Als Minimum repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Grid-Elemente, die die Grid-Spur belegen.
- `auto-fill`
  - : Wenn der Grid-Container eine bestimmte oder maximale Größe in der relevanten Achse hat, dann ist die Anzahl der Wiederholungen die größtmögliche positive Ganzzahl, die nicht dazu führt, dass das Grid seinen Grid-Container überläuft. Jede Spur wird als ihre maximale Spurzgrößenfunktion behandelt (jeder unabhängige Wert, der verwendet wird, um `grid-template-rows` oder `grid-template-columns` zu definieren), falls diese bestimmt ist. Andernfalls als ihre minimale Spurzgrößenfunktion, wobei der Abstand zwischen den Gittern berücksichtigt wird. Wenn jede Anzahl von Wiederholungen überlaufen würde, dann ist die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine bestimmte Mindestgröße in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinstmögliche positive Ganzzahl, die dieses Mindestkriterium erfüllt. Andernfalls wird die angegebene Spurliste nur einmal wiederholt.
- `auto-fit`

  - : Verhält sich genauso wie `auto-fill`, außer dass alle leeren wiederholten Spuren nach dem Platzieren der Gitterelemente zusammengeklappt werden. Eine leere Spur ist eine, in die keine in-Fluss-Gitterelemente eingefügt oder darüber hinaus platziert werden. (Dies kann dazu führen, dass alle Spuren zusammengeklappt werden, wenn sie alle leer sind.)

    Eine zusammengeklappte Spur wird als hätte sie eine einzelne feste Spurzgrößenfunktion von `0px` behandelt, und die Abstände auf beiden Seiten davon kollabieren.

    Für den Zweck, die Anzahl der automatisch wiederholten Spuren zu finden, rundet der User-Agent die Spurgröße auf einen vom User-Agent spezifizierten Wert (z.B. `1px`) ab, um eine Division durch Null zu vermeiden.

- `max-content`
  - : Repräsentiert den größten max-content-Beitrag der Gitterelemente, die die Grid-Spur belegen.
- `min-content`
  - : Repräsentiert den größten min-content-Beitrag der Gitterelemente, die die Grid-Spur belegen.

## Formale Syntax

{{CSSSyntaxRaw(`<track-repeat> <auto-repeat> <fixed-repeat> <name-repeat>`)}}

## Beispiele

### Festlegen von Grid-Spalten mit repeat()

#### HTML

```html
<div id="container">
  <div>This item is 50 pixels wide.</div>
  <div>Item with flexible width.</div>
  <div>This item is 50 pixels wide.</div>
  <div>Item with flexible width.</div>
  <div>Inflexible item of 100 pixels width.</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: repeat(2, 50px 1fr) 100px;
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

#### Ergebnis

{{EmbedLiveSample("Specifying_grid_columns_using_repeat", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche: Grid-Definition-Abkürzungen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
