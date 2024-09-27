---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{CSSRef}}

Die **`@font-feature-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, einen gemeinsamen Namen in der {{cssxref("font-variant-alternates")}} Eigenschaft für Funktionen zu verwenden, die in OpenType unterschiedlich aktiviert werden. Dies kann helfen, Ihr CSS zu vereinfachen, wenn Sie mehrere Schriftarten verwenden.

Die `@font-feature-values` At-Regel kann entweder auf der obersten Ebene Ihres CSS oder innerhalb einer beliebigen CSS-Bedingungsgruppen-At-Regel verwendet werden.

## Syntax

Jeder `@font-feature-values` Block enthält eine Liste von entweder Feature-Wert-Blöcken (unten aufgeführt) oder dem {{cssxref("@font-feature-values/font-display", "font-display")}} Deskriptor.

### Feature-Wert-Blöcke

- `@swash`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "swash()", "#swash")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Swash-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@annotation`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "annotation()", "#annotation")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Annotation-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@ornaments`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Ornaments-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@stylistic`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Stylistic-Feature-Wert-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@styleset`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "styleset()", "#styleset")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Styleset-Feature-Wert-Definition erlaubt eine unbegrenzte Anzahl von Werten: `ident1: 2 4 12 1` wird auf die OpenType-Werte `ss02`, `ss04`, `ss12` und `ss01` abgebildet. Beachten Sie, dass Werte über `99` gültig sind, aber keiner OpenType-Werte zugeordnet werden und ignoriert werden.
- `@character-variant`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Character-Variant-Feature-Wert-Definition erlaubt entweder einen oder zwei Werte: `ident1: 3` wird auf `cv03=1` abgebildet, und `ident2: 2 4` wird auf `cv02=4` abgebildet, aber `ident2: 2 4 5` ist ungültig.

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

…

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
