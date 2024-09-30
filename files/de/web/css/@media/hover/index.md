---
title: hover
slug: Web/CSS/@media/hover
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Das **`hover`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob der _primäre_ Eingabemechanismus des Benutzers über Elemente schweben kann.

## Syntax

Das `hover`-Feature wird als ein Schlüsselwortwert angegeben, der aus der untenstehenden Liste ausgewählt wird.

- `none`
  - : Der primäre Eingabemechanismus kann überhaupt nicht schweben oder nicht bequem schweben (z.B. emulieren viele mobile Geräte das Schweben, wenn der Benutzer einen unbequemen langen Tippen ausführt), oder es gibt keinen primären Zeige-Eingabemechanismus.
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

- [Verwenden von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
