---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.Duration`**-Objekt repräsentiert einen Unterschied zwischen zwei Zeitpunkten, der in der Datum-/Uhrzeitarithmetik verwendet werden kann. Es wird grundsätzlich als Kombination von Werten für Jahre, Monate, Wochen, Tage, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden dargestellt.

## Beschreibung

### ISO 8601-Dauerformat

`Duration`-Objekte können unter Verwendung des [ISO 8601-Dauerformats](https://en.wikipedia.org/wiki/ISO_8601#Durations) (mit einigen von ECMAScript spezifizierten Erweiterungen) serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
±P nY nM nW nD T nH nM nS
```

- `±` {{optional_inline}}
  - : Ein optionales Vorzeichenzeichen (`+` oder `-`), das eine positive oder negative Dauer darstellt. Standard ist positiv.
- `P`
  - : Ein literales Zeichen `P` oder `p`, das für "Periode" steht.
- `nY`, `nM`, `nW`, `nD`, `nH`, `nM`, `nS`
  - : Eine Zahl gefolgt von einem literalen Zeichen, das die Anzahl der Jahre (`Y`), Monate (`M`), Wochen (`W`), Tage (`D`), Stunden (`H`), Minuten (`M`) oder Sekunden (`S`) darstellt. Alle außer der letzten existierenden Komponente müssen ganzzahlig sein. Die letzte Komponente, wenn sie eine Zeitkomponente ist (Stunden, Minuten oder Sekunden), kann einen Bruchteil von 1 bis 9 Stellen haben, die mit einem Punkt oder Komma eingeleitet werden, wie z. B. `PT0.0021S` oder `PT1.1H`. Alle Komponenten mit dem Wert Null können weggelassen werden, aber mindestens eine Komponente sollte vorhanden sein (auch wenn sie den Wert Null hat, in diesem Fall ist die Dauer null).
- `T`
  - : Ein literales Zeichen `T` oder `t`, das den Datumsteil vom Zeitteil trennt und nur vorhanden sein sollte, wenn mindestens eine Komponente nach ihm vorhanden ist.

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
> Gemäß dem ISO 8601-1-Standard dürfen Wochen nicht zusammen mit anderen Einheiten erscheinen und Dauern können nur positiv sein. Als Erweiterungen des Standards erlaubt ISO 8601-2, welches Temporal verwendet, ein Vorzeichenzeichen am Anfang des Strings und erlaubt die Kombination von Wochen mit anderen Einheiten. Daher beachten Sie, dass, wenn Ihre Dauer zu einem String wie `P3W1D`, `+P1M` oder `-P1M` serialisiert wird, andere Programme sie möglicherweise nicht akzeptieren.

Beim Serialisieren respektiert die Ausgabe die gespeicherten Komponenten so weit wie möglich und bewahrt [unausgeglichene](#dauerabgleich) Komponenten. Subsekunden-Komponenten werden jedoch als einzelne Bruchteile von Sekunden serialisiert, sodass ihre genauen Werte, wenn unausgeglichen, möglicherweise verloren gehen. Das Pluszeichen wird bei positiven Dauern weggelassen. Die Null-Dauer wird immer als `PT0S` serialisiert.

### Kalenderdauern

Eine _Kalenderdauer_ ist eine, die eine der [Kalendereinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars): Wochen, Monate und Jahre enthält. Eine Nicht-Kalenderdauer ist portabel und kann ohne jegliche Kalenderinformationen an Datum-/Uhrzeitarithmetik teilnehmen, da sie eindeutig eine feste Zeitmenge repräsentiert. Eine Kalenderdauer ist jedoch nicht portabel, da die Anzahl der Tage in einem Monat oder Jahr vom Kalendersystem und dem Referenzzeitpunkt abhängt. Daher führt der Versuch, jegliche arithmetische Operation auf Kalenderdauern durchzuführen, zu einem Fehler, da Dauern selbst keinen Kalender verfolgen. Zum Beispiel, wenn wir im Mai des gregorianischen Kalenders sind, dann ist "1 Monat" "31 Tage", aber wenn wir im April sind, dann wird "1 Monat" zu "30 Tagen". Um Kalenderdauern zu addieren oder zu subtrahieren, müssen Sie sie stattdessen zu Daten hinzufügen:

```js
const dur1 = Temporal.Duration.from({ years: 1 });
const dur2 = Temporal.Duration.from({ months: 1 });

dur1.add(dur2); // RangeError: for calendar duration arithmetic, use date arithmetic relative to a starting point

const startingPoint = Temporal.PlainDate.from("2021-01-01"); // ISO 8601 calendar
startingPoint.add(dur1).add(dur2).since(startingPoint); // "P396D"
```

Andere Operationen, `round()`, `total()` und `compare()`, nehmen eine `relativeTo`-Option, um die notwendigen Kalender- und Referenzzeitinformationen bereitzustellen. Diese Option kann ein {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.ZonedDateTime")}} oder anderweitig ein Objekt oder String sein, das konvertierbar ist unter Verwendung von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} (wenn die `timeZone`-Option bereitgestellt wird oder der String Zeitzonenanmerkungen enthält) oder {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}.

Beachten Sie, dass die Umwandlung von `Tagen` zu `Stunden` auch technisch mehrdeutig ist, da die Länge eines Tages durch Offsetänderungen wie die Sommerzeit variieren kann. Sie können ein zonenbezogenes `relativeTo` bereitstellen, um diese Änderungen zu berücksichtigen; andernfalls werden Tage mit 24 Stunden angenommen.

### Dauerabgleich

Es gibt viele Möglichkeiten, dieselbe Dauer darzustellen: zum Beispiel sind "1 Minute und 30 Sekunden" und "90 Sekunden" gleichwertig. Abhängig vom Kontext ist jedoch eine Darstellung möglicherweise angemessener als die andere. Daher bewahrt das `Duration`-Objekt im Allgemeinen die Eingabewerte so weit wie möglich, sodass es beim Formatieren so angezeigt wird, wie Sie es erwarten.

Jede Komponente einer Dauer hat ihren optimalen Bereich; Stunden sollten von 0 bis 23, Minuten von 0 bis 59, usw. sein. Wenn eine Komponente ihren optimalen Bereich überschreitet, kann der Überschuss in die nächsthöhere Komponente "übertragen" werden. Um zu übertragen, müssen wir die Frage beantworten: "Wie viele X sind in einem Y?", was eine komplizierte Frage für [Kalendereinheiten](#kalenderdauern) ist, daher wird in diesem Fall ein Kalender benötigt. Beachten Sie auch, dass standardmäßig `Tage` direkt in `Monate` übertragen werden; die Wocheneinheit wird nur übertragen, wenn explizit angefordert. Wenn wir so viel wie möglich übertragen, wird das endgültige Ergebnis, bei dem alle Komponenten innerhalb ihres optimalen Bereichs liegen, als "ausgeglichene" Dauer bezeichnet. Unaustarierte Dauern kommen in der Regel in Form von "oben schwer" vor, bei der die größte Einheit unaustariert ist (z. B. "27 Stunden und 30 Minuten"); andere Formen, wie "23 Stunden und 270 Minuten", sind selten zu sehen.

Die {{jsxref("Temporal/Duration/round", "round()")}}-Methode balanciert die Dauer immer in die Form "oben schwer" aus, bis zur Option `largestUnit`. Mit einer manuellen `largestUnit`-Option, die groß genug ist, können Sie die Dauer vollständig ausbalancieren. Ebenso balancieren die {{jsxref("Temporal/Duration/add", "add()")}}- und {{jsxref("Temporal/Duration/subtract", "subtract()")}}-Methoden die Ertragsdauer zur größten Einheit der Eingabedauern aus.

Beachten Sie, dass das ISO 8601-Dauerformat Subsekundenkomponenten als eine einzige Bruchzahl darstellt, so dass es nicht möglich ist, unaustarierte Subsekundenkomponenten während Serialisierung unter Verwendung des Standardformats zu bewahren. Zum Beispiel wird "1000 Millisekunden" als `"PT1S"` serialisiert und dann als "1 Sekunde" deserialisiert. Wenn Sie die Größenordnungen der Subsekundenkomponenten bewahren müssen, müssen Sie sie manuell als ein JSON-Objekt serialisieren (da standardmäßig die {{jsxref("Temporal/Duration/toJSON", "toJSON()")}}-Methode die Dauer im ISO 8601-Format serialisiert).

### Daurenvorzeichen

Da eine Dauer ein Unterschied zwischen zwei Zeitpunkten ist, kann sie positiv, negativ oder null sein. Zum Beispiel, wenn Sie Ereigniszeiten in relativen Zeiten darstellen, können negative Dauern Ereignisse in der Vergangenheit und positive Dauern solche in der Zukunft repräsentieren. In unserer Darstellung mit einer Kombination von Zeitkomponenten wird das Vorzeichen in jeder Komponente gespeichert: eine negative Dauer hat immer alle Komponenten negativ (oder null), und eine positive Dauer hat immer alle Komponenten positiv (oder null). Das Erstellen einer Dauer mit Komponenten gemischter Vorzeichen ist ungültig und wird vom Konstruktor oder der {{jsxref("Temporal/Duration/with", "with()")}}-Methode abgelehnt. Die Methoden `add()` und `subtract()` balancieren die Ergebnisdauer, um gemischte Vorzeichen zu vermeiden.

## Konstruktor

- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Duration`-Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob die erste Dauer kürzer, gleich oder länger als die zweite ist.
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Duration`-Objekt aus einem anderen `Temporal.Duration`-Objekt, einem Objekt mit Dauereigenschaften oder einem ISO 8601-String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.Duration.prototype` definiert und werden von allen `Temporal.Duration`-Instanzen geteilt.

- {{jsxref("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn diese Dauer eine Null-Dauer repräsentiert, und `false` ansonsten. Entspricht `duration.sign === 0`.
- {{jsxref("Object/constructor", "Temporal.Duration.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.Duration`-Instanzen ist der Anfangswert der {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}}-Konstruktor.
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
  - : Gibt `1` zurück, wenn diese Dauer positiv ist, `-1` wenn negativ, und `0` wenn null.
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Wochen in der Dauer repräsentiert.
- {{jsxref("Temporal/Duration/years", "Temporal.Duration.prototype.years")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre in der Dauer repräsentiert.
- `Temporal.Duration.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.Duration"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit dem Absolutwert dieser Dauer zurück (alle Felder behalten die gleiche Größe, aber das Vorzeichen wird positiv).
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit der Summe dieser Dauer und einer gegebenen Dauer zurück (in einer Form konvertierbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}). Das Ergebnis ist [ausgeglichen](#dauerabgleich).
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit dem negierten Wert dieser Dauer zurück (alle Felder behalten die gleiche Größe, aber das Vorzeichen wird umgekehrt).
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit der auf die gegebene kleinste Einheit gerundeten Dauer und/oder [ausgeglichen](#dauerabgleich) zur gegebenen größten Einheit zurück.
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit dem Unterschied zwischen dieser Dauer und einer gegebenen Dauer zurück (in einer Form konvertierbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}). Entspricht dem [Hinzufügen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) des [negierten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) Wertes der anderen Dauer.
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Dauer in demselben [ISO 8601-Format](#iso_8601-dauerformat) darstellt, wie beim Aufrufen von {{jsxref("Temporal/Duration/toString", "toString()")}}. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Dauer zurück. In Implementierungen mit Unterstützung für die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) delegiert diese Methode an `Intl.DurationFormat`.
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Dauer im [ISO 8601-Format](#iso_8601-dauerformat) darstellt.
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}} {{experimental_inline}}
  - : Gibt eine Zahl zurück, die die Gesamtdauer in der angegebenen Einheit repräsentiert.
- {{jsxref("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.Duration`-Instanzen [implizit in primitive Werte konvertiert werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt zurück, das diese Dauer mit einigen durch neue Werte ersetzten Feldern repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
