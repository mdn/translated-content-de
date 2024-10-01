---
title: inverted-colors
slug: Web/CSS/@media/inverted-colors
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Die **`inverted-colors`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu testen, ob der {{Glossary("user_agent", "User-Agent")}} oder das zugrunde liegende Betriebssystem alle Farben invertiert hat.

Die Invertierung von Farben kann unangenehme Nebeneffekte haben, wie zum Beispiel das Umwandeln von Schatten in Hervorhebungen, was die Lesbarkeit der Inhalte reduzieren kann. Mit diesem Media-Feature können Sie erkennen, ob eine Invertierung stattfindet und die Inhalte entsprechend benutzerfreundlich gestalten.

## Syntax

```css
/* Keyword value */
@media (inverted-colors: inverted) {
  /* styles to apply if inversion of colors is detected */
}
```

Das `inverted-colors` Feature wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Gibt an, dass die Farben normal angezeigt werden und keine Invertierung der Farben stattgefunden hat. Dieser Schlüsselwortwert wird als false bewertet.
- `inverted`
  - : Gibt an, dass alle Pixel im angezeigten Bereich invertiert wurden. Dieser Schlüsselwortwert wird als true bewertet.

## Beispiele

### Anwenden von Styles, wenn eine Farbinvertierung erkannt wird

Dieses Beispiel demonstriert die Auswirkungen beider `inverted-colors` Media-Feature-Schlüsselwortwerte und wenn das `inverted-colors` Media-Feature nicht unterstützt wird.

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
