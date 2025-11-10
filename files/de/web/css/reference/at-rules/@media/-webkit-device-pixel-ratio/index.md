---
title: -webkit-device-pixel-ratio
slug: Web/CSS/Reference/At-rules/@media/-webkit-device-pixel-ratio
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`-webkit-device-pixel-ratio`** ist eine nicht standardisierte [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), die eine Alternative zu dem standardisierten [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Media-Feature darstellt.

> [!NOTE]
> Wenn möglich, verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Media-Feature-Abfrage, die ein standardisiertes Media-Feature ist. Obwohl dieses präfixierte Media-Feature eine WebKit-Eigenschaft ist, kann es von anderen Browser-Engines unterstützt werden. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten.

## Syntax

Das `-webkit-device-pixel-ratio` Feature wird als ein {{cssxref("&lt;number&gt;")}} Wert spezifiziert. Es handelt sich um ein Bereichs-Feature, was bedeutet, dass Sie auch die präfixierten **`-webkit-min-device-pixel-ratio`** und **`-webkit-max-device-pixel-ratio`** Varianten verwenden können, um Mindest- und Höchstwerte abzufragen.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Gerätepixel, die verwendet werden, um jedes CSS [`px`](/de/docs/Web/CSS/Reference/Values/length#absolute_length_units) darzustellen. Obwohl der Wert ein `<number>` ist und daher syntaktisch keine Einheiten erlaubt, ist seine implizite Einheit [`dppx`](/de/docs/Web/CSS/Reference/Values/resolution#units).

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("resolution")}}
- [`-webkit-transform-2d`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-2d)
- [`-webkit-transform-3d`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d)
- [`-webkit-transition`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transition)
- [`-webkit-animation`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-animation)
- [W3C-Vorgeschlagene Methode zur Entfernung von Präfixen](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)
