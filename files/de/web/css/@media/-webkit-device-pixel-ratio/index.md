---
title: -webkit-device-pixel-ratio
slug: Web/CSS/@media/-webkit-device-pixel-ratio
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`-webkit-device-pixel-ratio`** ist ein nicht standardmäßiges Boolean-[CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/@media#media_features), das eine Alternative zum standardmäßigen [`resolution`](/de/docs/Web/CSS/@media/resolution)-Medienmerkmal darstellt.

> [!NOTE]
> Wenn möglich, verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/@media/resolution)-Medienabfrage, die ein standardmäßiges Medienmerkmal ist. Während dieses vorangestellte Medienmerkmal eine WebKit-Funktion ist, kann es von anderen Browser-Engines unterstützt werden. Siehe [Browser-Kompatibilität](#browser-kompatibilität) unten.

## Syntax

Das Merkmal `-webkit-device-pixel-ratio` wird als {{cssxref("&lt;number&gt;")}}-Wert angegeben. Es handelt sich um ein Bereichsmerkmal, was bedeutet, dass Sie auch die vorangestellten Varianten **`-webkit-min-device-pixel-ratio`** und **`-webkit-max-device-pixel-ratio`** verwenden können, um Minimum- bzw. Maximumwerte abzufragen.

### Werte

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Geräte-Pixel, die verwendet werden, um jedes CSS-[`px`](/de/docs/Web/CSS/length#absolute_length_units) darzustellen. Obwohl der Wert ein `<number>` ist und daher syntaktisch keine Einheiten zulässt, ist seine implizite Einheit [`dppx`](/de/docs/Web/CSS/resolution#units).

## Umsetzung

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

- [Medienabfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("resolution")}}
- [`-webkit-transform-2d`](/de/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transition`](/de/docs/Web/CSS/@media/-webkit-transition)
- [`-webkit-animation`](/de/docs/Web/CSS/@media/-webkit-animation)
- [W3C Vorgeschlagene Methode zum Entfernen des Präfixes](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)
