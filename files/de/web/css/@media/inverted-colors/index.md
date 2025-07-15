---
title: inverted-colors
slug: Web/CSS/@media/inverted-colors
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`inverted-colors`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu testen, ob der {{Glossary("user_agent", "User-Agent")}} oder das zugrunde liegende Betriebssystem alle Farben invertiert hat.

Die Inversion von Farben kann unangenehme Nebenwirkungen haben, wie z.B. dass Schatten zu Hervorhebungen werden, was die Lesbarkeit des Inhalts verringern kann. Mit diesem Media-Feature können Sie erkennen, ob eine Inversion stattfindet, und den Inhalt entsprechend gestalten, während Sie die Benutzerpräferenz respektieren.

## Syntax

```css
/* Keyword value */
@media (inverted-colors: inverted) {
  /* styles to apply if inversion of colors is detected */
}
```

Das `inverted-colors`-Feature wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Gibt an, dass die Farben normal angezeigt werden und keine Inversion der Farben stattgefunden hat. Dieser Schlüsselwortwert wird als falsch ausgewertet.
- `inverted`
  - : Gibt an, dass alle Pixel im angezeigten Bereich invertiert wurden. Dieser Schlüsselwortwert wird als wahr ausgewertet.

## Beispiele

### Anwendung von Stilen bei erkannter Farbinversion

Dieses Beispiel zeigt die Effekte beider `inverted-colors` Media-Feature-Schlüsselwortwerte und wenn das `inverted-colors` Media-Feature nicht unterstützt wird.

#### HTML

```html
<p>
  If color inversion is detected, this text will appear blue on white (the
  inverse of yellow on black) along with a line over the text. If no color
  inversion is happening, the text will appear red on light gray without the
  line over the text.
</p>
<p>
  If the text is gray and no overline is present, it means your browser doesn't
  support the
  <code>inverted-colors</code> media feature.
</p>
```

#### CSS

```css
p {
  color: gray;
}

@media (inverted-colors: inverted) {
  p {
    background: black;
    color: yellow;
    text-decoration: overline;
  }
}

@media (inverted-colors: none) {
  p {
    background: #eee;
    color: red;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Applying styles if color inversion is detected")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@media](/de/docs/Web/CSS/@media)
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
