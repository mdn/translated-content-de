---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`language`**-Zugriffseigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt die Sprache zurück, die mit dieser Lokalisierung verbunden ist.

## Beschreibung

Die Sprache ist eines der Kerneigenschaften einer Lokalisierung. Die Unicode-Spezifikation behandelt den Sprachbezeichner einer Lokalisierung als Kombination aus Sprache und Region (um Unterschiede zwischen Dialekten und Varianten zu kennzeichnen, z. B. Britisches Englisch vs. Amerikanisches Englisch). Die `language`-Eigenschaft eines {{jsxref("Intl.Locale")}} gibt streng genommen nur das Sprachsubtag der Lokalisierung zurück. Der Wert der `language`-Eigenschaft wird zur Zeitpunkt der Erstellung festgelegt, entweder durch das `language`-Subtag (erster Teil) der Lokalisierungskennung oder durch die `language`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letztere hat Priorität, wenn beide vorhanden sind.

Der Set-Accessor von `language` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Lokalisierungs-Subtags kann die Sprache dem {{jsxref("Intl.Locale")}}-Objekt über den Lokalisierungs-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Festlegen der Sprache über den Lokalisierungs-String

Um ein gültiger Unicode-Lokalisierungsbezeichner zu sein, muss ein String mit dem Sprachsubtag beginnen. Das Hauptargument für den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor muss ein gültiger Unicode-Lokalisierungsbezeichner sein, sodass beim Gebrauch des Konstruktors ein Bezeichner mit einem Sprachsubtag übergeben werden muss.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // Prints "en"
```

### Überschreiben der Sprache via Konfigurationsobjekt-Argument

Während das Sprachsubtag spezifiziert werden muss, hat der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor ein optionales Konfigurationsobjekt-Argument, das das Sprachsubtag überschreiben kann.

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
- [Unicode Sprachsubtag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity) in der Unicode-Lokalisierungsdaten-Markupsprache-Spezifikation
