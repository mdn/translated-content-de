---
title: "::-moz-list-number"
slug: Web/CSS/::-moz-list-number
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-list-number`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den Marker (typischerweise eine Zahl) eines Listenelements ({{HTMLElement("li")}}) in einer geordneten Liste ({{HTMLElement("ol")}}) darstellt.

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

Gehört zu keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::-moz-list-bullet")}}
- {{cssxref("::marker")}}
