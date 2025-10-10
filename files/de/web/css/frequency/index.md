---
title: <frequency>
slug: Web/CSS/frequency
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<frequency>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert eine Frequenzdimension, wie die Tonhöhe einer sprechenden Stimme. Derzeit wird er in keinen CSS-Eigenschaften verwendet.

## Syntax

Der `<frequency>` Datentyp besteht aus einem {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgelisteten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen der Einheit und der Zahl.

### Einheiten

- `Hz`
  - : Repräsentiert eine Frequenz in Hertz. Beispiele: `0Hz`, `1500Hz`, `10000Hz`.
- `kHz`
  - : Repräsentiert eine Frequenz in Kilohertz. Beispiele: `0kHz`, `1.5kHz`, `10kHz`.

> [!NOTE]
> Obwohl die Zahl `0` unabhängig von der Einheit immer gleich ist, darf die Einheit nicht weggelassen werden. Mit anderen Worten, `0` ist ungültig und repräsentiert nicht `0Hz` oder `0kHz`. Obwohl die Einheiten nicht auf Groß- und Kleinschreibung achten, ist es eine gute Praxis, ein großes "H" für `Hz` und `kHz` zu verwenden, wie im [SI](https://en.wikipedia.org/wiki/International_System_of_Units) spezifiziert.

## Beispiele

Gültige Frequenzwerte:

```plain example-good
12Hz     Positive integer
4.3Hz    Non-integer
14KhZ    The unit is case-insensitive, though non-SI capitalization is not recommended.
+0Hz     Zero, with a leading + and a unit
-0kHz    Zero, with a leading - and a unit
```

Ungültige Frequenzwerte:

```plain example-bad
12.0     This is a <number>, not an <frequency>, because it is missing a unit.
7 Hz     No space is allowed between the number and the unit.
0        Although unitless zero is an allowable <length>, it's an invalid <frequency>.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- {{cssxref("&lt;frequency-percentage&gt;")}}
- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
