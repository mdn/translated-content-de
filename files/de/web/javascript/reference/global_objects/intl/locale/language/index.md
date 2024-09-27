---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`language`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt die Sprache zurück, die mit diesem Locale verbunden ist.

## Beschreibung

Sprache ist eines der Kerneigenschaften eines Locale. Die Unicode-Spezifikation behandelt den Sprachidentifikator eines Locale als Sprache und Region zusammen (um zwischen Dialekten und Varianten zu unterscheiden, z. B. britisches Englisch vs. amerikanisches Englisch). Die `language`-Eigenschaft eines {{jsxref("Intl.Locale")}} gibt streng das Sprach-Subtag des Locale zurück. Der Wert der `language`-Eigenschaft wird zur Konstruktion festgelegt, entweder durch das `language`-Subtag (erster Teil) des Locale-Identifikators oder durch die `language`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind.

Der Set-Accessor von `language` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann die Sprache dem {{jsxref("Intl.Locale")}}-Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Festlegen der Sprache über den Locale-String

Um ein gültiger Unicode-Locale-Identifikator zu sein, muss ein String mit dem Sprach-Subtag beginnen. Das Hauptargument für den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor muss ein gültiger Unicode-Locale-Identifikator sein, daher muss immer, wenn der Konstruktor verwendet wird, ein Identifikator mit einem Sprach-Subtag übergeben werden.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // Prints "en"
```

### Überschreiben der Sprache über das Konfigurationsobjekt-Argument

Während das Sprach-Subtag angegeben werden muss, hat der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor ein optionales Konfigurationsobjekt-Argument, das das Sprach-Subtag überschreiben kann.

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
- [Unicode-Sprach-Subtag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity) in der Unicode-Locale-Daten-Auszeichnungssprache-Spezifikation
