---
title: Nachfolger-Geschwister-Kombinator
slug: Web/CSS/Next-sibling_combinator
l10n:
  sourceCommit: 297664ddfb70a04e87a73cd10ac06414245082be
---

{{CSSRef}}

Der **Nachfolger-Geschwister-Kombinator** (`+`) trennt zwei Selektoren und wählt das zweite Element nur aus, wenn es _unmittelbar_ auf das erste Element folgt, und beide Kinder desselben übergeordneten {{DOMxRef("element")}} sind.

```css
/* Absätze, die unmittelbar nach einem Bild kommen */
img + p {
  font-weight: bold;
}
```

## Syntax

```css-nolint
/* Der Leerraum um den + Kombinator ist optional, aber empfohlen. */
former_element + target_element { style properties }
```

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man das nächste Geschwisterelement auswählt, wenn dieses nächste Geschwisterelement einem bestimmten Typ entspricht.

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
  <li>Eins</li>
  <li>Zwei!</li>
  <li>Drei</li>
</ul>
```

#### Ergebnis

{{EmbedLiveSample("Basic usage", "100%", 100)}}

### Auswahl eines vorhergehenden Geschwisters

Der Nachfolger-Geschwister-Kombinator kann innerhalb des funktionalen Selektors {{cssxref(":has", ":has()")}} integriert werden, um das vorhergehende Geschwisterelement auszuwählen.

#### CSS

Wir stylen nur das `<li>`, mit einem nachfolgenden Geschwisterelement, das ein `<li>` ist und das letzte seiner Art ist:

```css
li:has(+ li:last-of-type) {
  color: red;
  font-weight: bold;
}
```

#### HTML

```html
<ul>
  <li>Eins</li>
  <li>Zwei</li>
  <li>Drei!</li>
  <li>Vier</li>
</ul>
```

#### Ergebnis

{{EmbedLiveSample("Selecting a previous sibling", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nachfolgender-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator)
