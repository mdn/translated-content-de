---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
l10n:
  sourceCommit: 4436acdeb5087c7fc5afc58fc8b475e30481c801
---

{{JSRef}}

Das **`Intl.NumberFormat`** Objekt ermöglicht sprachspezifische Zahlenformatierung.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## Konstruktor

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : Erstellt ein neues `NumberFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das die der bereitgestellten Gebietsschemas enthält, die unterstützt werden, ohne auf das Standardgebietsschema der Laufzeitumgebung zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.NumberFormat.prototype` definiert und werden von allen `Intl.NumberFormat` Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Intl.NumberFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.NumberFormat` Instanzen ist der anfängliche Wert der {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat")}} Konstruktor.
- `Intl.NumberFormat.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Intl.NumberFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  - : Getter-Funktion, die eine Zahl entsprechend dem Gebietsschema und den Formatierungsoptionen dieses `Intl.NumberFormat`-Objekts formatiert.
- {{jsxref("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}}
  - : Getter-Funktion, die einen Zahlenbereich entsprechend dem Gebietsschema und den Formatierungsoptionen des `Intl.NumberFormat`-Objekts formatiert, von dem die Methode aufgerufen wird.
- {{jsxref("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, die den Bereich der Zahlenstrings in Teilen darstellen, die für benutzerdefinierte, gebietsschemaspezifische Formatierung verwendet werden können.
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, die den Zahlenstring in Teilen darstellen, die für benutzerdefinierte, gebietsschemaspezifische Formatierung verwendet werden können.
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung des Objekts berechneten Gebietsschema- und Kollationsoptionen widerspiegeln.

## Beispiele

### Grundlegende Verwendung

Bei der grundlegenden Verwendung ohne Angabe eines Gebietsschemas wird eine formatierte Zeichenkette im Standardgebietsschema und mit den Standardoptionen zurückgegeben.

```js
const number = 3500;

console.log(new Intl.NumberFormat().format(number));
// '3,500' wenn im US-Englisch-Gebietsschema
```

### Verwendung von Gebietsschemas

Dieses Beispiel zeigt einige der Variationen in lokalisierten Zahlenformaten. Um das Format der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ausweichsprachen) mit dem `locales`-Argument angeben:

```js
const number = 123456.789;

// Deutsch verwendet Komma als Dezimaltrennzeichen und Punkt für Tausender
console.log(new Intl.NumberFormat("de-DE").format(number));
// 123.456,789

// Arabisch in den meisten arabischsprachigen Ländern verwendet echte arabische Ziffern
console.log(new Intl.NumberFormat("ar-EG").format(number));
// ١٢٣٤٥٦٫٧٨٩

// Indien verwendet Tausender-/Lakh-/Crore-Trennzeichen
console.log(new Intl.NumberFormat("en-IN").format(number));
// 1,23,456.789

// der nu-Erweiterungsschlüssel fordert ein Zahlensystem an, z. B. chinesische Dezimalzahlen
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// 一二三,四五六.七八九

// wenn Sie eine Sprache anfordern, die möglicherweise nicht unterstützt wird, wie z.B. Balinesisch, geben Sie eine Ausweichsprache an, in diesem Fall Indonesisch
console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// 123.456,789
```

### Verwendung von Optionen

Die Ergebnisse können mit dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) Argument angepasst werden:

```js
const number = 123456.789;

// Währungformat anfordern
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// 123.456,79 €

// Der japanische Yen verwendet keine Untereinheit
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// ￥123,457

// Begrenzung auf drei signifikante Ziffern
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// 1,23,000

// Formatierung mit Einheiten
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(50),
);
// 50 km/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// 16 litres
```

Für eine vollständige Liste der Optionen siehe die Seite zum [`Intl.NumberFormat()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.NumberFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-numberformat/)
- {{jsxref("Intl")}}
