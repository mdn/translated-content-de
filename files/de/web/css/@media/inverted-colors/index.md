---
title: inverted-colors
slug: Web/CSS/@media/inverted-colors
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Die **`inverted-colors`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu testen, ob der [User-Agent](/de/docs/Glossary/user_agent) oder das zugrunde liegende Betriebssystem alle Farben invertiert hat.

Die Inversion von Farben kann unangenehme Nebenwirkungen haben, wie zum Beispiel, dass Schatten in Lichtreflexe umgewandelt werden, was die Lesbarkeit der Inhalte beeinträchtigen kann. Mit diesem Media-Feature können Sie erkennen, ob eine Inversion stattfindet, und die Inhalte entsprechend gestalten, während Sie die Präferenz des Benutzers respektieren.

## Syntax

```css
/* Keyword value */
@media (inverted-colors: inverted) {
  /* styles to apply if inversion of colors is detected */
}
```

Das `inverted-colors`-Feature wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Gibt an, dass die Farben normal angezeigt werden und keine Inversion stattgefunden hat. Dieser Schlüsselwert wird als falsch bewertet.
- `inverted`
  - : Gibt an, dass alle Pixel im angezeigten Bereich invertiert wurden. Dieser Schlüsselwert wird als wahr bewertet.

## Beispiele

### Anwenden von Stilen bei erkannter Farbinversion

Dieses Beispiel zeigt die Auswirkungen beider `inverted-colors`-Media-Feature-Schlüsselwortwerte und wenn das `inverted-colors`-Media-Feature nicht unterstützt wird.

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

{{EmbedLiveSample("Anwenden von Stilen bei erkannter Farbinversion")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@media](/de/docs/Web/CSS/@media)
- [CSS media queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
