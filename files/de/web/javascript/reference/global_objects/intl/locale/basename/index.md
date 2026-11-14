---
title: Intl.Locale.prototype.baseName
short-title: baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Accessor-Eigenschaft **`baseName`** von {{jsxref("Intl.Locale")}}-Instanzen gibt einen Teilstring der Zeichenfolgendarstellung dieses Gebietsschemas zurück. Er enthält die grundlegenden Informationen über das Gebietsschema, darunter Sprache, Schrift, Region und Varianten, sofern vorhanden.

## Beschreibung

`baseName` gibt die Teilsequenz `language ["-" script] ["-" region] *("-" variant)` der [unicode_language_id-Grammatik](https://www.unicode.org/reports/tr35/#Identifiers) zurück. Sie enthält nur Informationen, die beim Aufruf des Konstruktors ausdrücklich angegeben wurden, entweder über die Zeichenfolge des Gebietsschema-Bezeichners oder über das Optionsobjekt.

Der Set-Accessor von `baseName` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Einfaches Beispiel

```js
const myLoc = new Intl.Locale("fr-Latn-CA"); // Sets locale to Canadian French
console.log(myLoc.toString()); // "fr-Latn-CA"
console.log(myLoc.baseName); // "fr-Latn-CA"
```

### Beispiel mit Erweiterungs-Tags in der Eingabezeichenfolge

```js
// Sets language to Japanese, region to Japan,
// calendar to Gregorian, hour cycle to 24 hours
const japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-h24");
console.log(japan.toString()); // "ja-JP-u-ca-gregory-hc-h24"
console.log(japan.baseName); // "ja-JP"
```

### Beispiel mit Optionen, die die Eingabezeichenfolge überschreiben

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
