---
title: -webkit-transform-3d
slug: Web/CSS/@media/-webkit-transform-3d
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`-webkit-transform-3d`** Boolean-[CSS](/de/docs/Web/CSS)-[Medienabfrageeigenschaft](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), deren Wert `true` ist, wenn CSS 3D-{{cssxref("transform")}}s mit dem Vendor-Präfix unterstützt werden.

> [!NOTE]
> Obwohl diese Medienabfrageeigenschaft derzeit [von den meisten Browsern unterstützt wird](#browser-kompatibilität), sollten Sie, sofern möglich, stattdessen eine {{cssxref("@supports")}}-Feature-Abfrage verwenden.

## Syntax

`-webkit-transform-3d` ist eine Boolean-[CSS](/de/docs/Web/CSS)-[Medienabfrageeigenschaft](/de/docs/Web/CSS/@media#media_features), deren Wert `true` ist, wenn der Browser CSS 3D-{{cssxref("transform")}}s mit dem `-webkit`-Präfix unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 3D-CSS-Transformationen mit dem `-webkit`-Präfix und nicht standardisierte, präfixbasierte Medienabfragen.
- `false`
  - : Die 3D-CSS-Transformationen mit dem Präfix `-webkit` werden vom Browser nicht unterstützt.

## Beispiele

### Beispiele für Medienabfragen mit -webkit-transform-3d

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
- [Testseite auf quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} und [CSS-Transformationen verwenden](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("@media")}} und [Medienabfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Feature-Abfragen verwenden](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
