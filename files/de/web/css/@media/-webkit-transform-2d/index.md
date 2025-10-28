---
title: -webkit-transform-2d
slug: Web/CSS/@media/-webkit-transform-2d
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transform`](/de/docs/Web/CSS/transform#browser_compatibility)-Eigenschaft ohne Herstellerpräfixe. Nur WebKit (Safari), und nicht auf Chromium basierende Browser, unterstützen das Medienmerkmal `-webkit-transform-2d`. Kein Browser unterstützt `transform`, ohne das Präfix oder `2d`-Erweiterung, als Medienabfrage. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Feature-Abfrage.

Das **`-webkit-transform-2d`** Boolean [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn herstellerpräfixierte CSS-2D {{cssxref("transform")}}s und nicht standardisierte herstellerpräfixierte Medienabfragen unterstützt werden.

Apple hat [eine Beschreibung in der Safari CSS Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntax

`-webkit-transform-2d` ist ein Boolean [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features), dessen Wert `true` ist, wenn der Browser `-webkit`-präfixierte CSS-2D {{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 2D-CSS-Transformationen mit dem `-webkit`-Präfix.
- `false`
  - : Die 2D-CSS-Transformationen mit dem Präfix `-webkit` werden vom Browser nicht unterstützt.

## Beispiele

### Einfaches Beispiel

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

Dieses Medienmerkmal wird nur von WebKit unterstützt. Die unpräfixierte [`transform`](/de/docs/Web/CSS/transform)-Eigenschaft wird in allen modernen Browsern unterstützt. Verwenden Sie nach Möglichkeit stattdessen eine {{cssxref("@supports")}} Feature-Abfrage:

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
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} und [CSS-Transformations verwenden](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("@media")}} und [Medienabfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Feature-Abfragen verwenden](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
