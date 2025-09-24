---
title: Temporal.Duration.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toLocaleString
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{SeeCompatTable}}

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.Duration")}}-Instanzen gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieser Dauer zurück. In Implementierungen mit Unterstützung der [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) delegiert diese Methode an `Intl.DurationFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode mehrfach mit den gleichen Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DurationFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DurationFormat/format", "format()")}}-Methode zu verwenden, da ein `DurationFormat`-Objekt sich die übergebenen Argumente merkt und entscheiden kann, einen Teil der Datenbank zu cachen, sodass zukünftige `format`-Aufrufe innerhalb eines eingeschränkteren Kontextes nach Lokalisierungsstrings suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache zu spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors [`Intl.DurationFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat). Implementierungen ohne `Intl.DurationFormat`-Unterstützung geben exakt den gleichen String wie {{jsxref("Temporal/Duration/toString", "toString()")}} zurück und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#locales)-Parameter des `Intl.DurationFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options)-Parameter des `Intl.DurationFormat()`-Konstruktors.

Details zu diesen Parametern und deren Verwendung finden Sie im [`Intl.DurationFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat).

### Rückgabewert

Eine Zeichenkette, die die gegebene Dauer gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DurationFormat` entspricht dies `new Intl.DurationFormat(locales, options).format(duration)`.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Jedoch kann sich die Ausgabe zwischen Implementierungen unterscheiden, selbst innerhalb derselben Locale — Ausgabevariationen sind absichtlich und von der Spezifikation erlaubt. Es könnte auch nicht dem entsprechen, was Sie erwarten. Zum Beispiel könnte die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festkodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Nutzung dieser Methode ohne Angabe eines `locale` gibt eine formatierte Zeichenkette in der Standard-Locale und mit Standardoptionen zurück.

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
