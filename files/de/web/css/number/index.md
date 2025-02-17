---
title: <number>
slug: Web/CSS/number
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<number>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert eine Zahl, die entweder eine Ganzzahl oder eine Zahl mit einer Nachkommastelle sein kann.

## Syntax

Die Syntax von `<number>` erweitert die Syntax von {{CSSxRef("&lt;integer&gt;")}}. Ein Nachkommawert wird durch einen `.` gefolgt von einer oder mehreren Dezimalziffern dargestellt und kann an eine Ganzzahl angehängt werden. Es ist keine Einheit mit Zahlen verbunden.

## Interpolation

Bei Animationen werden Werte des `<number>` CSS-Datentyps als reelle, Gleitkomma-Zahlen interpoliert. Die Geschwindigkeit der Interpolation wird durch die mit der Animation assoziierte [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Gültige Zahlen

```plain example-good
12          A raw <integer> is also a <number>.
4.01        Positive fraction
-456.8      Negative fraction
0.0         Zero
+0.0        Zero, with a leading +
-0.0        Zero, with a leading -
.60         Fractional number without a leading zero
10e3        Scientific notation
-3.4e-2     Complicated scientific notation
```

### Ungültige Zahlen

```plain example-bad
12.         Decimal points must be followed by at least one digit.
+-12.2      Only one leading +/- is allowed.
12.1.1      Only one decimal point is allowed.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;integer&gt;")}}
