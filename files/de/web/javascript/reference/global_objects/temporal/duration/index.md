---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`Temporal.Duration`** Objekt repräsentiert einen Unterschied zwischen zwei Zeitpunkten, der in der Datums-/Zeit-Arithmetik verwendet werden kann. Es wird im Wesentlichen als Kombination von Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden dargestellt.

## Beschreibung

### ISO 8601-Dauerformat

`Duration`-Objekte können im [ISO 8601-Dauerformat](https://en.wikipedia.org/wiki/ISO_8601#Durations) (mit einigen von ECMAScript spezifizierten Erweiterungen) serialisiert und geparst werden. Der String hat folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
±P nY nM nW nD T nH nM nS
```

- `±` {{optional_inline}}
  - : Ein optionales Vorzeichen (`+` oder `-`), das für positive oder negative Dauer steht. Standard ist positiv.
- `P`
  - : Ein literales Zeichen `P` oder `p`, das für "Periode" steht.
- `nY`, `nM`, `nW`, `nD`, `nH`, `nM`, `nS`
  - : Eine Zahl gefolgt von einem literalen Zeichen, das die Anzahl von Jahren (`Y`), Monaten (`M`), Wochen (`W`), Tagen (`D`), Stunden (`H`), Minuten (`M`) oder Sekunden (`S`) repräsentiert. Alle, außer der letzten vorhandenen Komponente, müssen ganze Zahlen sein. Die letzte Komponente, sofern es sich um eine Zeitkomponente (Stunden, Minuten oder Sekunden) handelt, kann einen Dezimalanteil von 1 bis 9 Stellen haben, eingeleitet von einem Punkt oder Komma, z. B. `PT0.0021S` oder `PT1.1H`. Jede Komponente mit null kann weggelassen werden, aber mindestens eine Komponente sollte vorhanden sein (auch wenn ihr Wert null ist, wobei die Dauer dann null ist).
- `T`
  - : Ein literales Zeichen `T` oder `t`, das den Datumsteil vom Zeitteil trennt, der nur vorhanden sein sollte, wenn nach ihm mindestens eine Komponente vorhanden ist.

Hier einige Beispiele:

| ISO 8601           | Bedeutung                                                                   |
| ------------------ | --------------------------------------------------------------------------- |
| `P1Y1M1DT1H1M1.1S` | 1 Jahr, 1 Monat, 1 Tag, 1 Stunde, 1 Minute, 1 Sekunde und 100 Millisekunden |
| `P40D`             | 40 Tage                                                                     |
| `P1Y1D`            | 1 Jahr und 1 Tag                                                            |
| `P3DT4H59M`        | 3 Tage, 4 Stunden und 59 Minuten                                            |
| `PT2H30M`          | 2 Stunden und 30 Minuten                                                    |
| `P1M`              | 1 Monat                                                                     |
| `PT1M`             | 1 Minute                                                                    |
| `PT0.0021S`        | 2,1 Millisekunden (2 Millisekunden und 100 Mikrosekunden)                   |
| `PT0S`             | Null (kanonische Darstellung)                                               |
| `P0D`              | Null                                                                        |

> [!NOTE]
> Laut dem ISO 8601-1 Standard dürfen Wochen nicht zusammen mit anderen Einheiten erscheinen und die Dauern dürfen nur positiv sein. Als Erweiterungen zum Standard erlaubt ISO 8601-2, das von Temporal genutzt wird, ein Vorzeichen zu Beginn des Strings und das Kombinieren von Wochen mit anderen Einheiten. Daher kann es sein, dass andere Programme eine zu einem String wie `P3W1D`, `+P1M` oder `-P1M` serialisierte Dauer möglicherweise nicht akzeptieren.

Beim Serialisieren wird so gut wie möglich auf die gespeicherten Komponenten Rücksicht genommen, um [ungenutzte](#dauer-balancierung) Komponenten zu bewahren. Jedoch werden untersekundäre Komponenten als einzelne Bruchteile von Sekunden serialisiert, sodass ihre genauen Werte verloren gehen können. Das Pluszeichen wird bei positiven Dauern weggelassen. Die Dauer von null wird immer als `PT0S` serialisiert.

### Kalenderdauern

Eine _Kalenderdauer_ ist eine, die eine der [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) Einheiten enthält: Wochen, Monate und Jahre. Eine Nicht-Kalenderdauer ist portabel und kann an der Datums-/Zeit-Arithmetik ohne Kalenderinformationen teilnehmen, da sie unmissverständlich eine feste Zeitmenge darstellt. Eine Kalenderdauer hingegen ist nicht portabel, da die Anzahl der Tage in einem Monat oder Jahr vom Kalendersystem und dem Referenzzeitpunkt abhängt. Daher wird bei dem Versuch, arithmetische Operationen mit einer Kalenderdauer durchzuführen, ein Fehler ausgelöst, da Dauer keine eigene Kalendereinheit speichert. Zum Beispiel ist im Mai des gregorianischen Kalenders "1 Monat" gleich "31 Tage", im April hingegen wird "1 Monat" zu "30 Tagen". Um Kalenderdauern zu addieren oder zu subtrahieren, müssen Sie diese stattdessen zu Daten hinzufügen:

```js
const dur1 = Temporal.Duration.from({ years: 1 });
const dur2 = Temporal.Duration.from({ months: 1 });

dur1.add(dur2); // RangeError: for calendar duration arithmetic, use date arithmetic relative to a starting point

const startingPoint = Temporal.PlainDate.from("2021-01-01"); // ISO 8601 calendar
startingPoint.add(dur1).add(dur2).since(startingPoint); // "P396D"
```

Andere Operationen, `round()`, `total()` und `compare()`, nutzen eine `relativeTo`-Option, um die notwendigen Kalender- und Referenzzeitinformationen bereitzustellen. Diese Option kann ein {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.ZonedDateTime")}}, oder anderweitig ein Objekt oder String sein, das/die mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertiert werden kann (wenn die `timeZone`-Option bereitgestellt wird oder der String eine Zeitzonenanmerkung enthält) oder {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}.

Beachten Sie, dass die Umwandlung von `days` bis `hours` ebenfalls technisch unklar ist, weil die Länge eines Tages aufgrund von Verschiebungsänderungen, wie etwa der Sommerzeit, variieren kann. Sie können ein zoniertes `relativeTo` angeben, um diese Änderungen zu berücksichtigen; andernfalls werden 24-Stunden-Tage angenommen.

### Dauer-Balancierung

Es gibt viele Möglichkeiten, die gleiche Dauer darzustellen: zum Beispiel "1 Minute und 30 Sekunden" und "90 Sekunden" sind gleichwertig. Je nach Kontext kann jedoch eine Darstellung passender sein als die andere. Daher bewahrt das `Duration`-Objekt in der Regel die Eingabewerte so weit wie möglich, so dass sie beim Formatieren so angezeigt werden, wie Sie es erwarten.

Jede Komponente einer Dauer hat ihren optimalen Bereich; Stunden sollten von 0 bis 23, Minuten von 0 bis 59 und so fort sein. Wenn eine Komponente ihren optimalen Bereich überschreitet, kann der Überschuss in die nächste größere Komponente "getragen" werden. Um zu transferieren, müssen wir die Frage beantworten "Wie viele X sind in einem Y?", was für [Kalendereinheiten](#kalenderdauern) eine komplizierte Frage ist, weshalb in diesem Fall ein Kalender benötigt wird. Beachten Sie auch, dass standardmäßig `days` direkt in `months` getragen werden; die Wocheneinheit wird nur dann berücksichtigt, wenn sie explizit angefordert wird. Wenn wir so viel wie möglich übertragen, ist das Endergebnis, bei dem alle Komponenten in ihrem optimalen Bereich liegen, eine "ausgeglichene" Dauer. Unausgeglichene Dauern kommen normalerweise in der "kopflastigen" Form, bei der die größte Einheit unausbalanciert ist (z. B. "27 Stunden und 30 Minuten"); andere Formen, wie "23 Stunden und 270 Minuten", sind selten zu sehen.

Die Methode {{jsxref("Temporal/Duration/round", "round()")}} gleicht die Dauer immer in die "kopflastige" Form aus, bis zur `largestUnit`-Option. Mit einer manuellen `largestUnit`-Option, die groß genug ist, können Sie die Dauer vollständig ausgleichen. Ebenso gleichen die Methoden {{jsxref("Temporal/Duration/add", "add()")}} und {{jsxref("Temporal/Duration/subtract", "subtract()")}} die Ergebnissdauer auf die größte Einheit der Eingabedauern aus.

Beachten Sie, dass es, weil das ISO 8601-Dauerformat unter-sekundäre Komponenten als eine einzelne Bruchzahl darstellt, nicht möglich ist, unausgeglichene unter-sekundäre Komponenten während der Serialisierung im Standardformat zu bewahren. Zum Beispiel wird "1000 Millisekunden" als `"PT1S"` serialisiert und dann als "1 Sekunde" deserialisiert. Wenn Sie die Magnituden der unter-sekundären Komponenten bewahren müssen, müssen Sie sie manuell als ein JSON-Objekt serialisieren (weil die {{jsxref("Temporal/Duration/toJSON", "toJSON()")}} Methode standardmäßig die Dauer im ISO 8601-Format serialisiert).

### Dauervorzeichen

Da eine Dauer ein Unterschied zwischen zwei Zeitpunkten ist, kann sie positiv, negativ oder null sein. Beispielsweise, wenn Sie Ereigniszeiten in relativer Zeit darstellen, können negative Dauern Ereignisse in der Vergangenheit darstellen und positive Dauern jene in der Zukunft. In unserer Darstellung durch eine Kombination von Zeitkomponenten wird das Vorzeichen in jeder Komponente gespeichert: eine negative Dauer hat immer alle Komponenten negativ (oder null), und eine positive Dauer hat immer alle Komponenten positiv (oder null). Die Konstruktion einer Dauer mit Komponenten von gemischten Vorzeichen ist ungültig und wird vom Konstruktor oder der {{jsxref("Temporal/Duration/with", "with()")}}-Methode abgelehnt. Die Methoden `add()` und `subtract()` gleichen die Ergebnissdauer aus, um gemischte Vorzeichen zu vermeiden.

## Konstruktor

- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}}
  - : Erstellt ein neues `Temporal.Duration`-Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}}
  - : Liefert eine Zahl (-1, 0 oder 1), die angibt, ob die erste Dauer kürzer, gleich oder länger als die zweite Dauer ist.
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
  - : Erstellt ein neues `Temporal.Duration`-Objekt aus einem anderen `Temporal.Duration`-Objekt, einem Objekt mit Dauereigenschaften oder einem ISO 8601-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.Duration.prototype` definiert und werden von allen Instanzen von `Temporal.Duration` geteilt.

- {{jsxref("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}}
  - : Gibt einen Boolean zurück, der `true` ist, wenn diese Dauer eine Null-Dauer darstellt, und `false` ansonsten. Äquivalent zu `duration.sign === 0`.
- {{jsxref("Object/constructor", "Temporal.Duration.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.Duration`-Instanzen ist der Anfangswert der {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} Konstruktor.
- {{jsxref("Temporal/Duration/days", "Temporal.Duration.prototype.days")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Tage in der Dauer darstellt.
- {{jsxref("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Stunden in der Dauer darstellt.
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Mikrosekunden in der Dauer darstellt.
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden in der Dauer darstellt.
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Minuten in der Dauer darstellt.
- {{jsxref("Temporal/Duration/months", "Temporal.Duration.prototype.months")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Monate in der Dauer darstellt.
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Nanosekunden in der Dauer darstellt.
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Sekunden in der Dauer darstellt.
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
  - : Gibt `1` zurück, wenn diese Dauer positiv ist, `-1` wenn negativ, und `0` wenn null.
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Wochen in der Dauer darstellt.
- {{jsxref("Temporal/Duration/years", "Temporal.Duration.prototype.years")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre in der Dauer darstellt.
- `Temporal.Duration.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.Duration"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit dem absoluten Wert dieser Dauer zurück (alle Felder behalten dieselbe Größe, aber das Vorzeichen wird positiv).
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit der Summe dieser Dauer und einer gegebenen Dauer zurück (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist). Das Ergebnis ist [balanciert](#dauer-balancierung).
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit dem negierten Wert dieser Dauer zurück (alle Felder behalten dieselbe Größe, aber das Vorzeichen wird umgekehrt).
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit der auf die gegebene kleinste Einheit gerundeten Dauer zurück und/oder [balanciert](#dauer-balancierung) auf die gegebene größte Einheit.
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit dem Unterschied zwischen dieser Dauer und einer gegebenen Dauer zurück (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist). Entspricht dem [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) des [negierten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) Werts der anderen Dauer.
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diese Dauer in demselben [ISO 8601-Format](#iso_8601-dauerformat) wie ein Aufruf von {{jsxref("Temporal/Duration/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Dauer zurück. In Implementierungen mit Unterstützung für das [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) delegiert diese Methode an `Intl.DurationFormat`.
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
  - : Gibt einen String zurück, der diese Dauer im [ISO 8601-Format](#iso_8601-dauerformat) darstellt.
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}
  - : Gibt eine Zahl zurück, die die gesamte Dauer in der angegebenen Einheit darstellt.
- {{jsxref("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.Duration`-Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt zurück, das diese Dauer mit einigen durch neue Werte ersetzten Feldern darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
