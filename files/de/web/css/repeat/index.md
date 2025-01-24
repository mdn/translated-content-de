---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: 49b29ec3b6fb67dd1d10000117747a9ed078f114
---

{{CSSRef}}

Die **`repeat()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) stellt ein wiederholtes Fragment der [Track-Liste](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) dar und ermöglicht es, eine große Anzahl von Spalten oder Zeilen, die ein wiederkehrendes Muster aufweisen, in kompakterer Form darzustellen.

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

Die `repeat()`-Funktion nimmt zwei Argumente:

- **Wiederholungsanzahl**: Das erste Argument gibt die Anzahl an, wie oft die Track-Liste wiederholt werden soll. Es wird mit einem ganzzahligen Wert von 1 oder mehr angegeben oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit). Diese Schlüsselwortwerte wiederholen die Menge der Tracks so oft wie nötig, um den Grid-Container auszufüllen.
- **Tracks**: Das zweite Argument spezifiziert die Menge der Tracks, die wiederholt werden. Fundamentell besteht dies aus einem oder mehreren Werten, wobei jeder Wert die Größe dieses Tracks darstellt. Jede Größe wird entweder mit einem [`<track-size>`](#track-size)-Wert oder einem [`<fixed-size>`](#fixed-size)-Wert angegeben. Sie können ein oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) vor oder nach jedem Track angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Track-Größe angeben.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie Track-Größen nur mit dem Typ [`<fixed-size>`](#fixed-size) angeben, nicht mit dem Typ [`<track-size>`](#track-size). Dies gibt uns drei Hauptsyntax-Formen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - eine Ganzzahl, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size)-Werte zur Festlegung von Track-Größen.
- `<auto-repeat>`, das verwendet:
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit), um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size), um Track-Größen festzulegen.
- `<fixed-repeat>`, das verwendet:
  - eine Ganzzahl, um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size)-Werte zur Festlegung von Track-Größen.

Wenn eine Eigenschaften-Deklaration `<auto-repeat>` verwendet, ist es nur erlaubt, `<fixed-repeat>` für zusätzliche `repeat()`-Aufrufe zu verwenden. Zum Beispiel ist dies ungültig, da es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Sie wird nur mit dem Schlüsselwort [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) verwendet und spezifiziert nur Liniennamen, nicht Track-Größen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
      - `max` angegeben als einer der folgenden: ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-große Track nimmt einen Anteil des verbleibenden Raumes proportional zu seinem Flex-Faktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive ganze Zahl als Länge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}}-Werte, durch Leerzeichen getrennt und in eckigen Klammern eingeschlossen, wie folgt: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz relativ zur Inline-Größe des Grid-Containers in Spaltengrid-Tracks und zur Blockgröße des Grid-Containers in Reihengrid-Tracks. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, muss das `<percentage>` als `auto` behandelt werden. Der User-Agent kann die intrinsischen Größenbeiträge des Tracks zur Größe des Grid-Containers anpassen und die endgültige Größe des Tracks um das Minimum erhöhen, das erforderlich wäre, um den Prozentsatz zu erfüllen.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
    - eine {{cssxref("fit-content_function", "fit-content()")}}-Funktion, die einen {{cssxref("&lt;length-percentage&gt;")}}-Wert übergibt.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Grid-Elemente, die den Grid-Track belegen.
- `auto-fill`
  - : Wenn der Grid-Container eine bestimmte oder maximale Größe in der relevanten Achse hat, dann ist die Anzahl der Wiederholungen die größtmögliche positive Ganzzahl, die nicht dazu führt, dass das Grid seinen Grid-Container überläuft. Behandelt jeden Track als seine maximale Track-Größe-Funktion (jeder unabhängige Wert, der verwendet wird, um `grid-template-rows` oder `grid-template-columns` zu definieren), falls dieser bestimmt ist. Andernfalls, als seine minimale Track-Größe-Funktion, unter Berücksichtigung von grid-gap. Wenn jede Anzahl von Wiederholungen überlaufen würde, dann ist die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine bestimmte Mindestgröße in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinstmögliche positive Ganzzahl, die diese Mindestanforderung erfüllt. Andernfalls wiederholt sich die angegebene Track-Liste nur einmal.
- `auto-fit`

  - : Verhält sich gleich wie `auto-fill`, außer dass alle leeren wiederholten Tracks nach dem Platzieren der Grid-Elemente zusammengeklappt werden. Ein leerer Track ist einer ohne im Fluss befindliche Grid-Elemente, die darin platziert oder darüber gespannt sind. (Dies kann dazu führen, dass alle Tracks zusammengeklappt werden, wenn sie alle leer sind.)

    Ein zusammengeklappter Track wird als eine einzelne feste Track-Größe-Funktion von `0px` behandelt, und die Rinnen auf beiden Seiten davon kollabieren.

    Für die Berechnung der Anzahl autodurchgeführter Tracks rundet der User-Agent die Track-Größe auf einen vom User-Agenten angegebenen Wert (z.B. `1px`) ab, um eine Division durch Null zu vermeiden.

- `max-content`
  - : Repräsentiert den größten max-content-Beitrag der Grid-Elemente, die den Grid-Track belegen.
- `min-content`
  - : Repräsentiert den größten min-content-Beitrag der Grid-Elemente, die den Grid-Track belegen.

## Formelle Syntax

{{CSSSyntaxRaw(`<track-repeat> <auto-repeat> <fixed-repeat> <name-repeat>`)}}

## Beispiele

### Grid-Spalten mit repeat() spezifizieren

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
- [Grid-Template-Bereiche: Grid-Definitions-Kurzformen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
