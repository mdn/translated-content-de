---
title: "-webkit-transform-3d"
slug: Web/CSS/@media/-webkit-transform-3d
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`-webkit-transform-3d`** boolesche [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), deren Wert `true` ist, wenn vendor-präfixierte CSS 3D-{{cssxref("transform")}} unterstützt werden.

> [!NOTE]
> Obwohl dieses Media-Feature derzeit [von den meisten Browsern unterstützt wird](#browser-kompatibilität). Falls möglich, nutzen Sie stattdessen eine {{cssxref("@supports")}}-Feature-Abfrage.

## Syntax

`-webkit-transform-3d` ist ein boolesches [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features), dessen Wert `true` ist, wenn der Browser `-webkit`-präfixierte CSS 3D-{{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 3D-CSS-Transforms mit dem `-webkit`-Präfix und unterstützt nicht-standardisierte, präfixierte Media-Queries.
- `false`
  - : Die 3D-CSS-Transforms mit dem Präfix `-webkit` werden vom Browser nicht unterstützt.

## Beispiele

### Beispiele für Media-Queries mit -webkit-transform-3d

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
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} und [Verwendung von CSS-Transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("@media")}} und [Verwendung von Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
