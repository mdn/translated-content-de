---
title: font-variant-position
slug: Web/CSS/Reference/Properties/font-variant-position
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`font-variant-position`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen, kleineren Glyphen, die als hoch- oder tiefgestellt positioniert sind.

Die Glyphen sind relativ zur Grundlinie der Schrift positioniert, die unverändert bleibt. Diese Glyphen werden typischerweise in {{HTMLElement("sub")}} und {{HTMLElement("sup")}} Elementen verwendet.

Wenn die Verwendung dieser alternativen Glyphen aktiviert ist und ein Zeichen im Durchlauf nicht über eine solche typographisch verbesserte Glyphe verfügt, wird der gesamte Zeichensatz des Durchlaufs mithilfe einer Fallback-Methode gerendert, um diese Glyphen zu synthetisieren.

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

Die `font-variant-position` Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `normal`
  - : Deaktiviert alternative hoch- und tiefgestellte Glyphen.
- `sub`
  - : Aktiviert tiefgestellte alternative Glyphen. Wenn in einem gegebenen Durchlauf für ein Zeichen eine solche Glyphe nicht verfügbar ist, werden alle Zeichen im Durchlauf unter Verwendung synthetisierter Glyphen gerendert.
- `super`
  - : Aktiviert hochgestellte alternative Glyphen. Wenn in einem gegebenen Durchlauf für ein Zeichen eine solche Glyphe nicht verfügbar ist, werden alle Zeichen im Durchlauf unter Verwendung synthetisierter Glyphen gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von hoch- und tiefgestellten Formen

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
