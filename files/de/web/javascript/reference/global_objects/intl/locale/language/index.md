---
title: Intl.Locale.prototype.language
short-title: language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`language`** Zugriffs-Eigenschaft von Instanzen des Objekts {{jsxref("Intl.Locale")}} gibt die mit diesem Gebietsschema verbundene Sprache zurück.

## Beschreibung

Sprache ist eines der Kernattribute eines Gebietsschemas. Die Unicode-Spezifikation behandelt die Sprachkennung eines Gebietsschemas als Kombination aus Sprache und Region (um zwischen Dialekten und Variationen zu unterscheiden, z. B. Britisches Englisch vs. Amerikanisches Englisch). Die `language`-Eigenschaft eines {{jsxref("Intl.Locale")}} gibt strikt den Sprach-Subtag des Gebietsschemas zurück. Der Wert der `language`-Eigenschaft wird zum Zeitpunkt der Erstellung festgelegt, entweder durch den Sprach-Subtag (erster Teil) des Gebietsschema-Identifikators oder durch die `language`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind.

Der Set-Accessor von `language` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann die Sprache dem {{jsxref("Intl.Locale")}}-Objekt über den Gebietsschema-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Festlegen der Sprache über den Gebietsschema-String

Um ein gültiger Unicode-Gebietsschema-Identifikator zu sein, muss ein String mit dem Sprach-Subtag beginnen. Das Hauptargument des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors muss ein gültiger Unicode-Gebietsschema-Identifikator sein, daher muss immer, wenn der Konstruktor verwendet wird, ein Identifikator mit einem Sprach-Subtag übergeben werden.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // Prints "en"
```

### Überschreiben der Sprache durch das Konfigurationsobjekt-Argument

Während der Sprach-Subtag spezifiziert werden muss, hat der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor ein optionales Konfigurationsobjekt-Argument, das den Sprach-Subtag überschreiben kann.

```js
const locale = new Intl.Locale("en-Latn-US", { language: "es" });
console.log(locale.language); // Prints "es"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode-Sprachsubtag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity) in der Unicode-Gebietsschema-Daten-Markupsprache-Spezifikation
