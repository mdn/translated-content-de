---
title: -webkit-animation
slug: Web/CSS/@media/-webkit-animation
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!NOTE]
> Alle Browser unterstützen die [`animation`](/de/docs/Web/CSS/animation#browser_compatibility) Eigenschaft ohne Anbieter-Präfixe. Nur WebKit (Safari) unterstützt das `-webkit-animation` Medien-Feature, nicht jedoch auf Chromium basierende Browser. Kein Browser unterstützt `animation` ohne Präfix als eine Media Query. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/@supports) Feature Query.

Das **`-webkit-animation`** Boolean [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn anbieterpräfixe CSS {{cssxref("animation")}}s unterstützt werden.

Apple hat [eine Beschreibung im Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> [!NOTE]
> Dieses Medien-Feature wird nur von WebKit unterstützt. Verwenden Sie nach Möglichkeit eine {{cssxref("@supports")}} Feature Query.

## Syntax

Das `-webkit-animation` Medien-Feature ist ein Boolean, dessen Wert `true` ist, wenn die anbieterpräfixen CSS Animationseigenschaften unterstützt werden _und_ der Browser Präfixeigenschafts-Medienabfragen unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die `-webkit` präfixierten CSS {{cssxref("animation")}}.
- `false`
  - : Der Browser unterstützt diese präfixierten CSS-Animationen nicht.

## Beispiele

### Beispiel von -webkit-animation

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

- [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transform-2d`](/de/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transition`](/de/docs/Web/CSS/@media/-webkit-transition)
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("animation")}} und [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
