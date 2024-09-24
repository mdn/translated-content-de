---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{CSSRef}}

Die **`@font-feature-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, einen gemeinsamen Namen in der {{cssxref("font-variant-alternates")}}-Eigenschaft für Funktionen zu verwenden, die in OpenType unterschiedlich aktiviert werden. Dies kann Ihre CSS vereinfachen, wenn Sie mehrere Schriftarten verwenden.

Die `@font-feature-values` At-Regel kann entweder auf der obersten Ebene Ihres CSS oder innerhalb einer beliebigen CSS-Bedingungsgruppe verwendet werden.

## Syntax

Jeder `@font-feature-values` Block enthält eine Liste entweder von Merkmalswertblöcken (unten aufgeführt) oder des {{cssxref("@font-feature-values/font-display", "font-display")}} Deskriptors.

### Merkmalswertblöcke

- `@swash`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "swash()", "#swash")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Swash-Merkmalswerte-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` nicht.
- `@annotation`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "annotation()", "#annotation")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Annotations-Merkmalswerte-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` nicht.
- `@ornaments`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Ornamente-Merkmalswerte-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` nicht.
- `@stylistic`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine stilistische Merkmalswerte-Definition erlaubt nur einen Wert: `ident1: 2` ist gültig, aber `ident2: 2 4` nicht.
- `@styleset`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "styleset()", "#styleset")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Styleset-Merkmalswerte-Definition erlaubt eine unbegrenzte Anzahl von Werten: `ident1: 2 4 12 1` wird zu den OpenType-Werten `ss02`, `ss04`, `ss12` und `ss01` zugeordnet. Beachten Sie, dass Werte höher als `99` gültig sind, aber keinen OpenType-Werten zugeordnet sind und ignoriert werden.
- `@character-variant`
  - : Gibt einen Funktionsnamen an, der mit der {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}} funktionalen Notation von {{cssxref("font-variant-alternates")}} funktioniert. Eine Zeichenvarianten-Merkmalswerte-Definition erlaubt entweder einen oder zwei Werte: `ident1: 3` wird zu `cv03=1` zugeordnet, und `ident2: 2 4` wird zu `cv02=4` zugeordnet, aber `ident2: 2 4 5` ist ungültig.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von @styleset in einer @font-feature-values Regel

```css
/* At-Regel für "nice-style" in Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* At-Regel für "nice-style" in Font Two */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

…

/* Anwenden der At-Regeln mit einer einzigen Deklaration */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("font-variant-alternates")}} Eigenschaft, die Werte verwendet, die durch diese At-Regel definiert werden.
