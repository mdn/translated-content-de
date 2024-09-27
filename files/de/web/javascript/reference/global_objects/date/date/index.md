---
title: Date() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{JSRef}}

Der **`Date()`** Konstruktor erstellt {{jsxref("Date")}} Objekte. Wenn er als Funktion aufgerufen wird, gibt er eine Zeichenkette zurück, die die aktuelle Zeit darstellt.

{{EmbedInteractiveExample("pages/js/date-constructor.html")}}

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

> **Note:** `Date()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, hat aber unterschiedliche Auswirkungen. Siehe [Rückgabewert](#rückgabewert).

### Parameter

Es gibt fünf grundlegende Formen für den `Date()` Konstruktor:

#### Keine Parameter

Wenn keine Parameter angegeben werden, repräsentiert das neu erstellte `Date` Objekt das aktuelle Datum und die Uhrzeit zum Zeitpunkt der Instanziierung. Der zurückgegebene [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) entspricht der Zahl, die von {{jsxref("Date.now()")}} zurückgegeben wird.

#### Zeitwert oder Zeitstempelnummer

- `value`
  - : Ein ganzzahliger Wert, der den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) repräsentiert (die Anzahl der Millisekunden seit Mitternacht am 1. Januar 1970, UTC – auch bekannt als [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Datumszeichenkette

- `dateString`
  - : Ein Zeichenkettenwert, der ein Datum darstellt, das mit dem gleichen Algorithmus geparst und interpretiert wird, der von {{jsxref("Date.parse()")}} implementiert wird. Siehe [Format der Datums-Zeit-Zeichenkette](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) für Hinweise zur Verwendung verschiedener Formate.

#### Date-Objekt

- `dateObject`
  - : Ein bereits existierendes `Date` Objekt. Dies macht effektiv eine Kopie des bestehenden `Date` Objekts mit demselben Datum und derselben Uhrzeit. Dies entspricht `new Date(dateObject.valueOf())`, außer dass die `valueOf()` Methode nicht aufgerufen wird.

Wenn ein Parameter an den `Date()` Konstruktor übergeben wird, werden `Date` Instanzen speziell behandelt. Alle anderen Werte werden [in Primitive umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion). Wenn das Ergebnis eine Zeichenkette ist, wird sie als Datumszeichenkette geparst. Andernfalls wird das resultierende Primär weiter in eine Zahl umgewandelt und als Zeitstempel behandelt.

#### Einzelne Werte für Datum und Zeitkomponenten

Wenn mindestens ein Jahr und ein Monat angegeben sind, liefert diese Form von `Date()` ein `Date` Objekt, dessen Komponentenwerte (Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde) alle aus den folgenden Parametern stammen. Fehlende Felder erhalten den niedrigsten möglichen Wert (`1` für `Tag` und `0` für jede andere Komponente). Die Parameterwerte werden alle gegen die lokale Zeitzone und nicht gegen UTC ausgewertet. {{jsxref("Date.UTC()")}} akzeptiert ähnliche Parameter, interpretiert die Komponenten jedoch als UTC und gibt einen Zeitstempel zurück.

Wenn ein Parameter seinen definierten Grenzen überschreitet, "trägt" er über. Zum Beispiel, wenn ein `monthIndex` größer als `11` übergeben wird, erhöhen diese Monate das Jahr; wenn `minutes` größer als `59` übergeben werden, erhöhen sie die `hours` entsprechend usw. Daher gibt `new Date(1990, 12, 1)` den 1. Januar 1991 zurück; `new Date(2020, 5, 19, 25, 65)` gibt den 20. Juni 2020 um 2:05 Uhr zurück.

Entsprechend, wenn ein Parameter unterläuft, "leiht" er von den höheren Positionen. Zum Beispiel ergibt `new Date(2020, 5, 0)` den 31. Mai 2020.

- `year`
  - : Ganzzahliger Wert, der das Jahr repräsentiert. Werte von `0` bis `99` werden den Jahren `1900` bis `1999` zugeordnet. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Ganzzahliger Wert, der den Monat repräsentiert, beginnend mit `0` für Januar bis `11` für Dezember.
- `day` {{optional_inline}}
  - : Ganzzahliger Wert, der den Tag des Monats darstellt. Standard ist `1`.
- `hours` {{optional_inline}}
  - : Ganzzahliger Wert zwischen `0` und `23`, der die Stunde des Tages darstellt. Standard ist `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahliger Wert, der den Minutenteil einer Zeit darstellt. Standard ist `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahliger Wert, der den Sekundenteil einer Zeit darstellt. Standard ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahliger Wert, der den Millisekundenteil einer Zeit darstellt. Standard ist `0`.

### Rückgabewert

Das Aufrufen von `new Date()` (dem `Date()` Konstruktor) gibt ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt zurück. Wenn er mit einer ungültigen Datumszeichenkette aufgerufen wird oder wenn das zu konstruierende Datum einen Zeitstempel kleiner als `-8,640,000,000,000,000` oder größer als `8,640,000,000,000,000` Millisekunden hat, gibt er ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück (ein `Date` Objekt, dessen {{jsxref("Date/toString", "toString()")}} Methode `"Invalid Date"` zurückgibt und dessen {{jsxref("Date/valueOf", "valueOf()")}} Methode `NaN` zurückgibt).

Das Aufrufen der `Date()` Funktion (ohne das `new` Schlüsselwort) gibt eine Zeichenkettenrepräsentation des aktuellen Datums und der aktuellen Uhrzeit zurück, genau wie `new Date().toString()`. Alle Argumente, die in einem `Date()` Funktionsaufruf (ohne das `new` Schlüsselwort) übergeben werden, werden ignoriert; unabhängig davon, ob es mit einer ungültigen Datumszeichenkette oder sogar mit einem beliebigen Objekt oder anderen primitiven Argumenten aufgerufen wird – es gibt immer eine Zeichenkettenrepräsentation des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Beschreibung

### Reduzierte Zeitgenauigkeit

Um Schutz vor Timing-Angriffen und [Fingerabdrücken](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Genauigkeit von `new Date()` je nach Browser-Einstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2ms eingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Genauigkeit 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` beträgt, je nachdem, welcher größer ist.

Zum Beispiel, mit reduzierter Zeitgenauigkeit wird das Ergebnis von `new Date().getTime()` immer ein Vielfaches von 2 oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) sein, wenn `privacy.resistFingerprinting` aktiviert ist.

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

### Verschiedene Wege, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Möglichkeiten, JavaScript-Daten zu erstellen:

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday = new Date(1995, 11, 17); // the month is 0-indexed
const birthday = new Date(1995, 11, 17, 3, 24, 0);
const birthday = new Date(628021800000); // passing epoch timestamp
```

### Übergeben eines nicht-Date-, nicht-String-, nicht-Nummer-Wertes

Wenn der `Date()` Konstruktor mit einem Parameter aufgerufen wird, der keine `Date` Instanz ist, wird er in ein Primär umgewandelt und dann überprüft, ob es sich um eine Zeichenkette handelt. Zum Beispiel ist `new Date(undefined)` anders als `new Date()`:

```js
console.log(new Date(undefined)); // Invalid Date
```

Dies liegt daran, dass `undefined` bereits ein Primär ist, aber keine Zeichenkette, sodass es in eine Zahl umgewandelt wird, die [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist und daher kein gültiger Zeitstempel ist. Auf der anderen Seite wird `null` zu `0` umgewandelt.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) würden über [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) in eine Zeichenkette umgewandelt, die die Elemente mit Kommas verbindet. Jedoch ist die resultierende Zeichenkette für ein Array mit mehr als einem Element keine gültige ISO 8601-Datumszeichenkette, sodass ihr Parsing-Verhalten implementationsspezifisch wäre. **Übergeben Sie keine Arrays an den `Date()` Konstruktor.**

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
