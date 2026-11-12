---
title: Kombinator für unmittelbar folgende Geschwisterelemente
slug: Web/CSS/Reference/Selectors/Next-sibling_combinator
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Der **Kombinator für unmittelbar folgende Geschwisterelemente** (`+`) trennt zwei Selektoren und wählt das zweite Element nur dann aus, wenn es _unmittelbar_ auf das erste Element folgt und beide Kinder desselben übergeordneten [`element`](/de/docs/Web/API/Element) sind.

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

Dieses Beispiel zeigt, wie Sie das unmittelbar folgende Geschwisterelement auswählen, wenn es einem bestimmten Typ entspricht.

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>
```

#### CSS

Wir formatieren nur das `<li>`, das unmittelbar auf ein `<li>` folgt, das das erste Element seines Typs ist:

```css
li:first-of-type + li {
  color: red;
  font-weight: bold;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "100%", 100)}}

### Ein vorheriges Geschwisterelement auswählen

Der Kombinator für unmittelbar folgende Geschwisterelemente kann innerhalb des funktionalen Selektors {{cssxref(":has()")}} verwendet werden, um das vorherige Geschwisterelement auszuwählen.

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three!</li>
  <li>Four</li>
</ul>
```

#### CSS

Wir formatieren nur das `<li>`, dessen unmittelbar folgendes Geschwisterelement ein `<li>` ist, das das letzte Element seines Typs ist:

```css
li:has(+ li:last-of-type) {
  color: red;
  font-weight: bold;
}
```

#### Ergebnis

{{EmbedLiveSample("Selecting a previous sibling", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kombinator für nachfolgende Geschwisterelemente](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)
