---
title: Date.parse()
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`Date.parse()`** statische Methode analysiert eine Zeichenkette, die ein Datum darstellt, und gibt den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des Datums zurück.

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
  - : Eine Zeichenkette im [Date-Time-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format). Sehen Sie sich die verlinkte Referenz für Vorsichtsmaßnahmen bei der Verwendung verschiedener Formate an.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Wenn `dateString` nicht als gültiges Datum analysiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Diese Funktion ist nützlich, um Datumswerte basierend auf Zeichenkettenwerten festzulegen, beispielsweise in Verbindung mit der {{jsxref("Date/setTime", "setTime()")}} Methode.

Die Formate, die `parse()` verarbeiten kann, sind nicht ausdrücklich festgelegt, aber es gibt einige Invarianten:

- Das [Date-Time-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) (erstellt durch {{jsxref("Date/toISOString", "toISOString()")}}) muss unterstützt werden.
- Wenn `x` ein beliebiges Datum ist, dessen Millisekundenwert null ist, dann sollte `x.valueOf()` gleich einem der folgenden sein: `Date.parse(x.toString())`, `Date.parse(x.toUTCString())`, `Date.parse(x.toISOString())`. Das bedeutet, dass die Formate, die durch {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} erstellt werden, ebenfalls unterstützt werden sollten.
- Die Spezifikation erfordert _nicht_ die Unterstützung des Formats, das durch {{jsxref("Date/toLocaleString", "toLocaleString()")}} erstellt wird. Allerdings versuchen alle großen Engines, das `toLocaleString("en-US")` Format zu unterstützen.

Andere Formate sind implementierungsdefiniert und funktionieren möglicherweise nicht in allen Browsern. Eine Bibliothek kann hilfreich sein, wenn viele verschiedene Formate unterstützt werden müssen. Tatsächlich ist die Unzuverlässigkeit von `Date.parse()` eine der Beweggründe für die Einführung der {{jsxref("Temporal")}} API.

Da `parse()` eine statische Methode von `Date` ist, verwenden Sie sie immer als `Date.parse()` und nicht als Methode eines erstellten `Date`-Objekts.

## Beispiele

### Verwendung von Date.parse()

Die folgenden Aufrufe geben alle `1546300800000` zurück. Der erste impliziert die UTC-Zeit, weil er nur das Datum enthält, und die anderen geben die UTC-Zeitzone ausdrücklich an.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

Der folgende Aufruf, der keine Zeitzone angibt, wird auf den 01.01.2019 um 00:00:00 in der lokalen Zeitzone des Systems gesetzt, da er sowohl Datum als auch Zeit enthält.

```js
Date.parse("2019-01-01T00:00:00");
```

### toString() und toUTCString() Formate

Abgesehen vom Standard-Date-Time-String-Format werden die Formate {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} unterstützt:

```js
// toString() format
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// 18000000 in all implementations in all timezones

// toUTCString() format
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// 0 in all implementations in all timezones
```

### Nicht-Standard-Datumsstring

> [!NOTE]
> Dieser Abschnitt enthält implementierungsspezifisches Verhalten, das je nach Browser oder verschiedenen Browserversionen inkonsistent sein kann. Er ist nicht als umfassende Browser-Kompatibilitätstabelle gedacht und Sie sollten immer Ihre eigenen Tests durchführen, bevor Sie ein Format in Ihrem Code verwenden.

Implementierungen verwenden in der Regel die lokale Zeitzone, wenn die Datumszeichenkette nicht standardisiert ist. Zur Konsistenz nehmen wir an, dass die Laufzeit die UTC-Zeitzone verwendet, und es sei denn, es wird anders angegeben, kann sich die Ausgabe mit der Zeitzone des Geräts ändern. [Die Sommerzeit (DST) der lokalen Zeitzone kann ebenfalls einen Einfluss darauf haben](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions).

Hier sind einige weitere Beispiele für nicht standardisierte Datumszeichenketten. Browser sind sehr großzügig beim Parsen von Datumszeichenketten und können jeden Teil einer Zeichenkette weglassen, den sie nicht analysieren können. Aus Kompatibilitätsgründen kopieren Browser oft das Verhalten voneinander, sodass sich diese Verarbeitungspatterns über mehrere Browser hinweg verbreiten. Wie bereits erwähnt, sind die folgenden Beispiele nur zur Illustration gedacht und keineswegs vollständig:

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
<td colspan="2">946684800000 (Jan 01 2000); NaN in Firefox ≤122</td>
<td>-62167219200000 (Jan 01 0000)</td>
</tr>
<tr>
<td><code>31</code> (zweistellig)</td>
<td colspan="2">NaN</td>
<td>-61188912000000 (Jan 01 0031)</td>
</tr>
<tr>
<td><code>999</code> (drei-/vierstellig)</td>
<td colspan="3">-30641733102000 (Jan 01 0999)</td>
</tr>
<tr>
<td rowspan="4">Datumszeichenketten, die verschiedene Trennzeichen verwenden</td>
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
<td rowspan="4">Erste Datumskomponente ist zweistellig</td>
<td><code>01-02-03</code> (erstes Segment kann ein gültiger Monat sein)</td>
<td colspan="2">1041465600000 (Jan 02 2003)</td>
<td>-62132745600000 (Feb 03 0001)<br>Hinweis: Safari nimmt immer YY-MM-DD an, aber MM/DD/YY.</td>
</tr>
<tr>
<td><code>27-02-03</code> (erstes Segment kann ein gültiger Tag, aber kein Monat sein)</td>
<td colspan="2">NaN</td>
<td>-61312291200000 (Feb 03 0027)</td>
</tr>
<tr>
<td><code>49-02-03</code> (erstes Segment kann kein gültiger Tag sein und ist &lt;50)</td>
<td colspan="2">2495923200000 (Feb 03 2049)</td>
<td>-60617980800000 (Feb 03 0049)</td>
</tr>
<tr>
<td><code>50-02-03</code> (erstes Segment kann kein gültiger Tag sein und ist ≥50)</td>
<td colspan="2">-628300800000 (Feb 03 1950)</td>
<td>-60586444800000 (Feb 03 0050)</td>
</tr>
<tr>
<td rowspan="3">Außerhalb des Bereichs liegende Datumskomponenten</td>
<td><code>2014-25-23</code><br><code>Mar 32, 2014</code><br><code>2014/25/23</code></td>
<td colspan="3">NaN</td>
</tr>
<tr>
<td><code>2014-02-30</code></td>
<td colspan="2">1393718400000 (Mar 02 2014)</td>
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
<td colspan="3">818031600000<br>Nur die ersten drei Zeichen werden gelesen.<br>Firefox ≤121 liest bis zum gültigen Monatsnamen, wodurch NaN zurückgegeben wird, wenn es "F" sieht.</td>
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
