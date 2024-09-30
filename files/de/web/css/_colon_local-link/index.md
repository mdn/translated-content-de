---
title: ":local-link"
slug: Web/CSS/:local-link
l10n:
  sourceCommit: 4e002d26cb032c915aeee366f922f23cbacd8bf1
---

{{CSSRef}}

Die **`:local-link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) stellt einen Link zum gleichen Dokument dar. Daher ist ein Element, das die Quell-Anker eines Hyperlinks ist, dessen Ziel-URL mit der absoluten URL des Dokuments des Elements übereinstimmt.

```css
/* Selects any <a> that links to the current document */
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
<a href="#target">This is a link on the current page.</a><br />
<a href="https://example.com">This is an external link</a><br />
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

- Mit Links verbundene Pseudoklassen: {{ cssxref(":link") }}, {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}, {{ cssxref(":any-link") }}
