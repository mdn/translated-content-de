---
title: Temporal.Instant.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toLocaleString()`** Methode von {{jsxref("Temporal.Instant")}} Instanzen gibt einen String mit einer sprachsensitiven Darstellung dieses Zeitpunkts zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungs-Strings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt die an es übergebenen Argumente speichert und möglicherweise entscheidet, einen Teil der Datenbank zwischenzuspeichern, sodass zukünftige `format` Aufrufe Lokalisierungs-Strings in einem eingeschränkteren Kontext suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales` und `options` Parameter passen das Verhalten der Funktion an und ermöglichen Anwendungen, die Sprache festzulegen, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` geben exakt denselben String zurück wie {{jsxref("Temporal/Instant/toString", "toString()")}}, wobei beide Parameter ignoriert werden.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Ein String, der den gegebenen Zeitpunkt gemäß den sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(instant)`.

> [!NOTE]
> Meistens ist die von `toLocaleString()` zurückgegebene Formatierung konsistent. Allerdings kann die Ausgabe zwischen Implementierungen, sogar innerhalb desselben Gebietsschemas, variieren — Ausgabevariationen sind gemäß der Spezifikation vorgesehen und erlaubt. Sie kann auch nicht dem entsprechen, was Sie erwarten. Beispielsweise kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die einfache Verwendung dieser Methode ohne Angabe eines `locale` liefert einen formatierten String in der Standardsprache und mit den Standardoptionen.

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56Z");

console.log(instant.toLocaleString()); // 8/1/2021, 12:34:56 AM (assuming en-US locale and device in UTC time zone)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
