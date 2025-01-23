---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.Duration`** Objekt repräsentiert einen Unterschied zwischen zwei Zeitpunkten, der in der Datums-/Zeitrechnung verwendet werden kann. Es wird grundsätzlich als Kombination von Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden dargestellt.

## Beschreibung

### ISO 8601-Dauerformat

`Duration` Objekte können unter Verwendung des [ISO 8601-Dauerformats](https://en.wikipedia.org/wiki/ISO_8601#Durations) (mit einigen Erweiterungen, die von ECMAScript spezifiziert sind) serialisiert und geparst werden. Der String hat folgendes Format (Leerzeichen sind nur zur Lesbarkeit vorhanden und sollten im eigentlichen String nicht enthalten sein):

```plain
±P nY nM nW nD T nH nM nS
```

- `±` {{optional_inline}}
  - : Ein optionales Plus- oder Minuszeichen (`+` oder `-`), welches positive oder negative Dauer darstellt. Standard ist positiv.
- `P`
  - : Ein wörtlicher Buchstabe `P` oder `p`, der für "Period" steht.
- `nY`, `nM`, `nW`, `nD`, `nH`, `nM`, `nS`
  - : Eine Zahl gefolgt von einem wörtlichen Buchstaben, der die Anzahl der Jahre (`Y`), Monate (`M`), Wochen (`W`), Tage (`D`), Stunden (`H`), Minuten (`M`) oder Sekunden (`S`) darstellt. Alle außer der letzten vorhandenen Komponente müssen Ganzzahlen sein. Die letzte Komponente, wenn es eine Zeitkomponente (Stunden, Minuten oder Sekunden) ist, kann einen Bruchteil von 1 bis 9 Ziffern haben, vorneweg mit einem Punkt oder Komma, wie `PT0.0021S` oder `PT1.1H`. Jegliche null Komponenten können weggelassen werden, aber es sollte mindestens eine Komponente vorhanden sein (selbst wenn sie den Wert null hat, in diesem Fall ist die Dauer null).
- `T`
  - : Ein wörtlicher Buchstabe `T` oder `t`, der den Datumsteil vom Zeitteil trennt, der nur dann vorhanden sein sollte, wenn mindestens eine Komponente nach ihm folgt.

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
| `PT0.0021S`        | 2,1 Millisekunden (2 Millisekunden und 100 Mikrosekunden)                   |
| `PT0S`             | Null (kanonische Darstellung)                                               |
| `P0D`              | Null                                                                        |

> [!NOTE]
> Gemäß dem ISO 8601-1 Standard dürfen Wochen nicht zusammen mit anderen Einheiten erscheinen und Dauern können nur positiv sein. Als Erweiterungen des Standards erlaubt ISO 8601-2, welches Temporal verwendet, ein Vorzeichen am Anfang des Strings und das Kombinieren von Wochen mit anderen Einheiten. Daher, wenn Ihre Dauer als ein String wie `P3W1D`, `+P1M` oder `-P1M` serialisiert wird, beachten Sie, dass andere Programme es möglicherweise nicht akzeptieren.

Bei der Serialisierung respektiert die Ausgabe die gespeicherten Komponenten soweit wie möglich und bewahrt [unausgeglichene](#dauerabgleich) Komponenten. Allerdings werden Untersekunden-Komponenten als eine einzige gebrochene Sekunde serialisiert, sodass deren genaue Werte, falls unausgeglichen, verloren gehen könnten. Das Pluszeichen wird für positive Dauern weggelassen. Die Null-Dauer wird immer als `PT0S` serialisiert.

### Kalenderdauern

Eine _Kalenderdauer_ ist eine, die eine der [Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) enthält: Wochen, Monate und Jahre. Eine Nicht-Kalender-Dauer ist portabel und kann ohne Kalendersysteminformationen in der Datums-/Zeitrechnung verwendet werden, da sie eindeutig eine feste Zeitdauer repräsentiert. Eine Kalenderdauer ist jedoch nicht portabel, da die Anzahl der Tage in einem Monat oder Jahr vom Kalendersystem und vom Referenzzeitpunkt abhängt. Daher führt der Versuch, mathematische Operationen auf Kalenderdauern auszuführen, zu einem Fehler, da Dauern selbst keine Kalenderinformationen nachverfolgen. Beispielsweise, wenn wir im Mai des gregorianischen Kalenders sind, dann ist "1 Monat" gleich "31 Tage", aber wenn wir im April sind, dann wird "1 Monat" zu "30 Tage". Um Kalenderdauern hinzuzufügen oder zu subtrahieren, müssen Sie sie stattdessen zu Daten hinzufügen:

```js
const dur1 = Temporal.Duration.from({ years: 1 });
const dur2 = Temporal.Duration.from({ months: 1 });

dur1.add(dur2); // RangeError: can't compare durations when "relativeTo" is undefined

const startingPoint = Temporal.PlainDate.from("2021-01-01"); // ISO 8601 calendar
startingPoint.add(dur1).add(dur2).since(startingPoint); // "P396D"
```

Andere Operationen, einschließlich `round()`, `total()`, und `compare()`, benötigen eine `relativeTo`-Option, um die notwendigen Kalender- und Referenzzeitinformationen bereitzustellen. Diese Option kann ein {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.ZonedDateTime")}} sein, oder anderweitig ein Objekt oder String, das mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} (wenn die `timeZone`-Option bereitgestellt wird oder der String eine Zeitzonenanmerkung enthält) oder {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} konvertierbar ist.

Beachten Sie, dass die Umwandlung von `days` nach `hours` technisch auch mehrdeutig ist, da die Länge eines Tages aufgrund von Verschiebungsänderungen, wie der Sommerzeit, variieren kann. Sie können ein zoniertes `relativeTo` bereitstellen, um diese Änderungen zu berücksichtigen; andernfalls werden 24-Stunden-Tage angenommen.

### Dauerabgleich

Es gibt viele Möglichkeiten, dieselbe Dauer darzustellen: zum Beispiel sind "1 Minute und 30 Sekunden" und "90 Sekunden" gleichwertig. Je nach Kontext kann jedoch eine Darstellung angemessener sein als die andere. Daher bewahrt das `Duration`-Objekt im Allgemeinen die Eingabewerte so weit wie möglich, sodass es beim Formatieren so angezeigt wird, wie Sie es erwarten.

Jede Komponente einer Dauer hat ihren optimalen Bereich; Stunden sollten von 0 bis 23, Minuten von 0 bis 59 sein, und so weiter. Wenn eine Komponente ihren optimalen Bereich überschreitet, kann der Überschuss in die nächste größere Komponente "übertragen" werden. Um zu übertragen, müssen wir die Frage beantworten "Wie viele X sind in einem Y?", was eine komplizierte Frage für [Kalendereinheiten](#kalenderdauern) ist; in diesem Fall wird ein Kalender benötigt. Beachten Sie auch, dass standardmäßig `days` direkt in `months` übertragen werden; die Wochen-Einheit wird nur übertragen, wenn explizit angefordert. Wenn wir so viel wie möglich übertragen, wird das Endresultat, bei dem alle Komponenten in ihrem optimalen Bereich liegen, als "ausgeglichene" Dauer bezeichnet. Unaustarierte Dauern treten normalerweise in der "stark belasteten" Form auf, bei der die größte Einheit unaustariert ist (z. B. "27 Stunden und 30 Minuten"); andere Formen, wie "23 Stunden und 270 Minuten", sind selten zu sehen.

Die {{jsxref("Temporal/Duration/round", "round()")}} Methode balanciert die Dauer immer in der "stark belasteten" Form aus, bis zur `largestUnit`-Option. Mit einer manuellen `largestUnit`-Option, die groß genug ist, können Sie die Dauer vollständig austarieren. Ähnlich balancieren die {{jsxref("Temporal/Duration/add", "add()")}} und {{jsxref("Temporal/Duration/subtract", "subtract()")}} Methoden die Ergebnisdauer zur größten Einheit der Eingabedauern.

Beachten Sie, dass es aufgrund des ISO 8601-Dauerformats nicht möglich ist, unaustarierte Untersekundenkomponenten während der Serialisierung mit dem Standardformat beizubehalten, da diese als eine einzige gebrochene Zahl dargestellt werden. Zum Beispiel wird "1000 Millisekunden" als `"PT1S"` serialisiert und dann als "1 Sekunde" deserialisiert. Wenn Sie die Größenordnungen der Untersekundenkomponenten beibehalten müssen, müssen Sie diese manuell als JSON-Objekt serialisieren (da standardmäßig die {{jsxref("Temporal/Duration/toJSON", "toJSON()")}} Methode die Dauer im ISO 8601-Format serialisiert).

### Dauerzeichen

Da eine Dauer ein Unterschied zwischen zwei Zeitpunkten ist, kann sie positiv, negativ oder null sein. Wenn beispielsweise Ereigniszeiten in relativer Zeit angezeigt werden, können negative Dauern Ereignisse in der Vergangenheit darstellen und positive Dauern für die Zukunft. In unserer Darstellung mit einer Kombination von Zeitkomponenten wird das Zeichen innerhalb jeder Komponente gespeichert: Eine negative Dauer hat immer alle Komponenten negativ (oder null), und eine positive Dauer hat immer alle Komponenten positiv (oder null). Eine Dauer mit Komponenten gemischter Vorzeichen zu konstruieren ist ungültig und wird vom Konstruktor oder der {{jsxref("Temporal/Duration/with", "with()")}} Methode abgelehnt. Die `add()` und `subtract()` Methoden balancieren die Ergebnisdauer aus, um gemischte Vorzeichen zu vermeiden.

## Konstruktor

- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Duration` Objekt, indem die zugrundeliegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Dauer kürzer, gleich oder länger als die zweite ist.
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Duration` Objekt aus einem anderen `Temporal.Duration` Objekt, einem Objekt mit Dauereigenschaften oder einem ISO 8601-String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.Duration.prototype` definiert und werden von allen `Temporal.Duration` Instanzen geteilt.

- {{jsxref("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}} {{experimental_inline}}
  - : Gibt einen Boolean-Wert zurück, der `true` ist, wenn diese Dauer eine Null-Dauer darstellt, und ansonsten `false`. Equivalent zu `duration.sign === 0`.
- {{jsxref("Object/constructor", "Temporal.Duration.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.Duration` Instanzen ist der initiale Wert der {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} Konstruktor.
- {{jsxref("Temporal/Duration/days", "Temporal.Duration.prototype.days")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Tage in der Dauer darstellt.
- {{jsxref("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Stunden in der Dauer darstellt.
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Mikrosekunden in der Dauer darstellt.
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden in der Dauer darstellt.
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Minuten in der Dauer darstellt.
- {{jsxref("Temporal/Duration/months", "Temporal.Duration.prototype.months")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Monate in der Dauer darstellt.
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Nanosekunden in der Dauer darstellt.
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Sekunden in der Dauer darstellt.
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}} {{experimental_inline}}
  - : Gibt `1` zurück, wenn diese Dauer positiv ist, `-1`, wenn negativ, und `0`, wenn sie null ist.
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Wochen in der Dauer darstellt.
- {{jsxref("Temporal/Duration/years", "Temporal.Duration.prototype.years")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre in der Dauer darstellt.
- `Temporal.Duration.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.Duration"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt mit dem absoluten Wert dieser Dauer zurück (alle Felder behalten die gleiche Größe, aber das Vorzeichen wird positiv).
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt mit der Summe dieser Dauer und einer gegebenen Dauer (in einer Form konvertierbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) zurück. Das Ergebnis ist [ausgeglichen](#dauerabgleich).
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt mit dem negativen Wert dieser Dauer zurück (alle Felder behalten die gleiche Größe, aber das Vorzeichen wird umgekehrt).
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt mit der Dauer, gerundet auf die gegebene kleinste Einheit und/oder [ausgeglichen](#dauerabgleich) auf die gegebene größte Einheit zurück.
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt mit dem Unterschied zwischen dieser Dauer und einer gegebenen Dauer (in einer Form konvertierbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) zurück. Equivalent zum [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) des [negativen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) Wertes der anderen Dauer.
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Dauer im gleichen [ISO 8601-Format](#iso_8601-dauerformat) wie beim Aufrufen von {{jsxref("Temporal/Duration/toString", "toString()")}} darstellt. Soll von {{jsxref("JSON.stringify()")}} implizit aufgerufen werden.
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Dauer zurück. In Implementierungen mit Unterstützung für die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) delegiert diese Methode an `Intl.DurationFormat`.
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Dauer im [ISO 8601-Format](#iso_8601-dauerformat) darstellt.
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}} {{experimental_inline}}
  - : Gibt eine Zahl zurück, die die Gesamtdauer in der gegebenen Einheit darstellt.
- {{jsxref("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.Duration` Instanzen [implizit in primitive Typen umgewandelt werden](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration` Objekt zurück, das diese Dauer mit einigen Feldern, die durch neue Werte ersetzt wurden, darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
