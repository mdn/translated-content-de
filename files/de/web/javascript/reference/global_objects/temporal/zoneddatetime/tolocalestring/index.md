---
title: Temporal.ZonedDateTime.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toLocaleString()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieses Datums-Zeitpunkts zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat` und übergibt diesen in eine {{jsxref("Temporal.Instant")}} konvertierten Datum-Zeitpunkt (da `Intl.DateTimeFormat` nicht direkt ein `Temporal.ZonedDateTime` formatieren kann).

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt die übergebenen Argumente speichert und möglicherweise beschließt, einen Teil der Datenbank zwischenzuspeichern, sodass zukünftige `format` Aufrufe nach Lokalisierungszeichenfolgen in einem stärker eingeschränkten Kontext suchen können. Derzeit unterstützt `Intl.DateTimeFormat` jedoch nicht das Formatieren von `Temporal.ZonedDateTime` Objekten, daher müssen Sie diese zuerst in `Temporal.Instant` Objekte umwandeln, bevor Sie sie an `format()` übergeben.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache zu spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung geben genau dieselbe Zeichenkette wie {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} zurück und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Eine Zeichenkette mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Zeichenketten. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Wenn der Kalender dieses Datum-Zeitpunkts nicht `"iso8601"` ist, muss die `calendar` Option mit demselben Wert angegeben werden; andernfalls, wenn der Kalender dieses Datum-Zeitpunkts `"iso8601"` ist, kann die `calendar` Option jeden Wert haben. Die `timeZone` Option darf nicht angegeben werden, da sie automatisch auf die {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} des Datum-Zeitpunkts gesetzt wird. Bezüglich der [Datums-Zeit-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stil-Abkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen haben:
    - Geben Sie keine davon an: `year`, `month`, `day`, `hour`, `minute` und `second` verwenden standardmäßig `"numeric"`.
    - Geben Sie mindestens eines von `dateStyle` oder `timeStyle` an: Die Datums-Zeit-Komponenten werden entsprechend dem angegebenen Stil und der Locale gesetzt.
    - Geben Sie einige Datums-Zeit-Komponentenoptionen an. Nur die angegebenen Datums-Zeit-Komponenten werden in die Ausgabe aufgenommen.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenkette, die den gegebenen Datum-Zeitpunkt gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, { ...options, timeZone: dateTime.timeZoneId }).format(dateTime.toInstant())`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Die Ausgabe kann jedoch zwischen verschiedenen Implementierungen variieren, sogar innerhalb derselben Locale — solche Variationen sind beabsichtigt und laut Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel kann die Zeichenkette keine Trennzeichen enthalten oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festcodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt eine formatierte Zeichenkette in der Standardsprache mit den Standardoptionen zurück.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56-04:00[America/New_York]",
);

console.log(zdt.toLocaleString()); // 8/1/2021, 12:34:56 PM EDT (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der `locale` übereinstimmt und dieser nicht `iso8601` ist, muss eine explizite `calendar` Option mit demselben Wert angegeben werden.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56+09:00[Asia/Tokyo][u-ca=japanese]",
);
// The ja-JP locale uses the Gregorian calendar by default
zdt.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1 12:34:56 JST
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Datums in die Ausgabe einbezogen werden, indem Sie den `options` Parameter angeben.

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
