---
title: "`font-variant-alternates` CSS property"
short-title: font-variant-alternates
slug: Web/CSS/Reference/Properties/font-variant-alternates
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-variant-alternates`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert den Einsatz von alternativen Glyphen. Diese alternativen Glyphen können durch alternative Namen referenziert werden, die in {{cssxref("@font-feature-values")}} definiert sind.

Die {{cssxref("@font-feature-values")}} Regel kann verwendet werden, um, für eine bestimmte Schriftart, einen menschenlesbaren Namen mit einem numerischen Index zu verknüpfen, der ein bestimmtes OpenType-Schriftmerkmal kontrolliert. Für Merkmale, die alternative Glyphen auswählen (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament` oder `annotation`), kann die Eigenschaft `font-variant-alternates` dann den menschenlesbaren Namen referenzieren, um das zugehörige Merkmal anzuwenden.

Dies ermöglicht es, CSS-Regeln zu verwenden, um alternative Glyphen zu aktivieren, ohne die spezifischen Indexwerte zu kennen, die eine bestimmte Schriftart verwendet, um sie zu steuern.

## Syntax

```css
/* Keyword values */
font-variant-alternates: normal;
font-variant-alternates: historical-forms;

/* Functional notation values */
font-variant-alternates: stylistic(user-defined-ident);
font-variant-alternates: styleset(user-defined-ident);
font-variant-alternates: character-variant(user-defined-ident);
font-variant-alternates: swash(user-defined-ident);
font-variant-alternates: ornaments(user-defined-ident);
font-variant-alternates: annotation(user-defined-ident);
font-variant-alternates: swash(ident1) annotation(ident2);

/* Global values */
font-variant-alternates: inherit;
font-variant-alternates: initial;
font-variant-alternates: revert;
font-variant-alternates: revert-layer;
font-variant-alternates: unset;
```

Diese Eigenschaft kann eine von zwei Formen annehmen:

- entweder das Schlüsselwort `normal`
- oder eines oder mehrere der unten aufgeführten Schlüsselwörter und Funktionen, durch Leerzeichen getrennt, in beliebiger Reihenfolge.

### Werte

- `normal`
  - : Dieses Schlüsselwort deaktiviert alternative Glyphen.
- `historical-forms`
  - : Dieses Schlüsselwort aktiviert historische Formen – Glyphen, die in der Vergangenheit häufig, aber heute nicht mehr üblich sind. Es entspricht dem OpenType-Wert `hist`.
- `stylistic()`
  - : Diese Funktion aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet ist. Es entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- `styleset()`
  - : Diese Funktion aktiviert stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet ist. Es entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- `character-variant()`
  - : Diese Funktion ermöglicht spezifische stilistische Alternativen für Zeichen. Sie ist ähnlich wie `styleset()`, erzeugt jedoch keine kohärenten Glyphen für einen Satz von Zeichen; einzelne Zeichen werden unabhängige und nicht notwendigerweise kohärente Stile haben. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet ist. Es entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- `swash()`
  - : Diese Funktion aktiviert [Swash-Glyphen](https://en.wikipedia.org/wiki/Swash_%28typography%29). Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet ist. Es entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- `ornaments()`
  - : Diese Funktion aktiviert Ornamente, wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet ist. Es entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.

    > [!NOTE]
    > Um die Semantik des Textes zu bewahren, sollten Schriftentwerfer Ornamente enthalten, die nicht den Unicode-Dingbat-Zeichen entsprechen, als ornamentale Varianten des Bullitzeichens (U+2022). Beachten Sie, dass einige vorhandene Schriftarten diesen Rat nicht befolgen.

- `annotation()`
  - : Diese Funktion aktiviert Annotationen, wie Kreiszahlen oder invertierte Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der auf eine Zahl abgebildet ist. Es entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivierung von Swash-Glyphen

In diesem Beispiel verwenden wir die `@font-feature-values` Regel, um einen Namen für das `swash` Merkmal der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart zu definieren. Die Regel ordnet den Namen `"fancy"` dem Indexwert `1` zu.

Wir können dann diesen Namen innerhalb von `font-variant-alternates` verwenden, um Swashes für diese Schriftart einzuschalten. Dies entspricht einer Zeile wie `font-feature-settings: "swsh" 1`, außer dass das CSS, das das Merkmal anwendet, den für diese spezielle Schriftart benötigten Indexwert nicht kennen oder beinhalten muss.

#### HTML

```html
<p>A Fancy Swash</p>
<p class="variant">A Fancy Swash</p>
```

#### CSS

```css
@font-face {
  font-family: "MonteCarlo";
  src: url("/shared-assets/fonts/monte-carlo/monte-carlo-regular.woff2");
}

@font-feature-values "MonteCarlo" {
  @swash {
    fancy: 1;
  }
}

p {
  font-family: "MonteCarlo", cursive;
  font-size: 3rem;
  margin: 0.7rem 3rem;
}

.variant {
  font-variant-alternates: swash(fancy);
}
```

#### Ergebnis

{{EmbedLiveSample("Enabling swash glyphs", 0, 230)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-variant")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("@font-feature-values")}}
- {{cssxref("font-feature-settings")}}
