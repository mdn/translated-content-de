---
title: repeat()
slug: Web/CSS/repeat
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) repräsentiert ein wiederholtes Fragment der [Spurauflistung](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) und ermöglicht es, eine große Anzahl von Spalten oder Zeilen, die ein sich wiederholendes Muster aufweisen, in einer kompakteren Form zu schreiben.

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

Die Funktion `repeat()` nimmt zwei Argumente an:

- **Wiederholungsanzahl**: Das erste Argument gibt die Anzahl der Wiederholungen der Spurauflistung an. Es wird mit einem ganzzahligen Wert von 1 oder mehr oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) angegeben. Diese Schlüsselwortwerte wiederholen das Spurenset so oft, wie es nötig ist, um den Grid-Container zu füllen.
- **Spuren**: Das zweite Argument gibt das Set von Spuren an, das wiederholt werden soll. Dies besteht grundlegend aus einem oder mehreren Werten, wobei jeder Wert die Größe dieser Spur repräsentiert. Jede Größe wird entweder unter Verwendung eines [`<track-size>`](#track-size)-Werts oder eines [`<fixed-size>`](#fixed-size)-Werts angegeben. Sie können vor oder nach jeder Spur auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Spurgröße bieten.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie Spurengrößen nur mit der Art [`<fixed-size>`](#fixed-size) angeben, nicht mit der Art [`<track-size>`](#track-size). Dies gibt uns drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - eine Ganzzahl zur Festlegung der Wiederholungsanzahl
  - [`<track-size>`](#track-size)-Werte zur Festlegung von Spurengrößen.
- `<auto-repeat>`, das verwendet:
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) zur Festlegung der Wiederholungsanzahl
  - [`<fixed-size>`](#fixed-size) zur Festlegung von Spurengrößen.
- `<fixed-repeat>`, das verwendet:
  - eine Ganzzahl zur Festlegung der Wiederholungsanzahl
  - [`<fixed-size>`](#fixed-size)-Werte zur Festlegung von Spurengrößen.

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, ist es nur erlaubt, `<fixed-repeat>` für zusätzliche `repeat()`-Aufrufe zu verwenden. Zum Beispiel ist dies ungültig, weil es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen Subgrids hinzuzufügen. Sie wird nur mit dem Schlüsselwort [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) verwendet und gibt nur Liniennamen an, keine Spurengrößen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
      - `max` angegeben als einer der folgenden: ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flexfaktor des Spurenbereichs angibt. Jede `<flex>`-dimensionierte Spur nimmt einen Anteil des verbleibenden Raums proportional zu ihrem Flexfaktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive Ganzzahllänge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}}-Werte, durch Leerzeichen getrennt und in eckige Klammern eingeschlossen, z. B. `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentwert relativ zur Inline-Größe des Grid-Containers in Spalten-Grid-Spuren und zur Block-Größe des Grid-Containers in Reihen-Grid-Spuren. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss der `<percentage>` als `auto` behandelt werden. Der Benutzeragent kann die intrinsischen Größenbeiträge der Spur zur Größe des Grid-Containers anpassen und die endgültige Größe der Spur um den Mindestbetrag erhöhen, der erforderlich ist, um den Prozentsatz zu honorieren.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}}-Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("fit-content_function", "fit-content()")}}-Funktion, die einen {{cssxref("&lt;length-percentage&gt;")}}-Wert übergibt.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert es die größte Mindestgröße (wie sie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben wird) der Grid-Elemente, die den Grid-Spurenbereich belegen.
- `auto-fill`
  - : Wenn der Grid-Container über eine bestimmte oder maximale Größe in der relevanten Achse verfügt, dann ist die Anzahl der Wiederholungen die größte mögliche positive Ganzzahl, die den Grid-Container nicht überläuft. Behandelt jede Spur als ihre maximale Spurgrößenfunktion (jeden einzelnen Wert, der zur Definition von `grid-template-rows` oder `grid-template-columns` verwendet wird), falls dies bestimmt ist. Andernfalls als ihre minimale Spurgrößenfunktion und berücksichtigt den Grid-Abstand. Wenn irgendeine Anzahl von Wiederholungen den Grid-Container überlaufen würde, dann ist die Wiederholung `1`. Andernfalls, wenn der Grid-Container über eine bestimmte Mindestgröße in der relevanten Achse verfügt, ist die Anzahl der Wiederholungen die kleinste mögliche positive Ganzzahl, die diese Mindestanforderung erfüllt. Andernfalls wird die angegebene Spurauflistung nur einmal wiederholt.
- `auto-fit`

  - : Verhält sich wie `auto-fill`, außer dass nach dem Platzieren der Grid-Elemente alle leeren wiederholten Spuren kollabieren. Eine leere Spur ist eine, in die keine im Fluss befindlichen Grid-Elemente platziert wurden oder darüber hinausreichen. (Dies kann dazu führen, dass alle Spuren kollabieren, wenn sie alle leer sind.)

    Eine kollabierte Spur wird als eine einzige feste Spurgrößenfunktion von `0px` behandelt, und die Rinnen beiderseits kollabieren.

    Für den Zweck der Ermittlung der Anzahl der automatisch wiederholten Spuren rundet der Benutzeragent die Spurgröße auf einen vom Benutzeragenten angegebenen Wert (z. B. `1px`) ab, um eine Division durch null zu vermeiden.

- `max-content`
  - : Repräsentiert den größten Max-Content-Beitrag der Grid-Elemente, die den Grid-Spurenbereich belegen.
- `min-content`
  - : Repräsentiert den größten Min-Content-Beitrag der Grid-Elemente, die den Grid-Spurenbereich belegen.

## Beispiele

### Grid-Spalten mit repeat() angeben

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
