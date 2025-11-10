---
title: hover
slug: Web/CSS/Reference/At-rules/@media/hover
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`hover`** [CSS](/de/docs/Web/CSS) [Medienabfrage](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob das _primäre_ Eingabegerät des Benutzers über Elemente schweben kann.

## Syntax

Das `hover`-Feature wird als Schlüsselwortwert angegeben, das aus der nachstehenden Liste ausgewählt wird.

- `none`
  - : Das primäre Eingabegerät kann überhaupt nicht oder nicht bequem über Elemente schweben (z. B. simulieren viele mobile Geräte das Schweben, wenn der Benutzer einen unbequemen langen Tap ausführt), oder es gibt keinen primären Zeigeeingabemechanismus.
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

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
