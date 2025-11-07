---
title: Auswahlliste
slug: Web/CSS/Reference/Selectors/Selector_list
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Die CSS **Auswahlliste** (`,`) wählt alle passenden Knoten aus. Eine Auswahlliste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren dieselben Deklarationen teilen, können sie zu einer durch Kommas getrennten Liste zusammengefasst werden. Auswahllisten können auch als Parameter an einige funktionale CSS-Pseudoklassen übergeben werden. Vor und/oder nach dem Komma darf ein Leerzeichen erscheinen.

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

Wenn die gleichen Stile auf Elemente angewendet werden, die unterschiedlichen Kriterien entsprechen, kann das Gruppieren der Selektoren in einer durch Kommas getrennten Liste die Konsistenz verbessern und gleichzeitig die Größe der Stylesheets verringern.

### Einzeilige Gruppierung

Dieses Beispiel zeigt das Gruppieren von Selektoren in einer einzigen Zeile mit einer durch Kommas getrennten Liste.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: "Helvetica", "Arial";
}
```

### Mehrzeilige Gruppierung

Dieses Beispiel zeigt das Gruppieren von Selektoren in mehreren Zeilen mit einer durch Kommas getrennten Liste.

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## Gültige und ungültige Auswahllisten

Ein ungültiger Selektor repräsentiert, und passt daher auf, nichts. Wenn eine Auswahlliste einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert, mit Ausnahme der {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} Pseudoklassen, die [verzeihende Auswahllisten](#verzeihende_auswahlliste) akzeptieren.

### Ungültige Auswahlliste

Ein Nachteil der Verwendung einer Auswahlliste ist, dass ein einzelner nicht unterstützter Selektor in der Auswahlliste die gesamte Regel ungültig macht.

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

Sie sind nicht gleichwertig. Im ersten Regelsatz werden die Stile auf die `h1` und `h3` Elemente angewendet, aber die `h2:invalid-pseudo` Regel wird nicht verarbeitet. Im zweiten Regelsatz wird, da ein Selektor in der Liste ungültig ist, die gesamte Regel nicht verarbeitet. Daher wird kein Stil auf die `h1` und `h3` Elemente angewendet, da bei einer ungültigen Auswahlliste der gesamte Stilblock ignoriert wird.

### Verzeihende Auswahlliste

Ein Weg, das Problem der [ungültigen Auswahlliste](#ungültige_auswahlliste) zu beheben, ist die Verwendung der {{CSSxRef(":is", ":is()")}} oder der {{CSSxRef(":where", ":where()")}} Pseudoklasse, die eine verzeihende Auswahlliste akzeptiert. Jeder Selektor in einer verzeihenden Auswahlliste wird individuell geparst. Daher werden ungültige Selektoren in der Liste ignoriert und die gültigen verwendet.

In Fortsetzung des vorherigen Beispiels sind die folgenden zwei CSS-Regelsätze nun gleichwertig:

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

Der Unterschied zwischen den beiden ist, dass die Spezifizität von `:is()` ihr spezifischstes Argument ist, während der `:where()` Selektor und der Parameter der verzeihenden Auswahlliste kein spezifisches Gewicht hinzufügen.

### Relative Auswahlliste

Eine relative Auswahlliste ist eine durch Kommas getrennte Auswahlliste, die als [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) geparst wird, die mit einem expliziten oder implizierten Kombinator beginnen.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der kursive Stil auf jede `h2` Überschrift angewendet, die unmittelbar von `<p>` oder `<ul class="red">` gefolgt wird. Beachten Sie, dass Pseudo-Elemente und der `:has()` Selektor innerhalb der [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) relativen Auswahlliste nicht gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) Pseudoklassen akzeptieren verzeihende Auswahllisten.
- Die [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not) Pseudoklasse akzeptiert eine reguläre Auswahlliste.
- Die [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) Pseudoklasse akzeptiert eine relative Auswahlliste.
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
