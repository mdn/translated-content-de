---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Das **`Temporal.Duration`** Objekt repräsentiert einen Unterschied zwischen zwei Zeitpunkten, der in der Datums-/Zeit-Arithmetik verwendet werden kann. Es wird grundsätzlich als Kombination von Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden dargestellt.

## Beschreibung

### ISO 8601-Dauerformat

`Duration` Objekte können im [ISO 8601 Dauerformat](https://en.wikipedia.org/wiki/ISO_8601#Durations) (mit einigen von ECMAScript spezifizierten Erweiterungen) serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen sind nur zur besseren Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
±P nY nM nW nD T nH nM nS
```

- `±` {{optional_inline}}
  - : Ein optionales Vorzeichenzeichen (`+` oder `-`), das positive oder negative Dauer darstellt. Standard ist positiv.
- `P`
  - : Ein wörtliches Zeichen `P` oder `p`, das für "Periode" steht.
- `nY`, `nM`, `nW`, `nD`, `nH`, `nM`, `nS`
  - : Eine Zahl gefolgt von einem wörtlichen Zeichen, das die Anzahl von Jahren (`Y`), Monaten (`M`), Wochen (`W`), Tagen (`D`), Stunden (`H`), Minuten (`M`) oder Sekunden (`S`) repräsentiert. Alle außer der letzten vorhandenen Komponente müssen eine ganze Zahl sein. Die letzte Komponente, wenn es eine Zeitkomponente ist (Stunden, Minuten oder Sekunden), kann einen Bruchteil von 1 bis 9 Ziffern haben, eingeleitet durch einen Punkt oder ein Komma, wie `PT0.0021S` oder `PT1.1H`. Jegliche Null-Komponenten dürfen weggelassen werden, aber mindestens eine Komponente sollte vorhanden sein (selbst wenn sie den Wert Null hat, in diesem Fall ist die Dauer null).
- `T`
  - : Ein wörtliches Zeichen `T` oder `t`, das den Datenteil vom Zeitteil trennt, sollte vorhanden sein, wenn und nur wenn mindestens eine Komponente danach vorhanden ist.

Hier sind einige Beispiele:

| ISO 8601           | Bedeutung                                                                   |
| ------------------ | --------------------------------------------------------------------------- |
| `P1Y1M1DT1H1M1.1S` | 1 Jahr, 1 Monat, 1 Tag, 1 Stunde, 1 Minute, 1 Sekunde und 100 Millisekunden |
| `P40D`             | 40 Tage                                                                     |
| `P1Y1D`            | 1 Jahr und 1 Tag                                                            |
| `P3DT4H59M`        | 3 Tage, 4 Stunden und 59 Minuten                                            |
| `PT2H30M`          | 2 Stunden und 30 Minuten                                                    |
| `P1M`              | 1 Monat                                                                     |
| `PT1M`             | 1 Minute                                                                    |
| `PT0.0021S`        | 2.1 Millisekunden (2 Millisekunden und 100 Mikrosekunden)                   |
| `PT0S`             | Null (kanonische Darstellung)                                               |
| `P0D`              | Null                                                                        |

> [!NOTE]
> Nach dem ISO 8601-1 Standard dürfen Wochen nicht zusammen mit anderen Einheiten erscheinen, und Dauerangaben dürfen nur positiv sein. Als Erweiterungen zum Standard erlaubt ISO 8601-2, welches Temporal verwendet, ein Vorzeichen am Anfang des Strings und das Kombinieren von Wochen mit anderen Einheiten. Daher beachten Sie, dass, wenn Ihre Dauer zu einem String wie `P3W1D`, `+P1M` oder `-P1M` serialisiert wird, andere Programme dies möglicherweise nicht akzeptieren.

Bei der Serialisierung respektiert die Ausgabe die gespeicherten Komponenten so weit wie möglich und bewahrt [unbalancierte](#dauerbalancierung) Komponenten. Subsekunden-Komponenten werden jedoch als eine einzelne Bruchsekunde serialisiert, sodass ihre genauen Werte, falls unbalanciert, verloren gehen können. Das Pluszeichen wird für positive Dauern weggelassen. Die Null-Dauer wird immer als `PT0S` serialisiert.

### Kalenderdauer

Eine _Kalenderdauer_ ist eine, die eine der [Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) enthält: Wochen, Monate und Jahre. Eine nicht-kalendergebundene Dauer ist portabel und kann ohne Kalenderinformationen an der Datums-/Zeit-Arithmetik teilnehmen, da sie zweifelsfrei eine feste Zeitspanne darstellt. Eine Kalenderdauer ist jedoch nicht portabel, da die Anzahl der Tage in einem Monat oder Jahr vom Kalendersystem und dem Referenzzeitpunkt abhängt. Daher führt der Versuch, eine arithmetische Operation auf Kalenderdauern durchzuführen, zu einem Fehler, da Dauern selbst keinen Kalender verfolgen. Zum Beispiel, wenn wir im Mai des gregorianischen Kalenders sind, ist "1 Monat" "31 Tage", aber wenn wir im April sind, wird "1 Monat" zu "30 Tagen". Um Kalenderdauern zu addieren oder zu subtrahieren, müssen Sie sie stattdessen zu Daten hinzufügen:

```js
const dur1 = Temporal.Duration.from({ years: 1 });
const dur2 = Temporal.Duration.from({ months: 1 });

dur1.add(dur2); // RangeError: for calendar duration arithmetic, use date arithmetic relative to a starting point

const startingPoint = Temporal.PlainDate.from("2021-01-01"); // ISO 8601 calendar
startingPoint.add(dur1).add(dur2).since(startingPoint); // "P396D"
```

Andere Operationen, `round()`, `total()`, und `compare()`, benötigen eine `relativeTo` Option, um die notwendigen Kalender- und Referenzzeitinformationen bereitzustellen. Diese Option kann ein {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.ZonedDateTime")}} sein oder anderweitig ein Objekt oder String, das/der unter Verwendung von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist (wenn die `timeZone` Option angegeben ist oder der String eine Zeitzonenanmerkung enthält) oder {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}.

Beachten Sie, dass die Konvertierung von `days` zu `hours` technisch ebenfalls mehrdeutig ist, da die Länge eines Tages aufgrund von Offset-Änderungen, wie Sommerzeit, variieren kann. Sie können eine zonierte `relativeTo` angeben, um diese Änderungen zu berücksichtigen; Andernfalls werden 24-Stunden-Tage angenommen.

### Dauerbalancierung

Es gibt viele Möglichkeiten, dieselbe Dauer darzustellen: Zum Beispiel sind "1 Minute und 30 Sekunden" und "90 Sekunden" äquivalent. Je nach Kontext kann jedoch eine Darstellung geeigneter sein als die andere. Daher bewahrt das `Duration` Objekt im Allgemeinen die Eingabewerte so weit wie möglich, sodass es bei der Formatierung so angezeigt wird, wie Sie es erwarten.

Jede Komponente einer Dauer hat ihren optimalen Bereich; Stunden sollten von 0 bis 23 sein, Minuten von 0 bis 59 und so weiter. Wenn eine Komponente ihren optimalen Bereich überschreitet, könnte der Überlauf in die nächste größere Komponente "getragen" werden. Um zu übertragen, müssen wir die Frage beantworten: "Wie viele X sind in einem Y?", was eine komplizierte Frage für [Kalendereinheiten](#kalenderdauer) ist, sodass in diesem Fall ein Kalender benötigt wird. Beachten Sie auch, dass standardmäßig `days` direkt in `months` getragen werden; die Wochen-Einheit wird nur getragen, wenn explizit nachgefragt. Wenn wir so viel wie möglich übertragen, dann nennt sich das endgültige Ergebnis, bei dem alle Komponenten innerhalb ihres optimalen Bereichs liegen, eine "balancierte" Dauer. Unausgewogene Dauern kommen normalerweise in der "kopflastigen" Form, wo die größte Einheit unausgeglichen ist (z.B. "27 Stunden und 30 Minuten"); andere Formen, wie "23 Stunden und 270 Minuten", sind selten.

Die {{jsxref("Temporal/Duration/round", "round()")}} Methode balanciert die Dauer immer in die "kopflastige" Form, bis zur `largestUnit` Option. Mit einer manuell großen `largestUnit` Option können Sie die Dauer vollständig ausgleichen. Ebenso balancieren die {{jsxref("Temporal/Duration/add", "add()")}} und {{jsxref("Temporal/Duration/subtract", "subtract()")}} Methoden die Resultatdauer zur größten Einheit der Eingabedauern.

Beachten Sie, dass das ISO 8601 Dauerformat, weil es Untersekunden-Komponenten als eine einzige Bruchzahl darstellt, nicht in der Lage ist, unausgeglichene Untersekunden-Komponenten während der Serialisierung im Standardformat zu bewahren. Zum Beispiel wird "1000 Millisekunden" als `"PT1S"` serialisiert und dann als "1 Sekunde" deserialisiert. Wenn Sie die Magnituden der Untersekunden-Komponenten bewahren müssen, müssen Sie sie manuell als JSON-Objekt serialisieren (weil die {{jsxref("Temporal/Duration/toJSON", "toJSON()")}} Methode standardmäßig die Dauer im ISO 8601-Format serialisiert).

### Vorzeichen der Dauer

Da eine Dauer ein Unterschied zwischen zwei Zeitpunkten ist, kann sie positiv, negativ oder null sein. Zum Beispiel, wenn Sie Ereigniszeiten in relativer Zeit anzeigen, können negative Dauern Ereignisse in der Vergangenheit und positive Dauern solche in der Zukunft darstellen. In unserer Darstellung durch eine Kombination von Zeitkomponenten wird das Vorzeichen in jeder Komponente gespeichert: Eine negative Dauer hat immer alle Komponenten negativ (oder null), und eine positive Dauer hat immer alle Komponenten positiv (oder null). Das Konstruieren einer Dauer mit Komponenten gemischter Vorzeichen ist ungültig und wird vom Konstruktor oder der {{jsxref("Temporal/Duration/with", "with()")}} Methode abgelehnt. Die `add()` und `subtract()` Methoden balancieren die Ergebnisdauer, um gemischte Vorzeichen zu vermeiden.

## Konstruktor

- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Duration` Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Dauer kürzer, gleich oder länger als die zweite ist.
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Duration` Objekt aus einem anderen `Temporal.Duration` Objekt, einem Objekt mit Dauer-Eigenschaften oder einem ISO 8601 String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.Duration.prototype` definiert und werden von allen `Temporal.Duration` Instanzen geteilt.

- {{jsxref("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn diese Dauer eine Null-Dauer darstellt, und `false` andernfalls. Entspricht `duration.sign === 0`.
- {{jsxref("Object/constructor", "Temporal.Duration.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.Duration` Instanzen ist der Anfangswert der {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} Konstruktor.
- {{jsxref("Temporal/Duration/days", "Temporal.Duration.prototype.days")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Tage in der Dauer repräsentiert.
- {{jsxref("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Stunden in der Dauer repräsentiert.
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Mikrosekunden in der Dauer repräsentiert.
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden in der Dauer repräsentiert.
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Minuten in der Dauer repräsentiert.
- {{jsxref("Temporal/Duration/months", "Temporal.Duration.prototype.months")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Monate in der Dauer repräsentiert.
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Nanosekunden in der Dauer repräsentiert.
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Sekunden in der Dauer repräsentiert.
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}} {{experimental_inline}}
  - : Gibt `1` zurück, wenn diese Dauer positiv ist, `-1` wenn negativ, und `0`, wenn null.
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Wochen in der Dauer repräsentiert.
- {{jsxref("Temporal/Duration/years", "Temporal.Duration.prototype.years")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre in der Dauer repräsentiert.
- `Temporal.Duration.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.Duration"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt mit dem absoluten Wert dieser Dauer zurück (alle Felder behalten die gleiche Größe, aber das Vorzeichen wird positiv).
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt mit der Summe dieser Dauer und einer gegebenen Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist). Das Ergebnis ist [balanciert](#dauerbalancierung).
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt mit dem negierten Wert dieser Dauer zurück (alle Felder behalten die gleiche Größe, aber das Vorzeichen wird umgekehrt).
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt mit der auf die gegebene kleinste Einheit gerundeten und/oder zur gegebenen größten Einheit [balancierten](#dauerbalancierung) Dauer zurück.
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt mit dem Unterschied zwischen dieser Dauer und einer gegebenen Dauer zurück (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist). Entspricht [addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) des [negierten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) Wertes der anderen Dauer.
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Dauer im selben [ISO 8601 Format](#iso_8601-dauerformat) darstellt, wie es durch den Aufruf von {{jsxref("Temporal/Duration/toString", "toString()")}} erfolgt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt eine sprachensensitive Zeichendarstellung dieser Dauer zurück. In Implementierungen mit Unterstützung für die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) delegiert diese Methode an `Intl.DurationFormat`.
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Dauer im [ISO 8601 Format](#iso_8601-dauerformat) darstellt.
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}} {{experimental_inline}}
  - : Gibt eine Zahl zurück, die die Gesamtanzahl der Dauer in der gegebenen Einheit repräsentiert.
- {{jsxref("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.Duration` Instanzen [implizit in primitive Typen konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt zurück, das diese Dauer mit einigen Feldern darstellt, die durch neue Werte ersetzt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
