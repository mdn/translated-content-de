---
title: Date() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Der **`Date()`** Konstruktor erstellt {{jsxref("Date")}} Objekte. Wenn er als Funktion aufgerufen wird, gibt er einen String zurück, der die aktuelle Zeit repräsentiert.

{{InteractiveExample("JavaScript Demo: Date Constructor")}}

```js interactive-example
const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date("1995-12-17T03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// Expected output: false

console.log(date1 - date2);
// Expected output: 0
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

> **Note:** `Date()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, hat jedoch unterschiedliche Auswirkungen. Siehe [Rückgabewert](#rückgabewert).

### Parameter

Es gibt fünf Grundformen für den `Date()` Konstruktor:

#### Keine Parameter

Wenn keine Parameter angegeben werden, repräsentiert das neu erstellte `Date` Objekt das aktuelle Datum und die aktuelle Uhrzeit zum Zeitpunkt der Erstellung. Der zurückgegebene [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist derselbe wie die Zahl, die von {{jsxref("Date.now()")}} zurückgegeben wird.

#### Zeitwert oder Zeitstempelnummer

- `value`
  - : Ein ganzzahliger Wert, der den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) darstellt (die Anzahl der Millisekunden seit Mitternacht des 1. Januar 1970 UTC — auch bekannt als der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Datumsstring

- `dateString`
  - : Ein String-Wert, der ein Datum darstellt, das mit demselben Algorithmus geparst und interpretiert wird, der von {{jsxref("Date.parse()")}} implementiert wird. Siehe [Datums- und Zeitstring-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) für Hinweise zur Verwendung verschiedener Formate.

#### Datumsobjekt

- `dateObject`
  - : Ein bestehendes `Date` Objekt. Dies macht effektiv eine Kopie des bestehenden `Date` Objekts mit demselben Datum und derselben Uhrzeit. Dies entspricht `new Date(dateObject.valueOf())`, außer dass die `valueOf()` Methode nicht aufgerufen wird.

Wenn ein Parameter an den `Date()` Konstruktor übergeben wird, werden `Date` Instanzen besonders behandelt. Alle anderen Werte werden [in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Wenn das Ergebnis ein String ist, wird er als Datumsstring geparst. Andernfalls wird das resultierende Primitive weiter in eine Zahl umgewandelt und als Zeitstempel behandelt.

#### Einzelne Datum- und Zeitkomponenten-Werte

Bei Angabe von mindestens Jahr und Monat gibt diese Form von `Date()` ein `Date` Objekt zurück, dessen Komponentenwerte (Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde) alle aus den folgenden Parametern stammen. Alle fehlenden Felder erhalten den kleinstmöglichen Wert (`1` für `day` und `0` für jede andere Komponente). Die Parameterwerte werden alle gegen die lokale Zeitzone und nicht gegen UTC bewertet. {{jsxref("Date.UTC()")}} akzeptiert ähnliche Parameter, interpretiert die Komponenten jedoch als UTC und gibt einen Zeitstempel zurück.

Wenn ein Parameter seine festgelegten Grenzen überschreitet, wird er "weitergetragen". Zum Beispiel, wenn ein `monthIndex` größer als `11` übergeben wird, wird das Jahr inkrementiert; wenn `minutes` größer als `59` übergeben wird, werden `hours` entsprechend inkrementiert, usw. Daher wird `new Date(1990, 12, 1)` den 1. Januar 1991 zurückgeben; `new Date(2020, 5, 19, 25, 65)` wird 2:05 Uhr am 20. Juni 2020 zurückgeben.

In ähnlicher Weise, wenn ein Parameter unterläuft, wird er "von höheren Positionen geborgt". Zum Beispiel wird `new Date(2020, 5, 0)` den 31. Mai 2020 zurückgeben.

- `year`
  - : Ganzzahliger Wert, der das Jahr repräsentiert. Werte von `0` bis `99` werden den Jahren `1900` bis `1999` zugeordnet. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Ganzzahliger Wert, der den Monat repräsentiert, beginnend mit `0` für Januar bis `11` für Dezember.
- `day` {{optional_inline}}
  - : Ganzzahliger Wert, der den Tag des Monats repräsentiert. Standard ist `1`.
- `hours` {{optional_inline}}
  - : Ganzzahliger Wert zwischen `0` und `23`, der die Stunde des Tages repräsentiert. Standard ist `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahliger Wert, der das Minutensegment einer Zeit repräsentiert. Standard ist `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahliger Wert, der das Segment der Sekunden einer Zeit repräsentiert. Standard ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahliger Wert, der das Millisekundensegment einer Zeit repräsentiert. Standard ist `0`.

### Rückgabewert

Das Aufrufen von `new Date()` (der `Date()` Konstruktor) gibt ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt zurück. Wenn es mit einem ungültigen Datumsstring aufgerufen wird oder wenn das zu konstruierende Datum einen Zeitstempel kleiner als `-8,640,000,000,000,000` oder größer als `8,640,000,000,000,000` Millisekunden hat, gibt es ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück (ein `Date` Objekt, dessen {{jsxref("Date/toString", "toString()")}} Methode `"Invalid Date"` und dessen {{jsxref("Date/valueOf", "valueOf()")}} Methode `NaN` zurückgibt).

Das Aufrufen der `Date()` Funktion (ohne das `new` Schlüsselwort) gibt eine String-Repräsentation des aktuellen Datums und der aktuellen Uhrzeit zurück, genau wie `new Date().toString()`. Alle in einem `Date()` Funktionsaufruf (ohne das `new` Schlüsselwort) angegebenen Argumente werden ignoriert; egal, ob es mit einem ungültigen Datumsstring aufgerufen wird — oder sogar mit einem beliebigen Objekt oder anderem Primitiv als Argument aufgerufen wird — es gibt immer eine String-Repräsentation des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Beschreibung

### Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Präzision von `new Date()` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2ms eingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel wird mit reduzierter Zeitpräzision das Ergebnis von `new Date().getTime()` immer ein Vielfaches von 2 oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktivierter `privacy.resistFingerprinting` sein.

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

### Ein nicht-Date-, nicht-String-, nicht-Zahlenwert übergeben

Wenn der `Date()` Konstruktor mit einem Parameter aufgerufen wird, der keine `Date` Instanz ist, wird er in ein Primitive umgewandelt und dann geprüft, ob es ein String ist. Zum Beispiel ist `new Date(undefined)` anders als `new Date()`:

```js
console.log(new Date(undefined)); // Invalid Date
```

Das liegt daran, dass `undefined` bereits ein Primitive ist, jedoch kein String ist, daher wird er in eine Zahl umgewandelt, was [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist und daher kein gültiger Zeitstempel. Andererseits wird `null` in `0` umgewandelt.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) würden über [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) in einen String umgewandelt werden, der die Elemente mit Kommas verbindet. Der resultierende String für ein Array mit mehr als einem Element ist jedoch kein gültiger ISO 8601-Datumsstring, daher wäre das Parsing-Verhalten Implementierungsdefinition. **Geben Sie keine Arrays an den `Date()` Konstruktor weiter.**

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
