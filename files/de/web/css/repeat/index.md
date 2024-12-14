---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) stellt ein wiederkehrendes Fragment der [Track-Liste](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) dar und ermöglicht es, eine große Anzahl von Spalten oder Reihen mit einem wiederkehrenden Muster in kompakterer Form zu schreiben.

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

- **Wiederholungsanzahl**: Das erste Argument gibt an, wie oft die Track-Liste wiederholt werden soll. Es wird mit einem ganzzahligen Wert von 1 oder mehr oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) angegeben. Diese Schlüsselwortwerte wiederholen das Set der Tracks so oft wie nötig, um den Grid-Container zu füllen.
- **Tracks**: Das zweite Argument gibt das Set der Tracks an, das wiederholt wird. Grundsätzlich besteht es aus einem oder mehreren Werten, wobei jeder Wert die Größe dieses Tracks darstellt. Jede Größe wird entweder mit einem [`<track-size>`](#track-size)-Wert oder einem [`<fixed-size>`](#fixed-size)-Wert angegeben. Sie können auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) vor oder nach jedem Track angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Track-Größe bereitstellen.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie die Track-Größen nur mit dem Typ [`<fixed-size>`](#fixed-size) angeben, nicht mit dem Typ [`<track-size>`](#track-size). Dies gibt uns drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - einen ganzzahligen Wert, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size)-Werte, um die Track-Größen festzulegen.
- `<auto-repeat>`, das verwendet
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit), um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size), um die Track-Größen festzulegen.
- `<fixed-repeat>`, das verwendet:
  - einen ganzzahligen Wert, um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size)-Werte, um die Track-Größen festzulegen.

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, darf sie nur `<fixed-repeat>` für zusätzliche `repeat()`-Aufrufe verwenden. Zum Beispiel ist dies ungültig, da es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Sie wird nur mit dem Schlüsselwort [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) verwendet und gibt nur Liniennamen an, keine Track-Größen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` als {{cssxref("&lt;length-percentage&gt;")}}-Wert
      - `max` als einem von {{cssxref("&lt;length-percentage&gt;")}}-Wert, einem {{cssxref("&lt;flex&gt;")}}-Wert oder einem der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` als {{cssxref("&lt;length-percentage&gt;")}}-Wert oder einem der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` als {{cssxref("&lt;length-percentage&gt;")}}-Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-große Track nimmt einen Anteil des verbleibenden Raums im Verhältnis zu seinem Flex-Faktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive Ganzzahl-Länge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}}-Werte, durch Leerzeichen getrennt und in eckigen Klammern eingeschlossen, wie folgt: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz relativ zur Inline-Größe des Grid-Containers bei Spalten-Grid-Tracks und zur Blockgröße des Grid-Containers bei Reihen-Grid-Tracks. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, muss der `<percentage>` als `auto` behandelt werden. Der User-Agent kann die intrinsischen Größenbeiträge des Tracks an die Größe des Grid-Containers anpassen und die endgültige Größe des Tracks um den minimalen Betrag erhöhen, der zur Erfüllung des Prozentsatzes erforderlich wäre.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` als {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` als {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("fit-content_function", "fit-content()")}}-Funktion, die einen {{cssxref("&lt;length-percentage&gt;")}}-Wert übergeben bekommt.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert es die größte Mindestgröße (wie in {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Grid-Elemente, die den Grid-Track belegen.
- `auto-fill`
  - : Wenn der Grid-Container eine feste oder maximale Größe in der betreffenden Achse hat, dann ist die Anzahl der Wiederholungen die größtmögliche positive Ganzzahl, die den Grid nicht über seinen Grid-Container hinausfließen lässt. Dabei wird jede Spur als ihre maximale Spurgrößenfunktion betrachtet (jeder unabhängige Wert, der zur Definition von `grid-template-rows` oder `grid-template-columns` verwendet wird), sofern diese festgelegt ist. Andernfalls als ihre minimale Spurgrößenfunktion und unter Einbeziehung des grid-gap. Wenn jede Anzahl von Wiederholungen zu einem Überlauf führen würde, dann beträgt die Wiederholung `1`. Ansonsten, wenn der Grid-Container eine definierte Mindestgröße in der betreffenden Achse hat, ist die Anzahl der Wiederholungen die kleinstmögliche positive Ganzzahl, die diese Mindestanforderung erfüllt. Andernfalls wird die angegebene Track-Liste nur einmal wiederholt.
- `auto-fit`

  - : Verhält sich genauso wie `auto-fill`, außer dass nach dem Platzieren der Grid-Elemente alle leeren wiederholten Tracks eingeklappt werden. Ein leerer Track ist einer, in den keine Flow-Grid-Elemente platziert sind oder darüber hinwegspannen. (Dies kann dazu führen, dass alle Tracks eingeklappt werden, wenn sie alle leer sind.)

    Ein eingeklappter Track wird als eine einzelne feste Spurgrößenfunktion von `0px` behandelt, und die Rinnen auf beiden Seiten davon kollabieren.

    Zum Zwecke der Bestimmung der Anzahl von automatisch wiederholten Tracks rundet der User-Agent die Track-Größe auf einen vom User-Agent bestimmten Wert (z.B. `1px`) ab, um eine Division durch Null zu vermeiden.

- `max-content`
  - : Repräsentiert den größten max-content-Beitrag der Grid-Elemente, die den Grid-Track belegen.
- `min-content`
  - : Repräsentiert den größten min-content-Beitrag der Grid-Elemente, die den Grid-Track belegen.

## Formale Syntax

{{CSSSyntax}}

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
- [Grid-Template-Bereiche: Grid-Definition-Kurzformen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
