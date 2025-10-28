---
title: -webkit-transform-3d
slug: Web/CSS/@media/-webkit-transform-3d
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

Die **`-webkit-transform-3d`** Boolesche [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn die vendor-präfixierten CSS 3D-{{cssxref("transform")}}s unterstützt werden.

> [!NOTE]
> Obwohl diese Media-Funktion derzeit von den meisten Browsern [unterstützt wird](#browser-kompatibilität). Verwenden Sie nach Möglichkeit stattdessen eine {{cssxref("@supports")}} Feature-Abfrage.

## Syntax

`-webkit-transform-3d` ist eine Boolesche [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/@media#media_features), deren Wert `true` ist, wenn der Browser `-webkit` präfixierte CSS 3D-{{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 3D-CSS-Transformationen mit dem `-webkit` Präfix und unterstützt nicht-standardisierte, präfixierte Media Queries.
- `false`
  - : Die 3D-CSS-Transformationen mit dem Präfix `-webkit` werden vom Browser nicht unterstützt.

## Beispiele

### Beispiele für Media Queries mit -webkit-transform-3d

```css
@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

Eine bessere Methode, um die Unterstützung durch den Browser zu überprüfen, ist die Verwendung einer Feature-Abfrage:

```css
@supports (transform-style) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} und [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
