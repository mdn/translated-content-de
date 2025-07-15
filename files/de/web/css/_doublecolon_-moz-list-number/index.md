---
title: ::-moz-list-number
slug: Web/CSS/::-moz-list-number
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-list-number`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die das Markierungselement (typischerweise eine Nummer) eines Listenelements ({{HTMLElement("li")}}) in einer geordneten Liste ({{HTMLElement("ol")}}) darstellt.

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
