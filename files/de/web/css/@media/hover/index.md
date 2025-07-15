---
title: hover
slug: Web/CSS/@media/hover
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`hover`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob das _primäre_ Eingabegerät des Benutzers über Elemente schweben kann.

## Syntax

Das `hover`-Feature wird als ein Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Das primäre Eingabegerät kann überhaupt nicht oder nicht bequem über Elemente schweben (z. B. emulieren viele mobile Geräte das Schweben, wenn der Benutzer einen umständlichen langen Tap ausführt), oder es gibt kein primäres Zeigegerät.
- `hover`
  - : Das primäre Eingabegerät kann bequem über Elemente schweben.

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
