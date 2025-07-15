---
title: ::-moz-list-bullet
slug: Web/CSS/::-moz-list-bullet
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-list-bullet`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den Marker (typischerweise ein Punkt) eines Listenelements ({{htmlelement("li")}}) in einer ungeordneten Liste ({{htmlelement("ul")}}) darstellt.

## Syntax

```css
li::-moz-list-bullet {
  /* ... */
}
```

## Beispiele

### Listenelement-Markierungen gestalten

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("::-moz-list-number")}}
- {{cssxref("::marker")}}
