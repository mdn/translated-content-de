---
title: BigInt.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toLocaleString()`**-Methode von {{jsxref("BigInt")}}-Werten gibt eine Zeichenfolge mit einer sprachensensitiven Darstellung dieses BigInt zurück. In Implementierungen mit Unterstützung der [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) ruft diese Methode einfach `Intl.NumberFormat` auf.

Jedes Mal, wenn `toLocaleString` aufgerufen wird, muss eine Suche in einer großen Datenbank von Lokalisierungszeichenfolgen durchgeführt werden, was möglicherweise ineffizient ist. Wenn die Methode viele Male mit denselben Argumenten aufgerufen wird, ist es besser, ein {{jsxref("Intl.NumberFormat")}}-Objekt zu erstellen und seine {{jsxref("Intl/NumberFormat/format", "format()")}}-Methode zu verwenden, da ein `NumberFormat`-Objekt sich die übergebenen Argumente merkt und möglicherweise entscheidet, einen Teil der Datenbank im Cache zu speichern, sodass zukünftige `format`-Aufrufe Lokalisierungszeichenfolgen in einem eingeschränkteren Kontext suchen können.

{{EmbedInteractiveExample("pages/js/bigint-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.NumberFormat` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors [`Intl.NumberFormat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). Implementierungen ohne Unterstützung für `Intl.NumberFormat` werden angewiesen, beide Parameter zu ignorieren, wodurch die verwendete Sprache und die Form der zurückgegebenen Zeichenfolge vollständig von der Implementierung abhängen.

- `locales` {{optional_inline}}

  - : Eine Zeichenfolge mit einem BCP 47-Sprachbezeichner oder ein Array solcher Zeichenfolgen. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales)-Parameter des Konstruktors `Intl.NumberFormat()`.

    In Implementierungen ohne Unterstützung für `Intl.NumberFormat` wird dieser Parameter ignoriert und normalerweise die Locale des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)-Parameter des Konstruktors `Intl.NumberFormat()`.

    In Implementierungen ohne Unterstützung für `Intl.NumberFormat` wird dieser Parameter ignoriert.

Siehe den [`Intl.NumberFormat()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) für Details zu diesen Parametern und deren Verwendung.

### Rückgabewert

Eine Zeichenfolge, die das angegebene BigInt gemäß den sprachspezifischen Konventionen darstellt.

In Implementierungen mit `Intl.NumberFormat` ist dies gleichbedeutend mit `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> Meistens ist das von `toLocaleString()` zurückgegebene Format konsistent. Der Output kann jedoch je nach Implementierung variieren, selbst innerhalb derselben Locale – Variationen des Outputs sind durch das Design erlaubt und spezifikationskonform. Möglicherweise entspricht er auch nicht Ihren Erwartungen. Zum Beispiel kann die Zeichenfolge nicht trennbare Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `toLocaleString()` nicht mit fest codierten Konstanten vergleichen.

## Beispiele

### Verwendung von toLocaleString()

Die grundlegende Verwendung dieser Methode, ohne eine `locale` anzugeben, gibt eine formatierte Zeichenfolge in der Standardlocale und mit Standardoptionen zurück.

```js
const bigint = 3500n;

console.log(bigint.toLocaleString());
// "3,500" in der US-amerikanischen English-Locale
```

### Überprüfung auf Unterstützung der Parameter locales und options

Die Parameter `locales` und `options` sind möglicherweise nicht in allen Implementierungen unterstützt, da die Unterstützung für die Internationalisierungs-API optional ist und einige Systeme möglicherweise nicht über die notwendigen Daten verfügen. In Implementierungen ohne Unterstützung für Internationalisierung verwendet `toLocaleString()` immer die Systemlocale, was möglicherweise nicht das ist, was Sie wollen. Da jede Implementierung, die die Parameter `locales` und `options` unterstützt, die {{jsxref("Intl")}}-API unterstützen muss, können Sie die Existenz letzterer für die Unterstützung überprüfen:

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

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zahlenformaten. Um das Format der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Fallback-Sprachen) mit dem `locales`-Argument angeben:

```js
const bigint = 123456789123456789n;

// Deutsch verwendet Punkt für Tausendertrennzeichen
console.log(bigint.toLocaleString("de-DE"));
// 123.456.789.123.456.789

// Arabisch in den meisten arabischsprachigen Ländern verwendet östliche arabische Ziffern
console.log(bigint.toLocaleString("ar-EG"));
// ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// Indien verwendet Tausender/Lakh/Crore-Separatoren
console.log(bigint.toLocaleString("en-IN"));
// 1,23,45,67,89,12,34,56,789

// Der nu-Erweiterungsschlüssel fordert ein Zahlsystem an, z.B. chinesisches Dezimalsystem
console.log(bigint.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六,七八九,一二三,四五六,七八九

// Wenn Sie eine möglicherweise nicht unterstützte Sprache anfordern, wie
// Balinesisch, fügen Sie eine Fallback-Sprache hinzu, in diesem Fall Indonesisch
console.log(bigint.toLocaleString(["ban", "id"]));
// 123.456.789.123.456.789
```

### Verwendung von options

Die mit `toLocaleString()` bereitgestellten Ergebnisse können mit dem `options`-Parameter angepasst werden:

```js
const bigint = 123456789123456789n;

// ein Währungsformat anfordern
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456.789.123.456.789,00 €

// der japanische Yen verwendet keine Minderheitseinheit
console.log(
  bigint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,456,789,123,456,789

// auf drei signifikante Ziffern begrenzen
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
