---
title: Datum
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

JavaScript **`Date`**-Objekte repräsentieren einen einzelnen Moment in der Zeit in einem plattformunabhängigen Format. `Date`-Objekte kapseln eine ganze Zahl, die Millisekunden seit Mitternacht des 1. Januar 1970, UTC (der _Epoche_), darstellt.

> [!NOTE]
> Mit der Einführung der {{jsxref("Temporal")}}-API wird das `Date`-Objekt als ein veraltetes Feature betrachtet. Ziehen Sie in Betracht, `Temporal` für neuen Code zu verwenden und bestehenden Code nach Möglichkeit darauf zu migrieren (prüfen Sie die [Browser-Kompatibilität](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#browser_compatibility)). Wir werden bald einen Leitfaden zur Verwendung verfassen!

## Beschreibung

### Die Epoche, Zeitstempel und ungültige Datumswerte

Ein JavaScript-Datum wird grundlegend als die Zeit in Millisekunden spezifiziert, die seit der [Epoche](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) verstrichen ist, welche als Mitternacht des 1. Januar 1970, UTC, definiert ist (entspricht der {{Glossary("Unix_time", "UNIX-Epoche")}}). Dieser Zeitstempel ist _zeitzonenunabhängig_ und definiert eindeutig einen Moment in der Geschichte.

> [!NOTE]
> Während der Zeitwert im Kern eines Date-Objekts UTC ist, funktionieren die grundlegenden Methoden, um Datum und Zeit oder ihre Komponenten abzurufen, alle in der lokalen (d.h. auf dem Hostsystem basierenden) Zeitzone und Verschiebung.

Der maximale Zeitstempel, der von einem `Date`-Objekt dargestellt werden kann, ist etwas kleiner als die maximale sichere Ganzzahl ({{jsxref("Number.MAX_SAFE_INTEGER")}}, welches 9.007.199.254.740.991 ist). Ein `Date`-Objekt kann maximal ±8.640.000.000.000.000 Millisekunden oder ±100.000.000 (einhundert Millionen) Tage relativ zur Epoche darstellen. Dies ist der Bereich vom 20. April 271.821 v. Chr. bis zum 13. September 275.760 n. Chr. Jeder Versuch, eine Zeit außerhalb dieses Bereichs darzustellen, führt dazu, dass das `Date`-Objekt einen Zeitstempelwert von [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) hält, was ein „Ungültiges Datum“ ist.

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

Es gibt verschiedene Methoden, die es Ihnen erlauben, mit dem im Datum gespeicherten Zeitstempel zu interagieren:

- Sie können direkt mit dem Zeitstempelwert interagieren, indem Sie die Methoden {{jsxref("Date/getTime", "getTime()")}} und {{jsxref("Date/setTime", "setTime()")}} verwenden.
- Die Methoden {{jsxref("Date/valueOf", "valueOf()")}} und [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"number"` übergeben wird) — die automatisch bei der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) aufgerufen werden — geben den Zeitstempel zurück, wodurch `Date`-Objekte sich wie ihre Zeitstempel in Zahlkontexten verhalten.
- Alle statischen Methoden ({{jsxref("Date.now()")}}, {{jsxref("Date.parse()")}}, und {{jsxref("Date.UTC()")}}) geben Zeitstempel anstelle von `Date`-Objekten zurück.
- Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit einem Zeitstempel als einzigem Argument aufgerufen werden.

### Datumskomponenten und Zeitzonen

Ein Datum wird intern als eine einzige Zahl dargestellt, der _Zeitstempel_. Beim Umgang damit muss der Zeitstempel als strukturiertes Datum-Zeit-Darstellung interpretiert werden. Es gibt immer zwei Möglichkeiten, einen Zeitstempel zu interpretieren: als lokale Zeit oder als Coordinated Universal Time (UTC), die globale Standardzeit, die durch die Weltzeit definiert ist. Die lokale Zeitzone wird nicht im Datumsobjekt gespeichert, sondern durch die Hostumgebung (Gerät des Benutzers) bestimmt.

> [!NOTE]
> UTC sollte nicht mit der [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT) verwechselt werden, da sie nicht immer gleich sind — dies wird detaillierter auf der verlinkten Wikipedia-Seite erklärt.

Beispielsweise repräsentiert der Zeitstempel 0 einen einzigartigen Moment in der Geschichte, kann aber auf zwei Arten interpretiert werden:

- Als UTC-Zeit ist es Mitternacht des 1. Januar 1970, UTC,
- Als lokale Zeit in New York (UTC-5) ist es 19:00:00 am 31. Dezember 1969.

Die Methode {{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} gibt den Unterschied zwischen UTC und der lokalen Zeit in Minuten zurück. Beachten Sie, dass die Zeitzonenverschiebung nicht nur von der aktuellen Zeitzone, sondern auch von der durch das `Date`-Objekt repräsentierten Zeit abhängt, aufgrund von Sommerzeit und historischen Änderungen. Im Wesentlichen ist die Zeitzonenverschiebung die Verschiebung von UTC-Zeit, zur Zeit, die durch das `Date`-Objekt und am Standort der Hostumgebung dargestellt wird.

Es gibt zwei Gruppen von `Date`-Methoden: Eine Gruppe holt und setzt verschiedene Datumskomponenten, indem der Zeitstempel als lokale Zeit interpretiert wird, während die andere UTC verwendet.

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
      <td>Wochentag</td>
      <td>{{jsxref("Date/getDay", "getDay()")}}</td>
      <td>N/V</td>
      <td>{{jsxref("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>N/V</td>
    </tr>
  </tbody>
</table>

Der {{jsxref("Date/Date", "Date()")}}-Konstruktor kann mit zwei oder mehr Argumenten aufgerufen werden, wobei diese als Jahr, Monat, Tag, Stunde, Minute, Sekunde und Millisekunde interpretiert werden, jeweils in lokaler Zeit. {{jsxref("Date.UTC()")}} funktioniert ähnlich, aber es interpretiert die Komponenten als UTC-Zeit und akzeptiert auch ein einzelnes Argument, das das Jahr repräsentiert.

> [!NOTE]
> Einige Methoden, einschließlich des `Date()`-Konstruktors, `Date.UTC()` sowie der veralteten {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}}-Methoden, interpretieren ein zweistelliges Jahr als ein Jahr in den 1900er Jahren. Beispielsweise wird `new Date(99, 5, 24)` als 24. Juni 1999 interpretiert, nicht als 24. Juni 99. Siehe [Interpretation von zweistelligen Jahren](#interpretation_von_zweistelligen_jahren) für mehr Informationen.

Wenn ein Segment seinen erwarteten Bereich über- oder unterschreitet, „trägt es normalerweise zum nächsten größeren Segment bei“ oder „leiht von diesem aus“. Zum Beispiel, wenn der Monat auf 12 gesetzt wird (Monate sind nullbasiert, also ist Dezember 11), wird es zum Januar des nächsten Jahres. Wenn der Tag des Monats auf 0 gesetzt wird, wird es der letzte Tag des vorherigen Monats. Dies gilt auch für Daten, die mit dem [Datums-Zeit-String-Format](#datums-zeit-string-format) angegeben sind.

### Datums-Zeit-String-Format

Es gibt viele Möglichkeiten, ein Datum als String zu formatieren. Die JavaScript-Spezifikation spezifiziert nur ein Format, das universell unterstützt werden soll: das [_Datums-Zeit-String-Format_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), eine Vereinfachung des ISO 8601-Kalenderdatums im erweiterten Format. Das Format ist wie folgt:

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` ist das Jahr, mit vier Ziffern (`0000` bis `9999`), oder als _erweitertes Jahr_ mit `+` oder `-`, gefolgt von sechs Ziffern. Das Vorzeichen ist für erweiterte Jahre erforderlich. `-000000` ist explizit als gültiges Jahr nicht erlaubt.
- `MM` ist der Monat, mit zwei Ziffern (`01` bis `12`). Standardmäßig `01`.
- `DD` ist der Tag des Monats, mit zwei Ziffern (`01` bis `31`). Standardmäßig `01`.
- `T` ist ein buchstäblicher Charakter, der den Beginn des _Zeit_ Teils des Strings anzeigt. Das `T` ist erforderlich, wenn der Zeitteil angegeben wird.
- `HH` ist die Stunde, mit zwei Ziffern (`00` bis `23`). Als Sonderfall ist `24:00:00` erlaubt und wird als Mitternacht am Beginn des nächsten Tages interpretiert. Standardmäßig `00`.
- `mm` ist die Minute, mit zwei Ziffern (`00` bis `59`). Standardmäßig `00`.
- `ss` ist die Sekunde, mit zwei Ziffern (`00` bis `59`). Standardmäßig `00`.
- `sss` ist die Millisekunde, mit drei Ziffern (`000` bis `999`). Standardmäßig `000`.
- `Z` ist die Zeitzonenverschiebung, die entweder der buchstäbliche Charakter `Z` (anzeigend UTC) oder `+` oder `-`, gefolgt von `HH:mm`, der Verschiebung in Stunden und Minuten von UTC sein kann.

Verschiedene Komponenten können weggelassen werden, so dass die folgenden alle gültig sind:

- Nur-Datum-Form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Datum-Zeit-Form: Eine der oben genannten Nur-Datum-Formen, gefolgt von `T`, gefolgt von `HH:mm`, `HH:mm:ss`, oder `HH:mm:ss.sss`. Jede Kombination kann durch eine Zeitzonenverschiebung ergänzt werden.

Zum Beispiel sind `"2011-10-10"` (_Nur-Datum_ Form), `"2011-10-10T14:48:00"` (_Datum-Zeit_ Form) oder `"2011-10-10T14:48:00.000+09:00"` (_Datum-Zeit_ Form mit Millisekunden und Zeitzone) alle gültige Datums-Zeit-Strings.

Wenn die Zeitzonenverschiebung fehlt, werden **Nur-Datum-Formen als UTC-Zeit und Datum-Zeit-Formen als lokale Zeit interpretiert.** Die Interpretation als UTC-Zeit ist auf einen historischen Spezifikationsfehler zurückzuführen, der nicht mit ISO 8601 übereinstimmte, aber nicht geändert werden konnte, aufgrund der Web-Kompatibilität. Siehe [Defekter Parser – Ein Web-Realitätsproblem](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

{{jsxref("Date.parse()")}} und der {{jsxref("Date/Date", "Date()")}}-Konstruktor akzeptieren beide Strings im Datums-Zeit-String-Format als Eingabe. Darüber hinaus dürfen Implementierungen andere Datumsformate unterstützen, wenn die Eingabe diesem Format nicht entspricht.

Die Methode {{jsxref("Date/toISOString", "toISOString()")}} gibt eine String-Darstellung des Datums im Datums-Zeit-String-Format zurück, wobei die Zeitzonenverschiebung immer auf `Z` (UTC) gesetzt ist.

> [!NOTE]
> Ihnen wird empfohlen, dafür zu sorgen, dass Ihre Eingabe dem oben beschriebenen Datums-Zeit-String-Format entspricht, um maximale Kompatibilität zu gewährleisten, da die Unterstützung anderer Formate nicht garantiert ist. Es gibt jedoch einige Formate, die in allen großen Implementierungen unterstützt werden — wie das {{rfc(2822)}}-Format — in diesem Fall kann deren Verwendung akzeptabel sein. Führen Sie immer [Browser-übergreifende Tests](/de/docs/Learn_web_development/Extensions/Testing) durch, um sicherzustellen, dass Ihr Code in allen Ziel-Browsern funktioniert. Eine Bibliothek kann helfen, wenn viele verschiedene Formate berücksichtigt werden sollen.

Nicht standardisierte Strings können je nach Implementierung auf beliebige Weise analysiert werden, einschließlich der Zeitzone — die meisten Implementierungen verwenden standardmäßig die lokale Zeitzone. Implementierungen sind nicht verpflichtet, ungültiges Datum für außerbörsischen Dateikomponenten zurückzugeben, obwohl sie dies normalerweise tun. Ein String kann Dateikomponenten innerhalb der Grenze haben (mit den oben definierten Grenzen), stellt aber in Wirklichkeit kein Datum dar (zum Beispiel "30. Februar"). Implementierungen verhalten sich in diesem Fall inkonsistent. Die Seite [`Date.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples) bietet mehr Beispiele zu diesen nicht standardisierten Fällen.

### Andere Möglichkeiten, ein Datum zu formatieren

- {{jsxref("Date/toISOString", "toISOString()")}} gibt einen String im Format `1970-01-01T00:00:00.000Z` zurück (das oben eingeführte Datums-Zeit-String-Format, welches vereinfacht [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) ist). {{jsxref("Date/toJSON", "toJSON()")}} ruft `toISOString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toString", "toString()")}} gibt einen String im Format `Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)` zurück, während {{jsxref("Date/toDateString", "toDateString()")}} und {{jsxref("Date/toTimeString", "toTimeString()")}} die Datums- und Zeitanteile des Strings zurückgeben. [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (wenn `"string"` oder `"default"` übergeben wird) ruft `toString()` auf und gibt das Ergebnis zurück.
- {{jsxref("Date/toUTCString", "toUTCString()")}} gibt einen String im Format `Thu, 01 Jan 1970 00:00:00 GMT` (verallgemeinertes {{rfc(7231)}}) zurück.
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}, {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}, und {{jsxref("Date/toLocaleString", "toLocaleString()")}} verwenden lokal spezifische Datums- und Zeitformate, die normalerweise von der [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) API bereitgestellt werden.

Siehe den Abschnitt [Formate der Rückgabewerte der toString-Methode](#formate_der_rückgabewerte_der_tostring-methode) für Beispiele.

## Konstruktor

- {{jsxref("Date/Date", "Date()")}}
  - : Wenn als Konstruktor aufgerufen, gibt es ein neues `Date`-Objekt zurück. Wenn als Funktion aufgerufen, gibt es eine String-Darstellung des aktuellen Datums und der aktuellen Zeit zurück.

## Statische Methoden

- {{jsxref("Date.now()")}}
  - : Gibt den Zahlenwert zurück, der der aktuellen Zeit entspricht — die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.parse()")}}
  - : Parst eine String-Darstellung eines Datums und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.
- {{jsxref("Date.UTC()")}}
  - : Akzeptiert die gleichen Parameter wie die längste Form des Konstruktors (d.h. 2 bis 7) und gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück, wobei Schaltsekunden ignoriert werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Date.prototype` definiert und werden von allen `Date`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Date`-Instanzen ist der Anfangswert der {{jsxref("Date/Date", "Date")}}-Konstruktor.

## Instanzmethoden

- {{jsxref("Date.prototype.getDate()")}}
  - : Gibt den Tag des Monats (`1` – `31`) für das angegebene Datum entsprechend der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getDay()")}}
  - : Gibt den Wochentag (`0` – `6`) für das angegebene Datum entsprechend der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für 4-stellige Jahre) des angegebenen Datums entsprechend der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getHours()")}}
  - : Gibt die Stunde (`0` – `23`) im angegebenen Datum entsprechend der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : Gibt die Millisekunden (`0` – `999`) im angegebenen Datum entsprechend der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getMinutes()")}}
  - : Gibt die Minuten (`0` – `59`) im angegebenen Datum entsprechend der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getMonth()")}}
  - : Gibt den Monat (`0` – `11`) im angegebenen Datum entsprechend der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getSeconds()")}}
  - : Gibt die Sekunden (`0` – `59`) im angegebenen Datum entsprechend der lokalen Zeit zurück.
- {{jsxref("Date.prototype.getTime()")}}
  - : Gibt den Zahlenwert des angegebenen Datums als die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC zurück. (Negative Werte werden für frühere Zeiten zurückgegeben.)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Gibt die Zeitzonenverschiebung in Minuten für die aktuelle Locale zurück.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : Gibt den Tag (Datum) des Monats (`1` – `31`) im angegebenen Datum entsprechend der Universalzeit zurück.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : Gibt den Wochentag (`0` – `6`) im angegebenen Datum entsprechend der Universalzeit zurück.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : Gibt das Jahr (4 Ziffern für 4-stellige Jahre) im angegebenen Datum entsprechend der Universalzeit zurück.
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : Gibt die Stunden (`0` – `23`) im angegebenen Datum entsprechend der Universalzeit zurück.
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : Gibt die Millisekunden (`0` – `999`) im angegebenen Datum entsprechend der Universalzeit zurück.
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : Gibt die Minuten (`0` – `59`) im angegebenen Datum entsprechend der Universalzeit zurück.
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : Gibt den Monat (`0` – `11`) im angegebenen Datum entsprechend der Universalzeit zurück.
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : Gibt die Sekunden (`0` – `59`) im angegebenen Datum entsprechend der Universalzeit zurück.
- {{jsxref("Date.prototype.getYear()")}} {{deprecated_inline}}
  - : Gibt das Jahr (gewöhnlich 2–3 Ziffern) im angegebenen Datum entsprechend der lokalen Zeit zurück. Verwenden Sie stattdessen {{jsxref("Date/getFullYear", "getFullYear()")}}.
- {{jsxref("Date.prototype.setDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum entsprechend der lokalen Zeit.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : Setzt das volle Jahr (z.B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum entsprechend der lokalen Zeit.
- {{jsxref("Date.prototype.setHours()")}}
  - : Setzt die Stunden für ein angegebenes Datum entsprechend der lokalen Zeit.
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : Setzt die Millisekunden für ein angegebenes Datum entsprechend der lokalen Zeit.
- {{jsxref("Date.prototype.setMinutes()")}}
  - : Setzt die Minuten für ein angegebenes Datum entsprechend der lokalen Zeit.
- {{jsxref("Date.prototype.setMonth()")}}
  - : Setzt den Monat für ein angegebenes Datum entsprechend der lokalen Zeit.
- {{jsxref("Date.prototype.setSeconds()")}}
  - : Setzt die Sekunden für ein angegebenes Datum entsprechend der lokalen Zeit.
- {{jsxref("Date.prototype.setTime()")}}
  - : Setzt das `Date`-Objekt auf die durch die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 UTC repräsentierte Zeit. Verwenden Sie negative Zahlen für frühere Zeiten.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Setzt den Tag des Monats für ein angegebenes Datum entsprechend der Universalzeit.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Setzt das volle Jahr (z.B. 4 Ziffern für 4-stellige Jahre) für ein angegebenes Datum entsprechend der Universalzeit.
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : Setzt die Stunde für ein angegebenes Datum entsprechend der Universalzeit.
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : Setzt die Millisekunden für ein angegebenes Datum entsprechend der Universalzeit.
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : Setzt die Minuten für ein angegebenes Datum entsprechend der Universalzeit.
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : Setzt den Monat für ein angegebenes Datum entsprechend der Universalzeit.
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : Setzt die Sekunden für ein angegebenes Datum entsprechend der Universalzeit.
- {{jsxref("Date.prototype.setYear()")}} {{deprecated_inline}}
  - : Setzt das Jahr (gewöhnlich 2–3 Ziffern) für ein angegebenes Datum entsprechend der lokalen Zeit. Verwenden Sie stattdessen {{jsxref("Date/setFullYear", "setFullYear()")}}.
- {{jsxref("Date.prototype.toDateString()")}}
  - : Gibt den „Datum“-Teil des `Date` als einen menschenlesbaren String wie `'Thu Apr 12 2018'` zurück.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Konvertiert ein Datum in einen String im ISO 8601 Extended Format.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Gibt einen String zurück, der das `Date` unter Verwendung von {{jsxref("Date/toISOString", "toISOString()")}} repräsentiert. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Gibt einen String mit einer lokalitätssensitiven Darstellung des Datumsanteils dieses Datums basierend auf Systemeinstellungen zurück.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer lokalitätssensitiven Darstellung dieses Datums zurück. Überschreibt die Methode {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Gibt einen String mit einer lokalitätssensitiven Darstellung des Zeitanteils dieses Datums, basierend auf Systemeinstellungen, zurück.
- {{jsxref("Date.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene `Date`-Objekt repräsentiert. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Date.prototype.toTemporalInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt mit dem gleichen {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}-Wert wie der [Zeitstempel](#the_epoch_timestamps_and_invalid_date) dieses Datums zurück.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Gibt den „Zeit“-Teil des `Date` als einen menschenlesbaren String zurück.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Konvertiert ein Datum in einen String unter Verwendung der UTC-Zeitzone.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Gibt den primitiven Wert eines `Date`-Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : Konvertiert dieses `Date`-Objekt in einen primitiven Wert.

## Beispiele

### Verschiedene Wege, ein Date-Objekt zu erstellen

Die folgenden Beispiele zeigen verschiedene Möglichkeiten, um JavaScript-Daten zu erstellen:

> [!NOTE]
> Ein Datum aus einem String zu erstellen hat viele Verhaltensinkonsistenzen. Siehe [Datums-Zeit-String-Format](#datums-zeit-string-format) für Vorbehalte zur Verwendung unterschiedlicher Formate.

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

`new Date()` weist unerwünschtes, inkonsistentes Verhalten mit zweistelligen Jahreswerten auf; insbesondere wenn ein `new Date()`-Aufruf einen zweistelligen Jahreswert erhält, wird dieser Jahrwert nicht als literales Jahr behandelt und wie angegeben verwendet, sondern wird stattdessen als relativer Offset interpretiert – in einigen Fällen als ein Offset vom Jahr `1900`, aber in anderen Fällen als ein Offset vom Jahr `2000`.

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

Um also Daten zwischen den Jahren `0` und `99` zu erstellen und zu erhalten, verwenden Sie stattdessen die bevorzugten Methoden {{jsxref("Date/setFullYear", "setFullYear()")}} und {{jsxref("Date/getFullYear", "getFullYear()")}}:.

```js
// Preferred method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date.setFullYear(98);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)
```

### Berechnung der verstrichenen Zeit

Die folgenden Beispiele zeigen, wie die verstrichene Zeit zwischen zwei JavaScript-Daten in Millisekunden bestimmt werden kann.

Aufgrund der unterschiedlichen Längen der Tage (aufgrund des Wechsels zur Sommerzeit), Monate und Jahre erfordert die Darstellung der verstrichenen Zeit in Einheiten größer als Stunden, Minuten und Sekunden die Bewältigung mehrerer Probleme und sollte gründlich recherchiert werden, bevor sie versucht wird.

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
> In Browsern, die das High-Resolution-Zeit-Feature der [Performance-API](/de/docs/Web/API/Performance_API) unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) zuverlässigere und präzisere Messungen der verstrichenen Zeit liefern als {{jsxref("Date.now()")}}.

### Die Anzahl der Sekunden seit der ECMAScript-Epoche erhalten

```js
const seconds = Math.floor(Date.now() / 1000);
```

In diesem Fall ist es wichtig, nur eine ganze Zahl zurückzugeben — daher genügt eine einfache Division nicht. Es ist auch wichtig, nur tatsächlich verstrichene Sekunden zurückzugeben. (Deshalb verwendet dieser Code {{jsxref("Math.floor()")}} und _nicht_ {{jsxref("Math.round()")}}.)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date/Date", "Date()")}}
