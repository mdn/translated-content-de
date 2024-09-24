---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) stellt ein wiederholtes Fragment der [Track-Liste](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) dar, sodass eine große Anzahl von Spalten oder Reihen, die ein wiederkehrendes Muster aufweisen, in einer kompakteren Form geschrieben werden kann.

{{EmbedInteractiveExample("pages/css/function-repeat.html")}}

Diese Funktion kann in den CSS-Grid-Eigenschaften {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} verwendet werden.

## Syntax

```css
/* <track-repeat> Werte */
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

/* <auto-repeat> Werte */
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(auto-fill, [col-start] 250px [col-end])
repeat(auto-fit, [col-start] 250px [col-end])
repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])
repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])

/* <fixed-repeat> Werte */
repeat(4, 250px)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])
```

Die `repeat()` Funktion nimmt zwei Argumente:

- **Wiederholungsanzahl**: Das erste Argument gibt an, wie oft die Track-Liste wiederholt werden soll. Es wird mit einem ganzzahligen Wert von 1 oder mehr angegeben oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit). Diese Schlüsselwortwerte wiederholen die Menge der Tracks so oft, wie es notwendig ist, um den Grid-Container zu füllen.
- **Tracks**: Das zweite Argument gibt die Menge der Tracks an, die wiederholt werden. Im Wesentlichen besteht dies aus einem oder mehreren Werten, wobei jeder Wert die Größe dieses Tracks repräsentiert. Jede Größe wird entweder mit einem [`<track-size>`](#track-size)-Wert oder einem [`<fixed-size>`](#fixed-size)-Wert angegeben. Sie können auch vor oder nach jeder Spur einen oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Trackgröße bereitstellen.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie nur Trackgrößen mithilfe des [`<fixed-size>`](#fixed-size)-Typs angeben, nicht des [`<track-size>`](#track-size)-Typs. Dies ergibt drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, welches verwendet:
  - eine Ganzzahl, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size)-Werte, um die Trackgrößen festzulegen.
- `<auto-repeat>`, welches verwendet:
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit), um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size), um die Trackgrößen festzulegen.
- `<fixed-repeat>`, welches verwendet:
  - eine Ganzzahl, um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size)-Werte, um die Trackgrößen festzulegen.

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, darf sie nur `<fixed-repeat>` für alle zusätzlichen `repeat()`-Aufrufe verwenden. Beispielsweise ist dies ungültig, da es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Sie wird nur mit dem Schlüsselwort [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) verwendet und gibt nur Liniennamen, keine Trackgrößen an.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` als {{cssxref("&lt;length-percentage&gt;")}}-Wert angegeben
      - `max` als eines von {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` als {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto) angegeben
      - `max` als {{cssxref("&lt;length-percentage&gt;")}}-Wert angegeben.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-dimensionierte Track nimmt einen Anteil des verbleibenden Platzes proportional zu seinem Flex-Faktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive ganzzahlige Länge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}}-Werte, mit Leerzeichen getrennt und in eckige Klammern eingeschlossen, wie folgt: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz, bezogen auf die in-line Größe des Grid-Containers bei Spalten-Tracks und die Blockgröße des Grid-Containers bei Reihen-Tracks. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, muss der `<percentage>` als `auto` behandelt werden. Der User-Agent kann die intrinsischen Größenbeiträge des Tracks zur Größe des Grid-Containers anpassen und die endgültige Größe des Tracks um den minimalen Betrag vergrößern, der erforderlich ist, um den Prozentsatz zu berücksichtigen.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` als {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto) angegeben
      - `max` als {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content), oder [`auto`](#auto) angegeben
    - eine {{cssxref("fit-content_function", "fit-content()")}}-Funktion, an die ein {{cssxref("&lt;length-percentage&gt;")}}-Wert übergeben wird.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert es die größte minimale Größe (wie angegeben durch {{cssxref("min-width")}}/{{cssxref("min-height")}}) der in den Grid-Track eingebauten Grid-Items.
- `auto-fill`
  - : Wenn der Grid-Container eine bestimmte oder maximale Größe in der relevanten Achse hat, dann ist die Anzahl der Wiederholungen die größtmögliche positive ganze Zahl, die nicht dazu führt, dass der Grid-Container überläuft. Dabei wird jede Spur als ihre maximale Spurgrößenfunktion behandelt (jeder unabhängige Wert, der verwendet wird, um `grid-template-rows` oder `grid-template-columns` zu definieren), falls diese bestimmt ist. Andernfalls als ihre minimale Spurgrößenfunktion, wobei der Grid-Gap berücksichtigt wird. Falls jede Anzahl von Wiederholungen zu einem Überlauf führen würde, dann beträgt die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine bestimmte minimale Größe in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinstmögliche positive ganze Zahl, die diese Mindestanforderung erfüllt. Andernfalls wird die angegebene Track-Liste nur einmal wiederholt.
- `auto-fit`

  - : Verhält sich wie `auto-fill`, außer dass nach dem Platzieren der Grid-Items alle leeren wiederholten Tracks zusammengefaltet werden. Ein leerer Track ist einer, in den keine im Fluss befindlichen Grid-Items platziert werden oder über ihn erstrecken. (Das kann dazu führen, dass alle Tracks zusammengefaltet werden, wenn sie alle leer sind.)

    Ein zusammengefalteter Track wird als eine einzelne feste Trackgrößenfunktion von `0px` behandelt, und die Abstände auf beiden Seiten davon kollabieren.

    Zum Zweck der Bestimmung der Anzahl der automatisch wiederholten Tracks rundet der User-Agent die Trackgröße auf einen vom User-Agenten festgelegten Wert (z. B. `1px`) ab, um eine Division durch Null zu vermeiden.

- `max-content`
  - : Repräsentiert den größten max-content-Beitrag der in den Grid-Track eingebauten Grid-Items.
- `min-content`
  - : Repräsentiert den größten min-content-Beitrag der in den Grid-Track eingebauten Grid-Items.

## Beispiele

### Grid-Spalten mit repeat() angeben

#### HTML

```html
<div id="container">
  <div>Dieses Element ist 50 Pixel breit.</div>
  <div>Element mit flexibler Breite.</div>
  <div>Dieses Element ist 50 Pixel breit.</div>
  <div>Element mit flexibler Breite.</div>
  <div>Unflexibles Element mit einer Breite von 100 Pixeln.</div>
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
- [Grid Template Areas: Grid-Definition-Shorthands](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
