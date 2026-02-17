---
title: Temporal.PlainDate.prototype.year
short-title: year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/year
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

Die **`year`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderbezogenen Epoche-Jahres darstellt. Diese Eigenschaft hat die gleiche Funktion wie das Paar {{jsxref("Temporal/PlainDate/era", "era")}}/{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} als eindeutiger Bezeichner eines Jahres in einem Kalender. Sie ist von [Kalendern](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

## Wert

Normalerweise ist das Jahr 1 entweder das erste Jahr der letzten Ära oder das ISO 8601 Jahr `0001`. Da `year` relativ zum Beginn des Epoche-Jahres und nicht zum Epoche-Datum ist, hat dieses Jahr, wenn die Epoche zur Mitte des Jahres liegt (nur bekannt bei dem `japanischen` Kalender), denselben `year` Wert vor und nach dem Startdatum der Ära (bei dem `japanischen` Kalender ist `year` das gleiche wie das ISO 8601 Jahr).

Alle [spezifizierten Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) haben arithmetische Jahre, die vollständig durch die Spezifikation definiert sind.

- Die folgenden Kalender haben dasselbe Epoche-Jahr wie ISO 8601: `chinese`, `dangi`, `gregory`, `japanese`, bei denen `year: 1` dem ISO-Jahr `1` entspricht.
- Der `buddhist` Kalender verwendet die Buddhistische Epoche von 543 v. Chr., sodass `year: 1` dem ISO-Jahr `-542` entspricht.
- Der `coptic` Kalender verwendet die Koptische Epoche von 284 n. Chr., sodass `year: 1` dem ISO-Jahr `284` entspricht.
- Der `ethioaa` Kalender verwendet die Anno Mundi Epoche von 5493 v. Chr., sodass `year: 1` dem ISO-Jahr `-5492` entspricht.
- Der `ethiopic` Kalender verwendet die Äthiopische Epoche von 8 n. Chr., sodass `year: 1` dem ISO-Jahr `8` entspricht.
- Der `hebrew` Kalender verwendet die Anno Mundi Epoche von 3761 v. Chr., sodass `year: 1` dem ISO-Jahr `-3760` entspricht.
- Der `indian` Kalender verwendet die Śaka Epoche von 79 n. Chr., sodass `year: 1` dem ISO-Jahr `79` entspricht.
- Die folgenden Kalender verwenden die Hijri Epoche von 622 n. Chr.: `islamic-civil`, `islamic-tbla`, `islamic-umalqura`, `persian`, bei denen `year: 1` dem ISO-Jahr `622` entspricht.
- Der `roc` Kalender verwendet die Minguo Epoche von 1912 n. Chr., sodass `year: 1` dem ISO-Jahr `1912` entspricht.

> [!NOTE]
> Für die `chinese` und `dangi` Kalender verwendet das CLDR Datenmaterial standardmäßig die Huangdi Epoche von 2637 v. Chr., aber Temporal hat sie aus Einfachheitsgründen auf die ISO 8601 Epoche definiert.

Der Set-Accessor von `year` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDate/with", "with()")}} Methode, um ein neues `Temporal.PlainDate` Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von year

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.year); // 2021

const date2 = Temporal.PlainDate.from("-002021-07-01");
console.log(date2.year); // -2021

const date3 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date3.year); // 2021; although the Japanese calendar uses eras,
// there's no obvious "default era", so the year is the same as the ISO year

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=hebrew]");
console.log(date4.year); // 5781; the Hebrew calendar uses the Anno Mundi epoch, which starts in 3761 BC
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
