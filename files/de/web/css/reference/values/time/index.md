---
title: <time>
slug: Web/CSS/Reference/Values/time
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<time>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Zeitwert, der in Sekunden oder Millisekunden ausgedrückt wird. Er wird in {{cssxref("animation")}}, {{cssxref("transition")}} und verwandten Eigenschaften verwendet.

## Syntax

Der `<time>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Optional kann er durch ein einzelnes `+`- oder `-`-Zeichen vorangestellt werden. Wie bei allen Dimensionen gibt es keinen Leerraum zwischen der Einheit und der Zahl.

> [!NOTE]
> Obwohl die Zahl `0` unabhängig von der Einheit immer gleich ist, darf die Einheit nicht weggelassen werden. Mit anderen Worten: `0` ist ungültig und repräsentiert weder `0s` noch `0ms`.

### Einheiten

- `s`
  - : Repräsentiert eine Zeit in Sekunden. Beispiele: `0s`, `1.5s`, `-60s`.
- `ms`
  - : Repräsentiert eine Zeit in Millisekunden. Beispiele: `0ms`, `150.25ms`, `-60000ms`.

> [!NOTE]
> Die Umrechnung zwischen `s` und `ms` erfolgt gemäß der Logik `1s` = `1000ms`.

## Beispiele

### Gültige Zeiten

```plain example-good
12s         Positive integer
-456ms      Negative integer
4.3ms       Non-integer
14mS        The unit is case-insensitive, although capital letters are not recommended.
+0s         Zero with a leading + and a unit
-0ms        Zero with a leading - and a unit
```

### Ungültige Zeiten

```plain example-bad
0           Although unitless zero is allowed for <length>s, it's invalid for <time>s.
12.0        This is a <number>, not a <time>, because it's missing a unit.
7 ms        No space is allowed between the number and the unit.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;time-percentage&gt;")}}
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
