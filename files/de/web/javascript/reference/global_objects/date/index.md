---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

JavaScript **`Date`**-Objekte repräsentieren einen einzelnen Moment in der Zeit in einem plattformunabhängigen Format. `Date`-Objekte kapseln eine ganze Zahl, die Millisekunden seit Mitternacht zu Beginn des 1. Januar 1970 UTC (der _Epoche_) darstellt.

> [!NOTE]
> Mit der Einführung der {{jsxref("Temporal")}} API wird das `Date`-Objekt als veraltete Funktionalität betrachtet. Ziehen Sie es in Betracht, `Temporal` für neuen Code zu verwenden und bestehenden Code auf diese neue API zu migrieren, wenn möglich (überprüfen Sie die [Browser-Kompatibilität](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#browser_compatibility). Wir werden bald einen Leitfaden zur Nutzung schreiben!

## Beschreibung

### Die Epoche, Zeitstempel und ungültige Daten

Ein JavaScript-Datum wird grundsätzlich als die Zeit in Millisekunden definiert, die seit der [Epoche](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) verstrichen ist, die als Mitternacht zu Beginn des 1. Januar 1970 UTC definiert ist (entspricht der {{Glossary("Unix_time", "UNIX-Epoche")}}). Dieser Zeitstempel ist _zeitzonenagnostisch_ und definiert einen Moment in der Geschichte eindeutig.

> [!NOTE]
> Obwohl der Zeitwert im Herzen eines Date-Objekts UTC ist, funktionieren die grundlegenden Methoden, um das Datum und die Uhrzeit oder deren Komponenten abzurufen, alle in der lokalen (d.h. Host-System) Zeitzone und Verschiebung.

Der maximale Zeitstempel, der von einem `Date`-Objekt darstellbar ist, ist etwas kleiner als die maximale sichere ganze Zahl ({{jsxref("Number.MAX_SAFE_INTEGER")}}, also 9.007.199.254.740.991). Ein `Date`-Objekt kann maximal ±8.640.000.000.000.000 Millisekunden oder ±100.000.000 (einhundert Millionen) Tage relativ zur Epoche darstellen. Dies ist der Bereich vom 20. April 271821 v. Chr. bis zum 13. September 275760 n. Chr. Jeder Versuch, eine Zeit außerhalb dieses Bereichs darzustellen, führt dazu, dass das `Date`-Objekt einen Zeitstempel von [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) enthält, was ein "ungültiges Datum" ist.

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

Es gibt verschiedene Methoden, die es Ihnen ermöglichen, mit dem im Datum gespeicherten Zeitstempel zu interagieren:

- Sie können direkt mit dem Zeitstempelwert unter Verwendung der Methoden {{jsxref("Date/getTime", "getTime()")}} und {{jsxref("Date/setTime", "setTime()")}} interagieren.
- Die Methoden {{jsxref("Date/valueOf", "valueOf()")}} und [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"number"` übergeben wird) — die automatisch bei [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) aufgerufen werden — geben den Zeitstempel zurück, wodurch sich `Date`-Objekte wie ihre Zeitstempel verhalten, wenn sie in Zahlkontexten verwendet werden.
- Alle statischen Methoden ({{jsxref("Date.now()")}}, {{jsxref("Date.parse()")}}, und {{jsxref("Date.UTC()")}}) geben Zeitstempel anstelle von `Date`-Objekten zurück.
- Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit einem Zeitstempel als einzigem Argument aufgerufen werden.

### Datumsbestandteile und Zeitzonen

Ein Datum wird intern als eine einzelne Zahl, der _Zeitstempel_, dargestellt. Beim Umgang damit muss der Zeitstempel als strukturierte Datum-Uhrzeit-Darstellung interpretiert werden. Es gibt immer zwei Möglichkeiten, einen Zeitstempel zu interpretieren: als lokale Zeit oder als Koordinierte Weltzeit (UTC), die globale Standardzeit, die durch den Weltzeitstandard definiert ist. Die lokale Zeitzone wird nicht im Date-Objekt gespeichert, sondern wird durch die Host-Umgebung (das Gerät des Benutzers) bestimmt.

> [!NOTE]
> UTC darf nicht mit der [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT) verwechselt werden, da sie nicht immer identisch sind – dies wird im verlinkten Wikipedia-Artikel ausführlicher erklärt.

Beispielsweise stellt der Zeitstempel 0 einen einzigartigen Moment in der Geschichte dar, kann aber auf zwei Arten interpretiert werden:

- Als UTC-Zeit ist es Mitternacht zu Beginn des 1. Januar 1970 UTC,
- Als lokale Zeit in New York (UTC-5) ist es 19:00:00 am 31. Dezember 1969.

Die Methode {{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} gibt die Differenz zwischen UTC und der lokalen Zeit in Minuten zurück. Beachten Sie, dass die Zeitzonenverschiebung nicht nur von der aktuellen Zeitzone abhängt, sondern auch von der durch das `Date`-Objekt dargestellten Zeit, aufgrund von Sommerzeitumstellungen und historischen Änderungen. Im Wesentlichen ist die Zeitzonenverschiebung die Verschiebung von der UTC-Zeit zum Zeitpunkt, der durch das `Date`-Objekt und am Standort der Host-Umgebung repräsentiert wird.

Es gibt zwei Gruppen von `Date`-Methoden: eine Gruppe erhält und setzt verschiedene Datumsbestandteile, indem der Zeitstempel als lokale Zeit interpretiert wird, während die andere UTC verwendet.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2">Komponente</th>
      <th colspan="2">Lokal</th>
      <th colspan="2">UTC</th>
    </tr>
    <tr>
      <th>Get</th>
      <th>Set</th>
      <th>Get</th>
      <th>Set</th>
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
      <td>Datum (im Monat)</td>
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
      <td>Tag (der Woche)</td>
      <td>{{jsxref("Date/getDay", "getDay()")}}</td>
      <td>N/A</td>
      <td>{{jsxref("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit zwei oder mehr Argumenten aufgerufen werden, wobei diese als Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde interpretiert werden, jeweils in lokaler Zeit. {{jsxref("Date.UTC()")}} funktioniert ähnlich, interpretiert die Komponenten jedoch als UTC-Zeit und akzeptiert auch ein einzelnes Argument, das das Jahr darstellt.

> [!NOTE]
> Einige Methoden, einschließlich des `Date()`-Konstruktors, `Date.UTC()`, und der veralteten {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}}-Methoden, interpretieren ein zweistelliges Jahr als Jahr in den 1900er Jahren. Beispielsweise wird `new Date(99, 5, 24)` als 24. Juni 1999 interpretiert, nicht als 24. Juni 99. Siehe [Interpretation von zweistelligen Jahren](#interpretation_von_zweistelligen_jahreszahlen) für weitere Informationen.

Wenn ein Segment seinen erwarteten Bereich über- oder unterschreitet, "trägt es normalerweise zum höherwertigen Segment über" oder "leiht sich davon". Beispielsweise wird, wenn der Monat auf 12 gesetzt wird (Monate sind nullbasiert, daher ist Dezember 11), daraus der Januar des nächsten Jahres. Wenn auf den 0. Tag des Monats gesetzt wird, wird daraus der letzte Tag des vorherigen Monats. Dies gilt auch für Daten, die mit dem [Zeitstempelformat](#zeitstempelformat) angegeben werden.

Wenn versucht wird, die lokale Zeit auf eine Zeit innerhalb einer Verschiebungstransition (normalerweise Sommerzeit) zu setzen, wird die genaue Zeit unter Verwendung des gleichen Verhaltens wie `Temporal`'s [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) Option abgeleitet. Das bedeutet, dass, wenn die lokale Zeit zwei Momenten entspricht, der frühere gewählt wird; wenn die lokale Zeit nicht existiert (es gibt eine Lücke), wird die Lückendauer nach vorne gegangen.

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

### Zeitstempelformat

Es gibt viele Möglichkeiten, ein Datum als Zeichenkette zu formatieren. Die JavaScript-Spezifikation legt nur ein Format fest, das universell unterstützt wird: das [_Zeitstempelformat_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), eine Vereinfachung des ISO 8601-Kalenderdatums im erweiterten Format. Das Format ist wie folgt:

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` ist das Jahr, mit vier Ziffern (`0000` bis `9999`) oder als _erweitertes Jahr_ mit `+` oder `-`, gefolgt von sechs Ziffern. Das Vorzeichen ist für erweiterte Jahre erforderlich. `-000000` ist explizit als gültiges Jahr ausgeschlossen.
- `MM` ist der Monat, mit zwei Ziffern (`01` bis `12`). Standard ist `01`.
- `DD` ist der Tag des Monats, mit zwei Ziffern (`01` bis `31`). Standard ist `01`.
- `T` ist ein literaler Charakter, der den Beginn des _Zeit_ Teils der Zeichenfolge anzeigt. Das `T` ist erforderlich, wenn der Zeitteil angegeben wird.
- `HH` ist die Stunde, mit zwei Ziffern (`00` bis `23`). Als Sonderfall ist `24:00:00` erlaubt und wird als Mitternacht zu Beginn des nächsten Tages interpretiert. Standard ist `00`.
- `mm` ist die Minute, mit zwei Ziffern (`00` bis `59`). Standard ist `00`.
- `ss` ist die Sekunde, mit zwei Ziffern (`00` bis `59`). Standard ist `00`.
- `sss` ist die Millisekunde, mit drei Ziffern (`000` bis `999`). Standard ist `000`.
- `Z` ist die Zeitzonenverschiebung, die entweder der buchstäbliche Charakter `Z` (anzeigend UTC) oder `+` oder `-`, gefolgt von `HH:mm`, der Verschiebung in Stunden und Minuten von UTC, sein kann.

Verschiedene Komponenten können weggelassen werden, also sind die folgenden alle gültig:

- Nur-Datum-Form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Datum-Zeit-Form: eine der oben genannten Nur-Datum-Formen, gefolgt von `T`, gefolgt von `HH:mm`, `HH:mm:ss` oder `HH:mm:ss.sss`. Jede Kombination kann mit einer Zeitzonenverschiebung folgen.

Beispielsweise sind `"2011-10-10"` (_Nur-Datum_ Form), `"2011-10-10T14:48:00"` (_Datum-Zeit_ Form) oder `"2011-10-10T14:48:00.000+09:00"` (_Datum-Zeit_ Form mit Millisekunden und Zeitzone) alle gültige Datumzeit-Strings.

Wenn die Zeitzonenverschiebung fehlt, **werden Nur-Datum-Formen als UTC-Zeit und Datum-Zeit-Formen als lokale Zeit interpretiert.** Die Interpretation als UTC-Zeit ist auf einen historischen Spezifikationsfehler zurückzuführen, der nicht mit ISO 8601 übereinstimmte, aber aufgrund von Webkompatibilität nicht geändert werden konnte. Siehe [Broken Parser – A Web Reality Issue](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

{{jsxref("Date.parse()")}} und der {{jsxref("Date/Date", "Date()")}}-Konstruktor akzeptieren beide Zeichenfolgen im Zeitstempelformat als Eingabe. Darüber hinaus können Implementierungen andere Datumsformate unterstützen, wenn die Eingabe diesem Format nicht entspricht.

Die Methode {{jsxref("Date/toISOString", "toISOString()")}} gibt eine Zeichenfolgendarstellung des Datums im Zeitstempelformat zurück, wobei die Zeitzonenverschiebung immer auf `Z` (UTC) gesetzt ist.

> [!NOTE]
> Es wird empfohlen, sicherzustellen, dass Ihre Eingabe dem oben genannten Zeitstempelformat für maximale Kompatibilität entspricht, da die Unterstützung für andere Formate nicht garantiert ist. Es gibt jedoch einige Formate, die in allen großen Implementierungen unterstützt werden — wie das {{rfc(2822)}}-Format —, in welchem Fall die Verwendung akzeptabel sein kann. Führen Sie immer [Cross-Browser-Tests](/de/docs/Learn_web_development/Extensions/Testing) durch, um sicherzustellen, dass Ihr Code in allen Zielbrowsern funktioniert. Eine Bibliothek kann helfen, wenn viele verschiedene Formate unterstützt werden sollen.

Nicht standardisierte Zeichenfolgen können beliebig von der Implementierung geparst werden, einschließlich der Zeitzone — die meisten Implementierungen verwenden standardmäßig die lokale Zeitzone. Implementierungen sind nicht verpflichtet, ungültige Daten für außerhalb der gültigen Bereiche liegende Datumsbestandteile zurückzugeben, obwohl sie dies normalerweise tun. Eine Zeichenfolge kann Datumsbestandteile innerhalb des gültigen Bereichs aufweisen (mit den oben definierten Grenzen), jedoch nicht tatsächlich ein Datum in der Realität darstellen (zum Beispiel "30. Februar"). In solchen Fällen verhalten sich Implementierungen inkonsistent. Die Seite [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples) bietet mehr Beispiele zu diesen nicht standardisierten Fällen.

### Andere Wege, ein Datum zu formatieren

- {{jsxref("Date/toISOString", "toISOString()")}} gibt eine Zeichenkette im Format `1970-01-01T00:00:00.000Z` zurück (das oben eingeführte Zeitstempelformat, das eine vereinfachte [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) darstellt). {{jsxref("Date/toJSON", "toJSON()")}} ruft `toISOString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toString", "toString()")}} gibt eine Zeichenkette im Format `Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)` zurück, während {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} die Datum- bzw. Uhrzeit-Teile der Zeichenkette zurückgeben. [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"string"` oder `"default"` übergeben wird) ruft `toString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toUTCString", "toUTCString()")}} gibt eine Zeichenkette im Format `Thu, 01 Jan 1970 00:00:00 GMT` zurück (generalisierte {{rfc(7231)}}).
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}, {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}, und {{jsxref("Date/toLocaleString", "toLocaleString()")}} verwenden ortsspezifische Datums- und Zeitformate, die normalerweise von der [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) API bereitgestellt werden.

Beispielen siehe den Abschnitt [Formate der Rückgabewerte der `toString`-Methode](#formate_der_rückgabewerte_der_tostring-methode).

## Konstruktor

- {{jsxref("Date/Date", "Date()")}}
  - : Bei Aufruf als Konstruktor wird ein neues `Date`-Objekt zurückgegeben. Bei Aufruf als Funktion wird eine Zeichenfolgendarstellung des aktuellen Datums und der aktuellen Uhrzeit zurückgegeben.

## Statische Methoden

- {{jsxref("Date.now()")}}
  - : Gibt den numerischen Wert zurück, der der aktuellen Zeit entspricht — die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.parse()")}}
  - : Interpretiert eine Zeichenfolgendarstellung eines Datums und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.UTC()")}}
  - : Akzeptiert die gleichen Parameter wie die längste Form des Konstruktors (d.h. 2 bis 7) und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Date.prototype` definiert und werden von allen `Date`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Date`-Instanzen ist der initiale Wert der {{jsxref("Date/Date", "Date")}}-Konstruktor.

## Instanz-Methoden

- {{jsxref("Date.prototype.getDate()")}}
  - : Gibt den Tag des Monats (`1` – `31`) für das angegebene Datum gemäß lokaler Zeit zurück.
- {{jsxref("Date.prototype.getDay()")}}
  - : Gibt den Wochentag (`0` – `6`) für das angegebene Datum gemäß lokaler Zeit zurück.
- {{jsxref("Date.prototype.getFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für 4-stellige Jahre) des angegebenen Datums gemäß lokaler Zeit zurück.
- {{jsxref("Date.prototype.getHours()")}}
  - : Gibt die Stunde (`0` – `23`) im angegebenen Datum gemäß lokaler Zeit zurück.
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : Gibt die Millisekunden (`0` – `999`) im angegebenen Datum gemäß lokaler Zeit zurück.
- {{jsxref("Date.prototype.getMinutes()")}}
  - : Gibt die Minuten (`0` – `59`) im angegebenen Datum gemäß lokaler Zeit zurück.
- {{jsxref("Date.prototype.getMonth()")}}
  - : Gibt den Monat (`0` – `11`) im angegebenen Datum gemäß lokaler Zeit zurück.
- {{jsxref("Date.prototype.getSeconds()")}}
  - : Gibt die Sekunden (`0` – `59`) im angegebenen Datum gemäß lokaler Zeit zurück.
- {{jsxref("Date.prototype.getTime()")}}
  - : Gibt den numerischen Wert des angegebenen Datums als Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück. (Negative Werte werden für frühere Zeiten zurückgegeben.)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Gibt die Zeitzonenverschiebung in Minuten für die aktuelle Lokalität zurück.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : Gibt den Tag (Datum) des Monats (`1` – `31`) im angegebenen Datum gemäß Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : Gibt den Wochentag (`0` – `6`) im angegebenen Datum gemäß Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für 4-stellige Jahre) im angegebenen Datum gemäß Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : Gibt die Stunden (`0` – `23`) im angegebenen Datum gemäß Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : Gibt die Millisekunden (`0` – `999`) im angegebenen Datum gemäß Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : Gibt die Minuten (`0` – `59`) im angegebenen Datum gemäß Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : Gibt den Monat (`0` – `11`) im angegebenen Datum gemäß Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : Gibt die Sekunden (`0` – `59`) im angegebenen Datum gemäß Weltzeit zurück.
- {{jsxref("Date.prototype.getYear()")}} {{deprecated_inline}}
  - : Gibt das Jahr (normalerweise 2–3 Ziffern) im angegebenen Datum gemäß lokaler Zeit zurück. Verwenden Sie stattdessen {{jsxref("Date/getFullYear", "getFullYear()")}}.
- {{jsxref("Date.prototype.setDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß lokaler Zeit.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : Setzt das ganze Jahr (z. B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum gemäß lokaler Zeit.
- {{jsxref("Date.prototype.setHours()")}}
  - : Setzt die Stunden für ein angegebenes Datum gemäß lokaler Zeit.
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : Setzt die Millisekunden für ein angegebenes Datum gemäß lokaler Zeit.
- {{jsxref("Date.prototype.setMinutes()")}}
  - : Setzt die Minuten für ein angegebenes Datum gemäß lokaler Zeit.
- {{jsxref("Date.prototype.setMonth()")}}
  - : Setzt den Monat für ein angegebenes Datum gemäß lokaler Zeit.
- {{jsxref("Date.prototype.setSeconds()")}}
  - : Setzt die Sekunden für ein angegebenes Datum gemäß lokaler Zeit.
- {{jsxref("Date.prototype.setTime()")}}
  - : Setzt das `Date`-Objekt auf die durch die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC dargestellte Zeit. Verwenden Sie negative Zahlen für frühere Zeiten.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß universeller Zeit.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Setzt das ganze Jahr (z. B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum gemäß universeller Zeit.
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : Setzt die Stunde für ein angegebenes Datum gemäß universeller Zeit.
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : Setzt die Millisekunden für ein angegebenes Datum gemäß universeller Zeit.
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : Setzt die Minuten für ein angegebenes Datum gemäß universeller Zeit.
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : Setzt den Monat für ein angegebenes Datum gemäß universeller Zeit.
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : Setzt die Sekunden für ein angegebenes Datum gemäß universeller Zeit.
- {{jsxref("Date.prototype.setYear()")}} {{deprecated_inline}}
  - : Setzt das Jahr (normalerweise 2–3 Ziffern) für ein angegebenes Datum gemäß lokaler Zeit. Verwenden Sie stattdessen {{jsxref("Date/setFullYear", "setFullYear()")}}.
- {{jsxref("Date.prototype.toDateString()")}}
  - : Gibt den "Datum"-Teil des `Date` als menschenlesbare Zeichenkette wie `'Thu Apr 12 2018'` zurück.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Konvertiert ein Datum in eine Zeichenfolge gemäß dem ISO 8601 Extended Format.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Gibt eine Zeichenkette zurück, die das `Date` unter Verwendung von {{jsxref("Date/toISOString", "toISOString()")}} darstellt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Gibt eine Zeichenkette mit einer ortsspezifischen Repräsentation des Datumsteils dieses Datums basierend auf den Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenkette mit einer ortsspezifischen Repräsentation dieses Datums zurück. Überschreibt die Methode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Gibt eine Zeichenkette mit einer ortsspezifischen Repräsentation des Uhrzeitteils dieses Datums basierend auf den Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die das angegebene `Date`-Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Date.prototype.toTemporalInstant()")}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt mit dem gleichen {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}-Wert wie der Zeitstempel dieses Datums zurück.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Gibt den "Uhrzeit"-Teil des `Date` als menschenlesbare Zeichenkette zurück.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Konvertiert ein Datum in eine Zeichenfolge unter Verwendung der UTC-Zeitzone.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Gibt den primitiven Wert eines `Date`-Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : Konvertiert dieses `Date`-Objekt in einen primitiven Wert.

## Beispiele

### Mehrere Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen mehrere Möglichkeiten, JavaScript-Daten zu erstellen:

> [!NOTE]
> Ein Datum aus einer Zeichenkette zu erstellen, hat viele Verhaltensinkonsistenzen. Siehe [Date-Zeit-String-Format](#zeitstempelformat) für Informationen zu verschiedenen Formaten.

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // passing epoch timestamp
```

### Formate der Rückgabewerte der toString-Methode

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

### So erhalten Sie Datum, Monat und Jahr oder Zeit

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

### Interpretation von zweistelligen Jahreszahlen

`new Date()` zeigt ein veraltetes, unerwünschtes und inkonsistentes Verhalten mit zweistelligen Jahreszahlen; insbesondere wird, wenn ein `new Date()`-Aufruf mit einem zweistelligen Jahrwert erfolgt, dieser Jahrwert nicht als wörtliches Jahr verwendet, sondern als relativer Offset interpretiert — in einigen Fällen als Offset vom Jahr `1900`, in anderen Fällen als Offset vom Jahr `2000`.

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

Um also Daten zwischen den Jahren `0` und `99` zu erstellen und abzurufen, verwenden Sie stattdessen die bevorzugten Methoden {{jsxref("Date/setFullYear", "setFullYear()")}} und {{jsxref("Date/getFullYear", "getFullYear()")}}.

```js
// Preferred method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date.setFullYear(98);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)
```

### Berechnung der verstrichenen Zeit

Die folgenden Beispiele zeigen, wie man die verstrichene Zeit zwischen zwei JavaScript-Daten in Millisekunden bestimmt.

Aufgrund der unterschiedlichen Längen von Tagen (durch Sommerzeitumstellung), Monaten und Jahren erfordert die Angabe der verstrichenen Zeit in Einheiten größer als Stunden, Minuten und Sekunden die Berücksichtigung vieler Faktoren und sollte gründlich recherchiert werden, bevor sie versucht wird.

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
> In Browsern, die das [Performance API](/de/docs/Web/API/Performance_API) mit der Funktion für hochauflösende Zeiten unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) zuverlässigere und präzisere Messungen der verstrichenen Zeit liefern als {{jsxref("Date.now()")}}.

### Erhalten Sie die Anzahl der Sekunden seit der ECMAScript-Epoche

```js
const seconds = Math.floor(Date.now() / 1000);
```

In diesem Fall ist es wichtig, nur eine ganze Zahl zurückzugeben – eine einfache Division reicht nicht aus. Es ist auch wichtig, nur tatsächlich verstrichene Sekunden zurückzugeben. (Deshalb wird in diesem Code {{jsxref("Math.floor()")}} verwendet und _nicht_ {{jsxref("Math.round()")}}.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date/Date", "Date()")}}
