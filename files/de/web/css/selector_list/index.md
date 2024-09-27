---
title: Selektorliste
slug: Web/CSS/Selector_list
l10n:
  sourceCommit: be7a098e6af7b820c06a2d5169a9221ee2065e82
---

{{CSSRef}}

Die CSS **Selektorliste** (`,`) wählt alle übereinstimmenden Knoten aus. Eine Selektorliste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren die gleichen Deklarationen haben, können sie in einer durch Kommas getrennten Liste gruppiert werden. Selektorlisten können auch als Parameter an einige funktionale CSS-Pseudoklassen übergeben werden. Leerzeichen können vor und/oder nach dem Komma erscheinen.

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

Wenn dieselben Stile auf Elemente angewendet werden, die unterschiedlichen Kriterien entsprechen, kann das Gruppieren der Selektoren in einer durch Kommas getrennten Liste die Konsistenz verbessern und die Größe von Stylesheets reduzieren.

### Gruppierung in einer Zeile

Dieses Beispiel zeigt die Gruppierung von Selektoren in einer einzigen Zeile mittels einer durch Kommas getrennten Liste.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: helvetica;
}
```

### Gruppierung über mehrere Zeilen

Dieses Beispiel zeigt die Gruppierung von Selektoren über mehrere Zeilen hinweg mittels einer durch Kommas getrennten Liste.

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## Gültige und ungültige Selektorlisten

Ein ungültiger Selektor repräsentiert nichts und findet daher keine Übereinstimmungen. Wenn eine Selektorliste einen ungültigen Selektor enthält, wird der gesamte Style-Block ignoriert, außer bei den {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} Pseudoklassen, die [verzeihende Selektorlisten](#verzeihende_selektorliste) akzeptieren.

### Ungültige Selektorliste

Ein Nachteil der Verwendung einer Selektorliste besteht darin, dass ein einziger nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig macht.

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

Sie sind nicht gleichwertig. Im ersten Regelsatz werden Stile auf die `h1`- und `h3`-Elemente angewendet, aber die Regel `h2:invalid-pseudo` wird nicht interpretiert. Im zweiten Regelsatz wird, weil ein Selektor in der Liste ungültig ist, die gesamte Regel nicht interpretiert. Daher wird kein Stil auf die `h1`- und `h3`-Elemente angewendet, da, wenn ein Selektor in einer Liste von Selektoren ungültig ist, der gesamte Style-Block ignoriert wird.

### Verzeihende Selektorliste

Ein Weg, das Problem der [ungültigen Selektorliste](#ungültige_selektorliste) zu beheben, besteht darin, die {{CSSxRef(":is", ":is()")}} oder {{CSSxRef(":where", ":where()")}} Pseudoklasse zu verwenden, die eine verzeihende Selektorliste akzeptieren. Jeder Selektor in einer verzeihenden Selektorliste wird einzeln interpretiert. Ungültige Selektoren in der Liste werden ignoriert und die gültigen werden verwendet.

Ausgehend vom vorherigen Beispiel sind die folgenden zwei CSS-Regelsätze nun gleichwertig:

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

Der Unterschied zwischen den beiden besteht darin, dass die Spezifität von `:is()` ihr spezifischstes Argument ist, während der `:where()`-Selektor und der verzeihende Selektorlisten-Parameter kein Spezifitätsgewicht hinzufügen.

### Relative Selektorliste

Eine relative Selektorliste ist eine durch Kommas getrennte Selektorliste, die als [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) interpretiert wird, die mit einem expliziten oder implizierten Kombinator beginnen.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der kursive Stil auf alle `h2`-Überschriften angewendet, die unmittelbar von `<p>` oder `<ul class="red">` gefolgt werden. Beachten Sie, dass Pseudo-Elemente und der `:has()`-Selektor innerhalb der [`:has()`](/de/docs/Web/CSS/:has) relativen Selektorliste nicht gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where) Pseudoklassen akzeptieren verzeihende Selektorlisten.
- Die [`:not()`](/de/docs/Web/CSS/:not) Pseudoklasse akzeptiert eine reguläre Selektorliste.
- Die [`:has()`](/de/docs/Web/CSS/:has) Pseudoklasse akzeptiert eine relative Selektorliste.
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
