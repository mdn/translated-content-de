---
title: Temporal.ZonedDateTime.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toLocaleString
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`toLocaleString()`** von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt einen String mit einer sprachsensitiven Darstellung dieses Datums-Zeitpunkts zurück. In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, delegiert diese Methode an `Intl.DateTimeFormat` und übergibt diesen Datum-Zeitpunkt, der zu einem {{jsxref("Temporal.Instant")}} konvertiert wurde (da `Intl.DateTimeFormat` nicht direkt ein `Temporal.ZonedDateTime` formatieren kann).

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit den gleichen Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merken und sich entscheiden kann, einen Teil der Datenbank zu cachen, sodass zukünftige `format`-Aufrufe innerhalb eines eingeschränkteren Kontexts nach Lokalisierungsstrings suchen können. Allerdings unterstützt `Intl.DateTimeFormat` derzeit nicht das Formatieren von `Temporal.ZonedDateTime`-Objekten, daher müssen Sie diese zuerst zu `Temporal.Instant`-Objekten konvertieren, bevor Sie sie an `format()` übergeben.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung geben denselben String zurück wie {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}, wobei beide Parameter ignoriert werden.

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprachtag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}

  - : Ein Objekt zur Anpassung des Ausgabeformats. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Wenn der Kalender dieses Datum-Zeitpunkts nicht `"iso8601"` ist, muss die `calendar` Option mit demselben Wert bereitgestellt werden; andernfalls, wenn der Kalender dieses Datum-Zeitpunkts `"iso8601"` ist, kann die `calendar` Option irgendeinen Wert haben. Die `timeZone` Option darf nicht bereitgestellt werden, da sie automatisch auf die `{{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}` des Datum-Zeitpunkts gesetzt wird. In Bezug auf die [Optionen für Datums-Zeit-Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und die Stil-Abkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen annehmen:

    - Keine von ihnen bereitstellen: `year`, `month`, `day`, `hour`, `minute`, und `second` werden standardmäßig auf `"numeric"` gesetzt.
    - Mindestens eine von `dateStyle` oder `timeStyle` bereitstellen: Die Datums-Zeit-Komponenten werden gemäß dem angegebenen Stil und der Locale festgelegt.
    - Einige Datums-Zeit-Komponenten-Optionen bereitstellen. Nur die angegebenen Datums-Zeit-Komponenten werden in die Ausgabe aufgenommen.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und wie man sie verwendet.

### Rückgabewert

Ein String, der den gegebenen Datum-Zeitpunkt gemäß den sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(dateTime.toInstant())`, wobei `options` wie oben beschrieben normalisiert wurden.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Jedoch kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Locale — Output-Variationen sind durch das Design und von der Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel könnte der String nicht trennende Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standard-Locale und mit Standardeinstellungen zurück.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56-04:00[America/New_York]",
);

console.log(zdt.toLocaleString()); // 8/1/2021, 12:34:56 PM EDT (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der `locale` übereinstimmt und der Kalender des Datums nicht `iso8601` ist, muss eine explizite `calendar` Option mit demselben Wert bereitgestellt werden.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56+09:00[Asia/Tokyo][u-ca=japanese]",
);
// The ja-JP locale uses the Gregorian calendar by default
zdt.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1 12:34:56 JST
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Datums in die Ausgabe aufgenommen werden, indem Sie den `options` Parameter bereitstellen.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56+09:00[Asia/Tokyo][u-ca=japanese]",
);
zdt.toLocaleString("ja-JP", {
  calendar: "japanese",
  dateStyle: "full",
  timeStyle: "full",
}); // 令和3年8月1日日曜日 12時34分56秒 日本標準時
zdt.toLocaleString("ja-JP", {
  calendar: "japanese",
  year: "numeric",
  month: "long",
  hour: "numeric",
  timeZoneName: "shortGeneric",
}); // 令和3年8月 12時 JST
zdt.toLocaleString("ja-JP", {
  calendar: "japanese",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
}); // 令和3年 12:34
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
