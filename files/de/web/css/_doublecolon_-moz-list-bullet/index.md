---
title: ::-moz-list-bullet
slug: Web/CSS/::-moz-list-bullet
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}{{SeeCompatTable}}

Der **`::-moz-list-bullet`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die den Marker (typischerweise ein Punkt) eines Listenelements ({{htmlelement("li")}}) in einer ungeordneten Liste ({{htmlelement("ul")}}) darstellt.

## Syntax

```css
li::-moz-list-bullet {
  /* ... */
}
```

## Beispiele

### Marker von Listenelementen stylen

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
