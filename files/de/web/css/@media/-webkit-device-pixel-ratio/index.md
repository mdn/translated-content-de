---
title: "-webkit-device-pixel-ratio"
slug: Web/CSS/@media/-webkit-device-pixel-ratio
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`-webkit-device-pixel-ratio`** ist eine nicht standardisierte Boolean-[CSS](/de/docs/Web/CSS)-[Medienfunktion](/de/docs/Web/CSS/@media#media_features), die eine Alternative zur standardisierten [`resolution`](/de/docs/Web/CSS/@media/resolution)-Medienfunktion darstellt.

> [!NOTE]
> Wenn möglich, verwenden Sie die [`resolution`](/de/docs/Web/CSS/@media/resolution)-Medienanfrage, da dies eine standardisierte Medienfunktion ist. Obwohl diese mit Präfix versehene Medienfunktion eine WebKit-Funktion ist, könnten auch andere Browser-Engines sie unterstützen. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten.

## Syntax

Die `-webkit-device-pixel-ratio`-Funktion wird als {{cssxref("&lt;number&gt;")}}-Wert angegeben. Es handelt sich um eine Bereichs-Funktion, was bedeutet, dass Sie auch die mit Präfix versehenen **`-webkit-min-device-pixel-ratio`**- und **`-webkit-max-device-pixel-ratio`**-Varianten verwenden können, um minimale und maximale Werte abzufragen.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Gerätepixel, die verwendet werden, um jedes CSS-[`px`](/de/docs/Web/CSS/length#absolute_length_units) darzustellen. Obwohl der Wert eine `<number>` ist und daher syntaktisch keine Einheiten erlaubt, ist die implizite Einheit [`dppx`](/de/docs/Web/CSS/resolution#units).

## Implementierung

```css
/* A unit of "dppx" is implied: */
@media (-webkit-min-device-pixel-ratio: 2) {
  /* … */
}
/* It is equivalent to: */
@media (min-resolution: 2dppx) {
  /* … */
}

/* Similarly: */
@media (-webkit-max-device-pixel-ratio: 2) {
  /* … */
}
/* It is equivalent to: */
@media (max-resolution: 2dppx) {
  /* … */
}
```

## Beispiele

### HTML

```html
<p>This is a test of your device's pixel density.</p>
```

### CSS

```css
/* Exact resolution */
@media (-webkit-device-pixel-ratio: 1) {
  p {
    color: red;
  }
}

/* Minimum resolution */
@media (-webkit-min-device-pixel-ratio: 1.1) {
  p {
    font-size: 1.5em;
  }
}

/* Maximum resolution */
@media (-webkit-max-device-pixel-ratio: 3) {
  p {
    background: yellow;
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
- {{cssxref("resolution")}}
- [`-webkit-transform-2d`](/de/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transition`](/de/docs/Web/CSS/@media/-webkit-transition)
- [`-webkit-animation`](/de/docs/Web/CSS/@media/-webkit-animation)
- [Von W3C empfohlene Methode zur Entfernung von Präfixen](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)
