---
title: inverted-colors
slug: Web/CSS/@media/inverted-colors
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Das **`inverted-colors`** [CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu überprüfen, ob der {{Glossary("user_agent", "User-Agent")}} oder das zugrunde liegende Betriebssystem alle Farben invertiert hat.

Die Invertierung von Farben kann unangenehme Nebenwirkungen haben, wie beispielsweise, dass Schatten zu Hervorhebungen werden, was die Lesbarkeit der Inhalte verringern kann. Mit diesem Medienmerkmal können Sie erkennen, ob eine Invertierung stattfindet, und die Inhalte entsprechend gestalten, während Sie die Benutzerpräferenz respektieren.

## Syntax

```css
/* Keyword value */
@media (inverted-colors: inverted) {
  /* styles to apply if inversion of colors is detected */
}
```

Das `inverted-colors`-Merkmal wird als einer der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Gibt an, dass die Farben normal angezeigt werden und keine Invertierung der Farben stattgefunden hat. Dieser Schlüsselwortwert wird als falsch ausgewertet.
- `inverted`
  - : Gibt an, dass alle Pixel im angezeigten Bereich invertiert wurden. Dieser Schlüsselwortwert wird als wahr ausgewertet.

## Beispiele

### Anwenden von Stilen, wenn eine Farbinvertierung erkannt wird

Dieses Beispiel zeigt die Auswirkungen beider `inverted-colors`-Medienmerkmalsschlüsselwortwerte und wenn das `inverted-colors`-Medienmerkmal nicht unterstützt wird.

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

- [@media](/de/docs/Web/CSS/@media)
- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries)-Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
