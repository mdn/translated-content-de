---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: 678dff77cbe5f1e8a25862e88341b301c8c63686
---

{{JSRef}}

Die statische Methode **`Date.parse()`** analysiert eine Zeichenketten-Darstellung eines Datums und gibt den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des Datums zurück.

{{EmbedInteractiveExample("pages/js/date-parse.html")}}

## Syntax

```js-nolint
Date.parse(dateString)
```

### Parameter

- `dateString`
  - : Eine Zeichenkette im [Datums- und Zeitformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format). Siehe den verlinkten Verweis für Einschränkungen bei der Verwendung verschiedener Formate.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Wenn `dateString` nicht als gültiges Datum geparst werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Diese Funktion ist nützlich, um Datumswerte basierend auf Zeichenkettenwerten festzulegen, beispielsweise in Verbindung mit der Methode {{jsxref("Date/setTime", "setTime()")}}.

Die Formate, die `parse()` handhaben kann, sind nicht explizit spezifiziert, aber es gibt einige Invarianten:

- Das [Datums- und Zeitformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) (wie es von {{jsxref("Date/toISOString", "toISOString()")}} erzeugt wird) muss unterstützt werden.
- Wenn `x` ein beliebiges Datum ist, dessen Millisekundenwert null ist, dann sollte `x.valueOf()` gleich jedem der folgenden Werte sein: `Date.parse(x.toString())`, `Date.parse(x.toUTCString())`, `Date.parse(x.toISOString())`. Das bedeutet, dass die von {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} erzeugten Formate ebenfalls unterstützt werden sollten.
- Die Spezifikation erfordert _nicht_ die Unterstützung des Formats, das von {{jsxref("Date/toLocaleString", "toLocaleString()")}} erzeugt wird. Dennoch versuchen alle großen Engines, das Format `toLocaleString("en-US")` zu unterstützen.

Andere Formate sind implementierungsabhängig und funktionieren möglicherweise nicht in allen Browsern. Eine Bibliothek kann hilfreich sein, wenn viele verschiedene Formate berücksichtigt werden sollen. Tatsächlich ist die Unzuverlässigkeit von `Date.parse()` einer der Gründe für die Einführung der {{jsxref("Temporal")}} API.

Da `parse()` eine statische Methode von `Date` ist, wird sie immer als `Date.parse()` und nicht als Methode eines erstellten `Date`-Objekts verwendet.

## Beispiele

### Verwendung von Date.parse()

Die folgenden Aufrufe ergeben alle `1546300800000`. Der erste wird aufgrund der Angabe nur des Datums UTC-Zeit implizieren, die anderen spezifizieren explizit die UTC-Zeitzone.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

Der folgende Aufruf, der keine Zeitzone angibt, wird auf den 01.01.2019 um 00:00:00 in der lokalen Zeitzone des Systems gesetzt, da sowohl Datum als auch Uhrzeit angegeben sind.

```js
Date.parse("2019-01-01T00:00:00");
```

### toString()- und toUTCString()-Formate

Neben dem standardisierten Datums- und Zeitformat werden auch die von {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} erzeugten Formate unterstützt:

```js
// toString() format
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// 18000000 in all implementations in all timezones

// toUTCString() format
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// 0 in all implementations in all timezones
```

### Nicht standardisierte Datumsstrings

> [!NOTE]
> Dieser Abschnitt enthält implementierungsspezifisches Verhalten, das zwischen Browsern oder verschiedenen Versionen von Browsern inkonsistent sein kann. Er ist nicht als umfassende Tabelle zur Browser-Kompatibilität gedacht, und Sie sollten Ihre eigenen Tests durchführen, bevor Sie ein bestimmtes Format in Ihrem Code verwenden.

Implementierungen setzen in der Regel die lokale Zeitzone voraus, wenn die Datumszeichenkette nicht standardisiert ist. Zur Konsistenz nehmen wir an, dass zur Laufzeit die UTC-Zeitzone verwendet wird. Sofern nicht anders spezifiziert, variiert die Ausgabe mit der Zeitzone des Geräts. [Die Sommerzeit (DST) der lokalen Zeitzone kann sich ebenfalls auswirken](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions).

Hier sind weitere Beispiele für nicht-standardisierte Datumszeichenfolgen. Browser sind sehr nachsichtig beim Parsen von Datumszeichenfolgen und können Teile einer Zeichenfolge ignorieren, die sie nicht analysieren können. Aus Kompatibilitätsgründen übernehmen Browser oft das Verhalten anderer, sodass diese Verhaltensmuster sich oft über mehrere Browser hinweg verbreiten. Wie bereits erwähnt, dienen die folgenden Beispiele nur der Veranschaulichung und sind keinesfalls erschöpfend:

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
<td rowspan="4">Datumszeichenfolgen mit verschiedenen Trennzeichen</td>
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
<td>Zeichenfolgen, die wie <code>toString()</code> aussehen</td>
<td><code>Thu&nbsp;Jan&nbsp;01&nbsp;1970&nbsp;00:00:00</code><br><code>Thu Jan 01 1970</code><br><code>Jan 01 1970 00:00:00</code><br><code>Jan 01 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td>Zeichenfolgen, die wie <code>toUTCString()</code> aussehen</td>
<td><code>Thu, 01 Jan 1970 00:00:00</code><br><code>Thu, 01 Jan 1970</code><br><code>01 Jan 1970 00:00:00</code><br><code>01 Jan 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td rowspan="4">Erste Datumskomponente ist zweistellig</td>
<td><code>01-02-03</code> (erste Komponente kann gültiger Monat sein)</td>
<td colspan="2">1041465600000 (02.01.2003)</td>
<td>-62132745600000 (03.02.0001)<br>Hinweis: Safari nimmt immer YY-MM-DD an, aber MM/DD/YY.</td>
</tr>
<tr>
<td><code>27-02-03</code> (erste Komponente kann gültiger Tag sein, aber kein Monat)</td>
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
<td rowspan="3">Datumskomponenten außerhalb des Bereichs</td>
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
<td colspan="3">818031600000<br>Nur die ersten drei Zeichen werden gelesen.<br>Firefox ≤121 liest bis zum gültigen Monatsnamen und gibt NaN zurück, wenn es "F" erkennt.</td>
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
