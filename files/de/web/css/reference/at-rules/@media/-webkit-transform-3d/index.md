---
title: "`-webkit-transform-3d` CSS-Media-Feature"
short-title: -webkit-transform-3d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-3d
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Die **`-webkit-transform-3d`** Boolean [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn vendor-spezifische CSS 3D {{cssxref("transform")}}s unterstützt werden.

> [!NOTE]
> Während diese Media-Feature derzeit [von den meisten Browsern unterstützt wird](#browser-kompatibilität). Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature-Abfrage.

## Syntax

`-webkit-transform-3d` ist eine Boolean [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), deren Wert `true` ist, wenn der Browser `-webkit`-präfixierte CSS 3D {{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 3D-CSS-Transformationen mit dem `-webkit`-Präfix und unterstützt nicht-standardisierte, präfixierte Medienabfragen.
- `false`
  - : Die mit `-webkit` präfixierten 3D-CSS-Transformationen werden vom Browser nicht unterstützt.

## Beispiele

### Beispiele für Media-Abfragen mit -webkit-transform-3d

```css
@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

Eine bessere Methode, um die Browserunterstützung zu überprüfen, ist die Verwendung einer Feature-Abfrage:

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
- {{cssxref("transform")}} und [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} und [Verwendung von Media-Abfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
