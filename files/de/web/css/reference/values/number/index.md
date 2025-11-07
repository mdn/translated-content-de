---
title: <number>
slug: Web/CSS/Reference/Values/number
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<number>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Zahl, sei es eine ganze Zahl, eine Zahl mit einem Bruchteil oder ein basierten `e` oder `E` gefolgt von einer ganzen Zahl, die einen Exponenten in wissenschaftlicher Notation anzeigt.

## Syntax

Die Syntax von `<number>` erweitert die Syntax von {{CSSxRef("&lt;integer&gt;")}}. Ein Bruchwert wird durch einen `.` gefolgt von einer oder mehreren Dezimalstellen dargestellt und kann an eine ganze Zahl angehängt werden. Ein `<number>` kann auch mit dem Buchstaben `e` oder `E` gefolgt von einer ganzen Zahl enden, was einen Exponenten in wissenschaftlicher Notation angibt. Es ist keine Einheit mit Zahlen verbunden.

Wie bei Ganzzahlen kann das erste Zeichen der Zahl unmittelbar durch - oder + vorangestellt sein, um das Vorzeichen der Zahl zu kennzeichnen: ob die Zahl positiv oder negativ ist.

## Interpolation

Beim Animieren werden Werte des CSS-Datentyps `<number>` als reale Gleitkommazahlen interpoliert. Die Geschwindigkeit der Interpolation wird durch die [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt, die mit der Animation verbunden ist.

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
