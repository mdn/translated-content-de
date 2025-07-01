---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{CSSRef}}

Die **`@font-feature-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es Ihnen, einen gemeinsamen Namen im {{cssxref("font-variant-alternates")}}-Eigenschaft für Features zu verwenden, die in OpenType unterschiedlich aktiviert werden. Dies kann helfen, Ihr CSS zu vereinfachen, wenn Sie mehrere Schriftarten verwenden.

Die `@font-feature-values` At-Regel kann entweder auf der obersten Ebene Ihres CSS oder innerhalb einer beliebigen CSS-Bedingungsgruppen-At-Regel verwendet werden.

## Syntax

Jeder `@font-feature-values`-Block enthält entweder eine Liste von Feature-Wert-Blöcken (unten aufgeführt) oder den {{cssxref("@font-feature-values/font-display", "font-display")}} Deskriptor.

### Feature-Wert-Blöcke

- `@swash`
  - : Gibt einen Featurename an, der mit der {{cssxref("font-variant-alternates", "swash()", "#swash")}}-funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Swash-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@annotation`
  - : Gibt einen Featurename an, der mit der {{cssxref("font-variant-alternates", "annotation()", "#annotation")}}-funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Annotation-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@ornaments`
  - : Gibt einen Featurename an, der mit der {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}}-funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Ornaments-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@stylistic`
  - : Gibt einen Featurename an, der mit der {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}}-funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Stylistic-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@styleset`
  - : Gibt einen Featurename an, der mit der {{cssxref("font-variant-alternates", "styleset()", "#styleset")}}-funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Styleset-Feature-Wert-Definition erlaubt eine unbegrenzte Anzahl von Werten: `ident1: 2 4 12 1` wird den OpenType-Werten `ss02`, `ss04`, `ss12` und `ss01` zugeordnet. Beachten Sie, dass Werte, die größer als `99` sind, gültig sind, aber nicht auf OpenType-Werte abgebildet werden und ignoriert werden.
- `@character-variant`
  - : Gibt einen Featurename an, der mit der {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}}-funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Character-Variant-Feature-Wert-Definition erlaubt entweder einen oder zwei Werte: `ident1: 3` wird zu `cv03=1` zugeordnet, und `ident2: 2 4` wird zu `cv02=4` zugeordnet, aber `ident2: 2 4 5` ist ungültig.

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

- Die {{cssxref("font-variant-alternates")}}-Eigenschaft, die Werte verwendet, die diese At-Regel definiert.
