---
title: <time>
slug: Web/CSS/time
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<time>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) stellt einen Zeitwert dar, der in Sekunden oder Millisekunden ausgedrückt wird. Er wird in {{cssxref("animation")}}, {{cssxref("transition")}} und verwandten Eigenschaften verwendet.

## Syntax

Der `<time>`-Datentyp besteht aus einem {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Optional kann er von einem einzelnen `+`- oder `-`-Zeichen vorangestellt sein. Wie bei allen Dimensionen gibt es keinen Abstand zwischen der Einheit und der Zahl.

> [!NOTE]
> Obwohl die Zahl `0` unabhängig von der Einheit immer dieselbe ist, darf die Einheit nicht weggelassen werden. Mit anderen Worten: `0` ist ungültig und stellt nicht `0s` oder `0ms` dar.

### Einheiten

- `s`
  - : Stellt eine Zeit in Sekunden dar. Beispiele: `0s`, `1.5s`, `-60s`.
- `ms`
  - : Stellt eine Zeit in Millisekunden dar. Beispiele: `0ms`, `150.25ms`, `-60000ms`.

> [!NOTE]
> Die Umrechnung zwischen `s` und `ms` folgt der Logik `1s` = `1000ms`.

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
- [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units)
