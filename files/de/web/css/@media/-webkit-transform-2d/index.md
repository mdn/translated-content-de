---
title: -webkit-transform-2d
slug: Web/CSS/@media/-webkit-transform-2d
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transform`](/de/docs/Web/CSS/Reference/Properties/transform#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari) und nicht auf Chromium basierende Browser unterstützen das `-webkit-transform-2d` Media-Feature. Keine Browser unterstützen `transform`, weder ohne Präfix noch mit `2d`-Erweiterung, als Media Query. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Feature-Abfrage.

Das **`-webkit-transform-2d`** Boolean [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn vendor-präfixierte CSS 2D {{cssxref("transform")}}s und nicht-standardmäßige vendor-präfixierte Media-Queries unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntax

`-webkit-transform-2d` ist ein Boolean [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features), dessen Wert `true` ist, wenn der Browser `-webkit` präfixierte CSS 2D {{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 2D CSS Transforms mit dem `-webkit` Präfix.
- `false`
  - : Die 2D CSS Transforms, die mit `-webkit` präfixiert sind, werden vom Browser nicht unterstützt.

## Beispiele

### Einfaches Beispiel

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

Dieses Media-Feature wird nur von WebKit unterstützt. Die unpräfixierte [`transform`](/de/docs/Web/CSS/Reference/Properties/transform)-Eigenschaft wird in allen modernen Browsern unterstützt. Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature-Abfrage:

```css
@supports (-webkit-transform: translate(100px, 100px)) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} und [Verwendung von CSS Transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
