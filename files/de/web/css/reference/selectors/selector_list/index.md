---
title: Selektor-Liste
slug: Web/CSS/Reference/Selectors/Selector_list
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die CSS-**Selektor-Liste** (`,`) wählt alle übereinstimmenden Knoten aus. Eine Selektor-Liste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren die gleichen Deklarationen teilen, können sie zusammen in einer durch Kommas getrennten Liste gruppiert werden. Selektor-Listen können auch als Parameter an einige funktionale CSS-Pseudoklassen übergeben werden. Ein Leerzeichen kann vor und/oder nach dem Komma erscheinen.

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

Wenn man dieselben Stile auf Elemente anwendet, die unterschiedliche Kriterien erfüllen, kann das Gruppieren der Selektoren in einer durch Kommas getrennten Liste die Konsistenz verbessern und gleichzeitig die Größe der Stylesheets reduzieren.

### Gruppierung in einer Zeile

Dieses Beispiel zeigt das Gruppieren von Selektoren in einer einzigen Zeile mithilfe einer durch Kommas getrennten Liste.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: "Helvetica", "Arial";
}
```

### Gruppierung in mehreren Zeilen

Dieses Beispiel zeigt das Gruppieren von Selektoren in mehreren Zeilen mithilfe einer durch Kommas getrennten Liste.

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## Gültige und ungültige Selektor-Listen

Ein ungültiger Selektor stellt nichts dar und passt daher auf nichts. Wenn eine Selektor-Liste einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert, mit Ausnahme der {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} Pseudoklassen, die [nachgiebige Selektor-Listen](#nachgiebige_selektor-liste) akzeptieren.

### Ungültige Selektor-Liste

Ein Nachteil bei der Verwendung einer Selektor-Liste ist, dass ein einziger nicht unterstützter Selektor in der Selektor-Liste die gesamte Regel ungültig macht.

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

Sie sind nicht gleichwertig. Im ersten Regelsatz werden die Stile auf die `h1`- und `h3`-Elemente angewendet, aber die `h2:invalid-pseudo`-Regel wird nicht geparst. Im zweiten Regelsatz wird der gesamte Regelsatz nicht geparst, da ein Selektor in der Liste ungültig ist. Daher wird kein Stil auf die `h1`- und `h3`-Elemente angewendet, da bei einem ungültigen Selektor in einer Liste von Selektoren der gesamte Stilblock ignoriert wird.

### Nachgiebige Selektor-Liste

Ein Weg, das Problem der [ungültigen Selektor-Liste](#ungültige_selektor-liste) zu beheben, ist die Verwendung der {{CSSxRef(":is", ":is()")}} oder der {{CSSxRef(":where", ":where()")}} Pseudoklasse, die eine nachgiebige Selektor-Liste akzeptiert. Jeder Selektor in einer nachgiebigen Selektor-Liste wird einzeln geparst. Ungültige Selektoren in der Liste werden ignoriert und die gültigen werden verwendet.

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

Der Unterschied zwischen den beiden ist, dass die Spezifität von `:is()` sein spezifischstes Argument ist, während der `:where()`-Selektor und der nachgiebige Selektor-Listen-Parameter keine Spezifizitätsgewichtung hinzufügen.

### Relative Selektor-Liste

Eine relative Selektor-Liste ist eine durch Kommas getrennte Selektor-Liste, die als [relative Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector) geparst wird, die mit einem expliziten oder implizierten Kombinator beginnen.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der kursivierte Stil auf `h2`-Überschriften angewendet, die direkt von `<p>` oder `<ul class="red">` gefolgt werden. Beachten Sie, dass Pseudoelemente und der `:has()`-Selektor innerhalb der [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) relativen Selektor-Liste nicht gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) Pseudoklassen akzeptieren nachgiebige Selektor-Listen.
- Die [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not) Pseudoklasse akzeptiert eine reguläre Selektor-Liste.
- Die [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) Pseudoklasse akzeptiert eine relative Selektor-Liste.
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
