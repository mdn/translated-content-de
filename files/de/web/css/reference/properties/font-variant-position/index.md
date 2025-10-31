---
title: font-variant-position
slug: Web/CSS/Reference/Properties/font-variant-position
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-variant-position`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen, kleineren Glyphen, die als Hoch- oder Tiefstellung positioniert sind.

Die Glyphen werden relativ zur Basislinie der Schrift positioniert, die unverändert bleibt. Diese Glyphen werden typischerweise in den Elementen {{HTMLElement("sub")}} und {{HTMLElement("sup")}} verwendet.

Wenn die Verwendung dieser alternativen Glyphen aktiviert ist und ein Zeichen im Lauf keine typografisch verbesserte Glyphe hat, wird die gesamte Zeichenreihe des Laufs mit einer Fallback-Methode gerendert, die diese Glyphen synthetisiert.

Diese alternativen Glyphen teilen sich den gleichen em-Kasten und die gleiche Basislinie wie der Rest der Schrift. Sie sind lediglich grafisch verbessert und haben keinen Einfluss auf die Zeilenhöhe und andere Box-Eigenschaften.

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

Die `font-variant-position` Eigenschaft wird als eines der unten aufgeführten Schlüsselwörter angegeben.

### Werte

- `normal`
  - : Deaktiviert alternative Hoch- und Tiefstellungsglyphen.
- `sub`
  - : Aktiviert alternative Tiefstellungsglyphen. Wenn in einem gegebenen Lauf eine solche Glyphe für ein Zeichen nicht verfügbar ist, werden alle Zeichen im Lauf mit synthetisierten Glyphen gerendert.
- `super`
  - : Aktiviert alternative Hochstellungsglyphen. Wenn in einem gegebenen Lauf eine solche Glyphe für ein Zeichen nicht verfügbar ist, werden alle Zeichen im Lauf mit synthetisierten Glyphen gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Hoch- und Tiefstellungsformen

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
