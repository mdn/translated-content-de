---
title: -webkit-transform-2d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-2d
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

{{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transform`](/de/docs/Web/CSS/Reference/Properties/transform#browser_compatibility) Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari), und nicht auf Chromium basierende Browser, unterstützt das `-webkit-transform-2d` Medienfeature. Kein Browser unterstützt `transform`, ohne das Präfix oder die `2d` Erweiterung, als Medienabfrage. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Abfrage.

Das **`-webkit-transform-2d`** boolesche [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn vendor-präfixierte CSS 2D {{cssxref("transform")}}s und nicht-standardisierte vendor-präfixierte Medienabfragen unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntax

`-webkit-transform-2d` ist ein boolesches [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), dessen Wert `true` ist, wenn der Browser `-webkit` präfixierte CSS 2D {{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 2D-CSS-Transformationen mit dem `-webkit` Präfix.
- `false`
  - : Die 2D-CSS-Transformationen mit dem `-webkit` Präfix werden vom Browser nicht unterstützt.

## Beispiele

### Einfaches Beispiel

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

Dieses Medienfeature wird nur von WebKit unterstützt. Die ungepräfixte [`transform`](/de/docs/Web/CSS/Reference/Properties/transform) Eigenschaft wird in allen modernen Browsern unterstützt. Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature-Abfrage:

```css
@supports (-webkit-transform: translate(100px, 100px)) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Testseite auf quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} und [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} und [Verwendung von Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
