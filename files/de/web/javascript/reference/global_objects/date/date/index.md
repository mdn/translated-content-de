---
title: Date() Konstruktor
short-title: Date()
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Date()`** Konstruktor erstellt {{jsxref("Date")}} Objekte. Bei einem Funktionsaufruf ohne `new` gibt er einen String zurück, der die aktuelle Zeit darstellt.

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

> [!NOTE] > `Date()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, allerdings mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

Es gibt fünf grundlegende Formen für den `Date()` Konstruktor:

#### Keine Parameter

Wenn keine Parameter angegeben werden, repräsentiert das neu erstellte `Date` Objekt das aktuelle Datum und die aktuelle Uhrzeit zum Zeitpunkt der Instanziierung. Der zurückgegebene Zeitstempel ist derselbe, wie die Nummer, die von {{jsxref("Date.now()")}} zurückgegeben wird.

#### Zeitwert oder Zeitstempelnummer

- `value`
  - : Ein ganzzahliger Wert, der den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) repräsentiert (die Anzahl der Millisekunden seit Mitternacht des 1. Januars 1970, UTC — auch bekannt als die [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Datum-String

- `dateString`
  - : Ein String-Wert, der ein Datum darstellt und unter Verwendung desselben Algorithmus geparst und interpretiert wird, den auch {{jsxref("Date.parse()")}} implementiert. Siehe [Datum-Zeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) für Vorsichtsmaßnahmen bei der Verwendung unterschiedlicher Formate.

#### Date-Objekt

- `dateObject`
  - : Ein vorhandenes `Date` Objekt. Dies macht effektiv eine Kopie des vorhandenen `Date` Objekts mit demselben Datum und derselben Uhrzeit. Dies entspricht `new Date(dateObject.valueOf())`, außer dass die `valueOf()` Methode nicht aufgerufen wird.

Wenn ein Parameter an den `Date()` Konstruktor übergeben wird, werden `Date` Instanzen besonders behandelt. Alle anderen Werte werden [in Primitive konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Wenn das Ergebnis ein String ist, wird es als Datum-String geparst. Andernfalls wird das resultierende Primitive weiter in eine Zahl umgewandelt und als Zeitstempel behandelt.

#### Einzelne Datums- und Zeitkomponentenwerte

Bei Angabe mindestens eines Jahres und Monats gibt diese Form von `Date()` ein `Date` Objekt zurück, dessen Komponentenwerte (Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde) aus den folgenden Parametern stammen. Fehlende Felder erhalten den niedrigstmöglichen Wert (`1` für `day` und `0` für jede andere Komponente). Die Parameterwerte werden alle gegen die lokale Zeitzone und nicht gegen UTC ausgewertet. {{jsxref("Date.UTC()")}} akzeptiert ähnliche Parameter, interpretiert die Komponenten jedoch als UTC und gibt einen Zeitstempel zurück.

Wenn irgendein Parameter seine definierten Grenzen überschreitet, wird er "übertragen". Zum Beispiel, wenn ein `monthIndex` größer als `11` übergeben wird, werden diese Monate das Jahr erhöhen; wenn `minutes` größer als `59` übergeben wird, werden `hours` entsprechend erhöht usw. Daher wird `new Date(1990, 12, 1)` den 1. Januar 1991 zurückgeben; `new Date(2020, 5, 19, 25, 65)` wird 2:05 A.M. am 20. Juni 2020 zurückgeben.

Ähnlich, wenn irgendein Parameter unterläuft, "leiht" er sich von den höheren Positionen. Zum Beispiel, `new Date(2020, 5, 0)` wird den 31. Mai 2020 zurückgeben.

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

Der Aufruf von `new Date()` (der `Date()` Konstruktor) gibt ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt zurück. Wenn mit einem ungültigen Datum-String aufgerufen wird, oder wenn das zu konstruierende Datum einen Zeitstempel von weniger als `-8,640,000,000,000,000` oder mehr als `8,640,000,000,000,000` Millisekunden haben würde, gibt es ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück (ein `Date` Objekt, dessen {{jsxref("Date/toString", "toString()")}} Methode `"Invalid Date"` zurückgibt und dessen {{jsxref("Date/valueOf", "valueOf()")}} Methode `NaN` zurückgibt).

Der Aufruf der `Date()` Funktion (ohne das `new` Schlüsselwort) gibt eine String-Darstellung des aktuellen Datums und der aktuellen Uhrzeit zurück, genau wie es `new Date().toString()` tut. Alle Argumente, die bei einem `Date()` Funktionsaufruf (ohne das `new` Schlüsselwort) gegeben werden, werden ignoriert; unabhängig davon, ob es mit einem ungültigen Datum-String aufgerufen wird oder sogar mit irgendeinem beliebigen Objekt oder anderen Primärwert als Argument aufgerufen wird, es gibt immer eine String-Darstellung des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Beschreibung

### Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, könnte die Präzision von `new Date()` je nach Browsereinstellungen gerundet werden. In Firefox ist die `privacy.reduceTimerPrecision` Einstellung standardmäßig aktiviert und standardmäßig auf 2ms gesetzt. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` sein wird, je nachdem, welcher größer ist.

Zum Beispiel wird mit reduzierter Zeitpräzision das Ergebnis von `new Date().getTime()` immer ein Vielfaches von 2, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting` sein.

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

### Übergabe eines nicht-Date, nicht-String, nicht-Zahlenwerts

Wenn der `Date()` Konstruktor mit einem Parameter aufgerufen wird, der keine `Date` Instanz ist, wird er in ein Primitive umgewandelt und dann überprüft, ob es ein String ist. Zum Beispiel, `new Date(undefined)` ist anders als `new Date()`:

```js
console.log(new Date(undefined)); // Invalid Date
```

Dies liegt daran, dass `undefined` bereits ein Primitive ist, aber kein String, daher wird es in eine Zahl umgewandelt, die [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist und daher kein gültiger Zeitstempel. Andererseits wird `null` in `0` umgewandelt.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) würden durch [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) in einen String umgewandelt, der die Elemente mit Kommas verbindet. Der resultierende String für jedes Array mit mehr als einem Element ist jedoch kein gültiger ISO 8601 Datum-String, daher wäre sein Parsingverhalten implementierungsabhängig. **Geben Sie keine Arrays an den `Date()` Konstruktor weiter.**

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
