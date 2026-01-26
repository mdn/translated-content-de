---
title: -webkit-transform-2d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-2d
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

{{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transform`](/de/docs/Web/CSS/Reference/Properties/transform#browser_compatibility)-Eigenschaft ohne Anbieterpräfixe. Nur WebKit (Safari) und nicht auf Chromium basierende Browser unterstützen das `-webkit-transform-2d` Media-Feature. Kein Browser unterstützt `transform`, ohne das Präfix oder die `2d`-Erweiterung, als Media-Query. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports)-Feature-Query.

Das **`-webkit-transform-2d`** ist ein Boolean [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), das eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions) ist und dessen Wert `true` ist, wenn Anbieter-präfixierte CSS 2D {{cssxref("transform")}}s und nicht-standardisierte, anbieter-präfixierte Media-Queries unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntax

`-webkit-transform-2d` ist ein Boolean [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), dessen Wert `true` ist, wenn der Browser `-webkit`-präfixierte CSS 2D {{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 2D CSS-Transformationen mit dem `-webkit`-Präfix.
- `false`
  - : Die mit `-webkit`-präfixierten 2D CSS-Transformationen werden vom Browser nicht unterstützt.

## Beispiele

### Einfaches Beispiel

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

Dieses Media-Feature wird nur von WebKit unterstützt. Die unpräfixierte {{cssxref("transform")}}-Eigenschaft wird in allen modernen Browsern unterstützt. Verwenden Sie nach Möglichkeit eine {{cssxref("@supports")}}-Feature-Query:

```css
@supports (-webkit-transform: translate(100px, 100px)) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} und [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} und [Verwendung von Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature-Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
