---
title: Next-Sibling-Kombinator
slug: Web/CSS/Reference/Selectors/Next-sibling_combinator
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der **Next-Sibling-Kombinator** (`+`) trennt zwei Selektoren und wählt das zweite Element nur aus, wenn es dem ersten Element _unmittelbar_ folgt und beide dasselbe übergeordnete [`Element`](/de/docs/Web/API/Element) haben.

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

Dieses Beispiel demonstriert, wie man das nächste Geschwisterelement auswählt, wenn dieses von einem bestimmten Typ ist.

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

### Ein vorheriges Geschwisterelement auswählen

Der Next-Sibling-Kombinator kann innerhalb des {{cssxref(":has", ":has()")}} Funktionsselektors verwendet werden, um das vorherige Geschwisterelement auszuwählen.

#### CSS

Wir stylen nur das `<li>`, das ein nächstes Geschwisterelement hat, das ein `<li>` ist und das letzte seiner Art:

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

- [Subsequent-Sibling-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)
