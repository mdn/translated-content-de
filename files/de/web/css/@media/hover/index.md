---
title: hover
slug: Web/CSS/@media/hover
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Die **`hover`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob der _primäre_ Eingabemechanismus des Benutzers über Elemente schweben kann.

## Syntax

Die `hover`-Funktion wird als Schlüsselwortwert aus der unten stehenden Liste angegeben.

- `none`
  - : Der primäre Eingabemechanismus kann überhaupt nicht schweben oder nicht bequem schweben (z. B. emulieren viele mobile Geräte das Schweben, wenn der Benutzer einen umständlichen langen Tap ausführt), oder es gibt keinen primären Zeige-Eingabemechanismus.
- `hover`
  - : Der primäre Eingabemechanismus kann bequem über Elementen schweben.

## Beispiele

### HTML

```html
<a href="#">Versuchen Sie, über mich zu schweben!</a>
```

### CSS

```css
/* Standard-Hover-Effekt */
a:hover {
  color: black;
  background: yellow;
}

@media (hover: hover) {
  /* wenn Hover unterstützt wird */
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

- [Medienabfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
