---
title: <frequency-percentage>
slug: Web/CSS/frequency-percentage
l10n:
  sourceCommit: 66944f622b6b51bc9c24bebbbea242138d910600
---

{{CSSRef}}

Der **`<frequency-percentage>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Wert, der entweder eine {{Cssxref("frequency")}} oder ein {{Cssxref("percentage")}} sein kann. Frequenzwerte, z.B. die Tonhöhe einer Sprechstimme, werden derzeit in keinen CSS-Eigenschaften verwendet.

## Syntax

Der Wert eines `<frequency-percentage>` ist entweder eine {{Cssxref("frequency")}} oder ein {{Cssxref("percentage")}}; beachten Sie deren jeweilige Referenzseiten für Details zu ihren Syntaxen.

## Beschreibung

### Verwendung in calc()

Wo ein `<frequency-percentage>` als zulässiger Typ angegeben ist, bedeutet dies, dass der Prozentsatz zu einer Frequenz aufgelöst wird und daher in einem [`calc()`](/de/docs/Web/CSS/calc) Ausdruck verwendet werden kann.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gültige Prozentsatzwerte

```plain example-good
90% Positive percentage
+90% Positive percentage with leading +
-90% Negative percentage — not valid for all properties that use percentages
```

### Ungültige Prozentsatzwerte

```plain example-bad
90 % No space is allowed between the number and the unit
```

### Gültige Frequenzwerte

```plain example-good
12Hz     Positive integer
4.3Hz    Non-integer
14KhZ    The unit is case-insensitive, though non-SI capitalization is not recommended.
+0Hz     Zero, with a leading + and a unit
-0kHz    Zero, with a leading - and a unit
```

### Ungültige Frequenzwerte

```plain example-bad
12.0     This is a <number>, not an <frequency>, because it is missing a unit.
7 Hz     No space is allowed between the number and the unit.
0        Although unitless zero is an allowable <length>, it's an invalid <frequency>.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Types)
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- Verwandte CSS-Datentypen:

  - {{cssxref("frequency", "&lt;frequency&gt;")}}
  - {{cssxref("percentage", "&lt;percentage&gt;")}}
