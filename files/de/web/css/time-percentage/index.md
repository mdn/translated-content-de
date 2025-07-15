---
title: <time-percentage>
slug: Web/CSS/time-percentage
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<time-percentage>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Wert, der entweder eine {{Cssxref("time")}} oder ein {{Cssxref("percentage")}} sein kann.

## Syntax

Verweisen Sie auf die Dokumentation für {{Cssxref("time")}} und {{Cssxref("percentage")}}, um Details zu den einzelnen, von diesem Typ erlaubten Syntaxen zu erhalten.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung in calc()

Wenn ein `<time-percentage>` als zulässiger Typ angegeben wird, bedeutet dies, dass der Prozentsatz in eine Zeit aufgelöst wird und daher in einem {{Cssxref("calc", "calc()")}}-Ausdruck verwendet werden kann.

### Gültige Prozentsätze

```plain example-good
50%
+50%        Optional plus sign
-50%        Negative percentages are not valid for all properties that accept percentages
```

### Ungültige Prozentsätze

```plain example-bad
50 %        Space not allowed between the number and the percentage sign
```

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

## Siehe auch

- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
