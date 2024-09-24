---
title: ":local-link"
slug: Web/CSS/:local-link
l10n:
  sourceCommit: 4e002d26cb032c915aeee366f922f23cbacd8bf1
---

{{CSSRef}}

Die **`:local-link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert einen Link zu demselben Dokument. Daher ist ein Element, das der Quellanker eines Hyperlinks ist, dessen Ziel-URL mit der absoluten URL des Dokuments des Elements übereinstimmt.

```css
/* Wählt jedes <a> aus, das auf das aktuelle Dokument verweist */
a:local-link {
  color: green;
}
```

## Syntax

```css
:local-link {
  /* ... */
}
```

## Beispiele

### HTML

```html
<a href="#target">Dies ist ein Link auf der aktuellen Seite.</a><br />
<a href="https://example.com">Dies ist ein externer Link</a><br />
```

### CSS

```css
a:local-link {
  color: green;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieses Feature ist ein Vorschlag, der in die Spezifikation integriert ist. Derzeit wird es von keinem Browser unterstützt.

## Siehe auch

- Link-bezogene Pseudoklassen: {{ cssxref(":link") }}, {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}, {{ cssxref(":any-link") }}
