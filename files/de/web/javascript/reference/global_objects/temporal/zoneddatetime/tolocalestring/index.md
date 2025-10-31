---
title: Temporal.ZonedDateTime.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toLocaleString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`toLocaleString()`** Methode von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieses Datums-Zeitpunktes zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat` und übergibt diesen Datums-Zeitpunkt, nachdem er in ein {{jsxref("Temporal.Instant")}} konvertiert wurde (da `Intl.DateTimeFormat` ein `Temporal.ZonedDateTime` nicht direkt formatieren kann).

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenketten durchgeführt werden, was möglicherweise ineffizient ist. Wenn die Methode oft mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format` Aufrufe die Lokalisierungszeichenketten in einem engeren Kontext durchsuchen können. Derzeit unterstützt `Intl.DateTimeFormat` jedoch nicht die Formatierung von `Temporal.ZonedDateTime` Objekten, daher müssen Sie diese zuerst in `Temporal.Instant` Objekte umwandeln, bevor Sie sie an `format()` übergeben.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales` und `options` Parameter passen das Verhalten der Funktion an und lassen Anwendungen die Sprache spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung geben exakt dieselbe Zeichenkette wie {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} zurück und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Wenn der Kalender dieses Datums-Zeitpunktes nicht `"iso8601"` ist, muss die `calendar` Option mit demselben Wert bereitgestellt werden; ist der Kalender hingegen `"iso8601"`, kann die `calendar` Option jeden Wert haben. Die `timeZone` Option darf nicht bereitgestellt werden, da sie automatisch auf die `timeZoneId` des Datums-Zeitpunktes gesetzt wird. Bezüglich der [Datums-Zeit-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stilabkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen einer der folgenden Formen folgen:
    - Keine bereitstellen: `year`, `month`, `day`, `hour`, `minute` und `second` werden standardmäßig auf `"numeric"` gesetzt.
    - Mindestens eine von `dateStyle` oder `timeStyle` bereitstellen: Die Datums-Zeit-Komponenten werden gemäß dem angegebenen Stil und der Sprache gesetzt.
    - Einige Datums-Zeit-Komponentenoptionen bereitstellen. Nur die angegebenen Datums-Zeit-Komponenten werden in der Ausgabe enthalten sein.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und wie sie verwendet werden.

### Rückgabewert

Eine Zeichenkette, die den gegebenen Datums-Zeitpunkt gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, { ...options, timeZone: dateTime.timeZoneId }).format(dateTime.toInstant())`, wobei `options` wie oben beschrieben normalisiert wurden.

> [!NOTE]
> Die von `toLocaleString()` zurückgegebene Formatierung ist meistens konsistent. Die Ausgabe kann jedoch zwischen Implementierungen variieren, selbst innerhalb derselben Sprache – solche Variationen sind absichtlich und durch die Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht dem, was Sie erwarten. Zum Beispiel könnte die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest kodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht den erwarteten Typ hat.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe eines `locale` gibt eine formatierte Zeichenkette in der Standardsprache und mit den Standardoptionen zurück.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56-04:00[America/New_York]",
);

console.log(zdt.toLocaleString()); // 8/1/2021, 12:34:56 PM EDT (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der Sprache übereinstimmt und der Kalender des Datums nicht `iso8601` ist, muss eine explizite `calendar` Option mit demselben Wert bereitgestellt werden.

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
