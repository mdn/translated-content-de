---
title: Date()-Konstruktor
short-title: Date()
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Der **`Date()`**-Konstruktor erstellt {{jsxref("Date")}}-Objekte. Wenn er als Funktion aufgerufen wird, gibt er einen String zurück, der die aktuelle Zeit repräsentiert.

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

Es gibt fünf grundlegende Formen für den `Date()`-Konstruktor:

#### Keine Parameter

Wenn keine Parameter angegeben werden, repräsentiert das neu erstellte `Date`-Objekt das aktuelle Datum und die aktuelle Uhrzeit zum Zeitpunkt der Instanziierung. Der zurückgegebene Zeitstempel des Datums ist derselbe wie die Zahl, die von {{jsxref("Date.now()")}} zurückgegeben wird.

#### Zeitwert oder Zeitstempelnummmer

- `value`
  - : Ein ganzzahliger Wert, der den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) repräsentiert (die Anzahl der Millisekunden seit Mitternacht des 1. Januar 1970, UTC — auch bekannt als die [Epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Datumsstring

- `dateString`
  - : Ein String-Wert, der ein Datum repräsentiert, das unter Verwendung desselben Algorithmus geparst und interpretiert wird, der von {{jsxref("Date.parse()")}} implementiert wurde. Siehe [Format für Datums- und Zeitstring](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) für Vorsichtsmaßnahmen bei der Verwendung verschiedener Formate.

#### Date-Objekt

- `dateObject`
  - : Ein bestehendes `Date`-Objekt. Dies macht effektiv eine Kopie des bestehenden `Date`-Objekts mit demselben Datum und derselben Uhrzeit. Dies ist äquivalent zu `new Date(dateObject.valueOf())`, außer dass die `valueOf()`-Methode nicht aufgerufen wird.

Wird ein Parameter an den `Date()`-Konstruktor übergeben, werden `Date`-Instanzen besonders behandelt. Alle anderen Werte werden [in Primitive umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Wenn das Ergebnis ein String ist, wird es als Datumsstring geparst. Ansonsten wird das resultierende Primitive weiter in eine Zahl umgewandelt und als Zeitstempel behandelt.

#### Einzelne Datums- und Zeitkomponentenwerte

Wird mindestens ein Jahr und ein Monat angegeben, gibt diese Form von `Date()` ein `Date`-Objekt zurück, dessen Komponentenwerte (Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde) alle aus den folgenden Parametern stammen. Fehlende Felder erhalten den kleinstmöglichen Wert (`1` für `day` und `0` für alle anderen Komponenten). Die Parameterwerte werden alle gegen die lokale Zeitzone bewertet, nicht gegen UTC. {{jsxref("Date.UTC()")}} akzeptiert ähnliche Parameter, interpretiert die Komponenten jedoch als UTC und gibt einen Zeitstempel zurück.

Wenn ein Parameter seine definierten Grenzen überschreitet, wird er "übertragen". Zum Beispiel, wenn ein `monthIndex` größer als `11` übergeben wird, führen diese Monate dazu, dass das Jahr inkrementiert wird; wenn eine `minutes` größer als `59` übergeben wird, wird `hours` entsprechend erhöht, usw. Daher wird `new Date(1990, 12, 1)` den 1. Januar 1991 zurückgeben; `new Date(2020, 5, 19, 25, 65)` gibt 2:05 Uhr am 20. Juni 2020 zurück.

Ähnlich, wenn ein Parameter unterläuft, wird "geborgt" von den höheren Positionen. Zum Beispiel wird `new Date(2020, 5, 0)` den 31. Mai 2020 zurückgeben.

- `year`
  - : Ganzzahliger Wert, der das Jahr repräsentiert. Werte von `0` bis `99` beziehen sich auf die Jahre `1900` bis `1999`. Alle anderen Werte sind das tatsächliche Jahr. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Ganzzahliger Wert, der den Monat repräsentiert, beginnend mit `0` für Januar bis `11` für Dezember.
- `day` {{optional_inline}}
  - : Ganzzahliger Wert, der den Tag des Monats repräsentiert. Voreinstellung ist `1`.
- `hours` {{optional_inline}}
  - : Ganzzahliger Wert zwischen `0` und `23`, der die Stunde des Tages repräsentiert. Voreinstellung ist `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahliger Wert, der das Minutensegment einer Zeit repräsentiert. Voreinstellung ist `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahliger Wert, der das Sekunden-Segment einer Zeit repräsentiert. Voreinstellung ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahliger Wert, der das Millisekunden-Segment einer Zeit repräsentiert. Voreinstellung ist `0`.

### Rückgabewert

Das Aufrufen von `new Date()` (der `Date()`-Konstuktor) gibt ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt zurück. Wenn es mit einem ungültigen Datumsstring aufgerufen wird, oder wenn das zu konstruierende Datum einen Zeitstempel kleiner als `-8,640,000,000,000,000` oder größer als `8,640,000,000,000,000` Millisekunden haben wird, gibt es ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück (ein `Date`-Objekt, dessen {{jsxref("Date/toString", "toString()")}}-Methode `"Invalid Date"` zurückgibt und dessen {{jsxref("Date/valueOf", "valueOf()")}}-Methode `NaN` zurückgibt).

Das Aufrufen der `Date()`-Funktion (ohne das `new`-Schlüsselwort) gibt eine String-Repräsentation des aktuellen Datums und der aktuellen Zeit zurück, genau wie `new Date().toString()`. Alle Argumente, die in einem `Date()`-Funktionsaufruf gegeben werden (ohne das `new`-Schlüsselwort), werden ignoriert; unabhängig davon, ob es mit einem ungültigen Datumsstring aufgerufen wird — oder sogar mit einem beliebigen Objekt oder anderen Primitive als Argument — es gibt immer eine String-Repräsentation des aktuellen Datums und der aktuellen Zeit zurück.

## Beschreibung

### Reduzierte Zeitpräzision

Um Schutz gegen Zeitangriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Präzision von `new Date()` je nach Browsereinstellungen gerundet werden. In Firefox ist die Präferenz `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2ms voreingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` beträgt, je nachdem, welcher größer ist.

Zum Beispiel wird das Ergebnis von `new Date().getTime()` bei reduzierter Zeitpräzision immer ein Vielfaches von 2 sein, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting`.

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

### Übergeben eines Wertes, der keine Date-, keine String- und keine Zahl ist

Wenn der `Date()`-Konstruktor mit einem Parameter aufgerufen wird, der keine `Date`-Instanz ist, wird er zu einem primitiven Typ gezwungen und dann überprüft, ob er ein String ist. Zum Beispiel ist `new Date(undefined)` anders als `new Date()`:

```js
console.log(new Date(undefined)); // Invalid Date
```

Der Grund dafür ist, dass `undefined` bereits ein primitiver Typ ist, aber kein String, daher wird es in eine Zahl umgewandelt, die [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist und daher kein gültiger Zeitstempel. Andererseits wird `null` zu `0` umgewandelt.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) würden über [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) zu einem String umgewandelt, der die Elemente mit Kommas verbindet. Der resultierende String für ein Array mit mehr als einem Element ist jedoch kein gültiger ISO 8601 Datumsstring, sodass das Parsing-Verhalten implementationsspezifisch wäre. **Übergeben Sie keine Arrays an den `Date()`-Konstruktor.**

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
