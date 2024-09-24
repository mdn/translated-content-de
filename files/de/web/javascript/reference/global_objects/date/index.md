---
title: Datum
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

JavaScript **`Date`** Objekte repräsentieren einen einzelnen Zeitpunkt in einem plattformunabhängigen Format. `Date` Objekte kapseln eine ganze Zahl, die Millisekunden seit Mitternacht zu Beginn des 1. Januar 1970, UTC (der _epoch_), darstellt.

> [!NOTE]
> TC39 arbeitet an [Temporal](https://tc39.es/proposal-temporal/docs/index.html), einer neuen Datum/Zeit-API. Lesen Sie mehr darüber im [Igalia Blog](https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/). Sie ist noch nicht bereit für den Produktionseinsatz!

## Beschreibung

### Die Epoche, Zeitstempel und ungültige Daten

Ein JavaScript-Datum wird grundlegend als die Zeit in Millisekunden angegeben, die seit der [Epoche](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) verstrichen ist, die als Mitternacht zu Beginn des 1. Januar 1970, UTC (entsprechend der [UNIX-Epoche](/de/docs/Glossary/Unix_time)), definiert ist. Dieser Zeitstempel ist _zeitzonenunabhängig_ und definiert einen einzigartigen Moment in der Geschichte.

> [!NOTE]
> Obwohl der Zeitwert im Kern eines Date-Objekts UTC ist, arbeiten die grundlegenden Methoden, um Datum und Uhrzeit oder deren Komponenten abzurufen, alle in der lokalen (d. h. dem Hostsystem) Zeitzone und Verschiebung.

Der maximale durch ein `Date` Objekt darstellbare Zeitstempel ist etwas kleiner als die maximale sichere Ganzzahl ({{jsxref("Number.MAX_SAFE_INTEGER")}}, die 9.007.199.254.740.991 entspricht). Ein `Date` Objekt kann maximal ±8.640.000.000.000.000 Millisekunden, oder ±100.000.000 (einhundert Millionen) Tage, relativ zur Epoche darstellen. Dies ist der Bereich vom 20. April 271821 v. Chr. bis zum 13. September 275760 n. Chr. Jeder Versuch, eine Zeit außerhalb dieses Bereichs darzustellen, führt dazu, dass das `Date` Objekt einen Zeitstempelwert von [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) enthält, was ein "Ungültiges Datum" ist.

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

Es gibt verschiedene Methoden, die es Ihnen ermöglichen, mit dem im Datum gespeicherten Zeitstempel zu interagieren:

- Sie können direkt mit dem Zeitstempelwert über die Methoden {{jsxref("Date/getTime", "getTime()")}} und {{jsxref("Date/setTime", "setTime()")}} interagieren.
- Die Methoden {{jsxref("Date/valueOf", "valueOf()")}} und [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"number"` übergeben wird) — die automatisch bei [Zahlenerzwingung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) aufgerufen werden — geben den Zeitstempel zurück und bewirken, dass `Date` Objekte sich in Zahlkontexten wie ihre Zeitstempel verhalten.
- Alle statischen Methoden ({{jsxref("Date.now()")}}, {{jsxref("Date.parse()")}}, und {{jsxref("Date.UTC()")}}) geben Zeitstempel statt `Date` Objekte zurück.
- Der {{jsxref("Date/Date", "Date()")}} Konstruktor kann mit einem Zeitstempel als einziges Argument aufgerufen werden.

### Datumsbestandteile und Zeitzonen

Ein Datum wird intern als eine einzige Zahl, der _Zeitstempel_, dargestellt. Bei der Interaktion mit ihm muss der Zeitstempel als strukturierte Datum-und-Zeit-Repräsentation interpretiert werden. Es gibt immer zwei Möglichkeiten, einen Zeitstempel zu interpretieren: als lokale Zeit oder als Coordinated Universal Time (UTC), die globale Standardzeit, die durch die Weltzeitstandard definiert ist. Die lokale Zeitzone wird nicht im Datumsobjekt gespeichert, sondern durch die Umgebungsumgebung (Benutzergerät) bestimmt.

> [!NOTE]
> UTC sollte nicht mit der [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT) verwechselt werden, da sie nicht immer gleich sind — dies wird ausführlicher in der verlinkten Wikipedia-Seite erklärt.

Zum Beispiel repräsentiert der Zeitstempel 0 einen einzigartigen Moment in der Geschichte, kann aber auf zwei Arten interpretiert werden:

- Als UTC-Zeit ist es Mitternacht zu Beginn des 1. Januar 1970, UTC,
- Als lokale Zeit in New York (UTC-5) ist es der 31. Dezember 1969, 19:00:00 Uhr.

Die Methode {{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} gibt den Unterschied zwischen UTC und der lokalen Zeit in Minuten zurück. Beachten Sie, dass die Zeitzonenverschiebung nicht nur von der aktuellen Zeitzone abhängt, sondern auch von der Zeit, die durch das `Date` Objekt dargestellt wird, aufgrund der Sommerzeit und historischer Änderungen. Im Wesentlichen ist die Zeitzonenverschiebung die Abweichung von der UTC-Zeit, zu der Zeit, die durch das `Date` Objekt dargestellt wird, und an dem Ort der Hostumgebung.

Es gibt zwei Gruppen von `Date`-Methoden: Eine Gruppe erhält und setzt verschiedene Datumsbestandteile, indem der Zeitstempel als lokale Zeit interpretiert wird, während die andere UTC verwendet.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2">Komponente</th>
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
      <td>Datum (des Monats)</td>
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

Der {{jsxref("Date/Date", "Date()")}} Konstruktor kann mit zwei oder mehr Argumenten aufgerufen werden, in welchem Fall sie als Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde entsprechend in lokaler Zeit interpretiert werden. {{jsxref("Date.UTC()")}} funktioniert ähnlich, interpretiert die Komponenten jedoch als UTC-Zeit und akzeptiert auch ein einzelnes Argument, das das Jahr darstellt.

> [!NOTE]
> Einige Methoden, einschließlich des `Date()` Konstruktors, `Date.UTC()`, und die veralteten {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}} Methoden, interpretieren ein zweistelliges Jahr als ein Jahr in den 1900er Jahren. Zum Beispiel wird `new Date(99, 5, 24)` als 24. Juni 1999 interpretiert, nicht als 24. Juni 99. Weitere Informationen finden Sie unter [Interpretation of two-digit years](#interpretation_zweistelliger_jahre).

Wenn ein Segment seinen erwarteten Bereich überläuft oder unterschreitet, "überträgt es sich normalerweise auf" oder "leiht von" das höhere Segment. Zum Beispiel wird, wenn der Monat auf 12 gesetzt wird (Monate sind nullbasiert, daher ist Dezember 11), es zum Januar des nächsten Jahres. Wenn der Tag des Monats auf 0 gesetzt wird, wird er zum letzten Tag des vorherigen Monats. Dies gilt auch für Daten, die mit dem [Date Time String Format](#datum-zeit-string-format) angegeben werden.

### Datum-Zeit-String-Format

Es gibt viele Möglichkeiten, ein Datum als String zu formatieren. Die JavaScript-Spezifikation gibt nur ein Format an, das universell unterstützt werden muss: das [_Datum-Zeit-String-Format_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), eine Vereinfachung des ISO 8601-Kalenderdatums-Erweiterungsformats. Das Format ist wie folgt:

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` ist das Jahr mit vier Ziffern (`0000` bis `9999`), oder als _erweitertes Jahr_ von `+` oder `-` gefolgt von sechs Ziffern. Das Zeichen ist für erweiterte Jahre erforderlich. `-000000` ist explizit als gültiges Jahr nicht erlaubt.
- `MM` ist der Monat mit zwei Ziffern (`01` bis `12`). Standardwert ist `01`.
- `DD` ist der Tag des Monats mit zwei Ziffern (`01` bis `31`). Standardwert ist `01`.
- `T` ist ein literales Zeichen, das den Beginn des _Zeit_ Teils des Strings anzeigt. Das `T` ist erforderlich, wenn der Zeitteil angegeben wird.
- `HH` ist die Stunde mit zwei Ziffern (`00` bis `23`). Als Spezialfall ist `24:00:00` erlaubt und wird als Mitternacht am Beginn des nächsten Tages interpretiert. Standardwert ist `00`.
- `mm` ist die Minute mit zwei Ziffern (`00` bis `59`). Standardwert ist `00`.
- `ss` ist die Sekunde mit zwei Ziffern (`00` bis `59`). Standardwert ist `00`.
- `sss` ist die Millisekunde mit drei Ziffern (`000` bis `999`). Standardwert ist `000`.
- `Z` ist die Zeitzonenverschiebung, die entweder das literale Zeichen `Z` (für UTC) oder `+` bzw. `-` gefolgt von `HH:mm` sein kann, die Verschiebung in Stunden und Minuten von UTC.

Verschiedene Komponenten können ausgelassen werden, daher sind die folgenden alle gültig:

- Nur-Datum-Form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Datum-Zeit-Form: eine der oben genannten Nur-Datum-Formen, gefolgt von `T`, gefolgt von `HH:mm`, `HH:mm:ss` oder `HH:mm:ss.sss`. Jede Kombination kann von einer Zeitzonenverschiebung gefolgt werden.

Zum Beispiel sind `"2011-10-10"` (_Nur-Datum_-Form), `"2011-10-10T14:48:00"` (_Datum-Zeit_-Form) oder `"2011-10-10T14:48:00.000+09:00"` (_Datum-Zeit_-Form mit Millisekunden und Zeitzone) alle gültige Datum-Zeit-Strings.

Wenn die Zeitzonenverschiebung fehlt, **werden Nur-Datum-Formen als UTC-Zeit und Datum-Zeit-Formen als lokale Zeit interpretiert.** Dies ist auf einen historischen Spezifikationsfehler zurückzuführen, der nicht mit ISO 8601 übereinstimmte, aber aufgrund von Webkompatibilität nicht geändert werden konnte. Weitere Informationen finden Sie unter [Broken Parser – A Web Reality Issue](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

{{jsxref("Date.parse()")}} und der {{jsxref("Date/Date", "Date()")}}-Konstruktor akzeptieren beide Strings im Datum-Zeit-String-Format als Eingabe. Darüber hinaus können Implementierungen andere Datumsformate unterstützen, wenn die Eingabe nicht diesem Format entspricht.

Die Methode {{jsxref("Date/toISOString", "toISOString()")}} gibt eine Stringrepräsentation des Datums im Datum-Zeit-String-Format zurück, wobei die Zeitzonenverschiebung immer auf `Z` (UTC) gesetzt ist.

> [!NOTE]
> Sie sollten sicherstellen, dass Ihre Eingabe mit dem oben beschriebenen Datum-Zeit-String-Format übereinstimmt, um maximale Kompatibilität zu gewährleisten, da die Unterstützung anderer Formate nicht garantiert ist. Einige Formate werden jedoch von allen großen Implementierungen unterstützt - wie das {{rfc(2822)}}-Format - in welchem Fall deren Verwendung akzeptabel sein kann. Führen Sie immer [Cross-Browser-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) durch, um sicherzustellen, dass Ihr Code in allen Ziel-Browsern funktioniert. Eine Bibliothek kann helfen, wenn viele verschiedene Formate unterstützt werden sollen.

Nicht-Standard-Strings können auf jede gewünschte Weise von der Implementierung geparst werden, einschließlich der Zeitzone — die meisten Implementierungen verwenden standardmäßig die lokale Zeitzone. Implementierungen sind nicht verpflichtet, ein ungültiges Datum für Komponenten außerhalb der Grenzen zurückzugeben, obwohl sie dies normalerweise tun. Ein String kann Komponenten innerhalb der Grenzen haben (wie oben definiert), aber kein echtes Datum darstellen (zum Beispiel "30. Februar"). Implementierungen verhalten sich in diesem Fall inkonsistent. Die Seite [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples) bietet weitere Beispiele für diese nicht standardmäßigen Fälle.

### Andere Wege, ein Datum zu formatieren

- {{jsxref("Date/toISOString", "toISOString()")}} gibt einen String im Format `1970-01-01T00:00:00.000Z` zurück (das oben vorgestellte Datum-Zeit-String-Format, das eine vereinfachte [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) ist). {{jsxref("Date/toJSON", "toJSON()")}} ruft `toISOString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toString", "toString()")}} gibt einen String im Format `Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)` zurück, während {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} die Datums- und Zeitteile des Strings bzw. zurückgeben. [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"string"` oder `"default"` übergeben wird) ruft `toString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toUTCString", "toUTCString()")}} gibt einen String im Format `Thu, 01 Jan 1970 00:00:00 GMT` zurück (verallgemeinert {{rfc(7231)}}).
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}, {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}, und {{jsxref("Date/toLocaleString", "toLocaleString()")}} verwenden lokalspezifische Datums- und Zeitformate, die normalerweise von der [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) API bereitgestellt werden.

Siehe den Abschnitt [Formate der return-Werte der toString-Methode](#formate_der_return-werte_der_tostring-methode) für Beispiele.

## Konstruktor

- {{jsxref("Date/Date", "Date()")}}
  - : Wenn als Konstruktor aufgerufen, gibt es ein neues `Date` Objekt zurück. Wenn als Funktion aufgerufen, gibt es eine Stringdarstellung des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Statische Methoden

- {{jsxref("Date.now()")}}
  - : Gibt den numerischen Wert zurück, der der aktuellen Zeit entspricht — die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.parse()")}}
  - : Parst eine Stringrepräsentation eines Datums und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.UTC()")}}
  - : Akzeptiert die gleichen Parameter wie die längste Form des Konstruktors (d. h. 2 bis 7) und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Date.prototype` definiert und werden von allen `Date` Instanzen geteilt.

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Date` Instanzen ist der Anfangswert der {{jsxref("Date/Date", "Date")}} Konstruktor.

## Instanz-Methoden

- {{jsxref("Date.prototype.getDate()")}}
  - : Gibt den Tag des Monats (`1` – `31`) für das angegebene Datum gemäß lokaler Zeit zurück.
- {{jsxref("Date.prototype.getDay()")}}
  - : Gibt den Wochentag (`0` – `6`) für das angegebene Datum gemäß lokaler Zeit zurück.
- {{jsxref("Date.prototype.getFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für Jahre mit 4 Ziffern) des angegebenen Datums gemäß lokaler Zeit zurück.
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
  - : Gibt den numerischen Wert des angegebenen Datums als die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück. (Negative Werte werden für frühere Zeiten zurückgegeben.)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Gibt den Zeitzonen-Offset in Minuten für das aktuelle Gebietsschema zurück.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : Gibt den Tag (Datum) des Monats (`1` – `31`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : Gibt den Wochentag (`0` – `6`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für Jahre mit 4 Ziffern) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : Gibt die Stunden (`0` – `23`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : Gibt die Millisekunden (`0` – `999`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : Gibt die Minuten (`0` – `59`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : Gibt den Monat (`0` – `11`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : Gibt die Sekunden (`0` – `59`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getYear()")}} {{deprecated_inline}}
  - : Gibt das Jahr (normalerweise 2–3 Ziffern) im angegebenen Datum gemäß lokaler Zeit zurück. Verwenden Sie stattdessen {{jsxref("Date/getFullYear", "getFullYear()")}}.
- {{jsxref("Date.prototype.setDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß lokaler Zeit.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : Setzt das volle Jahr (z. B. 4 Ziffern für Jahre mit 4 Ziffern) für ein angegebenes Datum gemäß lokaler Zeit.
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
  - : Setzt das `Date` Objekt auf die Zeit, die durch die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC dargestellt wird. Verwenden Sie negative Zahlen für frühere Zeiten.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß universeller Zeit.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Setzt das volle Jahr (z. B. 4 Ziffern für Jahre mit 4 Ziffern) für ein angegebenes Datum gemäß universeller Zeit.
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
  - : Gibt den "Datum"-Abschnitt des `Date` als menschenlesbaren String wie `'Thu Apr 12 2018'` zurück.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Wandelt ein Datum in einen String im ISO 8601 Extended-Format um.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Gibt einen String zurück, der das `Date` mit {{jsxref("Date/toISOString", "toISOString()")}} darstellt. Gedacht für die Verwendung durch {{jsxref("JSON.stringify()")}}.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Gibt einen String mit einer ortssensitiven Darstellung des Datumsabschnitts dieses Datums basierend auf Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer ortssensitiven Darstellung dieses Datums zurück. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}} Methode.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Gibt einen String mit einer ortssensitiven Darstellung des Zeitabschnitts dieses Datums basierend auf Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toString()")}}
  - : Gibt einen String zurück, der das spezifizierte `Date` Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Gibt den "Zeit"-Abschnitt des `Date` als menschenlesbaren String zurück.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Wandelt ein Datum in einen String unter Verwendung der UTC-Zeitzone um.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Gibt den primitiven Wert eines `Date` Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}} Methode.
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : Konvertiert dieses `Date` Objekt in einen primitiven Wert.

## Beispiele

### Mehrere Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Möglichkeiten, JavaScript-Daten zu erstellen:

> [!NOTE]
> Die Erstellung eines Datums aus einem String hat viele Verhaltensinkonsistenzen. Siehe [Datum-Zeit-String-Format](#datum-zeit-string-format) für Vorsichtsmaßnahmen bei der Verwendung verschiedener Formate.

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // NICHT EMPFOHLEN: funktioniert möglicherweise nicht in allen Laufzeiten
const birthday2 = new Date("1995-12-17T03:24:00"); // Dies ist standardisiert und wird zuverlässig funktionieren
const birthday3 = new Date(1995, 11, 17); // der Monat ist 0-indexiert
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // epischen Zeitstempel übergeben
```

### Formate der return-Werte der toString-Methode

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

### Um Datum, Monat und Jahr oder Zeit zu erhalten

```js
const date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
// [0, 17, 2000] da Monate 0-indexiert sind
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
// [16, 45, 30]
```

### Interpretation zweistelliger Jahre

`new Date()` zeigt ein unerwünschtes, inkonsistentes Verhalten mit zweistelligen Jahreswerten; insbesondere, wenn ein `new Date()` Aufruf mit einem zweistelligen Jahreswert versehen wird, wird dieser Jahreswert nicht als wörtliches Jahr behandelt und verwendet, sondern als relativer Offset interpretiert — in einigen Fällen als ein Offset vom Jahr `1900`, in anderen als ein Offset vom Jahr `2000`.

```js
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Veraltete Methode; interpretiert immer zweistellige Jahreswerte relativ zu 1900
date.setYear(98);
date.toString(); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22);
date.toString(); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
```

Um also Daten zwischen den Jahren `0` und `99` zu erstellen und zu erhalten, verwenden Sie stattdessen die bevorzugten {{jsxref("Date/setFullYear", "setFullYear()")}} und {{jsxref("Date/getFullYear", "getFullYear()")}} Methoden:.

```js
// Bevorzugte Methode; interpretiert nie einen Wert als relativen Offset,
// sondern verwendet den Jahreswert unverändert
date.setFullYear(98);
date.getFullYear(); // 98 (nicht 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (nicht 1922, nicht 2022)
```

### Berechnung der verstrichenen Zeit

Die folgenden Beispiele zeigen, wie die verstrichene Zeit zwischen zwei JavaScript-Daten in Millisekunden bestimmt werden kann.

Aufgrund der unterschiedlichen Längen von Tagen (aufgrund der Sommerzeitumstellung), Monaten und Jahren erfordert das Ausdrücken der verstrichenen Zeit in Einheiten, die größer als Stunden, Minuten und Sekunden sind, eine Vielzahl von Überlegungen, und sollte gründlich erforscht werden, bevor es versucht wird.

```js
// Mit Date-Objekten
const start = Date.now();

// Das Ereignis, das Zeit in Anspruch nimmt, geht hier hin:
doSomethingForALongTime();
const end = Date.now();
const elapsed = end - start; // verstrichene Zeit in Millisekunden
```

```js
// Mit eingebauten Methoden
const start = new Date();

// Das Ereignis, das Zeit in Anspruch nimmt, geht hier hin:
doSomethingForALongTime();
const end = new Date();
const elapsed = end.getTime() - start.getTime(); // verstrichene Zeit in Millisekunden
```

```js
// Um eine Funktion zu testen und deren Rückgabewert zu erhalten
function printElapsedTime(testFn) {
  const startTime = Date.now();
  const result = testFn();
  const endTime = Date.now();

  console.log(`Verstrichene Zeit: ${String(endTime - startTime)} Millisekunden`);
  return result;
}

const yourFunctionReturn = printElapsedTime(yourFunction);
```

> [!NOTE]
> In Browsern, die das {{domxref("Performance API", "", "", "nocode")}}'s hochauflösende Zeitfunktion unterstützen, kann {{domxref("Performance.now()")}} zuverlässigere und genauere Messungen der verstrichenen Zeit als {{jsxref("Date.now()")}} bieten.

### Die Anzahl der Sekunden seit der ECMAScript-Epoche erhalten

```js
const seconds = Math.floor(Date.now() / 1000);
```

In diesem Fall ist es wichtig, nur eine ganze Zahl zurückzugeben - daher reicht eine einfache Division nicht aus. Es ist auch wichtig, nur tatsächlich verstrichene Sekunden zurückzugeben. (Deshalb verwendet dieser Code {{jsxref("Math.floor()")}} und _nicht_ {{jsxref("Math.round()")}}.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date/Date", "Date()")}}
