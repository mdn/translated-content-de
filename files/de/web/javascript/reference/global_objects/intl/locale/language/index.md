---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`language`**-Zugriffseigenschaft von Instanzen von {{jsxref("Intl.Locale")}} gibt die mit dieser Locale verknüpfte Sprache zurück.

## Beschreibung

Sprache ist eines der Kernattribute einer Locale. Die Unicode-Spezifikation behandelt den Sprachidentifikator einer Locale als Kombination aus Sprache und Region (um Unterschiede zwischen Dialekten und Varianten zu machen, z.B. Britisches Englisch vs. Amerikanisches Englisch). Die `language`-Eigenschaft eines {{jsxref("Intl.Locale")}} gibt strikt das Sprachuntertag der Locale zurück. Der Wert der `language`-Eigenschaft wird zur Konstruktion festgelegt, entweder durch das Sprachuntertag (erster Teil) des Locale-Identifikators oder durch die `language`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind.

Der set-Accessor von `language` ist `undefined`. Diese Eigenschaft kann nicht direkt geändert werden.

## Beispiele

Wie andere Locale-Untertags kann die Sprache über den Locale-String oder ein Konfigurationsobjekt-Argument an das Konstruktor-Argument zum {{jsxref("Intl.Locale")}}-Objekt hinzugefügt werden.

### Festlegen der Sprache über den Locale-String

Um ein gültiger Unicode-Locale-Identifikator zu sein, muss ein String mit dem Sprachuntertag beginnen. Das Hauptargument für den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor muss ein gültiger Unicode-Locale-Identifikator sein, daher muss, wann immer der Konstruktor verwendet wird, ein Identifikator mit einem Sprachuntertag übergeben werden.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // Prints "en"
```

### Überschreiben der Sprache über das Konfigurationsobjekt-Argument

Obwohl das Sprachuntertag angegeben werden muss, verfügt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor über ein optionales Konfigurationsobjekt-Argument, das das Sprachuntertag überschreiben kann.

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
- [Unicode Sprachuntertag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity) in der Unicode-Locale-Daten-Markup-Sprachspezifikation
