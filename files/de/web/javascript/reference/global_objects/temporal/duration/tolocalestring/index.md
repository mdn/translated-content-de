---
title: Temporal.Duration.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toLocaleString
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`toLocaleString()`**-Methode der {{jsxref("Temporal.Duration")}}-Instanzen gibt eine zeichenbasierte Darstellung dieser Dauer zurück, die sprachspezifisch ist. In Implementierungen mit Unterstützung für die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) delegiert diese Methode an `Intl.DurationFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungsstrings durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DurationFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DurationFormat/format", "format()")}}-Methode zu verwenden, da ein `DurationFormat`-Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format`-Aufrufe Lokalisierungsstrings in einem eingeschränkteren Kontext suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales`- und `options`-Parameter passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungsregeln verwendet werden sollen.

In Implementierungen, die die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) unterstützen, entsprechen diese Parameter exakt den Parametern des [`Intl.DurationFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat)-Konstruktors. Implementierungen ohne Unterstützung für `Intl.DurationFormat` geben exakt denselben String zurück wie {{jsxref("Temporal/Duration/toString", "toString()")}}, wobei beide Parameter ignoriert werden.

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#locales)-Parameter des `Intl.DurationFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options)-Parameter des `Intl.DurationFormat()`-Konstruktors.

Siehe den [`Intl.DurationFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat) für Details zu diesen Parametern und wie man sie verwendet.

### Rückgabewert

Ein String, der die angegebene Dauer gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DurationFormat` entspricht dies `new Intl.DurationFormat(locales, options).format(duration)`.

> [!NOTE]
> Die vom `toLocaleString()` zurückgegebene Formatierung ist meistens konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb desselben Gebietsschemas — Abweichungen in der Ausgabe sind designbedingt und von der Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihrer Erwartung. Zum Beispiel könnte der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Grundlegende Nutzung dieser Methode ohne Angabe eines `locale` gibt einen formatierten String im Standardgebietsschema und mit Standardoptionen zurück.

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
