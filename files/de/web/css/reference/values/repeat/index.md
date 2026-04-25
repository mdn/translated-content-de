---
title: "`repeat()` CSS-Funktion"
short-title: repeat()
slug: Web/CSS/Reference/Values/repeat
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) stellt ein wiederholtes Fragment der [Spurenliste](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) dar und ermöglicht es, eine große Anzahl von Spalten oder Zeilen, die ein wiederkehrendes Muster aufweisen, in kompakterer Form zu schreiben.

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

- **Wiederholungsanzahl**: Das erste Argument gibt an, wie oft die Spurenliste wiederholt werden soll. Es wird mit einem ganzzahligen Wert von 1 oder mehr angegeben oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit). Diese Schlüsselwortwerte wiederholen die Menge der Spuren so oft wie nötig, um den Grid-Container zu füllen.
- **Spuren**: Das zweite Argument gibt die Menge der Spuren an, die wiederholt werden. Grundsätzlich besteht dies aus einem oder mehreren Werten, wobei jeder Wert die Größe dieser Spur repräsentiert. Jede Größe wird entweder mit einem [`<track-size>`](#track-size) Wert oder einem [`<fixed-size>`](#fixed-size) Wert angegeben. Sie können auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) vor oder nach jeder Spur angeben, indem Sie [`<line-names>`](#line-names) Werte vor und/oder nach der Spurgröße bereitstellen.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie nur Spurgrößen mithilfe des Typs [`<fixed-size>`](#fixed-size) angeben, nicht des Typs [`<track-size>`](#track-size). Dies gibt uns drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - eine Ganzzahl, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size) Werte, um Spurgrößen festzulegen.
- `<auto-repeat>`, das verwendet:
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit), um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size), um Spurgrößen festzulegen.
- `<fixed-repeat>`, das verwendet:
  - eine Ganzzahl, um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size) Werte, um Spurgrößen festzulegen.

Wenn eine Eigenschaftserklärung `<auto-repeat>` verwendet, ist es nur erlaubt, `<fixed-repeat>` für zusätzliche `repeat()`-Aufrufe zu verwenden. Zum Beispiel ist dies ungültig, da es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Sie wird nur mit dem [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) Schlüsselwort verwendet und spezifiziert nur Liniennamen, nicht Spurgrößen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}} Wert
    - eine {{cssxref("minmax()")}} Funktion mit:
      - `min` als {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben
      - `max` als einer der folgenden Werte: {{cssxref("&lt;length-percentage&gt;")}}, {{cssxref("&lt;flex&gt;")}} oder einer der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax()")}} Funktion mit:
      - `min` als {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` als {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Platzes im Verhältnis zu ihrem Flex-Faktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive Ganzzahlenlänge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}} Werte, durch Leerzeichen getrennt und in eckigen Klammern eingeschlossen, wie folgt: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz relativ zur Inline-Größe des Grid-Containers in Spaltengrids und zur Blockgröße des Grid-Containers in Reihengrids. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss der `<percentage>` als `auto` behandelt werden. Der Benutzeragent kann die intrinsischen Größenbeiträge der Spur zur Größe des Grid-Containers anpassen und die endgültige Größe der Spur um den minimalen Betrag erhöhen, der erforderlich ist, um den Prozentsatz zu erfüllen.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax()")}} Funktion mit:
      - `min` als {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` als {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto) angegeben
    - eine {{cssxref("fit-content()")}} Funktion, die einen {{cssxref("&lt;length-percentage&gt;")}} Wert übergibt.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Grid-Elemente, die die Grid-Spur belegen.
- `auto-fill`
  - : Wenn der Grid-Container eine feste oder maximale Größe in der relevanten Achse hat, dann ist die Anzahl der Wiederholungen die größte mögliche positive Ganzzahl, die nicht dazu führt, dass das Grid seinen Container überläuft. Dabei wird jede Spur als ihre maximale Spurgrößenfunktion behandelt (jeder unabhängige Wert, der zur Definition von `grid-template-rows` oder `grid-template-columns` verwendet wird), falls diese fest ist. Andernfalls wird sie als ihre minimale Spurgrößenfunktion betrachtet, wobei das Grid-Gap berücksichtigt wird. Wenn jede Anzahl von Wiederholungen zu einem Überlauf führen würde, dann ist die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine bestimmte Mindestgröße in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinste mögliche positive Ganzzahl, die diese Mindestanforderung erfüllt. Andernfalls wird die angegebene Spurenliste nur einmal wiederholt.
- `auto-fit`
  - : Verhält sich genauso wie `auto-fill`, außer dass nach dem Platzieren der Grid-Elemente alle leeren wiederholten Spuren zusammengeklappt werden. Eine leere Spur ist eine, in die keine Grid-Elemente im Fluss platziert werden und keine Grid-Elemente diese überbrücken. (Dies kann dazu führen, dass alle Spuren zusammengeklappt werden, wenn sie alle leer sind.)

    Eine zusammengeklappte Spur wird als hätte sie eine einzelne feste Spurgrößenfunktion von `0px` behandelt, und die Rinnen auf beiden Seiten dieser Spur kollabieren.

    Für den Zweck, die Anzahl der automatisch wiederholten Spuren zu ermitteln, rundet der Benutzeragent die Spurgröße auf einen vom Benutzeragenten angegebenen Wert (z. B. `1px`) ab, um eine Division durch null zu vermeiden.

- {{cssxref("max-content")}}
  - : Repräsentiert den größten Max-Content-Beitrag der Grid-Elemente, die die Grid-Spur belegen.
- {{cssxref("min-content")}}
  - : Repräsentiert den größten Min-Content-Beitrag der Grid-Elemente, die die Grid-Spur belegen.

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
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Template-Bereiche: Grid-Definition-Kurzformen](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
