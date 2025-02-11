---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Date.parse()`** analysiert eine Zeichenketten-Darstellung eines Datums und gibt den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des Datums zurück.

{{InteractiveExample("JavaScript Demo: Date.parse()")}}

```js interactive-example
const unixTimeZero = Date.parse("01 Jan 1970 00:00:00 GMT");
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
  - : Eine Zeichenkette im [Date-Time-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format). Siehe die verlinkte Referenz für Hinweise zur Verwendung verschiedener Formate.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums repräsentiert. Wenn `dateString` nicht als gültiges Datum analysiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Diese Funktion ist hilfreich, um Datumswerte basierend auf Zeichenkettenwerten zu setzen, zum Beispiel in Verbindung mit der Methode {{jsxref("Date/setTime", "setTime()")}}.

Die Formate, die von `parse()` unterstützt werden, sind nicht explizit spezifiziert, es gibt jedoch einige Invarianten:

- Das [Date-Time-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) (erzeugt durch {{jsxref("Date/toISOString", "toISOString()")}}) muss unterstützt werden.
- Wenn `x` ein beliebiges Datum ist, dessen Millisekunden-Wert null beträgt, dann sollte `x.valueOf()` gleich einem der folgenden Werte sein: `Date.parse(x.toString())`, `Date.parse(x.toUTCString())`, `Date.parse(x.toISOString())`. Dies bedeutet, dass die durch {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} erzeugten Formate ebenfalls unterstützt werden sollten.
- Es ist _nicht_ erforderlich, dass das von {{jsxref("Date/toLocaleString", "toLocaleString()")}} erzeugte Format unterstützt wird. Allerdings versuchen alle großen Engines, das Format `toLocaleString("en-US")` zu unterstützen.

Andere Formate sind implementierungsabhängig und funktionieren möglicherweise nicht in allen Browsern. Eine Bibliothek kann helfen, wenn viele verschiedene Formate berücksichtigt werden müssen. Tatsächlich war die Unzuverlässigkeit von `Date.parse()` einer der Gründe für die Einführung der {{jsxref("Temporal")}}-API.

Da `parse()` eine statische Methode von `Date` ist, wird sie immer als `Date.parse()` verwendet und nicht als Methode eines von Ihnen erstellten `Date`-Objekts.

## Beispiele

### Verwendung von Date.parse()

Die folgenden Aufrufe geben alle `1546300800000` zurück. Der erste bedeutet UTC-Zeit, da es nur ein Datum ist, und die anderen spezifizieren die UTC-Zeitzone explizit.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

Der folgende Aufruf, bei dem keine Zeitzone angegeben wird, wird auf den 01.01.2019 um 00:00:00 in der lokalen Zeitzone des Systems festgelegt, da sowohl Datum als auch Uhrzeit festgelegt sind.

```js
Date.parse("2019-01-01T00:00:00");
```

### toString() und toUTCString() Formate

Zusätzlich zum standardmäßigen Date-Time-String-Format werden die durch {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} erzeugten Formate unterstützt:

```js
// toString() format
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// 18000000 in all implementations in all timezones

// toUTCString() format
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// 0 in all implementations in all timezones
```

### Nicht standardisierte Datumszeichenketten

> [!NOTE]
> Dieser Abschnitt enthält implementierungsabhängiges Verhalten, das möglicherweise in verschiedenen Browsern oder verschiedenen Versionen von Browsern inkonsistent ist. Er ist nicht als umfassende Browser-Kompatibilitätsübersicht gedacht, und Sie sollten immer eigene Tests durchführen, bevor Sie ein Format in Ihrem Code verwenden.

Implementierungen verwenden normalerweise die lokale Zeitzone, wenn die Datumszeichenkette nicht standardisiert ist. Der Einfachheit halber nehmen wir an, dass die Laufzeitumgebung die UTC-Zeitzone verwendet, und wenn nicht anders angegeben, wird die Ausgabe der Zeitzone des Geräts variieren. [Die Sommerzeit (DST) der lokalen Zeitzone kann ebenfalls Auswirkungen haben](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions).

Hier sind einige weitere Beispiele für nicht standardisierte Datumszeichenketten. Browser sind sehr großzügig beim Analysieren von Datumszeichenketten und können Teile einer Zeichenkette, die sie nicht analysieren können, verwerfen. Aus Kompatibilitätsgründen übernehmen Browser oft gegenseitig ihr Verhalten, sodass sich diese Verhaltensmuster zwischen den Browsern verbreiten. Wie bereits erwähnt, sind die folgenden Beispiele nur zur Veranschaulichung gedacht und keineswegs erschöpfend:

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
<td><code>0</code> (eine Ziffer)</td>
<td colspan="2">946684800000 (01. Jan 2000); NaN in Firefox ≤122</td>
<td>-62167219200000 (01. Jan 0000)</td>
</tr>
<tr>
<td><code>31</code> (zwei Ziffern)</td>
<td colspan="2">NaN</td>
<td>-61188912000000 (01. Jan 0031)</td>
</tr>
<tr>
<td><code>999</code> (drei-/vierstellige Zahl)</td>
<td colspan="3">-30641733102000 (01. Jan 0999)</td>
</tr>
<tr>
<td rowspan="4">Datumszeichenketten mit unterschiedlichen Trennzeichen</td>
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
<td rowspan="4">Erster Datumsteil besteht aus 2 Ziffern</td>
<td><code>01-02-03</code> (erster Teil kann ein gültiger Monat sein)</td>
<td colspan="2">1041465600000 (02. Jan 2003)</td>
<td>-62132745600000 (03. Feb 0001)<br>Hinweis: Safari nimmt immer YY-MM-DD an, aber MM/DD/YY.</td>
</tr>
<tr>
<td><code>27-02-03</code> (erster Teil kann ein gültiger Tag, aber kein Monat sein)</td>
<td colspan="2">NaN</td>
<td>-61312291200000 (03. Feb 0027)</td>
</tr>
<tr>
<td><code>49-02-03</code> (erster Teil kann kein gültiger Tag und ist &lt;50 sein)</td>
<td colspan="2">2495923200000 (03. Feb 2049)</td>
<td>-60617980800000 (03. Feb 0049)</td>
</tr>
<tr>
<td><code>50-02-03</code> (erster Teil kann kein gültiger Tag und ist ≥50 sein)</td>
<td colspan="2">-628300800000 (03. Feb 1950)</td>
<td>-60586444800000 (03. Feb 0050)</td>
</tr>
<tr>
<td rowspan="3">Datumsbestandteile außerhalb des gültigen Bereichs</td>
<td><code>2014-25-23</code><br><code>Mar 32, 2014</code><br><code>2014/25/23</code></td>
<td colspan="3">NaN</td>
</tr>
<tr>
<td><code>2014-02-30</code></td>
<td colspan="2">1393718400000 (02. März 2014)</td>
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
<td colspan="3">818031600000<br>Nur die ersten drei Zeichen werden gelesen.<br>Firefox ≤121 liest bis zum gültigen Monatsnamen, gibt jedoch NaN zurück, wenn er auf "F" stößt.</td>
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
