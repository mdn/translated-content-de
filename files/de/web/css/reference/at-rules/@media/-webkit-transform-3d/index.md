---
title: -webkit-transform-3d
slug: Web/CSS/Reference/At-rules/@media/-webkit-transform-3d
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`-webkit-transform-3d`** boolesche [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn vendor-präfixierte CSS-3D-{{cssxref("transform")}}s unterstützt werden.

> [!NOTE]
> Auch wenn dieses Medienmerkmal derzeit [von den meisten Browsern unterstützt wird](#browser-kompatibilität). Verwenden Sie nach Möglichkeit stattdessen eine {{cssxref("@supports")}}-Merkmalabfrage.

## Syntax

`-webkit-transform-3d` ist ein boolesches [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), dessen Wert `true` ist, wenn der Browser CSS-3D-{{cssxref("transform")}}s mit dem `-webkit`-Präfix unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 3D-CSS-Transformationen mit dem `-webkit`-Präfix und unterstützt nicht standardisierte, mit Präfix versehene Medienabfragen.
- `false`
  - : Die 3D-CSS-Transformationen mit dem `-webkit`-Präfix werden vom Browser nicht unterstützt.

## Beispiele

### Beispiele für Medienabfragen mit -webkit-transform-3d

```css
@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

Eine bessere Methode zur Überprüfung der Browser-Unterstützung ist die Verwendung einer Merkmalabfrage:

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
- {{cssxref("transform")}} und [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("@media")}} und [Verwendung von Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Merkmalabfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
