---
title: "::-moz-list-bullet"
slug: Web/CSS/::-moz-list-bullet
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-list-bullet`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den Marker (typischerweise ein Aufzählungszeichen) eines Listenelements ({{htmlelement("li")}}) in einer ungeordneten Liste ({{htmlelement("ul")}}) darstellt.

## Syntax

```css
li::-moz-list-bullet {
  /* ... */
}
```

## Beispiele

### Styling von Listenmarkierungen

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
