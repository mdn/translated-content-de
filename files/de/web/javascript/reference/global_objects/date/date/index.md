---
title: Date() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Der **`Date()`** Konstruktor erstellt {{jsxref("Date")}} Objekte. Wird er als Funktion aufgerufen, gibt er einen String zurück, der die aktuelle Zeit darstellt.

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

> **Note:** `Date()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

Es gibt fünf grundlegende Formen für den `Date()` Konstruktor:

#### Keine Parameter

Wenn keine Parameter übergeben werden, repräsentiert das neu erstellte `Date`-Objekt das aktuelle Datum und die aktuelle Uhrzeit zum Zeitpunkt der Instanziierung. Der zurückgegebene [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist derselbe wie die Zahl, die von {{jsxref("Date.now()")}} zurückgegeben wird.

#### Zeitwert oder Zeitstempel Nummer

- `value`
  - : Ein ganzzahliger Wert, der den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) repräsentiert (die Anzahl der Millisekunden seit Mitternacht am Anfang des 1. Januar 1970 UTC — auch bekannt als [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Datumsstring

- `dateString`
  - : Ein String-Wert, der ein Datum darstellt und unter Verwendung des gleichen Algorithmus analysiert und interpretiert wird, der von {{jsxref("Date.parse()")}} implementiert wird. Siehe [Format des Datumszeit-Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) für Vorsichtsmaßnahmen bei der Verwendung verschiedener Formate.

#### Datumobjekt

- `dateObject`
  - : Ein bestehendes `Date`-Objekt. Dies entspricht effektiv dem Kopieren des bestehenden `Date`-Objekts mit demselben Datum und derselben Uhrzeit. Dies ist gleichbedeutend mit `new Date(dateObject.valueOf())`, außer dass die `valueOf()`-Methode nicht aufgerufen wird.

Wenn ein Parameter an den `Date()` Konstruktor übergeben wird, werden `Date`-Instanzen besonders behandelt. Alle anderen Werte werden [in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Wenn das Ergebnis ein String ist, wird es als Datumsstring analysiert. Andernfalls wird das resultierende Primitive weiter in eine Zahl umgewandelt und als Zeitstempel behandelt.

#### Einzelne Datum- und Uhrzeitkomponentenwerte

Bei Angabe mindestens eines Jahres und Monats gibt diese Form von `Date()` ein `Date`-Objekt zurück, dessen Komponentenwerte (Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde) alle von den folgenden Parametern stammen. Alle fehlenden Felder erhalten den niedrigstmöglichen Wert (`1` für `Tag` und `0` für alle anderen Komponenten). Die Parameterwerte werden alle in der lokalen Zeitzone und nicht in UTC bewertet. {{jsxref("Date.UTC()")}} akzeptiert ähnliche Parameter, interpretiert die Komponenten jedoch als UTC und gibt einen Zeitstempel zurück.

Wenn ein Parameter seine definierten Grenzen überschreitet, wird er "weitergetragen". Beispielsweise, wenn ein `monthIndex` größer als `11` übergeben wird, werden diese Monate das Jahr erhöhen; wenn `minutes` größer als `59` übergeben werden, werden `hours` entsprechend erhöht, usw. Daher wird `new Date(1990, 12, 1)` den 1. Januar 1991 zurückgeben; `new Date(2020, 5, 19, 25, 65)` wird 2:05 Uhr am 20. Juni 2020 zurückgeben.

Ebenso, wenn ein Parameter unterschreitet, "leiht" er von den höheren Positionen. Zum Beispiel wird `new Date(2020, 5, 0)` den 31. Mai 2020 zurückgeben.

- `year`
  - : Ganzzahliger Wert, der das Jahr darstellt. Werte von `0` bis `99` entsprechen den Jahren `1900` bis `1999`. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two_digit_years).
- `monthIndex`
  - : Ganzzahliger Wert, der den Monat darstellt, beginnend mit `0` für Januar bis `11` für Dezember.
- `day` {{optional_inline}}
  - : Ganzzahliger Wert, der den Tag des Monats darstellt. Standardmäßig `1`.
- `hours` {{optional_inline}}
  - : Ganzzahliger Wert zwischen `0` und `23`, der die Stunde des Tages darstellt. Standardmäßig `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahliger Wert, der den Minutenabschnitt einer Zeit darstellt. Standardmäßig `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahliger Wert, der den Sekundenabschnitt einer Zeit darstellt. Standardmäßig `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahliger Wert, der den Millisekundenabschnitt einer Zeit darstellt. Standardmäßig `0`.

### Rückgabewert

Der Aufruf von `new Date()` (der `Date()` Konstruktor) gibt ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt zurück. Wenn er mit einem ungültigen Datumsstring aufgerufen wird oder wenn das zu konstruierende Datum einen Zeitstempel kleiner als `-8,640,000,000,000,000` oder größer als `8,640,000,000,000,000` Millisekunden hätte, gibt er ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück (ein `Date` Objekt, dessen {{jsxref("Date/toString", "toString()")}} Methode `"Invalid Date"` zurückgibt und dessen {{jsxref("Date/valueOf", "valueOf()")}} Methode `NaN` zurückgibt).

Der Aufruf der `Date()` Funktion (ohne das `new` Schlüsselwort) gibt eine String-Repräsentation des aktuellen Datums und der aktuellen Uhrzeit zurück, genau wie `new Date().toString()`. Alle Argumente, die in einem Aufruf der `Date()` Funktion (ohne das `new` Schlüsselwort) übergeben werden, werden ignoriert; unabhängig davon, ob es mit einem ungültigen Datumsstring — oder sogar mit einem beliebigen Objekt oder anderen Primitiven als Argument — aufgerufen wird, gibt es immer eine String-Repräsentation des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Beschreibung

### Reduzierte Zeitpräzision

Um Schutz gegen Timing-Attacken und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, könnte die Präzision von `new Date()` je nach Browser-Einstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2 ms standardmäßig eingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100 ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` sein wird, je nachdem, welcher größer ist.

Beispielsweise wird bei reduzierter Zeitpräzision das Ergebnis von `new Date().getTime()` immer ein Vielfaches von 2 oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktivierter `privacy.resistFingerprinting` sein.

```js
// reduced time precision (2ms) in Firefox 60
new Date().getTime();
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
new Date().getTime();
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Beispiele

### Mehrere Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen mehrere Möglichkeiten, JavaScript-Daten zu erstellen:

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday = new Date(1995, 11, 17); // the month is 0-indexed
const birthday = new Date(1995, 11, 17, 3, 24, 0);
const birthday = new Date(628021800000); // passing epoch timestamp
```

### Übergabe eines nicht-Datum, nicht-String, nicht-Zahlen Werts

Wenn der `Date()` Konstruktor mit einem Parameter aufgerufen wird, der keine `Date`-Instanz ist, wird er in ein Primitive umgewandelt und dann überprüft, ob es ein String ist. Zum Beispiel ist `new Date(undefined)` anders als `new Date()`:

```js
console.log(new Date(undefined)); // Invalid Date
```

Dies liegt daran, dass `undefined` bereits ein Primitive ist, aber kein String, also wird es in eine Zahl umgewandelt, die [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist und daher kein gültiger Zeitstempel. Andererseits wird `null` in `0` umgewandelt.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) würden über [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) in einen String umgewandelt, der die Elemente mit Kommata verbindet. Allerdings ist der resultierende String für jedes Array mit mehr als einem Element kein gültiger ISO 8601-Datumsstring, sodass sein Parsing-Verhalten implementierungsdefiniert wäre. **Geben Sie keine Arrays an den `Date()` Konstruktor weiter.**

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
