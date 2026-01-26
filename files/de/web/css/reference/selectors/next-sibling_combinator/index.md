---
title: Direkt-Nachfolger-Kombinator
slug: Web/CSS/Reference/Selectors/Next-sibling_combinator
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **Direkt-Nachfolger-Kombinator** (`+`) trennt zwei Selektoren und wählt das zweite Element nur aus, wenn es _unmittelbar_ auf das erste Element folgt und beide Kinder desselben übergeordneten [`Elements`](/de/docs/Web/API/Element) sind.

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

### Grundlegende Nutzung

Dieses Beispiel zeigt, wie man den nächsten Nachbarn auswählt, wenn dieser nächste Nachbar von einem bestimmten Typ ist.

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

### Auswahl eines vorherigen Nachbarn

Der Direkt-Nachfolger-Kombinator kann innerhalb des funktionalen Selektors {{cssxref(":has()")}} verwendet werden, um den vorherigen Nachbarn auszuwählen.

#### CSS

Wir stylen nur das `<li>`, das einen nächsten Nachbarn hat, der ein `<li>` ist, das das letzte seiner Art ist:

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

- [Benachbarter Nachfolger-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)
