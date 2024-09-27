---
title: Intl.Locale.prototype.baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`baseName`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt eine Teilzeichenfolge der Zeichenfolgedarstellung dieses Standorts zurück, die Kerninformationen über diesen Standort enthält, einschließlich der Sprache sowie des Skripts und der Region, falls verfügbar.

## Beschreibung

`baseName` gibt die `language ["-" script] ["-" region] *("-" variant)` Teilsequenz der [unicode_language_id Grammatik](https://www.unicode.org/reports/tr35/#Identifiers) zurück. Sie enthält nur Informationen, die im Konstruktor explizit angegeben wurden, entweder durch den Locale-Identifier-String oder das Optionsobjekt.

Der Set-Accessor von `baseName` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Einfaches Beispiel

```js
const myLoc = new Intl.Locale("fr-Latn-CA"); // Sets locale to Canadian French
console.log(myLoc.toString()); // Prints out "fr-Latn-CA-u-ca-gregory"
console.log(myLoc.baseName); // Prints out "fr-Latn-CA"
```

### Beispiel mit Optionen im Eingabestring

```js
// Sets language to Japanese, region to Japan,

// calendar to Gregorian, hour cycle to 24 hours
const japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // Prints out "ja-JP-u-ca-gregory-hc-h24"
console.log(japan.baseName); // Prints out "ja-JP"
```

### Beispiel mit Optionen, die den Eingabestring überschreiben

```js
// Input string indicates language as Dutch and region as Belgium,

// but options object overrides the region and sets it to the Netherlands
const dutch = new Intl.Locale("nl-Latn-BE", { region: "NL" });

console.log(dutch.baseName); // Prints out "nl-Latn-NL"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
