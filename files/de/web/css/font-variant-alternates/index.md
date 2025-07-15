---
title: font-variant-alternates
slug: Web/CSS/font-variant-alternates
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-variant-alternates`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen Glyphen. Diese alternativen Glyphen können durch alternative Namen, die in {{cssxref("@font-feature-values")}} definiert sind, referenziert werden.

Die {{cssxref("@font-feature-values")}} at-Regel kann verwendet werden, um für einen bestimmten Schriftschnitt einen lesbaren Namen mit einem numerischen Index zu verknüpfen, der ein bestimmtes OpenType-Schriftmerkmal steuert. Für Merkmale, die alternative Glyphen auswählen (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament` oder `annotation`), kann die Eigenschaft `font-variant-alternates` dann den lesbaren Namen referenzieren, um das zugehörige Merkmal anzuwenden.

Dies ermöglicht CSS-Regeln, alternative Glyphen zu aktivieren, ohne die spezifischen Indexwerte zu kennen, die eine bestimmte Schriftart verwendet, um sie zu steuern.

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
- oder eines oder mehrere der unten aufgelisteten Schlüsselwörter und Funktionen, durch Leerzeichen getrennt, in beliebiger Reihenfolge.

### Werte

- `normal`
  - : Dieses Schlüsselwort deaktiviert alternative Glyphen.
- `historical-forms`
  - : Dieses Schlüsselwort aktiviert historische Formen — Glyphen, die in der Vergangenheit gebräuchlich waren, heute jedoch nicht mehr. Es entspricht dem OpenType-Wert `hist`.
- `stylistic()`
  - : Diese Funktion aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- `styleset()`
  - : Diese Funktion aktiviert stilistische Alternativen für Zeichengruppen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- `character-variant()`
  - : Diese Funktion aktiviert spezifische stilistische Alternativen für Zeichen. Es ist ähnlich wie `styleset()`, erzeugt jedoch keine kohärenten Glyphen für eine Gruppe von Zeichen; einzelne Zeichen werden unabhängige und nicht unbedingt kohärente Stile haben. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- `swash()`
  - : Diese Funktion aktiviert [Schwung](https://en.wikipedia.org/wiki/Swash_%28typography%29) Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- `ornaments()`
  - : Diese Funktion aktiviert Ornamente, wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.

    > [!NOTE]
    > Um die Textsemantik zu bewahren, sollten Schriftgestalter Ornamente, die nicht den Unicode-Dingbat-Zeichen entsprechen, als ornamentale Varianten des Aufzählungszeichen (U+2022) einfügen. Beachten Sie, dass einige vorhandene Schriftarten diesen Rat nicht befolgen.

- `annotation()`
  - : Diese Funktion aktiviert Annotationen, wie umkreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartenspezifischer Name, der einer Zahl zugeordnet ist. Es entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schwung-Glyphen aktivieren

In diesem Beispiel verwenden wir die `@font-feature-values` at-Regel, um einen Namen für das `swash` Merkmal der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart zu definieren. Die Regel ordnet den Namen „fancy“ dem Indexwert `1` zu.

Wir können diesen Namen dann innerhalb von `font-variant-alternates` verwenden, um Schwünge für diese Schriftart zu aktivieren. Dies entspricht einer Zeile wie `font-feature-settings: "swsh" 1`, mit dem Unterschied, dass das CSS zur Anwendung des Merkmals den für diese spezielle Schriftart erforderlichen Indexwert nicht beinhalten oder gar kennen muss.

#### HTML

```html
<p>A Fancy Swash</p>
<p class="variant">A Fancy Swash</p>
```

#### CSS

```css
@font-face {
  font-family: MonteCarlo;
  src: url("montecarlo-regular.woff2");
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

- [`font-variant`](/de/docs/Web/CSS/font-variant)
- [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric)
- [`font-variant-position`](/de/docs/Web/CSS/font-variant-position)
- [`@font-feature-values`](/de/docs/Web/CSS/@font-feature-values)
- [`font-feature-settings`](/de/docs/Web/CSS/font-feature-settings)
