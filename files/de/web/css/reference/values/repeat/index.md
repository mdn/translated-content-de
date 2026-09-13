---
title: CSS-Funktion `repeat()`
short-title: repeat()
slug: Web/CSS/Reference/Values/repeat
l10n:
  sourceCommit: 870fe25a3e6ed1a44222c52dd8a992b731c1a383
---

Die **`repeat()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) repräsentiert ein wiederholtes Fragment der [Track-Liste](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) oder [Trennlinienliste](/de/docs/Web/CSS/Guides/Gaps). Sie ermöglicht es, wiederholte Muster aus Spalten, Zeilen und deren Lückenverzierungen in kompakter Form zu schreiben.

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

Diese Funktion kann mit den folgenden Features verwendet werden:

CSS-Grid-Eigenschaften:

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}

CSS-Lücken-Eigenschaften:

- {{cssxref("column-rule-color")}}
- {{cssxref("row-rule-color")}}
- Kurzform {{cssxref("rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-style")}}
- Kurzform {{cssxref("rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-width")}}
- Kurzform {{cssxref("rule-width")}}
- Kurzform {{cssxref("column-rule")}}
- Kurzform {{cssxref("row-rule")}}
- Kurzform {{cssxref("rule")}}

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

Die Funktion `repeat()` akzeptiert zwei Argumente: Das erste Argument gibt die [**Wiederholungsanzahl**](#werte_für_die_wiederholungsanzahl) an, und das zweite die [**Liste wiederholter Werte**](#liste_wiederholter_werte) (die Liste der zu wiederholenden Werte).

#### Werte für die Wiederholungsanzahl

- {{cssxref("integer")}}
  - : Eine positive ganze Zahl größer oder gleich `1`, die angibt, wie oft die Feature-Liste im zweiten Parameter wiederholt wird.

- `auto-fill`
  - : Gibt einen automatischen Wiederholer an, der wiederholt wird, um einen Bereich zu füllen. Wird zur größten Anzahl von Wiederholungen aufgelöst, die keinen Überlauf einer eingeschränkten (eine maximale Größe aufweisenden) Content-Box verursacht. Andernfalls wird, wenn die Content-Box eine minimale Größe hat, zur kleinsten Anzahl von Wiederholungen aufgelöst, die die Mindestgröße erfüllt. Wenn es weder eine minimale noch eine maximale Größe gibt, wird zu `1` aufgelöst. Bei Verwendung mit subgrid muss der zweite Parameter eine Liste von Zeilennamen sein.

- `auto-fit`
  - : Verhält sich wie `auto-fill`, mit der Ausnahme, dass nach der Platzierung von Grid-Elementen alle leeren wiederholten Tracks eingeklappt werden.

- `auto`
  - : Gibt einen automatischen Wiederholer an. Nachdem die Werte aus anderen Komponenten des Eigenschaftswerts angewendet wurden, werden die Werte des zweiten Parameters so oft wie nötig wiederholt und füllen alle fehlenden Werte aus.

#### Liste wiederholter Werte

Eine Liste aus einem der folgenden Track-Listentypen. Ob die Komponenten der Liste durch Kommas oder Leerzeichen getrennt werden, hängt davon ab, welches Trennzeichen für diesen Eigenschaftswertlistentyp erwartet wird.

- `<line-names>`
  - : Um Zeilennamen zu subgrids hinzuzufügen, besteht jedes `<line-names>` aus null oder mehr durch Leerzeichen getrennten {{cssxref("&lt;custom-ident&gt;")}}-Werten, die in eckige Klammern eingeschlossen sind, beispielsweise `[start header-start]`.

- `<track-size>`
  - : Jedes `<track-size>` ist ein positiver {{cssxref("&lt;length-percentage&gt;")}}, eine {{cssxref("minmax()")}}-Funktion, deren erster Parameter das Schlüsselwort `min-content`, `max-content` oder `auto` oder ein positiver `<length-percentage>` ist, oder eine {{cssxref("fit-content()")}}-Funktion.

- `<fixed-size>`
  - : Jedes `<fixed-size>` ist entweder ein positiver `<length-percentage>` oder eine `minmax()`-Funktion, deren erster Parameter ein positiver `<length-percentage>` und deren zweiter Parameter eine nicht negative Dimension mit der Einheit `fr` ist, die den Flex-Faktor des Tracks angibt, oder das Schlüsselwort `min-content`, `max-content` oder `auto`; oder eine `minmax()`-Funktion, deren erster Parameter ein positiver `<length-percentage>` oder das Schlüsselwort `min-content`, `max-content` oder `auto` und deren zweiter Parameter ein positiver `<length-percentage>` ist.

- `<value>`
  - : Zum Definieren von Lückentrennlinien ist jedes `<value>` ein Wert, der von der Eigenschaft akzeptiert würde, in der `repeat()` erscheint, beispielsweise ein {{cssxref("line-style")}}, {{cssxref("line-width")}}, {{cssxref("&lt;color&gt;")}} oder alle drei als `<gap-rule>`.

## Beschreibung

Die Funktion `repeat()` repräsentiert ein wiederholtes Fragment innerhalb einer durch Kommas oder Leerzeichen getrennten Werteliste und ermöglicht es, ein wiederkehrendes Muster in kompakterer Form zu schreiben, das eine angegebene Anzahl von Malen oder automatisch wiederholt werden kann.

Die allgemeine Form der `repeat()`-Syntax lautet ungefähr:

```css
repeat( <repeat-count>, <values-list> )
```

Das erste Argument, die **Wiederholungsanzahl**, gibt die Anzahl der Wiederholungen an. Es definiert, wie oft die im zweiten Parameter definierte Werteliste wiederholt werden soll. Es wird entweder als ganzzahliger Wert von `1` oder mehr oder als Schlüsselwort `auto-fill`, `auto-fit` oder `auto` angegeben.

Das zweite Argument ist eine durch Kommas oder Leerzeichen getrennte Liste von Werten, die für die Eigenschaft gültig sind, in der `repeat()` erscheint. Es gibt den **Typ des wiederholten Werts** an, bei dem es sich im Allgemeinen um die zu wiederholenden _Tracks_ oder _Trennlinien-Feature(s)_ handelt.

- **Tracks**:
  - : Gibt die Gruppe von Tracks an, die wiederholt werden. Grundsätzlich besteht diese aus einem oder mehreren durch Leerzeichen getrennten Werten, wobei jeder Wert die Größe dieses Tracks repräsentiert. Jede Größe wird entweder mit einem Wert vom Typ [`<track-size>`](#track-size) oder [`<fixed-size>`](#fixed-size) angegeben. Sie können außerdem vor oder nach jedem Track einen oder mehrere [Zeilennamen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Track-Größe bereitstellen.
- **Trennlinien-Feature**:
  - : Gibt das Trennlinien-Feature an, das wiederholt wird. Dies ist entweder eine durch Kommas getrennte Liste von {{cssxref("&lt;color>")}}, {{cssxref("line-width")}} oder {{cssxref("line-style")}}-Werten oder eine durch Kommas getrennte Liste von Kurzformdeklarationen, die Farbe, Breite und Stil der Linie festlegen.

### Syntaxformen

Die Syntax der Funktion `repeat()` hat mehrere Formen:

- `<track-repeat>` = `repeat( <integer>, [ <line-names>? <track-size> ]+ <line-names>? )`
  - : Das `<integer>` legt die Wiederholungsanzahl fest.

    Die `<track-size>`-Werte legen die Track-Größe fest. Ein `<track-size>` ist entweder ein {{cssxref("&lt;length-percentage&gt;")}}, ein {{cssxref("&lt;flex&gt;")}}-Wert (ein positiver `fr`-Einheitenwert), das Schlüsselwort `min-content`, `max-content` oder `auto`, eine {{cssxref("fit-content()")}}-Funktion mit einem `<length-percentage>`-Parameter oder eine {{cssxref("minmax()")}}-Funktion. Für `minmax()`-Track-Werte ist `min` entweder ein `<length-percentage>` oder das Schlüsselwort `min-content`, `max-content` oder `auto`, während `max` eines davon oder ein `<flex>`-Wert sein kann.

    Jedem `<track-size>` können optional `<line-names>` vorangestellt werden. Diese bestehen aus null oder mehr durch Leerzeichen getrennten {{cssxref("&lt;custom-ident&gt;")}}-Werten in eckigen Klammern.

    Abschließende `<line-names>` sind optional.

- `<auto-repeat>` = `repeat( auto-fill | auto-fit, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : Das Schlüsselwort `auto-fill` oder `auto-fit` legt die Wiederholungsanzahl fest.

    `<fixed-size>` legt die Track-Größe fest. Ein `<fixed-size>` ist entweder ein `<length-percentage>`-Wert oder eine `minmax()`-Funktion, bei der entweder `min` oder `max` ein `<length-percentage>` ist und der andere Wert ebenfalls ein `<length-percentage>` ist oder auf das Schlüsselwort `min-content`, `max-content` oder `auto` gesetzt ist.

    Jedem `<fixed-size>` können optional `<line-names>` vorangestellt werden.

    Abschließende `<line-names>` sind optional.

- `<fixed-repeat>` = `repeat( <integer>, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : Wie `<auto-repeat>`, außer dass `<integer>` die Wiederholungsanzahl festlegt, sodass keine automatische Wiederholung erfolgt.

- `<name-repeat>` = `repeat( [ <integer> | auto-fill ], <line-names>+)`
  - : Die ganze Zahl oder das Schlüsselwort `auto-fill` legt die Wiederholungsanzahl fest.

    `<line-names>` sind ein oder mehrere durch Leerzeichen getrennte {{cssxref("&lt;custom-ident&gt;")}}-Werte in eckigen Klammern.

    Diese Zeilennamen (statt Track-Größen) sind für [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) relevant.

- `<repeat-value-type>` = `repeat( <integer> , <value># )`
  - : Das `<integer>` legt die Wiederholungsanzahl fest.

    `<value>` sind ein oder mehrere durch Kommas getrennte gültige Werte für die Eigenschaft, auf die die Funktion `repeat()` angewendet wird.

    Mehrere `repeat()`-Funktionen des Typs `<repeat-value-type>` können innerhalb einer einzigen Wertdeklaration verwendet werden.

- `<auto-repeat-value-type>` = `repeat( auto , <value># )`
  - : Das Schlüsselwort `auto` gibt einen automatischen Wiederholer an. Ein automatischer Wiederholer wird verwendet, um Werte für Lücken auszufüllen, die andernfalls keine Werte aus anderen Teilen der Liste erhalten würden.

    `<value>` sind ein oder mehrere durch Kommas getrennte gültige Werte für die Eigenschaft, auf die die Funktion `repeat()` angewendet wird.

    Höchstens ein `repeat()` in einer bestimmten Werteliste darf ein automatischer Wiederholer sein.

### Auto-fit im Vergleich zu auto-fill

Wenn der erste Parameter der Funktion `repeat()` ein Schlüsselwort ist – entweder `auto-fill`, `auto-fit` oder `auto` – statt einer ganzen Zahl, wird ein automatischer Wiederholer erstellt. Eine sich automatisch wiederholende Funktion `repeat()` wiederholt die als zweiten Parameter angegebenen Werte so oft wie erforderlich.

Bei `auto-fill` ist die Anzahl der Wiederholungen die größtmögliche positive ganze Zahl, die nicht dazu führt, dass der Inhalt seinen Container überläuft, wenn der Container in der betreffenden Achse eine bestimmte oder maximale Größe hat. Dabei wird jeder Track als seine maximale Track-Größenfunktion behandelt (jeder unabhängige Wert, der zum Definieren von `grid-template-rows` oder `grid-template-columns` verwendet wird), falls diese bestimmt ist. Andernfalls ist die Funktion `repeat()` eine minimale Track-Größenfunktion, wenn keine bestimmte oder maximale Größe definiert ist. Wenn eine beliebige Anzahl von Wiederholungen einen Überlauf verursachen würde, ist die Wiederholung `1`. Andernfalls ist die Anzahl der Wiederholungen die kleinstmögliche positive ganze Zahl, die diese Mindestanforderung erfüllt, wenn der Grid-Container in der betreffenden Achse eine bestimmte Mindestgröße hat. Andernfalls wird die angegebene Track-Liste nur einmal wiederholt.

Der Wert `auto-fit` verhält sich genauso wie `auto-fill`, außer dass nach der Platzierung der Grid-Elemente alle leeren wiederholten Tracks eingeklappt werden. Ein leerer Track ist ein Track, in dem keine Grid-Elemente im normalen Fluss platziert sind oder über den sie sich erstrecken. (Dies kann dazu führen, dass alle Tracks eingeklappt werden, wenn sie alle leer sind.)

Ein eingeklappter Track wird behandelt, als hätte er eine einzelne feste Track-Größenfunktion von `0px`, und die Rinnen auf beiden Seiten werden eingeklappt.

Um die Anzahl automatisch wiederholter Tracks zu ermitteln, rundet der User-Agent die Track-Größe auf einen vom User-Agent festgelegten Wert ab (z. B. `1px`), um eine Division durch null zu vermeiden.

### Verwendungsausnahmen und Regeln

Bei der Verwendung von `repeat()` gibt es einige Regeln und Einschränkungen:

Ein Eigenschaftswert kann mehrere `repeat()`-Funktionen enthalten.

```css example-good
.wrapper {
  grid-template-columns:
    repeat(2, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Ein Eigenschaftswert kann höchstens eine automatisch wiederholende `repeat()`-Funktion enthalten.

```css example-bad
.wrapper {
  row-rule:
    repeat(auto, yellow 3px solid, red 1px dashed),
    repeat(auto, green 5px dotted);
}
```

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, darf sie für zusätzliche `repeat()`-Aufrufe nur `<fixed-repeat>` verwenden. Automatische Wiederholungen (`auto-fill` oder `auto-fit`) können nicht mit vollständig intrinsischen oder flexiblen Größen kombiniert werden. Beispielsweise ist Folgendes ungültig, da es die Form `<auto-repeat>` mit der Form `<track-repeat>` kombiniert:

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
- [Linienbasierte Platzierung mit CSS grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Template-Bereiche: Kurzformen für Grid-Definitionen](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
- Modul [CSS grid layout](/de/docs/Web/CSS/Guides/Grid_layout)
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
