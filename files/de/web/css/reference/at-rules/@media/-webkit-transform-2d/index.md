---
title: -webkit-transform-2d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-2d
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transform`](/de/docs/Web/CSS/Reference/Properties/transform#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari)-basierte Browser, und nicht auf Chromium basierende Browser, unterstützen das `-webkit-transform-2d` Medienfeature. Kein Browser unterstützt `transform` ohne Präfix oder `2d` Erweiterung als Media Query. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Query.

Das **`-webkit-transform-2d`** Boolesche [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn Vendor-Präfix CSS 2D {{cssxref("transform")}}s und nicht standardisierte Vendor-präfixierte Media Queries unterstützt werden.

Apple hat [eine Beschreibung im Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntax

`-webkit-transform-2d` ist ein Boolesches [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), dessen Wert `true` ist, wenn der Browser `-webkit` präfixierte CSS 2D {{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 2D CSS Transforms mit dem `-webkit` Präfix.
- `false`
  - : Die 2D CSS Transforms mit `-webkit` Präfix werden vom Browser nicht unterstützt.

## Beispiele

### Einfaches Beispiel

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

Dieses Medien-Feature wird nur von WebKit unterstützt. Die unpräfixierte [`transform`](/de/docs/Web/CSS/Reference/Properties/transform)-Eigenschaft wird in allen modernen Browsern unterstützt. Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature-Query:

```css
@supports (-webkit-transform: translate(100px, 100px)) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} und [Verwendung von CSS Transforms](/de/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
