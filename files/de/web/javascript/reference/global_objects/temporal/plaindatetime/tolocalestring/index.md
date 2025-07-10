---
title: Temporal.PlainDateTime.prototype.toLocaleString()
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toLocaleString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`toLocaleString()`**-Methode von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine zeichenkettenbasierte, sprachspezifische Darstellung dieses Datum-Uhrzeit-Paares zurück. In Implementierungen mit Unterstützung für die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) delegiert diese Methode an `Intl.DateTimeFormat`.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient sein kann. Wenn die Methode mit denselben Argumenten viele Male aufgerufen wird, ist es besser, ein {{jsxref("Intl.DateTimeFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/DateTimeFormat/format", "format()")}}-Methode zu verwenden, da ein `DateTimeFormat`-Objekt sich die übergebenen Argumente merkt und entscheiden kann, einen Teil der Datenbank zu zwischenspeichern, sodass zukünftige `format`-Aufrufe nach Lokalisierungszeichenfolgen in einem engeren Kontext suchen können.

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und erlauben es Anwendungen, die Sprache anzugeben, deren Formatierungsgepflogenheiten genutzt werden sollen.

In Implementierungen, die die [`Intl.DateTimeFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) unterstützen, entsprechen diese Parameter exakt den Parametern des [`Intl.DateTimeFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)-Konstruktors. Implementierungen ohne Unterstützung für `Intl.DateTimeFormat` geben genau denselben String zurück wie {{jsxref("Temporal/PlainDateTime/toString", "toString()")}} und ignorieren beide Parameter.

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales)-Parameter des `Intl.DateTimeFormat()`-Konstruktors.
- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)-Parameter des `Intl.DateTimeFormat()`-Konstruktors. Wenn das Kalenderformat dieses Datum-Uhrzeit-Paares nicht `"iso8601"` ist, muss die `calendar`-Option mit demselben Wert angegeben werden; andernfalls kann die `calendar`-Option, wenn das Kalenderformat `"iso8601"` ist, jeden Wert haben. In Bezug auf die [Datum-Uhrzeit-Komponentenoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) und die Stilabkürzungen (`dateStyle` und `timeStyle`) sollten die Optionen eine der folgenden Formen aufweisen:
    - Keine angeben: `year`, `month`, `day`, `hour`, `minute` und `second` werden standardmäßig auf `"numeric"` gesetzt.
    - Mindestens eine von `dateStyle` oder `timeStyle` angeben: Die Datum-Uhrzeit-Komponenten werden entsprechend dem angegebenen Stil und der Spracheinstellung gesetzt.
    - Einige Datum-Uhrzeit-Komponentenoptionen angeben. Nur die angegebenen Datum-Uhrzeit-Komponenten werden in der Ausgabe enthalten sein.

Weitere Details zu diesen Parametern und deren Nutzung finden Sie im [`Intl.DateTimeFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat).

### Rückgabewert

Eine Zeichenkette, die das angegebene Datum-Uhrzeit-Paar gemäß sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.DateTimeFormat` ist dies äquivalent zu `new Intl.DateTimeFormat(locales, options).format(dateTime)`, wobei `options` wie oben beschrieben normalisiert wurde.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Jedoch kann die Ausgabe zwischen verschiedenen Implementierungen variieren, sogar innerhalb derselben lokalen Einstellung — Abweichungen in der Ausgabe sind bewusst und durch die Spezifikation erlaubt. Es entspricht möglicherweise auch nicht Ihren Erwartungen. Zum Beispiel kann der String nichttrennbare Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit festkodierten Konstanten vergleichen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eine der Optionen ungültig ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen nicht vom erwarteten Typ ist.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Nutzung dieser Methode ohne Angabe einer `locale`-Einstellung gibt eine formatierte Zeichenkette in der Standardsprache und mit Standardoptionen zurück.

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");

console.log(dt.toLocaleString()); // 8/1/2021, 12:34:56 PM (assuming en-US locale)
```

Falls das Kalenderformat des Datums nicht mit dem Standardkalender der Spracheinstellung übereinstimmt und das Kalenderformat des Datums nicht `iso8601` ist, muss explizit eine `calendar`-Option mit demselben Wert angegeben werden.

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56[u-ca=japanese]");
// The ja-JP locale uses the Gregorian calendar by default
dt.toLocaleString("ja-JP", { calendar: "japanese" }); // R3/8/1 12:34:56
```

### Verwendung von toLocaleString() mit Optionen

Sie können angeben, welche Teile des Datums in der Ausgabe enthalten sein sollen, indem Sie den `options`-Parameter angeben.

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");
dt.toLocaleString("en-US", { dateStyle: "full", timeStyle: "full" }); // Sunday, August 1, 2021 at 12:34:56 PM
dt.toLocaleString("en-US", {
  year: "numeric",
  month: "long",
  hour: "numeric",
}); // August 2021 at 12 PM
dt.toLocaleString("en-US", {
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
}); // 2021, 12:34 PM
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
