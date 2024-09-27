---
title: Nächste-Geschwister-Kombinator
slug: Web/CSS/Next-sibling_combinator
l10n:
  sourceCommit: 297664ddfb70a04e87a73cd10ac06414245082be
---

{{CSSRef}}

Der **nächste-Geschwister-Kombinator** (`+`) trennt zwei Selektoren und wählt das zweite Element nur aus, wenn es _unmittelbar_ auf das erste Element folgt und beide Kinder desselben Eltern-[`elements`](/de/docs/Web/API/Element) sind.

```css
/* Paragraphs that come immediately after any image */
img + p {
  font-weight: bold;
}
```

## Syntax

```css-nolint
/* The white space around the + combinator is optional but recommended. */
former_element + target_element { style properties }
```

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man das nächste Geschwister auswählt, wenn dieses nächste Geschwister von einem bestimmten Typ ist.

#### CSS

Wir stylen nur das `<li>`, das unmittelbar auf ein `<li>` folgt, das das erste seines Typs ist:

```css
li:first-of-type + li {
  color: red;
  font-weight: bold;
}
```

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "100%", 100)}}

### Auswahl eines vorhergehenden Geschwisters

Der nächste-Geschwister-Kombinator kann innerhalb des funktionalen Selektors {{cssxref(":has", ":has()")}} verwendet werden, um das vorhergehende Geschwister auszuwählen.

#### CSS

Wir stylen nur das `<li>`, das ein folgendes Geschwister hat, das ein `<li>` ist und das letzte seines Typs ist:

```css
li:has(+ li:last-of-type) {
  color: red;
  font-weight: bold;
}
```

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three!</li>
  <li>Four</li>
</ul>
```

#### Ergebnis

{{EmbedLiveSample("Selecting a previous sibling", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nachfolgender Geschwisterkombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator)
