---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) steht für ein wiederholtes Fragment der [Spur-Liste](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) und ermöglicht es, eine große Anzahl von Spalten oder Zeilen, die ein wiederkehrendes Muster aufweisen, in kompakter Form zu schreiben.

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
  background-color: rgba(0, 0, 255, 0.2);
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

Die `repeat()` Funktion nimmt zwei Argumente:

- **Wiederholungsanzahl**: das erste Argument gibt an, wie oft die Spur-Liste wiederholt werden soll. Sie wird mit einem Ganzzahlenwert von 1 oder mehr, oder mit den Schlüsselwörtern [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) angegeben. Diese Schlüsselwörter wiederholen die Spurengruppe so oft wie nötig, um den Grid-Container zu füllen.
- **Spuren**: das zweite Argument legt die Gruppe von Spuren fest, die wiederholt werden. Grundlegend besteht dies aus einem oder mehreren Werten, wobei jeder Wert die Größe dieser Spur darstellt. Jede Größe wird entweder durch einen [`<track-size>`](#track-size)-Wert oder einen [`<fixed-size>`](#fixed-size)-Wert angegeben. Sie können auch vor oder nach jeder Spur einen oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Spurgröße bereitstellen.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) zur Festlegung der Wiederholungsanzahl verwenden, dürfen Sie nur Spurgrößen mit dem Typ [`<fixed-size>`](#fixed-size) angeben, nicht mit dem Typ [`<track-size>`](#track-size). Dies gibt uns drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - Eine Ganzzahl zur Festlegung der Wiederholungsanzahl
  - [`<track-size>`](#track-size)-Werte zur Festlegung von Spurgrößen.
- `<auto-repeat>`, das verwendet:
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) zur Festlegung der Wiederholungsanzahl
  - [`<fixed-size>`](#fixed-size), um Spurgrößen festzulegen.
- `<fixed-repeat>`, das verwendet:
  - Eine Ganzzahl zur Festlegung der Wiederholungsanzahl
  - [`<fixed-size>`](#fixed-size)-Werte zur Festlegung von Spurgrößen.

Wenn dann eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, darf sie nur `<fixed-repeat>` für zusätzliche `repeat()`-Aufrufe verwenden. Zum Beispiel ist dies ungültig, weil es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Diese wird nur mit dem Schlüsselwort [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) verwendet und gibt nur Liniennamen an, keine Spurgrößen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
      - `max` angegeben als einer von einem {{cssxref("&lt;length-percentage&gt;")}}-Wert, einem {{cssxref("&lt;flex&gt;")}}-Wert oder einem der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flexfaktor der Spur angibt. Jede <flex>-größenangepasste Spur nimmt einen Anteil des verbleibenden Raums proportional zu ihrem Flexfaktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive Ganzzahllänge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}}-Werte, durch Leerzeichen getrennt und in eckige Klammern gesetzt, wie so: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz im Verhältnis zur Inline-Größe des Grid-Containers in Spalten-Spurrastern und zur Blockgröße des Grid-Containers in Zeilen-Spurrastern. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss der `<percentage>` als `auto` behandelt werden. Der Benutzer-Agent kann die intrinsischen Größenbeiträge der Spur zur Größe des Grid-Containers anpassen und die endgültige Größe der Spur um den minimalen Betrag erhöhen, der zur Einhaltung des Prozentsatzes führen würde.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("fit-content_function", "fit-content()")}}-Funktion, der ein {{cssxref("&lt;length-percentage&gt;")}}-Wert übergeben wird.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert es die größte Minimalgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Grid-Items, die die Grid-Spur belegen.
- `auto-fill`
  - : Wenn der Grid-Container eine bestimmte oder maximale Größe in der relevanten Achse hat, dann ist die Anzahl der Wiederholungen die größte mögliche positive Ganzzahl, die nicht dazu führt, dass das Gitter seinen Grid-Container überschreitet. Jede Spur wird als ihre maximale Spurgrößenfunktion betrachtet (jeder unabhängige Wert, der zum Definieren von `grid-template-rows` oder `grid-template-columns` verwendet wird), wenn diese bestimmt ist. Andernfalls als ihre minimale Spurgrößenfunktion und unter Berücksichtigung des grid-gap. Wenn jede Anzahl von Wiederholungen überlaufen würde, dann ist die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine bestimmte Mindestgröße in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinste mögliche positive Ganzzahl, die diese Mindestanforderung erfüllt. Andernfalls wird die angegebene Spur-Liste nur einmal wiederholt.
- `auto-fit`

  - : Verhält sich wie `auto-fill`, außer dass nach dem Platzieren der Grid-Items alle leeren wiederholten Spuren zusammengeklappt werden. Eine leere Spur ist eine, in die keine in den Fluss befindlichen Grid-Items platziert wurden oder die sich über sie erstrecken. (Dies kann dazu führen, dass alle Spuren zusammengeklappt werden, wenn sie alle leer sind.)

    Eine zusammengeklappte Spur wird behandelt, als hätte sie eine einzige feste Spurgrößenfunktion von `0px`, und die Rinnen auf jeder Seite davon kollabieren.

    Zum Zweck des Findens der Anzahl von automatisch wiederholten Spuren rundet der Benutzer-Agent die Spurgröße auf einen vom Benutzer-Agenten spezifizierten Wert ab (z. B. `1px`), um eine Division durch null zu vermeiden.

- `max-content`
  - : Repräsentiert den größten Max-Content-Beitrag der Grid-Items, die die Grid-Spur belegen.
- `min-content`
  - : Repräsentiert den größten Min-Content-Beitrag der Grid-Items, die die Grid-Spur belegen.

## Formale Syntax

{{CSSSyntaxRaw(`<track-repeat> <auto-repeat> <fixed-repeat> <name-repeat>`)}}

## Beispiele

### Spalten der Grid mit repeat() festlegen

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
- [Grid-Template-Bereiche: Gitterdefinitionen als Kurzschrift](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
