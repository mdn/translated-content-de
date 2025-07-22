---
title: Intl.Locale.prototype.baseName
short-title: baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die Eigenschaft **`baseName`** von {{jsxref("Intl.Locale")}} Instanzen gibt einen Teilstring der Zeichenkettendarstellung dieser Locale zurück, der Kerninformationen über diese Locale enthält, einschließlich der Sprache, Schrift, Region und Varianten, falls verfügbar.

## Beschreibung

`baseName` gibt die `language ["-" script] ["-" region] *("-" variant)` Untersequenz der [unicode_language_id Grammatik](https://www.unicode.org/reports/tr35/#Identifiers) zurück. Sie enthält nur Informationen, die im Konstruktor ausdrücklich angegeben wurden, entweder über die Locale-Identifikator-Zeichenkette oder das Optionsobjekt.

Der Set-Accessor von `baseName` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Einfaches Beispiel

```js
const myLoc = new Intl.Locale("fr-Latn-CA"); // Sets locale to Canadian French
console.log(myLoc.toString()); // "fr-Latn-CA-u-ca-gregory"
console.log(myLoc.baseName); // "fr-Latn-CA"
```

### Beispiel mit Erweiterungstags in der Eingabezeichenkette

```js
// Sets language to Japanese, region to Japan,
// calendar to Gregorian, hour cycle to 24 hours
const japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // "ja-JP-u-ca-gregory-hc-h24"
console.log(japan.baseName); // "ja-JP"
```

### Beispiel mit Optionen, die die Eingabezeichenkette überschreiben

```js
// Input string indicates language as Dutch and region as Belgium,
// but options object overrides the region and sets it to the Netherlands
const dutch = new Intl.Locale("nl-Latn-BE", { region: "NL" });

console.log(dutch.baseName); // "nl-Latn-NL"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
