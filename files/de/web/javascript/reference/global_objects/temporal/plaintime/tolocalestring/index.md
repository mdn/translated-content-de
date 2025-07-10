---
title: Temporal.PlainTime.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toLocaleString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Methode **`toLocaleString()`** von Instanzen des {{jsxref("Temporal.PlainTime")}} gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieser Uhrzeit zurück. In Implementierungen, die die Unterstützung der [`Intl.DateTimeFormat`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) bieten, delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merken kann und entscheiden kann, einen Teil der Datenbank zwischenzuspeichern, sodass zukünftige `format`-Aufrufe nach Lokalisierungszeichenfolgen innerhalb eines eingeschränkteren Kontexts suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Implementierungen ohne `Intl.DateTimeFormat`-Unterstützung geben dieselbe Zeichenkette wie {{jsxref("Temporal/PlainTime/toString", "toString()")}} zurück und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des Konstruktors `Intl.DateTimeFormat()`.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des Konstruktors `Intl.DateTimeFormat()`. Bezüglich der [Date-Time-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stilabkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen haben:
    - Keine davon angeben: `hour`, `minute` und `second` werden auf `"numeric"` voreingestellt.
    - Nur `timeStyle` angeben: Es erweitert sich zu `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits`-Formaten.
    - Einige Date-Time-Komponentenoptionen angeben, wobei mindestens eine davon eine Zeitoption ist (`dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`). Nur die angegebenen Zeitkomponenten werden in die Ausgabe einbezogen.

Siehe den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und wie man sie verwendet.

### Rückgabewert

Eine Zeichenkette, die die angegebene Zeit gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(time)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist die Formatierung, die von `toLocaleString()` zurückgegeben wird, konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb desselben Gebietsschemas — Abweichungen der Ausgabe sind absichtlich und durch die Spezifikation erlaubt. Es kann auch nicht dem entsprechen, was Sie erwarten. Zum Beispiel kann die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit hartcodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe eines `locale` gibt eine formatierte Zeichenkette im Standardgebietsschema und mit den Standardeinstellungen zurück.

```js
const time = Temporal.PlainTime.from("12:34:56");

console.log(time.toLocaleString()); // 12:34:56 PM (assuming en-US locale)
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile der Zeit in der Ausgabe enthalten sind, indem Sie den `options`-Parameter angeben.

```js
const time = Temporal.PlainTime.from("12:34:56");
time.toLocaleString("en-US", { timeStyle: "short" }); // 12:34 PM
time.toLocaleString("en-US", { hour: "2-digit" }); // 12 PM
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
