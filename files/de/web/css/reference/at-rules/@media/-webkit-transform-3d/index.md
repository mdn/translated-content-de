---
title: -webkit-transform-3d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-3d
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

Das **`-webkit-transform-3d`** Boolean [CSS](/de/docs/Web/CSS) [media feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn CSS 3D-{{cssxref("transform")}}s mit Vendor-Präfix unterstützt werden.

> [!NOTE]
> Während dieses Media-Feature derzeit [von den meisten Browsern unterstützt wird](#browser-kompatibilität). Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}}-Feature-Abfrage.

## Syntax

`-webkit-transform-3d` ist ein Boolean [CSS](/de/docs/Web/CSS) [media feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), dessen Wert `true` ist, wenn der Browser `-webkit`-präfixierte CSS 3D-{{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 3D-CSS-Transformationen mit dem `-webkit`-Präfix und unterstützt nicht-standardmäßige, gepräfixte Media Queries.
- `false`
  - : Die mit `-webkit` gepräfixte 3D-CSS-Transformationen werden vom Browser nicht unterstützt.

## Beispiele

### Beispiele von Media Queries mit -webkit-transform-3d

```css
@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

Eine bessere Methode zur Überprüfung der Browserunterstützung ist die Verwendung einer Feature-Abfrage:

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
- {{cssxref("transform")}} und [CSS-Transformationen verwenden](/de/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
