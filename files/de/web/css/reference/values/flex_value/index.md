---
title: "`<flex>` CSS-Typ"
short-title: <flex>
slug: Web/CSS/Reference/Values/flex_value
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<flex>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bezeichnet eine flexible Länge innerhalb eines Grid-Containers. Er wird in {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und anderen verwandten Eigenschaften verwendet.

## Syntax

Der `<flex>`-Datentyp wird als eine {{cssxref("&lt;number&gt;")}} gefolgt von der Einheit `fr` angegeben. Die Einheit `fr` stellt einen Bruchteil des verbleibenden Raums im Grid-Container dar. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen der Einheit und der Zahl.

## Beispiele

### Beispiele für korrekte Werte des fr-Datentyps

```plain
1fr    /* Using an integer value */
2.5fr  /* Using a float value */
```

### Beispiel für die Verwendung in einer Tracks-Auflistung für das CSS-Grid-Layout

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

- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
