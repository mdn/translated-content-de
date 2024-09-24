---
title: Date()-Konstruktor
short-title: Date()
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{JSRef}}

Der **`Date()`**-Konstruktor erstellt {{jsxref("Date")}}-Objekte. Wird er als Funktion aufgerufen, gibt er einen String zurück, der die aktuelle Zeit repräsentiert.

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

> **Note:** `Date()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

Es gibt fünf grundlegende Formen für den `Date()`-Konstruktor:

#### Keine Parameter

Wenn keine Parameter angegeben werden, repräsentiert das neu erstellte `Date`-Objekt das aktuelle Datum und die aktuelle Uhrzeit zum Zeitpunkt der Instanziierung. Der zurückgegebene Zeitstempel ist derselbe wie die Zahl, die von {{jsxref("Date.now()")}} zurückgegeben wird.

#### Zeitwert oder Zeitstempelnnummer

- `value`
  - : Ein ganzzahliger Wert, der den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) darstellt (die Anzahl der Millisekunden seit Mitternacht zu Beginn des 1. Januar 1970, UTC — auch bekannt als das [epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Datumszeichenkette

- `dateString`
  - : Ein String, der ein Datum darstellt und nach dem gleichen Algorithmus interpretiert wird, der auch von {{jsxref("Date.parse()")}} implementiert wird. Beachten Sie die [Formatangaben zur Datumszeit-Zeichenkette](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) bei der Verwendung unterschiedlicher Formate.

#### Date-Objekt

- `dateObject`
  - : Ein existierendes `Date`-Objekt. Dies erstellt effektiv eine Kopie des vorhandenen `Date`-Objekts mit demselben Datum und derselben Zeit. Dies entspricht `new Date(dateObject.valueOf())`, mit Ausnahme, dass die Methode `valueOf()` nicht aufgerufen wird.

Wenn ein Parameter an den `Date()`-Konstruktor übergeben wird, werden `Date`-Instanzen speziell behandelt. Alle anderen Werte werden [in Primitive umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion). Wenn das Ergebnis ein String ist, wird es als Datumszeichenkette geparst. Andernfalls wird das resultierende Primitive weiter in eine Zahl umgewandelt und als Zeitstempel behandelt.

#### Einzelne Datums- und Zeitkomponentenwerte

Bei mindestens einem Jahr und Monat gibt diese Form von `Date()` ein `Date`-Objekt zurück, dessen Komponentenwerte (Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde) alle von den folgenden Parametern stammen. Fehlende Felder erhalten den niedrigstmöglichen Wert (`1` für `day` und `0` für jede andere Komponente). Die Parameterwerte werden alle in der lokalen Zeitzone evaluiert, anstatt in UTC. {{jsxref("Date.UTC()")}} akzeptiert ähnliche Parameter, interpretiert die Komponenten jedoch als UTC und gibt einen Zeitstempel zurück.

Wenn ein Parameter seine definierten Grenzen überschreitet, wird er "übertragen". Zum Beispiel, wenn ein `monthIndex` größer als `11` übergeben wird, erhöhen diese Monate das Jahr; wenn ein `minutes` größer als `59` übergeben wird, erhöht sich `hours` entsprechend, usw. Daher wird `new Date(1990, 12, 1)` den 1. Januar 1991 zurückgeben; `new Date(2020, 5, 19, 25, 65)` wird den 20. Juni 2020 um 2:05 Uhr zurückgeben.

Ähnlich, wenn ein Parameter unterschreitet, wird "geborgt" von den höheren Positionen. Zum Beispiel, `new Date(2020, 5, 0)` wird den 31. Mai 2020 zurückgeben.

- `year`
  - : Ganzzahliger Wert, der das Jahr repräsentiert. Werte von `0` bis `99` entsprechen den Jahren `1900` bis `1999`. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Ganzzahliger Wert, der den Monat repräsentiert, beginnend mit `0` für Januar bis `11` für Dezember.
- `day` {{optional_inline}}
  - : Ganzzahliger Wert, der den Tag des Monats repräsentiert. Standardwert ist `1`.
- `hours` {{optional_inline}}
  - : Ganzzahliger Wert zwischen `0` und `23`, der die Stunde des Tages repräsentiert. Standardwert ist `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahliger Wert, der das Minuten-Segment einer Zeit repräsentiert. Standardwert ist `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahliger Wert, der das Sekunden-Segment einer Zeit repräsentiert. Standardwert ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahliger Wert, der das Millisekunden-Segment einer Zeit repräsentiert. Standardwert ist `0`.

### Rückgabewert

Der Aufruf von `new Date()` (dem `Date()`-Konstruktor) gibt ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt zurück. Wird es mit einem ungültigen Datumsstring aufgerufen oder wenn das zu konstruierende Datum einen Zeitstempel kleiner als `-8,640,000,000,000,000` oder größer als `8,640,000,000,000,000` Millisekunden hat, wird ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurückgegeben (ein `Date`-Objekt, dessen {{jsxref("Date/toString", "toString()")}}-Methode `"Invalid Date"` und dessen {{jsxref("Date/valueOf", "valueOf()")}}-Methode `NaN` zurückgibt).

Der Aufruf der `Date()`-Funktion (ohne das `new`-Schlüsselwort) gibt eine Zeichenkettenrepräsentation des aktuellen Datums und der aktuellen Zeit zurück, genau wie `new Date().toString()`. Alle Argumente, die in einem `Date()`-Funktionsaufruf (ohne das `new`-Schlüsselwort) angegeben werden, werden ignoriert; unabhängig davon, ob es mit einem ungültigen Datumsstring aufgerufen wird – oder sogar mit einem beliebigen Objekt oder einem anderen primitiven Wert als Argument aufgerufen wird – es gibt immer eine Zeichenkettenrepräsentation des aktuellen Datums und der aktuellen Zeit zurück.

## Beschreibung

### Reduzierte Zeitgenauigkeit

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Genauigkeit von `new Date()` je nach Browsereinstellungen gerundet werden. In Firefox ist die Voreinstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt standardmäßig 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Genauigkeit 100ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel wird mit reduzierter Zeitgenauigkeit das Ergebnis von `new Date().getTime()` immer ein Vielfaches von 2 oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) sein, wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduzierte Zeitgenauigkeit (2ms) in Firefox 60
new Date().getTime();
// Könnte sein:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduzierte Zeitgenauigkeit mit aktiviertem `privacy.resistFingerprinting`
new Date().getTime();
// Könnte sein:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Beispiele

### Mehrere Wege, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Wege, um JavaScript-Daten zu erstellen:

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // NICHT EMPFOHLEN: könnte nicht in allen Umgebungen funktionieren
const birthday = new Date("1995-12-17T03:24:00"); // Dies ist standardisiert und wird zuverlässig funktionieren
const birthday = new Date(1995, 11, 17); // der Monat ist 0-indexiert
const birthday = new Date(1995, 11, 17, 3, 24, 0);
const birthday = new Date(628021800000); // Übergabe eines epoche-Zeitstempels
```

### Übergabe eines Nicht-Date, Nicht-String, Nicht-Num-Werts

Wenn der `Date()`-Konstruktor mit einem Parameter aufgerufen wird, der keine `Date`-Instanz ist, wird dieser in einen primitiven Wert umgewandelt und anschließend geprüft, ob es sich um einen String handelt. Zum Beispiel unterscheidet sich `new Date(undefined)` von `new Date()`:

```js
console.log(new Date(undefined)); // Ungültiges Datum
```

Dies liegt daran, dass `undefined` bereits ein primitiver Wert ist, aber kein String, sodass es in eine Zahl umgewandelt wird, die [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist und daher kein gültiger Zeitstempel. Andererseits wird `null` in `0` umgewandelt.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) würden über [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) in einen String umgewandelt, der die Elemente mit Kommas verbindet. Jedoch ist der resultierende String für jedes Array mit mehr als einem Element keine gültige ISO 8601-Datumszeichenkette, sodass das Parsen implementierungsabhängig wäre. **Übergeben Sie keine Arrays an den `Date()`-Konstruktor.**

```js
console.log(new Date(["2020-06-19", "17:13"]));
// 2020-06-19T17:13:00.000Z in Chrome, da es "2020-06-19,17:13" erkennt
// "Ungültiges Datum" in Firefox
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date")}}
