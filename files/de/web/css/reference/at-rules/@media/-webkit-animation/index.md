---
title: "`-webkit-animation` CSS-Media-Feature"
short-title: -webkit-animation
slug: Web/CSS/Reference/At-rules/@media/-webkit-animation
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{Non-standard_header}}{{Deprecated_Header}}

> [!NOTE]
> Alle Browser unterstützen die [`animation`](/de/docs/Web/CSS/Reference/Properties/animation#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari) und nicht Chromium-basierte Browser unterstützen die `-webkit-animation` Media-Feature. Kein Browser unterstützt `animation` ohne Präfix als Media Query. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Query.

Die **`-webkit-animation`** boolesche [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn das Vendor-präfixierte CSS {{cssxref("animation")}}s unterstützt wird.

Apple hat [eine Beschreibung im Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> [!NOTE]
> Dieses Media-Feature wird nur von WebKit unterstützt. Wenn möglich, verwenden Sie eine {{cssxref("@supports")}} Feature-Query.

## Syntax

Die `-webkit-animation` Media-Feature ist eine boolesche, deren Wert `true` ist, wenn die Vendor-präfixierten CSS-Animations-Eigenschaften unterstützt werden _und_ der Browser geprefixte Eigenschafts-Media-Queries unterstützt.

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
- {{cssxref("animation")}} und [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature-Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
