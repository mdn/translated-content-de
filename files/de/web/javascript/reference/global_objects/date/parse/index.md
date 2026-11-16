---
title: Date.parse()
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die statische Methode **`Date.parse()`** analysiert die Zeichenkettendarstellung eines Datums und gibt dessen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück.

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
  - : Eine Zeichenkette im [Datums- und Uhrzeitformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format). Hinweise zur Verwendung anderer Formate finden Sie in der verlinkten Referenz.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Wenn `dateString` nicht als gültiges Datum analysiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Diese Funktion ist nützlich, um Datumswerte anhand von Zeichenketten festzulegen, beispielsweise in Verbindung mit der Methode {{jsxref("Date/setTime", "setTime()")}}.

Die Formate, die `parse()` verarbeiten kann, sind nicht ausdrücklich festgelegt. Es gibt jedoch einige {{Glossary("invariant", "Invarianten")}}:

- Das [Datums- und Uhrzeitformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format), das von {{jsxref("Date/toISOString", "toISOString()")}} erzeugt wird, muss unterstützt werden.
- Wenn `x` ein Date ist, dessen Millisekundenanteil null beträgt, sollte `x.valueOf()` jedem der folgenden Werte entsprechen: `Date.parse(x.toString())`, `Date.parse(x.toUTCString())`, `Date.parse(x.toISOString())`. Das bedeutet, dass auch die von {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} erzeugten Formate unterstützt werden sollten.
- Die Spezifikation verlangt _keine_ Unterstützung für das von {{jsxref("Date/toLocaleString", "toLocaleString()")}} erzeugte Format. Die großen JavaScript-Engines versuchen jedoch alle, das Format von `toLocaleString("en-US")` zu unterstützen.

Andere Formate hängen von der Implementierung ab und funktionieren möglicherweise nicht in allen Browsern. Wenn viele unterschiedliche Formate verarbeitet werden müssen, kann eine Bibliothek helfen. Die Unzuverlässigkeit von `Date.parse()` ist einer der Gründe für die Einführung der {{jsxref("Temporal")}}-API.

Da `parse()` eine statische Methode von `Date` ist, verwenden Sie sie immer als `Date.parse()` und nicht als Methode eines von Ihnen erstellten `Date`-Objekts.

## Beispiele

### Date.parse() verwenden

Die folgenden Aufrufe geben alle `1546300800000` zurück. Beim ersten wird UTC angenommen, da nur ein Datum angegeben ist. Die anderen geben die UTC-Zeitzone ausdrücklich an.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

Beim folgenden Aufruf, der keine Zeitzone angibt, wird das Datum auf den 01.01.2019 um 00:00:00 Uhr in der lokalen Zeitzone des Systems gesetzt, da sowohl ein Datum als auch eine Uhrzeit angegeben sind.

```js
Date.parse("2019-01-01T00:00:00");
```

### Formate von toString() und toUTCString()

Neben dem standardisierten Datums- und Uhrzeitformat werden auch die Formate von {{jsxref("Date/toString", "toString()")}} und {{jsxref("Date/toUTCString", "toUTCString()")}} unterstützt:

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
> Dieser Abschnitt beschreibt implementierungsspezifisches Verhalten, das sich zwischen Browsern oder verschiedenen Browserversionen unterscheiden kann. Er ist keine vollständige Tabelle zur Browser-Kompatibilität. Testen Sie daher jedes Format selbst, bevor Sie es in Ihrem Code verwenden.

Bei nicht standardisierten Datumszeichenketten verwenden Implementierungen normalerweise standardmäßig die lokale Zeitzone. Für die folgenden Beispiele nehmen wir an, dass die Laufzeitumgebung die UTC-Zeitzone verwendet. Sofern nicht anders angegeben, hängt die Ausgabe von der Zeitzone des Geräts ab. Auch die [Sommerzeit (DST) in der lokalen Zeitzone kann sich darauf auswirken](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions).

Hier sind weitere Beispiele für nicht standardisierte Datumszeichenketten. Browser sind beim Analysieren von Datumszeichenketten sehr tolerant und können Teile einer Zeichenkette verwerfen, die sie nicht analysieren können. Aus Kompatibilitätsgründen übernehmen Browser häufig das Verhalten anderer Browser, sodass sich solche Verarbeitungsmuster browserübergreifend verbreiten. Wie bereits erwähnt, dienen die folgenden Beispiele nur zur Veranschaulichung und sind keineswegs vollständig:

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
<td colspan="2">946684800000 (01. Jan. 2000); NaN in Firefox ≤122</td>
<td>-62167219200000 (01. Jan. 0000)</td>
</tr>
<tr>
<td><code>31</code> (zweistellig)</td>
<td colspan="2">NaN</td>
<td>-61188912000000 (01. Jan. 0031)</td>
</tr>
<tr>
<td><code>999</code> (drei- oder vierstellig)</td>
<td colspan="3">-30641760000000 (01. Jan. 0999)</td>
</tr>
<tr>
<td rowspan="4">Datumszeichenketten mit unterschiedlichen Trennzeichen</td>
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
<td>Zeichenketten, die wie die Ausgabe von <code>toString()</code> aussehen</td>
<td><code>Thu&nbsp;Jan&nbsp;01&nbsp;1970&nbsp;00:00:00</code><br><code>Thu Jan 01 1970</code><br><code>Jan 01 1970 00:00:00</code><br><code>Jan 01 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td>Zeichenketten, die wie die Ausgabe von <code>toUTCString()</code> aussehen</td>
<td><code>Thu, 01 Jan 1970 00:00:00</code><br><code>Thu, 01 Jan 1970</code><br><code>01 Jan 1970 00:00:00</code><br><code>01 Jan 1970</code></td>
<td colspan="3">0</td>
</tr>
<tr>
<td rowspan="4">Erster Datumsbestandteil ist zweistellig</td>
<td><code>01-02-03</code> (der erste Teil kann ein gültiger Monat sein)</td>
<td colspan="2">1041465600000 (02. Jan. 2003)</td>
<td>-62132745600000 (03. Feb. 0001)<br>Hinweis: Safari nimmt immer das Format YY-MM-DD an, nicht aber MM/DD/YY.</td>
</tr>
<tr>
<td><code>27-02-03</code> (der erste Teil kann ein gültiger Tag, aber kein gültiger Monat sein)</td>
<td colspan="2">NaN</td>
<td>-61312291200000 (03. Feb. 0027)</td>
</tr>
<tr>
<td><code>49-02-03</code> (der erste Teil kann kein gültiger Tag sein und ist &lt;50)</td>
<td colspan="2">2495923200000 (03. Feb. 2049)</td>
<td>-60617980800000 (03. Feb. 0049)</td>
</tr>
<tr>
<td><code>50-02-03</code> (der erste Teil kann kein gültiger Tag sein und ist ≥50)</td>
<td colspan="2">-628300800000 (03. Feb. 1950)</td>
<td>-60586444800000 (03. Feb. 0050)</td>
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
<td rowspan="3">Zusätzliche Zeichen nach dem Monatsnamen</td>
<td><code>04 Dec 1995</code><br><code>04 Decem 1995</code><br><code>04 December 1995</code></td>
<td colspan="3">818035200000</td>
</tr>
<tr>
<td><code>04 DecFoo 1995</code></td>
<td colspan="3">818035200000<br>Nur die ersten drei Zeichen werden gelesen.<br>Firefox ≤121 liest bis zum Ende des gültigen Monatsnamens und gibt daher NaN zurück, wenn es auf „F“ stößt.</td>
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
