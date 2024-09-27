---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) repräsentiert ein wiederkehrendes Fragment der [Spurauflistung](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), was es ermöglicht, eine große Anzahl von Spalten oder Zeilen, die ein wiederkehrendes Muster aufweisen, in einer kompakteren Form zu schreiben.

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

Die `repeat()` Funktion nimmt zwei Argumente:

- **Wiederholungsanzahl**: das erste Argument gibt an, wie oft die Spurauflistung wiederholt werden soll. Es wird mit einem ganzzahligen Wert von 1 oder mehr angegeben oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit). Diese Schlüsselwortwerte wiederholen das Set von Spuren so oft wie nötig, um den Grid-Container zu füllen.
- **Spuren**: das zweite Argument gibt das Set von Spuren an, das wiederholt wird. Grundsätzlich besteht dies aus einem oder mehreren Werten, wobei jeder Wert die Größe dieser Spur repräsentiert. Jede Größe wird entweder mit einem [`<track-size>`](#track-size) Wert oder einem [`<fixed-size>`](#fixed-size) Wert angegeben. Sie können auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) vor oder nach jeder Spur angeben, indem Sie [`<line-names>`](#line-names) Werte vor und/oder nach der Spurgröße angeben.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie Spurgrößen nur mit dem Typ [`<fixed-size>`](#fixed-size) und nicht mit dem Typ [`<track-size>`](#track-size) angeben. Dies gibt uns drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - eine ganze Zahl, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size) Werte, um Spurgrößen festzulegen.
- `<auto-repeat>`, das verwendet:
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit), um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size), um Spurgrößen festzulegen.
- `<fixed-repeat>`, das verwendet:
  - eine ganze Zahl, um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size) Werte, um Spurgrößen festzulegen.

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, darf es nur `<fixed-repeat>` für jede zusätzliche `repeat()`-Aufrufe verwenden. Zum Beispiel ist dies ungültig, da es die `<auto-repeat>` Form mit der `<track-repeat>` Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Sie wird nur mit dem Schlüsselwort [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) benutzt und spezifiziert nur Liniennamen, keine Spurgrößen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}} Wert
    - eine {{cssxref("minmax", "minmax()")}} Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert
      - `max` angegeben als einer von einem {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}} Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht negative Dimension mit der Einheit `fr`, die den Flexfaktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Raums im Verhältnis zu ihrem Flexfaktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive ganzzahlige Länge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}} Werte, durch Leerzeichen getrennt und in eckigen Klammern, wie folgt: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht negativer Prozentsatz relativ zur Inline-Größe des Grid-Containers in Spaltengridschienen und der Blockgröße des Grid-Containers in Zeilengridschienen. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss der `<percentage>` als `auto` behandelt werden. Der Benutzeragent kann die intrinsischen Größenzuordnungsbeiträge der Spur an die Größe des Grid-Containers anpassen und die endgültige Größe der Spur um den minimalen Betrag erhöhen, der erforderlich ist, um den Prozentsatz zu erfüllen.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}} Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("fit-content_function", "fit-content()")}} Funktion, übergeben ein {{cssxref("&lt;length-percentage&gt;")}} Wert.
- `auto`
  - : Als Maximum ist es identisch mit `max-content`. Als Minimum repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Grid-Elemente, die die Grid-Spur belegen.
- `auto-fill`
  - : Wenn der Grid-Container eine bestimmte oder maximale Größe in der relevanten Achse hat, dann ist die Wiederholungsanzahl die größtmögliche positive ganze Zahl, die nicht dazu führt, dass das Grid seinen Grid-Container überläuft. Jede Spur wird als ihre maximale Spurgrößenfunktion behandelt (jeder unabhängige Wert, der zur Definition von `grid-template-rows` oder `grid-template-columns` verwendet wird), wenn dies bestimmt ist. Andernfalls wird sie als ihre minimale Spurgrößenfunktion behandelt, wobei grid-gap berücksichtigt wird. Wenn eine Anzahl von Wiederholungen überlaufen würde, dann beträgt die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine bestimmte Mindesgröße in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinste mögliche positive ganze Zahl, die dieser Mindestanforderung entspricht. Andernfalls wird die angegebene Spurauflistung nur einmal wiederholt.
- `auto-fit`

  - : Verhält sich ähnlich wie `auto-fill`, außer dass nach dem Platzieren der Grid-Elemente alle leeren wiederholten Spuren zusammengeklappt werden. Eine leere Spur ist eine, in der keine Grid-Elemente im Fluss platziert werden oder darüber hinaus reichen. (Dies kann dazu führen, dass alle Spuren zusammengeklappt werden, wenn sie alle leer sind.)

    Eine zusammengeklappte Spur wird behandelt, als hätte sie eine einzelne feste Spurgrößenfunktion von `0px`, und die Rillen auf jeder Seite davon werden zusammengezogen.

    Um die Anzahl der automatisch wiederholten Spuren zu ermitteln, rundet der Benutzeragent die Spurgröße auf einen vom Benutzeragenten festgelegten Wert ab (z. B. `1px`), um eine Division durch Null zu vermeiden.

- `max-content`
  - : Repräsentiert den größten Max-Inhalts-Beitrag der Grid-Elemente, die die Grid-Spur belegen.
- `min-content`
  - : Repräsentiert den größten Min-Inhalts-Beitrag der Grid-Elemente, die die Grid-Spur belegen.

## Beispiele

### Grid-Spalten mithilfe von repeat() spezifizieren

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
- [Grid-Template-Bereiche: Grid-Definition-Kurznotierungen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
