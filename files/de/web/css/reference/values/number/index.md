---
title: <number>
slug: Web/CSS/Reference/Values/number
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<number>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Zahl, die entweder eine ganze Zahl, eine Zahl mit einem Bruchteil oder eine Basis-zehn-Potenz in wissenschaftlicher Notation ist.

## Syntax

Die Syntax von `<number>` erweitert die Syntax von {{CSSxRef("&lt;integer&gt;")}}. Ein Bruchwert wird durch ein `.` gefolgt von einer oder mehreren Dezimalstellen dargestellt und kann an eine ganze Zahl angehängt werden. Ein `<number>` kann auch mit dem Buchstaben `e` oder `E` gefolgt von einer ganzen Zahl enden, was eine Basis-zehn-Potenz in wissenschaftlicher Notation anzeigt. Zahlen sind nicht mit einer Maßeinheit verbunden.

Wie bei ganzen Zahlen kann das erste Zeichen der Zahl unmittelbar von einem - oder + vorangestellt werden, um das Vorzeichen der Zahl anzugeben: ob die Zahl positiv oder negativ ist.

## Interpolation

Wenn animiert, werden Werte des CSS-Datentyps `<number>` als reale Fließkommazahlen interpoliert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt, die mit der Animation verbunden ist.

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

- {{CSSxRef("integer")}}
- {{CSSxRef("ratio")}}
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
