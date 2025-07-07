---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{CSSRef}}

Die **`@font-feature-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht die Verwendung eines gemeinsamen Namens in der Eigenschaft {{cssxref("font-variant-alternates")}} für Funktionen, die in OpenType unterschiedlich aktiviert werden. Dies kann helfen, Ihr CSS zu vereinfachen, wenn Sie mehrere Schriften verwenden.

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

Jeder `@font-feature-values` Block kann eine Liste von Feature-Wert-Blöcken (unten aufgeführt) sowie den Deskriptor {{cssxref("@font-feature-values/font-display", "font-display")}} enthalten.

### Feature-Wert-Blöcke

- `@swash`
  - : Gibt einen Funktionsnamen an, der mit der funktionalen Notation {{cssxref("font-variant-alternates", "swash()", "#swash")}} von {{cssxref("font-variant-alternates")}} funktioniert. Eine Swash-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@annotation`
  - : Gibt einen Funktionsnamen an, der mit der funktionalen Notation {{cssxref("font-variant-alternates", "annotation()", "#annotation")}} von {{cssxref("font-variant-alternates")}} funktioniert. Eine Annotations-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@ornaments`
  - : Gibt einen Funktionsnamen an, der mit der funktionalen Notation {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}} von {{cssxref("font-variant-alternates")}} funktioniert. Eine Ornament-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@stylistic`
  - : Gibt einen Funktionsnamen an, der mit der funktionalen Notation {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}} von {{cssxref("font-variant-alternates")}} funktioniert. Eine stilistische Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@styleset`
  - : Gibt einen Funktionsnamen an, der mit der funktionalen Notation {{cssxref("font-variant-alternates", "styleset()", "#styleset")}} von {{cssxref("font-variant-alternates")}} funktioniert. Eine Styleset-Feature-Wert-Definition erlaubt eine unbegrenzte Anzahl von Werten: `ident1: 2 4 12 1` entspricht den OpenType-Werten `ss02`, `ss04`, `ss12` und `ss01`. Beachten Sie, dass Werte größer als `99` zwar gültig sind, jedoch keinen OpenType-Werten zugeordnet sind und ignoriert werden.
- `@character-variant`
  - : Gibt einen Funktionsnamen an, der mit der funktionalen Notation {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}} von {{cssxref("font-variant-alternates")}} funktioniert. Eine Character-Variant-Feature-Wert-Definition erlaubt entweder einen oder zwei Werte: `ident1: 3` entspricht `cv03=1`, und `ident2: 2 4` entspricht `cv02=4`, aber `ident2: 2 4 5` ist ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von @styleset in einer @font-feature-values Regel

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

- Die Eigenschaft {{cssxref("font-variant-alternates")}}, die Werte verwendet, die diese At-Regel definiert.
