---
title: Temporal.ZonedDateTime.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toLocaleString
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{SeeCompatTable}}

Die **`toLocaleString()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt einen String mit einer sprachensensiblen Darstellung dieses Datums-Zeitenwerts zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat` und übergibt diesen Datums-Zeitenwert konvertiert zu einem {{jsxref("Temporal.Instant")}} (da `Intl.DateTimeFormat` ein `Temporal.ZonedDateTime` nicht direkt formatieren kann).

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungs-Strings durchgeführt werden, was potenziell ineffizient sein kann. Wenn diese Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichern kann, sodass zukünftige `format` Aufrufe nach Lokalisierungs-Strings in einem eingeschränkteren Kontext suchen können. Allerdings unterstützt `Intl.DateTimeFormat` derzeit nicht das Formatieren von `Temporal.ZonedDateTime` Objekten, daher müssen Sie diese zuerst in `Temporal.Instant` Objekte umwandeln, bevor Sie sie an `format()` übergeben.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung geben genau denselben String zurück wie {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Wenn der Kalender dieses Datums-Zeitpunkts nicht `"iso8601"` ist, muss die `calendar` Option mit demselben Wert bereitgestellt werden; andernfalls, wenn der Kalender dieses Datums-Zeitpunkts `"iso8601"` ist, kann die `calendar` Option beliebig sein. Die `timeZone` Option darf nicht bereitgestellt werden, da sie automatisch auf die Zeitzone des Datums-Zeitpunkts {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} gesetzt wird. Bezüglich der [Datum-Zeit-Komponenten-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und den Stilverkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen annehmen:
    - Keine der Optionen angeben: `year`, `month`, `day`, `hour`, `minute` und `second` werden standardmäßig auf `"numeric"` gesetzt.
    - Mindestens eine der `dateStyle` oder `timeStyle` Optionen angeben: die Datum-Zeit-Komponenten werden gemäß dem angegebenen Stil und der Spracheinstellung gesetzt.
    - Einige der Datum-Zeit-Komponenten-Optionen angeben. Nur die angegebenen Datum-Zeit-Komponenten werden in der Ausgabe enthalten sein.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Ein String, der die gegebene Datums-Zeit gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, { ...options, timeZone: dateTime.timeZoneId }).format(dateTime.toInstant())`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb derselben Lokalisierung — Ausgabevariationen sind beabsichtigt und von der Spezifikation erlaubt. Die Ausgabe entspricht möglicherweise auch nicht Ihren Erwartungen. Zum Beispiel kann der String nicht trennbare Leerzeichen enthalten oder von bidirektionalen Steuerzeichen umrahmt sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festcodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standardspracheinstellung und mit Standardoptionen zurück.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56-04:00[America/New_York]",
);

console.log(zdt.toLocaleString()); // 8/1/2021, 12:34:56 PM EDT (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der Spracheinstellung übereinstimmt und der Kalender des Datums nicht `iso8601` ist, muss eine explizite `calendar` Option mit demselben Wert angegeben werden.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56+09:00[Asia/Tokyo][u-ca=japanese]",
);
// The ja-JP locale uses the Gregorian calendar by default
zdt.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1 12:34:56 JST
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Datums in der Ausgabe enthalten sind, indem Sie den `options` Parameter bereitstellen.

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
