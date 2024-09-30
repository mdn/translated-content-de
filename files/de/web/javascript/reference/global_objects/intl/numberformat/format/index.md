---
title: Intl.NumberFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die Methode **`format()`** von {{jsxref("Intl.NumberFormat")}} Instanzen formatiert eine Zahl entsprechend der [Lokal- und Formatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) dieses `Intl.NumberFormat`-Objekts.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-format.html", "taller")}}

## Syntax

```js-nolint
format(number)
```

### Parameter

- `number`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}} oder ein String, der formatiert werden soll. Strings werden auf die gleiche Weise wie bei der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) geparst, außer dass `format()` den exakten Wert verwendet, den der String darstellt, um den Verlust von Präzision bei der impliziten Umwandlung in eine Zahl zu vermeiden.

> [!NOTE]
> Ältere Versionen der Spezifikation parsten Strings als {{jsxref("Number")}}.
> Überprüfen Sie die Kompatibilitätstabelle für Ihren Browser.

### Rückgabewert

Ein String, der die gegebene `number` gemäß der Lokal- und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}}-Objekts formatiert darstellt.

> [!NOTE]
> Meistens ist die Formatierung, die `format()` zurückgibt, konsistent. Das Ergebnis kann jedoch je nach Implementierung variieren, sogar innerhalb derselben Locale — solche Variationen sind gewollt und von der Spezifikation erlaubt. Es kann auch vorkommen, dass es nicht dem entspricht, was Sie erwarten. Zum Beispiel könnte der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit festkodierten Konstanten vergleichen.

## Beschreibung

{{jsxref("Number")}}-Werte in JavaScript leiden an Präzisionsverlusten, wenn sie zu groß oder zu klein sind, was die Textdarstellung ungenau macht.
Wenn Sie Berechnungen mit ganzen Zahlen durchführen, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, sollten Sie stattdessen ein {{jsxref("BigInt")}} verwenden, da dies korrekt formatiert wird:

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

Sie können auch sehr große Strings durchlaufen lassen, um sie als Dezimalstrings mit beliebiger Genauigkeit zu formatieren (wenn Sie Berechnungen mit den Daten durchführen, müssen Sie dennoch mit `BigInt` arbeiten):

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## Beispiele

### Verwendung von format

Verwenden Sie die `format` Getter-Funktion, um einen einzelnen Währungswert zu formatieren.
Das folgende Beispiel zeigt, wie man die Währung Rubel für ein russisches Locale formatiert:

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### Verwendung von format mit map

Verwenden Sie die `format` Getter-Funktion, um alle Zahlen in einem Array zu formatieren.
Beachten Sie, dass die Funktion an das {{jsxref("Intl.NumberFormat")}}, von dem sie abgeleitet wurde, gebunden ist, sodass sie direkt an {{jsxref("Array.prototype.map")}} übergeben werden kann.
Dies wird als historisches Artefakt betrachtet, als Teil einer Konvention, die für neue Funktionen nicht mehr befolgt wird, aber erhalten bleibt, um die Kompatibilität mit bestehenden Programmen zu gewährleisten.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### Verwendung von format mit einem String

Mit einem String können wir Zahlen, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, ohne Genauigkeitsverlust angeben.

```js
const numberFormat = new Intl.NumberFormat("en-US");

// Here the value is converted to a Number
console.log(numberFormat.format(987654321987654321));
// 987,654,321,987,654,300

// Here we use a string and don't lose precision
console.log(numberFormat.format("987654321987654321"));
// 987,654,321,987,654,321
```

Wir können auch die allgemeine "E"-Exponentsyntax für Dezimalstrings verwenden: `#.#E#`.
Der untenstehende Code erstellt ein {{jsxref("BigInt")}}, zwingt ihn zu einem String mit dem Suffix `E-6` und formatiert ihn dann.

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
