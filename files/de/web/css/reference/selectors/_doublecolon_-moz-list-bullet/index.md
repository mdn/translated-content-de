---
title: "`::-moz-list-bullet` CSS pseudo-element"
short-title: ::-moz-list-bullet
slug: Web/CSS/Reference/Selectors/::-moz-list-bullet
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}{{SeeCompatTable}}

Das **`::-moz-list-bullet`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die das Marker-Element (typischerweise ein Aufzählungszeichen) eines Listenelements ({{htmlelement("li")}}) in einer ungeordneten Liste ({{htmlelement("ul")}}) darstellt.

## Syntax

```css
li::-moz-list-bullet {
  /* ... */
}
```

## Beispiele

### Gestaltung von Listenelement-Markern

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
