---
title: -webkit-animation
slug: Web/CSS/@media/-webkit-animation
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!NOTE]
> Alle Browser unterstützen die [`animation`](/de/docs/Web/CSS/animation#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari)-basierte Browser, nicht jedoch Chromium-basierte Browser, unterstützen das `-webkit-animation` Medien-Feature. Keine Browser unterstützen `animation` (ohne Präfix) als Media Query. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/@supports)-Feature-Abfrage.

Das **`-webkit-animation`** Boolean-[CSS](/de/docs/Web/CSS)-[Medien-Feature](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), deren Wert `true` ist, wenn CSS {{cssxref("animation")}}s mit Vendor-Präfix unterstützt werden.

Apple bietet [eine Beschreibung in Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> [!NOTE]
> Dieses Medien-Feature wird nur von WebKit unterstützt. Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}}-Feature-Abfrage.

## Syntax

Das `-webkit-animation` Medien-Feature ist ein Boolean, dessen Wert `true` ist, wenn die CSS-Animations-Eigenschaften mit Präfix unterstützt _und_ Media Queries mit Präfix unterstützt werden.

### Werte

- `true`
  - : Der Browser unterstützt CSS {{cssxref("animation")}} mit `-webkit` Präfix.
- `false`
  - : Der Browser unterstützt diese CSS-Animationen mit Präfix nicht.

## Beispiele

### Beispiel für -webkit-animation

```css
@media (-webkit-animation) {
  /* CSS to use if -webkit- prefixed animations are supported AND the browser supports prefixed properties as media queries */
}
```

## Spezifikationen

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transform-2d`](/de/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transition`](/de/docs/Web/CSS/@media/-webkit-transition)
- [Testseite auf quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("animation")}} und [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
