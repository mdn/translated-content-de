---
title: inverted-colors
slug: Web/CSS/Reference/At-rules/@media/inverted-colors
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`inverted-colors`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu testen, ob der {{Glossary("user_agent", "User-Agent")}} oder das zugrunde liegende Betriebssystem alle Farben invertiert hat.

Die Inversion von Farben kann unangenehme Nebeneffekte haben, wie zum Beispiel, dass Schatten zu Hervorhebungen werden, was die Lesbarkeit des Inhalts verringern kann. Mit dieser Medienfunktion können Sie erkennen, ob eine Inversion stattfindet, und den Inhalt entsprechend der Benutzerpräferenz gestalten.

## Syntax

```css
/* Keyword value */
@media (inverted-colors: inverted) {
  /* styles to apply if inversion of colors is detected */
}
```

Die `inverted-colors`-Funktion wird als einer der folgenden Schlüsselwort-Werte angegeben:

- `none`
  - : Gibt an, dass die Farben normal angezeigt werden und keine Inversion der Farben stattgefunden hat. Dieser Schlüsselwort-Wert wird als falsch bewertet.
- `inverted`
  - : Gibt an, dass alle Pixel im angezeigten Bereich invertiert wurden. Dieser Schlüsselwort-Wert wird als wahr bewertet.

## Beispiele

### Anwenden von Stilen, wenn die Farbinversion erkannt wird

Dieses Beispiel demonstriert die Auswirkungen der Schlüsselwortwerte der `inverted-colors`-Medienfunktion und wenn die `inverted-colors`-Medienfunktion nicht unterstützt wird.

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
- [CSS-Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
