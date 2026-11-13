---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

JavaScript-**`Date`**-Objekte repräsentieren einen einzelnen Zeitpunkt in einem plattformunabhängigen Format. `Date`-Objekte enthalten eine ganze Zahl, die die Millisekunden seit Mitternacht zu Beginn des 1. Januar 1970 UTC (der _Epoche_) angibt.

> [!NOTE]
> Seit der Einführung der {{jsxref("Temporal")}}-API gilt das `Date`-Objekt als veraltetes Feature. Erwägen Sie, für neuen Code `Temporal` zu verwenden und bestehenden Code nach Möglichkeit darauf umzustellen (prüfen Sie die [Browser-Kompatibilität](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#browser_compatibility)). Lesen Sie den Leitfaden [Datums- und Zeitangaben darstellen](/de/docs/Web/JavaScript/Guide/Representing_dates_times) zum `Temporal`-Objekt und das [Temporal-Kochbuch](/de/docs/Web/JavaScript/Guide/Representing_dates_times/Cookbook) mit Codebeispielen für häufige Anwendungsfälle (einschließlich der Umstellung von `Date` auf `Temporal`).

## Beschreibung

### Die Epoche, Zeitstempel und ungültige Datumsangaben

Ein JavaScript-Datum wird grundsätzlich durch die Anzahl der Millisekunden definiert, die seit der [Epoche](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) vergangen sind. Diese ist als Mitternacht zu Beginn des 1. Januar 1970 UTC definiert (entspricht der {{Glossary("Unix_time", "UNIX-Epoche")}}). Dieser Zeitstempel ist _unabhängig von der Zeitzone_ und bezeichnet einen Zeitpunkt eindeutig.

> [!NOTE]
> Obwohl der Zeitwert eines `Date`-Objekts auf UTC basiert, verwenden die grundlegenden Methoden zum Abrufen des Datums und der Uhrzeit oder ihrer Bestandteile die lokale Zeitzone und den Zeitzonenversatz des Hostsystems.

Der größte Zeitstempel, den ein `Date`-Objekt darstellen kann, ist etwas kleiner als die größte sichere Ganzzahl ({{jsxref("Number.MAX_SAFE_INTEGER")}}, also 9.007.199.254.740.991). Ein `Date`-Objekt kann relativ zur Epoche höchstens ±8.640.000.000.000.000 Millisekunden oder ±100.000.000 (einhundert Millionen) Tage darstellen. Das entspricht dem Zeitraum vom 20. April 271821 v. Chr. bis zum 13. September 275760 n. Chr. Jeder Versuch, einen Zeitpunkt außerhalb dieses Bereichs darzustellen, führt dazu, dass das `Date`-Objekt den Zeitstempelwert [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) enthält und damit ein „Invalid Date“ ist.

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

Es gibt verschiedene Methoden, mit denen Sie auf den im Datum gespeicherten Zeitstempel zugreifen können:

- Mit den Methoden {{jsxref("Date/getTime", "getTime()")}} und {{jsxref("Date/setTime", "setTime()")}} können Sie direkt auf den Zeitstempelwert zugreifen.
- Die Methoden {{jsxref("Date/valueOf", "valueOf()")}} und [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"number"` übergeben wird) geben den Zeitstempel zurück. Sie werden bei der [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) automatisch aufgerufen, sodass sich `Date`-Objekte in numerischen Kontexten wie ihre Zeitstempel verhalten.
- Alle statischen Methoden ({{jsxref("Date.now()")}}, {{jsxref("Date.parse()")}} und {{jsxref("Date.UTC()")}}) geben Zeitstempel statt `Date`-Objekten zurück.
- Dem Konstruktor {{jsxref("Date/Date", "Date()")}} kann ein Zeitstempel als einziges Argument übergeben werden.

### Datumsbestandteile und Zeitzonen

Ein Datum wird intern als einzelne Zahl dargestellt: als _Zeitstempel_. Bei der Verwendung muss dieser Zeitstempel als strukturierte Datums- und Zeitangabe interpretiert werden. Ein Zeitstempel lässt sich immer auf zwei Arten interpretieren: als lokale Zeit oder als koordinierte Weltzeit (UTC), die durch den Weltzeitstandard festgelegte globale Standardzeit. Die lokale Zeitzone wird nicht im Datumsobjekt gespeichert, sondern durch die Hostumgebung (das Gerät des Benutzers) bestimmt.

> [!NOTE]
> UTC darf nicht mit der [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT) verwechselt werden, da beide nicht immer übereinstimmen. Dies wird auf der verlinkten Wikipedia-Seite näher erläutert.

Der Zeitstempel 0 bezeichnet beispielsweise einen eindeutigen Zeitpunkt, kann aber auf zwei Arten interpretiert werden:

- Als UTC-Zeit ist es Mitternacht zu Beginn des 1. Januar 1970 UTC.
- Als lokale Zeit in New York (UTC−5) ist es 19:00:00 Uhr am 31. Dezember 1969.

Die Methode {{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} gibt die Differenz zwischen UTC und der lokalen Zeit in Minuten zurück. Beachten Sie, dass der Zeitzonenversatz nicht nur von der aktuellen Zeitzone abhängt, sondern aufgrund der Sommerzeit und historischer Änderungen auch vom Zeitpunkt, den das `Date`-Objekt darstellt. Der Zeitzonenversatz ist also die Abweichung von UTC zum dargestellten Zeitpunkt und am Standort der Hostumgebung.

Es gibt zwei Gruppen von `Date`-Methoden: Die eine liest und setzt verschiedene Datumsbestandteile, indem sie den Zeitstempel als lokale Zeit interpretiert, während die andere UTC verwendet.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2">Bestandteil</th>
      <th colspan="2">Lokal</th>
      <th colspan="2">UTC</th>
    </tr>
    <tr>
      <th>Abrufen</th>
      <th>Setzen</th>
      <th>Abrufen</th>
      <th>Setzen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jahr</td>
      <td>{{jsxref("Date/getFullYear", "getFullYear()")}}</td>
      <td>{{jsxref("Date/setFullYear", "setFullYear()")}}</td>
      <td>{{jsxref("Date/getUTCFullYear", "getUTCFullYear()")}}</td>
      <td>{{jsxref("Date/setUTCFullYear", "setUTCFullYear()")}}</td>
    </tr>
    <tr>
      <td>Monat</td>
      <td>{{jsxref("Date/getMonth", "getMonth()")}}</td>
      <td>{{jsxref("Date/setMonth", "setMonth()")}}</td>
      <td>{{jsxref("Date/getUTCMonth", "getUTCMonth()")}}</td>
      <td>{{jsxref("Date/setUTCMonth", "setUTCMonth()")}}</td>
    </tr>
    <tr>
      <td>Tag (des Monats)</td>
      <td>{{jsxref("Date/getDate", "getDate()")}}</td>
      <td>{{jsxref("Date/setDate", "setDate()")}}</td>
      <td>{{jsxref("Date/getUTCDate", "getUTCDate()")}}</td>
      <td>{{jsxref("Date/setUTCDate", "setUTCDate()")}}</td>
    </tr>
    <tr>
      <td>Stunden</td>
      <td>{{jsxref("Date/getHours", "getHours()")}}</td>
      <td>{{jsxref("Date/setHours", "setHours()")}}</td>
      <td>{{jsxref("Date/getUTCHours", "getUTCHours()")}}</td>
      <td>{{jsxref("Date/setUTCHours", "setUTCHours()")}}</td>
    </tr>
    <tr>
      <td>Minuten</td>
      <td>{{jsxref("Date/getMinutes", "getMinutes()")}}</td>
      <td>{{jsxref("Date/setMinutes", "setMinutes()")}}</td>
      <td>{{jsxref("Date/getUTCMinutes", "getUTCMinutes()")}}</td>
      <td>{{jsxref("Date/setUTCMinutes", "setUTCMinutes()")}}</td>
    </tr>
    <tr>
      <td>Sekunden</td>
      <td>{{jsxref("Date/getSeconds", "getSeconds()")}}</td>
      <td>{{jsxref("Date/setSeconds", "setSeconds()")}}</td>
      <td>{{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}}</td>
      <td>{{jsxref("Date/setUTCSeconds", "setUTCSeconds()")}}</td>
    </tr>
    <tr>
      <td>Millisekunden</td>
      <td>{{jsxref("Date/getMilliseconds", "getMilliseconds()")}}</td>
      <td>{{jsxref("Date/setMilliseconds", "setMilliseconds()")}}</td>
      <td>{{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}}</td>
      <td>{{jsxref("Date/setUTCMilliseconds", "setUTCMilliseconds()")}}</td>
    </tr>
    <tr>
      <td>Wochentag</td>
      <td>{{jsxref("Date/getDay", "getDay()")}}</td>
      <td>–</td>
      <td>{{jsxref("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>–</td>
    </tr>
  </tbody>
</table>

Der Konstruktor {{jsxref("Date/Date", "Date()")}} kann mit zwei oder mehr Argumenten aufgerufen werden. Diese werden dann der Reihe nach als Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde in lokaler Zeit interpretiert. {{jsxref("Date.UTC()")}} funktioniert ähnlich, interpretiert die Bestandteile jedoch als UTC-Zeit und akzeptiert auch ein einzelnes Argument für das Jahr.

> [!NOTE]
> Einige Methoden, darunter der Konstruktor `Date()`, `Date.UTC()` und die veralteten Methoden {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}}, interpretieren eine zweistellige Jahreszahl als Jahr zwischen 1900 und 1999. Beispielsweise wird `new Date(99, 5, 24)` als 24. Juni 1999 interpretiert und nicht als 24. Juni des Jahres 99. Weitere Informationen finden Sie unter [Interpretation zweistelliger Jahreszahlen](#interpretation_zweistelliger_jahreszahlen).

Wenn ein Bestandteil seinen erwarteten Wertebereich über- oder unterschreitet, wird dies normalerweise beim nächsthöheren Bestandteil ausgeglichen. Wird beispielsweise der Monat auf 12 gesetzt (Monate beginnen bei 0, Dezember ist also 11), ergibt sich der Januar des Folgejahres. Wird der Tag des Monats auf 0 gesetzt, ergibt sich der letzte Tag des Vormonats. Dies gilt auch für Datumsangaben im [Datums-Zeit-Zeichenfolgenformat](#datums-zeit-zeichenfolgenformat).

Beim Versuch, die lokale Zeit auf einen Zeitpunkt innerhalb eines Wechsels des Zeitzonenversatzes (gewöhnlich einer Sommerzeitumstellung) zu setzen, wird der genaue Zeitpunkt nach demselben Verhalten wie bei der Option [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) von `Temporal` ermittelt. Entspricht die lokale Zeit zwei Zeitpunkten, wird der frühere gewählt. Existiert die lokale Zeit nicht (es gibt eine Lücke), wird sie um die Dauer der Lücke nach vorn verschoben.

```js
// Assume America/New_York local time zone
// 2024-03-10 02:30 is within the spring-forward transition and does not exist
// 01:59 (UTC-5) jumps to 03:00 (UTC-4), so 02:30 moves forward by one hour
console.log(new Date(2024, 2, 10, 2, 30).toString());
// Sun Mar 10 2024 03:30:00 GMT-0400 (Eastern Daylight Time)

// 2024-11-03 01:30 is within the fall-back transition and exists twice
// 01:59 (UTC-4) jumps to 01:00 (UTC-5), so the earlier 01:30 (UTC-4) is chosen
console.log(new Date(2024, 10, 3, 1, 30).toString());
// Sun Nov 03 2024 01:30:00 GMT-0400 (Eastern Daylight Time)
```

### Datums-Zeit-Zeichenfolgenformat

Es gibt viele Möglichkeiten, ein Datum als Zeichenfolge zu formatieren. Die JavaScript-Spezifikation schreibt nur ein Format vor, das überall unterstützt werden muss: das [_Datums-Zeit-Zeichenfolgenformat_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), eine vereinfachte Form des erweiterten ISO-8601-Kalenderdatumsformats. Das Format sieht wie folgt aus:

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` ist das Jahr mit vier Ziffern (`0000` bis `9999`) oder als _erweiterte Jahreszahl_ mit `+` oder `-` und sechs nachfolgenden Ziffern. Bei erweiterten Jahreszahlen ist das Vorzeichen erforderlich. `-000000` ist ausdrücklich keine gültige Jahreszahl.
- `MM` ist der Monat mit zwei Ziffern (`01` bis `12`). Der Standardwert ist `01`.
- `DD` ist der Tag des Monats mit zwei Ziffern (`01` bis `31`). Der Standardwert ist `01`.
- `T` ist ein wörtlich zu verwendendes Zeichen, das den Beginn des _Uhrzeitteils_ der Zeichenfolge kennzeichnet. Wenn ein Uhrzeitteil angegeben wird, ist `T` erforderlich.
- `HH` ist die Stunde mit zwei Ziffern (`00` bis `23`). Als Sonderfall ist `24:00:00` zulässig und wird als Mitternacht zu Beginn des nächsten Tages interpretiert. Der Standardwert ist `00`.
- `mm` ist die Minute mit zwei Ziffern (`00` bis `59`). Der Standardwert ist `00`.
- `ss` ist die Sekunde mit zwei Ziffern (`00` bis `59`). Der Standardwert ist `00`.
- `sss` ist die Millisekunde mit drei Ziffern (`000` bis `999`). Der Standardwert ist `000`.
- `Z` ist der Zeitzonenversatz. Er kann entweder das wörtlich zu verwendende Zeichen `Z` (für UTC) sein oder aus `+` beziehungsweise `-` und dem nachfolgenden Versatz `HH:mm` in Stunden und Minuten gegenüber UTC bestehen.

Verschiedene Bestandteile können weggelassen werden. Daher sind alle folgenden Formen gültig:

- Nur Datum: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Datum und Uhrzeit: eine der obigen Datumsformen, gefolgt von `T` und anschließend `HH:mm`, `HH:mm:ss` oder `HH:mm:ss.sss`. An jede Kombination kann ein Zeitzonenversatz angehängt werden.

Beispielsweise sind `"2011-10-10"` (_nur Datum_), `"2011-10-10T14:48:00"` (_Datum und Uhrzeit_) und `"2011-10-10T14:48:00.000+09:00"` (_Datum und Uhrzeit mit Millisekunden und Zeitzone_) gültige Datums-Zeit-Zeichenfolgen.

Wenn der Zeitzonenversatz fehlt, **werden Formen mit ausschließlich einem Datum als UTC-Zeit und Formen mit Datum und Uhrzeit als lokale Zeit interpretiert.** Die Interpretation als UTC-Zeit geht auf einen historischen Fehler in der Spezifikation zurück, der nicht mit ISO 8601 übereinstimmte, aber aus Gründen der Webkompatibilität nicht korrigiert werden konnte. Siehe [Broken Parser – A Web Reality Issue](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

Sowohl {{jsxref("Date.parse()")}} als auch der Konstruktor {{jsxref("Date/Date", "Date()")}} akzeptieren Zeichenfolgen im Datums-Zeit-Zeichenfolgenformat als Eingabe. Darüber hinaus dürfen Implementierungen andere Datumsformate unterstützen, wenn die Eingabe diesem Format nicht entspricht.

Die Methode {{jsxref("Date/toISOString", "toISOString()")}} gibt eine Zeichenfolgendarstellung des Datums im Datums-Zeit-Zeichenfolgenformat zurück, wobei der Zeitzonenversatz immer `Z` (UTC) ist.

> [!NOTE]
> Für größtmögliche Kompatibilität sollten Sie sicherstellen, dass Ihre Eingabe dem oben beschriebenen Datums-Zeit-Zeichenfolgenformat entspricht, da die Unterstützung anderer Formate nicht garantiert ist. Einige Formate werden allerdings von allen wichtigen Implementierungen unterstützt – beispielsweise das Format nach {{rfc(2822)}} –, sodass ihre Verwendung vertretbar sein kann. Führen Sie stets [browserübergreifende Tests](/de/docs/Learn_web_development/Extensions/Testing) durch, um sicherzustellen, dass Ihr Code in allen Zielbrowsern funktioniert. Wenn viele verschiedene Formate unterstützt werden sollen, kann eine Bibliothek hilfreich sein.

Nicht standardisierte Zeichenfolgen können von einer Implementierung beliebig interpretiert werden, auch hinsichtlich der Zeitzone. Die meisten Implementierungen verwenden standardmäßig die lokale Zeitzone. Implementierungen müssen für Datumsbestandteile außerhalb der zulässigen Wertebereiche kein ungültiges Datum zurückgeben, tun dies aber üblicherweise. Eine Zeichenfolge kann Datumsbestandteile innerhalb der oben definierten Grenzen enthalten, ohne ein tatsächlich existierendes Datum zu bezeichnen (zum Beispiel „30. Februar“). In diesem Fall verhalten sich Implementierungen uneinheitlich. Die Seite zu [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples) enthält weitere Beispiele für solche nicht standardisierten Fälle.

### Weitere Möglichkeiten, ein Datum zu formatieren

- {{jsxref("Date/toISOString", "toISOString()")}} gibt eine Zeichenfolge im Format `1970-01-01T00:00:00.000Z` zurück (das oben eingeführte Datums-Zeit-Zeichenfolgenformat, eine vereinfachte Form von [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)). {{jsxref("Date/toJSON", "toJSON()")}} ruft `toISOString()` auf und gibt dessen Ergebnis zurück.
- {{jsxref("Date/toString", "toString()")}} gibt eine Zeichenfolge im Format `Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)` zurück. {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} geben dagegen den Datums- beziehungsweise Uhrzeitteil dieser Zeichenfolge zurück. [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) ruft `toString()` auf und gibt dessen Ergebnis zurück, wenn `"string"` oder `"default"` übergeben wird.
- {{jsxref("Date/toUTCString", "toUTCString()")}} gibt eine Zeichenfolge im Format `Thu, 01 Jan 1970 00:00:00 GMT` zurück (gemäß dem verallgemeinerten Format von {{rfc(7231)}}).
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}, {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}} und {{jsxref("Date/toLocaleString", "toLocaleString()")}} verwenden gebietsschemaspezifische Datums- und Uhrzeitformate, die üblicherweise von der [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl)-API bereitgestellt werden.

Beispiele finden Sie im Abschnitt [Formate der Rückgabewerte der Methode `toString`](#formate_der_rückgabewerte_der_methode_tostring).

## Konstruktor

- {{jsxref("Date/Date", "Date()")}}
  - : Wird `Date()` als Konstruktor aufgerufen, gibt er ein neues `Date`-Objekt zurück. Wird `Date()` als Funktion aufgerufen, gibt er eine Zeichenfolgendarstellung des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Statische Methoden

- {{jsxref("Date.now()")}}
  - : Gibt den numerischen Wert der aktuellen Zeit zurück: die Anzahl der Millisekunden seit dem 1. Januar 1970 um 00:00:00 Uhr UTC, ohne Berücksichtigung von Schaltsekunden.
- {{jsxref("Date.parse()")}}
  - : Interpretiert die Zeichenfolgendarstellung eines Datums und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 um 00:00:00 Uhr UTC zurück, ohne Berücksichtigung von Schaltsekunden.
- {{jsxref("Date.UTC()")}}
  - : Akzeptiert dieselben Parameter wie die längste Form des Konstruktors (also 2 bis 7) und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 um 00:00:00 Uhr UTC zurück, ohne Berücksichtigung von Schaltsekunden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Date.prototype` definiert und werden von allen `Date`-Instanzen gemeinsam verwendet.

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Date`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Date/Date", "Date")}}.

## Instanzmethoden

- {{jsxref("Date.prototype.getDate()")}}
  - : Gibt den Tag des Monats (`1` bis `31`) für das angegebene Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getDay()")}}
  - : Gibt den Wochentag (`0` bis `6`) für das angegebene Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getFullYear()")}}
  - : Gibt das Jahr des angegebenen Datums gemäß der lokalen Zeit zurück (vier Ziffern bei vierstelligen Jahreszahlen).
- {{jsxref("Date.prototype.getHours()")}}
  - : Gibt die Stunde (`0` bis `23`) des angegebenen Datums gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : Gibt die Millisekunden (`0` bis `999`) des angegebenen Datums gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getMinutes()")}}
  - : Gibt die Minuten (`0` bis `59`) des angegebenen Datums gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getMonth()")}}
  - : Gibt den Monat (`0` bis `11`) des angegebenen Datums gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getSeconds()")}}
  - : Gibt die Sekunden (`0` bis `59`) des angegebenen Datums gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getTime()")}}
  - : Gibt den numerischen Wert des angegebenen Datums als Anzahl der Millisekunden seit dem 1. Januar 1970 um 00:00:00 Uhr UTC zurück. (Für frühere Zeitpunkte werden negative Werte zurückgegeben.)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Gibt den Zeitzonenversatz für das aktuelle Gebietsschema in Minuten zurück.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : Gibt den Tag des Monats (`1` bis `31`) des angegebenen Datums gemäß UTC zurück.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : Gibt den Wochentag (`0` bis `6`) des angegebenen Datums gemäß UTC zurück.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : Gibt das Jahr des angegebenen Datums gemäß UTC zurück (vier Ziffern bei vierstelligen Jahreszahlen).
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : Gibt die Stunden (`0` bis `23`) des angegebenen Datums gemäß UTC zurück.
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : Gibt die Millisekunden (`0` bis `999`) des angegebenen Datums gemäß UTC zurück.
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : Gibt die Minuten (`0` bis `59`) des angegebenen Datums gemäß UTC zurück.
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : Gibt den Monat (`0` bis `11`) des angegebenen Datums gemäß UTC zurück.
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : Gibt die Sekunden (`0` bis `59`) des angegebenen Datums gemäß UTC zurück.
- {{jsxref("Date.prototype.getYear()")}} {{deprecated_inline}}
  - : Gibt das Jahr des angegebenen Datums gemäß der lokalen Zeit zurück (üblicherweise 2–3 Ziffern). Verwenden Sie stattdessen {{jsxref("Date/getFullYear", "getFullYear()")}}.
- {{jsxref("Date.prototype.setDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : Setzt das vollständige Jahr für ein angegebenes Datum gemäß der lokalen Zeit (z. B. vier Ziffern bei vierstelligen Jahreszahlen).
- {{jsxref("Date.prototype.setHours()")}}
  - : Setzt die Stunden für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : Setzt die Millisekunden für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setMinutes()")}}
  - : Setzt die Minuten für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setMonth()")}}
  - : Setzt den Monat für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setSeconds()")}}
  - : Setzt die Sekunden für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setTime()")}}
  - : Setzt das `Date`-Objekt auf den Zeitpunkt, der durch die Anzahl der Millisekunden seit dem 1. Januar 1970 um 00:00:00 Uhr UTC angegeben wird. Verwenden Sie für frühere Zeitpunkte negative Zahlen.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß UTC.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Setzt das vollständige Jahr für ein angegebenes Datum gemäß UTC (z. B. vier Ziffern bei vierstelligen Jahreszahlen).
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : Setzt die Stunde für ein angegebenes Datum gemäß UTC.
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : Setzt die Millisekunden für ein angegebenes Datum gemäß UTC.
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : Setzt die Minuten für ein angegebenes Datum gemäß UTC.
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : Setzt den Monat für ein angegebenes Datum gemäß UTC.
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : Setzt die Sekunden für ein angegebenes Datum gemäß UTC.
- {{jsxref("Date.prototype.setYear()")}} {{deprecated_inline}}
  - : Setzt das Jahr für ein angegebenes Datum gemäß der lokalen Zeit (üblicherweise 2–3 Ziffern). Verwenden Sie stattdessen {{jsxref("Date/setFullYear", "setFullYear()")}}.
- {{jsxref("Date.prototype.toDateString()")}}
  - : Gibt den Datumsteil des `Date`-Objekts als lesbare Zeichenfolge wie `'Thu Apr 12 2018'` zurück.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Wandelt ein Datum in eine Zeichenfolge im erweiterten ISO-8601-Format um.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Gibt mithilfe von {{jsxref("Date/toISOString", "toISOString()")}} eine Zeichenfolge zurück, die das `Date`-Objekt darstellt. Die Methode ist dafür vorgesehen, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Gibt eine Zeichenfolge mit einer gemäß den Systemeinstellungen lokalisierten Darstellung des Datumsteils zurück.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenfolge mit einer lokalisierten Darstellung dieses Datums zurück. Überschreibt die Methode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Gibt eine Zeichenfolge mit einer gemäß den Systemeinstellungen lokalisierten Darstellung des Uhrzeitteils zurück.
- {{jsxref("Date.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das angegebene `Date`-Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Date.prototype.toTemporalInstant()")}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, dessen {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}-Wert mit dem [Zeitstempel](#the_epoch_timestamps_and_invalid_date) dieses Datums übereinstimmt.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Gibt den Uhrzeitteil des `Date`-Objekts als lesbare Zeichenfolge zurück.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Wandelt ein Datum unter Verwendung der UTC-Zeitzone in eine Zeichenfolge um.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Gibt den primitiven Wert eines `Date`-Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : Wandelt dieses `Date`-Objekt in einen primitiven Wert um.

## Beispiele

### Verschiedene Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Möglichkeiten, JavaScript-Datumsobjekte zu erstellen:

> [!NOTE]
> Beim Erstellen eines Datums aus einer Zeichenfolge gibt es viele Verhaltensunterschiede. Hinweise zur Verwendung verschiedener Formate finden Sie unter [Datums-Zeit-Zeichenfolgenformat](#datums-zeit-zeichenfolgenformat).

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // passing epoch timestamp
```

### Formate der Rückgabewerte der Methode toString

```js
const date = new Date("2020-05-12T23:50:21.817Z");
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
date[Symbol.toPrimitive]("string"); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toJSON(); // 2020-05-12T23:50:21.817Z

date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT

date.toLocaleString(); // 5/12/2020, 6:50:21 PM
date.toLocaleDateString(); // 5/12/2020
date.toLocaleTimeString(); // 6:50:21 PM
```

### Tag, Monat und Jahr oder die Uhrzeit abrufen

```js
const date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
// [0, 17, 2000] as month are 0-indexed
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
// [16, 45, 30]
```

### Interpretation zweistelliger Jahreszahlen

`new Date()` zeigt bei zweistelligen Jahreszahlen ein unerwünschtes, uneinheitliches Altverhalten: Wird einem Aufruf von `new Date()` eine zweistellige Jahreszahl übergeben, wird diese nicht als wörtliche Jahreszahl behandelt und unverändert verwendet. Stattdessen wird sie als relativer Versatz interpretiert – in manchen Fällen gegenüber dem Jahr `1900`, in anderen gegenüber dem Jahr `2000`.

```js
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Legacy method; always interprets two-digit year values as relative to 1900
date.setYear(98);
date.toString(); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22);
date.toString(); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
```

Um Datumsangaben zwischen den Jahren `0` und `99` zu erstellen und abzurufen, verwenden Sie stattdessen vorzugsweise die Methoden {{jsxref("Date/setFullYear", "setFullYear()")}} und {{jsxref("Date/getFullYear", "getFullYear()")}}:

```js
// Preferred method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date.setFullYear(98);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)
```

### Verstrichene Zeit berechnen

Die folgenden Beispiele zeigen, wie Sie die zwischen zwei JavaScript-Datumsangaben verstrichene Zeit in Millisekunden ermitteln.

Da Tage (aufgrund der Sommerzeitumstellung), Monate und Jahre unterschiedlich lang sein können, sind bei der Angabe verstrichener Zeit in Einheiten oberhalb von Stunden, Minuten und Sekunden verschiedene Probleme zu berücksichtigen. Dies sollte vor der Umsetzung gründlich geprüft werden.

```js
// Using Date objects
const start = Date.now();

// The event to time goes here:
doSomethingForALongTime();
const end = Date.now();
const elapsed = end - start; // elapsed time in milliseconds
```

```js
// Using built-in methods
const start = new Date();

// The event to time goes here:
doSomethingForALongTime();
const end = new Date();
const elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds
```

```js
// To test a function and get back its return
function printElapsedTime(testFn) {
  const startTime = Date.now();
  const result = testFn();
  const endTime = Date.now();

  console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
  return result;
}

const yourFunctionReturn = printElapsedTime(yourFunction);
```

> [!NOTE]
> In Browsern, die die hochauflösende Zeitmessung der [Performance API](/de/docs/Web/API/Performance_API) unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) die verstrichene Zeit zuverlässiger und präziser messen als {{jsxref("Date.now()")}}.

### Anzahl der Sekunden seit der ECMAScript-Epoche ermitteln

```js
const seconds = Math.floor(Date.now() / 1000);
```

Hier ist es wichtig, nur eine ganze Zahl zurückzugeben; eine einfache Division genügt daher nicht. Ebenso wichtig ist es, nur tatsächlich verstrichene Sekunden zurückzugeben. (Deshalb verwendet dieser Code {{jsxref("Math.floor()")}} und _nicht_ {{jsxref("Math.round()")}}.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date/Date", "Date()")}}
