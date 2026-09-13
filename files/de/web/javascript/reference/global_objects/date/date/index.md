---
title: Date() Konstruktor
short-title: Date()
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

Der **`Date()`** Konstruktor erstellt {{jsxref("Date")}} Objekte. Wenn er als Funktion aufgerufen wird, gibt er einen String zurück, der die aktuelle Zeit darstellt.

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
> `Date()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

Es gibt fünf grundlegende Formen für den `Date()` Konstruktor:

#### Keine Parameter

Wenn keine Parameter angegeben sind, repräsentiert das neu erstellte `Date` Objekt das aktuelle Datum und die aktuelle Uhrzeit zum Zeitpunkt der Instanziierung. Der Zeitstempel des zurückgegebenen Datums ist derselbe wie die Zahl, die von {{jsxref("Date.now()")}} zurückgegeben wird.

#### Zeitwert oder Zeitstempelnummer

- `value`
  - : Ein ganzzahliger Wert, der den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) darstellt (die Anzahl der Millisekunden seit Mitternacht zu Beginn des 1. Januar 1970, UTC — auch bekannt als das [Epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Datumsstring

- `dateString`
  - : Ein String-Wert, der ein Datum darstellt und mit dem gleichen Algorithmus geparst und interpretiert wird, der von {{jsxref("Date.parse()")}} implementiert wird. Siehe [Date Time String Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) für Hinweise zur Verwendung verschiedener Formate.

#### Date Objekt

- `dateObject`
  - : Ein bestehendes `Date` Objekt. Dies macht effektiv eine Kopie des bestehenden `Date` Objekts mit dem gleichen Datum und der gleichen Uhrzeit. Dies ist gleichbedeutend mit `new Date(dateObject.valueOf())`, außer dass die `valueOf()` Methode nicht aufgerufen wird.

Wenn ein Parameter an den `Date()` Konstruktor übergeben wird, werden `Date` Instanzen speziell behandelt. Alle anderen Werte werden [in primitive Datentypen umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Wenn das Ergebnis ein String ist, wird es als Datumsstring geparst. Andernfalls wird das resultierende Primitive weiter zu einer Zahl umgewandelt und als Zeitstempel behandelt.

#### Einzelwerte für Datum und Uhrzeitkomponenten

Wenn mindestens ein Jahr und ein Monat angegeben sind, gibt diese Form des `Date()` ein `Date` Objekt zurück, dessen Komponentenwerte (Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde) alle aus den folgenden Parametern stammen. Fehlende Felder erhalten den kleinstmöglichen Wert (`1` für `Tag` und `0` für alle anderen Komponenten). Die Parameterwerte werden alle vor Ort interpretiert, anstatt in UTC. {{jsxref("Date.UTC()")}} akzeptiert ähnliche Parameter, interpretiert die Komponenten jedoch als UTC und gibt einen Zeitstempel zurück.

Wenn ein Parameter seine definierten Grenzen überschreitet, wird er "übertragen". Wenn beispielsweise ein `monthIndex` größer als `11` übergeben wird, erhöhen diese Monate das Jahr; wenn eine `minutes` größer als `59` übergeben wird, wird `hours` entsprechend erhöht usw. Daher gibt `new Date(1990, 12, 1)` den 1. Januar 1991 zurück; `new Date(2020, 5, 19, 25, 65)` gibt den 20. Juni 2020 um 2:05 Uhr zurück.

Auf ähnliche Weise, wenn ein Parameter unterläuft, "leiht" er sich von höheren Positionen. Zum Beispiel gibt `new Date(2020, 5, 0)` den 31. Mai 2020 zurück.

- `year`
  - : Ganzzahliger Wert, der das Jahr darstellt. Werte von `0` bis `99` entsprechen den Jahren `1900` bis `1999`. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Ganzzahliger Wert, der den Monat darstellt, beginnend mit `0` für Januar bis `11` für Dezember.
- `day` {{optional_inline}}
  - : Ganzzahliger Wert, der den Tag des Monats darstellt. Standardmäßig `1`.
- `hours` {{optional_inline}}
  - : Ganzzahliger Wert zwischen `0` und `23`, der die Stunde des Tages darstellt. Standardmäßig `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahliger Wert, der das Minuten-Segment einer Zeit darstellt. Standardmäßig `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahliger Wert, der das Sekunden-Segment einer Zeit darstellt. Standardmäßig `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahliger Wert, der das Millisekunden-Segment einer Zeit darstellt. Standardmäßig `0`.

### Rückgabewert

Der Aufruf von `new Date()` (dem `Date()` Konstruktor) gibt ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt zurück. Wenn es mit einem ungültigen Datumsstring aufgerufen wird oder wenn das zu konstruierende Datum einen Zeitstempel kleiner als `-8.640.000.000.000.000` oder größer als `8.640.000.000.000.000` Millisekunden haben würde, gibt es ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück (ein `Date` Objekt, dessen Methode {{jsxref("Date/toString", "toString()")}} `"Invalid Date"` zurückgibt und dessen Methode {{jsxref("Date/valueOf", "valueOf()")}} `NaN` zurückgibt).

Der Aufruf der `Date()` Funktion (ohne das `new` Schlüsselwort) gibt eine String-Darstellung des aktuellen Datums und der aktuellen Uhrzeit zurück, genau wie `new Date().toString()`. Jegliche Argumente, die in einem `Date()` Funktionsaufruf (ohne das `new` Schlüsselwort) übergeben werden, werden ignoriert; unabhängig davon, ob es mit einem ungültigen Datumsstring aufgerufen wird — oder sogar mit einem beliebigen Objekt oder einem anderen primitiven Datentyp als Argument — es gibt immer eine String-Darstellung des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Beschreibung

### Reduzierte Zeitpräzision

Um Schutz gegen Timing-Attacken und {{Glossary("Fingerprinting", "Fingerabdrucks-Techniken")}} zu bieten, kann die Präzision von `new Date()` je nach Browsereinstellungen reduziert werden.

Wenn ein Zeitstempel, Datumsstring, Datum-Objekt oder Datums-Komponentenwerte an den Konstruktor übergeben werden, wendet der Browser kein Zeit-Glättungsverfahren auf die gelieferte Zeit an.

Wenn es ohne Argumente aufgerufen wird, erhält der Konstruktor die aktuelle Zeit auf dieselbe Weise wie {{jsxref("Date.now()")}}. Es erbt die Genauigkeit dieses Uhrzeitlesens, ohne zusätzliche Ungenauigkeit einzuführen.

## Beispiele

### Verschiedene Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Möglichkeiten, JavaScript-Daten zu erstellen:

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday = new Date(1995, 11, 17); // the month is 0-indexed
const birthday = new Date(1995, 11, 17, 3, 24, 0);
const birthday = new Date(628021800000); // passing epoch timestamp
```

### Übergeben eines Werts, der weder Date, String noch Zahl ist

Wenn der `Date()` Konstruktor mit einem Parameter aufgerufen wird, der keine `Date` Instanz ist, wird er zu einem primitiven Datentyp umgewandelt und dann überprüft, ob es sich um einen String handelt. Zum Beispiel ist `new Date(undefined)` anders als `new Date()`:

```js
console.log(new Date(undefined)); // Invalid Date
```

Dies liegt daran, dass `undefined` bereits ein primitiv ist, aber kein String, daher wird es zu einer Zahl umgewandelt, was [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist und daher kein gültiger Zeitstempel ist. Andererseits wird `null` zu `0` umgewandelt.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) würden über [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) zu einem String umgewandelt, der die Elemente mit Kommata verbindet. Der resultierende String für jedes Array mit mehr als einem Element ist jedoch kein gültiger ISO 8601-Datumsstring, sodass sein Parser-Verhalten implementierungsabhängig wäre. **Geben Sie keine Arrays an den `Date()` Konstruktor weiter.**

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
