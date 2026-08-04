---
title: "`repeat()` CSS-Funktion"
short-title: repeat()
slug: Web/CSS/Reference/Values/repeat
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Die **`repeat()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) repräsentiert ein wiederholtes Fragment der [Trackliste](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) oder der [Linienregel-Liste](/de/docs/Web/CSS/Guides/Gaps). Sie ermöglicht es, sich wiederholende Muster von Spalten, Zeilen und deren Abstandsdekorationen in einer kompakten Form zu schreiben.

{{InteractiveExample("CSS Demo: repeat()")}}

```css interactive-example-choice
grid-template-columns: repeat(2, 60px);
rule-color: repeat(2, green, orange), yellow;
```

```css interactive-example-choice
grid-template-columns: 1fr repeat(2, 60px);
rule-color: repeat(2, green), repeat(2, yellow);
```

```css interactive-example-choice
grid-template-columns: repeat(2, 20px 1fr);
rule-color: repeat(auto, green), repeat(2, yellow);
```

```css interactive-example-choice
grid-template-columns: repeat(auto-fill, 40px);
rule-color: repeat(2, orange, yellow), repeat(auto, green);
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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
  rule: solid 4px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

Diese Funktion kann mit den folgenden Funktionen verwendet werden:

CSS-Grid-Eigenschaften:

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}

CSS-Abstandseigenschaften:

- {{cssxref("column-rule-color")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("rule-color")}} Kurzform
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("rule-style")}} Kurzform
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-width")}}
- {{cssxref("rule-width")}} Kurzform
- {{cssxref("column-rule")}} Kurzform
- {{cssxref("row-rule")}} Kurzform
- {{cssxref("rule")}} Kurzform

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

/* <name-repeat> values */
repeat(5, [footer])
repeat(auto-fill, [header])
repeat(2, [header footer])

/* <repeat-line> */
repeat(4, dashed)
repeat(2, solid, dotted, inset)
repeat(3, medium)
repeat(4, red)
repeat(3, green medium outset)

/* <auto-repeat-line> */
repeat(auto, dotted)
repeat(auto, 10px)
repeat(auto, currentcolor)
repeat(auto, red, blue, green)
repeat(auto, var(--lineColor) var(--lineSize) solid)
```

### Werte

Die `repeat()`-Funktion nimmt zwei Argumente an: Das erste Argument spezifiziert die [**Wiederholungsanzahl**](#wiederholungsanzahl), und das zweite spezifiziert die [**wiederholte Werteliste**](#wiederholte_werteliste) (die Liste der zu wiederholenden Werte).

#### Wiederholungsanzahl

- {{cssxref("integer")}}
  - : Eine positive Ganzzahl größer oder gleich `1`, die angibt, wie oft die Feature-Liste im zweiten Parameter wiederholt wird.

- `auto-fill`
  - : Gibt einen automatischen Wiederholer an, der wiederholt wird, um einen Raum zu füllen. Löst sich auf die größte Anzahl von Wiederholungen auf, die keinen Überlauf einer begrenzten (hat eine maximale Größe) Inhaltsbox verursachen. Andernfalls, wenn die Inhaltsbox eine Mindestgröße hat, die geringste Anzahl von Wiederholungen, die die Mindestgröße erfüllt. Wenn es weder eine Mindest- noch eine Maximalgröße gibt, löst es sich zu `1` auf. Wenn es mit Subgrid verwendet wird, muss der zweite Parameter eine Liste von Linienneamen sein.

- `auto-fit`
  - : Verhält sich wie `auto-fill`, außer dass nach dem Platzieren der Grid-Elemente alle leeren, wiederholten Tracks zusammengeklappt werden.

- `auto`
  - : Gibt einen automatischen Wiederholer an. Nachdem die Werte aus anderen Bestandteilen des Eigenschaftswerts angewendet wurden, werden die Werte aus dem zweiten Parameter so oft wiederholt, wie nötig, um fehlende Werte zu füllen.

#### Wiederholte Werteliste

Eine Liste von einer der folgenden Tracklisten-Typen. Ob die Komponenten der Liste durch Kommas oder Leerzeichen getrennt werden, hängt davon ab, welcher Trennzeichen für den Eigenschaftswert-Liste-Typ erwartet wird.

- `<line-names>`
  - : Um Linienneamen zu Subgrids hinzuzufügen, ist jedes `<line-names>` null oder mehr {{cssxref("&lt;custom-ident&gt;")}} Werte, durch Leerzeichen getrennt und in eckige Klammern gesetzt, wie zum Beispiel `[start header-start]`.

- `<track-size>`
  - : Jede `<track-size>` ist eine positive {{cssxref("&lt;length-percentage&gt;")}}, eine {{cssxref("minmax()")}} Funktion, wobei der erste Parameter das Schlüsselwort `min-content`, `max-content` oder `auto` ist, oder eine positive `<length-percentage>`, oder eine {{cssxref("fit-content()")}} Funktion.

- `<fixed-size>`
  - : Jede `<fixed-size>` ist entweder eine positive `<length-percentage>`, oder eine `minmax()` Funktion, deren erster Parameter eine positive `<length-percentage>` ist und deren zweiter Parameter eine nicht-negative Dimension mit der Einheit `fr` ist, die den Flex-Faktor der Spur oder das Schlüsselwort `min-content`, `max-content` oder `auto` angibt, oder eine `minmax()` Funktion, deren erster Parameter eine positive `<length-percentage>` oder das Schlüsselwort `min-content`, `max-content` oder `auto` ist und deren zweiter Parameter eine positive `<length-percentage>` ist.

- `<value>`
  - : Zum Definieren von Abstandsregeln ist jeder `<value>` ein Wert, der von der Eigenschaft akzeptiert wird, in der das `repeat()` erscheint, wie ein {{cssxref("line-style")}}, {{cssxref("line-width")}}, {{cssxref("&lt;color&gt;")}}, oder alle drei als `<gap-rule>`.

## Beschreibung

Die `repeat()`-Funktion repräsentiert ein wiederholtes Fragment innerhalb einer durch Kommas oder Leerzeichen getrennten Werteliste, das es ermöglicht, ein wiederkehrendes Muster in einer kompakteren Form zu schreiben, das eine bestimmte Anzahl von Malen oder automatisch wiederholt werden kann.

Die generische Form der `repeat()`-Syntax lautet, ungefähr,

```css
repeat( <repeat-count>, <values-list> )
```

Das erste Argument, die **Wiederholungsanzahl**, gibt die Anzahl der Wiederholungen an. Es definiert, wie oft die Liste der im zweiten Parameter definierten Werte wiederholt werden sollte. Es wird entweder als Ganzzahlwert von `1` oder mehr oder als das Schlüsselwort `auto-fill`, `auto-fit` oder `auto` angegeben.

Das zweite Argument ist eine durch Kommas oder Leerzeichen getrennte Liste von Werten, die für die Eigenschaft, in der das `repeat()` erscheint, gültig sind. Es spezifiziert den **wiederholten Wertetyp**, der im Allgemeinen die _Tracks_ oder _Regel-Features_ sind, die wiederholt werden sollen.

- **Tracks**:
  - : Gibt die Menge an Tracks an, die wiederholt werden. Im Wesentlichen besteht dies aus einem oder mehreren durch Leerzeichen getrennten Werten, wobei jeder Wert die Größe dieses Tracks repräsentiert. Jede Größe wird entweder mit einem [`<track-size>`](#track-size)-Wert oder einem [`<fixed-size>`](#fixed-size)-Wert angegeben. Sie können auch vor oder nach jedem Track einen oder mehrere [Liniennamen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Trackgröße angeben.
- **Regel-Feature**:
  - : Gibt das Regel-Feature an, das wiederholt wird. Dies ist entweder eine kommagetrennte Liste von {{cssxref("&lt;color>")}}, {{cssxref("line-width")}}, oder {{cssxref("line-style")}} Werten, oder eine kommagetrennte Liste von Kurzdeklarationen, die die Farbe, Breite und den Stil der Linie setzen.

### Syntaxformen

Die Syntax der `repeat()`-Funktion hat mehrere Formen:

- `<track-repeat>` = `repeat( <integer>, [ <line-names>? <track-size> ]+ <line-names>? )`
  - : Der `<integer>` setzt die Wiederholungsanzahl.

    Die `<track-size>`-Werte setzen die Trackgröße. Eine `<track-size>` ist entweder eine {{cssxref("&lt;length-percentage&gt;")}}, ein {{cssxref("&lt;flex&gt;")}} Wert (ein positiver `fr`-Einheitswert), oder das Schlüsselwort `min-content`, `max-content` oder `auto`, eine {{cssxref("fit-content()")}} Funktion mit einem `<length-percentage>`-Parameter, oder eine {{cssxref("minmax()")}} Funktion. Für `minmax()` Track-Werte ist das `min` entweder eine `<length-percentage>`, oder das `min-content`, `max-content` oder `auto`-Schlüsselwort, während das `max` eines dieser sein kann, oder ein `<flex>`-Wert.

    Jede `<track-size>` wird optional von `<line-names>` vorangestellt, die aus null oder mehr durch Leerzeichen getrennten {{cssxref("&lt;custom-ident&gt;")}} Werten bestehen, die in eckigen Klammern eingeschlossen sind.

    Ein abschließendes `<line-names>` ist optional.

- `<auto-repeat>` = `repeat( auto-fill | auto-fit, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : Das `auto-fill` oder `auto-fit` Schlüsselwort setzt die Wiederholungsanzahl

    Die `<fixed-size>` setzt die Trackgröße. Eine `<fixed-size>` ist entweder ein `<length-percentage>`-Wert oder eine `minmax()`-Funktion, wobei entweder das `min` oder das `max` eine `<length-percentage>` ist und der andere Wert ebenfalls eine `<length-percentage>` ist oder auf das Schlüsselwort `min-content`, `max-content` oder `auto` gesetzt ist.

    Jede `<fixed-size>` wird optional von `<line-names>` vorangestellt.

    Das abschließende `<line-names>` ist optional.

- `<fixed-repeat>` = `repeat( <integer>, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : Dasselbe wie `<auto-repeat>`, außer dass der `<integer>` die Wiederholungsanzahl setzt, sodass es kein automatisches Wiederholen gibt.

- `<name-repeat>` = `repeat( [ <integer> | auto-fill ], <line-names>+)`
  - : Die Ganzzahl oder das `auto-fill` Schlüsselwort setzt die Wiederholungsanzahl

    Die `<line-names>` sind ein oder mehrere durch Leerzeichen getrennte {{cssxref("&lt;custom-ident&gt;")}} Werte, die in eckige Klammern eingeschlossen sind.

    Diese Linienneamen (anstelle von Trackgrößen) sind für [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) relevant.

- `<repeat-value-type>` = `repeat( <integer>, <value># )`
  - : Der `<integer>` setzt die Wiederholungsanzahl.

    Der `<value>` ist ein oder mehrere kommagetrennte gültige Werte für die Eigenschaft, auf der die `repeat()`-Funktion angewendet wird.

    Mehrere `repeat()`-Funktionen des `<repeat-value-type>` können innerhalb einer einzelnen Wertdeklaration verwendet werden.

- `<auto-repeat-value-type>` = `repeat( auto , <value># )`
  - : Das `auto` Schlüsselwort spezifiziert einen automatischen Wiederholer. Ein automatischer Wiederholer wird verwendet, um Werte für Lücken auszufüllen, die sonst keine Werte aus anderen Teilen der Liste erhalten würden.

    Der `<value>` ist ein oder mehrere kommagetrennte gültige Werte für die Eigenschaft, auf der die `repeat()`-Funktion angewendet wird.

    Höchstens eine `repeat()` in einer gegebenen Liste von Werten darf ein automatischer Wiederholer sein.

### Auto-fit versus auto-fill

Wenn der erste Parameter der `repeat()`-Funktion ein Schlüsselwort ist, entweder `auto-fill`, `auto-fit` oder `auto`, statt einer Ganzzahl, erzeugt er einen automatischen Wiederholer. Eine automatisch wiederholende `repeat()`-Funktion wiederholt die als zweiten Parameter angegebenen Werte so oft wie nötig.

Bei `auto-fill`, wenn der Container eine bestimmte oder maximale Größe auf der relevanten Achse hat, ist die Anzahl der Wiederholungen die größtmögliche positive Ganzzahl, die keinen Überlauf des Inhalts in seinen Container verursacht. Jedes Track wird als seine maximale Track-Bemessungsfunktion behandelt (jede unabhängige Wert, die verwendet wird, um `grid-template-rows` oder `grid-template-columns` zu definieren), sofern das definiert ist. Andernfalls, wenn keine bestimmte oder maximale Größe definiert ist, ist die `repeat()`-Funktion eine minimale Track-Bemessungsfunktion. Wenn eine beliebige Anzahl von Wiederholungen einen Überlauf verursachen würde, ist die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine bestimmte Mindestgröße auf der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinstmögliche positive Ganzzahl, die diese Mindestanforderung erfüllt. Andernfalls wiederholt die angegebene Trackliste sich nur einmal.

Der `auto-fit` Wert verhält sich gleich wie `auto-fill`, außer dass nach dem Platzieren der Grid-Elemente alle leeren wiederholten Tracks zusammengeklappt werden. Ein leerer Track ist einer, in den keine Flussgrid-Elemente platziert werden oder darüber hinweg spannt. (Dies kann dazu führen, dass alle Tracks zusammengeklappt werden, wenn sie alle leer sind.)

Ein zusammengeklappter Track wird als eine einzelne feste Track-Bemessungsfunktion von `0px` behandelt, und die Rinnen auf beiden Seiten davon werden zusammengeklappt.

Zum Zweck der Bestimmung der Anzahl von automatisch wiederholten Tracks gibt der Benutzeragent die Spurgröße auf einen benutzerspezifizierten Wert (z.B. `1px`) ab, um eine Division durch null zu vermeiden.

### Nutzungsregeln und Ausnahmen

Es gibt einige Regeln und Einschränkungen bei der Verwendung von `repeat()`:

Ein Eigenschaftswert kann mehrere `repeat()`-Funktionen enthalten.

```css example-good
.wrapper {
  grid-template-columns:
    repeat(2, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Ein Eigenschaftswert kann höchstens eine automatisch wiederholte `repeat()`-Funktion enthalten.

```css example-bad
.wrapper {
  row-rule:
    repeat(auto, yellow 3px solid, red 1px dashed),
    repeat(auto, green 5px dotted);
}
```

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, ist es nur erlaubt, `<fixed-repeat>` für alle zusätzlichen `repeat()`-Aufrufe zu verwenden. Automatische Wiederholungen (`auto-fill` oder `auto-fit`) können nicht mit vollständig intrinsischen oder flexiblen Größen kombiniert werden. Zum Beispiel ist dies ungültig, weil es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Die `repeat()`-Notation kann nicht innerhalb einer anderen `repeat()`-Funktion verschachtelt werden.

```css example-bad
.wrapper {
  grid-template-columns: repeat(
    2,
    minmax(min-content, max-content),
    repeat(3, 10px)
  );
  column-rule: repeat(
    auto,
    yellow 3px solid,
    repeat(5, green 5px dotted),
    red 1px dashed
  );
}
```

## Formale Syntax

{{CSSSyntaxRaw(`<repeat-line> <track-repeat> <auto-repeat> <fixed-repeat> <name-repeat> <auto-repeat-line>`)}}

## Beispiele

### Angabe von Grid-Spalten mit repeat()

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
- [Linienbasierte Platzierung mit CSS-Raster](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Template-Bereiche: Raster-Definition-Kurzformen](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps) Modul
