---
title: -webkit-transform-2d
slug: Web/CSS/@media/-webkit-transform-2d
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transform`](/de/docs/Web/CSS/transform#browser_compatibility) Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari)-basierte Browser, nicht aber Chromium-basierte Browser, unterstützen die `-webkit-transform-2d` Media-Feature. Keine Browser unterstützen `transform`, ohne das Präfix oder die `2d` Erweiterung, als Media-Query. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Feature-Abfrage.

Das **`-webkit-transform-2d`** Boolean [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), deren Wert `true` ist, wenn vendor-präfixierte CSS 2D {{cssxref("transform")}}s und nicht standardisierte vendor-präfixierte Media Queries unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntax

`-webkit-transform-2d` ist ein Boolean [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features), dessen Wert `true` ist, wenn der Browser `-webkit`-präfixierte CSS 2D {{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 2D CSS-Transformationen mit dem `-webkit` Präfix.
- `false`
  - : Die 2D CSS-Transformationen mit dem `-webkit` Präfix werden vom Browser nicht unterstützt.

## Beispiele

### Einfaches Beispiel

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

Dieses Media-Feature wird nur von WebKit unterstützt. Die unpräfixierte [`transform`](/de/docs/Web/CSS/transform) Eigenschaft wird in allen modernen Browsern unterstützt. Verwenden Sie nach Möglichkeit eine {{cssxref("@supports")}} Feature-Abfrage:

```css
@supports (-webkit-transform: translate(100px, 100px)) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

## Spezifikationen

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Testseite auf quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} und [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
