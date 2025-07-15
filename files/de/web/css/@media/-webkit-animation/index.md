---
title: -webkit-animation
slug: Web/CSS/@media/-webkit-animation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!NOTE]
> Alle Browser unterstützen die [`animation`](/de/docs/Web/CSS/animation#browser_compatibility)-Eigenschaft ohne Anbieterpräfixe. Nur WebKit (Safari) und nicht auf Chromium basierende Browser unterstützen das `-webkit-animation` Medien-Feature. Kein Browser unterstützt `animation` ohne das Präfix als Medienabfrage. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/@supports)-Feature-Abfrage.

Das **`-webkit-animation`** Boolean [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), deren Wert `true` ist, wenn CSS-{{cssxref("animation")}}s mit Anbieterpräfixen unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> [!NOTE]
> Dieses Medien-Feature wird nur von WebKit unterstützt. Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}}-Feature-Abfrage.

## Syntax

Das Medien-Feature `-webkit-animation` ist ein Boolean, dessen Wert `true` ist, wenn die CSS-Animationseigenschaften mit Anbieterpräfixen unterstützt werden _und_ der Browser Medienabfragen mit Präfix-Eigenschaften unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt `-webkit`-präfixierte CSS-{{cssxref("animation")}}.
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

Teil von keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transform-2d`](/de/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transition`](/de/docs/Web/CSS/@media/-webkit-transition)
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("animation")}} und [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{cssxref("@media")}} und [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
