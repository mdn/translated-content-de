---
title: Intl.Locale.prototype.baseName
short-title: baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`baseName`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt einen Teilstring der Zeichenketten-Darstellung dieser Lokalität zurück, der grundlegende Informationen über diese Lokalität enthält, einschließlich der Sprache sowie das Skript und die Region, falls verfügbar.

## Beschreibung

`baseName` gibt die `language ["-" script] ["-" region] *("-" variant)` Teilfolge der [unicode_language_id-Grammatik](https://www.unicode.org/reports/tr35/#Identifiers) zurück. Es enthält nur Informationen, die explizit im Konstruktor angegeben wurden, entweder durch die Locale-Identifier-Zeichenkette oder das Options-Objekt.

Der Set-Zugriffsbegrenzer von `baseName` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Einfaches Beispiel

```js
const myLoc = new Intl.Locale("fr-Latn-CA"); // Sets locale to Canadian French
console.log(myLoc.toString()); // Prints out "fr-Latn-CA-u-ca-gregory"
console.log(myLoc.baseName); // Prints out "fr-Latn-CA"
```

### Beispiel mit Optionen in der Eingabezeichenkette

```js
// Sets language to Japanese, region to Japan,

// calendar to Gregorian, hour cycle to 24 hours
const japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // Prints out "ja-JP-u-ca-gregory-hc-h24"
console.log(japan.baseName); // Prints out "ja-JP"
```

### Beispiel mit Optionen, die die Eingabezeichenkette überschreiben

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
