---
title: "-webkit-transform-2d"
slug: Web/CSS/@media/-webkit-transform-2d
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}} {{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transform`](/de/docs/Web/CSS/transform#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari) und nicht auf Chromium basierende Browser unterstützen die `-webkit-transform-2d` Media-Feature. Kein Browser unterstützt `transform`, weder ohne Präfix noch die `2d`-Erweiterung, als Media Query. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports)-Feature-Query.

Die **`-webkit-transform-2d`** ist ein Boolean-[CSS](/de/docs/Web/CSS)-[Media-Feature](/de/docs/Web/CSS/@media#media_features), das eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions) darstellt, deren Wert `true` ist, wenn CSS 2D-transformations mit dem Präfix `-webkit` und nicht standardisierte Vendor-spezifische Media Queries unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntax

`-webkit-transform-2d` ist ein Boolean-[CSS](/de/docs/Web/CSS)-[Media-Feature](/de/docs/Web/CSS/@media#media_features), dessen Wert `true` ist, wenn der Browser die CSS 2D-{{cssxref("transform")}}-Transformationen mit dem Präfix `-webkit` unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 2D-CSS-Transformationen mit dem Präfix `-webkit`.
- `false`
  - : Die 2D-CSS-Transformationen mit dem Präfix `-webkit` werden vom Browser nicht unterstützt.

## Beispiele

### Grundlegendes Beispiel

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

Dieses Media-Feature wird nur von WebKit unterstützt. Die unpräfixierte [`transform`](/de/docs/Web/CSS/transform)-Eigenschaft wird in allen modernen Browsern unterstützt. Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}}-Feature-Query:

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
- {{cssxref("transform")}} und [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
