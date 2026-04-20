---
title: "`hover` CSS Medienmerkmal"
short-title: hover
slug: Web/CSS/Reference/At-rules/@media/hover
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`hover`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob der _primäre_ Eingabemechanismus des Benutzers über Elemente schweben kann.

## Syntax

Das `hover`-Merkmal wird als ein Schlüsselwortwert angegeben, das aus der untenstehenden Liste ausgewählt wird.

- `none`
  - : Der primäre Eingabemechanismus kann überhaupt nicht schweben oder nicht bequem schweben (z.B. viele mobile Geräte emulieren das Schweben, wenn der Benutzer eine unbequeme lange Berührung durchführt), oder es gibt keinen primären Zeigegerät-Eingabemechanismus.
- `hover`
  - : Der primäre Eingabemechanismus kann bequem über Elemente schweben.

## Beispiele

### HTML

```html
<a href="#">Try hovering over me!</a>
```

### CSS

```css
/* default hover effect */
a:hover {
  color: black;
  background: yellow;
}

@media (hover: hover) {
  /* when hover is supported */
  a:hover {
    color: white;
    background: black;
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
