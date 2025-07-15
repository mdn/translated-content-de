---
title: Selektorenliste
slug: Web/CSS/Selector_list
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die CSS **Selektorenliste** (`,`) wählt alle passenden Knoten aus. Eine Selektorenliste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren dieselben Deklarationen teilen, können sie in einer durch Kommas getrennten Liste zusammengefasst werden. Selektorenlisten können auch als Parameter an einige funktionale CSS-Pseudoklassen übergeben werden. Vor und/oder nach dem Komma kann ein Leerzeichen stehen.

Die folgenden drei Deklarationen sind gleichwertig:

```css
span {
  border: red 2px solid;
}
div {
  border: red 2px solid;
}
```

```css
span,
div {
  border: red 2px solid;
}
```

```css
:is(span, div) {
  border: red 2px solid;
}
```

## Beispiele

Wenn dieselben Stile auf Elemente angewendet werden, die unterschiedlichen Kriterien entsprechen, kann das Gruppieren der Selektoren in einer durch Kommas getrennten Liste die Konsistenz verbessern und gleichzeitig die Größe von Stylesheets reduzieren.

### Einzeiliges Gruppieren

Dieses Beispiel zeigt das Gruppieren von Selektoren in einer einzelnen Zeile unter Verwendung einer durch Kommas getrennten Liste.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: Helvetica, Arial;
}
```

### Mehrzeiliges Gruppieren

Dieses Beispiel zeigt das Gruppieren von Selektoren in mehreren Zeilen unter Verwendung einer durch Kommas getrennten Liste.

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## Gültige und ungültige Selektorenlisten

Ein ungültiger Selektor stellt nichts dar und passt daher zu nichts. Wenn eine Selektorenliste einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert, mit Ausnahme der {{CSSxRef(":is", ":is()")}}- und {{CSSxRef(":where", ":where()")}}-Pseudoklassen, die [verzeihende Selektorenlisten](#verzeihende_selektorenliste) akzeptieren.

### Ungültige Selektorenliste

Ein Nachteil der Verwendung einer Selektorenliste besteht darin, dass ein einziger nicht unterstützter Selektor in der Liste die gesamte Regel ungültig macht.

Betrachten Sie die folgenden beiden CSS-Regelsätze:

```css
h1 {
  font-family: sans-serif;
}
h2:invalid-pseudo {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
h1,
h2:invalid-pseudo,
h3 {
  font-family: sans-serif;
}
```

Sie sind nicht gleichwertig. Im ersten Regelsatz werden die Stile auf die `h1`- und `h3`-Elemente angewendet, aber die `h2:invalid-pseudo`-Regel wird nicht geparst. Im zweiten Regelsatz wird die gesamte Regel nicht geparst, da ein Selektor in der Liste ungültig ist. Daher wird kein Stil auf die `h1`- und `h3`-Elemente angewendet, da der gesamte Stilblock ignoriert wird, wenn ein Selektor in einer Liste ungültig ist.

### Verzeihende Selektorenliste

Ein Weg, das Problem der [ungültigen Selektorenliste](#ungültige_selektorenliste) zu beheben, besteht darin, die {{CSSxRef(":is", ":is()")}}- oder die {{CSSxRef(":where", ":where()")}}-Pseudoklasse zu verwenden, die eine verzeihende Selektorenliste akzeptiert. Jeder Selektor in einer verzeihenden Selektorenliste wird einzeln geparst. Ungültige Selektoren in der Liste werden ignoriert und die gültigen werden verwendet.

Ausgehend vom vorherigen Beispiel sind die folgenden beiden CSS-Regelsätze nun gleichwertig:

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
:is(h1, h2:maybe-unsupported, h3) {
  font-family: sans-serif;
}
```

Der Unterschied zwischen den beiden besteht darin, dass die Spezifität von `:is()` ihr spezifischstes Argument ist, während der `:where()`-Selektor und der verzeihende Selektorenlisten-Parameter keine Spezifitätsgewichtung hinzufügen.

### Relative Selektorenliste

Eine relative Selektorenliste ist eine durch Kommas getrennte Selektorenliste, die als [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) geparst wird und mit einem expliziten oder impliziten Kombinator beginnt.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der kursivierte Stil auf jede `h2`-Überschrift angewendet, die unmittelbar von `<p>` oder `<ul class="red">` gefolgt wird. Beachten Sie, dass Pseudoelemente und der `:has()`-Selektor innerhalb der [`:has()`](/de/docs/Web/CSS/:has) relativen Selektorenliste nicht gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where) Pseudoklassen akzeptieren verzeihende Selektorenlisten.
- Die [`:not()`](/de/docs/Web/CSS/:not) Pseudoklasse akzeptiert eine reguläre Selektorenliste.
- Die [`:has()`](/de/docs/Web/CSS/:has) Pseudoklasse akzeptiert eine relative Selektorenliste.
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
