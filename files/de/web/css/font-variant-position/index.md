---
title: font-variant-position
slug: Web/CSS/font-variant-position
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`font-variant-position`**-Eigenschaft von [CSS](/de/docs/Web/CSS) steuert die Verwendung alternativer, kleinerer Glyphen, die als Hoch- oder Tiefstellung positioniert sind.

Die Glyphen sind relativ zur Grundlinie der Schrift positioniert, die unverändert bleibt. Diese Glyphen werden typischerweise in {{HTMLElement("sub")}}- und {{HTMLElement("sup")}}-Elementen verwendet.

Wenn die Verwendung dieser alternativen Glyphen aktiviert ist und ein Zeichen in der Folge ein solches typografisch verbessertes Glyph nicht besitzt, wird der gesamte Satz von Zeichen der Folge mit einer Ersatzmethode gerendert, wobei diese Glyphen synthetisiert werden.

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

Die `font-variant-position`-Eigenschaft wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `normal`
  - : Deaktiviert alternative Hoch- und Tiefstellungs-Glyphen.
- `sub`
  - : Aktiviert alternative Tiefstellungs-Glyphen. Wenn in einer bestimmten Folge ein solches Glyph für ein Zeichen nicht verfügbar ist, werden alle Zeichen in der Folge mit synthetisierten Glyphen gerendert.
- `super`
  - : Aktiviert alternative Hochstellungs-Glyphen. Wenn in einer bestimmten Folge ein solches Glyph für ein Zeichen nicht verfügbar ist, werden alle Zeichen in der Folge mit synthetisierten Glyphen gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Hoch- und Tiefstellungsformen festlegen

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
