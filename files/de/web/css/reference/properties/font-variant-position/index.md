---
title: "`font-variant-position` CSS property"
short-title: font-variant-position
slug: Web/CSS/Reference/Properties/font-variant-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-variant-position`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen, kleineren Glyphen, die als hochgestellt oder tiefgestellt positioniert sind.

Die Glyphen sind relativ zur Grundlinie der Schrift positioniert, die unverändert bleibt. Diese Glyphen werden typischerweise in {{HTMLElement("sub")}} und {{HTMLElement("sup")}} Elementen verwendet.

Wenn die Verwendung dieser alternativen Glyphen aktiviert ist und ein Zeichen im Lauf nicht über ein solches typographisch verbessertes Glyphe verfügt, wird die gesamte Zeichengruppe des Laufs mithilfe einer Fallback-Methode gerendert, die diese Glyphen synthetisiert.

Diese alternativen Glyphen teilen die gleiche em-Box und die gleiche Basislinie wie der Rest der Schrift. Sie sind lediglich grafisch verbessert und haben keinen Einfluss auf die Zeilenhöhe und andere Box-Eigenschaften.

## Syntax

```css
/* Keyword values */
font-variant-position: normal;
font-variant-position: sub;
font-variant-position: super;

/* Global values */
font-variant-position: inherit;
font-variant-position: initial;
font-variant-position: revert;
font-variant-position: revert-layer;
font-variant-position: unset;
```

Die `font-variant-position` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `normal`
  - : Deaktiviert alternative hoch- und tiefgestellte Glyphen.
- `sub`
  - : Aktiviert alternative tiefgestellte Glyphen. Wenn in einem bestimmten Lauf ein solches Glyphe für ein Zeichen nicht verfügbar ist, werden alle Zeichen im Lauf mit synthetisierten Glyphen gerendert.
- `super`
  - : Aktiviert alternative hochgestellte Glyphen. Wenn in einem bestimmten Lauf ein solches Glyphe für ein Zeichen nicht verfügbar ist, werden alle Zeichen im Lauf mit synthetisierten Glyphen gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hochgestellte und tiefgestellte Formen setzen

#### HTML

```html
<p class="normal">Normal!</p>
<p class="super">Super!</p>
<p class="sub">Sub!</p>
```

#### CSS

```css
p {
  display: inline;
}

.normal {
  font-variant-position: normal;
}

.super {
  font-variant-position: super;
}

.sub {
  font-variant-position: sub;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_superscript_and_subscript_forms') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-variant")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
