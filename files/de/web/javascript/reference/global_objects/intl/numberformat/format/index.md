---
title: Intl.NumberFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`format()`** Methode von {{jsxref("Intl.NumberFormat")}} Instanzen formatiert eine Zahl gemäß den [Lokalisierungs- und Formatierungsoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) dieses `Intl.NumberFormat` Objekts.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-format.html", "taller")}}

## Syntax

```js-nolint
format(number)
```

### Parameter

- `number`
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder ein String, das formatiert werden soll. Strings werden auf die gleiche Weise wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) analysiert, außer dass `format()` den genauen Wert verwendet, den der String darstellt, um einen Präzisionsverlust während der impliziten Konvertierung in eine Zahl zu vermeiden.

> [!NOTE]
> Ältere Versionen der Spezifikation haben Strings als {{jsxref("Number")}} analysiert.
> Prüfen Sie die Kompatibilitätstabelle für Ihren Browser.

### Rückgabewert

Ein String, der die gegebene `number` darstellt und gemäß den Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}} Objekts formatiert ist.

> [!NOTE]
> Meistens ist das von `format()` zurückgegebene Format konsistent. Dennoch kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Lokalisierung — Ausgabeschwankungen sind beabsichtigt und von der Spezifikation erlaubt. Es kann auch nicht Ihren Erwartungen entsprechen. Beispielsweise kann der String geschützte Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest codierten Konstanten vergleichen.

## Beschreibung

{{jsxref("Number")}} Werte in JavaScript leiden unter Präzisionsverlust, wenn sie zu groß oder zu klein sind, wodurch die Textdarstellung ungenau wird.
Wenn Sie Berechnungen mit ganzen Zahlen durchführen, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, sollten Sie stattdessen ein {{jsxref("BigInt")}} verwenden, das korrekt formatiert wird:

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

Sie können auch sehr große Strings übergeben, die als Dezimalstrings mit willkürlicher Präzision formatiert werden sollen (wenn Sie Berechnungen mit den Daten durchführen, müssen Sie weiterhin mit `BigInt` arbeiten):

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## Beispiele

### Verwendung von format

Verwenden Sie die `format` Getter-Funktion, um einen einzelnen Währungswert zu formatieren.
Der folgende Code zeigt, wie die Währung "Rubel" für eine russische Lokalisierung formatiert wird:

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### Verwendung von format mit map

Verwenden Sie die `format` Getter-Funktion, um alle Zahlen in einem Array zu formatieren.
Beachten Sie, dass die Funktion an die {{jsxref("Intl.NumberFormat")}} gebunden ist, von der sie abgerufen wurde, sodass sie direkt an {{jsxref("Array.prototype.map")}} übergeben werden kann.
Dies wird als historisches Artefakt angesehen, als Teil einer Konvention, die für neue Funktionen nicht mehr befolgt wird, aber beibehalten wird, um die Kompatibilität mit bestehenden Programmen zu gewährleisten.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### Verwendung von format mit einem String

Mit einem String können wir Zahlen angeben, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, ohne Präzision zu verlieren.

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
