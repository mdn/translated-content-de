---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("Number")}} Werten gibt eine zeichenkettensensitive Darstellung dieser Zahl zurück. In Implementierungen mit Unterstützung der [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) ruft diese Methode einfach `Intl.NumberFormat` auf.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.NumberFormat")}} Objekt zu erstellen und dessen {{jsxref("Intl/NumberFormat/format", "format()")}} Methode zu verwenden, da ein `NumberFormat` Objekt sich die übergebenen Argumente merkt und möglicherweise einen Teil der Datenbank zwischenspeichert, sodass zukünftige Aufrufe von `format` nach Lokalisierungszeichenfolgen in einem eingeschränkteren Kontext suchen können.

{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales`- und `options`-Parameter passen das Verhalten der Funktion an und lassen Anwendungen die Sprache spezifizieren, deren Formatierungsgepflogenheiten verwendet werden sollen.

In Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) Konstruktors. Implementierungen ohne `Intl.NumberFormat` Unterstützung sollen beide Parameter ignorieren, wodurch die verwendete Locale und die Form der zurückgegebenen Zeichenkette vollständig von der Implementierung abhängt.

- `locales` {{optional_inline}}

  - : Eine Zeichenkette mit einem BCP 47 Sprach-Tag oder ein Array solcher Zeichenketten. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) Parameter des `Intl.NumberFormat()` Konstruktors.

    In Implementierungen ohne `Intl.NumberFormat` Unterstützung wird dieser Parameter ignoriert und normalerweise die Locale des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) Parameter des `Intl.NumberFormat()` Konstruktors.

    In Implementierungen ohne `Intl.NumberFormat` Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.NumberFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenkette, die die gegebene Zahl gemäß sprachspezifischen Konventionen repräsentiert.

In Implementierungen mit `Intl.NumberFormat` entspricht dies `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Das Ergebnis kann jedoch zwischen Implementierungen variieren, selbst innerhalb desselben Lokale — Abweichungen sind vorgesehen und durch die Spezifikation zugelassen. Es kann auch nicht Ihren Erwartungen entsprechen. Beispielsweise kann die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit hartkodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe eines `locale`-Wertes gibt eine formatierte Zeichenkette in der Standard-Locale und mit Standardoptionen zurück.

```js
const number = 3500;

console.log(number.toLocaleString()); // "3,500" if in U.S. English locale
```

### Überprüfung der Unterstützung für die `locales`- und `options`-Parameter

Die `locales`- und `options`-Parameter werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht die erforderlichen Daten haben. Für Implementierungen ohne Unterstützung für die Internationalisierung verwendet `toLocaleString()` immer die Systemeinstellung, die möglicherweise nicht dem entspricht, was Sie möchten. Da jede Implementierung, die die `locales`- und `options`-Parameter unterstützt, auch die {{jsxref("Intl")}} API unterstützen muss, können Sie die Existenz dieser API überprüfen, um die Unterstützung zu bestätigen:

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.NumberFormat === "function"
  );
}
```

### Verwendung von locales

Dieses Beispiel zeigt einige der Variationen lokalisierter Zahlenformate. Um das Format der in Ihrer Anwendungs-Benutzeroberfläche verwendeten Sprache zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem `locales`-Argument angeben:

```js
const number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(number.toLocaleString("de-DE"));
// 123.456,789

// Arabic in most Arabic speaking countries uses Eastern Arabic digits
console.log(number.toLocaleString("ar-EG"));
// ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(number.toLocaleString("en-IN"));
// 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(number.toLocaleString(["ban", "id"]));
// 123.456,789
```

### Verwendung von Optionen

Die Ergebnisse, die von `toLocaleString()` bereitgestellt werden, können mit dem `options`-Parameter angepasst werden:

```js
const number = 123456.789;

// request a currency format
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,457

// limit to three significant digits
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,000

// Use the host default language with options for number formatting
const num = 30000.65;
console.log(
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// "30,000.65" where English is the default language, or
// "30.000,65" where German is the default language, or
// "30 000,65" where French is the default language
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toString()")}}
