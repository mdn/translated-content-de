---
title: Next-sibling Kombinator
slug: Web/CSS/Next-sibling_combinator
l10n:
  sourceCommit: 297664ddfb70a04e87a73cd10ac06414245082be
---

{{CSSRef}}

Der **next-sibling Kombinator** (`+`) trennt zwei Selektoren und trifft auf das zweite Element nur zu, wenn es _unmittelbar_ dem ersten Element folgt und beide Kinder desselben übergeordneten [`Elements`](/de/docs/Web/API/Element) sind.

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

Dieses Beispiel zeigt, wie man das nächste Geschwisterelement auswählt, wenn dieses nächste Geschwisterelement von einem bestimmten Typ ist.

#### CSS

Wir stylen nur das `<li>`, das unmittelbar nach einem `<li>` kommt, das das erste seiner Art ist:

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

### Auswahl eines vorherigen Geschwisterelements

Der next-sibling Kombinator kann innerhalb des funktionalen Selektors {{cssxref(":has", ":has()")}} verwendet werden, um das vorherige Geschwisterelement auszuwählen.

#### CSS

Wir stylen nur das `<li>`, das ein nachfolgendes Geschwisterelement hat, das ein `<li>` ist, das das letzte seiner Art ist:

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

- [Subsequent-sibling Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator)
