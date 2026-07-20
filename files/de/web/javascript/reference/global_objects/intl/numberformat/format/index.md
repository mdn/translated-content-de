---
title: Intl.NumberFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

Die **`format()`** Methode von {{jsxref("Intl.NumberFormat")}} Instanzen formatiert eine Zahl gemäß den [Lokal- und Formatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) dieses `Intl.NumberFormat` Objekts.

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
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder ein String, der formatiert werden soll. Strings werden auf dieselbe Weise analysiert wie bei der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass `format()` den genauen Wert verwendet, den der String repräsentiert, um Verlust an Präzision während der impliziten Umwandlung in eine Zahl zu vermeiden.

> [!NOTE]
> Ältere Versionen der Spezifikation haben Strings als {{jsxref("Number")}} analysiert.
> Überprüfen Sie die Kompatibilitätstabelle für Ihren Browser.

### Rückgabewert

Ein String, der die gegebene `number` formatiert gemäß den Lokal- und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}} Objekts darstellt.

> [!NOTE]
> Meistens ist das von `format()` zurückgegebene Format konsistent. Jedoch kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb desselben Lokals — Ausgabevariationen sind vom Design beabsichtigt und durch die Spezifikation erlaubt. Es kann auch nicht das sein, was Sie erwarten. Zum Beispiel könnte der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit festkodierten Konstanten vergleichen.

## Beschreibung

{{jsxref("Number")}} Werte in JavaScript leiden unter Präzisionsverlust, wenn sie zu groß oder zu klein sind, was die textuelle Darstellung ungenau macht.
Wenn Sie Berechnungen mit ganzen Zahlen durchführen, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, sollten Sie stattdessen {{jsxref("BigInt")}} verwenden, was korrekt formatiert wird:

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

Sie können auch sehr große Strings übergeben, die als Dezimalzahlen mit beliebiger Genauigkeit formatiert werden (wenn Sie mit den Daten Berechnungen durchführen, müssen Sie immer noch mit `BigInt` arbeiten):

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## Beispiele

### Verwenden von format

Verwenden Sie die `format` Getter-Funktion, um einen einzelnen Währungswert zu formatieren.
Der untenstehende Code zeigt, wie die Rubel-Währung für ein russisches Lokal formatiert wird:

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### Verwenden von format mit map

Verwenden Sie die `format` Getter-Funktion, um alle Zahlen in einem Array zu formatieren.
Beachten Sie, dass die Funktion an die {{jsxref("Intl.NumberFormat")}} gebunden ist, von der sie erhalten wurde, sodass sie direkt an {{jsxref("Array.prototype.map")}} übergeben werden kann.
Dies wird als historisches Artefakt betrachtet, als Teil einer Konvention, die für neue Funktionen nicht mehr befolgt wird, aber erhalten bleibt, um die Kompatibilität mit bestehenden Programmen zu gewährleisten.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### Verwenden von format mit einem String

Durch die Verwendung eines Strings können wir Zahlen angeben, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, ohne Präzision zu verlieren.

```js
const numberFormat = new Intl.NumberFormat("en-US");

// Here the value is converted to a Number
console.log(numberFormat.format(987654321987654321));
// 987,654,321,987,654,300

// Here we use a string and don't lose precision
console.log(numberFormat.format("987654321987654321"));
// 987,654,321,987,654,321
```

Wir können auch die allgemeine "E" Exponentensyntax für Dezimalzeichenfolgen verwenden: `#.#E#`.
Der untenstehende Code erstellt ein {{jsxref("BigInt")}}, wandelt es in einen String mit dem Suffix `E-6` um und formatiert es dann.

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
