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
  - : Eine {{jsxref("Number")}}, {{jsxref("BigInt")}}, oder Zeichenkette, die formatiert werden soll. Zeichenketten werden auf die gleiche Weise wie bei der [Zahlumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) geparst, außer dass `format()` den exakten Wert verwendet, den die Zeichenkette darstellt, um einen Präzisionsverlust bei der impliziten Umwandlung in eine Zahl zu vermeiden.

> [!NOTE]
> Ältere Versionen der Spezifikation haben Zeichenketten als {{jsxref("Number")}} geparst.
> Prüfen Sie die Kompatibilitätstabelle für Ihren Browser.

### Rückgabewert

Ein Zeichenkette, die die angegebene `number` gemäß den Lokalisierungs- und Formatierungsoptionen dieses {{jsxref("Intl.NumberFormat")}} Objekts formatiert darstellt.

> [!NOTE]
> Meistens ist die durch `format()` zurückgegebene Formatierung konsistent. Allerdings kann die Ausgabe zwischen Implementierungen variieren, selbst innerhalb derselben Lokalisierung — Ausgabevariationen sind beabsichtigt und durch die Spezifikation erlaubt. Sie entspricht möglicherweise auch nicht Ihren Erwartungen. Beispielsweise könnte die Zeichenkette nicht trennbare Leerzeichen verwenden oder von bidirektionalen Steuerzeichen umgeben sein. Sie sollten die Ergebnisse von `format()` nicht mit fest kodierten Konstanten vergleichen.

## Beschreibung

{{jsxref("Number")}} Werte in JavaScript leiden unter einem Präzisionsverlust, wenn sie zu groß oder zu klein sind, was die Textdarstellung ungenau macht.
Wenn Sie Berechnungen mit Ganzzahlen durchführen, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, sollten Sie stattdessen ein {{jsxref("BigInt")}} verwenden, das korrekt formatiert wird:

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

Sie können auch sehr große Zeichenketten durchreichen, um sie als dezimale Zeichenkette mit beliebiger Genauigkeit zu formatieren (wenn Sie Berechnungen mit den Daten durchführen, müssen Sie weiterhin mit `BigInt` arbeiten):

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## Beispiele

### Verwendung von format

Verwenden Sie die `format` Getter-Funktion, um einen einzelnen Währungswert zu formatieren.
Der unten stehende Code zeigt, wie die Währung Rubel für eine russische Lokalisierung formatiert wird:

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### Verwendung von format mit map

Verwenden Sie die `format` Getter-Funktion, um alle Zahlen in einem Array zu formatieren.
Beachten Sie, dass die Funktion an das {{jsxref("Intl.NumberFormat")}} gebunden ist, von dem sie abgerufen wurde, sodass sie direkt an {{jsxref("Array.prototype.map")}} übergeben werden kann.
Dies wird als historisches Artefakt angesehen, als Teil einer Konvention, die für neue Funktionen nicht mehr befolgt wird, aber beibehalten wird, um die Kompatibilität mit bestehenden Programmen zu gewährleisten.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### Verwendung von format mit einer Zeichenkette

Mit einer Zeichenkette können wir Zahlen spezifizieren, die größer als {{jsxref("Number.MAX_SAFE_INTEGER")}} sind, ohne Präzision zu verlieren.

```js
const numberFormat = new Intl.NumberFormat("en-US");

// Hier wird der Wert in eine Number umgewandelt
console.log(numberFormat.format(987654321987654321));
// 987,654,321,987,654,300

// Hier verwenden wir eine Zeichenkette und verlieren keine Präzision
console.log(numberFormat.format("987654321987654321"));
// 987,654,321,987,654,321
```

Wir können auch die allgemeine "E"-Exponenten-Syntax für dezimale Zeichenketten verwenden: `#.#E#`.
Der unten stehende Code erstellt ein {{jsxref("BigInt")}}, wandelt es in eine Zeichenkette mit dem Suffix `E-6` um und formatiert es dann.

```js
const numberFormat = new Intl.NumberFormat("en-US");
const bigNum = 1000000000000000110000n;
console.log(numberFormat.format(bigNum));
// "1,000,000,000,000,000,110,000"

// Formatieren als Zeichenkette mit der `E`-Syntax:
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
