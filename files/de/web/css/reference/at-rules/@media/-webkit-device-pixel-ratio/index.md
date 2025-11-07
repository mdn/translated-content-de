---
title: -webkit-device-pixel-ratio
slug: Web/CSS/Reference/At-rules/@media/-webkit-device-pixel-ratio
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`-webkit-device-pixel-ratio`** ist ein nicht standardmäßiges, Boolean-basiertes [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), das eine Alternative zu dem standardmäßigen [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Medien-Feature darstellt.

> [!NOTE]
> Wenn möglich, verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Medien-Feature-Abfrage, die ein standardisiertes Medien-Feature ist. Obwohl dieses mit Präfix versehene Medien-Feature ein WebKit-Feature ist, könnten andere Browser-Engines es unterstützen. Siehe unten [Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

Das `-webkit-device-pixel-ratio` Feature wird als {{cssxref("&lt;number&gt;")}} Wert spezifiziert. Es handelt sich um ein Bereichsfeature, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`-webkit-min-device-pixel-ratio`** und **`-webkit-max-device-pixel-ratio`** verwenden können, um jeweils minimale und maximale Werte abzufragen.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Geräte-Pixel, die verwendet werden, um jedes CSS [`px`](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) darzustellen. Obwohl der Wert ein `<number>` ist und somit syntaktisch keine Einheiten zulässt, ist seine implizite Einheit [`dppx`](/de/docs/Web/CSS/Reference/Values/resolution#units).

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
- [`-webkit-transform-2d`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-2d)
- [`-webkit-transform-3d`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d)
- [`-webkit-transition`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transition)
- [`-webkit-animation`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-animation)
- [W3C Vorschlag zur Entfernung von Präfixen](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)
