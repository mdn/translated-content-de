---
title: hover
slug: Web/CSS/Reference/At-rules/@media/hover
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`hover`** [CSS](/de/docs/Web/CSS) [Media-Eigenschaft](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob der _primäre_ Eingabemechanismus des Benutzers über Elemente fahren kann.

## Syntax

Die `hover`-Eigenschaft wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Der primäre Eingabemechanismus kann überhaupt nicht über Elemente fahren oder nicht bequem darüber fahren (z. B. simulieren viele mobile Geräte das Fahren, wenn der Benutzer einen umständlichen langen Druck ausführt), oder es gibt keinen primären Zeige-Eingabemechanismus.
- `hover`
  - : Der primäre Eingabemechanismus kann bequem über Elemente fahren.

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
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
