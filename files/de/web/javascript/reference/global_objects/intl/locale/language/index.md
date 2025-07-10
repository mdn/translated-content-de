---
title: Intl.Locale.prototype.language
short-title: language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`language`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt die Sprache zurück, die mit diesem Gebietsschema assoziiert ist.

## Beschreibung

Die Sprache ist eines der Kerneigenschaften eines Gebietsschemas. Die Unicode-Spezifikation behandelt den Sprachbezeichner eines Gebietsschemas als Kombination aus Sprache und Region (um zwischen Dialekten und Variationen zu unterscheiden, z. B. Britisches Englisch vs. Amerikanisches Englisch). Die `language` Eigenschaft eines {{jsxref("Intl.Locale")}} gibt ausschließlich den Sprachsubtag des Gebietsschemas zurück. Der Wert der `language` Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `language` Subtag (erste Teil) des Gebietsschema-Bezeichners oder durch die `language` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind.

Der set-Zugriff auf `language` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann die Sprache dem {{jsxref("Intl.Locale")}} Objekt über den Gebietsschema-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Die Sprache über den Gebietsschema-String festlegen

Um ein gültiger Unicode-Gebietsschema-Bezeichner zu sein, muss ein String mit dem Sprachsubtag beginnen. Das Hauptargument für den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor muss ein gültiger Unicode-Gebietsschema-Bezeichner sein, daher muss, wann immer der Konstruktor verwendet wird, ein Bezeichner mit einem Sprachsubtag übergeben werden.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // Prints "en"
```

### Die Sprache über das Konfigurationsobjekt-Argument überschreiben

Während der Sprachsubtag spezifiziert werden muss, verfügt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor über ein optionales Konfigurationsobjekt-Argument, das den Sprachsubtag überschreiben kann.

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
- [Unicode-Sprachsubtag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity) in der Unicode-Locale-Daten-Markupsprachenspezifikation
