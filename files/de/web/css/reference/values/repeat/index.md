---
title: repeat()
slug: Web/CSS/Reference/Values/repeat
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) stellt ein wiederholtes Fragment der [Trackliste](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) dar, was es ermöglicht, eine große Anzahl von Spalten oder Reihen, die ein wiederkehrendes Muster aufweisen, in kompakterer Form zu schreiben.

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

Die Funktion `repeat()` nimmt zwei Argumente an:

- **Wiederholungsanzahl**: Das erste Argument gibt an, wie oft die Trackliste wiederholt werden soll. Es wird mit einem ganzzahligen Wert von 1 oder mehr angegeben oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit). Diese Schlüsselwortwerte wiederholen die Trackliste so oft, wie es nötig ist, um den Grid-Container zu füllen.
- **Tracks**: Das zweite Argument gibt die Menge der zu wiederholenden Tracks an. Grundsätzlich besteht dies aus einem oder mehreren Werten, wobei jeder Wert die Größe dieses Tracks repräsentiert. Jede Größe wird entweder mit einem [`<track-size>`](#track-size)-Wert oder einem [`<fixed-size>`](#fixed-size)-Wert angegeben. Sie können auch vor oder nach jedem Track einen oder mehrere [Liniennamen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Trackgröße bereitstellen.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, dürfen Sie nur Trackgrößen mit dem Typ [`<fixed-size>`](#fixed-size) angeben, nicht den Typ [`<track-size>`](#track-size). Dies führt zu drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - eine Ganzzahl zur Festlegung der Wiederholungsanzahl
  - [`<track-size>`](#track-size)-Werte zur Festlegung der Trackgrößen.
- `<auto-repeat>`, das verwendet:
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) zur Festlegung der Wiederholungsanzahl
  - [`<fixed-size>`](#fixed-size) zur Festlegung der Trackgrößen.
- `<fixed-repeat>`, das verwendet:
  - eine Ganzzahl zur Festlegung der Wiederholungsanzahl
  - [`<fixed-size>`](#fixed-size)-Werte zur Festlegung der Trackgrößen.

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, ist es nur erlaubt, `<fixed-repeat>` für alle zusätzlichen `repeat()`-Aufrufe zu verwenden. Ein Beispiel für eine ungültige Verwendung ist, wenn `<auto-repeat>` mit `<track-repeat>` kombiniert wird:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Linienneamen zu Subgrids hinzuzufügen. Sie wird nur mit dem Schlüsselwort [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) verwendet und gibt nur Linienneamen an, nicht die Trackgrößen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert
    - eine {{cssxref("minmax()")}}-Funktion mit:
      - `min` als {{cssxref("&lt;length-percentage&gt;")}}-Wert angegeben
      - `max` als einer von einem {{cssxref("&lt;length-percentage&gt;")}}-Wert, einem {{cssxref("&lt;flex&gt;")}}-Wert oder einem der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax()")}}-Funktion mit:
      - `min` als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert angegeben.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flexfaktor des Tracks angibt. Jeder `<flex>`-größen Track erhält einen Anteil des verbleibenden Raums proportional zu seinem Flexfaktor.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive ganze Zahl.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}}-Werte, getrennt durch Leerzeichen und in eckige Klammern gesetzt, wie z.B.: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz relativ zur Inline-Größe des Grid-Containers in Spalten-Grid-Tracks und der Blockgröße des Grid-Containers in Reihen-Grid-Tracks. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, muss das `<percentage>` als `auto` behandelt werden. Der Benutzeragent kann die intrinsischen Größenkontributionen des Tracks an die Größe des Grid-Containers anpassen und die Endgröße des Tracks um das Minimum erhöhen, das zur Einhaltung des Prozentsatzes erforderlich ist.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax()")}}-Funktion mit:
      - `min` als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` als ein {{cssxref("&lt;length-percentage&gt;")}}-Wert, ein {{cssxref("&lt;flex&gt;")}}-Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("fit-content()")}}-Funktion, die einen {{cssxref("&lt;length-percentage&gt;")}}-Wert übergeben bekommt.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Grid-Elemente, die den Grid-Track belegen.
- `auto-fill`
  - : Wenn der Grid-Container eine bestimmte oder maximale Größe auf der relevanten Achse hat, dann ist die Anzahl der Wiederholungen die größtmögliche positive ganze Zahl, die nicht dazu führt, dass das Grid seinen Grid-Container überläuft. Dabei wird jede Spur als ihre maximale Spurgrößenfunktion behandelt (jeder unabhängige Wert, der zur Definition von `grid-template-rows` oder `grid-template-columns` verwendet wurde), wenn diese bestimmt ist. Andernfalls als ihre minimale Spurgrößenfunktion, wobei der Rastabstand berücksichtigt wird. Wenn jede Anzahl von Wiederholungen ein Überlaufen bewirken würde, dann ist die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine bestimmte Mindestgröße auf der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinstmögliche positive ganze Zahl, die diese Mindestanforderung erfüllt. Andernfalls wird die angegebene Spur nur einmal wiederholt.
- `auto-fit`
  - : Verhält sich genauso wie `auto-fill`, außer dass nach der Platzierung der Grid-Elemente alle leeren wiederholten Spuren zusammenklappen. Eine leere Spur ist eine, in die keine im Fluss befindlichen Grid-Elemente platziert werden oder über die sie sich erstrecken. (Dies kann dazu führen, dass alle Spuren zusammenfallen, wenn sie alle leer sind.)

    Eine zusammengeklappte Spur wird so behandelt, als würde sie über eine einzige feste Spurgrößenfunktion von `0px` verfügen, und die Rinnen an beiden Seiten davon kollabieren.

    Um die Anzahl der automatisch wiederholten Spuren zu bestimmen, rundet der Benutzeragent die Spurgröße auf einen vom Benutzeragenten vorgegebenen Wert (z.B. `1px`) ab, um eine Division durch Null zu vermeiden.

- {{cssxref("max-content")}}
  - : Repräsentiert den größten max-content Beitrag der Grid-Elemente, die den Grid-Track belegen.
- {{cssxref("min-content")}}
  - : Repräsentiert den größten min-content Beitrag der Grid-Elemente, die den Grid-Track belegen.

## Formale Syntax

{{CSSSyntaxRaw(`<track-repeat> <auto-repeat> <fixed-repeat> <name-repeat>`)}}

## Beispiele

### Spalten des Grids mit repeat() angeben

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
- [Zeilenbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid Template Bereiche: Grid-Definitionskurzzeichen](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
