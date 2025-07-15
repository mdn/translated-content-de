---
title: Nachbar-Geschwister-Kombinator
slug: Web/CSS/Next-sibling_combinator
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **Nachbar-Geschwister-Kombinator** (`+`) trennt zwei Selektoren und wählt das zweite Element nur aus, wenn es _unmittelbar_ auf das erste Element folgt und beide Kinder desselben übergeordneten [`Elements`](/de/docs/Web/API/Element) sind.

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

Dieses Beispiel zeigt, wie man das nächste Geschwisterelement wählt, wenn dieses ein bestimmter Typ ist.

#### CSS

Wir stylen nur das `<li>`, das unmittelbar nach einem `<li>` kommt, welches das erste seiner Art ist:

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

### Auswahl eines vorherigen Geschwisters

Der Nachbar-Geschwister-Kombinator kann innerhalb des {{cssxref(":has", ":has()")}} Funktionsselektors verwendet werden, um das vorherige Geschwister auszuwählen.

#### CSS

Wir stylen nur das `<li>`, dessen nächstes Geschwister ein `<li>` ist, das das letzte seiner Art ist:

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

- [Subsequent-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator)
