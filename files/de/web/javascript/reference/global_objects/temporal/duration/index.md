---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Das **`Temporal.Duration`**-Objekt repräsentiert einen Unterschied zwischen zwei Zeitpunkten, der in der Datum-/Zeit-Arithmetik verwendet werden kann. Es wird grundsätzlich als eine Kombination aus Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden dargestellt.

## Beschreibung

### ISO 8601 Dauerdarstellung

`Duration`-Objekte können unter Verwendung des [ISO 8601 Dauerformats](https://en.wikipedia.org/wiki/ISO_8601#Durations) (mit einigen von ECMAScript spezifizierten Erweiterungen) serialisiert und geparst werden. Der String hat folgende Form (Leerzeichen sind nur für die Lesbarkeit da und sollten im tatsächlichen String nicht vorhanden sein):

```plain
±P nY nM nW nD T nH nM nS
```

- `±` {{optional_inline}}
  - : Ein optionales Vorzeichenzeichen (`+` oder `-`), das eine positive oder negative Dauer darstellt. Standard ist positiv.
- `P`
  - : Ein literales Zeichen `P` oder `p`, das für "Periode" steht.
- `nY`, `nM`, `nW`, `nD`, `nH`, `nM`, `nS`
  - : Eine Zahl gefolgt von einem literalen Zeichen, das die Anzahl der Jahre (`Y`), Monate (`M`), Wochen (`W`), Tage (`D`), Stunden (`H`), Minuten (`M`) oder Sekunden (`S`) darstellt. Alle bis auf die letzte vorhandene Komponente müssen ganze Zahlen sein. Die letzte Komponente, wenn sie eine Zeitkomponente ist (Stunden, Minuten oder Sekunden), kann einen Bruchteil von 1 bis 9 Ziffern haben, eingeleitet durch einen Punkt oder ein Komma, wie `PT0.0021S` oder `PT1.1H`. Alle mit Null wertlosen Komponenten können weggelassen werden, aber mindestens eine Komponente sollte vorhanden sein (selbst wenn sie den Wert Null hat, in welchem Fall die Dauer null ist).
- `T`
  - : Ein literales Zeichen `T` oder `t`, das den Datenteil vom Zeitteil trennt, welches vorhanden sein sollte, wenn, und nur wenn, mindestens eine Komponente danach vorhanden ist.

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
> Laut der ISO 8601-1 Norm sind Wochen nicht zusammen mit anderen Einheiten erlaubt, und Zeitspannen können nur positiv sein. In Erweiterungen zur Norm, ISO 8601-2, die Temporal verwendet, ist ein Vorzeichenzeichen am Anfang des Strings erlaubt, und es dürfen Wochen mit anderen Einheiten kombiniert werden. Daher, wenn Ihre Dauer zu einem String wie `P3W1D`, `+P1M` oder `-P1M` serialisiert wird, beachten Sie, dass andere Programme dies möglicherweise nicht akzeptieren.

Bei der Serialisierung respektiert die Ausgabe die gespeicherten Komponenten so weit wie möglich und erhält [unausgewogene](#dauerabgleich) Komponenten. Jedoch werden untersekundäre Komponenten als eine einzige Bruchzahl von Sekunden serialisiert, sodass ihre genauen Werte möglicherweise verloren gehen, wenn sie unausgewogen sind. Das Pluszeichen wird für positive Zeitspannen weggelassen. Die Null-Dauer wird immer als `PT0S` serialisiert.

### Kalenderdauern

Eine _Kalenderdauer_ ist eine, die eine der [Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) enthält: Wochen, Monate und Jahre. Eine nicht-kalenderbasierte Dauer ist portabel und kann ohne Kalenderinformationen an der Datum-/Zeit-Arithmetik teilnehmen, da sie eindeutig eine feste Zeitspanne darstellt. Eine kalenderbasierte Dauer ist jedoch nicht portabel, da die Anzahl der Tage in einem Monat oder Jahr vom Kalendersystem und dem Referenzzeitpunkt abhängt. Daher führt der Versuch, eine arithmetische Operation auf kalenderbasierte Dauern auszuführen, zu einem Fehler, da Dauern keinen Kalender selbst verfolgen. Beispiel: Wenn wir uns im Mai des gregorianischen Kalenders befinden, dann ist "1 Monat" "31 Tage", aber wenn wir uns im April befinden, wird "1 Monat" zu "30 Tage". Um kalenderbasierte Dauern zu addieren oder zu subtrahieren, müssen Sie sie stattdessen zu Daten addieren:

```js
const dur1 = Temporal.Duration.from({ years: 1 });
const dur2 = Temporal.Duration.from({ months: 1 });

dur1.add(dur2); // RangeError: can't compare durations when "relativeTo" is undefined

const startingPoint = Temporal.PlainDate.from("2021-01-01"); // ISO 8601 calendar
startingPoint.add(dur1).add(dur2).since(startingPoint); // "P396D"
```

Andere Operationen, einschließlich `round()`, `total()` und `compare()`, nehmen eine `relativeTo` Option, um die notwendigen Kalender- und Referenzzeitinformationen bereitzustellen. Diese Option kann ein {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.ZonedDateTime")}} oder ein anderes Objekt oder String sein, der konvertierbar ist mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} (wenn die `timeZone`-Option bereitgestellt wird oder der String eine Zeitzonenanmerkung enthält) oder {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}.

Beachten Sie, dass die Umwandlung von `Tagen` zu `Stunden` auch technisch mehrdeutig ist, da die Länge eines Tages aufgrund von Offset-Änderungen, wie der Sommerzeit, variieren kann. Sie können eine zonierte `relativeTo` bereitstellen, um diese Änderungen zu berücksichtigen; andernfalls werden 24-Stunden-Tage angenommen.

### Dauerabgleich

Es gibt viele Möglichkeiten, die gleiche Dauer darzustellen: Zum Beispiel sind "1 Minute und 30 Sekunden" und "90 Sekunden" gleichwertig. Je nach Kontext kann jedoch eine Darstellung geeigneter sein als die andere. Daher behält das `Duration`-Objekt im Allgemeinen die Eingabewerte so weit wie möglich bei, sodass es beim Formatieren so angezeigt wird, wie Sie es erwarten.

Jede Komponente einer Dauer hat ihren optimalen Bereich; Stunden sollten von 0 bis 23 reichen, Minuten von 0 bis 59 und so weiter. Wenn eine Komponente ihren optimalen Bereich überschreitet, kann der Überschuss in die nächste größere Komponente "getragen" werden. Um zu übertragen, müssen wir die Frage beantworten "wie viele X gibt es in einem Y?", was eine komplizierte Frage für [Kalendereinheiten](#kalenderdauern) ist, daher wird in diesem Fall ein Kalender benötigt. Beachten Sie auch, dass standardmäßig `Tage` direkt in `Monate` übertragen werden; die Wocheneinheit wird nur übertragen, wenn sie ausdrücklich angefordert wird. Wenn wir so viel wie möglich übertragen, wird das endgültige Ergebnis, bei dem alle Komponenten innerhalb ihres optimalen Bereichs liegen, als "ausgeglichene" Dauer bezeichnet. Unaussgeglichene Dauern treten normalerweise in der "schweren" Form auf, bei der die größte Einheit unausgeglichen ist (z. B. "27 Stunden und 30 Minuten"); andere Formen, wie "23 Stunden und 270 Minuten", sind selten zu sehen.

Die Methode {{jsxref("Temporal/Duration/round", "round()")}} balanciert die Dauer immer in der "schweren" Form, bis zur `largestUnit`-Option. Mit einer manuellen `largestUnit`-Option, die groß genug ist, können Sie die Dauer vollständig ausgleichen. Ähnlich balancieren die Methoden {{jsxref("Temporal/Duration/add", "add()")}} und {{jsxref("Temporal/Duration/subtract", "subtract()")}} die Ergebnisdauer zur größten Einheit der Eingabedauern aus.

Beachten Sie, dass das ISO 8601-Dauerformat Unterkomponenten von Sekunden als eine einzelne Bruchzahl darstellt, es ist nicht möglich, unausgeglichene Unterkomponenten von Sekunden während der Serialisierung im Standardformat zu bewahren. Beispielsweise wird "1000 Millisekunden" als `"PT1S"` serialisiert und dann als "1 Sekunde" deserialisiert. Wenn Sie die Größen der Unterkomponenten von Sekunden beibehalten müssen, müssen Sie es manuell als JSON-Objekt serialisieren (da die Methode {{jsxref("Temporal/Duration/toJSON", "toJSON()")}} die Dauer standardmäßig im ISO 8601-Format serialisiert).

### Dauerzeichen

Da eine Dauer ein Unterschied zwischen zwei Zeitpunkten ist, kann sie positiv, negativ oder null sein. Wenn Sie beispielsweise Ereigniszeiten in relativer Zeit anzeigen, können negative Dauern Ereignisse in der Vergangenheit darstellen, und positive Dauern für die Zukunft. In unserer Darstellung unter Verwendung einer Kombination von Zeitkomponenten, wird das Vorzeichen in jeder Komponente gespeichert: eine negative Dauer hat immer alle Komponenten negativ (oder null), und eine positive Dauer hat immer alle Komponenten positiv (oder null). Eine Dauer mit Komponenten gemischter Vorzeichen zu konstruieren, ist ungültig und wird vom Konstruktor oder der Methode {{jsxref("Temporal/Duration/with", "with()")}} abgelehnt. Die Methoden `add()` und `subtract()` balancieren die Ergebnisdauer aus, um gemischte Vorzeichen zu vermeiden.

## Konstruktor

- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}}
  - : Erstellt ein neues `Temporal.Duration`-Objekt durch direktes Liefern der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Dauer kürzer, gleich oder länger als die zweite Dauer ist.
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
  - : Erstellt ein neues `Temporal.Duration`-Objekt aus einem anderen `Temporal.Duration`-Objekt, einem Objekt mit Dauereigenschaften oder einem ISO 8601-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.Duration.prototype` definiert und werden von allen `Temporal.Duration`-Instanzen geteilt.

- {{jsxref("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn diese Dauer eine Null-Dauer darstellt, und `false` andernfalls. Entspricht `duration.sign === 0`.
- {{jsxref("Object/constructor", "Temporal.Duration.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erzeugt hat. Für `Temporal.Duration`-Instanzen ist der Anfangswert der {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}}-Konstruktor.
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
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.Duration"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit dem absoluten Wert dieser Dauer zurück (alle Felder behalten die gleiche Größe bei, aber das Vorzeichen wird positiv).
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit der Summe dieser Dauer und einer gegebenen Dauer zurück (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist). Das Ergebnis ist [ausgeglichen](#dauerabgleich).
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit dem negierten Wert dieser Dauer zurück (alle Felder behalten die gleiche Größe bei, aber das Vorzeichen wird umgekehrt).
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit der Dauer, gerundet auf die kleinste gegebene Einheit oder [ausgeglichen](#dauerabgleich) auf die größte gegebene Einheit, zurück.
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit der Differenz zwischen dieser Dauer und einer gegebenen Dauer zurück (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist). Äquivalent zum [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) des [negierten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) Werts der anderen Dauer.
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diese Dauer im selben [ISO 8601-Format](#iso_8601_dauerdarstellung) wie bei einem Aufruf von {{jsxref("Temporal/Duration/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachensensitiven Darstellung dieser Dauer zurück. In Implementierungen mit Unterstützung der [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) delegiert diese Methode an `Intl.DurationFormat`.
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
  - : Gibt einen String zurück, der diese Dauer im [ISO-8601-Format](#iso_8601_dauerdarstellung) darstellt.
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}
  - : Gibt eine Zahl zurück, die die gesamte Dauer in der gegebenen Einheit darstellt.
- {{jsxref("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.Duration`-Instanzen [implizit in Primitive umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}}
  - : Gibt ein neues `Temporal.Duration`-Objekt zurück, das diese Dauer mit einigen durch neue Werte ersetzten Feldern darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
