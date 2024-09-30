---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Date.parse()`** analysiert eine Zeichenfolgendarstellung eines Datums und gibt den [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des Datums zurück.

Nur das Format [date time string format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) ist explizit als unterstützt angegeben. Andere Formate sind implementierungsabhängig und funktionieren möglicherweise nicht in allen Browsern. Eine Bibliothek kann helfen, wenn viele verschiedene Formate unterstützt werden sollen.

{{EmbedInteractiveExample("pages/js/date-parse.html")}}

## Syntax

```js-nolint
Date.parse(dateString)
```

### Parameter

- `dateString`
  - : Eine Zeichenfolge im [date time string format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format). Siehe die verlinkte Referenz für Hinweise zur Verwendung verschiedener Formate.

### Rückgabewert

Eine Zahl, die den [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums darstellt. Wenn `dateString` nicht als gültiges Datum analysiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Diese Funktion ist nützlich, um Datumswerte basierend auf Zeichenfolgenwerten festzulegen, zum Beispiel in Verbindung mit der Methode {{jsxref("Date/setTime", "setTime()")}}.

Da `parse()` eine statische Methode von `Date` ist, verwenden Sie sie immer als `Date.parse()` und nicht als Methode eines von Ihnen erstellten `Date`-Objekts.

## Beispiele

### Verwendung von Date.parse()

Die folgenden Aufrufe geben alle `1546300800000` zurück. Der erste impliziert die UTC-Zeit, da es sich nur um ein Datum handelt, und die anderen geben die UTC-Zeitzone explizit an.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

Der folgende Aufruf, der keine Zeitzone angibt, wird auf den 2019-01-01 um 00:00:00 in der lokalen Zeitzone des Systems festgelegt, da sowohl Datum als auch Uhrzeit vorhanden sind.

```js
Date.parse("2019-01-01T00:00:00");
```

### Nicht-standardisierte Datumszeichenfolgen

> [!NOTE]
> Dieser Abschnitt enthält implementierungsspezifisches Verhalten, das zwischen Implementierungen inkonsistent sein kann.

Implementierungen verwenden normalerweise die lokale Zeitzone, wenn die Datumszeichenfolge nicht standardisiert ist. Zur Konsistenz nehmen wir an, dass der Code die UTC-Zeitzone verwendet.

> [!NOTE]
> Die Zeitzonenverschiebung der lokalen Zeitzone stammt von den Systemeinstellungen des Geräts und wird dann auf das zu analysierende Datum angewendet. [Die Sommerzeit (DST) der lokalen Zeitzone kann ebenfalls Einfluss darauf haben](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions).

```js
Date.parse("Jan 1, 1970"); // 0 in all implementations

Date.parse("Thu, 01 Jan 1970 00:00:00"); // 0 in all implementations

Date.parse("1970,1,1"); // 0 in Chrome and Firefox, NaN in Safari

Date.parse("02 01 1970");
// 2678400000 in Chrome and Firefox (Sun Feb 01 1970 00:00:00 GMT+0000);
// NaN in Safari

// With explicit timezone
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT+0300");
// -10800000 in all implementations in all timezones

// Single number
Date.parse("0");
// NaN in Firefox ≤122
// 946684800000 in Chrome and Firefox ≥123  (Sat Jan 01 2000 00:00:00 GMT+0000);
// -62167219200000 in Safari (Sat Jan 01 0000 00:00:00 GMT+0000)

// Two-digit number that may be a month
Date.parse("28");
// NaN Chrome and Firefox
// -61283606400000 in Safari (Fri Dec 31 0027 23:58:45 GMT-0001)

// Two-digit year
Date.parse("70/01/01"); // 0 in all implementations

// Out-of-bounds date components
Date.parse("2014-25-23"); // NaN in all implementations
Date.parse("Mar 32, 2014"); // NaN in all implementations
Date.parse("2014/25/23"); // NaN in all implementations

Date.parse("2014-02-30");
// NaN in Safari
// 1393718400000 in Chrome and Firefox (Sun Mar 02 2014 00:00:00 GMT+0000)
Date.parse("02/30/2014"); // 1393718400000 in all implementations

// Chrome, Safari, and Firefox 122 and later parse only the first three letters for the month.
// FF121 and earlier parse first three letters and any substring up to the correct month name.
Date.parse("04 Dec 1995"); // 818031600000 in all implementations
Date.parse("04 Decem 1995"); // 818031600000 in all implementations
Date.parse("04 December 1995"); // 818031600000 in all implementations
Date.parse("04 DecFoo 1995"); // NaN in Firefox 121 and earlier. 818031600000 in other implementations
Date.parse("04 De 1995"); // NaN in all implementations
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.UTC()")}}
