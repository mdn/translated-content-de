---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`language`** Zugriffsproperty von {{jsxref("Intl.Locale")}} Instanzen gibt die Sprache zurück, die mit diesem Gebietsschema verbunden ist.

## Beschreibung

Sprache ist eines der Kernelemente eines Gebietsschemas. Die Unicode-Spezifikation behandelt das Sprachkennzeichen eines Gebietsschemas als Sprache und Region zusammen (um einen Unterschied zwischen Dialekten und Varianten zu machen, z. B. britisches Englisch vs. amerikanisches Englisch). Die `language` Property eines {{jsxref("Intl.Locale")}} gibt strikt den Sprach-Subtag des Gebietsschemas zurück. Der Wert der `language` Property wird zur Erstellungszeit festgelegt, entweder über den `language` Subtag (erster Teil) des Gebietsschema-Identifiers oder über die `language` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind.

Der Set-Accessor von `language` ist `undefined`. Sie können diese Property nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann die Sprache mithilfe der Gebietsschema-Zeichenfolge oder eines Konfigurationsobjekt-Arguments zum Konstruktor zum {{jsxref("Intl.Locale")}} Objekt hinzugefügt werden.

### Festlegen der Sprache über die Gebietsschema-Zeichenfolge

Um ein gültiger Unicode-Gebietsschema-Identifier zu sein, muss eine Zeichenfolge mit dem Sprach-Subtag beginnen. Das Hauptargument des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors muss ein gültiger Unicode-Gebietsschema-Identifier sein, daher muss bei Verwendung des Konstruktors ein Identifier mit einem Sprach-Subtag übergeben werden.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // Druckt "en"
```

### Überschreiben der Sprache über das Konfigurationsobjekt-Argument

Während der Sprach-Subtag spezifiziert werden muss, verfügt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor über ein optionales Konfigurationsobjekt-Argument, das den Sprach-Subtag überschreiben kann.

```js
const locale = new Intl.Locale("en-Latn-US", { language: "es" });
console.log(locale.language); // Druckt "es"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode Language Subtag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity) in der Unicode-Gebietsschema-Daten-Markup-Speziifikation
