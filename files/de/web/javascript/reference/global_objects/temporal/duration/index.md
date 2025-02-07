---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
l10n:
  sourceCommit: 262c13dcbcd394beddd98e07d9c78bc79ce3513c
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.Duration`**-Objekt repräsentiert eine Differenz zwischen zwei Zeitpunkten, die für Datums-/Zeitberechnungen verwendet werden kann. Es wird grundsätzlich als Kombination aus Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden dargestellt.

## Beschreibung

### ISO 8601-Dauerformat

`Duration`-Objekte können mithilfe des [ISO 8601-Dauerformats](https://en.wikipedia.org/wiki/ISO_8601#Durations) serialisiert und geparst werden (mit einigen ECMAScript-Spezifikationen). Die Zeichenkette hat folgendes Format (Leerzeichen dienen nur der Lesbarkeit und sollten in der tatsächlichen Zeichenkette nicht vorhanden sein):

```plain
±P nY nM nW nD T nH nM nS
```

- `±` {{optional_inline}}
  - : Ein optionales Vorzeichen (`+` oder `-`), das eine positive oder negative Dauer darstellt. Standardmäßig positiv.
- `P`
  - : Ein Pflicht-Zeichen `P` oder `p`, das für "Periode" steht.
- `nY`, `nM`, `nW`, `nD`, `nH`, `nM`, `nS`
  - : Eine Zahl, gefolgt von einem Pflicht-Zeichen, das die Anzahl an Jahren (`Y`), Monaten (`M`), Wochen (`W`), Tagen (`D`), Stunden (`H`), Minuten (`M`) oder Sekunden (`S`) darstellt. Alle vorhandenen Komponenten außer der letzten müssen ganze Zahlen sein. Die letzte Komponente – falls es sich um eine Zeitkomponente (Stunden, Minuten oder Sekunden) handelt – kann einen Bruchteil von 1 bis 9 Stellen enthalten, eingeleitet durch einen Punkt oder ein Komma, wie `PT0.0021S` oder `PT1.1H`. Null-Komponenten können weggelassen werden, aber mindestens eine Komponente muss vorhanden sein (auch wenn der Wert null ist, in dem Fall ist die Dauer null).
- `T`
  - : Ein Pflicht-Zeichen `T` oder `t`, das den Datums- vom Zeitteil abtrennt; es muss vorhanden sein, wenn und nur wenn mindestens eine Komponente danach existiert.

Beispiele:

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
> Laut dem ISO 8601-1-Standard dürfen Wochen nicht zusammen mit anderen Einheiten auftreten, und Zeitspannen können nur positiv sein. Als Erweiterungen zum Standard erlaubt ISO 8601-2, welches von Temporal genutzt wird, ein Vorzeichen am Anfang der Zeichenkette und die Kombination von Wochen mit anderen Einheiten. Daher sollten Sie beachten, dass andere Programme möglicherweise Zeichenketten wie `P3W1D`, `+P1M` oder `-P1M` nicht akzeptieren, wenn Ihre Dauer so serialisiert wurde.

Beim Serialisieren respektiert die Ausgabe die gespeicherten Komponenten so weit wie möglich und bewahrt [unausgeglichene](#ausgleich_von_zeitspannen) Komponenten. Subsekunden-Komponenten werden jedoch als einzelne Bruchteile von Sekunden serialisiert, wodurch ihre genauen Werte, falls unausgeglichen, verloren gehen können. Das Pluszeichen wird bei positiven Dauern weggelassen. Die Null-Dauer wird immer als `PT0S` serialisiert.

### Kalendermäßige Zeitspannen

Eine _kalendermäßige Zeitspanne_ enthält eine der [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-Einheiten: Wochen, Monate und Jahre. Eine nicht-kalendermäßige Zeitspanne ist portabel und kann bei Datums-/Zeitberechnungen ohne Kalenderinformationen verwendet werden, da sie eine feste Zeitmenge eindeutig repräsentiert. Eine kalendermäßige Zeitspanne ist jedoch nicht portabel, da die Anzahl der Tage in einem Monat oder Jahr vom Kalendersystem und dem Referenzzeitpunkt abhängt. Daher führt der Versuch, eine kalendermäßige Zeitspanne zu einer Berechnung hinzuzufügen, zu einem Fehler, da Zeitspannen keinen Kalender enthalten. Zum Beispiel bedeutet "1 Monat" im Mai des Gregorianischen Kalenders "31 Tage", aber im April bedeutet es "30 Tage". Um kalendermäßige Zeitspannen zu addieren oder zu subtrahieren, müssen Sie diese zu einem Datum hinzufügen:

```js
const dur1 = Temporal.Duration.from({ years: 1 });
const dur2 = Temporal.Duration.from({ months: 1 });

dur1.add(dur2); // RangeError: for calendar duration arithmetic, use date arithmetic relative to a starting point

const startingPoint = Temporal.PlainDate.from("2021-01-01"); // ISO 8601 calendar
startingPoint.add(dur1).add(dur2).since(startingPoint); // "P396D"
```

Andere Operationen, `round()`, `total()` und `compare()`, nehmen die Option `relativeTo`, um die notwendigen Kalender- und Referenzzeitinformationen bereitzustellen. Diese Option kann eine {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.ZonedDateTime")}} oder ein anderes Objekt bzw. eine Zeichenkette sein, die konvertierbar ist mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} (wenn die Option `timeZone` angegeben ist oder die Zeichenkette eine Zeitzonenanmerkung enthält), oder {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}.

Beachten Sie, dass die Umrechnung von `days` in `hours` technisch ebenfalls mehrdeutig ist, da sich die Länge eines Tages durch Zeitversatzänderungen wie Sommerzeit variieren kann. Sie können einen Zonened `relativeTo`-Wert angeben, um diese Änderungen zu berücksichtigen; andernfalls werden standardmäßig 24-Stunden-Tage angenommen.

### Ausgleich von Zeitspannen

Es gibt viele Möglichkeiten, dieselbe Zeitspanne darzustellen: Beispielsweise sind "1 Minute und 30 Sekunden" und "90 Sekunden" gleichwertig. Je nach Kontext kann jedoch eine Darstellung geeigneter sein als die andere. Daher bewahrt das `Duration`-Objekt im Allgemeinen die Eingabewerte so weit wie möglich, sodass das Format bei der Ausgabe Ihren Erwartungen entspricht.

Jede Komponente einer Zeitspanne hat ihre optimale Reichweite; Stunden sollten von 0 bis 23 reichen, Minuten von 0 bis 59 und so weiter. Wenn eine Komponente ihren optimalen Bereich überschreitet, wird der Überschuss möglicherweise in die nächsthöhere Komponente "übertragen". Um zu übertragen, müssen wir die Frage "Wie viele X sind in einem Y?" beantworten, was für [Kalender-Einheiten](#kalendermäßige_zeitspannen) komplex ist, daher wird in diesem Fall ein Kalender benötigt. Beachten Sie auch, dass `days` standardmäßig direkt in `months` übertragen werden; die Wocheneinheit wird nur dann einbezogen, wenn dies explizit angefordert wird. Wenn wir so viel wie möglich übertragen, wird das endgültige Ergebnis, bei dem alle Komponenten innerhalb ihres optimalen Bereichs liegen, als "ausgeglichene" Dauer bezeichnet. Unausschöpfte Zeitspannen treten in der Regel in einer "kopflastigen" Form auf, bei der die größte Einheit unausgeglichen ist (z. B. "27 Stunden und 30 Minuten"); andere Formen, wie "23 Stunden und 270 Minuten", sind selten zu sehen.

Die Methode {{jsxref("Temporal/Duration/round", "round()")}} gleicht die Zeitspanne immer in die "kopflastige" Form aus, bis zur `largestUnit`-Option. Mit einer manuellen `largestUnit`-Option, die groß genug ist, können Sie die Dauer vollständig ausgleichen. Ebenso gleichen die Methoden {{jsxref("Temporal/Duration/add", "add()")}} und {{jsxref("Temporal/Duration/subtract", "subtract()")}} die Ergebnisdauer an die größte Einheit der Eingabedauern an.

Beachten Sie, dass das ISO 8601-Dauerformat Subsekunden-Komponenten als einzelne Bruchzahlen darstellt, es daher nicht möglich ist, unausgeglichene Subsekunden-Komponenten während der Serialisierung im Standardformat zu bewahren. Zum Beispiel wird "1000 Millisekunden" als `"PT1S"` serialisiert und dann als "1 Sekunde" deserialisiert. Wenn Sie die Größe der Subsekunden-Komponenten bewahren möchten, müssen Sie dies manuell als JSON-Objekt serialisieren (da die Methode {{jsxref("Temporal/Duration/toJSON", "toJSON()")}} die Dauer standardmäßig im ISO 8601-Format serialisiert).

### Vorzeichen der Zeitspannen

Da eine Zeitspanne eine Differenz zwischen zwei Zeitpunkten darstellt, kann sie positiv, negativ oder null sein. Wenn Sie beispielsweise Ereigniszeiten relativ anzeigen, können negative Zeitspannen Ereignisse in der Vergangenheit darstellen, während positive Zeitspannen für die Zukunft stehen. In unserer Darstellung mit einer Kombination aus Zeitkomponenten wird das Vorzeichen in jeder Komponente gespeichert: Eine negative Zeitspanne hat immer alle Komponenten negativ (oder null), und eine positive Zeitspanne hat immer alle Komponenten positiv (oder null). Das Erstellen einer Zeitspanne mit Komponenten von gemischten Vorzeichen ist ungültig und wird vom Konstruktor oder der Methode {{jsxref("Temporal/Duration/with", "with()")}} abgelehnt. Die Methoden `add()` und `subtract()` gleichen die Ergebnisdauer aus, um gemischte Vorzeichen zu vermeiden.

## Konstruktor

- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Duration`-Objekt, indem die zugrunde liegenden Daten direkt übergeben werden.

## Statische Methoden

- {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Zeitspanne kürzer, gleich oder länger als die zweite ist.
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.Duration`-Objekt aus einem anderen `Temporal.Duration`-Objekt, einem Objekt mit Zeitspanneigenschaften oder einem ISO 8601-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.Duration.prototype` definiert und werden von allen `Temporal.Duration`-Instanzen gemeinsam genutzt.

- {{jsxref("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}} {{experimental_inline}}
  - : Gibt einen Wert `true` zurück, wenn diese Dauer eine Null-Dauer darstellt, und `false`, wenn nicht. Entspricht `duration.sign === 0`.
- {{jsxref("Object/constructor", "Temporal.Duration.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanz-Objekt erstellt hat. Für `Temporal.Duration`-Instanzen ist der Anfangswert der {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}}-Konstruktor.
- {{jsxref("Temporal/Duration/days", "Temporal.Duration.prototype.days")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Tage in der Zeitspanne darstellt.
- {{jsxref("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Stunden in der Zeitspanne darstellt.
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Mikrosekunden in der Zeitspanne darstellt.
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden in der Zeitspanne darstellt.
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Minuten in der Zeitspanne darstellt.
- {{jsxref("Temporal/Duration/months", "Temporal.Duration.prototype.months")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Monate in der Zeitspanne darstellt.
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Nanosekunden in der Zeitspanne darstellt.
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Sekunden in der Zeitspanne darstellt.
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}} {{experimental_inline}}
  - : Gibt `1` zurück, wenn diese Zeitspanne positiv ist, `-1`, wenn sie negativ ist, und `0`, wenn sie null ist.
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Wochen in der Zeitspanne darstellt.
- {{jsxref("Temporal/Duration/years", "Temporal.Duration.prototype.years")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre in der Zeitspanne darstellt.
- `Temporal.Duration.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenkette `"Temporal.Duration"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit dem Absolutwert dieser Zeitspanne zurück (alle Felder behalten dieselbe Größe, aber das Vorzeichen wird positiv).
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt zurück, das die Summe aus dieser Zeitspanne und einer gegebenen Zeitspanne darstellt (in einer Form, die mit {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist). Das Ergebnis ist [ausgeglichen](#ausgleich_von_zeitspannen).
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt mit dem negierten Wert dieser Zeitspanne zurück (alle Felder behalten dieselbe Größe, aber das Vorzeichen wird umgekehrt).
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt zurück, das auf die angegebene kleinste Einheit gerundet und/oder [ausgeglichen](#ausgleich_von_zeitspannen) auf die angegebene größte Einheit wird.
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt zurück, das die Differenz zwischen dieser Zeitspanne und einer gegebenen Zeitspanne darstellt (in einer Form, die mit {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist). Entspricht dem [Addieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) des [negierten](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) Wertes der anderen Zeitspanne.
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt eine Zeichenkette zurück, die diese Zeitspanne im gleichen [ISO 8601-Format](#iso_8601-dauerformat) wie ein Aufruf von {{jsxref("Temporal/Duration/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt eine zeichenkettendarstellung dieser Zeitspanne zurück, die sprachabhängig ist. In Implementierungen mit Unterstützung für die [`Intl.DurationFormat`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) delegiert diese Methode an `Intl.DurationFormat`.
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}} {{experimental_inline}}
  - : Gibt eine Zeichenkette zurück, die diese Zeitspanne im [ISO 8601-Format](#iso_8601-dauerformat) darstellt.
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}} {{experimental_inline}}
  - : Gibt eine Zahl zurück, die die gesamte Zeitspanne in der angegebenen Einheit darstellt.
- {{jsxref("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, um zu verhindern, dass `Temporal.Duration`-Instanzen [implizit in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.Duration`-Objekt zurück, das diese Zeitspanne mit einigen durch neue Werte ersetzten Feldern darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
