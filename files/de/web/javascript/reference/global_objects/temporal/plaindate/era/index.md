---
title: Temporal.PlainDate.prototype.era
short-title: era
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/era
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

Die **`era`** Zugriffseigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine kalenderspezifische, kleingeschriebene Zeichenkette zurück, die die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, auf die gleiche Weise wie `year`. Es ist [kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den Gregorianischen Kalender ist es entweder `"ce"` oder `"bce"`.

## Wert

Alle [spezifizierten Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) haben Ären, die vollständig durch die Spezifikation definiert sind.

- Die folgenden Kalender haben eine einzige Ära:
  - `buddhist`: `"be"`
  - `coptic`: `"am"`
  - `ethioaa`: `"aa"`
  - `hebrew`: `"am"`
  - `indian`: `"shaka"`
  - `persian`: `"ap"`
- Die folgenden Kalender haben zwei Ären. Eine ist die _Epochen-Ära_, in der `eraYear` bei 1 beginnt und mit {{jsxref("Temporal/PlainDate/year", "year")}} identisch ist. Die andere ist die inverse Ära, in der `eraYear` ebenfalls bei 1 beginnt und gleich `1 - year` ist (also entspricht `eraYear: 1` dem Jahr `0`, `eraYear: 2` dem Jahr `-1`, usw.):
  - `gregory`: Epochen-Ära `"ce"`, inversee Ära `"bce"`
  - `islamic-civil`, `islamic-tbla`, `islamic-umalqura`: Epochen-Ära `"ah"`, inversee Ära `"bh"`
  - `roc`: Epochen-Ära `"roc"`, inversee Ära `"broc"`
- Der `ethiopic` Kalender hat eine `"am"` Ära, die die Epochen-Ära ist. Jahre vor `1` gehören zur `"aa"` Ära, deren `eraYear` gleich `year - 5500` ist (also entspricht `eraYear: -1000` dem Jahr `-6500`, `eraYear: 1` dem Jahr `-5499`, bis zu `eraYear: 5500` als Jahr `0`).
- Der `japanese` Kalender fügt für jeden neuen Kaiser eine Ära hinzu, sodass das Ausgabetermin und die Ära für ein zukünftiges Datum möglicherweise nicht mit dem Eingabejahr und der Ära übereinstimmen, wenn Ihr Code auf einer zukünftigen Engine-Version ausgeführt wird, und wir werden sie hier nicht auflisten. Das Jahr jeder Ära beginnt bei 1. Es ist zudem der einzige Kalender, der dafür bekannt ist, dass Ären in der Mitte eines Jahres beginnen, was bedeutet, dass dasselbe `year` je nach Monat und Tag zu unterschiedlichen `(era, eraYear)` Paaren gehören kann.

  > [!WARNING]
  > Ab Oktober 2025, im `japanese` Kalender, funktionieren Daten vor dem 1868-10-23 ISO (dem Startdatum des Jahres 1 Meiji) in Browsern nicht wie erwartet, und zwar auf zweierlei Weise. Erstens hatte [CLDR das falsche Startdatum für die Meiji-Ära](https://unicode-org.atlassian.net/browse/CLDR-11375), was dazu führt, dass Kalendariumsetzungen die Meiji-Ära weiter in die Vergangenheit ausdehnen, als sie tatsächlich tat. Zweitens gibt die kommende [Intl Era and MonthCode Proposal](https://tc39.es/proposal-intl-era-monthcode/) an, dass Daten vor dem 1873-01-01 ISO Gregorianische Ären verwenden sollten, aber Browser haben traditionell stattdessen Annäherungen früherer japanischer Ären verwendet. Der `japanese` Kalender wurde am 1. Januar, 6 Meiji / 1873-01-01 ISO, in Gebrauch genommen, sodass diese Probleme nur proleptische Daten betreffen.

- Andere [spezifizierte Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types): `chinese`, `dangi`, `iso8601`, verwenden keine Ären und geben `undefined` zurück.

Der Set-Accessor der `era` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDate/with", "with()")}} Methode, um ein neues `Temporal.PlainDate` Objekt mit dem gewünschten neuen Wert zu erstellen. Beim Setzen von Ären werden auch die Aliase `"ad"` und `"bc"` für die `"ce"` und `"bce"` Ären der `gregory`- oder `japanese` Kalender akzeptiert.

> [!NOTE]
> Diese Zeichenkette ist nicht zur Anzeige für Benutzer gedacht. Verwenden Sie {{jsxref("Temporal/PlainDate/toLocaleString", "toLocaleString()")}} mit den entsprechenden Optionen, um eine lokalisierte Zeichenkette zu erhalten.

## Beispiele

### Verwendung von era

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.era); // undefined

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
console.log(date2.era); // ce

const date3 = Temporal.PlainDate.from("-002021-07-01[u-ca=gregory]");
console.log(date3.era); // bce

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date4.era); // reiwa
```

### Änderung von era

Sie können `era` nur für Kalender setzen, die diese unterstützen. Zum Beispiel hat der ISO 8601 Kalender keine Ären. Beachten Sie, dass Sie `era` und `eraYear` zusammen angeben müssen.

```js
const date = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
const newDate = date.with({ era: "bc", eraYear: 100 });
console.log(newDate.toString()); // -000099-07-01[u-ca=gregory]

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
const newDate2 = date2.with({ era: "meiji", eraYear: 1 });
console.log(newDate2.toString()); // 1868-07-01[u-ca=japanese]
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
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
