---
title: inverted-colors
slug: Web/CSS/Reference/At-rules/@media/inverted-colors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`inverted-colors`** [CSS](/de/docs/Web/CSS) [Media-Eigenschaft](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu testen, ob der {{Glossary("user_agent", "User Agent")}} oder das zugrunde liegende Betriebssystem alle Farben invertiert hat.

Die Inversion von Farben kann unangenehme Nebeneffekte haben, wie Schatten, die zu Hervorhebungen werden, was die Lesbarkeit der Inhalte reduzieren kann. Mit dieser Media-Eigenschaft können Sie erkennen, ob eine Inversion stattfindet, und die Inhalte entsprechend gestalten, während Sie die Benutzerpräferenz respektieren.

## Syntax

```css
/* Keyword value */
@media (inverted-colors: inverted) {
  /* styles to apply if inversion of colors is detected */
}
```

Die `inverted-colors`-Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Gibt an, dass die Farben normal angezeigt werden und keine Inversion der Farben stattgefunden hat. Dieser Schlüsselwortwert wird als falsch bewertet.
- `inverted`
  - : Gibt an, dass alle Pixel im angezeigten Bereich invertiert wurden. Dieser Schlüsselwortwert wird als wahr bewertet.

## Beispiele

### Anwenden von Stilen, wenn eine Farbinversion festgestellt wird

Dieses Beispiel zeigt die Auswirkungen beider `inverted-colors` Media-Eigenschafts-Schlüsselwortwerte und wenn die `inverted-colors` Media-Eigenschaft nicht unterstützt wird.

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
    background: #eeeeee;
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

- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
