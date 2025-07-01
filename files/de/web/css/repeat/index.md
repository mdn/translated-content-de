---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) repräsentiert ein wiederholtes Fragment der [Spurenliste](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), wodurch eine große Anzahl von Spalten oder Zeilen, die ein wiederkehrendes Muster aufweisen, in kompakterer Form geschrieben werden kann.

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

- **Wiederholungsanzahl**: Das erste Argument gibt an, wie oft die Spurenliste wiederholt werden soll. Es wird mit einem ganzzahligen Wert von 1 oder mehr angegeben oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit). Diese Schlüsselwortwerte wiederholen die Spuren so oft wie nötig, um den Gittercontainer auszufüllen.
- **Spuren**: Das zweite Argument gibt die Gruppe von Spuren an, die wiederholt werden. Grundsätzlich besteht diese aus einem oder mehreren Werten, wobei jeder Wert die Größe dieser Spur darstellt. Jede Größe wird entweder mit einem [`<track-size>`](#track-size)-Wert oder einem [`<fixed-size>`](#fixed-size)-Wert angegeben. Sie können auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) vor oder nach jeder Spur angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Spurgröße angeben.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie nur Spurgrößen mit dem Typ [`<fixed-size>`](#fixed-size) angeben, nicht mit dem Typ [`<track-size>`](#track-size). Dies ergibt drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - eine ganze Zahl, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size)-Werte, um Spurgrößen festzulegen.
- `<auto-repeat>`, das verwendet:
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit), um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size), um Spurgrößen festzulegen.
- `<fixed-repeat>`, das verwendet:
  - eine ganze Zahl, um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size)-Werte, um Spurgrößen festzulegen.

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, ist es nur erlaubt, `<fixed-repeat>` für zusätzliche `repeat()`-Aufrufe zu verwenden. Zum Beispiel ist dies ungültig, da es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Sie wird nur mit dem [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)-Schlüsselwort verwendet und gibt nur Liniennamen an, keine Spurgrößen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert
      - `max`, angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max`, angegeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Platzes proportional zu ihrem Flex-Faktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive ganze Länge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}}-Werte, durch Leerzeichen getrennt und in eckigen Klammern eingeschlossen, wie folgt: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz relativ zur Inline-Größe des Grid-Containers in Spaltengrößen und zur Blockgröße des Grid-Containers in Zeilengrößen. Wenn die Größe des Gittercontainers von der Größe seiner Spuren abhängt, muss der `<percentage>` als `auto` behandelt werden. Der User-Agent kann die intrinsische Größenbeiträge der Spur zur Größe des Gittercontainers anpassen und die endgültige Größe der Spur um den Mindestbetrag erhöhen, der erforderlich ist, um den Prozentsatz zu respektieren.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max`, angegeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("fit-content_function", "fit-content()")}}-Funktion, die einen {{cssxref("&lt;length-percentage&gt;")}}-Wert übergeben bekommt.
- `auto`
  - : Als Maximum identisch zu `max-content`. Als Minimum repräsentiert es die größte Minimalgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Gitterelemente, die die Gitterspur belegen.
- `auto-fill`
  - : Wenn der Gittercontainer eine bestimmte oder maximale Größe in der relevanten Achse hat, ist die Anzahl der Wiederholungen die größte mögliche positive ganze Zahl, die nicht dazu führt, dass das Gitter seinen Gittercontainer überläuft. Jede Spur wird als ihre maximale Spurnierungsfunktion behandelt (jeder unabhängige Wert, der verwendet wird, um `grid-template-rows` oder `grid-template-columns` zu definieren), wenn diese bestimmt ist. Andernfalls als ihre minimale Spurnierungsfunktion, unter Berücksichtigung des Gitterabstands. Wenn jede Anzahl von Wiederholungen zu einem Überlauf führen würde, ist die Anzahl der Wiederholungen `1`. Andernfalls, wenn der Gittercontainer eine bestimmte minimale Größe in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinste positive ganze Zahl, die diese Mindestanforderung erfüllt. Andernfalls wird die angegebene Spurliste nur einmal wiederholt.
- `auto-fit`
  - : Verhält sich wie `auto-fill`, außer dass nach dem Platzieren der Gitterelemente alle leeren wiederholten Spuren zusammengeklappt werden. Eine leere Spur ist eine, in der keine im Fluss befindlichen Gitterelemente platziert oder die darüber hinausgehen. (Dies kann dazu führen, dass alle Spuren zusammengeklappt werden, wenn alle leer sind.)

    Eine zusammengeklappte Spur wird als eine einzelne feste Spurnierungsfunktion von `0px` behandelt, und die Rinnen auf beiden Seiten davon kollabieren.

    Für den Zweck, die Anzahl der auto-wiederholten Spuren zu bestimmen, deckt der User-Agent die Spurgröße auf einen vom User-Agent bestimmten Wert (z.B. `1px`), um eine Division durch Null zu vermeiden.

- `max-content`
  - : Repräsentiert den größten max-content-Beitrag der Gitterelemente, welche die Gitterspur belegen.
- `min-content`
  - : Repräsentiert den größten min-content-Beitrag der Gitterelemente, welche die Gitterspur belegen.

## Formale Syntax

{{CSSSyntaxRaw(`<track-repeat> <auto-repeat> <fixed-repeat> <name-repeat>`)}}

## Beispiele

### Angabe von Gitterspalten mit repeat()

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
- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Template-Bereiche: Gitter-Definition Abkürzungen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
