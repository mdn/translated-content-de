---
title: Intl.Locale.prototype.baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`baseName`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt eine Teilzeichenkette der String-Repräsentation dieses Gebietsschemas zurück, die Kerninformationen über dieses Gebietsschema enthält, einschließlich der Sprache und, falls verfügbar, des Schriftsystems und der Region.

## Beschreibung

`baseName` gibt die Teilsequenz `language ["-" script] ["-" region] *("-" variant)` der [unicode_language_id Grammatik](https://www.unicode.org/reports/tr35/#Identifiers) zurück. Es enthält nur Informationen, die explizit im Konstruktor angegeben wurden, entweder durch die Gebietsschema-Identifikatorzeichenfolge oder das Optionsobjekt.

Der set-Accessor von `baseName` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Einfaches Beispiel

```js
const myLoc = new Intl.Locale("fr-Latn-CA"); // Setzt das Gebietsschema auf Kanadisches Französisch
console.log(myLoc.toString()); // Gibt "fr-Latn-CA-u-ca-gregory" aus
console.log(myLoc.baseName); // Gibt "fr-Latn-CA" aus
```

### Beispiel mit Optionen in der Eingabezeichenfolge

```js
// Setzt Sprache auf Japanisch, Region auf Japan,

// Kalender auf Gregoriaisch, Stundenzyklus auf 24 Stunden
const japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // Gibt "ja-JP-u-ca-gregory-hc-h24" aus
console.log(japan.baseName); // Gibt "ja-JP" aus
```

### Beispiel mit Optionen, die die Eingabezeichenfolge überschreiben

```js
// Eingabezeichenfolge gibt Sprache als Niederländisch und Region als Belgien an,

// aber das Optionsobjekt überschreibt die Region und setzt sie auf die Niederlande
const dutch = new Intl.Locale("nl-Latn-BE", { region: "NL" });

console.log(dutch.baseName); // Gibt "nl-Latn-NL" aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
