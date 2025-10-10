---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) repräsentiert ein wiederholtes Fragment der [Spurliste](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), wodurch eine große Anzahl von Spalten oder Reihen, die ein wiederkehrendes Muster aufweisen, in kompakterer Form geschrieben werden kann.

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

Die `repeat()`-Funktion nimmt zwei Argumente an:

- **Wiederholungsanzahl**: Das erste Argument gibt an, wie oft die Spurliste wiederholt werden soll. Es wird mit einem Ganzzahlwert von 1 oder mehr spezifiziert oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit). Diese Schlüsselwortwerte wiederholen das Set von Spuren so oft, wie nötig, um den Grid-Container zu füllen.
- **Spuren**: Das zweite Argument gibt das Set von Spuren an, das wiederholt wird. Grundsätzlich besteht dies aus einem oder mehreren Werten, wobei jeder Wert die Größe dieser Spur darstellt. Jede Größe wird entweder unter Verwendung eines [`<track-size>`](#track-size)-Werts oder eines [`<fixed-size>`](#fixed-size)-Werts angegeben. Sie können auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) vor oder nach jeder Spur angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Spurgröße bereitstellen.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie Spurgrößen nur mit dem Typ [`<fixed-size>`](#fixed-size) angeben, nicht mit dem Typ [`<track-size>`](#track-size). Dies gibt uns drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - eine Ganzzahl, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size)-Werte, um Spurgrößen festzulegen.
- `<auto-repeat>`, das verwendet
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) für die Wiederholungsanzahl
  - [`<fixed-size>`](#fixed-size) zur Festlegung der Spurgrößen.
- `<fixed-repeat>`, das verwendet:
  - eine Ganzzahl zur Festlegung der Wiederholungsanzahl
  - [`<fixed-size>`](#fixed-size)-Werte zur Festlegung der Spurgrößen.

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, darf nur `<fixed-repeat>` für zusätzliche `repeat()`-Aufrufe verwendet werden. Zum Beispiel ist dies ungültig, da es die Form `<auto-repeat>` mit der Form `<track-repeat>` kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Sie wird nur mit dem Schlüsselwort [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) verwendet und gibt nur Liniennamen an, nicht Spurgrößen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert,
      - `max` angegeben als einer von einem {{cssxref("&lt;length-percentage&gt;")}}-Wert, einem {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-dimensionierte Spur nimmt einen Teil des restlichen Platzes proportional zu ihrem Flex-Faktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive Ganzzahlenlänge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}}-Werte, leerzeichengetrennt und in eckigen Klammern eingeschlossen, wie folgt: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz relativ zur Inline-Größe des Grid-Containers bei Spaltengitterspuren und der Blockgröße des Grid-Containers bei Reihengitterspuren. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss das `<percentage>` als `auto` behandelt werden. Der User-Agent kann die intrinsischen Größenbeiträge der Spur zur Größe des Grid-Containers anpassen und die endgültige Größe der Spur durch die minimal erforderliche Menge erhöhen, um dem Prozentsatz gerecht zu werden.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("fit-content_function", "fit-content()")}}-Funktion, die einen {{cssxref("&lt;length-percentage&gt;")}}-Wert übergibt.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert sie die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Grid-Elemente, die den Grid-Track belegen.
- `auto-fill`
  - : Wenn der Grid-Container eine definierte oder maximale Größe entlang der relevanten Achse hat, dann ist die Anzahl der Wiederholungen die größtmögliche positive ganze Zahl, die nicht dazu führt, dass das Grid seinen Grid-Container überläuft. Behandelt jede Spur als ihre maximale Spurgrößenfunktion (jeder unabhängige Wert, der zur Definition von `grid-template-rows` oder `grid-template-columns` verwendet wird), wenn das definiert ist. Andernfalls als ihre minimale Spurgrößenfunktion und unter Berücksichtigung des Gitterabstands. Wenn jede Anzahl von Wiederholungen überlaufen würde, dann ist die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine definierte minimale Größe entlang der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinste mögliche positive ganze Zahl, die diese Mindestanforderung erfüllt. Andernfalls wiederholt sich die angegebene Spurliste nur einmal.
- `auto-fit`
  - : Verhält sich genauso wie `auto-fill`, außer dass nach dem Platzieren der Grid-Elemente alle leeren wiederholten Spuren kollabieren. Eine leere Spur ist eine, in die keine inflow Grid-Elemente platziert sind oder die sich darüber erstrecken. (Dies kann dazu führen, dass alle Spuren kollabieren, wenn sie alle leer sind.)

    Eine kollabierte Spur wird so behandelt, als hätte sie eine einzige feste Spurgrößenfunktion von `0px`, und die Abstände auf beiden Seiten davon kollabieren.

    Zur Bestimmung der Anzahl der automatisch wiederholten Spuren rundet der User-Agent die Spurgröße auf einen vom User-Agent festgelegten Wert (z. B. `1px`), um eine Division durch null zu vermeiden.

- {{cssxref("max-content")}}
  - : Repräsentiert den größten `max-content`-Beitrag der Grid-Elemente, die den Grid-Track belegen.
- {{cssxref("min-content")}}
  - : Repräsentiert den größten `min-content`-Beitrag der Grid-Elemente, die den Grid-Track belegen.

## Formale Syntax

{{CSSSyntaxRaw(`<track-repeat> <auto-repeat> <fixed-repeat> <name-repeat>`)}}

## Beispiele

### Spezifizierung von Grid-Spalten mit repeat()

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
- [Grid-Template-Bereiche: Grid-Definitions-Shorthands](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
