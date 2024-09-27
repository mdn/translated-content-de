---
title: BigInt.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("BigInt")}}-Werten gibt eine sprachsensitiv formatierte Zeichenkette dieser BigInt zurück. Bei Implementierungen mit Unterstützung der [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) ruft diese Methode einfach `Intl.NumberFormat` auf.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was potenziell ineffizient ist. Wenn die Methode häufig mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.NumberFormat")}}-Objekt zu erstellen und dessen {{jsxref("Intl/NumberFormat/format", "format()")}}-Methode zu verwenden, da ein `NumberFormat`-Objekt sich die übergebenen Argumente merkt und möglicherweise entscheidet, einen Teil der Datenbank im Cache zu behalten, sodass zukünftige `format`-Aufrufe nach Lokalisierungszeichenfolgen in einem eingeschränkteren Kontext suchen können.

{{EmbedInteractiveExample("pages/js/bigint-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die `locales`- und `options`-Parameter passen das Verhalten der Funktion an und lassen Anwendungen die Sprache festlegen, deren Formatierungskonventionen verwendet werden sollen.

Bei Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)-Konstruktors. Implementierungen ohne Unterstützung von `Intl.NumberFormat` werden gebeten, beide Parameter zu ignorieren, wodurch der verwendete Gebietsschema und die Form der zurückgegebenen Zeichenkette vollständig implementierungsabhängig sind.

- `locales` {{optional_inline}}

  - : Eine Zeichenkette mit einem BCP 47-Sprachtag oder ein Array solcher Zeichenketten. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales)-Parameter des `Intl.NumberFormat()`-Konstruktors.

    Bei Implementierungen ohne Unterstützung von `Intl.NumberFormat` wird dieser Parameter ignoriert und üblicherweise das Gebietsschema des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)-Parameter des `Intl.NumberFormat()`-Konstruktors.

    Bei Implementierungen ohne Unterstützung von `Intl.NumberFormat` wird dieser Parameter ignoriert.

Details zu diesen Parametern und deren Verwendung finden Sie im [`Intl.NumberFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat).

### Rückgabewert

Eine Zeichenkette, die die gegebene BigInt gemäß sprachspezifischen Konventionen darstellt.

Bei Implementierungen mit `Intl.NumberFormat` entspricht dies `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> Meistens ist die von `toLocaleString()` zurückgegebene Formatierung konsistent. Allerdings kann die Ausgabe zwischen Implementierungen, selbst innerhalb desselben Gebietsschemas, variieren – solche Variationen sind absichtlich und durch die Spezifikation erlaubt. Möglicherweise entspricht sie auch nicht Ihren Erwartungen. Beispielsweise kann die Zeichenkette geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest kodierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode ohne Angabe eines `locale` gibt eine formatierte Zeichenkette im Standardgebietsschema und mit Standardoptionen zurück.

```js
const bigint = 3500n;

console.log(bigint.toLocaleString());
// "3,500" if in U.S. English locale
```

### Überprüfen der Unterstützung für locales und options-Parameter

Die `locales`- und `options`-Parameter werden möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung der Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die erforderlichen Daten verfügen. Bei Implementierungen ohne Internationalisierungsunterstützung verwendet `toLocaleString()` immer das Gebietsschema des Systems, was möglicherweise nicht das ist, was Sie möchten. Da jede Implementierung, die die `locales`- und `options`-Parameter unterstützt, die {{jsxref("Intl")}} API unterstützen muss, können Sie deren Existenz zur Überprüfung der Unterstützung heranziehen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zahlenformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem `locales`-Argument angeben:

```js
const bigint = 123456789123456789n;

// German uses period for thousands
console.log(bigint.toLocaleString("de-DE"));
// 123.456.789.123.456.789

// Arabic in most Arabic speaking countries uses Eastern Arabic digits
console.log(bigint.toLocaleString("ar-EG"));
// ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// India uses thousands/lakh/crore separators
console.log(bigint.toLocaleString("en-IN"));
// 1,23,45,67,89,12,34,56,789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(bigint.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六,七八九,一二三,四五六,七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(bigint.toLocaleString(["ban", "id"]));
// 123.456.789.123.456.789
```

### Verwendung von options

Die von `toLocaleString()` bereitgestellten Ergebnisse können mit dem `options`-Parameter angepasst werden:

```js
const bigint = 123456789123456789n;

// request a currency format
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456.789.123.456.789,00 €

// the Japanese yen doesn't use a minor unit
console.log(
  bigint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,456,789,123,456,789

// limit to three significant digits
console.log(bigint.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,00,00,00,00,00,00,000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("BigInt.prototype.toString()")}}
