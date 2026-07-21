---
title: "`font-variant-position` CSS property"
short-title: font-variant-position
slug: Web/CSS/Reference/Properties/font-variant-position
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`font-variant-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft kontrolliert die Verwendung von alternativen, kleineren Glyphen, die als Hoch- oder Tiefgestellt positioniert sind.

Die Glyphen sind relativ zur Grundlinie der Schrift positioniert, die unverändert bleibt. Diese Glyphen werden typischerweise in {{HTMLElement("sub")}}- und {{HTMLElement("sup")}}-Elementen verwendet.

Wenn die Verwendung dieser alternativen Glyphen aktiviert ist und ein Zeichen in der Zeichenfolge nicht über ein solch typografisch verbessertes Glyph verfügt, wird die gesamte Zeichenfolge mit einer Fallback-Methode gerendert, wobei diese Glyphen synthetisiert werden.

Diese alternativen Glyphen teilen sich die gleiche Em-Box und die gleiche Grundlinie wie der Rest der Schrift. Sie sind lediglich grafisch verbessert und haben keinen Einfluss auf die Zeilenhöhe und andere Box-Eigenschaften.

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

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `normal`
  - : Deaktiviert alternative Hoch- und Tiefgestellt-Glyphen.
- `sub`
  - : Aktiviert alternative tiefgestellte Glyphen. Wenn in einer gegebenen Zeichenfolge ein solches Glyph für ein Zeichen nicht verfügbar ist, werden alle Zeichen in der Sequenz mit synthetisierten Glyphen gerendert.
- `super`
  - : Aktiviert alternative hochgestellte Glyphen. Wenn in einer gegebenen Zeichenfolge ein solches Glyph für ein Zeichen nicht verfügbar ist, werden alle Zeichen in der Sequenz mit synthetisierten Glyphen gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von hoch- und tiefgestellten Formen

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
