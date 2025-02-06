---
title: ::-moz-list-number
slug: Web/CSS/::-moz-list-number
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-list-number`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die das Markierungszeichen (typischerweise eine Nummer) eines Listenelements ({{HTMLElement("li")}}) in einer geordneten Liste ({{HTMLElement("ol")}}) darstellt.

## Syntax

```css
li::-moz-list-number {
  /* ... */
}
```

## Beispiele

### HTML

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### CSS

```css
li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::-moz-list-bullet")}}
- {{cssxref("::marker")}}
