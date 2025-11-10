---
title: Temporal.Duration.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toLocaleString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt eine zeichenfolgenbasierte, sprachensensitive Darstellung dieser Dauer zurück. In Implementierungen mit Unterstützung der [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) wird diese Methode an `Intl.DurationFormat` delegiert.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DurationFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DurationFormat/format", "format()")}}-Methode zu verwenden, da ein `DurationFormat`-Objekt die übergebenen Argumente speichert und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format`-Aufrufe nach Lokalisierungszeichenfolgen innerhalb eines eingeschränkteren Kontexts suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DurationFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DurationFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat)-Konstruktors. Implementierungen ohne `Intl.DurationFormat`-Unterstützung geben genau denselben String zurück wie {{jsxref("Temporal/Duration/toString", "toString()")}} und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcode")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#locales)-Parameter des `Intl.DurationFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options)-Parameter des `Intl.DurationFormat()`-Konstruktors.

Siehe den [`Intl.DurationFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenkette, die die gegebene Dauer gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DurationFormat` entspricht dies `new Intl.DurationFormat(locales, options).format(duration)`.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen verschiedenen Implementierungen variieren, selbst innerhalb derselben Sprache — Abweichungen sind beabsichtigt und durch die Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel kann die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festcodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne eine angegebene `locale` gibt eine formatierte Zeichenkette in der Standard-Locale und mit Standardoptionen zurück.

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
