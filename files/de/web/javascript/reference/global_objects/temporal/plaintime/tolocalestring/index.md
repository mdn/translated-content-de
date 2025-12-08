---
title: Temporal.PlainTime.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toLocaleString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`toLocaleString()`** Methode von {{jsxref("Temporal.PlainTime")}} Instanzen gibt eine sprachsensitiv formatierte Zeichenkette dieser Zeit zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank mit Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und die {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt sich die übergebenen Argumente merkt und entscheiden kann, einen Ausschnitt der Datenbank zwischenzuspeichern, so dass zukünftige `format` Aufrufe Lokalisierungszeichenfolgen in einem eingeschränkteren Kontext suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und erlauben es Anwendungen, die Sprache anzugeben, deren Formatierungsrichtlinien verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne Unterstützung von `Intl.DateTimeFormat` geben exakt denselben String zurück wie {{jsxref("Temporal/PlainTime/toString", "toString()")}}, indem beide Parameter ignoriert werden.

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. In Bezug auf die [Datum-Zeit-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und die Stil-Abkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen annehmen:
    - Keine von ihnen angeben: `hour`, `minute` und `second` werden standardmäßig auf `"numeric"` gesetzt.
    - Nur `timeStyle` angeben: es erweitert sich zu den Formaten `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits`.
    - Einige Datum-Zeit-Komponentenoptionen angeben, wobei mindestens eine davon eine Zeitoption (`dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`) ist. Nur die angegebenen Zeitkomponenten werden in der Ausgabe enthalten sein.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenkette, die die angegebene Zeit gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(time)`, wobei `options` wie oben beschrieben normalisiert wurden.

> [!NOTE]
> Meistens ist die von `toLocaleString()` zurückgegebene Formatierung konsistent. Allerdings kann die Ausgabe zwischen den Implementierungen variieren, selbst innerhalb derselben Lokale — Abweichungen in der Ausgabe sind gewollt und von der Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise kann die Zeichenfolge geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe eines `locale` gibt eine formatierte Zeichenkette in der Standardlokale und mit Standardoptionen zurück.

```js
const time = Temporal.PlainTime.from("12:34:56");

console.log(time.toLocaleString()); // 12:34:56 PM (assuming en-US locale)
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile der Zeit in der Ausgabe enthalten sind, indem Sie den `options` Parameter angeben.

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
