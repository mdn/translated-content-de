---
title: <Frequenz>
slug: Web/CSS/frequency
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<frequency>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert eine Frequenzdimension, wie zum Beispiel die Tonhöhe einer Sprechstimme. Er wird derzeit in keinem CSS-Attribut verwendet.

## Syntax

Der `<frequency>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgelisteten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen der Einheit und der Zahl.

### Einheiten

- `Hz`
  - : Repräsentiert eine Frequenz in Hertz. Beispiele: `0Hz`, `1500Hz`, `10000Hz`.
- `kHz`
  - : Repräsentiert eine Frequenz in Kilohertz. Beispiele: `0kHz`, `1.5kHz`, `10kHz`.

> [!NOTE]
> Obwohl die Zahl `0` unabhängig von der Einheit immer gleich ist, darf die Einheit nicht weggelassen werden. Mit anderen Worten, `0` ist ungültig und repräsentiert nicht `0Hz` oder `0kHz`. Obwohl die Einheiten nicht auf Groß- oder Kleinschreibung achten, ist es eine gute Praxis, ein großes "H" für `Hz` und `kHz` zu verwenden, wie es im [SI](https://en.wikipedia.org/wiki/International_System_of_Units) spezifiziert ist.

## Beispiele

Gültige Frequenzwerte:

```plain example-good
12Hz     Positive ganze Zahl
4.3Hz    Nicht-ganze Zahl
14KhZ    Die Einheit ist nicht groß- oder kleinschreibungsempfindlich, obwohl nicht-SI Großschreibung nicht empfohlen wird.
+0Hz     Null mit führendem + und einer Einheit
-0kHz    Null mit führendem - und einer Einheit
```

Ungültige Frequenzwerte:

```plain example-bad
12.0     Dies ist eine <number>, keine <frequency>, da eine Einheit fehlt.
7 Hz     Zwischen der Zahl und der Einheit darf kein Leerzeichen stehen.
0        Obwohl zifferlose Null eine zulässige <length> ist, ist sie eine ungültige <frequency>.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;frequency-percentage&gt;")}}
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
