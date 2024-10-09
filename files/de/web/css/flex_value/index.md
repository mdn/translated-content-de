---
title: <flex>
slug: Web/CSS/flex_value
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Der **`<flex>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine flexible Länge innerhalb eines Grid-Containers. Er wird in {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und anderen verwandten Eigenschaften verwendet.

## Syntax

Der `<flex>` Datentyp wird als {{cssxref("&lt;number&gt;")}} gefolgt von der Einheit `fr` angegeben. Die `fr`-Einheit repräsentiert einen Bruchteil des verbleibenden Raums im Grid-Container. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Einheit und der Zahl.

## Beispiele

### Beispiele für korrekte Werte des fr-Datentyps

```plain
1fr    /* Using an integer value */
2.5fr  /* Using a float value */
```

### Beispiel für die Verwendung in einer Track-Auflistung für CSS-Grid-Layout

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 2.5fr 1.5fr;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
