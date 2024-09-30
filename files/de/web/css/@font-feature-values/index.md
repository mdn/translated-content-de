---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{CSSRef}}

Die **`@font-feature-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, einen gemeinsamen Namen in der {{cssxref("font-variant-alternates")}}-Eigenschaft für unterschiedlich in OpenType aktivierte Funktionen zu verwenden. Dies kann helfen, Ihr CSS beim Einsatz mehrerer Schriftarten zu vereinfachen.

Die `@font-feature-values` At-Regel kann entweder auf der obersten Ebene Ihres CSS oder innerhalb jeder CSS-Bedingungsgruppierten At-Regel verwendet werden.

## Syntax

Jeder `@font-feature-values` Block enthält eine Liste entweder von Feature-Werteblöcken (unten aufgeführt) oder dem {{cssxref("@font-feature-values/font-display", "font-display")}} Deskriptor.

### Feature-Werteblöcke

- `@swash`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "swash()", "#swash")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Swash-Funktionwertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@annotation`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "annotation()", "#annotation")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Annotation-Funktionwertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@ornaments`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Ornaments-Funktionwertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@stylistic`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Stylistic-Funktionwertdefinition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` ist es nicht.
- `@styleset`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "styleset()", "#styleset")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Styleset-Funktionwertdefinition erlaubt eine unbegrenzte Anzahl von Werten: `ident1: 2 4 12 1` mappt auf die OpenType-Werte `ss02`, `ss04`, `ss12` und `ss01`. Beachten Sie, dass Werte höher als `99` gültig sind, aber nicht auf irgendwelche OpenType-Werte abgebildet werden und ignoriert werden.
- `@character-variant`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}}-Funktionsnotation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Character-Variant-Funktionwertdefinition erlaubt entweder einen oder zwei Werte: `ident1: 3` mappt auf `cv03=1`, und `ident2: 2 4` mappt auf `cv02=4`, aber `ident2: 2 4 5` ist ungültig.

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

- Die {{cssxref("font-variant-alternates")}}-Eigenschaft, die Werte verwendet, die diese At-Regel definiert.
