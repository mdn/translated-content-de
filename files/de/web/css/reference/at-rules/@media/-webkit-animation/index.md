---
title: "`-webkit-animation` CSS Medienfeature"
short-title: -webkit-animation
slug: Web/CSS/Reference/At-rules/@media/-webkit-animation
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

> [!NOTE]
> Alle Browser unterstützen die [`animation`](/de/docs/Web/CSS/Reference/Properties/animation#browser_compatibility)-Eigenschaft ohne Herstellervorsilben. Nur WebKit (Safari), aber keine auf Chromium basierenden Browser unterstützen das `-webkit-animation` Medienfeature. Kein Browser unterstützt `animation` ohne das Präfix als Medienabfrage. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Abfrage.

Das **`-webkit-animation`** ist ein [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), spezifisch für [WebKit-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions), dessen Wert `true` ist, wenn CSS {{cssxref("animation")}}s mit Herstellervorsilben unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> [!NOTE]
> Dieses Medienfeature wird nur von WebKit unterstützt. Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature-Abfrage.

## Syntax

Das `-webkit-animation` Medienfeature ist ein Boolean, dessen Wert `true` ist, wenn die CSS-Animationseigenschaften mit Präfix unterstützt werden _und_ der Browser Medienabfragen mit Präfix unterstützt.

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`-webkit-transform-3d`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-3d)
- [`-webkit-transform-2d`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transform-2d)
- [`-webkit-transition`](/de/docs/Web/CSS/Reference/At-rules/@media/-webkit-transition)
- {{cssxref("animation")}} und [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- {{cssxref("@media")}} und [Verwendung von Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
