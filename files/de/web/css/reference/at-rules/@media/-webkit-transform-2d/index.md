---
title: -webkit-transform-2d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-2d
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transform`](/de/docs/Web/CSS/Reference/Properties/transform#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari) und nicht auf Chromium basierende Browser unterstützen das `-webkit-transform-2d` Medienmerkmal. Keine Browser unterstützen `transform` ohne Präfix oder `2d` Erweiterung als Media Query. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Abfrage.

Das **`-webkit-transform-2d`** Boole'sche [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn CSS-2D-{{cssxref("transform")}}s mit Vendor-Präfixen und nicht standardisierte Media Queries mit Vendor-Präfixen unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntax

`-webkit-transform-2d` ist ein Boole'sches [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), dessen Wert `true` ist, wenn der Browser CSS-2D-{{cssxref("transform")}}s mit `-webkit`-Präfix unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 2D-CSS-Transforms mit dem `-webkit`-Präfix.
- `false`
  - : Die 2D-CSS-Transforms mit `-webkit`-Präfix werden vom Browser nicht unterstützt.

## Beispiele

### Einfaches Beispiel

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

Dieses Medienmerkmal wird nur von WebKit unterstützt. Die unpräfixte {{cssxref("transform")}}-Eigenschaft wird in allen modernen Browsern unterstützt. Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature-Abfrage:

```css
@supports (-webkit-transform: translate(100px, 100px)) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- {{cssxref("transform")}} und [Verwendung von CSS-Transforms](/de/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} und [Verwenden von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature-Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
