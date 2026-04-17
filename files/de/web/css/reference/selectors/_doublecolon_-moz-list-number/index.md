---
title: "`::-moz-list-number` CSS pseudo-element"
short-title: ::-moz-list-number
slug: Web/CSS/Reference/Selectors/::-moz-list-number
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-list-number`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die das Markierungselement (typischerweise eine Nummer) eines Listenelements ({{HTMLElement("li")}}) in einer geordneten Liste ({{HTMLElement("ol")}}) repräsentiert.

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
