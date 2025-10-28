---
title: ::-moz-list-number
slug: Web/CSS/::-moz-list-number
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-list-number`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die das Zeichen (typischerweise eine Zahl) eines Listenelements ({{HTMLElement("li")}}) in einer geordneten Liste ({{HTMLElement("ol")}}) darstellt.

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
