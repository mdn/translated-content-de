---
title: <frequency>
slug: Web/CSS/Reference/Values/frequency
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<frequency>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Frequenzdimension, wie die Tonhöhe einer Sprechstimme. Er wird derzeit in keinem CSS-Attribut verwendet.

## Syntax

Der `<frequency>` Datentyp besteht aus einem {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen dem Einheitenliteral und der Zahl.

### Einheiten

- `Hz`
  - : Repräsentiert eine Frequenz in Hertz. Beispiele: `0Hz`, `1500Hz`, `10000Hz`.
- `kHz`
  - : Repräsentiert eine Frequenz in Kilohertz. Beispiele: `0kHz`, `1.5kHz`, `10kHz`.

> [!NOTE]
> Auch wenn die Zahl `0` unabhängig von der Einheit immer die gleiche ist, darf die Einheit nicht weggelassen werden. Mit anderen Worten, `0` ist ungültig und stellt nicht `0Hz` oder `0kHz` dar. Obwohl die Einheiten nicht groß-/kleinschreibungsempfindlich sind, ist es sinnvoll, ein großes "H" für `Hz` und `kHz` zu verwenden, wie im [SI](https://en.wikipedia.org/wiki/International_System_of_Units) spezifiziert.

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
- [CSS Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
