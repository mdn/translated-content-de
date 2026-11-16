---
title: Date()-Konstruktor
short-title: Date()
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Der **`Date()`**-Konstruktor erstellt {{jsxref("Date")}}-Objekte. Wird er als Funktion aufgerufen, gibt er einen String zurück, der die aktuelle Zeit darstellt.

{{InteractiveExample("JavaScript Demo: Date() constructor")}}

```js interactive-example
const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date("1995-12-17T03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1.getTime() === date2.getTime());
// Expected output: true
```

## Syntax

```js-nolint
new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

Date()
```

> [!NOTE]
> `Date()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, allerdings mit unterschiedlicher Wirkung. Siehe [Rückgabewert](#rückgabewert).

### Parameter

Für den `Date()`-Konstruktor gibt es fünf grundlegende Aufrufformen:

#### Keine Parameter

Wenn keine Parameter angegeben werden, stellt das neu erstellte `Date`-Objekt das aktuelle Datum und die aktuelle Uhrzeit zum Zeitpunkt seiner Erstellung dar. Der [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des zurückgegebenen Datums entspricht der Zahl, die {{jsxref("Date.now()")}} zurückgibt.

#### Zeitwert oder Zeitstempel als Zahl

- `value`
  - : Ein ganzzahliger Wert, der den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) darstellt (die Anzahl der Millisekunden seit Mitternacht zu Beginn des 1. Januar 1970, UTC – auch als [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) bezeichnet).

#### Datums-String

- `dateString`
  - : Ein String, der ein Datum darstellt und mit demselben Algorithmus geparst und interpretiert wird, den {{jsxref("Date.parse()")}} verwendet. Hinweise zu den Besonderheiten verschiedener Formate finden Sie unter [Datums- und Uhrzeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format).

#### Date-Objekt

- `dateObject`
  - : Ein vorhandenes `Date`-Objekt. Damit wird eine Kopie des vorhandenen `Date`-Objekts mit demselben Datum und derselben Uhrzeit erstellt. Dies entspricht `new Date(dateObject.valueOf())`, außer dass die Methode `valueOf()` nicht aufgerufen wird.

Wenn dem `Date()`-Konstruktor ein Parameter übergeben wird, werden `Date`-Instanzen gesondert behandelt. Alle anderen Werte werden [in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Ist das Ergebnis ein String, wird er als Datums-String geparst. Andernfalls wird der resultierende primitive Wert weiter in eine Zahl umgewandelt und als Zeitstempel behandelt.

#### Einzelne Datums- und Uhrzeitkomponenten

Werden mindestens Jahr und Monat angegeben, gibt diese Form von `Date()` ein `Date`-Objekt zurück, dessen Komponentenwerte (Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde) aus den folgenden Parametern stammen. Fehlende Werte erhalten jeweils den niedrigsten möglichen Wert (`1` für `day` und `0` für alle anderen Komponenten). Die Parameterwerte werden anhand der lokalen Zeitzone ausgewertet, nicht anhand von UTC. {{jsxref("Date.UTC()")}} akzeptiert ähnliche Parameter, interpretiert die Komponenten jedoch als UTC und gibt einen Zeitstempel zurück.

Überschreitet ein Parameter seine festgelegten Grenzen, wird der Überlauf auf die nächsthöhere Komponente übertragen. Wird beispielsweise ein `monthIndex` größer als `11` übergeben, erhöht sich das Jahr entsprechend; bei einem Wert für `minutes` größer als `59` erhöht sich entsprechend `hours` usw. Daher ergibt `new Date(1990, 12, 1)` den 1. Januar 1991 und `new Date(2020, 5, 19, 25, 65)` den 20. Juni 2020 um 02:05 Uhr.

Unterschreitet ein Parameter seine Grenzen, wird entsprechend von der nächsthöheren Komponente abgezogen. Beispielsweise ergibt `new Date(2020, 5, 0)` den 31. Mai 2020.

- `year`
  - : Ganzzahliger Wert für das Jahr. Werte von `0` bis `99` werden den Jahren `1900` bis `1999` zugeordnet. Alle anderen Werte geben das tatsächliche Jahr an. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Ganzzahliger Wert für den Monat, beginnend mit `0` für Januar bis `11` für Dezember.
- `day` {{optional_inline}}
  - : Ganzzahliger Wert für den Tag des Monats. Standardwert ist `1`.
- `hours` {{optional_inline}}
  - : Ganzzahliger Wert zwischen `0` und `23` für die Stunde des Tages. Standardwert ist `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahliger Wert für die Minuten einer Uhrzeit. Standardwert ist `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahliger Wert für die Sekunden einer Uhrzeit. Standardwert ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahliger Wert für die Millisekunden einer Uhrzeit. Standardwert ist `0`.

### Rückgabewert

Der Aufruf von `new Date()` (dem `Date()`-Konstruktor) gibt ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt zurück. Wird ein ungültiger Datums-String übergeben oder hätte das zu erstellende Datum einen Zeitstempel von weniger als `-8,640,000,000,000,000` oder mehr als `8,640,000,000,000,000` Millisekunden, wird ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurückgegeben (ein `Date`-Objekt, dessen Methode {{jsxref("Date/toString", "toString()")}} `"Invalid Date"` und dessen Methode {{jsxref("Date/valueOf", "valueOf()")}} `NaN` zurückgibt).

Der Aufruf der Funktion `Date()` (ohne das Schlüsselwort `new`) gibt eine String-Darstellung des aktuellen Datums und der aktuellen Uhrzeit zurück, genau wie `new Date().toString()`. Alle Argumente eines solchen `Date()`-Funktionsaufrufs werden ignoriert. Selbst wenn ein ungültiger Datums-String, ein beliebiges Objekt oder ein anderer primitiver Wert als Argument übergeben wird, gibt die Funktion immer eine String-Darstellung des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Beschreibung

### Verringerte Zeitauflösung

Zum Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} kann die Genauigkeit von `new Date()` abhängig von den Browsereinstellungen reduziert sein.

Wenn dem Konstruktor ein Zeitstempel, ein Datums-String, ein Datumsobjekt oder Werte für Datumskomponenten übergeben werden, rundet der Browser die übergebene Zeit nicht.

Wird der Konstruktor ohne Argumente aufgerufen, ermittelt er die aktuelle Zeit auf dieselbe Weise wie {{jsxref("Date.now()")}}. Er übernimmt die Genauigkeit dieser Zeitmessung, ohne zusätzliche Ungenauigkeit einzuführen.

## Beispiele

### Verschiedene Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Möglichkeiten, Datumswerte in JavaScript zu erstellen:

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // passing epoch timestamp
```

### Übergabe eines Werts, der weder ein Date-Objekt noch ein String oder eine Zahl ist

Wird der `Date()`-Konstruktor mit einem Parameter aufgerufen, der keine `Date`-Instanz ist, wird dieser in einen primitiven Wert umgewandelt und anschließend geprüft, ob er ein String ist. Beispielsweise unterscheidet sich `new Date(undefined)` von `new Date()`:

```js
console.log(new Date(undefined)); // Invalid Date
```

Das liegt daran, dass `undefined` bereits ein primitiver Wert, aber kein String ist. Es wird daher in eine Zahl umgewandelt, deren Wert [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist und die somit keinen gültigen Zeitstempel darstellt. `null` hingegen wird in `0` umgewandelt.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) werden über [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) in einen String umgewandelt; dabei werden die Elemente durch Kommas verbunden. Der resultierende String eines Arrays mit mehr als einem Element ist jedoch kein gültiger Datums-String nach ISO 8601. Wie er geparst wird, hängt daher von der Implementierung ab. **Übergeben Sie keine Arrays an den `Date()`-Konstruktor.**

```js
console.log(new Date(["2020-06-19", "17:13"]));
// 2020-06-19T17:13:00.000Z in Chrome, since it recognizes "2020-06-19,17:13"
// "Invalid Date" in Firefox
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date")}}
