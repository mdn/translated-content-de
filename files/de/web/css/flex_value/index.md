---
title: <flex>
slug: Web/CSS/flex_value
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<flex>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) bezeichnet eine flexible Länge innerhalb eines Rastercontainers. Er wird in {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und anderen verwandten Eigenschaften verwendet.

## Syntax

Der `<flex>` Datentyp wird als {{cssxref("&lt;number&gt;")}} gefolgt von der Einheit `fr` angegeben. Die `fr` Einheit repräsentiert einen Bruchteil des verbleibenden Raums im Rastercontainer. Wie bei allen CSS-Maßen gibt es keinen Abstand zwischen der Einheit und der Zahl.

## Beispiele

### Beispiele für korrekte Werte des fr-Datentyps

```plain
1fr    /* Using an integer value */
2.5fr  /* Using a float value */
```

### Beispiel für die Verwendung in einer Spurauflistung für ein CSS-Rasterlayout

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

- [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout)
