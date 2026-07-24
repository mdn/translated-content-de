---
title: "`repeat()` CSS-Funktion"
short-title: repeat()
slug: Web/CSS/Reference/Values/repeat
l10n:
  sourceCommit: 01b76b3a2afa161bd2481e3623d76f05de4b2797
---

Die **`repeat()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) repräsentiert ein wiederholtes Fragment der [Spurliste](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) oder der [Regellinien-Liste](/de/docs/Web/CSS/Guides/Gaps). Sie ermöglicht es, wiederholte Muster von Spalten, Zeilen und deren Abstandsdekorationen in kompakter Form zu schreiben.

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

Die `repeat()`-Funktion nimmt zwei Argumente: Das erste Argument gibt die [**Wiederholanzahl**](#repeat-count-values) an, und das zweite gibt die [**Liste der wiederholten Werte**](#repeated-values-list) an (die Liste der zu wiederholenden Werte).

#### Wiederholanzahl-Werte

- {{cssxref("integer")}}
  - : Eine positive ganze Zahl größer oder gleich `1`, die angibt, wie oft die Feature-Liste im zweiten Parameter wiederholt wird.

- `auto-fill`
  - : Gibt einen automatischen Wiederholer an, der das Auffüllen eines Raumes wiederholt. Löst sich in die größte Anzahl von Wiederholungen auf, die kein Überlaufen einer begrenzten (hat eine maximale Größe) Inhalts-Box verursacht. Wenn die Inhalts-Box eine Mindestgröße hat, dann die kleinste Anzahl von Wiederholungen, die die Mindestgröße erfüllt. Gibt es weder eine Mindest- noch eine Maximalgröße, löst sich in `1` auf. Bei Verwendung mit Subgrid muss der zweite Parameter eine Liste von Liniennamen sein.

- `auto-fit`
  - : Verhält sich wie `auto-fill`, außer dass nach der Platzierung der Grid-Items alle leeren wiederholten Spuren zusammengeklappt werden.

- `auto`
  - : Gibt einen automatischen Wiederholer an. Sobald die Werte aus anderen Bestandteilen des Eigenschaftswerts angewendet wurden, werden die Werte aus dem zweiten Parameter so oft wie nötig wiederholt, um fehlende Werte zu füllen.

#### Liste der wiederholten Werte

Eine Liste aus einem der folgenden Spurlistentypen. Ob die Komponenten der Liste durch Kommata oder Leerzeichen getrennt sind, hängt davon ab, welcher Trennzeichen für diesen Eigenschafts-Wertlistentyp erwartet wird.

- `<line-names>`
  - : Um Liniennamen zu Subgrids hinzuzufügen, besteht jedes `<line-names>` aus null oder mehr {{cssxref("&lt;custom-ident&gt;")}} Werten, die durch Leerzeichen getrennt und in eckige Klammern eingeschlossen sind, wie z.B. `[start header-start]`.

- `<track-size>`
  - : Jedes `<track-size>` ist ein positiver {{cssxref("&lt;length-percentage&gt;")}}, eine {{cssxref("minmax()")}}-Funktion mit dem ersten Parameter, der das Schlüsselwort `min-content`, `max-content` oder `auto` ist, oder ein positiver `<length-percentage>`, oder eine {{cssxref("fit-content()")}}-Funktion.

- `<fixed-size>`
  - : Jedes `<fixed-size>` ist entweder ein positiver `<length-percentage>`, oder eine `minmax()`-Funktion, deren erster Parameter ein positiver `<length-percentage>` ist und dessen zweiter Parameter eine nicht-negative Dimension mit der Einheit `fr` ist, die den Flex-Faktor der Spur oder das Schlüsselwort `min-content`, `max-content` oder `auto` angibt, oder eine `minmax()`-Funktion, deren erster Parameter ein positiver `<length-percentage>` oder das Schlüsselwort `min-content`, `max-content` oder `auto` ist, und dessen zweiter Parameter ein positiver `<length-percentage>` ist.

- `<value>`
  - : Zur Definition von Lückenregeln ist jedes `<value>` ein Wert, der von der Eigenschaft akzeptiert würde, in der `repeat()` erscheint, wie z.B. ein {{cssxref("line-style")}}, {{cssxref("line-width")}}, {{cssxref("&lt;color&gt;")}}, oder alle drei als `<gap-rule>`.

## Beschreibung

Die `repeat()`-Funktion repräsentiert ein wiederholtes Fragment innerhalb einer durch Kommas oder Leerzeichen getrennten Werteliste, die es ermöglicht, ein wiederkehrendes Muster in einer kompakteren Form zu schreiben, die eine angegebene Anzahl von Malen wiederholt oder automatisch wiederholt werden kann.

Die allgemeine Form der `repeat()`-Syntax ist etwa:

```css
repeat( <repeat-count>, <values-list> )
```

Das erste Argument, die **Wiederholanzahl**, gibt die Anzahl der Wiederholungen an. Es definiert, wie oft die im zweiten Parameter definierte Werteliste wiederholt werden soll. Es wird entweder als eine ganzzahlige Zahl von `1` oder mehr angegeben oder als das Schlüsselwort `auto-fill`, `auto-fit` oder `auto`.

Das zweite Argument ist eine durch Kommas oder Leerzeichen getrennte Liste von Werten, die für die Eigenschaft gültig sind, in der `repeat()` erscheint. Es spezifiziert den **wiederholten Wertetyp**, der im Allgemeinen die _Spuren_ oder _Regelfunktionen_ sind, die wiederholt werden sollen.

- **Spuren**:
  - : Gibt die Menge der Spuren an, die wiederholt werden. Diese besteht grundsätzlich aus einem oder mehreren durch Leerzeichen getrennten Werten, wobei jeder Wert die Größe dieser Spur repräsentiert. Jede Größe wird entweder unter Verwendung eines [`<track-size>`](#track-size)-Wertes oder eines [`<fixed-size>`](#fixed-size)-Wertes angegeben. Sie können auch einen oder mehrere [Liniennamen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) vor oder nach jeder Spur angeben, indem Sie [`<line-names>`](#line-names)-Werte vor und/oder nach der Spurgröße bereitstellen.
- **Regelfunktion**:
  - : Gibt die Regelfunktion an, die wiederholt wird. Diese ist entweder eine durch Kommas getrennte Liste von {{cssxref("&lt;color>")}}, {{cssxref("line-width")}} oder {{cssxref("line-style")}} Werten oder eine durch Kommas getrennte Liste von Kurzform-Erklärungen, die die Farbe, Breite und den Stil der Linie festlegen.

### Syntax-Formen

Die Syntax der `repeat()`-Funktion hat mehrere Formen:

- `<track-repeat>` = `repeat( <integer>, [ <line-names>? <track-size> ]+ <line-names>? )`
  - : Der `<integer>` gibt die Wiederholanzahl an.
  - : Die `<track-size>`-Werte setzen die Spurgröße. Eine `<track-size>` ist entweder eine {{cssxref("&lt;length-percentage&gt;")}}, ein {{cssxref("&lt;flex&gt;")}}-Wert (ein positiver `fr`-Einheitswert), oder das Schlüsselwort `min-content`, `max-content`, oder `auto`, eine {{cssxref("fit-content()")}}-Funktion mit einem `<length-percentage>`-Parameter, oder eine {{cssxref("minmax()")}}-Funktion. Für `minmax()`-Spurenwerte ist das `min` entweder eine `<length-percentage>` oder das Schlüsselwort `min-content`, `max-content` oder `auto`, während das `max` aus einem dieser, oder einem `<flex>`-Wert bestehen kann.
  - : Jede `<track-size>` wird optional von `<line-names>` vorangegangen, die null oder mehr durch Leerzeichen getrennte {{cssxref("&lt;custom-ident&gt;")}} Werte, eingeschlossen in eckigen Klammern, sind.
  - : Ein abschließendes `<line-names>` ist optional.

- `<auto-repeat>` = `repeat( auto-fill | auto-fit, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : Das Schlüsselwort `auto-fill` oder `auto-fit` setzt die Wiederholanzahl.
  - : Die `<fixed-size>` setzt die Spurgröße. Eine `<fixed-size>` ist entweder ein `<length-percentage>`-Wert, oder eine `minmax()`-Funktion mit entweder dem `min` oder `max`, die ein `<length-percentage>` sind und ein anderer Wert auch ein `<length-percentage>` ist, oder auf das Schlüsselwort `min-content`, `max-content`, oder `auto` gesetzt ist.
  - : Jede `<fixed-size>` wird optional von `<line-names>` vorangegangen.
  - : Das abschließende `<line-names>` ist optional.

- `<fixed-repeat>` = `repeat( <integer>, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : Gleich wie `<auto-repeat>`, außer dass der `<integer>` die Wiederholanzahl setzt, sodass es kein automatisches Wiederholen gibt.

- `<name-repeat>` = `repeat( [ <integer> | auto-fill ], <line-names>+)`
  - : Die ganzzahlige Zahl oder das `auto-fill`-Schlüsselwort setzt die Wiederholanzahl.
  - : Die `<line-names>` sind ein oder mehrere durch Leerzeichen getrennte {{cssxref("&lt;custom-ident&gt;")}} Werte, die in eckigen Klammern eingeschlossen sind.
  - : Diese Liniennamen (statt Spurgrößen) sind relevant für [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid).

- `<repeat-value-type>` = `repeat( <integer> , <value># )`
  - : Der `<integer>` setzt die Wiederholanzahl.
  - : Der `<value>` ist ein oder mehrere durch Kommas getrennte gültige Werte für die Eigenschaft, auf die die `repeat()`-Funktion angewendet wird.
  - : Mehrere `repeat()`-Funktionen des `<repeat-value-type>` können innerhalb einer einzelnen Wertangabe verwendet werden.

- `<auto-repeat-value-type>` = `repeat( auto , <value># )`
  - : Das `auto`-Schlüsselwort gibt einen automatischen Wiederholer an. Ein automatischer Wiederholer wird verwendet, um Werte für Lücken zu füllen, die andernfalls keine Werte aus anderen Teilen der Liste erhalten würden.
  - : Der `<value>` ist ein oder mehrere durch Kommas getrennte gültige Werte für die Eigenschaft, auf die die `repeat()`-Funktion angewendet wird.
  - : Höchstens eine `repeat()` in einer gegebenen Werteliste darf ein automatischer Wiederholer sein.

### Auto-fit versus Auto-fill

Wenn der erste Parameter der `repeat()`-Funktion ein Schlüsselwort ist, entweder `auto-fill`, `auto-fit` oder `auto`, anstatt einer ganzen Zahl, erstellt es einen automatischen Wiederholer. Eine automatisch wiederholende `repeat()`-Funktion wiederholt die im zweiten Parameter angegebenen Werte so oft wie nötig.

Mit `auto-fill`, wenn der Container eine definitive oder maximale Größe in der relevanten Achse gesetzt hat, ist die Anzahl der Wiederholungen die größte mögliche positive Ganzzahl, die den Inhalt nicht über seine Grenzen hinausschiebt. Jeder Spur wird als ihre maximale Spurgrößenfunktion behandelt (jede unabhängige Größe, die zum Definieren von `grid-template-rows` oder `grid-template-columns` verwendet wird), falls diese definiert ist. Andernfalls, wenn keine definitive oder maximale Größe definiert ist, ist die `repeat()`-Funktion eine minimale Spurgrößenfunktion. Wenn eine beliebige Anzahl von Wiederholungen überschreiten würde, ist die Wiederholung `1`. Andernfalls, wenn der Grid-Container eine bestimmte minimale Größe in der relevanten Achse hat, ist die Anzahl der Wiederholungen die kleinste mögliche positive Ganzzahl, die diese Mindestanforderung erfüllt. Andernfalls wird die angegebene Spurliste nur einmal wiederholt.

Der Wert `auto-fit` verhält sich genauso wie `auto-fill`, außer dass nach der Platzierung der Grid-Items alle leeren wiederholten Spuren zusammengeklappt werden. Eine leere Spur ist eine, in die keine in-flow-Grid-Items gelegt werden oder die nicht daran vorbeilaufen. (Dies kann dazu führen, dass alle Spuren zusammengeklappt werden, wenn sie alle leer sind.)

Eine zusammengeklappte Spur wird als mit einer einzigen festen Spurgrößenfunktion von `0px` behandelt, und die Zwischenräume auf beiden Seiten davon kollabieren.

Zum Zweck der Anzahl an automatisch wiederholten Spuren legt der Benutzer-Agent die Spurgröße auf einen vom Benutzer-Agent festgelegten Wert fest (z.B. `1px`), um das Dividieren durch Null zu vermeiden.

### Ausnahmen und Regeln zur Nutzung

Es gibt einige Regeln und Einschränkungen bei der Verwendung von `repeat()`:

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

Wenn eine Eigenschaftsdeklaration `<auto-repeat>` verwendet, ist es nur erlaubt, `<fixed-repeat>` für alle zusätzlichen `repeat()`-Aufrufe zu verwenden. Automatische Wiederholungen (`auto-fill` oder `auto-fit`) können nicht mit vollständig intrinsischen oder flexiblen Größen kombiniert werden. Dies ist zum Beispiel ungültig, da es die `<auto-repeat>`-Form mit der `<track-repeat>`-Form kombiniert:

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

### Festlegen von Grid-Spalten unter Verwendung von repeat()

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
- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Grid-Vorlagenbereiche: Grid-Definitionskurzschreibweise](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#grid_definition_shorthands)
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Modul
- [CSS-Gaps](/de/docs/Web/CSS/Guides/Gaps)-Modul
