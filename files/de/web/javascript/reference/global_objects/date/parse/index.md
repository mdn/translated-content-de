---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: e439cd79166dbfd9bbe3a003abaf5898ae165509
---

{{JSRef}}

Die statische Methode **`Date.parse()`** analysiert eine Zeichenketten-Darstellung eines Datums und gibt den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) dieses Datums zurück.

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
  - : Eine Zeichenkette im [Datums-Zeit-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format). Siehe die verlinkte Referenz für Hinweise zur Verwendung verschiedener Formate.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Wenn `dateString` nicht als gültiges Datum geparst werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Diese Funktion ist nützlich, um Datumswerte basierend auf Zeichenketten-Werten festzulegen, beispielsweise in Verbindung mit der {{jsxref("Date/setTime", "setTime()")}}-Methode.

Die Formate, die `parse()` verarbeiten kann, sind nicht explizit angegeben, aber es gibt einige Invarianten:

- Das [Datums-Zeit-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) (erzeugt durch {{jsxref("Date/toISOString", "toISOString()")}}) muss unterstützt werden.
- Wenn `x` ein beliebiges Datum ist, dessen Millisekunden null sind, sollte `x.valueOf()` gleich einem der folgenden Ausdrücke sein: `Date.parse(x.toString())`, `Date.parse(x.toUTCString())`, `Date.parse(x.toISOString())`. Das bedeutet, die durch {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} erzeugten Formate sollten ebenfalls unterstützt werden.
- Die Spezifikation erfordert _keine_ Unterstützung für das durch {{jsxref("Date/toLocaleString", "toLocaleString()")}} erzeugte Format. Allerdings versuchen alle großen Engines, das Format `toLocaleString("en-US")` zu unterstützen.

Andere Formate sind implementierungsabhängig und funktionieren möglicherweise nicht in allen Browsern. Eine Bibliothek kann hilfreich sein, wenn viele verschiedene Formate unterstützt werden sollen. Tatsächlich ist die Unzuverlässigkeit von `Date.parse()` einer der Gründe für die Einführung der {{jsxref("Temporal")}}-API.

Da `parse()` eine statische Methode von `Date` ist, wird sie immer als `Date.parse()` verwendet, nicht als Methode eines von Ihnen erstellten `Date`-Objekts.

## Beispiele

### Verwendung von Date.parse()

Die folgenden Anrufe geben alle `1546300800000` zurück. Der erste impliziert UTC-Zeit, da er nur das Datum enthält, und die anderen geben explizit die UTC-Zeitzone an.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

Der folgende Anruf, der keine Zeitzone angibt, wird auf den 2019-01-01 um 00:00:00 in der lokalen Zeitzone des Systems gesetzt, da er sowohl Datum als auch Zeit enthält.

```js
Date.parse("2019-01-01T00:00:00");
```

### toString() und toUTCString() Formate

Abgesehen vom standardisierten Datums-Zeit-Format werden die {{jsxref("Date/toString", "toString()")}}- und {{jsxref("Date/toUTCString", "toUTCString()")}}-Formate unterstützt:

```js
// toString() format
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// 18000000 in all implementations in all timezones

// toUTCString() format
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// 0 in all implementations in all timezones
```

### Nicht-standardisierte Datums-Zeichenketten

> [!NOTE]
> Dieser Abschnitt enthält implementierungsspezifisches Verhalten, das möglicherweise nicht konsistent zwischen Browsern oder verschiedenen Browserversionen ist. Er ist nicht als umfassende Tabelle zur Browser-Kompatibilität gedacht, und Sie sollten Ihre eigenen Tests durchführen, bevor Sie ein Format in Ihrem Code verwenden.

Implementierungen verwenden normalerweise die lokale Zeitzone, wenn die Datums-Zeichenkette nicht standardisiert ist. Zur Konsistenz gehen wir davon aus, dass der Ablauf die UTC-Zeitzone verwendet. Sofern nicht anders angegeben, variiert die Ausgabe mit der Zeitzone des Geräts. [Die Sommerzeit (DST) der lokalen Zeitzone kann ebenfalls einen Einfluss haben](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions).

Hier sind einige weitere Beispiele für nicht standardisierte Datums-Zeichenketten. Browser sind beim Parsen von Datums-Zeichenketten sehr tolerant und können Teile einer Zeichenkette, die sie nicht analysieren können, verwerfen. Aus Kompatibilitätsgründen kopieren Browser oft das Verhalten anderer, sodass sich diese Verhaltensmuster von Browser zu Browser verbreiten. Wie bereits erwähnt, dienen die folgenden Beispiele nur zur Veranschaulichung und sind keineswegs vollständig:

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
<td colspan="2">946684800000 (01.01.2000); NaN in Firefox ≤122</td>
<td>-62167219200000 (01.01.0000)</td>
</tr>
<tr>
<td><code>31</code> (zweistellig)</td>
<td colspan="2">NaN</td>
<td>-61188912000000 (01.01.0031)</td>
</tr>
<tr>
<td><code>999</code> (drei-/vierstellig)</td>
<td colspan="3">-30641733102000 (01.01.0999)</td>
</tr>
<tr>
<td rowspan="4">Datums-Zeichenketten mit verschiedenen Trennzeichen</td>
<td><code>1970-01-01</code> (standardisiert)</td>
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
<td>Zeichenketten, die wie <code>toString()</code> aussehen</td>
<td><code>Thu&nbsp;Jan&nbsp;01&nbsp;1970&nbsp;00:00:00</code><br><code>Thu Jan 01 1970</code><br><code>Jan 01 1970 00:00:00</code><br><code>Jan 01 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td>Zeichenketten, die wie <code>toUTCString()</code> aussehen</td>
<td><code>Thu, 01 Jan 1970 00:00:00</code><br><code>Thu, 01 Jan 1970</code><br><code>01 Jan 1970 00:00:00</code><br><code>01 Jan 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td rowspan="4">Erste Datums-Komponente ist zweistellig</td>
<td><code>01-02-03</code> (erste Komponente kann ein gültiger Monat sein)</td>
<td colspan="2">1041465600000 (02.01.2003)</td>
<td>-62132745600000 (03.02.0001)<br>Hinweis: Safari nimmt immer YY-MM-DD an, aber MM/DD/YY.</td>
</tr>
<tr>
<td><code>27-02-03</code> (erste Komponente kann ein gültiger Tag, aber kein Monat sein)</td>
<td colspan="2">NaN</td>
<td>-61312291200000 (03.02.0027)</td>
</tr>
<tr>
<td><code>49-02-03</code> (erste Komponente kann kein gültiger Tag sein und ist &lt;50)</td>
<td colspan="2">2495923200000 (03.02.2049)</td>
<td>-60617980800000 (03.02.0049)</td>
</tr>
<tr>
<td><code>50-02-03</code> (erste Komponente kann kein gültiger Tag sein und ist ≥50)</td>
<td colspan="2">-628300800000 (03.02.1950)</td>
<td>-60586444800000 (03.02.0050)</td>
</tr>
<tr>
<td rowspan="3">Außerhalb der zulässigen Datums-Komponenten</td>
<td><code>2014-25-23</code><br><code>Mar 32, 2014</code><br><code>2014/25/23</code></td>
<td colspan="3">NaN</td>
</tr>
<tr>
<td><code>2014-02-30</code></td>
<td colspan="2">1393718400000 (02.03.2014)</td>
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
<td colspan="3">818031600000<br>Nur die ersten drei Zeichen werden gelesen.<br>Firefox ≤121 liest bis zum gültigen Monatsnamen, gibt also NaN zurück, wenn er "F" sieht.</td>
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
