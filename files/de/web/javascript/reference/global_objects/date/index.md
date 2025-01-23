---
title: Datum
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}

JavaScript-**`Date`**-Objekte repräsentieren einen einzelnen Moment in der Zeit in einem plattformunabhängigen Format. `Date`-Objekte kapseln eine ganzzahlige Zahl, die Millisekunden seit Mitternacht zu Beginn des 1. Januar 1970, UTC (der _Epoche_), darstellt.

> [!NOTE]
> Mit der Einführung der {{jsxref("Temporal")}}-API wird das `Date`-Objekt als ein veraltetes Merkmal angesehen. Erwägen Sie, `Temporal` für neuen Code zu verwenden und migrieren Sie vorhandenen Code, wenn möglich, darauf (siehe die [Browser-Kompatibilität](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#browser_compatibility). Wir werden bald einen Anwendungsleitfaden schreiben!

## Beschreibung

### Die Epoche, Zeitstempel und ungültiges Datum

Ein JavaScript-Datum wird grundsätzlich als die Zeit in Millisekunden angegeben, die seit der [Epoche](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) vergangen ist. Diese wird als die Mitternacht zu Beginn des 1. Januar 1970, UTC (entspricht der {{Glossary("Unix_time", "UNIX-Epoche")}}), definiert. Dieser Zeitstempel ist _zeitzonenunabhängig_ und definiert einen Moment in der Geschichte eindeutig.

> [!NOTE]
> Während der Zeitwert im Kern eines `Date`-Objekts UTC ist, arbeiten die grundlegenden Methoden zum Abrufen des Datums und der Zeit oder ihrer Komponenten alle in der lokalen Zeit (d. h. der Zeitzone und dem Offset des Host-Systems).

Der maximale Zeitstempel, der durch ein `Date`-Objekt darstellbar ist, ist etwas kleiner als die maximale sichere Ganzzahl ({{jsxref("Number.MAX_SAFE_INTEGER")}}, das sind 9.007.199.254.740.991). Ein `Date`-Objekt kann ein Maximum von ±8.640.000.000.000.000 Millisekunden oder ±100.000.000 (einhundert Millionen) Tage relativ zur Epoche repräsentieren. Dies ist der Bereich vom 20. April 271821 v. Chr. bis zum 13. September 275760 n. Chr. Jeder Versuch, eine Zeit außerhalb dieses Bereichs darzustellen, führt dazu, dass das `Date`-Objekt einen Zeitstempelwert von [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) hält, was ein "Ungültiges Datum" ist.

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

Es gibt verschiedene Methoden, die es Ihnen ermöglichen, mit dem in der Datumsangabe gespeicherten Zeitstempel zu interagieren:

- Sie können direkt mit dem Zeitstempelwert unter Verwendung der Methoden {{jsxref("Date/getTime", "getTime()")}} und {{jsxref("Date/setTime", "setTime()")}} interagieren.
- Die Methoden {{jsxref("Date/valueOf", "valueOf()")}} und [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"number"` übergeben wird) — die automatisch bei [Zahlentyp-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) aufgerufen werden — geben den Zeitstempel zurück, wodurch `Date`-Objekte sich wie ihre Zeitstempel verhalten, wenn sie in Zahl-Kontexten verwendet werden.
- Alle statischen Methoden ({{jsxref("Date.now()")}}, {{jsxref("Date.parse()")}}, und {{jsxref("Date.UTC()")}}) geben Zeitstempel statt `Date`-Objekte zurück.
- Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit einem Zeitstempel als einzigem Argument aufgerufen werden.

### Datumskomponenten und Zeitzonen

Ein Datum wird intern als einzige Zahl, der _Zeitstempel_, dargestellt. Bei der Interaktion mit ihm muss der Zeitstempel als strukturierte Datums- und Zeitdarstellung interpretiert werden. Es gibt immer zwei Möglichkeiten, einen Zeitstempel zu interpretieren: als Lokalzeit oder als Koordinierte Weltzeit (UTC), die globale Standardzeit, die von der Weltzeitnorm definiert ist. Die lokale Zeitzone ist im Datumsobjekt nicht gespeichert, sondern wird von der Host-Umgebung (dem Gerät des Benutzers) bestimmt.

> [!NOTE]
> UTC sollte nicht mit der [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT) verwechselt werden, da sie nicht immer gleich sind — dies wird ausführlicher auf der verlinkten Wikipedia-Seite erklärt.

Zum Beispiel repräsentiert der Zeitstempel 0 einen einzigartigen Moment in der Geschichte, kann aber auf zwei Arten interpretiert werden:

- Als UTC-Zeit ist es Mitternacht zu Beginn des 1. Januar 1970, UTC,
- Als Lokalzeit in New York (UTC-5) ist es 19:00:00 am 31. Dezember 1969.

Die Methode {{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} gibt den Unterschied zwischen UTC und der Lokalzeit in Minuten zurück. Beachten Sie, dass der Zeitzonenoffset nicht nur von der aktuellen Zeitzone abhängt, sondern auch von der Zeit, die durch das `Date`-Objekt darstellt wird, aufgrund der Sommerzeit und historischer Änderungen. Im Wesentlichen ist der Zeitzonenoffset die Abweichung von der UTC-Zeit zu der durch das `Date`-Objekt darstellten Zeit und der Position der Host-Umgebung.

Es gibt zwei Gruppen von `Date`-Methoden: Eine Gruppe liest und setzt verschiedene Datumskomponenten, indem der Zeitstempel als Lokalzeit interpretiert wird, während die andere UTC verwendet.

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

Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit zwei oder mehr Argumenten aufgerufen werden. In diesem Fall werden sie als Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde in Lokalzeit interpretiert. {{jsxref("Date.UTC()")}} funktioniert ähnlich, interpretiert aber die Komponenten als UTC-Zeit und akzeptiert auch ein einziges Argument, das das Jahr darstellt.

> [!NOTE]
> Einige Methoden, einschließlich des `Date()`-Konstruktors, `Date.UTC()`, und die veralteten Methoden {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}}, interpretieren ein zweistelliges Jahr als ein Jahr in den 1900er Jahren. Zum Beispiel wird `new Date(99, 5, 24)` als 24. Juni 1999 interpretiert, nicht als 24. Juni 99. Siehe [Interpretation von zweistelligen Jahren](#interpretation_von_zweistelligen_jahren) für weitere Informationen.

Wenn ein Segment seinen erwarteten Bereich überschreitet oder unterschreitet, wird es normalerweise "übertragen" oder "ausgeliehen" von dem höheren Segment. Zum Beispiel, wenn der Monat auf 12 gesetzt wird (Monate sind nullbasiert, Dezember ist also 11), wird es Januar des nächsten Jahres. Wenn der Tag des Monats auf 0 gesetzt wird, wird es der letzte Tag des Vormonats. Dies gilt auch für Daten, die im [Datum-Zeit-String-Format](#datum-zeit-string-format) angegeben sind.

### Datum-Zeit-String-Format

Es gibt viele Möglichkeiten, ein Datum als String zu formatieren. Die JavaScript-Spezifikation gibt nur ein Format an, das universell unterstützt wird: das [_Datum-Zeit-String-Format_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), eine Vereinfachung des ISO 8601-Kalenderdatums-Erweiterungsformats. Das Format lautet wie folgt:

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` ist das Jahr, mit vier Ziffern (`0000` bis `9999`), oder als _erweitertes Jahr_ mit `+` oder `-` gefolgt von sechs Ziffern. Das Zeichen ist für erweiterte Jahre erforderlich. `-000000` ist ausdrücklich als gültiges Jahr ausgeschlossen.
- `MM` ist der Monat, mit zwei Ziffern (`01` bis `12`). Standardmäßig `01`.
- `DD` ist der Tag des Monats, mit zwei Ziffern (`01` bis `31`). Standardmäßig `01`.
- `T` ist ein literales Zeichen, das den Beginn des _Zeit_-Teils des Strings anzeigt. Das `T` ist erforderlich, wenn der Zeitteil angegeben wird.
- `HH` ist die Stunde, mit zwei Ziffern (`00` bis `23`). Als Sonderfall ist `24:00:00` erlaubt und wird als Mitternacht zu Beginn des nächsten Tages interpretiert. Standardmäßig `00`.
- `mm` ist die Minute, mit zwei Ziffern (`00` bis `59`). Standardmäßig `00`.
- `ss` ist die Sekunde, mit zwei Ziffern (`00` bis `59`). Standardmäßig `00`.
- `sss` ist die Millisekunde, mit drei Ziffern (`000` bis `999`). Standardmäßig `000`.
- `Z` ist der Zeitzonenoffset, der entweder das literale Zeichen `Z` (indiziert UTC) sein kann oder `+` oder `-` gefolgt von `HH:mm`, der Abweichung in Stunden und Minuten von UTC.

Verschiedene Komponenten können weggelassen werden, sodass die folgenden alle gültig sind:

- Nur-Datum-Form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Datum-Zeit-Form: eine der oben genannten Nur-Datum-Formen, gefolgt von `T`, gefolgt von `HH:mm`, `HH:mm:ss` oder `HH:mm:ss.sss`. Jede Kombination kann von einem Zeitzonenoffset gefolgt werden.

Zum Beispiel sind `"2011-10-10"` (_Nur-Datum_-Form), `"2011-10-10T14:48:00"` (_Datum-Zeit_-Form) oder `"2011-10-10T14:48:00.000+09:00"` (_Datum-Zeit_-Form mit Millisekunden und Zeitzone) alle gültige Datum-Zeit-Strings.

Wenn der Zeitzonenoffset fehlt, werden **Nur-Datum-Formen als UTC-Zeit und Datum-Zeit-Formen als Lokalzeit interpretiert.** Die Interpretation als UTC-Zeit ist auf einen historischen Spezifikationsfehler zurückzuführen, der nicht mit ISO 8601 konsistent war, aber aufgrund der Webkompatibilität nicht geändert werden konnte. Siehe [Broken Parser – A Web Reality Issue](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

{{jsxref("Date.parse()")}} und der {{jsxref("Date/Date", "Date()")}}-Konstruktor akzeptieren beide Strings im Datum-Zeit-String-Format als Eingabe. Darüber hinaus dürfen Implementierungen andere Datumsformate unterstützen, wenn die Eingabe diesem Format nicht entspricht.

Die Methode {{jsxref("Date/toISOString", "toISOString()")}} gibt eine Zeichenfolgenrepräsentation des Datums im Datum-Zeit-String-Format zurück, wobei der Zeitzonenoffset immer auf `Z` (UTC) gesetzt ist.

> [!NOTE]
> Es wird empfohlen, sicherzustellen, dass Ihre Eingaben dem oben genannten Datum-Zeit-String-Format entsprechen, um maximale Kompatibilität zu gewährleisten, da die Unterstützung für andere Formate nicht garantiert ist. Es gibt jedoch einige Formate, die in allen großen Implementierungen unterstützt werden, wie etwa das {{rfc(2822)}}-Format, in welchem Fall deren Verwendung akzeptabel sein kann. Führen Sie immer [plattformspezifische Tests](/de/docs/Learn_web_development/Extensions/Testing) durch, um sicherzustellen, dass Ihr Code in allen Zielbrowsern funktioniert. Eine Bibliothek kann helfen, wenn viele verschiedene Formate berücksichtigt werden sollen.

Nicht-standardisierte Zeichenfolgen können nach Belieben von der Implementierung analysiert werden, einschließlich der Zeitzone — die meisten Implementierungen verwenden standardmäßig die lokale Zeitzone. Implementierungen sind nicht verpflichtet, für nicht im Bereich befindliche Datumsbestandteile ein ungültiges Datum zurückzugeben, obwohl sie das normalerweise tun. Eine Zeichenfolge kann aus Bestandteilen innerhalb des Bereichs bestehen (mit den oben definierten Grenzen), aber kein Datum in der Realität darstellen (zum Beispiel "30. Februar"). Implementierungen verhalten sich in diesem Fall inkonsistent. Die Seite [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples) bietet mehr Beispiele zu diesen nicht-standardisierten Fällen.

### Andere Wege zum Formatieren eines Datums

- {{jsxref("Date/toISOString", "toISOString()")}} gibt einen String im Format `1970-01-01T00:00:00.000Z` zurück (das oben eingeführte Datum-Zeit-String-Format, das eine vereinfachte [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) ist). {{jsxref("Date/toJSON", "toJSON()")}} ruft `toISOString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toString", "toString()")}} gibt einen String im Format `Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)` zurück, während {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} den Datum- bzw. den Zeitteil des Strings zurückgeben. [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"string"` oder `"default"` übergeben wird) ruft `toString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toUTCString", "toUTCString()")}} gibt einen String im Format `Thu, 01 Jan 1970 00:00:00 GMT` zurück (verallgemeinertes {{rfc(7231)}}).
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}, {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}, und {{jsxref("Date/toLocaleString", "toLocaleString()")}} verwenden lokalisierungsspezifische Datums- und Zeitformate, die normalerweise von der [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl)-API bereitgestellt werden.

Siehe den Abschnitt [Formate der Rückgabewerte der toString-Methode](#formate_der_rückgabewerte_von_tostring-methoden) für Beispiele.

## Konstruktor

- {{jsxref("Date/Date", "Date()")}}
  - : Wenn als Konstruktor aufgerufen, gibt er ein neues `Date`-Objekt zurück. Wenn als Funktion aufgerufen, gibt er eine Zeichenfolgenrepräsentation des aktuellen Datums und der aktuellen Zeit zurück.

## Statische Methoden

- {{jsxref("Date.now()")}}
  - : Gibt den numerischen Wert zurück, der der aktuellen Zeit entspricht — die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.parse()")}}
  - : Analysiert eine Zeichenfolgenrepräsentation eines Datums und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.UTC()")}}
  - : Akzeptiert die gleichen Parameter wie die längste Form des Konstruktors (d. h. 2 bis 7) und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Date.prototype` definiert und werden von allen `Date`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Date`-Instanzen ist der anfängliche Wert der {{jsxref("Date/Date", "Date")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Date.prototype.getDate()")}}
  - : Gibt den Tag des Monats (`1` – `31`) für das angegebene Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getDay()")}}
  - : Gibt den Wochentag (`0` – `6`) für das angegebene Datum gemäß der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für vierstellige Jahre) des angegebenen Datums gemäß der lokalen Zeit zurück.
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
  - : Gibt den numerischen Wert des angegebenen Datums als Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück. (Negative Werte werden für frühere Zeiten zurückgegeben.)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Gibt den Zeitzonen-Offset in Minuten für das aktuelle Gebietsschema zurück.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : Gibt den Tag (Datum) des Monats (`1` – `31`) im angegebenen Datum gemäß der Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : Gibt den Wochentag (`0` – `6`) im angegebenen Datum gemäß der Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für vierstellige Jahre) im angegebenen Datum gemäß der Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : Gibt die Stunden (`0` – `23`) im angegebenen Datum gemäß der Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : Gibt die Millisekunden (`0` – `999`) im angegebenen Datum gemäß der Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : Gibt die Minuten (`0` – `59`) im angegebenen Datum gemäß der Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : Gibt den Monat (`0` – `11`) im angegebenen Datum gemäß der Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : Gibt die Sekunden (`0` – `59`) im angegebenen Datum gemäß der Weltzeit zurück.
- {{jsxref("Date.prototype.getYear()")}} {{deprecated_inline}}
  - : Gibt das Jahr (normalerweise 2–3 Ziffern) im angegebenen Datum gemäß der lokalen Zeit zurück. Verwenden Sie stattdessen {{jsxref("Date/getFullYear", "getFullYear()")}}.
- {{jsxref("Date.prototype.setDate()")}}
  - : Legt den Tag des Monats für ein angegebenes Datum gemäß der lokalen Zeit fest.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : Legt das vollständige Jahr (z. B. 4 Ziffern für vierstellige Jahre) für ein angegebenes Datum gemäß der lokalen Zeit fest.
- {{jsxref("Date.prototype.setHours()")}}
  - : Legt die Stunden für ein angegebenes Datum gemäß der lokalen Zeit fest.
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : Legt die Millisekunden für ein angegebenes Datum gemäß der lokalen Zeit fest.
- {{jsxref("Date.prototype.setMinutes()")}}
  - : Legt die Minuten für ein angegebenes Datum gemäß der lokalen Zeit fest.
- {{jsxref("Date.prototype.setMonth()")}}
  - : Legt den Monat für ein angegebenes Datum gemäß der lokalen Zeit fest.
- {{jsxref("Date.prototype.setSeconds()")}}
  - : Legt die Sekunden für ein angegebenes Datum gemäß der lokalen Zeit fest.
- {{jsxref("Date.prototype.setTime()")}}
  - : Legt das `Date`-Objekt auf die durch die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC dargestellte Zeit fest. Verwenden Sie negative Zahlen für frühere Zeiten.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Legt den Tag des Monats für ein angegebenes Datum gemäß der Weltzeit fest.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Legt das vollständige Jahr (z. B. 4 Ziffern für vierstellige Jahre) für ein angegebenes Datum gemäß der Weltzeit fest.
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : Legt die Stunde für ein angegebenes Datum gemäß der Weltzeit fest.
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : Legt die Millisekunden für ein angegebenes Datum gemäß der Weltzeit fest.
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : Legt die Minuten für ein angegebenes Datum gemäß der Weltzeit fest.
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : Legt den Monat für ein angegebenes Datum gemäß der Weltzeit fest.
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : Legt die Sekunden für ein angegebenes Datum gemäß der Weltzeit fest.
- {{jsxref("Date.prototype.setYear()")}} {{deprecated_inline}}
  - : Legt das Jahr (normalerweise 2–3 Ziffern) für ein angegebenes Datum gemäß der lokalen Zeit fest. Verwenden Sie stattdessen {{jsxref("Date/setFullYear", "setFullYear()")}}.
- {{jsxref("Date.prototype.toDateString()")}}
  - : Gibt den "Datum"-Abschnitt des `Date` als einen menschenlesbaren String wie `'Thu Apr 12 2018'` zurück.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Konvertiert ein Datum in eine Stringdarstellung im ISO 8601 erweiterten Format.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Gibt einen String zurück, der das `Date` unter Verwendung von {{jsxref("Date/toISOString", "toISOString()")}} darstellt. Wird implizit von {{jsxref("JSON.stringify()")}} aufgerufen.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Gibt eine Zeichenfolge mit einer lokalitätsempfindlichen Darstellung des Datumsabschnitts dieses Datums basierend auf Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenfolge mit einer lokalitätsempfindlichen Darstellung dieses Datums zurück. Überschreibt die Methode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Gibt eine Zeichenfolge mit einer lokalitätsempfindlichen Darstellung des Zeitabschnitts dieses Datums basierend auf Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toString()")}}
  - : Gibt eine Zeichenfolgenrepräsentation des angegebenen `Date`-Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Date.prototype.toTemporalInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt mit dem gleichen Wert von {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} wie der Zeitstempel dieses Datums zurück.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Gibt den "Zeit"-Abschnitt des `Date` als einen menschenlesbaren String zurück.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Konvertiert ein Datum in eine Zeichenfolge unter Verwendung der UTC-Zeitzone.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Gibt den primitiven Wert eines `Date`-Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : Konvertiert dieses `Date`-Objekt in einen primitiven Wert.

## Beispiele

### Mehrere Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Wege, JavaScript-Daten zu erstellen:

> [!NOTE]
> Die Erstellung eines Datums aus einem String weist viele Verhaltensinkonsistenzen auf. Siehe [Datum-Zeit-String-Format](#datum-zeit-string-format) für Vorbehalte hinsichtlich der Nutzung verschiedener Formate.

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // passing epoch timestamp
```

### Formate der Rückgabewerte von toString-Methoden

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

`new Date()` zeigt unerwünschtes, inkonsistentes Verhalten mit zweistelligen Jahreswerten; speziell, wenn ein `new Date()`-Aufruf einen zweistelligen Jahreswert erhält, wird dieser nicht als buchstäbliches Jahr behandelt und wie angegeben verwendet, sondern als relativer Offset interpretiert — in manchen Fällen als ein Offset vom Jahr `1900`, in anderen Fällen als ein Offset vom Jahr `2000`.

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

Um also Daten zwischen den Jahren `0` und `99` zu erstellen und zu erhalten, verwenden Sie stattdessen die bevorzugten Methoden {{jsxref("Date/setFullYear", "setFullYear()")}} und {{jsxref("Date/getFullYear", "getFullYear()")}}.

```js
// Preferred method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date.setFullYear(98);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)
```

### Berechnung der verstrichenen Zeit

Die folgenden Beispiele zeigen, wie die verstrichene Zeit zwischen zwei JavaScript-Daten in Millisekunden ermittelt werden kann.

Aufgrund der unterschiedlichen Längen von Tagen (aufgrund von Zeitumstellungen), Monaten und Jahren erfordert die Angabe verstrichener Zeit in Einheiten größer als Stunden, Minuten und Sekunden die Adressierung zahlreicher Probleme und sollte gründlich erforscht werden, bevor sie versucht wird.

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
> In Browsern, die das Hochauflösungszeit-Feature der [Performance API](/de/docs/Web/API/Performance_API) unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) zuverlässigere und präzisere Messungen der verstrichenen Zeit als {{jsxref("Date.now()")}} bieten.

### Anzahl der Sekunden seit der ECMAScript-Epoche erhalten

```js
const seconds = Math.floor(Date.now() / 1000);
```

In diesem Fall ist es wichtig, nur eine Ganzzahl zurückzugeben, daher reicht eine einfache Division nicht aus. Es ist auch wichtig, nur tatsächlich verstrichene Sekunden zurückzugeben. (Deshalb verwendet dieser Code {{jsxref("Math.floor()")}}, und _nicht_ {{jsxref("Math.round()")}}.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date/Date", "Date()")}}
