---
title: Selector list
slug: Web/CSS/Selector_list
l10n:
  sourceCommit: be7a098e6af7b820c06a2d5169a9221ee2065e82
---

{{CSSRef}}

Die CSS **Selektorliste** (`,`) wählt alle übereinstimmenden Knoten aus. Eine Selektorliste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren die gleichen Deklarationen teilen, können sie in einer durch Kommas getrennten Liste gruppiert werden. Selektorlisten können auch als Parameter an einige funktionale CSS-Pseudoklassen übergeben werden. Vor und/oder nach dem Komma kann ein Leerzeichen erscheinen.

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

Wenn dieselben Stile auf Elemente angewendet werden, die unterschiedlichen Kriterien entsprechen, kann das Gruppieren der Selektoren in einer durch Kommas getrennten Liste die Konsistenz verbessern und gleichzeitig die Größe der Stylesheets reduzieren.

### Einzeiliges Gruppieren

Dieses Beispiel zeigt das Gruppieren von Selektoren in einer einzigen Zeile unter Verwendung einer durch Kommas getrennten Liste.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: helvetica;
}
```

### Mehrzeiliges Gruppieren

Dieses Beispiel zeigt das Gruppieren von Selektoren auf mehrere Zeilen verteilt unter Verwendung einer durch Kommas getrennten Liste.

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## Gültige und ungültige Selektorlisten

Ein ungültiger Selektor repräsentiert, und passt daher auf, nichts. Wenn eine Selektorliste einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert, mit Ausnahme der {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} Pseudoklassen, die [fehlertolerante Selektorlisten](#fehlertolerante_selektorliste) akzeptieren.

### Ungültige Selektorliste

Ein Nachteil der Verwendung einer Selektorliste ist, dass ein einziger nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig macht.

Betrachten Sie die folgenden zwei CSS-Regelsätze:

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

Sie sind nicht gleichwertig. Im ersten Regelsatz werden Stile auf die `h1`- und `h3`-Elemente angewendet, aber die `h2:invalid-pseudo`-Regel wird nicht verarbeitet. Im zweiten Regelsatz wird aufgrund eines ungültigen Selektors in der Liste die gesamte Regel nicht verarbeitet. Aus diesem Grund wird kein Stil auf die `h1`- und `h3`-Elemente angewendet, da bei einem ungültigen Selektor in einer Selektorliste der gesamte Stilblock ignoriert wird.

### Fehlertolerante Selektorliste

Eine Möglichkeit, das Problem der [ungültigen Selektorliste](#ungültige_selektorliste) zu beheben, ist die Verwendung der {{CSSxRef(":is", ":is()")}} oder der {{CSSxRef(":where", ":where()")}} Pseudoklasse, die eine fehlertolerante Selektorliste akzeptieren. Jeder Selektor in einer fehlertoleranten Selektorliste wird einzeln geparst. Alle ungültigen Selektoren in der Liste werden ignoriert und die gültigen verwendet.

Ausgehend vom vorherigen Beispiel sind die folgenden zwei CSS-Regelsätze jetzt gleichwertig:

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

Der Unterschied zwischen den beiden ist, dass die Spezifität von `:is()` ihr spezifischstes Argument ist, während der `:where()`-Selektor und der fehlertolerante Selektorlistenparameter kein Spezifizitätsgewicht hinzufügen.

### Relative Selektorliste

Eine relative Selektorliste ist eine durch Kommas getrennte Selektorliste, die als [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) geparst wird, die mit einem expliziten oder implizierten Kombinator beginnen.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der kursive Stil auf jeden `h2`-Überschrift angewendet, die unmittelbar von einem `<p>` oder `<ul class="red">` gefolgt wird. Beachten Sie, dass Pseudoelemente und der `:has()`-Selektor nicht innerhalb der [`:has()`](/de/docs/Web/CSS/:has) relativen Selektorliste gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where) Pseudoklassen akzeptieren fehlertolerante Selektorlisten.
- Die [`:not()`](/de/docs/Web/CSS/:not) Pseudoklasse akzeptiert eine reguläre Selektorliste.
- Die [`:has()`](/de/docs/Web/CSS/:has) Pseudoklasse akzeptiert eine relative Selektorliste.
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
