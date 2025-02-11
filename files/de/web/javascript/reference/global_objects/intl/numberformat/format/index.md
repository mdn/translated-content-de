---
title: Intl.NumberFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`format()`**-Methode von {{jsxref("Intl.NumberFormat")}}-Instanzen formatiert eine Zahl entsprechend den [Lokalisierungs- und Formatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) dieses `Intl.NumberFormat`-Objekts.

{{InteractiveExample("JavaScript Demo: Intl.NumberFormat.prototype.format", "taller")}}

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
  - : Ein {{jsxref("Number")}}, {{jsxref("BigInt")}} oder ein String, der formatiert wird. Strings werden auf die gleiche Weise analysiert wie bei der [Zahlumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass `format()` den genauen Wert verwendet, den der String darstellt, wodurch ein Verlust der Präzision bei der impliziten Umwandlung in eine Zahl vermieden wird.

> [!NOTE]
> Ältere Versionen der Spezifikation analysierten Strings wie ein {{jsxref("Number")}}.
> Überprüfen Sie die Kompatibilitätstabelle für Ihren Browser.

### Rückgabewert

Ein String, der die angegebene `number` nach den Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}}-Objekts formatiert darstellt.

> [!NOTE]
> Meistens ist die Formatierung, die von `format()` zurückgegeben wird, konsistent. Trotzdem kann die Ausgabe zwischen Implementierungen variieren, sogar innerhalb derselben Lokalisierung – diese Variationen sind durch Design vorgesehen und von der Spezifikation erlaubt. Es ist auch möglich, dass die Ausgabe nicht Ihren Erwartungen entspricht. Zum Beispiel kann der String geschützte Leerzeichen enthalten oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

## Beschreibung

{{jsxref("Number")}}-Werte in JavaScript leiden unter Präzisionsverlust, wenn sie zu groß oder zu klein sind, was die Textdarstellung ungenau macht.
Wenn Sie Berechnungen mit Ganzzahlen durchführen, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, sollten Sie stattdessen ein {{jsxref("BigInt")}} verwenden, das korrekt formatiert wird:

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

Sie können auch sehr große Strings übergeben, um sie als Dezimalzeichenkette mit beliebiger Präzision zu formatieren (wenn Sie Berechnungen mit den Daten durchführen, müssen Sie weiterhin mit `BigInt` arbeiten):

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## Beispiele

### Verwendung von format

Verwenden Sie die `format`-Getter-Funktion, um einen einzelnen Währungswert zu formatieren.
Der folgende Code zeigt, wie die Währung "Rubel" für eine russische Lokalisierung formatiert werden kann:

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### Verwendung von format mit map

Verwenden Sie die `format`-Getter-Funktion, um alle Zahlen in einem Array zu formatieren.
Beachten Sie, dass die Funktion an das {{jsxref("Intl.NumberFormat")}} gebunden ist, aus dem sie stammt, sodass sie direkt an {{jsxref("Array.prototype.map")}} übergeben werden kann.
Dies gilt als historisches Artefakt, als Teil einer Konvention, die für neue Funktionen nicht mehr befolgt wird, aber beibehalten wird, um die Kompatibilität mit bestehenden Programmen zu gewährleisten.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### Verwendung von format mit einem String

Mit einem String können wir Zahlen angeben, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, ohne dass Präzision verloren geht.

```js
const numberFormat = new Intl.NumberFormat("en-US");

// Here the value is converted to a Number
console.log(numberFormat.format(987654321987654321));
// 987,654,321,987,654,300

// Here we use a string and don't lose precision
console.log(numberFormat.format("987654321987654321"));
// 987,654,321,987,654,321
```

Wir können auch die allgemeine "E"-Exponenten-Schreibweise für Dezimalstrings verwenden: `#.#E#`.
Der folgende Code erstellt ein {{jsxref("BigInt")}}, wandelt es in einen String mit dem Suffix `E-6` um und formatiert es dann.

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
