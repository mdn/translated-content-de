---
title: Date.parse()
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: d5be633656b10c913eb9a1db4fb5c59acfdcb86c
---

{{JSRef}}

Die **`Date.parse()`** statische Methode analysiert eine String-Darstellung eines Datums und gibt den [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des Datums zurück.

{{InteractiveExample("JavaScript Demo: Date.parse()")}}

```js interactive-example
// Standard date-time string format
const unixTimeZero = Date.parse("1970-01-01T00:00:00Z");
// Non-standard format resembling toUTCString()
const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

console.log(unixTimeZero);
// Expected output: 0

console.log(javaScriptRelease);
// Expected output: 818035920000
```

## Syntax

```js-nolint
Date.parse(dateString)
```

### Parameter

- `dateString`
  - : Ein String im [Datums-Zeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format). Siehe die verlinkte Referenz für Hinweise zur Verwendung verschiedener Formate.

### Rückgabewert

Eine Zahl, die den [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des gegebenen Datums darstellt. Wenn `dateString` nicht als gültiges Datum analysiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Diese Funktion ist nützlich, um Datumswerte basierend auf String-Werten festzulegen, zum Beispiel in Verbindung mit der {{jsxref("Date/setTime", "setTime()")}}-Methode.

Die Formate, die `parse()` verarbeiten kann, sind nicht explizit spezifiziert, aber es gibt einige {{Glossary("invariant", "Invariantien")}}:

- Das [Datums-Zeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) (erzeugt durch {{jsxref("Date/toISOString", "toISOString()")}}) muss unterstützt werden.
- Wenn `x` ein beliebiges Datum ist, dessen Millisekundenbetrag null ist, sollte `x.valueOf()` gleich einem der folgenden sein: `Date.parse(x.toString())`, `Date.parse(x.toUTCString())`, `Date.parse(x.toISOString())`. Das bedeutet, die durch {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} erzeugten Formate sollten ebenfalls unterstützt werden.
- Die Spezifikation erfordert _nicht_ die Unterstützung für das durch {{jsxref("Date/toLocaleString", "toLocaleString()")}} erzeugte Format. Große Engines versuchen jedoch, das `toLocaleString("en-US")`-Format zu unterstützen.

Andere Formate sind implementationsspezifisch und funktionieren möglicherweise nicht in allen Browsern. Eine Bibliothek kann helfen, wenn viele verschiedene Formate berücksichtigt werden müssen. Tatsächlich ist die Unzuverlässigkeit von `Date.parse()` eine der Motivationen für die Einführung der {{jsxref("Temporal")}}-API.

Da `parse()` eine statische Methode von `Date` ist, wird sie immer als `Date.parse()` verwendet, nicht als Methode eines von Ihnen erstellten `Date`-Objekts.

## Beispiele

### Verwendung von Date.parse()

Die folgenden Aufrufe geben alle `1546300800000` zurück. Der erste impliziert UTC-Zeit, da er nur das Datum enthält, und die anderen geben die UTC-Zeitzone explizit an.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

Der folgende Aufruf, der keine Zeitzone angibt, wird auf den 01.01.2019 um 00:00:00 in der lokalen Zeitzone des Systems gesetzt, da er sowohl Datum als auch Uhrzeit enthält.

```js
Date.parse("2019-01-01T00:00:00");
```

### Formate von toString() und toUTCString()

Neben dem standardmäßigen Datums-Zeit-String-Format werden die {{jsxref("Date/toString", "toString()")}}- und {{jsxref("Date/toUTCString", "toUTCString()")}}-Formate unterstützt:

```js
// toString() format
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// 18000000 in all implementations in all timezones

// toUTCString() format
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// 0 in all implementations in all timezones
```

### Nicht standardmäßige Datums-Strings

> [!NOTE]
> Dieser Abschnitt enthält implementationsspezifisches Verhalten, das möglicherweise in Browsern oder verschiedenen Browserversionen inkonsistent ist. Er ist nicht als umfassende Browser-Kompatibilitätstabelle gedacht, und Sie sollten stets Ihre eigenen Tests durchführen, bevor Sie ein Format in Ihrem Code verwenden.

Implementierungen verwenden in der Regel die lokale Zeitzone, wenn der Datums-String nicht standardmäßig ist. Zur Konsistenz nehmen wir an, dass die Laufzeit die UTC-Zeitzone verwendet, und sofern nicht anders angegeben, variiert die Ausgabe mit der Zeitzone des Geräts. [Die Sommerzeit (DST) der lokalen Zeitzone kann ebenfalls Auswirkungen darauf haben](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions).

Hier sind einige weitere Beispiele für nicht standardmäßige Datums-Strings. Browser sind beim Parsen von Datum-Strings sehr tolerant und ignorieren möglicherweise Teile eines Strings, die sie nicht analysieren können. Aus Kompatibilitätsgründen kopieren Browser oft das Verhalten voneinander, sodass sich diese Umgangsmuster browserübergreifend verbreiten. Wie bereits erwähnt, dienen die folgenden Beispiele nur der Veranschaulichung und sind keineswegs erschöpfend:

<table>
<thead>
<tr>
<th>Beschreibung</th>
<th>Beispiel</th>
<th>Chrome</th>
<th>Firefox</th>
<th>Safari</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="3">Einzelne Zahl</td>
<td><code>0</code> (einstellig)</td>
<td colspan="2">946684800000 (01. Jan 2000); NaN in Firefox ≤122</td>
<td>-62167219200000 (01. Jan 0000)</td>
</tr>
<tr>
<td><code>31</code> (zweistellig)</td>
<td colspan="2">NaN</td>
<td>-61188912000000 (01. Jan 0031)</td>
</tr>
<tr>
<td><code>999</code> (drei-/vierstellig)</td>
<td colspan="3">-30641733102000 (01. Jan 0999)</td>
</tr>
<tr>
<td rowspan="4">Datums-Strings mit unterschiedlichen Trennzeichen</td>
<td><code>1970-01-01</code> (Standard)</td>
<td colspan="3">0 in allen Zeitzonen</td>
</tr>
<tr>
<td><code>1970/01/01</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td><code>1970,01,01</code></td>
<td colspan="2">0</td>
<td>NaN</td>
</tr>
<tr>
<td><code>1970 01 01</code></td>
<td colspan="2">0</td>
<td>NaN</td>
</tr>
<tr>
<td>Strings, die <code>toString()</code> ähneln</td>
<td><code>Thu&nbsp;Jan&nbsp;01&nbsp;1970&nbsp;00:00:00</code><br><code>Thu Jan 01 1970</code><br><code>Jan 01 1970 00:00:00</code><br><code>Jan 01 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td>Strings, die <code>toUTCString()</code> ähneln</td>
<td><code>Thu, 01 Jan 1970 00:00:00</code><br><code>Thu, 01 Jan 1970</code><br><code>01 Jan 1970 00:00:00</code><br><code>01 Jan 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td rowspan="4">Erste Datumskomponente ist zweistellig</td>
<td><code>01-02-03</code> (erster Teil kann gültiger Monat sein)</td>
<td colspan="2">1041465600000 (02. Jan 2003)</td>
<td>-62132745600000 (03. Feb 0001)<br>Hinweis: Safari nimmt immer YY-MM-DD an, aber MM/DD/YY.</td>
</tr>
<tr>
<td><code>27-02-03</code> (erster Teil kann gültiger Tag, aber nicht Monat sein)</td>
<td colspan="2">NaN</td>
<td>-61312291200000 (03. Feb 0027)</td>
</tr>
<tr>
<td><code>49-02-03</code> (erster Teil kann kein gültiger Tag sein und ist &lt;50)</td>
<td colspan="2">2495923200000 (03. Feb 2049)</td>
<td>-60617980800000 (03. Feb 0049)</td>
</tr>
<tr>
<td><code>50-02-03</code> (erster Teil kann kein gültiger Tag sein und ist ≥50)</td>
<td colspan="2">-628300800000 (03. Feb 1950)</td>
<td>-60586444800000 (03. Feb 0050)</td>
</tr>
<tr>
<td rowspan="3">Datumsbestandteile außerhalb der Grenzen</td>
<td><code>2014-25-23</code><br><code>Mar 32, 2014</code><br><code>2014/25/23</code></td>
<td colspan="3">NaN</td>
</tr>
<tr>
<td><code>2014-02-30</code></td>
<td colspan="2">1393718400000 (02. Mar 2014)</td>
<td>NaN</td>
</tr>
<tr>
<td><code>02/30/2014</code></td>
<td colspan="3">1393718400000</td>
</tr>
<tr>
<td rowspan="5">Überflüssige Zeichen nach dem Monatsnamen</td>
<td><code>04 Dec 1995</code><br><code>04 Decem 1995</code><br><code>04 December 1995</code></td>
<td colspan="3">818031600000</td>
</tr>
<tr>
<td><code>04 DecFoo 1995</code></td>
<td colspan="3">818031600000<br>Nur die ersten drei Zeichen werden gelesen.<br>Firefox ≤121 liest bis zum gültigen Monatsnamen und gibt NaN zurück, wenn es "F" sieht.</td>
</tr>
<tr>
<td><code>04 De 1995</code></td>
<td colspan="3">NaN</td>
</tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.UTC()")}}
