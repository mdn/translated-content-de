---
title: Date() Konstruktor
short-title: Date()
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Date()`**-Konstruktor erstellt {{jsxref("Date")}}-Objekte. Bei einem Funktionsaufruf gibt er einen String zurück, der die aktuelle Zeit darstellt.

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
> `Date()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, hat aber unterschiedliche Auswirkungen. Siehe [Rückgabewert](#rückgabewert).

### Parameter

Es gibt fünf grundlegende Formen für den `Date()`-Konstruktor:

#### Keine Parameter

Wenn keine Parameter angegeben werden, repräsentiert das neu erstellte `Date`-Objekt das aktuelle Datum und die Uhrzeit zum Zeitpunkt der Instanzierung. Der zurückgegebene [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) entspricht der Zahl, die von {{jsxref("Date.now()")}} zurückgegeben wird.

#### Zeitwert oder Zeitstempelnummer

- `value`
  - : Ein ganzzahliger Wert, der den [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) repräsentiert (die Anzahl der Millisekunden seit Mitternacht zu Beginn des 1. Januar 1970, UTC — auch bekannt als [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Datum-String

- `dateString`
  - : Ein String-Wert, der ein Datum repräsentiert und mit dem gleichen Algorithmus wie von {{jsxref("Date.parse()")}} interpretiert wird. Siehe [Datum-Zeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) für Hinweise zur Verwendung verschiedener Formate.

#### Date-Objekt

- `dateObject`
  - : Ein vorhandenes `Date`-Objekt. Dies erstellt effektiv eine Kopie des bestehenden `Date`-Objekts mit dem gleichen Datum und der gleichen Uhrzeit. Dies entspricht `new Date(dateObject.valueOf())`, jedoch wird die Methode `valueOf()` nicht aufgerufen.

Wenn ein Parameter an den `Date()`-Konstruktor übergeben wird, werden `Date`-Instanzen speziell behandelt. Alle anderen Werte werden [in Primitive konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Wenn das Ergebnis ein String ist, wird er als Datum-String geparst. Andernfalls wird das resultierende Primitive weiter in eine Zahl umgewandelt und als Zeitstempel behandelt.

#### Einzelne Werte für Datum- und Zeitkomponenten

Wenn mindestens ein Jahr und ein Monat angegeben sind, gibt diese Form von `Date()` ein `Date`-Objekt zurück, dessen Komponentenwerte (Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde) alle aus den folgenden Parametern stammen. Fehlende Felder erhalten den niedrigstmöglichen Wert (`1` für `Tag` und `0` für jede andere Komponente). Die Parameterwerte werden alle gegen die lokale Zeitzone evaluiert, anstatt gegen UTC. {{jsxref("Date.UTC()")}} akzeptiert ähnliche Parameter, interpretiert die Komponenten jedoch als UTC und gibt einen Zeitstempel zurück.

Wenn ein Parameter seine definierten Grenzen überschreitet, wird er "übertragen". Beispielsweise wird ein `monthIndex` größer als `11` das Jahr erhöhen; wenn ein `minutes` größer als `59` übergeben wird, erhöhen sich die `hours` entsprechend usw. Daher gibt `new Date(1990, 12, 1)` den 1. Januar 1991 zurück; `new Date(2020, 5, 19, 25, 65)` gibt 2:05 Uhr am 20. Juni 2020 zurück.

Ebenso wird, wenn ein Parameter unterläuft, von den höheren Positionen "geliehen". Beispielsweise gibt `new Date(2020, 5, 0)` den 31. Mai 2020 zurück.

- `year`
  - : Ganzzahliger Wert, der das Jahr darstellt. Werte von `0` bis `99` werden den Jahren `1900` bis `1999` zugeordnet. Alle anderen Werte sind die tatsächlichen Jahre. Siehe das [Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Ganzzahliger Wert, der den Monat darstellt, beginnend mit `0` für Januar bis `11` für Dezember.
- `day` {{optional_inline}}
  - : Ganzzahliger Wert, der den Tag des Monats darstellt. Standardwert ist `1`.
- `hours` {{optional_inline}}
  - : Ganzzahliger Wert zwischen `0` und `23`, der die Stunde des Tages darstellt. Standardwert ist `0`.
- `minutes` {{optional_inline}}
  - : Ganzzahliger Wert, der das Minuten-Segment einer Zeit darstellt. Standardwert ist `0`.
- `seconds` {{optional_inline}}
  - : Ganzzahliger Wert, der das Sekunden-Segment einer Zeit darstellt. Standardwert ist `0`.
- `milliseconds` {{optional_inline}}
  - : Ganzzahliger Wert, der das Millisekunden-Segment einer Zeit darstellt. Standardwert ist `0`.

### Rückgabewert

Der Aufruf von `new Date()` (der `Date()`-Konstruktor) gibt ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt zurück. Wenn er mit einem ungültigen Datum-String aufgerufen wird oder wenn das zu konstruierende Datum einen Zeitstempel kleiner als `-8,640,000,000,000,000` oder größer als `8,640,000,000,000,000` Millisekunden hat, gibt er ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück (ein `Date`-Objekt, dessen {{jsxref("Date/toString", "toString()")}} Methode `"Invalid Date"` zurückgibt und dessen {{jsxref("Date/valueOf", "valueOf()")}} Methode `NaN` zurückgibt).

Der Aufruf der `Date()`-Funktion (ohne das `new` Schlüsselwort) gibt eine String-Darstellung des aktuellen Datums und der aktuellen Zeit zurück, genau wie `new Date().toString()`. Alle Argumente, die in einem `Date()`-Funktionsaufruf übergeben werden (ohne das `new` Schlüsselwort), werden ignoriert; unabhängig davon, ob es mit einem ungültigen Datum-String oder sogar mit einem beliebigen Objekt oder anderen Primitiven als Argument aufgerufen wird - es gibt immer eine String-Darstellung des aktuellen Datums und der aktuellen Zeit zurück.

## Beschreibung

### Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerabdrücke")}} zu bieten, kann die Präzision von `new Date()` je nach Browsereinstellungen gerundet werden. In Firefox ist die `privacy.reduceTimerPrecision`-Einstellung standardmäßig aktiviert und auf 2ms voreingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, welcher auch immer größer ist, beträgt.

Zum Beispiel wird mit reduzierter Zeitpräzision das Ergebnis von `new Date().getTime()` immer ein Vielfaches von 2 sein, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting`.

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

### Übergabe eines Wertes, der kein Date, kein String und keine Zahl ist

Wenn der `Date()`-Konstruktor mit einem Parameter aufgerufen wird, der keine `Date`-Instanz ist, wird er in ein Primärwert gezwungen und dann überprüft, ob er ein String ist. Zum Beispiel ist `new Date(undefined)` anders als `new Date()`:

```js
console.log(new Date(undefined)); // Invalid Date
```

Dies liegt daran, dass `undefined` bereits ein Primärwert ist, aber kein String, also wird es in eine Zahl umgewandelt, die [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist und daher kein gültiger Zeitstempel. Andererseits wird `null` in `0` umgewandelt.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) würden in einen String via [`Array.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) umgewandelt, der die Elemente mit Kommas verbindet. Allerdings ist der resultierende String für jedes Array mit mehr als einem Element kein gültiger ISO 8601 Datum-String, sodass sein Parsing-Verhalten implementationsabhängig wäre. **Übergeben Sie keine Arrays an den `Date()`-Konstruktor.**

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
