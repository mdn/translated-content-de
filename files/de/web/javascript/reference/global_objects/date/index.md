---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: b3840f6234d24ade72a43171fd6489dd533aaf15
---

JavaScript-**`Date`**-Objekte repräsentieren einen einzelnen Moment in der Zeit in einem plattformunabhängigen Format. `Date`-Objekte kapseln eine Ganzzahl, die Millisekunden seit Mitternacht des 1. Januar 1970, UTC (die _Epoche_) darstellt.

> [!NOTE]
> Mit der Einführung der {{jsxref("Temporal")}}-API wird das `Date`-Objekt als ein veraltetes Feature angesehen. Erwägen Sie, `Temporal` für neuen Code zu verwenden und vorhandenen Code darauf zu migrieren, wenn möglich (sehen Sie sich die [Browser-Kompatibilität](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#browser_compatibility) an. Wir werden bald einen Leitfaden zur Nutzung schreiben!

## Beschreibung

### Die Epoche, Zeitstempel und ungültige Daten

Ein JavaScript-Datum wird grundsätzlich als die Zeit in Millisekunden angegeben, die seit der [Epoche](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) vergangen ist, die als Mitternacht des 1. Januar 1970, UTC (gleichwertig zur {{Glossary("Unix_time", "UNIX-Epoche")}}) definiert ist. Dieser Zeitstempel ist _zeitzonenunabhängig_ und definiert einen einmaligen Moment in der Geschichte.

> [!NOTE]
> Während der Zeitwert im Kern eines Date-Objekts UTC ist, arbeiten die grundlegenden Methoden, um Datum und Uhrzeit oder deren Komponenten abzurufen, alle in der lokalen (d.h. des Hostsystems) Zeitzone und Verschiebung.

Der maximale Zeitstempel, der von einem `Date`-Objekt dargestellt werden kann, ist etwas kleiner als die maximale sichere Ganzzahl ({{jsxref("Number.MAX_SAFE_INTEGER")}}, was 9.007.199.254.740.991 ist). Ein `Date`-Objekt kann maximal ±8.640.000.000.000.000 Millisekunden oder ±100.000.000 (einhundert Millionen) Tage relativ zur Epoche darstellen. Dies ist der Bereich vom 20. April 271821 v. Chr. bis zum 13. September 275760 n. Chr. Jeder Versuch, eine Zeit außerhalb dieses Bereichs darzustellen, führt dazu, dass das `Date`-Objekt einen Zeitstempelwert von [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) hält, was ein "Invalid Date" (ungültiges Datum) ist.

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

Es gibt verschiedene Methoden, die Ihnen ermöglichen, mit dem im Datum gespeicherten Zeitstempel zu interagieren:

- Sie können mit dem Zeitstempelwert direkt über die Methoden {{jsxref("Date/getTime", "getTime()")}} und {{jsxref("Date/setTime", "setTime()")}} interagieren.
- Die Methoden {{jsxref("Date/valueOf", "valueOf()")}} und [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"number"` übergeben wird) — die automatisch bei [Zahlenerzwung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) aufgerufen werden — geben den Zeitstempel zurück und lassen `Date`-Objekte sich in Zahlkontexten wie ihre Zeitstempel verhalten.
- Alle statischen Methoden ({{jsxref("Date.now()")}}, {{jsxref("Date.parse()")}}, und {{jsxref("Date.UTC()")}}) geben Zeitstempel statt `Date`-Objekten zurück.
- Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit einem Zeitstempel als einziges Argument aufgerufen werden.

### Datumsbestandteile und Zeitzonen

Ein Datum wird intern als eine einzelne Zahl, der _Zeitstempel_, dargestellt. Wenn Sie mit ihm interagieren, muss der Zeitstempel als eine strukturierte Datum-und-Uhrzeit-Darstellung interpretiert werden. Es gibt immer zwei Wege, einen Zeitstempel zu interpretieren: als Ortszeit oder als koordinierte Weltzeit (UTC), der globale Standardzeit, definiert durch den internationalen Weltzeitstandard. Die lokale Zeitzone wird nicht im Datumsobjekt gespeichert, sondern vom Hostumfeld (Gerät des Benutzers) bestimmt.

> [!NOTE]
> UTC sollte nicht mit der [mittleren Greenwich-Zeit](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT) verwechselt werden, da sie nicht immer gleich sind — dies wird ausführlicher auf der verlinkten Wikipedia-Seite erklärt.

Zum Beispiel repräsentiert der Zeitstempel 0 einen einzigartigen Moment in der Geschichte, kann aber auf zwei Weisen interpretiert werden:

- Als UTC-Zeit ist es Mitternacht am Beginn des 1. Januar 1970, UTC,
- Als Ortszeit in New York (UTC-5) ist es 19:00:00 am 31. Dezember 1969.

Die Methode {{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} gibt den Unterschied zwischen UTC und der Ortszeit in Minuten zurück. Beachten Sie, dass der Zeitzonenversatz nicht nur von der aktuellen Zeitzone, sondern auch von der durch das `Date`-Objekt repräsentierten Zeit abhängt, wegen der Sommerzeit und historischer Änderungen. Im Wesentlichen ist der Zeitzonenversatz der Versatz von UTC zum Zeitpunkt, der durch das `Date`-Objekt repräsentiert wird, und am Standort des Hostumfelds.

Es gibt zwei Gruppen von `Date`-Methoden: eine Gruppe erhält und setzt verschiedene Datumsbestandteile, indem der Zeitstempel als Ortszeit interpretiert wird, während die andere UTC verwendet.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2">Komponente</th>
      <th colspan="2">Ortszeit</th>
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
      <td>k. A.</td>
      <td>{{jsxref("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>k. A.</td>
    </tr>
  </tbody>
</table>

Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit zwei oder mehr Argumenten aufgerufen werden. In diesem Fall werden sie als Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde interpretiert, jeweils in Ortszeit. {{jsxref("Date.UTC()")}} funktioniert ähnlich, interpretiert die Komponenten jedoch als UTC-Zeit und akzeptiert auch ein einziges Argument, das das Jahr darstellt.

> [!NOTE]
> Einige Methoden, einschließlich des `Date()`-Konstruktors, `Date.UTC()` und der veralteten {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}}-Methoden, interpretieren ein zweistelliges Jahr als ein Jahr in den 1900er Jahren. Zum Beispiel wird `new Date(99, 5, 24)` als 24. Juni 1999 interpretiert, nicht als 24. Juni 99. Siehe [Interpretation von zweistelligen Jahren](#interpretation_von_zweistelligen_jahren) für weitere Informationen.

Wenn ein Segment seinen erwarteten Bereich über- oder unterschreitet, "trägt es in der Regel über" oder "leiht es von" dem höheren Segment. Zum Beispiel, wenn der Monat auf 12 gesetzt wird (Monate sind nullbasiert, also ist Dezember 11), wird er zum Januar des nächsten Jahres. Wenn der Tag des Monats auf 0 gesetzt wird, wird er zum letzten Tag des vorherigen Monats. Dies gilt auch für Daten, die mit dem [Datumszeitzeichenfolgenformat](#datumszeit-zeichenfolgenformat) angegeben werden.

Beim Versuch, die Ortszeit auf eine Zeit innerhalb eines Versatzübergangs (in der Regel Sommerzeit) einzustellen, wird die genaue Zeit mithilfe des gleichen Verhaltens wie bei `Temporal`'s [`disambiguation: "compatible"`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) Option bestimmt. Das heißt, wenn die Ortszeit zwei Zeitpunkten entspricht, wird der frühere gewählt; wenn die Ortszeit nicht existiert (es gibt eine Lücke), gehen wir um die Dauer der Lücke weiter.

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

### Datumszeit-Zeichenfolgenformat

Es gibt viele Möglichkeiten, ein Datum als Zeichenfolge zu formatieren. Die JavaScript-Spezifikation legt nur ein Format fest, das universell unterstützt wird: das [_Datumszeit-Zeichenfolgenformat_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), eine Vereinfachung des erweiterten ISO 8601-Kalenderdatumsformats. Das Format ist wie folgt:

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` ist das Jahr, mit vier Ziffern (`0000` bis `9999`), oder als ein _erweitertes Jahr_ von `+` oder `-` gefolgt von sechs Ziffern. Das Zeichen ist für erweiterte Jahre erforderlich. `-000000` ist ausdrücklich als gültiges Jahr ausgeschlossen.
- `MM` ist der Monat, mit zwei Ziffern (`01` bis `12`). Standard ist `01`.
- `DD` ist der Tag des Monats, mit zwei Ziffern (`01` bis `31`). Standard ist `01`.
- `T` ist ein wörtlicher Charakter, der den Beginn des \_Zeit-\_Teils der Zeichenfolge anzeigt. Das `T` ist erforderlich, wenn der Zeitteil angegeben wird.
- `HH` ist die Stunde, mit zwei Ziffern (`00` bis `23`). Als Sonderfall ist `24:00:00` erlaubt und wird als Mitternacht am Beginn des nächsten Tages interpretiert. Standard ist `00`.
- `mm` ist die Minute, mit zwei Ziffern (`00` bis `59`). Standard ist `00`.
- `ss` ist die Sekunde, mit zwei Ziffern (`00` bis `59`). Standard ist `00`.
- `sss` ist die Millisekunde, mit drei Ziffern (`000` bis `999`). Standard ist `000`.
- `Z` ist der Zeitzonenversatz, der entweder der wörtliche Charakter `Z` (der UTC anzeigt) oder `+` oder `-` gefolgt von `HH:mm` sein kann, der Versatz in Stunden und Minuten von UTC.

Verschiedene Komponenten können weggelassen werden, also sind die folgenden alle gültig:

- Nur-Datum-Form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Datumszeit-Form: eine der oben genannten Nur-Datumsformen, gefolgt von `T`, gefolgt von `HH:mm`, `HH:mm:ss` oder `HH:mm:ss.sss`. Jede Kombination kann von einem Zeitzonenversatz gefolgt werden.

Zum Beispiel sind `"2011-10-10"` (_Nur-Datum-Form_), `"2011-10-10T14:48:00"` (_Datumszeit-Form_) oder `"2011-10-10T14:48:00.000+09:00"` (\_Datumszeit-Form mit Millisekunden und Zeitzone) alle gültige Datumszeit-Zeichenfolgen.

Wenn der Zeitzonenversatz fehlt, **werden Nur-Datum-Formen als UTC-Zeit und Datumszeit-Formen als Ortszeit interpretiert.** Die Interpretation als UTC-Zeit ist auf einen historischen Spezifikationsfehler zurückzuführen, der nicht mit ISO 8601 konsistent war, aber aufgrund der Web-Kompatibilität nicht geändert werden konnte. Siehe [Defekter Parser – Ein Web-Realitäts-Problem](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

{{jsxref("Date.parse()")}} und der {{jsxref("Date/Date", "Date()")}}-Konstruktor akzeptieren beide Zeichenfolgen im Datumszeit-Zeichenfolgenformat als Eingabe. Darüber hinaus dürfen Implementierungen andere Datumsformate unterstützen, wenn die Eingabe nicht diesem Format entspricht.

Die Methode {{jsxref("Date/toISOString", "toISOString()")}} gibt eine Zeichenfolgenrepräsentation des Datums im Datumszeit-Zeichenfolgenformat zurück, wobei der Zeitzonenversatz immer auf `Z` (UTC) gesetzt ist.

> [!NOTE]
> Sie werden ermutigt, sicherzustellen, dass Ihre Eingabe dem oben genannten Datumszeit-Zeichenfolgenformat entspricht, um maximale Kompatibilität zu gewährleisten, da die Unterstützung anderer Formate nicht garantiert ist. Es gibt jedoch einige Formate, die in allen wichtigen Implementierungen unterstützt werden — wie {{rfc(2822)}} Format — in diesem Fall kann ihre Verwendung akzeptabel sein. Führen Sie immer [Browser-übergreifende Tests](/de/docs/Learn_web_development/Extensions/Testing) durch, um sicherzustellen, dass Ihr Code in allen Zielbrowsern funktioniert. Eine Bibliothek kann helfen, wenn viele verschiedene Formate berücksichtigt werden müssen.

Nicht standardmäßige Zeichenfolgen können in jeder gewünschten Weise von der Implementierung geparst werden, einschließlich der Zeitzone — die meisten Implementierungen verwenden standardmäßig die lokale Zeitzone. Implementierungen sind nicht verpflichtet, ein ungültiges Datum für Positionen außerhalb der Grenzen zurückzugeben, auch wenn sie dies normalerweise tun. Eine Zeichenfolge kann Positionen innerhalb der Grenzen haben (mit den oben definierten Grenzen), aber keinen tatsächlichen realen Tag darstellen (zum Beispiel "Februar 30"). Implementierungen verhalten sich in diesem Fall inkonsistent. Die Seite [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples) bietet weitere Beispiele zu diesen nicht-standardmäßigen Fällen.

### Andere Möglichkeiten, ein Datum zu formatieren

- {{jsxref("Date/toISOString", "toISOString()")}} gibt eine Zeichenfolge im Format `1970-01-01T00:00:00.000Z` zurück (das oben eingeführte Datumszeit-Zeichenfolgenformat, das eine vereinfachte [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) ist). {{jsxref("Date/toJSON", "toJSON()")}} ruft `toISOString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toString", "toString()")}} gibt eine Zeichenfolge im Format `Thu Jan 01 1970 00:00:00 GMT+0000 (Koordinierte Weltzeit)` zurück, während {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} den Datums- bzw. den Zeitteil der Zeichenfolge zurückgeben. [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"string"` oder `"default"` übergeben wird) ruft `toString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toUTCString", "toUTCString()")}} gibt eine Zeichenfolge im Format `Thu, 01 Jan 1970 00:00:00 GMT` zurück (verallgemeinertes {{rfc(7231)}}).
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}, {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}, und {{jsxref("Date/toLocaleString", "toLocaleString()")}} verwenden lokalspezifische Datums- und Zeitformate, die in der Regel von der [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl)-API bereitgestellt werden.

Siehe Abschnitt [Formate der Rückgabewerte der toString-Methode](#formate_der_rückgabewerte_der_tostring-methode) für Beispiele.

## Konstruktor

- {{jsxref("Date/Date", "Date()")}}
  - : Wenn als Konstruktor aufgerufen, gibt er ein neues `Date`-Objekt zurück. Wenn als Funktion aufgerufen, gibt er eine Zeichenfolgenrepräsentation des aktuellen Datums und der aktuellen Uhrzeit zurück.

## Statische Methoden

- {{jsxref("Date.now()")}}
  - : Gibt den Zahlenwert zurück, der der aktuellen Zeit entspricht — die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.parse()")}}
  - : Parst eine Zeichenfolgenrepräsentation eines Datums und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.UTC()")}}
  - : Akzeptiert dieselben Parameter wie die längste Form des Konstruktors (d.h. 2 bis 7) und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Date.prototype` definiert und werden von allen `Date`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Date`-Instanzen ist der Anfangswert der {{jsxref("Date/Date", "Date")}}-Konstruktor.

## Instanz-Methoden

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
  - : Gibt den Zahlenwert des angegebenen Datums als die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück. (Für frühere Zeiten werden negative Werte zurückgegeben.)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Gibt den Zeitzonenversatz in Minuten für das aktuelle Gebietsschema zurück.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : Gibt den Tag (Datum) des Monats (`1` – `31`) im angegebenen Datum gemäß der Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : Gibt den Wochentag (`0` – `6`) im angegebenen Datum gemäß der Weltzeit zurück.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für 4-stellige Jahre) im angegebenen Datum gemäß der Weltzeit zurück.
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
  - : Legt das volle Jahr (z. B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum gemäß der lokalen Zeit fest.
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
  - : Legt das volle Jahr (z. B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum gemäß der Weltzeit fest.
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : Legt die Stunden für ein angegebenes Datum gemäß der Weltzeit fest.
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
  - : Gibt den "Datum"-Teil des `Date` als eine menschenlesbare Zeichenfolge wie `'Do. Apr 12 2018'` zurück.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Konvertiert ein Datum in eine Zeichenfolge gemäß dem ISO 8601-Erweiterten Format.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Gibt eine Zeichenfolge zurück, die das `Date` mit {{jsxref("Date/toISOString", "toISOString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Gibt eine Zeichenfolge mit einer gebietsschemasensitiven Darstellung des Datumsbereichs dieses Datums basierend auf Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenfolge mit einer gebietsschemasensitiven Darstellung dieses Datums zurück. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}}-Methode.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Gibt eine Zeichenfolge mit einer gebietsschemasensitiven Darstellung des Zeitbereichs dieses Datums basierend auf Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das spezifizierte `Date`-Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Date.prototype.toTemporalInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt mit dem gleichen {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}-Wert wie der [Zeitstempel](#the_epoch_timestamps_and_invalid_date) dieses Datums zurück.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Gibt den "Zeit"-Teil des `Date` als eine menschenlesbare Zeichenfolge zurück.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Konvertiert ein Datum in eine Zeichenfolge unter Verwendung der UTC-Zeitzone.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Gibt den primitiven Wert eines `Date`-Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : Konvertiert dieses `Date`-Objekt in einen primitiven Wert.

## Beispiele

### Mehrere Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen mehrere Möglichkeiten, JavaScript-Daten zu erstellen:

> [!NOTE]
> Das Erstellen eines Datums aus einer Zeichenfolge hat viele Verhaltensinkonsistenzen. Siehe [Datumszeit-Zeichenfolgenformat](#datumszeit-zeichenfolgenformat) für Warnhinweise zu unterschiedlichen Formaten.

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

### Um Datum, Monat und Jahr oder Uhrzeit zu erhalten

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

`new Date()` zeigt ein unerwünschtes, inkonsistentes Verhalten mit zweistelligen Jahreswerten; insbesondere, wenn einem Aufruf von `new Date()` ein zweistelliger Jahreswert übergeben wird, wird dieser Jahreswert nicht als wörtliches Jahr und verwendet wie eingegeben behandelt, sondern stattdessen als relativer Versatz interpretiert — in einigen Fällen als Versatz vom Jahr `1900`, aber in anderen Fällen als Versatz vom Jahr `2000`.

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

Um also Daten zwischen den Jahren `0` und `99` zu erstellen und zu erhalten, verwenden Sie stattdessen die bevorzugten Methoden {{jsxref("Date/setFullYear", "setFullYear()")}} und {{jsxref("Date/getFullYear", "getFullYear()")}}.:

```js
// Preferred method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date.setFullYear(98);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)
```

### Berechnung der verstrichenen Zeit

Die folgenden Beispiele zeigen, wie die verstrichene Zeit zwischen zwei JavaScript-Daten in Millisekunden bestimmt wird.

Aufgrund der unterschiedlichen Längen von Tagen (aufgrund der Sommerzeitumstellung), Monaten und Jahren erfordert die Ausdruck der verstrichenen Zeit in Einheiten größer als Stunden, Minuten und Sekunden die Behandlung einer Reihe von Problemen und sollte gründlich recherchiert werden, bevor sie versucht wird.

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
> In Browsern, die das Hochauflösungszeiten-Feature der [Performance-API](/de/docs/Web/API/Performance_API) unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) zuverlässigere und präzisere Messungen der verstrichenen Zeit liefern als {{jsxref("Date.now()")}}.

### Erhalten Sie die Anzahl der Sekunden seit der ECMAScript-Epoche

```js
const seconds = Math.floor(Date.now() / 1000);
```

In diesem Fall ist es wichtig, nur eine ganze Zahl zurückzugeben — daher ist eine einfache Division nicht ausreichend. Es ist auch wichtig, nur tatsächlich verstrichene Sekunden zurückzugeben. (Deshalb verwendet dieser Code {{jsxref("Math.floor()")}}, und _nicht_ {{jsxref("Math.round()")}}.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date/Date", "Date()")}}
