---
title: repeat()
slug: Web/CSS/Reference/Values/repeat
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) repräsentiert ein wiederholtes Fragment der [Spurliste](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts), wodurch eine große Anzahl von Spalten oder Zeilen, die ein wiederkehrendes Muster aufweisen, in einer kompakteren Form geschrieben werden können.

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

Die `repeat()` Funktion nimmt zwei Argumente an:

- **Wiederholungsanzahl**: Das erste Argument gibt an, wie oft die Spurliste wiederholt werden soll. Es wird entweder mit einem ganzzahligen Wert von 1 oder mehr spezifiziert oder mit den Schlüsselwortwerten [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit). Diese Schlüsselwortwerte wiederholen das Satz von Spuren so oft, wie es notwendig ist, um den Gittercontainer zu füllen.
- **Spuren**: Das zweite Argument bestimmt das Set von Spuren, das wiederholt wird. Grundsätzlich besteht dies aus einem oder mehreren Werten, wobei jeder Wert die Größe dieser Spur repräsentiert. Jede Größe wird entweder mit einem [`<track-size>`](#track-size) Wert oder einem [`<fixed-size>`](#fixed-size) Wert angegeben. Sie können auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) vor oder nach jeder Spur angeben, indem Sie [`<line-names>`](#line-names) Werte vor und/oder nach der Spurengröße bereitstellen.

Wenn Sie [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit) verwenden, um die Wiederholungsanzahl festzulegen, können Sie nur Spuren mit dem Typ [`<fixed-size>`](#fixed-size) angeben, nicht mit dem Typ [`<track-size>`](#track-size). Dies gibt uns drei Hauptsyntaxformen für `repeat()`:

- `<track-repeat>`, das verwendet:
  - eine Ganzzahl, um die Wiederholungsanzahl festzulegen
  - [`<track-size>`](#track-size) Werte, um Spurengrößen festzulegen.
- `<auto-repeat>`, das verwendet:
  - [`auto-fill`](#auto-fill) oder [`auto-fit`](#auto-fit), um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size), um Spurengrößen festzulegen.
- `<fixed-repeat>`, das verwendet:
  - eine Ganzzahl, um die Wiederholungsanzahl festzulegen
  - [`<fixed-size>`](#fixed-size) Werte, um Spurengrößen festzulegen.

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, darf sie nur `<fixed-repeat>` für zusätzliche `repeat()` Aufrufe benutzen. Zum Beispiel ist das ungültig, da es die `<auto-repeat>` Form mit der `<track-repeat>` Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Es gibt eine vierte Form, `<name-repeat>`, die verwendet wird, um Liniennamen zu Subgrids hinzuzufügen. Sie wird nur mit dem Schlüsselwort [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) verwendet und spezifiziert nur Liniennamen, keine Spurengrößen.

### Werte

- `<fixed-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}} Wert
    - eine {{cssxref("minmax", "minmax()")}} Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert
      - `max` angegeben als: ein {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}} Funktion mit:
      - `min` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-Spur nimmt einen Anteil des verbleibenden Raums im Verhältnis zu ihrem Flex-Faktor ein.
- {{cssxref("&lt;length&gt;")}}
  - : Eine positive Ganzzahl für die Länge.
- `<line-names>`
  - : Null oder mehr {{cssxref("&lt;custom-ident&gt;")}} Werte, durch Leerzeichen getrennt und in eckige Klammern eingeschlossen, wie folgt: `[first header-start]`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer Prozentsatz relativ zur Inline-Größe des Gittercontainers in Spaltengitterspuren und der Blockgröße des Gittercontainers in Zeilengitterspuren. Wenn die Größe des Gittercontainers von der Größe seiner Spuren abhängt, muss das `<percentage>` als `auto` behandelt werden. Der Benutzer-Agent darf die intrinsischen Größenbeiträge der Spur zur Größe des Gittercontainers anpassen und die endgültige Größe der Spur um den minimal notwendigen Betrag erhöhen, der zur Einhaltung des Prozentsatzes führt.
- `<track-size>`
  - : Eine der folgenden Formen:
    - ein {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("minmax", "minmax()")}} Funktion mit:
      - `min` als ein {{cssxref("&lt;length-percentage&gt;")}} Wert angegeben oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
      - `max` angegeben als ein {{cssxref("&lt;length-percentage&gt;")}} Wert, ein {{cssxref("&lt;flex&gt;")}} Wert, oder eines der folgenden Schlüsselwörter: [`min-content`](#min-content), [`max-content`](#max-content) oder [`auto`](#auto)
    - eine {{cssxref("fit-content_function", "fit-content()")}} Funktion, die einen {{cssxref("&lt;length-percentage&gt;")}} Wert übergeben bekommt.
- `auto`
  - : Als Maximum identisch mit `max-content`. Als Minimum repräsentiert es die größte Mindestgröße (wie durch {{cssxref("min-width")}}/{{cssxref("min-height")}} angegeben) der Gitterelemente, die die Gitterspur belegen.
- `auto-fill`
  - : Wenn der Gittercontainer eine bestimmte oder maximale Größe in der relevanten Achse hat, dann ist die Anzahl der Wiederholungen die größte mögliche positive Ganzzahl, die nicht dazu führt, dass das Gitter seinen Gittercontainer überschreitet. Jedes Spurenelement wird als seine maximale Spurengröße behandelt (jeder unabhängige Wert verwendet, um `grid-template-rows` oder `grid-template-columns` zu definieren), falls dies feststeht. Andernfalls wird es als seine minimale Spurengröße behandelt, wobei der Gitterabstand berücksichtigt wird. Wenn jede Anzahl von Wiederholungen die Grenzen überschreiten würde, dann ist die Wiederholung `1`. Andernfalls, wenn der Gittercontainer eine bestimmte Mindestgröße in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinstmögliche positive Ganzzahl, die diese Mindestanforderung erfüllt. Andernfalls wird die angegebene Spurliste nur einmal wiederholt.
- `auto-fit`
  - : Verhält sich gleich wie `auto-fill`, außer dass nach dem Platzieren der Gitterelemente alle leeren wiederholten Spuren zusammengebrochen werden. Eine leere Spur ist eine ohne im Fluss befindliche Gitterelemente, die darin platziert sind oder über sie hinweg gespannen. (Dies kann zur Folge haben, dass alle Spuren zusammenbrechen, wenn sie alle leer sind.)

    Eine zusammengebrochene Spur wird so behandelt, als hätte sie eine feste Spurengröße-Funktion von `0px`, und die Abstände auf beiden Seiten davon werden zusammengebrochen.

    Für die Zwecke der Ermittlung der Anzahl der automatisch wiederholten Spuren, der Benutzer-Agent rundet die Spurengröße auf einen vom Benutzer-Agenten spezifizierten Wert (z. B. `1px`) ab, um Division durch null zu vermeiden.

- {{cssxref("max-content")}}
  - : Repräsentiert den größten max-content Beitrag der Gitterelemente, die die Gitterspur belegen.
- {{cssxref("min-content")}}
  - : Repräsentiert den größten min-content Beitrag der Gitterelemente, die die Gitterspur belegen.

## Formale Syntax

{{CSSSyntaxRaw(`<track-repeat> <auto-repeat> <fixed-repeat> <name-repeat>`)}}

## Beispiele

### Spalten mit repeat() spezifizieren

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
- [Gittervorlagenbereiche: Gitter-Definitionskürzel](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
