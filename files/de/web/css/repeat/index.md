---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`repeat()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) repräsentiert ein wiederholtes Fragment der [Trackliste](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout), das es ermöglicht, eine große Anzahl von Spalten oder Reihen mit einem wiederkehrenden Muster in kompakterer Form zu schreiben.

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

- **Wiederholungsanzahl**: Das erste Argument gibt die Anzahl der Wiederholungen der Trackliste an. Es wird mit einem ganzzahligen Wert von 1 oder mehr, oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) angegeben. Diese Schlüsselwortwerte wiederholen die Menge der Tracks so oft, wie es nötig ist, um den Grid-Container zu füllen.
- **Tracks**: Das zweite Argument spezifiziert die Menge der Tracks, die wiederholt werden. Grundsätzlich besteht dies aus einem oder mehreren Werten, wobei jeder Wert die Größe dieses Tracks repräsentiert. Jede Größe wird entweder mit einem [`<track-size>`](#track-size)-Wert oder einem [`<fixed-size>`](#fixed-size)-Wert angegeben. Sie können auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) vor oder nach jedem Track angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Trackgröße bereitstellen.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, können Sie die Trackgrößen nur mit dem [`<fixed-size>`](#fixed-size)-Typ angeben, nicht mit dem [`<track-size>`](#track-size)-Typ. Dies führt zu drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - einen Integer, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size)-Werte, um Trackgrößen festzulegen.
- `<auto-repeat>`, das verwendet
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit), um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size), um Trackgrößen festzulegen.
- `<fixed-repeat>`, das verwendet:
  - einen Integer, um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size)-Werte, um Trackgrößen festzulegen.

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, darf sie nur `<fixed-repeat>` für alle zusätzlichen `repeat()`-Aufrufe verwenden. Zum Beispiel ist dies ungültig, da es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Sie wird nur mit dem [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)-Schlüsselwort verwendet und spezifiziert nur Liniennamen, keine Trackgrößen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert
      - `max`, angegeben als entweder ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
      - `max`, angegeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-größen Track nimmt einen Anteil des verbleibenden Raums im Verhältnis zu seinem Flex-Faktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive Ganzzahllänge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}}-Werte, durch Leerzeichen getrennt und in eckige Klammern eingeschlossen, wie folgt: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht negatives Prozentverhältnis zur Inline-Größe des Grid-Containers in den Spaltengrids und zur Blockgröße des Grid-Containers in den Reihengrids. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, muss der `<percentage>` als `auto` behandelt werden. Das User-Agent könnte die intrinsischen Größenbeiträge des Tracks zur Größe des Grid-Containers anpassen und die endgültige Größe des Tracks um den minimalen Betrag erhöhen, der erforderlich wäre, um das Prozentverhältnis zu berücksichtigen.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min`, angegeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
      - `max`, angegeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
    - eine {{cssxref("fit-content_function", "fit-content()")}}-Funktion, übergeben als {{cssxref("&lt;length-percentage&gt;")}}-Wert.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} festgelegt) der Grid-Elemente, die den Grid-Track einnehmen.
- `auto-fill`
  - : Wenn der Grid-Container eine feste oder maximale Größe in der relevanten Achse hat, ist die Anzahl der Wiederholungen die größtmögliche positive Ganzzahl, die nicht dazu führt, dass das Grid seinen Grid-Container überläuft. Behandeln Sie jeden Track als seine maximale Track-Größenfunktion (jeder unabhängige Wert, der zur Definition von `grid-template-rows` oder `grid-template-columns` verwendet wird), wenn dieser bestimmt ist. Andernfalls als seine minimale Track-Größenfunktion, und berücksichtigen Sie den grid-gap. Wenn jede Anzahl von Wiederholungen überlaufen würde, ist die Wiederholung `1`. Wenn der Grid-Container jedoch eine bestimmte minimale Größe in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinstmögliche positive Ganzzahl, die diese Mindestanforderung erfüllt. Andernfalls wiederholt sich die angegebene Trackliste nur einmal.
- `auto-fit`
  - : Verhält sich genauso wie `auto-fill`, außer dass nach dem Platzieren der Grid-Elemente alle leeren wiederholten Tracks eingefaltet werden. Ein leerer Track ist einer, der keine fließenden Grid-Elemente enthält, die in ihn platziert oder über ihn erstreckt werden. (Dies kann dazu führen, dass alle Tracks eingefaltet werden, wenn sie alle leer sind.)

    Ein eingefalteter Track wird als eine einzige feste Track-Größenfunktion von `0px` behandelt, und die Linien auf beiden Seiten davon werden eingefaltet.

    Zum Zwecke der Bestimmung der Anzahl der automatisch wiederholten Tracks rundet der User-Agent die Trackgröße auf einen vom User-Agent festgelegten Wert (z. B. `1px`) ab, um eine Division durch Null zu vermeiden.

- `max-content`
  - : Repräsentiert den größten Max-Content-Beitrag der Grid-Elemente, die den Grid-Track einnehmen.
- `min-content`
  - : Repräsentiert den größten Min-Content-Beitrag der Grid-Elemente, die den Grid-Track einnehmen.

## Formale Syntax

{{CSSSyntaxRaw(`<track-repeat> <auto-repeat> <fixed-repeat> <name-repeat>`)}}

## Beispiele

### Spezifizieren von Grid-Spalten mit repeat()

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
- [Grid-Template-Bereiche: Kurzschreibweise für Grid-Definition](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
