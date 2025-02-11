---
title: Date() Constructor
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Der **`Date()`**-Konstruktor erstellt {{jsxref("Date")}}-Objekte. Wenn er als Funktion aufgerufen wird, gibt er einen String zurück, der die aktuelle Zeit darstellt.

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

Es gibt fünf grundlegende Formen für den `Date()`-Konstruktor:

#### Keine Parameter

Wenn keine Parameter angegeben werden, repräsentiert das neu erstellte `Date`-Objekt das aktuelle Datum und die Zeit zum Zeitpunkt der Instanziierung. Der zurückgegebene Datum-[Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist identisch mit der Zahl, die {{jsxref("Date.now()")}} liefert.

#### Zeitwert oder Zeitstempel als Zahl

- `value`
  - : Ein Integer-Wert, der den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) darstellt (die Anzahl der Millisekunden seit Mitternacht am 1. Januar 1970, UTC — auch bekannt als [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Datums-String

- `dateString`
  - : Ein String-Wert, der ein Datum repräsentiert und mithilfe desselben Algorithmus geparst und interpretiert wird, den {{jsxref("Date.parse()")}} verwendet. Beachten Sie die [Einschränkungen des Datums-Zeit-Format-Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format).

#### Date-Objekt

- `dateObject`
  - : Ein bestehendes `Date`-Objekt. Dies erstellt effektiv eine Kopie des bestehenden `Date`-Objekts mit demselben Datum und derselben Zeit. Dies entspricht `new Date(dateObject.valueOf())`, außer dass die Methode `valueOf()` nicht aufgerufen wird.

Wenn ein Parameter an den `Date()`-Konstruktor übergeben wird, werden `Date`-Instanzen speziell behandelt. Alle anderen Werte werden [in primitive Werte umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion). Wenn das Ergebnis ein String ist, wird er als Datums-String geparst. Andernfalls wird das resultierende Primitive weiter in eine Zahl umgewandelt und als Zeitstempel behandelt.

#### Individuelle Werte für Datum und Zeitkomponenten

Wird mindestens ein Jahr und ein Monat angegeben, gibt diese Form von `Date()` ein `Date`-Objekt zurück, dessen Komponentenwerte (Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde) aus den folgenden Parametern stammen. Fehlende Felder erhalten den niedrigstmöglichen Wert (`1` für `day` und `0` für alle anderen Komponenten). Die Parameterwerte werden basierend auf der lokalen Zeitzone und nicht auf UTC ausgewertet. {{jsxref("Date.UTC()")}} akzeptiert ähnliche Parameter, interpretiert die Komponenten jedoch als UTC und gibt einen Zeitstempel zurück.

Wenn ein Parameter außerhalb seiner definierten Grenzen liegt, wird er "weitergetragen". Beispielsweise, wenn ein `monthIndex` größer als `11` angegeben wird, erhöht das die Jahreszahl; wenn `minutes` größer als `59` sind, steigt entsprechend die Stundenanzahl an, usw. Daher gibt `new Date(1990, 12, 1)` den 1. Januar 1991 zurück; `new Date(2020, 5, 19, 25, 65)` gibt den 20. Juni 2020, 2:05 Uhr zurück.

Ähnlich gilt, wenn ein Parameter unter seine Grenzen geht, wird er von höheren Werten "ausgeliehen". Zum Beispiel gibt `new Date(2020, 5, 0)` den 31. Mai 2020 zurück.

- `year`
  - : Ein Integer-Wert, der das Jahr repräsentiert. Werte von `0` bis `99` entsprechen den Jahren `1900` bis `1999`. Alle anderen Werte entsprechen dem tatsächlichen Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Ein Integer-Wert, der den Monat darstellt, beginnend mit `0` für Januar bis `11` für Dezember.
- `day` {{optional_inline}}
  - : Ein Integer-Wert, der den Tag des Monats darstellt. Standardwert ist `1`.
- `hours` {{optional_inline}}
  - : Ein Integer-Wert zwischen `0` und `23`, der die Stunde des Tages darstellt. Standardwert ist `0`.
- `minutes` {{optional_inline}}
  - : Ein Integer-Wert, der die Minute eines Zeitpunkts darstellt. Standardwert ist `0`.
- `seconds` {{optional_inline}}
  - : Ein Integer-Wert, der die Sekunde eines Zeitpunkts darstellt. Standardwert ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ein Integer-Wert, der die Millisekunde eines Zeitpunkts darstellt. Standardwert ist `0`.

### Rückgabewert

Das Aufrufen von `new Date()` (des `Date()`-Konstruktors) gibt ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt zurück. Wenn es mit einem ungültigen Datums-String aufgerufen wird oder wenn das Datum einen Zeitstempel kleiner als `-8,640,000,000,000,000` oder größer als `8,640,000,000,000,000` Millisekunden hätte, gibt es ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück (ein `Date`-Objekt, dessen Methode {{jsxref("Date/toString", "toString()")}} `"Invalid Date"` und dessen Methode {{jsxref("Date/valueOf", "valueOf()")}} `NaN` zurückgibt).

Das Aufrufen der Funktion `Date()` (ohne das Schlüsselwort `new`) gibt eine String-Darstellung des aktuellen Datums und der aktuellen Zeit zurück, genau wie `new Date().toString()`. Jegliche Argumente, die in einen Funktionsaufruf von `Date()` (ohne das Schlüsselwort `new`) übergeben werden, werden ignoriert; unabhängig davon, ob sie mit einem ungültigen Datums-String aufgerufen wird oder mit beliebigen Objekten oder anderen Primitiven als Argument — es wird immer eine String-Darstellung des aktuellen Datums und der aktuellen Zeit zurückgegeben.

## Beschreibung

### Reduzierte Zeitpräzision

Zum Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} kann die Präzision von `new Date()` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt standardmäßig 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision auf 100ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem welcher größer ist, reduziert wird.

Zum Beispiel wird das Ergebnis von `new Date().getTime()` bei reduzierter Zeitpräzision immer ein Vielfaches von 2 oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) sein, wenn `privacy.resistFingerprinting` aktiviert ist.

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

### Übergabe von nicht-Date-, nicht-String-, nicht-Nummernwerten

Wenn der `Date()`-Konstruktor mit einem Parameter aufgerufen wird, der keine `Date`-Instanz ist, wird der Wert in ein Primitive umgewandelt und anschließend geprüft, ob er ein String ist. Zum Beispiel ist `new Date(undefined)` anders als `new Date()`:

```js
console.log(new Date(undefined)); // Invalid Date
```

Das liegt daran, dass `undefined` bereits ein Primitive ist, aber kein String, sodass es in eine Zahl umgewandelt wird, die [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist, und daher kein gültiger Zeitstempel. Andererseits wird `null` in `0` umgewandelt.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) werden durch [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) in einen String umgewandelt, der die Elemente mit Kommas verbindet. Allerdings ist der resultierende String für jedes Array mit mehr als einem Element kein gültiger ISO-8601-Datums-String, daher ist das Parsing-Verhalten implementierungsabhängig. **Geben Sie keine Arrays an den `Date()`-Konstruktor weiter.**

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
