---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Date.parse()`** analysiert eine String-Repräsentation eines Datums und gibt den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des Datums zurück.

Nur das [Datum-Zeit-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) wird ausdrücklich unterstützt. Andere Formate sind implementationsspezifisch und funktionieren möglicherweise nicht in allen Browsern. Eine Bibliothek kann hilfreich sein, wenn viele verschiedene Formate berücksichtigt werden müssen.

{{EmbedInteractiveExample("pages/js/date-parse.html")}}

## Syntax

```js-nolint
Date.parse(dateString)
```

### Parameter

- `dateString`
  - : Ein String im [Datum-Zeit-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format). Siehe die verlinkte Referenz für Hinweise zur Verwendung unterschiedlicher Formate.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) des angegebenen Datums repräsentiert. Falls `dateString` nicht als gültiges Datum analysiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Diese Funktion ist nützlich, um Datumswerte basierend auf String-Werten festzulegen, zum Beispiel in Verbindung mit der Methode {{jsxref("Date/setTime", "setTime()")}}.

Da `parse()` eine statische Methode von `Date` ist, wird sie immer als `Date.parse()` verwendet und nicht als Methode eines von Ihnen erstellten `Date`-Objekts.

## Beispiele

### Verwendung von Date.parse()

Die folgenden Aufrufe geben alle `1546300800000` zurück. Der erste impliziert UTC-Zeit, da es sich nur um ein Datum handelt und die anderen die UTC-Zeitzone explizit angeben.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

Der folgende Aufruf, der keine Zeitzone angibt, wird auf den 01.01.2019 um 00:00:00 in der lokalen Zeitzone des Systems eingestellt, da sowohl Datum als auch Uhrzeit angegeben sind.

```js
Date.parse("2019-01-01T00:00:00");
```

### Nicht-standardmäßige Datumszeichenfolgen

> [!NOTE]
> Dieser Abschnitt enthält implementation-spezifisches Verhalten, das inkonsistent sein kann.

Implementierungen verwenden in der Regel die lokale Zeitzone, wenn die Datumszeichenfolge nicht standardmäßig ist. Zur Konsistenz nehmen wir an, dass der Code die UTC-Zeitzone verwendet.

> [!NOTE]
> Der lokale Zeitzonenoffset stammt aus den Systemeinstellungen des Geräts und wird dann auf das zu analysierende Datum angewendet. [Die Sommerzeit (DST) der lokalen Zeitzone kann ebenfalls Auswirkungen darauf haben](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#varied_results_in_daylight_saving_time_dst_regions).

```js
Date.parse("Jan 1, 1970"); // 0 in allen Implementierungen

Date.parse("Thu, 01 Jan 1970 00:00:00"); // 0 in allen Implementierungen

Date.parse("1970,1,1"); // 0 in Chrome und Firefox, NaN in Safari

Date.parse("02 01 1970");
// 2678400000 in Chrome und Firefox (Sun Feb 01 1970 00:00:00 GMT+0000);
// NaN in Safari

// Mit expliziter Zeitzone
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT+0300");
// -10800000 in allen Implementierungen in allen Zeitzonen

// Einzelne Zahl
Date.parse("0");
// NaN in Firefox ≤122
// 946684800000 in Chrome und Firefox ≥123  (Sat Jan 01 2000 00:00:00 GMT+0000);
// -62167219200000 in Safari (Sat Jan 01 0000 00:00:00 GMT+0000)

// Zwei Ziffern, die ein Monat sein könnten
Date.parse("28");
// NaN in Chrome und Firefox
// -61283606400000 in Safari (Fri Dec 31 0027 23:58:45 GMT-0001)

// Zweistelliges Jahr
Date.parse("70/01/01"); // 0 in allen Implementierungen

// Außerhalb der Grenzen liegende Datumsbestandteile
Date.parse("2014-25-23"); // NaN in allen Implementierungen
Date.parse("Mar 32, 2014"); // NaN in allen Implementierungen
Date.parse("2014/25/23"); // NaN in allen Implementierungen

Date.parse("2014-02-30");
// NaN in Safari
// 1393718400000 in Chrome und Firefox (Sun Mar 02 2014 00:00:00 GMT+0000)
Date.parse("02/30/2014"); // 1393718400000 in allen Implementierungen

// Chrome, Safari und Firefox 122 und später parsen nur die ersten drei Buchstaben des Monats.
// FF121 und früher parsen die ersten drei Buchstaben und jede Teilzeichenfolge bis zum korrekten Monatsnamen.
Date.parse("04 Dec 1995"); // 818031600000 in allen Implementierungen
Date.parse("04 Decem 1995"); // 818031600000 in allen Implementierungen
Date.parse("04 December 1995"); // 818031600000 in allen Implementierungen
Date.parse("04 DecFoo 1995"); // NaN in Firefox 121 und früher. 818031600000 in anderen Implementierungen
Date.parse("04 De 1995"); // NaN in allen Implementierungen
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.UTC()")}}
