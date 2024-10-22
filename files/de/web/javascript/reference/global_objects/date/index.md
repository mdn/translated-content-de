---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: c6165f0e0701e637804c27e0da0b57762326d548
---

{{JSRef}}

JavaScript-**`Date`**-Objekte repräsentieren einen einzigen Moment in der Zeit in einem plattformunabhängigen Format. `Date`-Objekte kapseln eine Ganzzahl, die Millisekunden seit Mitternacht am Anfang des 1. Januar 1970, UTC (dem _Epoch_) darstellt.

> [!NOTE]
> TC39 arbeitet an [Temporal](https://tc39.es/proposal-temporal/docs/index.html), einer neuen API für Datum/Zeit. Lesen Sie mehr darüber im [Igalia-Blog](https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/). Es ist noch nicht für den produktiven Einsatz bereit!

## Beschreibung

### Der Epoch, Zeitstempel und ungültiges Datum

Ein JavaScript-Datum wird grundlegend als die Zeit in Millisekunden spezifiziert, die seit dem [Epoch](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) vergangen ist, welcher als Mitternacht am Anfang des 1. Januar 1970, UTC (äquivalent zur {{Glossary("Unix_time", "UNIX-Epoche")}}) definiert ist. Dieser Zeitstempel ist _zeitzonenunabhängig_ und definiert einen einzigartigen Moment in der Geschichte.

> [!NOTE]
> Während der Zeitwert im Herzen eines Date-Objekts UTC ist, arbeiten die grundlegenden Methoden, um das Datum und die Uhrzeit oder deren Komponenten abzurufen, alle in der lokalen (d.h. Hostsystem-) Zeitzone und dem Offset.

Der maximale Zeitstempel, der durch ein `Date`-Objekt darstellbar ist, ist leicht kleiner als die maximale sichere Ganzzahl ({{jsxref("Number.MAX_SAFE_INTEGER")}}, das sind 9.007.199.254.740.991). Ein `Date`-Objekt kann maximal ±8.640.000.000.000.000 Millisekunden oder ±100.000.000 (hundert Millionen) Tage relativ zur Epoche darstellen. Dies ist der Bereich vom 20. April 271821 v. Chr. bis zum 13. September 275760 n. Chr. Jeder Versuch, eine Zeit außerhalb dieses Bereichs darzustellen, führt dazu, dass das `Date`-Objekt einen Zeitstempelwert von [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) hält, was ein "Ungültiges Datum" ist.

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

Es gibt verschiedene Methoden, die es Ihnen ermöglichen, mit dem im Datum gespeicherten Zeitstempel zu interagieren:

- Sie können direkt mit dem Zeitstempelwert mithilfe der Methoden {{jsxref("Date/getTime", "getTime()")}} und {{jsxref("Date/setTime", "setTime()")}} interagieren.
- Die Methoden {{jsxref("Date/valueOf", "valueOf()")}} und [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"number"` übergeben wird) — die automatisch bei [Zahl-Coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) aufgerufen werden — geben den Zeitstempel zurück, was dazu führt, dass `Date`-Objekte sich wie ihre Zeitstempel verhalten, wenn sie in Zahlenkontexten verwendet werden.
- Alle statischen Methoden ({{jsxref("Date.now()")}}, {{jsxref("Date.parse()")}}, und {{jsxref("Date.UTC()")}}) geben Zeitstempel anstelle von `Date`-Objekten zurück.
- Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit einem Zeitstempel als einzigem Argument aufgerufen werden.

### Datumskomponenten und Zeitzonen

Ein Datum wird intern als eine einzige Zahl dargestellt, der _Zeitstempel_. Bei der Interaktion mit ihm muss der Zeitstempel als eine strukturierte Datums- und Uhrzeitdarstellung interpretiert werden. Es gibt immer zwei Möglichkeiten, einen Zeitstempel zu interpretieren: als lokale Zeit oder als koordinierte Weltzeit (UTC), die globale Standardzeit, die durch den Weltzeitstandard definiert ist. Die lokale Zeitzone wird nicht im Date-Objekt gespeichert, sondern durch die Hostumgebung (Gerät des Benutzers) bestimmt.

> [!NOTE]
> UTC sollte nicht mit der [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT) verwechselt werden, da sie nicht immer gleich sind — dies wird im verlinkten Wikipedia-Artikel ausführlicher erklärt.

Beispielsweise repräsentiert der Zeitstempel 0 ein einzigartiges Ereignis in der Geschichte, kann aber auf zwei Arten interpretiert werden:

- Als UTC-Zeit ist es Mitternacht am Anfang des 1. Januar 1970, UTC,
- Als lokale Zeit in New York (UTC-5) ist es 19:00:00 am 31. Dezember 1969.

Die Methode {{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} gibt die Differenz zwischen UTC und der lokalen Zeit in Minuten zurück. Beachten Sie, dass der Zeitzonenoffset nicht nur von der aktuellen Zeitzone abhängt, sondern auch von der durch das `Date`-Objekt dargestellten Zeit, aufgrund der Sommerzeit und historischer Änderungen. Im Wesentlichen ist der Zeitzonenoffset der Offset von der UTC-Zeit zur durch das `Date`-Objekt dargestellten Zeit und am Standort der Hostumgebung.

Es gibt zwei Gruppen von `Date`-Methoden: eine Gruppe ruft verschiedene Datumskomponenten ab und setzt diese, indem sie den Zeitstempel als lokale Zeit interpretiert, während die andere UTC verwendet.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2">Komponente</th>
      <th colspan="2">Lokal</th>
      <th colspan="2">UTC</th>
    </tr>
    <tr>
      <th>Holen</th>
      <th>Setzen</th>
      <th>Holen</th>
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
      <td>Wochentag</td>
      <td>{{jsxref("Date/getDay", "getDay()")}}</td>
      <td>N/A</td>
      <td>{{jsxref("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit zwei oder mehr Argumenten aufgerufen werden, in diesem Fall werden diese als Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde interpretiert, und zwar in lokaler Zeit. {{jsxref("Date.UTC()")}} funktioniert ähnlich, interpretiert die Komponenten jedoch als UTC-Zeit und akzeptiert auch ein einzelnes Argument, das das Jahr repräsentiert.

> [!NOTE]
> Einige Methoden, einschließlich des `Date()`-Konstruktors, `Date.UTC()`, und der veralteten {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}}-Methoden, interpretieren ein zweiziffriges Jahr als ein Jahr in den 1900er Jahren. Zum Beispiel wird `new Date(99, 5, 24)` als der 24. Juni 1999 interpretiert, nicht als der 24. Juni 99. Siehe [Interpretation von zweistelligen Jahreszahlen](#interpretation_von_zweistelligen_jahreszahlen) für weitere Informationen.

Wenn ein Segment seinen erwarteten Bereich über- oder unterschreitet, "trägt es normalerweise über" oder "leiht es sich von" dem höheren Segment. Beispielsweise wird, wenn der Monat auf 12 gesetzt wird (Monate sind nullbasiert, also ist Dezember Monat 11), der Januar des nächsten Jahres daraus. Wenn der Tag des Monats auf 0 gesetzt wird, wird dies der letzte Tag des vorherigen Monats. Dies gilt auch für Daten, die im [Datumszeit-String-Format](#datumszeit-string-format) angegeben sind.

### Datumszeit-String-Format

Es gibt viele Möglichkeiten, ein Datum als String zu formatieren. Die JavaScript-Spezifikation gibt nur ein Format an, das universell unterstützt werden muss: das [_Datumszeit-String-Format_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), eine Vereinfachung des ISO 8601-Kalenderdatums im erweiterten Format. Das Format ist wie folgt:

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` ist das Jahr, mit vier Ziffern (`0000` bis `9999`), oder als _erweitertes Jahr_ mit `+` oder `-` gefolgt von sechs Ziffern. Das Zeichen ist für erweiterte Jahre erforderlich. `-000000` ist explizit als gültiges Jahr ausgeschlossen.
- `MM` ist der Monat, mit zwei Ziffern (`01` bis `12`). Standard ist `01`.
- `DD` ist der Tag des Monats, mit zwei Ziffern (`01` bis `31`). Standard ist `01`.
- `T` ist ein buchstäblicher Charakter, der den Beginn des _Zeit_-Teils des Strings anzeigt. Das `T` ist erforderlich, wenn der Zeitabschnitt angegeben wird.
- `HH` ist die Stunde, mit zwei Ziffern (`00` bis `23`). Als Spezialfall ist `24:00:00` erlaubt und wird als Mitternacht zu Beginn des nächsten Tages interpretiert. Standard ist `00`.
- `mm` ist die Minute, mit zwei Ziffern (`00` bis `59`). Standard ist `00`.
- `ss` ist die Sekunde, mit zwei Ziffern (`00` bis `59`). Standard ist `00`.
- `sss` ist die Millisekunde, mit drei Ziffern (`000` bis `999`). Standard ist `000`.
- `Z` ist der Zeitzonenoffset, der entweder das buchstäbliche Zeichen `Z` (was UTC anzeigt) sein kann oder `+` oder `-` gefolgt von `HH:mm`, dem Offset in Stunden und Minuten von UTC.

Verschiedene Komponenten können weggelassen werden, sodass die folgenden alle gültig sind:

- Nur Datum-Form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Datumszeit-Form: eine der oben genannten Nur-Datum-Formen, gefolgt von `T`, gefolgt von `HH:mm`, `HH:mm:ss` oder `HH:mm:ss.sss`. Jede Kombination kann durch einen Zeitzonenoffset gefolgt werden.

Zum Beispiel sind `"2011-10-10"` (_nur Datum_ Form), `"2011-10-10T14:48:00"` (_Datumszeit_ Form) oder `"2011-10-10T14:48:00.000+09:00"` (_Datumszeit_ Form mit Millisekunden und Zeitzone) alle gültige Datumszeit-Strings.

Wenn der Zeitzonenoffset fehlt, **werden Nur-Datum-Formen als UTC-Zeit und Datumszeit-Formen als lokale Zeit interpretiert.** Die Interpretation als UTC-Zeit ist darauf zurückzuführen, dass ein historischer Spezifikationsfehler bestand, der nicht mit ISO 8601 übereinstimmte, aber aufgrund der Webkompatibilität nicht geändert werden konnte. Siehe [Gebrochener Parser – Ein Web-Reality-Problem](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

{{jsxref("Date.parse()")}} und der {{jsxref("Date/Date", "Date()")}}-Konstruktor akzeptieren beide Strings im Datumszeit-String-Format als Eingabe. Darüber hinaus dürfen Implementierungen andere Datumsformate unterstützen, wenn die Eingabe nicht diesem Format entspricht.

Die Methode {{jsxref("Date/toISOString", "toISOString()")}} gibt eine String-Darstellung des Datums im Datumszeit-String-Format zurück, wobei der Zeitzonenoffset immer auf `Z` (UTC) gesetzt ist.

> [!NOTE]
> Es wird empfohlen sicherzustellen, dass Ihre Eingaben dem oben beschriebenen Datumszeit-String-Format entsprechen, um maximale Kompatibilität zu gewährleisten, da die Unterstützung für andere Formate nicht garantiert ist. Es gibt jedoch einige Formate, die in allen großen Implementierungen unterstützt werden — wie etwa {{rfc(2822)}} Format — in diesem Fall kann ihre Verwendung akzeptabel sein. Führen Sie immer [Cross-Browser-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) durch, um sicherzustellen, dass Ihr Code in allen Ziel-Browsern funktioniert. Eine Bibliothek kann helfen, wenn viele unterschiedliche Formate berücksichtigt werden müssen.

Nicht standardisierte Strings können auf jede gewünschte Weise von der Implementierung analysiert werden, einschließlich der Zeitzone — die meisten Implementierungen verwenden standardmäßig die lokale Zeitzone. Implementierungen müssen kein ungültiges Datum für außerhalb liegende Datumskomponenten zurückgeben, obwohl dies in der Regel der Fall ist. Ein String kann in-bounds Datumskomponenten haben (mit den oben definierten Grenzen), repräsentiert aber nicht wirklich ein Datum (zum Beispiel "30. Februar"). In diesem Fall verhalten sich Implementierungen inkonsistent. Die Seite [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples) bietet mehr Beispiele für diese nicht standardisierten Fälle.

### Andere Möglichkeiten, ein Datum zu formatieren

- {{jsxref("Date/toISOString", "toISOString()")}} gibt einen String im Format `1970-01-01T00:00:00.000Z` zurück (das oben eingeführte Datumszeit-String-Format, das ein vereinfachtes [ISO 8601](https://de.wikipedia.org/wiki/ISO_8601) ist). {{jsxref("Date/toJSON", "toJSON()")}} ruft `toISOString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toString", "toString()")}} gibt einen string im Format `Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)` zurück, während {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} jeweils das Datum und den Zeitanteil des Strings zurückgeben. [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"string"` oder `"default"` übergeben wird) ruft `toString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toUTCString", "toUTCString()")}} gibt einen String im Format `Thu, 01 Jan 1970 00:00:00 GMT` zurück (verallgemeinert {{rfc(7231)}}).
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}, {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}, und {{jsxref("Date/toLocaleString", "toLocaleString()")}} verwenden lokalspezifische Datums- und Zeitformate, die normalerweise von der [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) API bereitgestellt werden.

Siehe den Abschnitt [Formate der Rückgabewerte der toString-Methode](#formate_der_rückgabewerte_der_tostring-methode) für Beispiele.

## Konstruktor

- {{jsxref("Date/Date", "Date()")}}
  - : Wenn als Konstruktor aufgerufen, wird ein neues `Date`-Objekt zurückgegeben. Wenn als Funktion aufgerufen, wird eine String-Darstellung des aktuellen Datums und der aktuellen Zeit zurückgegeben.

## Statische Methoden

- {{jsxref("Date.now()")}}
  - : Gibt den numerischen Wert zurück, der der aktuellen Zeit entspricht — die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC, mit ignorierten Schaltsekunden.
- {{jsxref("Date.parse()")}}
  - : Analysiert eine String-Darstellung eines Datums und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, mit ignorierten Schaltsekunden.
- {{jsxref("Date.UTC()")}}
  - : Akzeptiert die gleichen Parameter wie die längste Form des Konstruktors (d. h. 2 bis 7) und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, mit ignorierten Schaltsekunden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Date.prototype` definiert und werden von allen `Date`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Date`-Instanzen ist der Anfangswert der {{jsxref("Date/Date", "Date")}}-Konstruktor.

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
  - : Gibt den numerischen Wert des angegebenen Datums als die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück. (Für frühere Zeiten werden negative Werte zurückgegeben.)
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
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß der lokalen Zeit.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : Setzt das vollständige Jahr (z. B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum gemäß der lokalen Zeit.
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
  - : Setzt das `Date`-Objekt auf die durch die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC dargestellte Zeit. Verwenden Sie negative Zahlen für frühere Zeiten.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum gemäß der Weltzeit.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Setzt das vollständige Jahr (z. B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum gemäß der Weltzeit.
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : Setzt die Stunden für ein angegebenes Datum gemäß der Weltzeit.
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : Setzt die Millisekunden für ein angegebenes Datum gemäß der Weltzeit.
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : Setzt die Minuten für ein angegebenes Datum gemäß der Weltzeit.
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : Setzt den Monat für ein angegebenes Datum gemäß der Weltzeit.
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : Setzt die Sekunden für ein angegebenes Datum gemäß der Weltzeit.
- {{jsxref("Date.prototype.setYear()")}} {{deprecated_inline}}
  - : Setzt das Jahr (normalerweise 2–3 Ziffern) für ein angegebenes Datum gemäß der lokalen Zeit. Verwenden Sie stattdessen {{jsxref("Date/setFullYear", "setFullYear()")}}.
- {{jsxref("Date.prototype.toDateString()")}}
  - : Gibt den "Datum"-Teil des `Date` als einen menschenlesbaren String zurück, wie `'Thu Apr 12 2018'`.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Konvertiert ein Datum in einen String im ISO 8601 Extended Format.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Gibt einen String zurück, der das `Date` unter Verwendung von {{jsxref("Date/toISOString", "toISOString()")}} darstellt. Beabsichtigt zur Verwendung durch {{jsxref("JSON.stringify()")}}.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Gibt einen String mit einer ortssensitiven Darstellung des Datumsanteils dieses Datums basierend auf Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer ortssensitiven Darstellung dieses Datums zurück. Überschreibt die {{jsxref("Object.prototype.toLocaleString()")}}-Methode.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Gibt einen String mit einer ortssensitiven Darstellung des Zeitanteils dieses Datums basierend auf Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene `Date`-Objekt darstellt. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Gibt den "Zeit"-Teil des `Date` als einen menschenlesbaren String zurück.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Konvertiert ein Datum in einen String unter Verwendung der UTC-Zeitzone.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Gibt den primitiven Wert eines `Date`-Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : Konvertiert dieses `Date`-Objekt in einen primitiven Wert.

## Beispiele

### Verschiedene Möglichkeiten, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Möglichkeiten, JavaScript-Daten zu erstellen:

> [!NOTE]
> Die Erstellung eines Datums aus einem String hat viele Verhaltensinkonsistenzen. Siehe [Datumszeit-String-Format](#datumszeit-string-format) für Vorbehalte bei der Verwendung verschiedener Formate.

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

### Interpretation von zweistelligen Jahreszahlen

`new Date()` zeigt ein unerwünschtes, inkonsistentes Verhalten bei zweistelligen Jahreswerten; speziell, wenn ein `new Date()`-Aufruf einen zweistelligen Jahreswert erhält, wird dieser Jahreswert nicht als literales Jahr interpretiert und als solches verwendet, sondern stattdessen als relativer Offset interpretiert — in einigen Fällen als Offset vom Jahr `1900`, in anderen Fällen als Offset vom Jahr `2000`.

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

Aufgrund der unterschiedlichen Längen von Tagen (aufgrund der Zeitumstellung), Monaten und Jahren erfordert das Ausdrücken der verstrichenen Zeit in Einheiten größer als Stunden, Minuten und Sekunden die Beachtung einer Vielzahl von Problemen und sollte gründlich untersucht werden, bevor es versucht wird.

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
> In Browsern, die das [Performance API](/de/docs/Web/API/Performance_API)-Feature für hochauflösende Zeitmessungen unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) zuverlässigere und präzisere Messungen der verstrichenen Zeit als {{jsxref("Date.now()")}} bereitstellen.

### Die Anzahl der Sekunden seit der ECMAScript-Epoche erhalten

```js
const seconds = Math.floor(Date.now() / 1000);
```

In diesem Fall ist es wichtig, nur eine ganze Zahl zurückzugeben — also reicht eine einfache Division nicht aus. Es ist auch wichtig, nur tatsächlich verstrichene Sekunden zurückzugeben. (Deshalb verwendet dieser Code {{jsxref("Math.floor()")}} und _nicht_ {{jsxref("Math.round()")}}.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date/Date", "Date()")}}
