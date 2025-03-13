---
title: Intl.NumberFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`format()`**-Methode von {{jsxref("Intl.NumberFormat")}}-Instanzen formatiert eine Zahl entsprechend der [Lokalisierungs- und Formatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) dieses `Intl.NumberFormat`-Objekts.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.prototype.format()", "taller")}}

```js interactive-example
const amount = 654321.987;

const options1 = { style: "currency", currency: "RUB" };
const numberFormat1 = new Intl.NumberFormat("ru-RU", options1);

console.log(numberFormat1.format(amount));
// Expected output: "654 321,99 ₽"

const options2 = { style: "currency", currency: "USD" };
const numberFormat2 = new Intl.NumberFormat("en-US", options2);

console.log(numberFormat2.format(amount));
// Expected output: "$654,321.99"
```

## Syntax

```js-nolint
format(number)
```

### Parameter

- `number`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder ein String, der formatiert werden soll. Strings werden auf die gleiche Weise geparst wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass `format()` den exakten Wert verwendet, den der String darstellt, um einen Präzisionsverlust während der impliziten Umwandlung in eine Zahl zu vermeiden.

> [!NOTE]
> Ältere Versionen der Spezifikation parsten Strings als eine {{jsxref("Number")}}.
> Überprüfen Sie die Kompatibilitätstabelle für Ihren Browser.

### Rückgabewert

Ein String, der die gegebene `number` gemäß den Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}}-Objekts formatiert darstellt.

> [!NOTE]
> Meistens ist das von `format()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe zwischen Implementierungen, selbst innerhalb derselben Lokalisierung, variieren — Variationen sind beabsichtigt und von der Spezifikation zugelassen. Es kann auch nicht das sein, was Sie erwarten. Der String kann zum Beispiel geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit hartcodierten Konstanten vergleichen.

## Beschreibung

{{jsxref("Number")}}-Werte in JavaScript leiden an Präzisionsverlust, wenn sie zu groß oder zu klein sind, was die textuelle Darstellung ungenau macht.
Wenn Sie Berechnungen mit ganzen Zahlen durchführen, die größer sind als {{jsxref("Number.MAX_SAFE_INTEGER")}}, sollten Sie stattdessen ein {{jsxref("BigInt")}} verwenden, welches korrekt formatiert:

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

Sie können auch sehr große Strings übergeben, um sie als Dezimalstrings mit beliebiger Präzision zu formatieren (wenn Sie Berechnungen mit den Daten durchführen, müssen Sie weiterhin mit `BigInt` arbeiten):

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## Beispiele

### Formatieren mit format

Verwenden Sie die `format`-Getter-Funktion, um einen einzelnen Währungswert zu formatieren.
Der untenstehende Code zeigt, wie die Währung Rubel für eine russische Lokalisierung formatiert wird:

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### Verwenden von format mit map

Verwenden Sie die `format`-Getter-Funktion, um alle Zahlen in einem Array zu formatieren.
Beachten Sie, dass die Funktion an das {{jsxref("Intl.NumberFormat")}} gebunden ist, von dem sie abgerufen wurde, sodass sie direkt an {{jsxref("Array.prototype.map")}} übergeben werden kann.
Dies wird als historisches Artefakt betrachtet, das Teil einer Konvention ist, die für neue Funktionen nicht mehr verfolgt wird, aber zur Wahrung der Kompatibilität mit bestehenden Programmen erhalten bleibt.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### Verwenden von format mit einem String

Indem wir einen String verwenden, können wir Zahlen angeben, die größer sind als {{jsxref("Number.MAX_SAFE_INTEGER")}}, ohne Präzision zu verlieren.

```js
const numberFormat = new Intl.NumberFormat("en-US");

// Here the value is converted to a Number
console.log(numberFormat.format(987654321987654321));
// 987,654,321,987,654,300

// Here we use a string and don't lose precision
console.log(numberFormat.format("987654321987654321"));
// 987,654,321,987,654,321
```

Wir können auch die allgemeine "E" Exponentensyntax für Dezimalstrings verwenden: `#.#E#`.
Der untenstehende Code erzeugt ein {{jsxref("BigInt")}}, wandelt es in einen String mit dem Suffix `E-6` um und formatiert es dann.

```js
const numberFormat = new Intl.NumberFormat("en-US");
const bigNum = 1000000000000000110000n;
console.log(numberFormat.format(bigNum));
// "1,000,000,000,000,000,110,000"

// Format as a string using the `E` syntax:
console.log(numberFormat.format(`${bigNum}E-6`));
// "1,000,000,000,000,000.11"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
