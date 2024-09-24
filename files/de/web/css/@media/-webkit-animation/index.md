---
title: "-webkit-animation"
slug: Web/CSS/@media/-webkit-animation
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!NOTE]
> Alle Browser unterstützen die [`animation`](/de/docs/Web/CSS/animation#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari) und nicht Chromium-basierte Browser unterstützen das `-webkit-animation` Media-Feature. Keine Browser unterstützen `animation` ohne das Präfix als Medienabfrage. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/@supports) Feature-Abfrage.

Das **`-webkit-animation`** Boolean [CSS](/de/docs/Web/CSS) [media feature](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), deren Wert `true` ist, wenn vendor-gepräfixte CSS-{{cssxref("animation")}}s unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> [!NOTE]
> Dieses Media-Feature wird nur von WebKit unterstützt. Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature-Abfrage.

## Syntax

Das `-webkit-animation` Media-Feature ist ein Boolean, dessen Wert `true` ist, wenn die vendor-gepräfixte CSS-Animationseigenschaften unterstützt werden _und_ der Browser unterstützte Eigenschaften als Medienabfragen zulässt.

### Werte

- `true`
  - : Der Browser unterstützt `-webkit`-gepräfixte CSS-{{cssxref("animation")}}.
- `false`
  - : Der Browser unterstützt diese gepräfixte CSS-Animationen nicht.

## Beispiele

### Beispiel von -webkit-animation

```css
@media (-webkit-animation) {
  /* CSS verwenden, wenn -webkit-gepräfixte Animationen unterstützt werden UND der Browser unterstützte Eigenschaften als Medienabfragen zulässt */
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transform-2d`](/de/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transition`](/de/docs/Web/CSS/@media/-webkit-transition)
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("animation")}} und [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{cssxref("@media")}} und [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
