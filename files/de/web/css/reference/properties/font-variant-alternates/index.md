---
title: font-variant-alternates
slug: Web/CSS/Reference/Properties/font-variant-alternates
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`font-variant-alternates`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung alternativer Glyphen. Diese alternativen Glyphen können durch alternative Namen referenziert werden, die in {{cssxref("@font-feature-values")}} definiert sind.

Die {{cssxref("@font-feature-values")}} At-Regel kann verwendet werden, um für einen bestimmten Schriftstil einen menschenlesbaren Namen mit einem numerischen Index zu verknüpfen, der ein bestimmtes OpenType-Schriftmerkmal steuert. Für Merkmale, die alternative Glyphen auswählen (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament` oder `annotation`), kann die `font-variant-alternates` Eigenschaft dann den menschenlesbaren Namen referenzieren, um das zugeordnete Merkmal anzuwenden.

Dies ermöglicht CSS-Regeln, alternative Glyphen zu aktivieren, ohne die spezifischen Indexwerte zu kennen, die eine bestimmte Schriftart zur Steuerung verwendet.

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
  - : Dieses Schlüsselwort aktiviert historische Formen — Glyphen, die in der Vergangenheit üblich waren, aber heute nicht mehr. Es entspricht dem OpenType-Wert `hist`.
- `stylistic()`
  - : Diese Funktion aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- `styleset()`
  - : Diese Funktion aktiviert stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- `character-variant()`
  - : Diese Funktion aktiviert spezifische stilistische Alternativen für Zeichen. Sie ähnelt `styleset()`, erstellt jedoch keine kohärenten Glyphen für einen Zeichensatz; einzelne Zeichen haben unabhängige und nicht unbedingt kohärente Stile. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- `swash()`
  - : Diese Funktion aktiviert [Schwung](https://en.wikipedia.org/wiki/Swash_%28typography%29)-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- `ornaments()`
  - : Diese Funktion aktiviert Ornamente, wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.

    > [!NOTE]
    > Um die Textsemantik zu bewahren, sollten Schriftdesigner Ornamente, die nicht mit Unicode Dingbat-Zeichen übereinstimmen, als dekorative Varianten des Aufzählungszeichens (U+2022) aufnehmen. Beachten Sie, dass einige bestehende Schriftarten diesen Rat nicht befolgen.

- `annotation()`
  - : Diese Funktion aktiviert Anmerkungen, wie umkringelte Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schwung-Glyphen aktivieren

In diesem Beispiel verwenden wir die `@font-feature-values` At-Regel, um einen Namen für das `swash` Merkmal der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart zu definieren. Die Regel ordnet den Namen `"fancy"` dem Indexwert `1` zu.

Wir können dann diesen Namen innerhalb von `font-variant-alternates` verwenden, um Schwünge für diese Schriftart zu aktivieren. Dies entspricht einer Zeile wie `font-feature-settings: "swsh" 1`, mit dem Unterschied, dass das CSS, das das Merkmal anwendet, den für diese spezielle Schriftart benötigten Indexwert nicht enthalten oder wissen muss.

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
