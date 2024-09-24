---
title: invertierte-Farben
slug: Web/CSS/@media/inverted-colors
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Das **`inverted-colors`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu überprüfen, ob der {{glossary("user agent")}} oder das zugrunde liegende Betriebssystem alle Farben invertiert hat.

Die Invertierung von Farben kann unangenehme Nebeneffekte haben, wie z.B. das Umkehren von Schatten zu Hervorhebungen, was die Lesbarkeit des Inhalts verringern kann. Mit diesem Medien-Feature können Sie feststellen, ob eine Invertierung stattfindet, und den Inhalt entsprechend gestalten, während die Benutzervorlieben respektiert werden.

## Syntax

```css
/* Schlüsselwort-Wert */
@media (inverted-colors: inverted) {
  /* Stile, die angewendet werden, wenn eine Farbinvertierung festgestellt wird */
}
```

Das `inverted-colors` Feature wird als einer der folgenden Schlüsselwort-Werte spezifiziert:

- `none`
  - : Gibt an, dass die Farben normal angezeigt werden und keine Farbinvertierung stattgefunden hat. Dieser Schlüsselwort-Wert wird als falsch ausgewertet.
- `inverted`
  - : Gibt an, dass alle Pixel im angezeigten Bereich invertiert wurden. Dieser Schlüsselwort-Wert wird als wahr ausgewertet.

## Beispiele

### Anwenden von Stilen, wenn eine Farbinvertierung festgestellt wird

Dieses Beispiel demonstriert die Auswirkungen beider `inverted-colors` Medien-Feature-Schlüsselwortwerte und wann das `inverted-colors` Medien-Feature nicht unterstützt wird.

#### HTML

```html
<p>
  Wenn eine Farbinvertierung festgestellt wird, erscheint dieser Text blau auf weiß (das
  Inverse von gelb auf schwarz) zusammen mit einer Linie über dem Text. Wenn keine Farbinvertierung stattfindet, erscheint der Text rot auf hellgrau ohne die Linie über dem Text.
</p>
<p>
  Wenn der Text grau ist und keine Überlinie vorhanden ist, bedeutet dies, dass Ihr Browser das
  <code>inverted-colors</code> Medien-Feature nicht unterstützt.
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
