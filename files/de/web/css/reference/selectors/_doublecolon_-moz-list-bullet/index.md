---
title: ::-moz-list-bullet
slug: Web/CSS/Reference/Selectors/::-moz-list-bullet
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-list-bullet`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die das Markierungszeichen (typischerweise ein Punkt) eines Listenelements ({{htmlelement("li")}}) in einer ungeordneten Liste ({{htmlelement("ul")}}) darstellt.

## Syntax

```css
li::-moz-list-bullet {
  /* ... */
}
```

## Beispiele

### Stylen von Listenelement-Markierungen

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### CSS

```css
::-moz-list-bullet {
  color: red;
  font-size: 1.5em;
}
```

#### Ergebnis

{{ EmbedLiveSample('Styling list item markers') }}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::-moz-list-number")}}
- {{cssxref("::marker")}}
