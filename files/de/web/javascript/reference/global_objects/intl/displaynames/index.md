---
title: Intl.DisplayNames
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.DisplayNames`**-Objekt ermöglicht die konsistente Übersetzung von Bezeichnern für Sprache, Region und Schriftsystem.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## Konstruktor

- {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames()")}}
  - : Erstellt ein neues `Intl.DisplayNames`-Objekt.

## Statische Methoden

- {{jsxref("Intl/DisplayNames/supportedLocalesOf", "Intl.DisplayNames.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das diejenigen der bereitgestellten Lokalisierungen enthält, die unterstützt werden, ohne auf die Standardlokalisierung der Laufzeitumgebung zurückgreifen zu müssen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Intl.DisplayNames.prototype` definiert und werden von allen `Intl.DisplayNames` Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.DisplayNames.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Intl.DisplayNames`-Instanzen ist der anfängliche Wert der {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames")}}-Konstruktor.
- `Intl.DisplayNames.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Intl.DisplayNames"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}
  - : Diese Methode empfängt einen `code` und gibt einen String zurück, basierend auf der Lokalisierung und den angegebenen Optionen bei der Instanziierung von `Intl.DisplayNames`.
- {{jsxref("Intl/DisplayNames/resolvedOptions", "Intl.DisplayNames.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt zurück, dessen Eigenschaften die bei der Initialisierung des Objekts berechneten Lokalisierungs- und Formatierungsoptionen widerspiegeln.

## Beispiele

### Anzeige von Regionscode-Bezeichnern

Um ein `Intl.DisplayNames` für eine Lokalisierung zu erstellen und den Anzeigenamen für einen Regionscode zu erhalten.

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

### Sprache Anzeige von Bezeichnern

Um ein `Intl.DisplayNames` für eine Lokalisierung zu erstellen und den Anzeigenamen für eine Sprach-Skript-Region-Sequenz zu erhalten.

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

### Anzeige von Skriptcode-Bezeichnern

Um ein `Intl.DisplayNames` für eine Lokalisierung zu erstellen und den Anzeigenamen für einen Skriptcode zu erhalten.

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

### Anzeige von Währungscode-Bezeichnern

Um ein `Intl.DisplayNames` für eine Lokalisierung zu erstellen und den Anzeigenamen für einen Währungscode zu erhalten.

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

- {{jsxref("Intl")}}
