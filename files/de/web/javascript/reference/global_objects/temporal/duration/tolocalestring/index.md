---
title: Temporal.Duration.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt einen String mit einer sprachsensitiven Darstellung dieser Dauer zurück. In Implementierungen mit Unterstützung für die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) delegiert diese Methode an `Intl.DurationFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungs-Strings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DurationFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DurationFormat/format", "format()")}}-Methode zu verwenden, da ein `DurationFormat`-Objekt sich die übergebenen Argumente merkt und möglicherweise entscheidet, einen Teil der Datenbank zwischenzuspeichern. So können zukünftige `format`-Aufrufe Lokalisierungs-Strings in einem eingeschränkteren Kontext suchen.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache festzulegen, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DurationFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat)-Konstruktors. Implementierungen ohne Unterstützung für `Intl.DurationFormat` geben denselben String zurück wie {{jsxref("Temporal/Duration/toString", "toString()")}} und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#locales)-Parameter des `Intl.DurationFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options)-Parameter des `Intl.DurationFormat()`-Konstruktors.

Siehe den [`Intl.DurationFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Ein String, der die gegebene Dauer gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DurationFormat` entspricht dies `new Intl.DurationFormat(locales, options).format(duration)`.

> [!NOTE]
> Meistens ist die Formatierung, die von `toLocaleString()` zurückgegeben wird, konsistent. Allerdings kann die Ausgabe je nach Implementierung variieren, selbst innerhalb derselben Locale — Ausgabevariationen sind absichtlich und werden von der Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise kann der String geschützte Leerzeichen enthalten oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest kodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` gibt einen formatierten String in der Standard-Locale und mit Standardoptionen zurück.

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });

console.log(duration.toLocaleString()); // 1 hr, 30 min, 15 sec
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
