---
title: -webkit-animation
slug: Web/CSS/@media/-webkit-animation
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!NOTE]
> Alle Browser unterstützen die [`animation`](/de/docs/Web/CSS/Reference/Properties/animation#browser_compatibility) Eigenschaft ohne Vendor-Präfixe. Nur auf WebKit basierende Browser (Safari), nicht aber auf Chromium basierende Browser, unterstützen das `-webkit-animation` Media-Feature. Keine Browser unterstützen `animation` ohne das Präfix als Media Query. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/@supports) Feature Query.

Das Boolean-**`-webkit-animation`** [CSS](/de/docs/Web/CSS)-[Media-Feature](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn vendor-präfixierte CSS {{cssxref("animation")}}s unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> [!NOTE]
> Dieses Media-Feature wird nur von WebKit unterstützt. Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature Query.

## Syntax

Das `-webkit-animation` Media-Feature ist ein Boolean, dessen Wert `true` ist, wenn die vendor-präfixierten CSS-Animationseigenschaften unterstützt _und_ Medienabfragen mit präfixierten Eigenschaften vom Browser unterstützt werden.

### Werte

- `true`
  - : Der Browser unterstützt `-webkit` präfixierte CSS {{cssxref("animation")}}.
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

- [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transform-2d`](/de/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transition`](/de/docs/Web/CSS/@media/-webkit-transition)
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("animation")}} und [die Nutzung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{cssxref("@media")}} und [die Nutzung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [die Nutzung von Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
