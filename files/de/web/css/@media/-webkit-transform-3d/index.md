---
title: "-webkit-transform-3d"
slug: Web/CSS/@media/-webkit-transform-3d
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`-webkit-transform-3d`** Boolean [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), deren Wert `true` ist, wenn vendor-präfixierte CSS 3D-{{cssxref("transform")}}s unterstützt werden.

> [!NOTE]
> Diese Media-Funktion wird derzeit von den meisten Browsern [unterstützt](#browser-kompatibilität). Wenn möglich, verwenden Sie stattdessen eine {{cssxref("@supports")}}-Feature-Anfrage.

## Syntax

`-webkit-transform-3d` ist eine Boolean [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/@media#media_features), deren Wert `true` ist, wenn der Browser `-webkit`-präfixierte CSS 3D-{{cssxref("transform")}}s unterstützt.

### Werte

- `true`
  - : Der Browser unterstützt die 3D-CSS-Transformationen mit dem `-webkit`-Präfix und unterstützt nicht-standardisierte, präfixierte Media-Abfragen.
- `false`
  - : Die 3D-CSS-Transformationen mit dem `-webkit`-Präfix werden vom Browser nicht unterstützt.

## Beispiele

### Beispiele für Media-Abfragen mit -webkit-transform-3d

```css
@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

Eine bessere Methode zur Überprüfung der Browser-Unterstützung ist die Verwendung einer Feature-Anfrage:

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
- {{cssxref("transform")}} und [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("@media")}} und [Verwendung von Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Anfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
