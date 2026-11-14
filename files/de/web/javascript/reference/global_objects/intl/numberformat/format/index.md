---
title: Intl.NumberFormat.prototype.format()
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`format()`** von {{jsxref("Intl.NumberFormat")}}-Instanzen formatiert eine Zahl entsprechend den [Gebiets- und Formatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) dieses `Intl.NumberFormat`-Objekts.

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
  - : Ein {{jsxref("Number")}}, ein {{jsxref("BigInt")}} oder ein String, der formatiert werden soll. Strings werden wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) verarbeitet. Allerdings verwendet `format()` den exakten Wert, den der String darstellt, und vermeidet so einen Präzisionsverlust durch die implizite Umwandlung in eine Zahl.

> [!NOTE]
> Ältere Versionen der Spezifikation verarbeiteten Strings als {{jsxref("Number")}}.
> Prüfen Sie die Kompatibilitätstabelle für Ihren Browser.

### Rückgabewert

Ein String, der den angegebenen `number`-Wert entsprechend den Gebiets- und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}}-Objekts formatiert darstellt.

> [!NOTE]
> Meist ist die von `format()` zurückgegebene Formatierung konsistent. Die Ausgabe kann jedoch zwischen Implementierungen variieren, selbst innerhalb desselben Gebietsschemas. Solche Unterschiede sind beabsichtigt und durch die Spezifikation erlaubt. Die Ausgabe entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise kann der String geschützte Leerzeichen enthalten oder von Steuerzeichen für bidirektionalen Text umgeben sein. Vergleichen Sie die Ergebnisse von `format()` daher nicht mit fest codierten Konstanten.

## Beschreibung

{{jsxref("Number")}}-Werte verlieren in JavaScript an Präzision, wenn sie zu groß oder zu klein sind. Dadurch kann ihre Textdarstellung ungenau werden.
Wenn Sie Berechnungen mit ganzen Zahlen durchführen, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, sollten Sie stattdessen {{jsxref("BigInt")}} verwenden. Solche Werte werden korrekt formatiert:

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

Sie können auch sehr große Zahlen als Strings übergeben, damit sie als Dezimalzahlen mit beliebiger Präzision formatiert werden. Wenn Sie mit diesen Daten Berechnungen durchführen, müssen Sie dafür weiterhin `BigInt` verwenden:

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## Beispiele

### `format` verwenden

Verwenden Sie die Getter-Funktion `format`, um einen einzelnen Währungsbetrag zu formatieren.
Der folgende Code zeigt, wie ein Rubelbetrag für ein russisches Gebietsschema formatiert wird:

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### `format` mit `map` verwenden

Verwenden Sie die Getter-Funktion `format`, um alle Zahlen in einem Array zu formatieren.
Beachten Sie, dass die Funktion an die {{jsxref("Intl.NumberFormat")}}-Instanz gebunden ist, von der sie abgerufen wurde. Sie kann daher direkt an {{jsxref("Array.prototype.map")}} übergeben werden.
Dies gilt als historisches Artefakt: Die zugrunde liegende Konvention wird bei neuen Funktionen nicht mehr befolgt, bleibt aber aus Gründen der Kompatibilität mit bestehenden Programmen erhalten.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### `format` mit einem String verwenden

Mit einem String können Sie Zahlen angeben, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, ohne Präzision zu verlieren.

```js
const numberFormat = new Intl.NumberFormat("en-US");

// Here the value is converted to a Number
console.log(numberFormat.format(987654321987654321));
// 987,654,321,987,654,300

// Here we use a string and don't lose precision
console.log(numberFormat.format("987654321987654321"));
// 987,654,321,987,654,321
```

Sie können für Dezimal-Strings auch die allgemeine Exponentenschreibweise mit „E“ verwenden: `#.#E#`.
Der folgende Code erstellt einen {{jsxref("BigInt")}}, wandelt ihn in einen String mit dem Suffix `E-6` um und formatiert ihn anschließend.

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
