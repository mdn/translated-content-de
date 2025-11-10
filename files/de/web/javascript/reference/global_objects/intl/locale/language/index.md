---
title: Intl.Locale.prototype.language
short-title: language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`language`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt die Sprache zurück, die mit diesem Gebietsschema verknüpft ist.

## Beschreibung

Die Sprache ist eines der Kerneigenschaften eines Gebietsschemas. Die Unicode-Spezifikation behandelt den Sprachidentifikator eines Gebietsschemas als Sprache und Region zusammen (um eine Unterscheidung zwischen Dialekten und Varianten zu treffen, z.B. Britisches Englisch vs. Amerikanisches Englisch). Die `language` Eigenschaft eines {{jsxref("Intl.Locale")}} gibt strikt den Sprachuntertag des Gebietsschemas zurück.

Der Wert der `language` Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den ersten Teil des Gebietsschema-Identifikators oder durch die `language` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind.

Der Set-Zugriffsgeber von `language` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann die Sprache dem {{jsxref("Intl.Locale")}} Objekt über den Gebietsschema-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Festlegen der Sprache über den Gebietsschema-String

Um ein gültiger Unicode-Gebietsschema-Identifikator zu sein, muss ein String mit dem Sprachuntertag beginnen. Das Hauptargument des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors muss ein gültiger Unicode-Gebietsschema-Identifikator sein, daher muss bei der Verwendung des Konstruktors ein Identifikator mit einem Sprachuntertag übergeben werden.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // "en"
```

### Überschreiben der Sprache über das Konfigurationsobjekt-Argument

Obwohl der Sprachuntertag angegeben werden muss, verfügt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor über ein optionales Konfigurationsobjekt-Argument, das den Sprachuntertag überschreiben kann.

```js
const locale = new Intl.Locale("en-Latn-US", { language: "es" });
console.log(locale.language); // "es"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode language subtag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity) in der Spezifikation zur Unicode-Gebietsschemadaten-Markup-Sprache
