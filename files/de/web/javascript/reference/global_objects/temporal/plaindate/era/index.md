---
title: Temporal.PlainDate.prototype.era
short-title: era
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/era
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

Die **`era`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt eine kalender-spezifische Zeichenkette in Kleinbuchstaben zurück, die die Epoche dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z. B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, so wie `year` dies tut. Es ist [kalenderabhängig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Bei Gregorianisch ist es entweder `"ce"` oder `"bce"`.

## Wert

Alle [spezifizierten Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) haben Epochen, die vollständig durch die Spezifikation definiert sind.

- Die folgenden Kalender haben eine einzige Epoche:
  - `buddhist`: `"be"`
  - `coptic`: `"am"`
  - `ethioaa`: `"aa"`
  - `hebrew`: `"am"`
  - `indian`: `"shaka"`
  - `persian`: `"ap"`
- Die folgenden Kalender haben zwei Epochen. Eine ist die _Epoche_, in der das `eraYear` bei 1 beginnt und dem {{jsxref("Temporal/PlainDate/year", "year")}} entspricht. Die andere ist die inverse Epoche, in der das `eraYear` ebenfalls bei 1 beginnt und gleich `1 - year` ist (also `eraYear: 1` entspricht Jahr `0`, `eraYear: 2` Jahr `-1` usw.):
  - `gregory`: Epoche `"ce"`, inverse Epoche `"bce"`
  - `islamic-civil`, `islamic-tbla`, `islamic-umalqura`: Epoche `"ah"`, inverse Epoche `"bh"`
  - `roc`: Epoche `"roc"`, inverse Epoche `"broc"`
- Der `ethiopic` Kalender hat eine `"am"` Epoche, die die Epoche ist. Jahre vor `1` gehören zur `"aa"` Epoche, deren `eraYear` gleich `year - 5500` ist (also `eraYear: -1000` entspricht Jahr `-6500`, `eraYear: 1` entspricht Jahr `-5499`, bis zu `eraYear: 5500` als Jahr `0`).
- Der `japanese` Kalender fügt für jeden neuen Kaiser eine Epoche hinzu, sodass das Ausgabedatum und die Epoche für ein zukünftiges Datum möglicherweise nicht mit dem Eingabedatum und der Eingabeepoche übereinstimmen, wenn Ihr Code auf einer zukünftigen Engine-Version läuft, und wir werden sie hier nicht auflisten. Das Jahr jeder Epoche beginnt bei 1. Es ist auch der einzige bekannte Kalender, der Epochen hat, die in der Mitte eines Jahres beginnen, was bedeutet, dass dasselbe `year` je nach Monat und Tag zu unterschiedlichen `(era, eraYear)` Paaren führen kann.

  > [!WARNING]
  > Ab Oktober 2025 funktionieren im `japanese` Kalender Daten vor dem 23.10.1868 ISO (dem Startdatum des Jahres 1 Meiji) in Browsern in zweierlei Hinsicht nicht wie erwartet. Erstens, [CLDR hatte das falsche Startdatum für die Meiji-Epoche](https://unicode-org.atlassian.net/browse/CLDR-11375), was dazu führt, dass Kalenderimplementierungen die Meiji-Epoche weiter in die Vergangenheit ausdehnen, als sie tatsächlich ging. Zweitens spezifiziert der kommende [Intl Epoche und MonatCode Vorschlag](https://tc39.es/proposal-intl-era-monthcode/), dass Datierungen vor dem 01.01.1873 ISO gregorianische Epochen verwenden sollten, aber Browser stattdessen traditionell Näherungen der vorherigen japanischen Epochen verwendet haben. Der `japanese` Kalender wurde am 1. Januar, 6 Meiji / 01.01.1873 ISO in Gebrauch genommen, sodass diese Probleme nur die proleptischen Daten betreffen.

- Andere [spezifizierte Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types): `chinese`, `dangi`, `iso8601`, verwenden keine Epochen und geben `undefined` zurück.

Der Set-Accessor von `era` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDate/with", "with()")}}-Methode, um ein neues `Temporal.PlainDate`-Objekt mit dem gewünschten neuen Wert zu erstellen. Beim Setzen von Epochen werden auch die Aliase `"ad"` und `"bc"` für die `"ce"` und `"bce"` Epochen der `gregory` oder `japanese` Kalender akzeptiert.

> [!NOTE]
> Diese Zeichenkette ist nicht für die Anzeige an Benutzer gedacht. Verwenden Sie {{jsxref("Temporal/PlainDate/toLocaleString", "toLocaleString()")}} mit den entsprechenden Optionen, um eine lokalisierte Zeichenkette zu erhalten.

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

### Ändern von era

Sie können `era` nur für Kalender setzen, die diese unterstützen. Zum Beispiel hat der ISO 8601 Kalender keine Epochen. Beachten Sie, dass Sie `era` und `eraYear` zusammen bereitstellen müssen.

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
