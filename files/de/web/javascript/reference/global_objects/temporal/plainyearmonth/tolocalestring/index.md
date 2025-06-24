---
title: Temporal.PlainYearMonth.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toLocaleString
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}{{SeeCompatTable}}

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.PlainYearMonth")}}-Instanzen gibt eine zeichenkettenbasierte Darstellung dieses Jahres-Monats in einer sprachsensitiven Form zurück. In Implementierungen mit Unterstützung der [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank mit Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient sein kann. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merken kann und möglicherweise entscheiden kann, einen Teil der Datenbank zu cachen, sodass zukünftige `format`-Aufrufe nach Lokalisierungszeichenfolgen in einem stärker eingeschränkten Kontext suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und lassen Anwendungen die Sprache spezifizieren, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) Konstruktors. Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` geben genau dieselbe Zeichenfolge wie {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}} zurück und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprachtag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()`-Konstruktors. Die `calendar`-Option muss mit demselben Wert bereitgestellt werden wie der Kalender dieses Jahres-Monats. Bezüglich der [Datums-/Uhrzeit-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und den Stilverknüpfungen (`dateStyle` und `timeStyle`), sollten die Optionen eine der folgenden Formen annehmen:
    - Keine von ihnen angeben: `year` und `month` werden standardmäßig auf `"numeric"` gesetzt.
    - Nur `dateStyle` angeben: es erweitert sich zu `era`-, `year`- und `month`-Formaten.
    - Einige Datums-/Uhrzeit-Komponentenoptionen angeben, wobei mindestens eine davon `year` oder `month` ist. Nur die angegebenen Datums-Komponenten werden in der Ausgabe enthalten sein.

Siehe den [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) für Details zu diesen Parametern und wie man sie verwendet.

### Rückgabewert

Eine Zeichenfolge, die das angegebene Jahr-Monat gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies gleichbedeutend mit `new Intl.DateTimeFormat(locales, options).format(yearMonth)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist die Formatierung, die von `toLocaleString()` zurückgegeben wird, konsistent. Die Ausgabe kann jedoch je nach Implementierung unterschiedlich sein, selbst innerhalb desselben Gebietsschemas — diese Abweichungen sind beabsichtigt und werden von der Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel kann die Zeichenfolge geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe einer `locale` liefert eine formatierte Zeichenfolge in der Standardeinstellung der Umgebung und mit den Standardoptionen.

```js
// Note that just specifying "2021-08" defaults to the ISO 8601 calendar,
// which throws an error if the locale's default calendar is not ISO 8601.
const ym = Temporal.PlainYearMonth.from("2021-08-01[u-ca=gregory]");

console.log(ym.toLocaleString()); // 8/2021 (assuming en-US locale and Gregorian calendar)
```

Wenn der Kalender des Jahres-Monats nicht mit dem Standardkalender des Gebietsschemas übereinstimmt, selbst wenn der Kalender `iso8601` ist, muss eine explizite `calendar`-Option mit demselben Wert bereitgestellt werden.

```js
const ym = Temporal.PlainYearMonth.from("2021-08");
ym.toLocaleString("en-US", { calendar: "iso8601" }); // 2021-08
```

### Verwendung von toLocaleString() mit Optionen

Sie können anpassen, welche Teile des Jahres-Monats in der Ausgabe enthalten sind, indem Sie den `options`-Parameter bereitstellen.

```js
const ym = Temporal.PlainYearMonth.from("2021-08-01[u-ca=gregory]");
ym.toLocaleString("en-US", { dateStyle: "full" }); // August 2021
ym.toLocaleString("en-US", { year: "2-digit" }); // 21
ym.toLocaleString("en-US", { month: "long" }); // August
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
