---
title: -webkit-animation
slug: Web/CSS/Reference/At-rules/@media/-webkit-animation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!NOTE]
> Alle Browser unterstützen die [`animation`](/de/docs/Web/CSS/Reference/Properties/animation#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari), und nicht auf Chromium basierende Browser, unterstützt das `-webkit-animation` Media-Feature. Kein Browser unterstützt `animation` ohne Präfix als Media-Query. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/Reference/At-rules/@supports)-Featureanfrage.

Das **`-webkit-animation`** Boolesche [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), dessen Wert `true` ist, wenn vendor-präfixierte CSS {{cssxref("animation")}}s unterstützt werden.

Apple verfügt über [eine Beschreibung in der Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> [!NOTE]
> Dieses Media-Feature wird nur von WebKit unterstützt. Wenn möglich, verwenden Sie eine {{cssxref("@supports")}}-Featureanfrage.

## Syntax

Das `-webkit-animation` Media-Feature ist ein Boolescher Wert, dessen Wert `true` ist, wenn die vendor-präfixierten CSS-Animationseigenschaften unterstützt werden _und_ der Browser media queries für präfixierte Eigenschaften unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt `-webkit`-präfixierte CSS {{cssxref("animation")}}.
- `false`
  - : Der Browser unterstützt diese präfixierten CSS-Animationen nicht.

## Beispiele

### Beispiel für -webkit-animation

```css
@media (-webkit-animation) {
  /* CSS to use if -webkit- prefixed animations are supported AND the browser supports prefixed properties as media queries */
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`-webkit-transform-3d`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d)
- [`-webkit-transform-2d`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-2d)
- [`-webkit-transition`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transition)
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("animation")}} und [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
