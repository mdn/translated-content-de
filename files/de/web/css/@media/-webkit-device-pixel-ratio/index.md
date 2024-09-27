---
title: "-webkit-device-pixel-ratio"
slug: Web/CSS/@media/-webkit-device-pixel-ratio
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`-webkit-device-pixel-ratio`** ist ein nicht standardisiertes Boolean [CSS](/de/docs/Web/CSS) [Media Feature](/de/docs/Web/CSS/@media#media_features), das als Alternative zu dem standardisierten [`resolution`](/de/docs/Web/CSS/@media/resolution) Media Feature dient.

> [!NOTE]
> Wenn möglich, verwenden Sie die [`resolution`](/de/docs/Web/CSS/@media/resolution) Media Feature-Abfrage, da es sich hierbei um ein standardisiertes Media Feature handelt. Obwohl dieses vorangestellte Media Feature eine WebKit-Funktion ist, kann es von anderen Browser-Engines unterstützt werden. Siehe unten unter [Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

Das `-webkit-device-pixel-ratio` Feature wird als {{cssxref("&lt;number&gt;")}} Wert spezifiziert. Es ist ein Bereichs-Feature, was bedeutet, dass Sie auch die vorangestellten **`-webkit-min-device-pixel-ratio`** und **`-webkit-max-device-pixel-ratio`** Varianten verwenden können, um minimale bzw. maximale Werte abzufragen.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Gerät-Pixel, die verwendet werden, um jedes CSS [`px`](/de/docs/Web/CSS/length#absolute_length_units) darzustellen. Obwohl der Wert ein `<number>` ist und somit syntaktisch keine Einheiten zulässt, ist seine implizite Einheit [`dppx`](/de/docs/Web/CSS/resolution#units).

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
- [Von der W3C empfohlene Methode zum Entfernen von Präfixen](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)
