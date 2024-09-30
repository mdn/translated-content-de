---
title: <time-percentage>
slug: Web/CSS/time-percentage
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

Der **`<time-percentage>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Wert, der entweder eine {{Cssxref("time")}} oder ein {{Cssxref("percentage")}} sein kann.

## Syntax

Bitte schauen Sie in die Dokumentation für {{Cssxref("time")}} und {{Cssxref("percentage")}}, um Details zu den einzelnen Syntaxen zu erhalten, die von diesem Typ erlaubt sind.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung in calc()

Wo ein `<time-percentage>` als zulässiger Typ angegeben ist, bedeutet dies, dass der Prozentsatz zu einer Zeit aufgelöst wird und daher in einem {{Cssxref("calc", "calc()")}}-Ausdruck verwendet werden kann.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;percentage&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units)
