---
title: Intl.NumberFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`format()`** Methode von {{jsxref("Intl.NumberFormat")}} Instanzen formatiert eine Zahl gemäß den [lokalen und Formatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) dieses `Intl.NumberFormat` Objekts.

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
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder ein String, der formatiert werden soll. Strings werden auf die gleiche Weise geparst wie bei der [Zahlkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass `format()` den exakten Wert verwendet, den der String darstellt, und dabei den Präzisionsverlust bei der impliziten Konvertierung in eine Zahl vermeidet.

> [!NOTE]
> Ältere Versionen der Spezifikation parsten Strings als {{jsxref("Number")}}.
> Überprüfen Sie die Kompatibilitätstabelle für Ihren Browser.

### Rückgabewert

Ein String, der die angegebene `number` gemäß den lokalen und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}} Objekts formatiert darstellt.

> [!NOTE]
> Meistens ist das von `format()` zurückgegebene Format konsistent. Allerdings kann die Ausgabe je nach Implementierung variieren, selbst innerhalb desselben Gebietsschemas — Abweichungen sind beabsichtigt und von der Spezifikation erlaubt. Es könnte auch nicht Ihren Erwartungen entsprechen. Zum Beispiel kann der String nicht trennbare Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit festcodierten Konstanten vergleichen.

## Beschreibung

{{jsxref("Number")}} Werte in JavaScript verlieren an Präzision, wenn sie zu groß oder zu klein sind, wodurch die Textdarstellung ungenau wird.
Wenn Sie Berechnungen mit ganzen Zahlen durchführen, die größer sind als {{jsxref("Number.MAX_SAFE_INTEGER")}}, sollten Sie stattdessen ein {{jsxref("BigInt")}} verwenden, das korrekt formatiert wird:

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

Sie können auch sehr große Strings weitergeben, um sie als Dezimalzahl mit beliebiger Genauigkeit zu formatieren (wenn Sie Berechnungen mit den Daten durchführen, müssen Sie weiterhin mit `BigInt` arbeiten):

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## Beispiele

### Verwendung von format

Verwenden Sie die `format` Getter-Funktion, um einen einzelnen Währungswert zu formatieren.
Der untenstehende Code zeigt, wie man die Währung Rubel für ein russisches Gebietsschema formatiert:

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### Verwendung von format mit map

Verwenden Sie die `format` Getter-Funktion, um alle Zahlen in einem Array zu formatieren.
Beachten Sie, dass die Funktion an das {{jsxref("Intl.NumberFormat")}} gebunden ist, von dem sie erhalten wurde, sodass sie direkt an {{jsxref("Array.prototype.map")}} übergeben werden kann.
Dies wird als historisches Artefakt angesehen, als Teil einer Konvention, die für neue Funktionen nicht mehr verfolgt wird, aber zur Aufrechterhaltung der Kompatibilität mit bestehenden Programmen beibehalten wird.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### Verwendung von format mit einem String

Mit einem String können wir Zahlen spezifizieren, die größer sind als {{jsxref("Number.MAX_SAFE_INTEGER")}}, ohne Präzision zu verlieren.

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
Der folgende Code erzeugt ein {{jsxref("BigInt")}}, wandelt es in einen String mit dem Suffix `E-6` um und formatiert es dann.

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
