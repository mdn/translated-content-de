---
title: Datum
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{JSRef}}

JavaScript **`Date`** Objekte repräsentieren einen bestimmten Zeitpunkt in einem plattformunabhängigen Format. `Date` Objekte kapseln eine Ganzzahl, die Millisekunden seit Mitternacht am Anfang des 1. Januar 1970, UTC (der _Epoche_) repräsentiert.

> [!NOTE]
> TC39 arbeitet an [Temporal](https://tc39.es/proposal-temporal/docs/index.html), einer neuen Datums- und Zeit-API. Lesen Sie mehr darüber im [Igalia-Blog](https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/). Diese ist noch nicht für den produktiven Einsatz bereit!

## Beschreibung

### Die Epoche, Zeitstempel und Ungültiges Datum

Ein JavaScript-Datum wird grundsätzlich als die Zeit in Millisekunden seit der [Epoche](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) spezifiziert, die als Mitternacht am Anfang des 1. Januar 1970 UTC (äquivalent zur {{Glossary("Unix_time", "UNIX-Epoche")}}) definiert ist. Dieser Zeitstempel ist _zeitzonenunabhängig_ und definiert eindeutig einen Moment in der Geschichte.

> [!NOTE]
> Obwohl der Zeitwert im Herzen eines Date-Objekts UTC ist, arbeiten die grundlegenden Methoden, um Datum und Uhrzeit oder deren Komponenten abzurufen, alle in der lokalen (d.h. Hostsystem-) Zeitzone und Offset.

Der maximale Zeitstempel, der von einem `Date`-Objekt darstellbar ist, ist etwas kleiner als die maximale sichere Ganzzahl ({{jsxref("Number.MAX_SAFE_INTEGER")}}, das sind 9.007.199.254.740.991). Ein `Date`-Objekt kann maximal ±8.640.000.000.000.000 Millisekunden oder ±100.000.000 (einhundert Millionen) Tage relativ zur Epoche darstellen. Dies entspricht dem Bereich vom 20. April 271821 v. Chr. bis zum 13. September 275760 n. Chr. Jede Versuche, eine Zeit außerhalb dieses Bereichs darzustellen, resultiert darin, dass das `Date`-Objekt einen Zeitstempelwert von [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) enthält, was ein "Ungültiges Datum" ist.

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

Es gibt verschiedene Methoden, die Ihnen den Umgang mit dem im Datum gespeicherten Zeitstempel ermöglichen:

- Sie können mit dem Zeitstempelwert direkt über die Methoden {{jsxref("Date/getTime", "getTime()")}} und {{jsxref("Date/setTime", "setTime()")}} interagieren.
- Die Methoden {{jsxref("Date/valueOf", "valueOf()")}} und [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"number"` übergeben wird) — die automatisch bei der [Zahlenerzwingung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) aufgerufen werden — geben den Zeitstempel zurück, wodurch `Date`-Objekte sich wie ihre Zeitstempel in Zahlkontexten verhalten.
- Alle statischen Methoden ({{jsxref("Date.now()")}}, {{jsxref("Date.parse()")}}, und {{jsxref("Date.UTC()")}}) geben Zeitstempel statt `Date`-Objekten zurück.
- Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit einem Zeitstempel als einzigem Argument aufgerufen werden.

### Datumsbestandteile und Zeitzonen

Ein Datum wird intern als einzelne Zahl dargestellt, der _Zeitstempel_. Beim Interagieren mit diesem muss der Zeitstempel als strukturierte Datums- und Zeitdarstellung interpretiert werden. Es gibt immer zwei Möglichkeiten, einen Zeitstempel zu interpretieren: als lokale Zeit oder als koordinierte Weltzeit (UTC), dem globalen Standardzeitformat, das durch die Weltzeitstandards definiert wird. Die lokale Zeitzone wird nicht im Datumsobjekt gespeichert, sondern wird durch die Hostumgebung (Benutzergerät) bestimmt.

> [!NOTE]
> UTC soll nicht mit der [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT) verwechselt werden, da sie nicht immer identisch sind — dies wird ausführlicher auf der verlinkten Wikipedia-Seite erklärt.

Zum Beispiel repräsentiert der Zeitstempel 0 einen einzigartigen Moment in der Geschichte, aber er kann auf zwei Arten interpretiert werden:

- Als UTC-Zeit ist es Mitternacht zu Beginn des 1. Januar 1970 UTC,
- Als lokale Zeit in New York (UTC-5) ist es 19:00:00 am 31. Dezember 1969.

Die Methode {{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} gibt den Unterschied zwischen UTC und der lokalen Zeit in Minuten zurück. Beachten Sie, dass der Zeitzonenoffset nicht nur von der aktuellen Zeitzone abhängt, sondern auch von der durch das `Date`-Objekt repräsentierten Zeit, aufgrund der Sommerzeit und historischer Änderungen. Wesentlich ist der Zeitzonenoffset der Offset von UTC-Zeit, zu der durch das `Date`-Objekt repräsentierten Zeit und am Standort der Hostumgebung.

Es gibt zwei Gruppen von `Date`-Methoden: eine Gruppe holt und setzt verschiedene Datumsbestandteile durch Interpretation des Zeitstempels als lokale Zeit, während die andere UTC verwendet.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2">Bestandteil</th>
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
      <td>N/V</td>
      <td>{{jsxref("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>N/V</td>
    </tr>
  </tbody>
</table>

Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit zwei oder mehr Argumenten aufgerufen werden, wobei diese als Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde im lokalen Zeitformat interpretiert werden. {{jsxref("Date.UTC()")}} funktioniert ähnlich, interpretiert die Komponenten jedoch als UTC-Zeit und akzeptiert auch ein einziges Argument, das das Jahr repräsentiert.

> [!NOTE]
> Einige Methoden, einschließlich des `Date()`-Konstruktors, `Date.UTC()`, und der veralteten {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}}-Methoden, interpretieren ein zweistelliges Jahr als Jahr in den 1900er Jahren. Zum Beispiel wird `new Date(99, 5, 24)` als 24. Juni 1999 interpretiert, nicht als 24. Juni 99. Siehe [Interpretation von zweistelligen Jahren](#interpretation_von_zweistelligen_jahren) für mehr Informationen.

Wenn ein Segment seinen erwarteten Bereich überschreitet oder unterschreitet, "überträgt" es üblicherweise zum oder "borgt" von dem höheren Segment. Zum Beispiel, wenn der Monat auf 12 gesetzt wird (die Monate sind nullbasiert, also ist Dezember 11), wird es zum Januar des nächsten Jahres. Wenn der Tag des Monats auf 0 gesetzt wird, wird es der letzte Tag des vorherigen Monats. Dies gilt auch für Daten, die mit dem Format [Date Time String](#date_time_string_format) angegeben sind.

### Date Time String Format

Es gibt viele Möglichkeiten, ein Datum als Zeichenfolge zu formatieren. Die JavaScript-Spezifikation gibt nur ein Format an, das universell unterstützt werden muss: das [_Date Time String Format_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), eine Vereinfachung des erweiterten Kalenderdatumsformats ISO 8601. Das Format ist wie folgt:

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` ist das Jahr, mit vier Ziffern (`0000` bis `9999`), oder als _erweitertes Jahr_ von `+` oder `-` gefolgt von sechs Ziffern. Das Vorzeichen ist für erweiterte Jahre erforderlich. `-000000` ist ausdrücklich als gültiges Jahr ausgeschlossen.
- `MM` ist der Monat, mit zwei Ziffern (`01` bis `12`). Standard ist `01`.
- `DD` ist der Tag des Monats, mit zwei Ziffern (`01` bis `31`). Standard ist `01`.
- `T` ist ein wörtliches Zeichen, das den Beginn des _Zeit_-Teils der Zeichenkette angibt. Das `T` ist erforderlich, wenn der Zeitteil angegeben wird.
- `HH` ist die Stunde, mit zwei Ziffern (`00` bis `23`). Ein Sonderfall ist `24:00:00`, das als Mitternacht am Anfang des nächsten Tages interpretiert wird. Standard ist `00`.
- `mm` ist die Minute, mit zwei Ziffern (`00` bis `59`). Standard ist `00`.
- `ss` ist die Sekunde, mit zwei Ziffern (`00` bis `59`). Standard ist `00`.
- `sss` ist die Millisekunde, mit drei Ziffern (`000` bis `999`). Standard ist `000`.
- `Z` ist der Zeitzonen-Offset, der entweder das wörtliche Zeichen `Z` (was UTC anzeigt) sein kann oder `+` oder `-`, gefolgt von `HH:mm`, dem Offset in Stunden und Minuten von UTC.

Verschiedene Komponenten können ausgelassen werden, sodass Folgendes alles gültig ist:

- Nur-Datum-Form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Datums-Zeit-Form: eine der oben genannten Nur-Datum-Formen, gefolgt von `T`, gefolgt von `HH:mm`, `HH:mm:ss`, oder `HH:mm:ss.sss`. Jede Kombination kann von einem Zeitzonen-Offset gefolgt sein.

Zum Beispiel sind `"2011-10-10"` (_Nur-Datum-Form_), `"2011-10-10T14:48:00"` (_Datums-Zeit-Form_) oder `"2011-10-10T14:48:00.000+09:00"` (\_Datums-Zeit-Form mit Millisekunden und Zeitzone) alle gültige Datums-Zeit-Zeichenfolgen.

Wenn der Zeitzonen-Offset fehlt, **werden Nur-Datum-Formen als UTC-Zeit interpretiert und Datums-Zeit-Formen als lokale Zeit interpretiert.** Die Interpretation als UTC-Zeit ist auf einen historischen Spezifikationsfehler zurückzuführen, der mit ISO 8601 nicht konsistent war, aber aufgrund der Web-Kompatibilität nicht geändert werden konnte. Siehe [Fehlerhafter Parser – Ein Problem der Web-Realität](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

{{jsxref("Date.parse()")}} und der {{jsxref("Date/Date", "Date()")}}-Konstruktor akzeptieren beide Zeichenfolgen im Date Time String Format als Eingabe. Darüber hinaus dürfen Implementierungen andere Datumsformate unterstützen, wenn die Eingabe nicht mit diesem Format übereinstimmt.

Die Methode {{jsxref("Date/toISOString", "toISOString()")}} gibt eine Zeichenfolgenrepräsentation des Datums im Date Time String Format zurück, wobei der Zeitzonen-Offset immer `Z` (UTC) gesetzt ist.

> [!NOTE]
> Es wird empfohlen, sicherzustellen, dass Ihre Eingaben dem oben beschriebenen Date Time String Format entsprechen, um maximale Kompatibilität zu gewährleisten, da die Unterstützung anderer Formate nicht garantiert ist. Es gibt jedoch einige Formate, die in allen großen Implementierungen unterstützt werden — wie das {{rfc(2822)}}-Format — wobei deren Verwendung akzeptabel sein kann. Führen Sie immer [Cross-Browser-Tests](/de/docs/Learn_web_development/Extensions/Testing) durch, um sicherzustellen, dass Ihr Code in allen Zielbrowsern funktioniert. Eine Bibliothek kann helfen, wenn viele verschiedene Formate berücksichtigt werden sollen.

Nicht-standardisierte Zeichenfolgen können auf jede gewünschte Weise von der Implementierung analysiert werden, einschließlich der Zeitzone — die meisten Implementierungen verwenden standardmäßig die lokale Zeitzone. Implementierungen sind nicht verpflichtet, ein ungültiges Datum für nicht zulässige Datumskomponenten zurückzugeben, obwohl sie dies normalerweise tun. Eine Zeichenfolge kann in-Bounds Datumskomponenten haben (mit den oben definierten Grenzen), jedoch kein Datum in der Realität darstellen (zum Beispiel "30. Februar"). Implementierungen verhalten sich in diesem Fall inkonsistent. Die Seite [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples) bietet mehr Beispiele zu diesen nicht-standardisierten Fällen.

### Andere Möglichkeiten, ein Datum zu formatieren

- {{jsxref("Date/toISOString", "toISOString()")}} gibt eine Zeichenfolge im Format `1970-01-01T00:00:00.000Z` zurück (das oben eingeführte Date Time String Format, das eine vereinfachte [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) ist). {{jsxref("Date/toJSON", "toJSON()")}} ruft `toISOString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toString", "toString()")}} gibt eine Zeichenfolge im Format `Thu Jan 01 1970 00:00:00 GMT+0000 (Koordinierte Weltzeit)` zurück, während {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} die jeweiligen Datums- und Zeitteile der Zeichenfolge zurückgeben. [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"string"` oder `"default"` übergeben wird) ruft `toString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toUTCString", "toUTCString()")}} gibt eine Zeichenfolge im Format `Thu, 01 Jan 1970 00:00:00 GMT` zurück (generalisierter {{rfc(7231)}}).
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}, {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}, und {{jsxref("Date/toLocaleString", "toLocaleString()")}} verwenden lokale datums- und zeitformatspezifische Darstellungen, die üblicherweise von der [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) API bereitgestellt werden.

Siehe den Abschnitt [Formate der Rückgabewerte der toString-Methode](#formate_der_rückgabewerte_der_tostring-methode) für Beispiele.

## Konstruktor

- {{jsxref("Date/Date", "Date()")}}
  - : Wenn als Konstruktor aufgerufen, gibt ein neues `Date`-Objekt zurück. Wenn als Funktion aufgerufen, gibt eine Zeichenfolgenrepräsentation des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Statische Methoden

- {{jsxref("Date.now()")}}
  - : Gibt den Nummernwert zurück, der der aktuellen Zeit entspricht — die Anzahl von Millisekunden seit dem 1. Januar 1970 00:00:00 UTC, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.parse()")}}
  - : Analysiert eine Zeichenfolgenrepräsentation eines Datums und gibt die Anzahl von Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.UTC()")}}
  - : Akzeptiert die gleichen Parameter wie die längste Form des Konstruktors (d.h. 2 bis 7) und gibt die Anzahl von Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Date.prototype` definiert und werden von allen `Date`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : Die Konstruktorfunktion, die die Instanz erzeugt hat. Für `Date`-Instanzen ist der Anfangswert der {{jsxref("Date/Date", "Date")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Date.prototype.getDate()")}}
  - : Gibt den Tag des Monats (`1` – `31`) für das angegebene Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getDay()")}}
  - : Gibt den Wochentag (`0` – `6`) für das angegebene Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für 4-stellige Jahre) des angegebenen Datums gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getHours()")}}
  - : Gibt die Stunde (`0` – `23`) im angegebenen Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : Gibt die Millisekunden (`0` – `999`) im angegebenen Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getMinutes()")}}
  - : Gibt die Minuten (`0` – `59`) im angegebenen Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getMonth()")}}
  - : Gibt den Monat (`0` – `11`) im angegebenen Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getSeconds()")}}
  - : Gibt die Sekunden (`0` – `59`) im angegebenen Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getTime()")}}
  - : Gibt den numerischen Wert des angegebenen Datums als die Anzahl von Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück. (Negative Werte werden für frühere Zeiten zurückgegeben.)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Gibt den Zeitzonen-Offset in Minuten für den aktuellen Ort zurück.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : Gibt den Tag (Datum) des Monats (`1` – `31`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : Gibt den Wochentag (`0` – `6`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für 4-stellige Jahre) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : Gibt die Stunde (`0` – `23`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : Gibt die Millisekunden (`0` – `999`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : Gibt die Minuten (`0` – `59`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : Gibt den Monat (`0` – `11`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : Gibt die Sekunden (`0` – `59`) im angegebenen Datum gemäß universeller Zeit zurück.
- {{jsxref("Date.prototype.getYear()")}} {{deprecated_inline}}
  - : Gibt das Jahr (normalerweise 2–3 Ziffern) im angegebenen Datum gemäß der lokalen Zeit zurück. Verwenden Sie {{jsxref("Date/getFullYear", "getFullYear()")}} stattdessen.
- {{jsxref("Date.prototype.setDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : Setzt das volle Jahr (z.B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setHours()")}}
  - : Setzt die Stunde für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : Setzt die Millisekunden für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setMinutes()")}}
  - : Setzt die Minuten für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setMonth()")}}
  - : Setzt den Monat für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setSeconds()")}}
  - : Setzt die Sekunden für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setTime()")}}
  - : Setzt das `Date`-Objekt auf die durch die Anzahl von Millisekunden seit dem 1. Januar 1970 00:00:00 UTC dargestellte Zeit. Verwenden Sie negative Zahlen für frühere Zeiten.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß universeller Zeit.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Setzt das volle Jahr (z.B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum gemäß universeller Zeit.
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
  - : Setzt das Jahr (normalerweise 2–3 Ziffern) für ein angegebenes Datum gemäß der lokalen Zeit. Verwenden Sie {{jsxref("Date/setFullYear", "setFullYear()")}} stattdessen.
- {{jsxref("Date.prototype.toDateString()")}}
  - : Gibt den "Datum"-Teil des `Date` als menschenlesbare Zeichenfolge wie `'Thu Apr 12 2018'` zurück.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Konvertiert ein Datum in eine Zeichenfolge, die dem ISO 8601 Extended Format folgt.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Gibt eine Zeichenfolge zurück, die den `Date` unter Verwendung von {{jsxref("Date/toISOString", "toISOString()")}} darstellt. Vorgesehen für die Verwendung durch {{jsxref("JSON.stringify()")}}.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Gibt eine Zeichenfolge mit einer ortsensitiven Darstellung des Datenteils dieses Datums basierend auf den Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenfolge mit einer ortsensitiven Darstellung dieses Datums zurück. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}}-Methode.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Gibt eine Zeichenfolge mit einer ortsensitiven Darstellung des Zeitteils dieses Datums basierend auf den Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das angegebene `Date`-Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Gibt den "Zeit"-Teil des `Date` als menschenlesbare Zeichenfolge zurück.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Konvertiert ein Datum in eine Zeichenfolge unter Verwendung der UTC-Zeitzone.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Gibt den primitiven Wert eines `Date`-Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : Konvertiert dieses `Date`-Objekt in einen primitiven Wert.

## Beispiele

### Verschiedene Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Möglichkeiten, JavaScript-Daten zu erstellen:

> [!NOTE]
> Die Erstellung eines Datums aus einer Zeichenfolge weist viele Verhaltensinkonsistenzen auf. Siehe [Date Time String Format](#date_time_string_format) für Vorbehalte zur Verwendung unterschiedlicher Formate.

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

### Um Datum, Monat und Jahr oder Zeit zu erhalten

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

`new Date()` weist unerwünschtes, inkonsistentes Verhalten bei zweistelligen Jahreswerten auf; insbesondere, wenn einem `new Date()`-Aufruf ein zweistelliger Jahreswert gegeben wird, wird dieser Jahreswert nicht als wörtliches Jahr behandelt und verwendet, wie er ist, sondern wird stattdessen als relativer Offset interpretiert — in einigen Fällen als ein Offset vom Jahr `1900`, in anderen Fällen als ein Offset vom Jahr `2000`.

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

Die folgenden Beispiele zeigen, wie der verstrichene Zeitraum zwischen zwei JavaScript-Daten in Millisekunden bestimmt werden kann.

Aufgrund der unterschiedlichen Längen von Tagen (aufgrund der Umstellung auf Sommerzeit), Monaten und Jahren erfordert die Darstellung von verstrichener Zeit in Einheiten größer als Stunden, Minuten und Sekunden die Berücksichtigung einer Reihe von Problemen und sollte gründlich recherchiert werden, bevor sie versucht wird.

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
> In Browsern, die das [Performance API](/de/docs/Web/API/Performance_API) Hochauflösungszeit-Feature unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) zuverlässigere und präzisere Messungen der verstrichenen Zeit als {{jsxref("Date.now()")}} liefern.

### Die Anzahl der Sekunden seit der ECMAScript-Epoche abrufen

```js
const seconds = Math.floor(Date.now() / 1000);
```

In diesem Fall ist es wichtig, nur einen ganzzahligen Wert zurückzugeben — eine einfache Division reicht hier nicht aus. Es ist auch wichtig, nur tatsächlich verstrichene Sekunden zurückzugeben. (Deshalb verwendet dieser Code {{jsxref("Math.floor()")}} und _nicht_ {{jsxref("Math.round()")}}.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date/Date", "Date()")}}
