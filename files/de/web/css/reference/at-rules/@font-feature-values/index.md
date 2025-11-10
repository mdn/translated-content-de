---
title: "@font-feature-values"
slug: Web/CSS/Reference/At-rules/@font-feature-values
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`@font-feature-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es Ihnen, einen gemeinsamen Namen in der {{cssxref("font-variant-alternates")}} Eigenschaft für Funktionen zu verwenden, die in OpenType unterschiedlich aktiviert werden. Dies kann helfen, Ihr CSS zu vereinfachen, wenn Sie mehrere Schriftarten verwenden.

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
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "swash()", "#swash")}} Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Swash-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@annotation`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "annotation()", "#annotation")}} Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Annotation-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@ornaments`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}} Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Ornament-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@stylistic`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}} Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Stylistic-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@styleset`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "styleset()", "#styleset")}} Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Styleset-Feature-Wert-Definition erlaubt eine unbegrenzte Anzahl von Werten: `ident1: 2 4 12 1` wird den OpenType-Werten `ss02`, `ss04`, `ss12` und `ss01` zugeordnet. Beachten Sie, dass Werte größer als `99` gültig sind, aber keinen OpenType-Werten zugeordnet werden und ignoriert werden.
- `@character-variant`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}} Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Character-Variant-Feature-Wert-Definition erlaubt entweder einen oder zwei Werte: `ident1: 3` wird `cv03=1` zugeordnet, und `ident2: 2 4` wird `cv02=4` zugeordnet, aber `ident2: 2 4 5` ist ungültig.

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
