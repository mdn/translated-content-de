---
title: font-variant-position
slug: Web/CSS/font-variant-position
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`font-variant-position`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen, kleineren Glyphen, die als Hoch- oder Tiefstellung positioniert sind.

Die Glyphen sind relativ zur Grundlinie der Schrift positioniert, die unverändert bleibt. Diese Glyphen werden typischerweise in {{HTMLElement("sub")}} und {{HTMLElement("sup")}} Elementen verwendet.

Wenn die Verwendung dieser alternativen Glyphen aktiviert ist und ein Zeichen in der Laufweite nicht über ein solches typographisch verbessertes Glyph verfügt, wird die gesamte Zeichengruppe der Laufweite mit einer Fallback-Methode gerendert, die diese Glyphen synthetisiert.

Diese alternativen Glyphen haben die gleiche Em-Box und die gleiche Grundlinie wie der Rest der Schrift. Sie sind lediglich grafisch verbessert und haben keinen Einfluss auf die Zeilenhöhe und andere Box-Eigenschaften.

## Syntax

```css
/* Schlüsselwort-Werte */
font-variant-position: normal;
font-variant-position: sub;
font-variant-position: super;

/* Globale Werte */
font-variant-position: inherit;
font-variant-position: initial;
font-variant-position: revert;
font-variant-position: revert-layer;
font-variant-position: unset;
```

Die `font-variant-position` Eigenschaft wird als eines der unten aufgeführten Schlüsselwort-Werte angegeben.

### Werte

- `normal`
  - : Deaktiviert alternative Hoch- und Tiefstellungsglyphen.
- `sub`
  - : Aktiviert alternative Tiefstellungsglyphen. Wenn in einer bestimmten Laufweite ein solches Glyph für ein Zeichen nicht verfügbar ist, werden alle Zeichen in der Laufweite mit synthetisierten Glyphen gerendert.
- `super`
  - : Aktiviert alternative Hochstellungsglyphen. Wenn in einer bestimmten Laufweite ein solches Glyph für ein Zeichen nicht verfügbar ist, werden alle Zeichen in der Laufweite mit synthetisierten Glyphen gerendert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellungen für Hoch- und Tiefstellung

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
