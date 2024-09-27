---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

JavaScript **`Date`**-Objekte repräsentieren einen einzelnen Zeitpunkt in einem plattformunabhängigen Format. `Date`-Objekte kapseln eine ganze Zahl, die Millisekunden seit Mitternacht des 1. Januar 1970 UTC (der _Epoche_) darstellt.

> [!NOTE]
> TC39 arbeitet an [Temporal](https://tc39.es/proposal-temporal/docs/index.html), einer neuen Datum/Zeit-API. Lesen Sie mehr darüber im [Igalia Blog](https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/). Sie ist noch nicht für den Einsatz in der Produktion bereit!

## Beschreibung

### Die Epoche, Zeitstempel und ungültiges Datum

Ein JavaScript-Datum wird grundsätzlich als die Zeit in Millisekunden spezifiziert, die seit der [Epoche](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) verstrichen ist. Diese ist als Mitternacht des 1. Januar 1970 UTC definiert (entspricht der [UNIX-Epoche](/de/docs/Glossary/Unix_time)). Dieser Zeitstempel ist _zeitzonenunabhängig_ und definiert einzigartig einen Moment in der Geschichte.

> [!NOTE]
> Während der Zeitwert im Kern eines Date-Objekts UTC ist, arbeiten die grundlegenden Methoden zum Abrufen des Datums und der Zeit oder ihrer Komponenten alle in der lokalen (d.h. Hostsystem-) Zeitzone und Verschiebung.

Der maximale Zeitstempel, der von einem `Date`-Objekt darstellbar ist, ist etwas kleiner als die maximale sichere Ganzzahl ({{jsxref("Number.MAX_SAFE_INTEGER")}}, also 9.007.199.254.740.991). Ein `Date`-Objekt kann maximal ±8.640.000.000.000.000 Millisekunden oder ±100.000.000 (einhundert Millionen) Tage relativ zur Epoche darstellen. Dies ist der Bereich vom 20. April 271821 v. Chr. bis zum 13. September 275760 n. Chr. Jeder Versuch, eine Zeit außerhalb dieses Bereichs darzustellen, führt dazu, dass das `Date`-Objekt einen Zeitstempelwert von [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) hält, was ein "Ungültiges Datum" ist.

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

Es gibt verschiedene Methoden, die es ermöglichen, mit dem im Datum gespeicherten Zeitstempel zu interagieren:

- Sie können direkt mit dem Zeitstempelwert über die Methoden {{jsxref("Date/getTime", "getTime()")}} und {{jsxref("Date/setTime", "setTime()")}} interagieren.
- Die Methoden {{jsxref("Date/valueOf", "valueOf()")}} und [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn sie mit `"number"` aufgerufen werden) — die automatisch bei [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) aufgerufen werden — geben den Zeitstempel zurück, wodurch `Date`-Objekte wie ihre Zeitstempel in Zahl-Kontexten funktionieren.
- Alle statischen Methoden ({{jsxref("Date.now()")}}, {{jsxref("Date.parse()")}}, und {{jsxref("Date.UTC()")}}) geben Zeitstempel statt `Date`-Objekte zurück.
- Der {{jsxref("Date/Date", "Date()")}} Konstruktor kann mit einem Zeitstempel als einziges Argument aufgerufen werden.

### Datumsbestandteile und Zeitzonen

Ein Datum wird intern als eine einzelne Zahl dargestellt: der _Zeitstempel_. Wenn mit ihm interagiert wird, muss der Zeitstempel als strukturierte Datum-und-Uhrzeit-Darstellung interpretiert werden. Es gibt immer zwei Möglichkeiten, einen Zeitstempel zu interpretieren: als lokale Zeit oder als Koordinierte Weltzeit (UTC), die globale Standardzeit, die von der Weltzeitstandardisierung festgelegt wird. Die lokale Zeitzone wird nicht im Date-Objekt gespeichert, sondern vom Host-Umfeld (Gerät des Nutzers) bestimmt.

> [!NOTE]
> UTC sollte nicht mit der [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT) verwechselt werden, da sie nicht immer gleich sind — dies wird ausführlicher auf der verlinkten Wikipedia-Seite erklärt.

Beispielsweise repräsentiert der Zeitstempel 0 einen einzigartigen Moment in der Geschichte, kann aber auf zwei Weisen interpretiert werden:

- Als UTC-Zeit ist es Mitternacht am 1. Januar 1970 UTC,
- Als lokale Zeit in New York (UTC-5) ist es 19:00:00 am 31. Dezember 1969.

Die {{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}}-Methode gibt den Unterschied zwischen UTC und der lokalen Zeit in Minuten zurück. Beachten Sie, dass die Zeitzonenverschiebung nicht nur von der aktuellen Zeitzone abhängt, sondern auch von der durch das `Date`-Objekt repräsentierten Zeit, aufgrund von Sommerzeit und historischen Änderungen. Im Wesentlichen ist die Zeitzonenverschiebung die Verschiebung von der UTC-Zeit, jeweils zur durch das `Date`-Objekt repräsentierten Zeit und am Standort des Host-Umfelds.

Es gibt zwei Gruppen von `Date`-Methoden: eine Gruppe holt und setzt verschiedene Datumsbestandteile, indem der Zeitstempel als lokale Zeit interpretiert wird, während die andere UTC verwendet.

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
      <td>Tag (in der Woche)</td>
      <td>{{jsxref("Date/getDay", "getDay()")}}</td>
      <td>N/A</td>
      <td>{{jsxref("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Der {{jsxref("Date/Date", "Date()")}} Konstruktor kann mit zwei oder mehr Argumenten aufgerufen werden, in diesem Fall werden sie als Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde, jeweils in lokaler Zeit, interpretiert. {{jsxref("Date.UTC()")}} funktioniert ähnlich, aber es interpretiert die Komponenten als UTC-Zeit und akzeptiert auch ein einzelnes Argument, das das Jahr darstellt.

> [!NOTE]
> Einige Methoden, einschließlich des `Date()`-Konstruktors, `Date.UTC()` und der veralteten {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}} Methoden, interpretieren ein zweistelliges Jahr als ein Jahr in den 1900er Jahren. Zum Beispiel wird `new Date(99, 5, 24)` als 24. Juni 1999 interpretiert, nicht als 24. Juni 99. Siehe [Interpretation von zweistelligen Jahren](#interpretation_von_zweistelligen_jahren) für mehr Informationen.

Wenn ein Segment seinen erwarteten Bereich über- oder unterschreitet, "überträgt es sich normalerweise auf" oder "leiht von" dem höheren Segment. Zum Beispiel, wenn der Monat auf 12 gesetzt wird (Monate sind nullbasiert, also ist Dezember 11), wird es der Januar des nächsten Jahres. Wenn der Tag des Monats auf 0 gesetzt wird, wird es der letzte Tag des Vormonats. Dies gilt auch für mit dem [Datumszeit-String-Format](#datumszeit-string-format) angegebene Daten.

### Datumszeit-String-Format

Es gibt viele Möglichkeiten, ein Datum als String zu formatieren. Die JavaScript-Spezifikation legt nur ein Format fest, das universell unterstützt wird: das [_Datumszeit-String-Format_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), eine Vereinfachung des erweiterten ISO-8601-Kalenderdatumformats. Das Format ist wie folgt:

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` ist das Jahr, mit vier Ziffern (`0000` bis `9999`), oder als _erweitertes Jahr_ aus `+` oder `-`, gefolgt von sechs Ziffern. Das Vorzeichen ist für erweiterte Jahre erforderlich. `-000000` ist ausdrücklich als gültiges Jahr nicht zulässig.
- `MM` ist der Monat, mit zwei Ziffern (`01` bis `12`). Standardeinstellung ist `01`.
- `DD` ist der Tag des Monats, mit zwei Ziffern (`01` bis `31`). Standardeinstellung ist `01`.
- `T` ist ein Zeichen, das den Beginn des _Zeit_-Teils des Strings anzeigt. Das `T` ist beim Festlegen des Zeitteils erforderlich.
- `HH` ist die Stunde, mit zwei Ziffern (`00` bis `23`). Als Sonderfall ist `24:00:00` erlaubt und wird als Mitternacht zu Beginn des nächsten Tages interpretiert. Standardeinstellung ist `00`.
- `mm` sind die Minuten, mit zwei Ziffern (`00` bis `59`). Standardeinstellung ist `00`.
- `ss` sind die Sekunden, mit zwei Ziffern (`00` bis `59`). Standardeinstellung ist `00`.
- `sss` sind die Millisekunden, mit drei Ziffern (`000` bis `999`). Standardeinstellung ist `000`.
- `Z` ist die Zeitzonenverschiebung, die entweder das Literalzeichen `Z` (was UTC bedeutet) oder `+` oder `-` gefolgt von `HH:mm` sein kann, die Verschiebung in Stunden und Minuten von UTC.

Verschiedene Komponenten können weggelassen werden, sodass die folgenden alle gültig sind:

- Nur-Datum-Form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Datumszeitform: eine der oben genannten Nur-Datum-Formen, gefolgt von `T`, gefolgt von `HH:mm`, `HH:mm:ss` oder `HH:mm:ss.sss`. Jede Kombination kann von einer Zeitzonenverschiebung gefolgt sein.

Zum Beispiel sind `"2011-10-10"` (_Nur-Datum-Form_), `"2011-10-10T14:48:00"` (_Datumszeit-Form_) oder `"2011-10-10T14:48:00.000+09:00"` (\_Datumszeit-Form mit Millisekunden und Zeitzone) alle gültige Datumszeit-Strings.

Wenn die Zeitzonenverschiebung fehlt, **werden Nur-Datum-Formen als UTC-Zeit und Datumszeit-Formen als lokale Zeit interpretiert.** Dies liegt an einem historischen Spezifikationsfehler, der nicht mit ISO 8601 übereinstimmte, aber wegen der Web-Kompatibilität nicht geändert werden konnte. Siehe [Fehlerhafter Parser – Ein Web-Realitäts-Problem](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

{{jsxref("Date.parse()")}} und der {{jsxref("Date/Date", "Date()")}} Konstruktor akzeptieren beide Strings im Datumszeit-String-Format als Eingabe. Darüber hinaus dürfen Implementierungen andere Datumsformate unterstützen, wenn die Eingabe nicht diesem Format entspricht.

Die Methode {{jsxref("Date/toISOString", "toISOString()")}} gibt eine String-Darstellung des Datums im Datumszeit-String-Format zurück, wobei die Zeitzonenverschiebung immer auf `Z` (UTC) gesetzt ist.

> [!NOTE]
> Es wird empfohlen, sicherzustellen, dass die Eingabe dem obigen Datumszeit-String-Format entspricht, um maximale Kompatibilität zu gewährleisten, da die Unterstützung für andere Formate nicht garantiert ist. Es gibt jedoch einige Formate, die in allen wichtigen Implementierungen unterstützt werden — wie das {{rfc(2822)}}-Format — bei denen deren Nutzung akzeptabel sein kann. Führen Sie immer [Cross-Browser-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) durch, um sicherzustellen, dass Ihr Code in allen Zielbrowsern funktioniert. Eine Bibliothek kann helfen, wenn viele verschiedene Formate unterstützt werden sollen.

Nicht standardisierte Strings können auf jede gewünschte Weise vom Implementierer geparst werden, einschließlich der Zeitzone — die meisten Implementierungen verwenden standardmäßig die lokale Zeitzone. Implementierungen sind nicht verpflichtet, ein ungültiges Datum für außerhalb des Bereichs liegende Datumsbestandteile zurückzugeben, obwohl sie dies normalerweise tun. Ein String kann Datumsbestandteile innerhalb der Grenzen (wie oben definiert) haben, aber kein tatsächliches Datum darstellen (zum Beispiel "30. Februar"). Implementierungen verhalten sich in diesem Fall inkonsistent. Die Seite [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples) bietet mehr Beispiele zu diesen nicht standardisierten Fällen.

### Andere Möglichkeiten, ein Datum zu formatieren

- {{jsxref("Date/toISOString", "toISOString()")}} gibt einen String im Format `1970-01-01T00:00:00.000Z` zurück (das oben eingeführte Datumszeit-String-Format, das vereinfachte [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)). {{jsxref("Date/toJSON", "toJSON()")}} ruft `toISOString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toString", "toString()")}} gibt einen String im Format `Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)` zurück, während {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} die jeweilige Datums- und Zeitkomponente des Strings zurückgeben. [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"string"` oder `"default"` übergeben wird) ruft `toString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toUTCString", "toUTCString()")}} gibt einen String im Format `Thu, 01 Jan 1970 00:00:00 GMT` zurück (verallgemeinertes {{rfc(7231)}}).
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}, {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}, und {{jsxref("Date/toLocaleString", "toLocaleString()")}} verwenden lokale, spezifische Datums- und Zeitformate, die normalerweise von der [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) API bereitgestellt werden.

Siehe den Abschnitt [Formate der Rückgabewerte der toString-Methode](#formate_der_rückgabewerte_der_tostring-methode) für Beispiele.

## Konstruktor

- {{jsxref("Date/Date", "Date()")}}
  - : Gibt, wenn als Konstruktor aufgerufen, ein neues `Date`-Objekt zurück. Wenn als Funktion aufgerufen, gibt es eine String-Darstellung des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Statische Methoden

- {{jsxref("Date.now()")}}
  - : Gibt den numerischen Wert zurück, der der aktuellen Zeit entspricht — die Anzahl von Millisekunden seit dem 1. Januar 1970 00:00:00 UTC, mit ignorierten Schaltsekunden.
- {{jsxref("Date.parse()")}}
  - : Parsiert eine String-Darstellung eines Datums und gibt die Anzahl von Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, mit ignorierten Schaltsekunden.
- {{jsxref("Date.UTC()")}}
  - : Nimmt dieselben Parameter wie die längste Form des Konstruktors (d. h. 2 bis 7) und gibt die Anzahl von Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, mit ignorierten Schaltsekunden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Date.prototype` definiert und werden von allen `Date`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Date`-Instanzen ist der Anfangswert der {{jsxref("Date/Date", "Date")}} Konstruktor.

## Instanzmethoden

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
  - : Gibt den numerischen Wert des angegebenen Datums als die Anzahl von Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück. (Negative Werte werden für frühere Zeiten zurückgegeben.)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Gibt die Zeitzonenverschiebung in Minuten für das aktuelle Gebietsschema zurück.
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
  - : Setzt das volle Jahr (z.B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum gemäß lokaler Zeit.
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
  - : Setzt das `Date`-Objekt auf die durch die Anzahl von Millisekunden seit dem 1. Januar 1970 00:00:00 UTC repräsentierte Zeit. Verwenden Sie negative Zahlen für frühere Zeiten.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß Weltzeit.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Setzt das volle Jahr (z.B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum gemäß Weltzeit.
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : Setzt die Stunde für ein angegebenes Datum gemäß Weltzeit.
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : Setzt die Millisekunden für ein angegebenes Datum gemäß Weltzeit.
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : Setzt die Minuten für ein angegebenes Datum gemäß Weltzeit.
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : Setzt den Monat für ein angegebenes Datum gemäß Weltzeit.
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : Setzt die Sekunden für ein angegebenes Datum gemäß Weltzeit.
- {{jsxref("Date.prototype.setYear()")}} {{deprecated_inline}}
  - : Setzt das Jahr (normalerweise 2–3 Ziffern) für ein angegebenes Datum gemäß lokaler Zeit. Verwenden Sie stattdessen {{jsxref("Date/setFullYear", "setFullYear()")}}.
- {{jsxref("Date.prototype.toDateString()")}}
  - : Gibt den "Datum"-Teil des `Date` als einen menschenlesbaren String wie `'Thu Apr 12 2018'` zurück.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Wandelt ein Datum in einen String nach dem ISO 8601 Extended Format um.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Gibt einen String zurück, der das `Date` mittels {{jsxref("Date/toISOString", "toISOString()")}} darstellt. Gedacht für die Verwendung durch {{jsxref("JSON.stringify()")}}.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Gibt einen String mit einer lokalitätsspezifischen Darstellung des Datumsanteils dieses Datums basierend auf Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer lokalitätsspezifischen Darstellung dieses Datums zurück. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}} Methode.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Gibt einen String mit einer lokalitätsspezifischen Darstellung des Zeitanteils dieses Datums, basierend auf Systemeinstellungen, zurück.
- {{jsxref("Date.prototype.toString()")}}
  - : Gibt einen String zurück, der das spezifische `Date`-Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Gibt den "Uhrzeit"-Teil des `Date` als einen menschenlesbaren String zurück.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Wandelt ein Datum in einen String unter Verwendung der UTC-Zeitzone um.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Gibt den primitiven Wert eines `Date`-Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}} Methode.
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : Wandelt dieses `Date`-Objekt in einen primitiven Wert um.

## Beispiele

### Mehrere Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Wege, JavaScript-Daten zu erstellen:

> [!NOTE]
> Das Erstellen eines Datums aus einem String hat viele inkonsistente Verhaltensweisen. Siehe [Datumszeit-String-Format](#datumszeit-string-format) für Hinweise zur Verwendung verschiedener Formate.

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

### Um Datum, Monat und Jahr oder Zeit zu bekommen

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

### Interpretation von zweistelligen Jahren

`new Date()` zeigt altes unerwünschtes, inkonsistentes Verhalten bei zweistelligen Jahreswerten; spezifisch, wenn ein `new Date()`-Aufruf einen zweistelligen Jahreswert erhält, wird dieser nicht als wörtliches Jahr behandelt und unverändert verwendet, sondern stattdessen als relativer Offset interpretiert — in einigen Fällen als Offset vom Jahr `1900`, aber in anderen Fällen als Offset vom Jahr `2000`.

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

Um also Daten zwischen den Jahren `0` und `99` zu erstellen und zu erhalten, verwenden Sie stattdessen die bevorzugten {{jsxref("Date/setFullYear", "setFullYear()")}} und {{jsxref("Date/getFullYear", "getFullYear()")}} Methoden:

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

Aufgrund der unterschiedlichen Längen von Tagen (wegen Sommerzeitumstellung), Monaten und Jahren erfordert das Ausdrücken der verstrichenen Zeit in Einheiten größer als Stunden, Minuten und Sekunden die Berücksichtigung einer Vielzahl von Problemen und sollte gründlich recherchiert werden, bevor es ausprobiert wird.

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
> In Browsern, die das Hochauflösungszeit-Feature der [Performance-API](/de/docs/Web/API/Performance_API) unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) verlässlichere und genauere Messungen der verstrichenen Zeit als {{jsxref("Date.now()")}} bieten.

### Die Anzahl der Sekunden seit der ECMAScript-Epoche erhalten

```js
const seconds = Math.floor(Date.now() / 1000);
```

In diesem Fall ist es wichtig, nur eine ganze Zahl zurückzugeben—daher reicht eine einfache Divison nicht aus. Es ist auch wichtig, nur tatsächlich verstrichene Sekunden zurückzugeben. (Deshalb verwendet dieser Code {{jsxref("Math.floor()")}}, und _nicht_ {{jsxref("Math.round()")}}.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date/Date", "Date()")}}
