---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@font-feature-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) erlaubt es, in der {{cssxref("font-variant-alternates")}}-Eigenschaft einen gemeinsamen Namen für unterschiedlich in OpenType aktivierte Features zu verwenden. Dies kann helfen, Ihr CSS zu vereinfachen, wenn Sie mehrere Schriftarten nutzen.

Die `@font-feature-values`-At-Regel kann entweder auf der obersten Ebene Ihres CSS oder innerhalb einer beliebigen CSS-Bedingungsgruppenregel verwendet werden.

## Syntax

Jeder `@font-feature-values`-Block enthält eine Liste von entweder Feature-Werte-Blöcken (unten aufgeführt) oder den {{cssxref("@font-feature-values/font-display", "font-display")}}-Deskriptor.

### Feature-Werte-Blöcke

- `@swash`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "swash()", "#swash")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Swash-Feature-Wertedefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@annotation`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "annotation()", "#annotation")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Annotation-Feature-Wertedefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@ornaments`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Ornaments-Feature-Wertedefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@stylistic`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Stylistic-Feature-Wertedefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@styleset`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "styleset()", "#styleset")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Styleset-Feature-Wertedefinition erlaubt eine unbegrenzte Anzahl von Werten: `ident1: 2 4 12 1` wird den OpenType-Werten `ss02`, `ss04`, `ss12` und `ss01` zugeordnet. Beachten Sie, dass Werte über `99` zwar gültig sind, aber keinen OpenType-Werten zugeordnet werden können und ignoriert werden.
- `@character-variant`
  - : Spezifiziert einen Feature-Namen, der mit der {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Character-Variant-Feature-Wertedefinition erlaubt entweder einen oder zwei Werte: `ident1: 3` wird zu `cv03=1`, und `ident2: 2 4` wird zu `cv02=4`, aber `ident2: 2 4 5` ist ungültig.

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

- Die {{cssxref("font-variant-alternates")}}-Eigenschaft, die Werte nutzt, die durch diese At-Regel definiert werden.
