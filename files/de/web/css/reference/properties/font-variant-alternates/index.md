---
title: font-variant-alternates
slug: Web/CSS/Reference/Properties/font-variant-alternates
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`font-variant-alternates`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen Glyphen. Diese alternativen Glyphen können durch alternative Namen referenziert werden, die in {{cssxref("@font-feature-values")}} definiert sind.

Die {{cssxref("@font-feature-values")}} At-Regel kann verwendet werden, um für einen bestimmten Font eine menschenlesbare Bezeichnung mit einem numerischen Index zu verknüpfen, der ein bestimmtes OpenType-Schriftmerkmal steuert. Für Merkmale, die alternative Glyphen auswählen (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament` oder `annotation`), kann die `font-variant-alternates` Eigenschaft die menschenlesbare Bezeichnung referenzieren, um das zugehörige Merkmal anzuwenden.

Dies erlaubt es CSS-Regeln, alternative Glyphen zu aktivieren, ohne die spezifischen Indexwerte zu kennen, die eine bestimmte Schriftart zur Steuerung verwendet.

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
  - : Dieses Schlüsselwort aktiviert historische Formen – Glyphen, die in der Vergangenheit häufig verwendet wurden, heute jedoch nicht mehr. Es entspricht dem OpenType-Wert `hist`.
- `stylistic()`
  - : Diese Funktion aktiviert stilistische Alternativen für einzelne Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet wird. Es entspricht dem OpenType-Wert `salt`, wie `salt 2`.
- `styleset()`
  - : Diese Funktion aktiviert stilistische Alternativen für Zeichensätze. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet wird. Es entspricht dem OpenType-Wert `ssXY`, wie `ss02`.
- `character-variant()`
  - : Diese Funktion aktiviert spezifische stilistische Alternativen für Zeichen. Es ähnelt `styleset()`, erzeugt jedoch keine kohärenten Glyphen für einen Zeichensatz; einzelne Zeichen werden unabhängige und nicht unbedingt kohärente Stile haben. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet wird. Es entspricht dem OpenType-Wert `cvXY`, wie `cv02`.
- `swash()`
  - : Diese Funktion aktiviert [Schwungschrift](https://en.wikipedia.org/wiki/Swash_%28typography%29) Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet wird. Es entspricht den OpenType-Werten `swsh` und `cswh`, wie `swsh 2` und `cswh 2`.
- `ornaments()`
  - : Diese Funktion aktiviert Verzierungen, wie [Fleurons](https://en.wikipedia.org/wiki/Fleuron_%28typography%29) und andere Dingbat-Glyphen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet wird. Es entspricht dem OpenType-Wert `ornm`, wie `ornm 2`.

    > [!NOTE]
    > Um die Textsemantik zu bewahren, sollten Schriftdesigner Ornamente einschließen, die nicht mit Unicode-Dingbat-Zeichen übereinstimmen, als ornamentale Varianten des Aufzählungszeichens (U+2022). Beachten Sie, dass einige bestehende Schriften diesen Ratschlag nicht befolgen.

- `annotation()`
  - : Diese Funktion aktiviert Anmerkungen, wie eingekreiste Ziffern oder invertierte Zeichen. Der Parameter ist ein schriftartspezifischer Name, der einer Zahl zugeordnet wird. Es entspricht dem OpenType-Wert `nalt`, wie `nalt 2`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivierung von Schwungschrift-Glyphen

In diesem Beispiel verwenden wir die `@font-feature-values` At-Regel, um einen Namen für das `swash` Merkmal der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart zu definieren. Die Regel ordnet den Namen `"fancy"` dem Indexwert `1` zu.

Wir können dann diesen Namen in `font-variant-alternates` verwenden, um Schwungschriften für diese Schriftart einzuschalten. Dies entspricht einer Zeile wie `font-feature-settings: "swsh" 1`, außer dass das CSS, das das Merkmal anwendet, den erforderlichen Indexwert für diese bestimmte Schriftart nicht enthalten oder sogar kennen muss.

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

- [`font-variant`](/de/docs/Web/CSS/Reference/Properties/font-variant)
- [`font-variant-caps`](/de/docs/Web/CSS/Reference/Properties/font-variant-caps)
- [`font-variant-east-asian`](/de/docs/Web/CSS/Reference/Properties/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/Reference/Properties/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/Reference/Properties/font-variant-numeric)
- [`font-variant-position`](/de/docs/Web/CSS/Reference/Properties/font-variant-position)
- [`@font-feature-values`](/de/docs/Web/CSS/Reference/At-rules/@font-feature-values)
- [`font-feature-settings`](/de/docs/Web/CSS/Reference/Properties/font-feature-settings)
