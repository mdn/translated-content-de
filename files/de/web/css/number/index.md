---
title: <number>
slug: Web/CSS/number
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<number>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert eine Zahl, entweder als ganze Zahl, eine Zahl mit einem Bruchbestandteil oder als Basis-zehn-Exponent in wissenschaftlicher Notation.

## Syntax

Die Syntax von `<number>` erweitert die Syntax von {{CSSxRef("&lt;integer&gt;")}}. Ein Bruchwert wird durch einen `.` gefolgt von einer oder mehreren Dezimalziffern dargestellt und kann an eine ganze Zahl angehängt werden. Ein `<number>` kann auch mit dem Buchstaben `e` oder `E` gefolgt von einer ganzen Zahl enden, was einen Basis-zehn-Exponent in wissenschaftlicher Notation angibt. Zahlen sind mit keiner Einheit verbunden.

Wie bei ganzen Zahlen kann das erste Zeichen der Zahl unmittelbar mit einem - oder + vorangestellt werden, um das Vorzeichen der Zahl anzugeben: ob die Zahl positiv oder negativ ist.

## Interpolation

Bei Animationen werden die Werte des `<number>` CSS-Datentyps als reale, Gleitkommazahlen interpoliert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt, die mit der Animation verbunden ist.

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
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
