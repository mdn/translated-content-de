---
title: Date.parse()
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Date.parse()`** statische Methode verarbeitet eine Zeichenkette, die ein Datum darstellt, und gibt den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des Datums zurück.

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
  - : Eine Zeichenkette im [Datums- und Zeitformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format). Weitere Informationen zu den Fallstricken bei der Verwendung unterschiedlicher Formate finden Sie in der verlinkten Referenz.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Wenn `dateString` nicht als gültiges Datum geparst werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Diese Funktion ist nützlich, um Datumswerte basierend auf Zeichenkettenwerten festzulegen, zum Beispiel in Verbindung mit der {{jsxref("Date/setTime", "setTime()")}} Methode.

Die Formate, die `parse()` verarbeiten kann, sind nicht explizit angegeben, es gibt jedoch einige {{Glossary("invariant", "Konstanten")}}:

- Das [Datums- und Zeitformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) (produziert von {{jsxref("Date/toISOString", "toISOString()")}}) muss unterstützt werden.
- Wenn `x` ein Date ist, dessen Millisekundenmenge null ist, dann sollte `x.valueOf()` gleich einem der folgenden sein: `Date.parse(x.toString())`, `Date.parse(x.toUTCString())`, `Date.parse(x.toISOString())`. Dies bedeutet, dass die Formate, die durch {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} produziert werden, ebenfalls unterstützt werden sollten.
- Die Spezifikation erfordert _nicht_ die Unterstützung des Formats, das durch {{jsxref("Date/toLocaleString", "toLocaleString()")}} erzeugt wird. Große Engines versuchen jedoch alle, das `toLocaleString("en-US")` Format zu unterstützen.

Andere Formate sind implementationsspezifisch und funktionieren möglicherweise nicht in allen Browsern. Eine Bibliothek kann helfen, wenn viele unterschiedliche Formate unterstützt werden müssen. Tatsächlich ist die Unzuverlässigkeit von `Date.parse()` eines der Motive für die Einführung der {{jsxref("Temporal")}} API.

Da `parse()` eine statische Methode von `Date` ist, wird sie immer als `Date.parse()` verwendet und nicht als Methode eines erstellten `Date` Objekts.

## Beispiele

### Verwendung von Date.parse()

Die folgenden Aufrufe geben alle `1546300800000` zurück. Der erste impliziert UTC-Zeit, da es sich nur um ein Datum handelt, und die anderen spezifizieren explizit die UTC-Zeitzone.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

Der folgende Aufruf, der keine Zeitzone angibt, wird auf den 2019-01-01 um 00:00:00 in der lokalen Zeitzone des Systems gesetzt, da er sowohl Datum als auch Uhrzeit enthält.

```js
Date.parse("2019-01-01T00:00:00");
```

### toString() und toUTCString() Formate

Neben dem Standard-Datums- und Zeitformat werden die Formate {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} unterstützt:

```js
// toString() format
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// 18000000 in all implementations in all timezones

// toUTCString() format
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// 0 in all implementations in all timezones
```

### Nicht-standardisierte Datumszeichenketten

> [!NOTE]
> Dieser Abschnitt enthält implementationsspezifisches Verhalten, das in verschiedenen Browsern oder unterschiedlichen Browserversionen inkonsistent sein kann. Es soll keine umfassende Tabelle zur Browser-Kompatibilität darstellen, und Sie sollten immer eigene Tests durchführen, bevor Sie ein beliebiges Format in Ihrem Code verwenden.

Implementationen standardmäßig setzen häufig die lokale Zeitzone, wenn die Datumszeichenkette nicht standardisiert ist. Für Konsistenz nehmen wir an, dass die Laufzeit die UTC-Zeitzone verwendet, und sofern nicht anders angegeben, variiert die Ausgabe mit der Zeitzone des Geräts. [Die Sommerzeit (DST) der lokalen Zeitzone kann ebenfalls einen Einfluss darauf haben](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions).

Hier sind einige weitere Beispiele für nicht-standardisierte Datumszeichenketten. Browser sind sehr nachsichtig beim Parsen von Datumszeichenketten und können Teile einer Zeichenkette, die sie nicht parsen können, ignorieren. Aus Kompatibilitätsgründen kopieren Browser häufig das Verhalten anderer, sodass sich diese Verarbeitungsmuster über Browser hinweg verbreiten. Wie bereits erwähnt, dienen die folgenden Beispiele nur zur Veranschaulichung und sind keineswegs erschöpfend:

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
<td><code>0</code> (einstellige Zahl)</td>
<td colspan="2">946684800000 (01. Jan 2000); NaN in Firefox ≤122</td>
<td>-62167219200000 (01. Jan 0000)</td>
</tr>
<tr>
<td><code>31</code> (zweistellige Zahl)</td>
<td colspan="2">NaN</td>
<td>-61188912000000 (01. Jan 0031)</td>
</tr>
<tr>
<td><code>999</code> (drei-/vierstellige Zahl)</td>
<td colspan="3">-30641733102000 (01. Jan 0999)</td>
</tr>
<tr>
<td rowspan="4">Datumszeichenketten mit verschiedenen Trennzeichen</td>
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
<td rowspan="4">Das erste Datumselement ist 2-stellig</td>
<td><code>01-02-03</code> (das erste Segment kann ein gültiger Monat sein)</td>
<td colspan="2">1041465600000 (02. Jan 2003)</td>
<td>-62132745600000 (03. Feb 0001)<br>Hinweis: Safari nimmt immer JJ-MM-TT an, aber MM/TT/JJ.</td>
</tr>
<tr>
<td><code>27-02-03</code> (das erste Segment kann ein gültiger Tag, aber kein Monat sein)</td>
<td colspan="2">NaN</td>
<td>-61312291200000 (03. Feb 0027)</td>
</tr>
<tr>
<td><code>49-02-03</code> (das erste Segment kann kein gültiger Tag sein und ist &lt;50)</td>
<td colspan="2">2495923200000 (03. Feb 2049)</td>
<td>-60617980800000 (03. Feb 0049)</td>
</tr>
<tr>
<td><code>50-02-03</code> (das erste Segment kann kein gültiger Tag sein und ist ≥50)</td>
<td colspan="2">-628300800000 (03. Feb 1950)</td>
<td>-60586444800000 (03. Feb 0050)</td>
</tr>
<tr>
<td rowspan="3">Datumskomponenten außerhalb der Grenzen</td>
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
