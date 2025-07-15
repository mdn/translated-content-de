---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@font-feature-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, einen gemeinsamen Namen in der {{cssxref("font-variant-alternates")}}-Eigenschaft für unterschiedlich in OpenType aktivierte Features zu verwenden. Dies kann helfen, Ihr CSS zu vereinfachen, wenn Sie mehrere Schriftarten verwenden.

Die `@font-feature-values` At-Regel kann entweder auf der obersten Ebene Ihres CSS oder innerhalb einer beliebigen CSS-Bedingungsgruppen-At-Regel verwendet werden.

## Syntax

```css
@font-feature-values Font Name {
  font-display: swap;
  @styleset {
    nice-style: 12;
  }
  @swash {
    fancy: 2;
  }
}
```

Jeder `@font-feature-values`-Block kann eine Liste von Feature-Wertblöcken (unten aufgeführt) sowie den {{cssxref("@font-feature-values/font-display", "font-display")}}-Deskriptor enthalten.

### Feature-Wertblöcke

- `@swash`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "swash()", "#swash")}} Funktionalnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Swash-Feature-Wertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@annotation`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "annotation()", "#annotation")}} Funktionalnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Annotations-Feature-Wertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@ornaments`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}} Funktionalnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Ornament-Feature-Wertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@stylistic`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}} Funktionalnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine stilistische Feature-Wertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@styleset`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "styleset()", "#styleset")}} Funktionalnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Styleset-Feature-Wertdefinition erlaubt eine unbegrenzte Anzahl von Werten: `ident1: 2 4 12 1` wird zu den OpenType-Werten `ss02`, `ss04`, `ss12` und `ss01` zugeordnet. Beachten Sie, dass Werte größer als `99` gültig sind, aber keinen OpenType-Werten zugeordnet werden und ignoriert werden.
- `@character-variant`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}} Funktionalnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Zeichenvarianten-Feature-Wertdefinition erlaubt entweder einen oder zwei Werte: `ident1: 3` wird zu `cv03=1`, und `ident2: 2 4` wird zu `cv02=4`, aber `ident2: 2 4 5` ist ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von @styleset in einer @font-feature-values-Regel

```css
/* At-rule for "nice-style" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* At-rule for "nice-style" in Font Two */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

/* Apply the at-rules with a single declaration */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("font-variant-alternates")}}-Eigenschaft, die die Werte verwendet, die diese At-Regel definiert.
