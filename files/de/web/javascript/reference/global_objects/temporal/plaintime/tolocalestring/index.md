---
title: Temporal.PlainTime.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toLocaleString
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`toLocaleString()`** Methode von Instanzen von {{jsxref("Temporal.PlainTime")}} gibt einen string mit einer sprachsensitiven Darstellung dieser Zeit zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient sein kann. Wenn die Methode oft mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}} Methode zu verwenden, da ein `DateTimeFormat` Objekt die übergebenen Argumente speichert und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige `format` Aufrufe innerhalb eines eingeschränkteren Kontexts nach Lokalisierungszeichenfolgen suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache zu spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne `Intl.DateTimeFormat` Unterstützung geben exakt denselben string zurück wie {{jsxref("Temporal/PlainTime/toString", "toString()")}}, wobei beide Parameter ignoriert werden.

- `locales` {{optional_inline}}
  - : Ein string mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder ein Array solcher strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) Parameter des `Intl.DateTimeFormat()` Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) Parameter des `Intl.DateTimeFormat()` Konstruktors. Bezüglich der [Datum-Zeit-Komponenten-Optionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und der Stilabkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen annehmen:
    - Keine davon bereitstellen: `hour`, `minute` und `second` werden standardmäßig auf `"numeric"` gesetzt.
    - Nur `timeStyle` bereitstellen: es erweitert sich zu `dayPeriod`, `hour`, `minute`, `second` und `fractionalSecondDigits` Formaten.
    - Einige Datum-Zeit-Komponenten-Optionen bereitstellen, wobei mindestens eine davon eine Zeitoption ist (`dayPeriod`, `hour`, `minute`, `second`, `fractionalSecondDigits`). Nur die angegebenen Zeitkomponenten werden in der Ausgabe enthalten sein.

Siehe den [`Intl.DateTimeFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und wie sie verwendet werden.

### Rückgabewert

Ein string, der die angegebene Zeit gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` entspricht dies `new Intl.DateTimeFormat(locales, options).format(time)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb desselben Gebietsschemas — Variationen in der Ausgabe sind beabsichtigt und durch die Spezifikation erlaubt. Es kann auch nicht dem entsprechen, was Sie erwarten. Beispielsweise kann der string nicht unterbrechende Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest kodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Der grundlegende Gebrauch dieser Methode ohne Angabe eines `locales` gibt einen formatierten string in der Standard-Gebietsschema und mit Standardeinstellungen zurück.

```js
const time = Temporal.PlainTime.from("12:34:56");

console.log(time.toLocaleString()); // 12:34:56 PM (assuming en-US locale)
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile der Zeit in der Ausgabe enthalten sind, indem Sie den `options` Parameter bereitstellen.

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
