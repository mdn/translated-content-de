---
title: "@font-feature-values"
slug: Web/CSS/Reference/At-rules/@font-feature-values
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`@font-feature-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) ermöglicht Ihnen die Verwendung eines gemeinsamen Namens in der {{cssxref("font-variant-alternates")}} Eigenschaft für Funktionen, die in OpenType unterschiedlich aktiviert werden. Dies kann helfen, Ihr CSS zu vereinfachen, wenn mehrere Schriftarten verwendet werden.

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

Jeder `@font-feature-values` Block kann eine Liste von Funktionswertblöcken (unten aufgeführt) sowie den {{cssxref("@font-feature-values/font-display", "font-display")}} Deskriptor enthalten.

### Funktionswertblöcke

- `@swash`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "swash()", "#swash")}} funktionsbezogenen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Swash-Funktionswertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@annotation`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "annotation()", "#annotation")}} funktionsbezogenen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Annotation-Funktionswertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@ornaments`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}} funktionsbezogenen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Ornament-Funktionswertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@stylistic`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}} funktionsbezogenen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Stilistik-Funktionswertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@styleset`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "styleset()", "#styleset")}} funktionsbezogenen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Styleset-Funktionswertdefinition erlaubt eine unbegrenzte Anzahl von Werten: `ident1: 2 4 12 1` wird auf die OpenType-Werte `ss02`, `ss04`, `ss12` und `ss01` abgebildet. Beachten Sie, dass Werte höher als `99` gültig sind, aber nicht auf OpenType-Werte abgebildet werden und ignoriert werden.
- `@character-variant`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}} funktionsbezogenen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Charaktervariante-Funktionswertdefinition erlaubt entweder einen oder zwei Werte: `ident1: 3` wird auf `cv03=1` abgebildet, und `ident2: 2 4` wird auf `cv02=4` abgebildet, aber `ident2: 2 4 5` ist ungültig.

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

- Die {{cssxref("font-variant-alternates")}} Eigenschaft, die Werte verwendet, die diese At-Regel definiert.
