---
title: Temporal.ZonedDateTime.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toLocaleString
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}{{SeeCompatTable}}

Die Methode **`toLocaleString()`** von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt eine zeichenkettenspezifische Darstellung dieses Datums und dieser Uhrzeit zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat` und übergibt diese Datum-Uhrzeit, konvertiert in ein {{jsxref("Temporal.Instant")}} (weil `Intl.DateTimeFormat` eine `Temporal.ZonedDateTime` nicht direkt formatieren kann).

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert. Dadurch können zukünftige `format`-Aufrufe innerhalb eines eingeschränkten Kontexts nach Lokalisierungszeichenfolgen suchen. Derzeit unterstützt `Intl.DateTimeFormat` jedoch nicht das Formatieren von `Temporal.ZonedDateTime`-Objekten. Daher müssen Sie diese zuerst in `Temporal.Instant`-Objekte umwandeln, bevor Sie sie an `format()` übergeben.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und lassen Anwendungen die Sprache angeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors von [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Implementierungen ohne `Intl.DateTimeFormat`-Unterstützung geben denselben String zurück wie {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt zur Anpassung des Ausgabeformats. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()`-Konstruktors. Falls der Kalender dieses Datums-Uhrzeits nicht `"iso8601"` ist, muss die Option `calendar` mit demselben Wert angegeben werden; andernfalls kann die Option `calendar` einen beliebigen Wert haben, wenn der Kalender dieses Datums-Uhrzeits `"iso8601"` ist. Die Option `timeZone` darf nicht bereitgestellt werden, da sie automatisch auf die `timeZoneId` der Datum-Uhrzeit gesetzt wird. Bezüglich der [Datum-Uhrzeit-Komponenten-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stilabkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen haben:
    - Keine davon angeben: `year`, `month`, `day`, `hour`, `minute` und `second` werden auf `"numeric"` gesetzt.
    - Mindestens eine von `dateStyle` oder `timeStyle` angeben: Die Datum-Uhrzeit-Komponenten werden entsprechend dem angegebenen Stil und der Sprache eingerichtet.
    - Einige Datum-Uhrzeit-Komponenten-Optionen angeben. Nur die angegebenen Datum-Uhrzeit-Komponenten werden in der Ausgabe enthalten sein.

Siehe den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenkette, die die gegebene Datum-Uhrzeit gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, { ...options, timeZone: dateTime.timeZoneId }).format(dateTime.toInstant())`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> In den meisten Fällen ist das von `toLocaleString()` zurückgegebene Format konsistent. Allerdings kann sich die Ausgabe zwischen Implementierungen unterscheiden, selbst innerhalb derselben Sprache – diese Variationen sind absichtlich und durch die Spezifikation zugelassen. Die Ausgabe entspricht möglicherweise nicht Ihren Erwartungen. Zum Beispiel kann die Zeichenkette nichttrennende Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht den erwarteten Typ hat.

## Beispiele

### Verwendung von toLocaleString()

Die grundsätzliche Verwendung dieser Methode ohne Angabe einer `locale` gibt eine formatierte Zeichenkette in der Standard-Sprache mit Standardoptionen zurück.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56-04:00[America/New_York]",
);

console.log(zdt.toLocaleString()); // 8/1/2021, 12:34:56 PM EDT (assuming en-US locale)
```

Wenn der Kalender des Datums nicht mit dem Standardkalender der Sprache übereinstimmt und der Kalender des Datums nicht `iso8601` ist, muss eine explizite `calendar`-Option mit demselben Wert angegeben werden.

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56+09:00[Asia/Tokyo][u-ca=japanese]",
);
// The ja-JP locale uses the Gregorian calendar by default
zdt.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1 12:34:56 JST
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Datums in der Ausgabe enthalten sind, indem Sie den `options`-Parameter bereitstellen.

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
