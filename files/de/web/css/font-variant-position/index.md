---
title: font-variant-position
slug: Web/CSS/font-variant-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-variant-position`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen, kleineren Glyphen, die als hoch- oder tiefgestellt positioniert sind.

Die Glyphen werden relativ zur Grundlinie der Schrift positioniert, die unverändert bleibt. Diese Glyphen werden typischerweise in den {{HTMLElement("sub")}} und {{HTMLElement("sup")}} Elementen verwendet.

Wenn die Verwendung dieser alternativen Glyphen aktiviert ist, und wenn ein Zeichen in der Zeichenfolge ein solches typografisch verbessertes Glyphe nicht besitzt, wird der gesamte Satz von Zeichen der Zeichenfolge mit einer Fallback-Methode gerendert, wobei diese Glyphen synthetisiert werden.

Diese alternativen Glyphen teilen sich die gleiche em-box und die gleiche Grundlinie wie der Rest der Schrift. Sie sind lediglich grafisch verbessert und haben keinen Einfluss auf die Zeilenhöhe und andere Box-Eigenschaften.

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
  - : Aktiviert alternative tiefgestellte Glyphen. Wenn in einer gegebenen Zeichenfolge ein solches Glyphe für ein Zeichen nicht verfügbar ist, werden alle Zeichen in der Zeichenfolge mit synthetisierten Glyphen dargestellt.
- `super`
  - : Aktiviert alternative hochgestellte Glyphen. Wenn in einer gegebenen Zeichenfolge ein solches Glyphe für ein Zeichen nicht verfügbar ist, werden alle Zeichen in der Zeichenfolge mit synthetisierten Glyphen dargestellt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von hoch- und tiefgestellten Formen

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

- [`font-variant`](/de/docs/Web/CSS/font-variant)
- [`font-variant-alternates`](/de/docs/Web/CSS/font-variant-alternates)
- [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric)
