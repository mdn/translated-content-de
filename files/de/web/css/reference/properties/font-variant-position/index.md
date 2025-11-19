---
title: font-variant-position
slug: Web/CSS/Reference/Properties/font-variant-position
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`font-variant-position`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen, kleineren Glyphen, die als Hoch- oder Tiefstellung positioniert sind.

Die Glyphen sind relativ zur Grundlinie der Schrift positioniert, die unverändert bleibt. Diese Glyphen werden typischerweise in {{HTMLElement("sub")}} und {{HTMLElement("sup")}} Elementen verwendet.

Wenn die Nutzung dieser alternativen Glyphen aktiviert ist, wird, falls ein Zeichen im Lauf keinen solchen typografisch verbesserten Glyphen hat, der gesamte Satz von Zeichen des Laufs mithilfe einer Ersatzmethode gerendert und diese Glyphen synthetisiert.

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
  - : Deaktiviert alternative Hoch- und Tiefstellungsglyphen.
- `sub`
  - : Aktiviert alternative Tiefstellungsglyphen. Sollte in einem gegebenen Lauf ein solches Glyphe für ein Zeichen nicht verfügbar sein, werden alle Zeichen im Lauf mit synthetisierten Glyphen gerendert.
- `super`
  - : Aktiviert alternative Hochstellungsglyphen. Sollte in einem gegebenen Lauf ein solches Glyphe für ein Zeichen nicht verfügbar sein, werden alle Zeichen im Lauf mit synthetisierten Glyphen gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von Hoch- und Tiefstellungsformen

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

- [`font-variant`](/de/docs/Web/CSS/Reference/Properties/font-variant)
- [`font-variant-alternates`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates)
- [`font-variant-caps`](/de/docs/Web/CSS/Reference/Properties/font-variant-caps)
- [`font-variant-east-asian`](/de/docs/Web/CSS/Reference/Properties/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/Reference/Properties/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/Reference/Properties/font-variant-numeric)
