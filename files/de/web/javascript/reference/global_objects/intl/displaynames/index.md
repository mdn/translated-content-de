---
title: Intl.DisplayNames
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Das **`Intl.DisplayNames`**-Objekt ermöglicht die konsistente Übersetzung von Anzeige-Namen für Sprachen, Regionen und Schriftsysteme.

{{InteractiveExample("JavaScript Demo: Intl.DisplayNames")}}

```js interactive-example
const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});

console.log(regionNamesInEnglish.of("US"));
// Expected output: "United States"

console.log(regionNamesInTraditionalChinese.of("US"));
// Expected output: "美國"
```

## Konstruktor

- {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames()")}}
  - : Erstellt ein neues `Intl.DisplayNames`-Objekt.

## Statische Methoden

- {{jsxref("Intl/DisplayNames/supportedLocalesOf", "Intl.DisplayNames.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das die unterstützten Lokalisierungen unter den angegebenen Lokalisierungen enthält, ohne auf die Standardlokalisierung der Laufzeitumgebung zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.DisplayNames.prototype` definiert und werden von allen Instanzen von `Intl.DisplayNames` geteilt.

- {{jsxref("Object/constructor", "Intl.DisplayNames.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.DisplayNames`-Instanzen ist der ursprüngliche Wert der {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames")}}-Konstruktor.
- `Intl.DisplayNames.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.DisplayNames"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}
  - : Diese Methode erhält einen `code` und gibt einen String zurück, basierend auf der Lokalisierung und den Optionen, die bei der Instanziierung von `Intl.DisplayNames` angegeben wurden.
- {{jsxref("Intl/DisplayNames/resolvedOptions", "Intl.DisplayNames.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt zurück, das die Eigenschaften widerspiegelt, die während der Initialisierung des Objekts für die Lokalisierung und Formatierungsoptionen berechnet wurden.

## Beispiele

### Anzeige-Namen für Regionscodes

Um ein `Intl.DisplayNames` für eine Lokalisierung zu erstellen und den Anzeige-Namen für einen Regionscode zu erhalten.

```js
// Get display names of region in English
let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
regionNames.of("419"); // "Latin America"
regionNames.of("BZ"); // "Belize"
regionNames.of("US"); // "United States"
regionNames.of("BA"); // "Bosnia & Herzegovina"
regionNames.of("MM"); // "Myanmar (Burma)"

// Get display names of region in Traditional Chinese
regionNames = new Intl.DisplayNames(["zh-Hant"], { type: "region" });
regionNames.of("419"); // "拉丁美洲"
regionNames.of("BZ"); // "貝里斯"
regionNames.of("US"); // "美國"
regionNames.of("BA"); // "波士尼亞與赫塞哥維納"
regionNames.of("MM"); // "緬甸"
```

### Anzeige-Namen für Sprachen

Um ein `Intl.DisplayNames` für eine Lokalisierung zu erstellen und den Anzeige-Namen für eine Sprach-Schrift-Region-Sequenz zu erhalten.

```js
// Get display names of language in English
let languageNames = new Intl.DisplayNames(["en"], { type: "language" });
languageNames.of("fr"); // "French"
languageNames.of("de"); // "German"
languageNames.of("fr-CA"); // "Canadian French"
languageNames.of("zh-Hant"); // "Traditional Chinese"
languageNames.of("en-US"); // "American English"
languageNames.of("zh-TW"); // "Chinese (Taiwan)"]

// Get display names of language in Traditional Chinese
languageNames = new Intl.DisplayNames(["zh-Hant"], { type: "language" });
languageNames.of("fr"); // "法文"
languageNames.of("zh"); // "中文"
languageNames.of("de"); // "德文"
```

### Anzeige-Namen für Schriftsystemcodes

Um ein `Intl.DisplayNames` für eine Lokalisierung zu erstellen und den Anzeige-Namen für einen Schriftsystemcode zu erhalten.

```js
// Get display names of script in English
let scriptNames = new Intl.DisplayNames(["en"], { type: "script" });
// Get script names
scriptNames.of("Latn"); // "Latin"
scriptNames.of("Arab"); // "Arabic"
scriptNames.of("Kana"); // "Katakana"

// Get display names of script in Traditional Chinese
scriptNames = new Intl.DisplayNames(["zh-Hant"], { type: "script" });
scriptNames.of("Latn"); // "拉丁文"
scriptNames.of("Arab"); // "阿拉伯文"
scriptNames.of("Kana"); // "片假名"
```

### Anzeige-Namen für Währungs-Codes

Um ein `Intl.DisplayNames` für eine Lokalisierung zu erstellen und den Anzeige-Namen für einen Währungs-Code zu erhalten.

```js
// Get display names of currency code in English
let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
// Get currency names
currencyNames.of("USD"); // "US Dollar"
currencyNames.of("EUR"); // "Euro"
currencyNames.of("TWD"); // "New Taiwan Dollar"
currencyNames.of("CNY"); // "Chinese Yuan"

// Get display names of currency code in Traditional Chinese
currencyNames = new Intl.DisplayNames(["zh-Hant"], { type: "currency" });
currencyNames.of("USD"); // "美元"
currencyNames.of("EUR"); // "歐元"
currencyNames.of("TWD"); // "新台幣"
currencyNames.of("CNY"); // "人民幣"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.DisplayNames` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-displaynames/)
- {{jsxref("Intl")}}
