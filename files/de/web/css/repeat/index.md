---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: ef337c3cd46f1e8f50a1a2903fad7f4b34f91919
---

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) repräsentiert ein wiederholtes Fragment der [Track-Liste](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) und ermöglicht es, eine große Anzahl von Spalten oder Zeilen, die ein wiederkehrendes Muster aufweisen, in kompakterer Form zu schreiben.

{{InteractiveExample("CSS Demo: repeat()")}}

```css interactive-example-choice
grid-template-columns: repeat(2, 60px);
```

```css interactive-example-choice
grid-template-columns: 1fr repeat(2, 60px);
```

```css interactive-example-choice
grid-template-columns: repeat(2, 20px 1fr);
```

```css interactive-example-choice
grid-template-columns: repeat(auto-fill, 40px);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

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

- **repeat count**: Das erste Argument gibt an, wie oft die Track-Liste wiederholt werden soll. Es wird mit einem ganzzahligen Wert von 1 oder mehr angegeben, oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit). Diese Schlüsselwortwerte wiederholen die Track-Sätze so oft, wie es erforderlich ist, um den Grid-Container zu füllen.
- **tracks**: Das zweite Argument gibt den Satz von Tracks an, der wiederholt wird. Grundsätzlich besteht dies aus einem oder mehreren Werten, wobei jeder Wert die Größe dieses Tracks darstellt. Jede Größe wird entweder mit einem [`<track-size>`](#track-size) Wert oder einem [`<fixed-size>`](#fixed-size) Wert angegeben. Sie können auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) vor oder nach jedem Track angeben, indem Sie [`<line-names>`](#line-names) Werte vor und/oder nach der Track-Größe angeben.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie die Track-Größen nur mit dem [`<fixed-size>`](#fixed-size) Typ angeben, nicht mit dem [`<track-size>`](#track-size) Typ. Dies gibt uns drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, die verwendet:
  - eine ganze Zahl, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size) Werte, um die Track-Größen festzulegen.
- `<auto-repeat>`, die verwendet
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) zur Festlegung der Wiederholungsanzahl
  - [`<fixed-size>`](#fixed-size) zur Festlegung der Track-Größen.
- `<fixed-repeat>`, die verwendet:
  - eine ganze Zahl, um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size) Werte, um die Track-Größen festzulegen.

Wenn eine Eigenschaftserklärung `<auto-repeat>` verwendet, ist es nur erlaubt, `<fixed-repeat>` für zusätzliche `repeat()`-Aufrufe zu nutzen. Zum Beispiel ist dies ungültig, da es die `<auto-repeat>` Form mit der `<track-repeat>` Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Sie wird nur mit dem [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) Schlüsselwort verwendet und spezifiziert nur Liniennamen, keine Track-Größen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - Ein {{cssxref("&lt;length-percentage&gt;")}} Wert
    - Eine {{cssxref("minmax", "minmax()")}} Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - Eine {{cssxref("minmax", "minmax()")}} Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jede `<flex>`-Größe eines Tracks nimmt einen Anteil des verbleibenden Raums proportional zu ihrem Flex-Faktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive ganze Zahl als Länge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}} Werte, durch Leerzeichen getrennt und in eckigen Klammern eingeschlossen, so wie: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz relativ zur Inline-Größe des Grid-Containers in Spaltengrids und zur Blockgröße des Grid-Containers in Zeilengrids. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, muss der `<percentage>` als `auto` behandelt werden. Der User-Agent kann die intrinsischen Größenbeiträge des Tracks zur Größe des Grid-Containers anpassen und die endgültige Größe des Tracks um das Minimum erhöhen, das erforderlich ist, um den Prozentsatz zu erfüllen.
- `<track-size>`
  - : Eine der folgenden Formen:
    - Ein {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - Eine {{cssxref("minmax", "minmax()")}} Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - Eine {{cssxref("fit-content_function", "fit-content()")}} Funktion, die einen {{cssxref("&lt;length-percentage&gt;")}} Wert übergibt.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert es die größte Mindestgröße (wie angegeben durch {{cssxref("min-width")}}/{{cssxref("min-height")}}) der Grid-Elemente, die den Grid-Track belegen.
- `auto-fill`
  - : Wenn der Grid-Container eine definierte oder maximale Größe in der relevanten Achse hat, ist die Anzahl der Wiederholungen die größtmögliche positive ganze Zahl, die nicht dazu führt, dass das Grid seinen Grid-Container überläuft. Unter der Annahme, dass jeder Track seine maximale Sizing-Funktion verwendet (jeder unabhängige Wert, der zur Definition von `grid-template-rows` oder `grid-template-columns` verwendet wird), wenn dies definiert ist. Andernfalls als seine minimale Sizing-Funktion und unter Berücksichtigung von grid-gap. Wenn jede Anzahl von Wiederholungen ein Überlaufen verursachen würde, dann ist die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine definierte minimale Größe in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinstmögliche positive ganze Zahl, die dieser Mindestanforderung entspricht. Andernfalls wird die angegebene Track-Liste nur einmal wiederholt.
- `auto-fit`
  - : Verhält sich genauso wie `auto-fill`, außer dass alle wiederholten, leeren Tracks nach dem Platzieren der Grid-Elemente zusammengeklappt werden. Ein leerer Track ist einer, in den keine inflow Grid-Elemente platziert oder über ihn gespannt sind. (Dies kann dazu führen, dass alle Tracks zusammengeklappt werden, wenn sie alle leer sind.)

    Ein zusammengekappter Track wird als eine einzelne feste Sizing-Funktion von `0px` behandelt, und die Abstände zu beiden Seiten davon fallen zusammen.

    Für die Festlegung der Anzahl der automatisch wiederholten Tracks rundet der User-Agent die Track-Größe auf einen vom User-Agenten festgelegten Wert ab (z. B. `1px`), um eine Division durch null zu vermeiden.

- {{cssxref("max-content")}}
  - : Repräsentiert den größten max-content Beitrag der Grid-Elemente, die den Grid-Track belegen.
- {{cssxref("min-content")}}
  - : Repräsentiert den größten min-content Beitrag der Grid-Elemente, die den Grid-Track belegen.

## Formale Syntax

{{CSSSyntaxRaw(`<track-repeat> <auto-repeat> <fixed-repeat> <name-repeat>`)}}

## Beispiele

### Spezifizieren von Grid-Spalten mittels repeat()

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
- [Linienbasiertes Platzieren mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche: Grid-Definition Shorthands](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
