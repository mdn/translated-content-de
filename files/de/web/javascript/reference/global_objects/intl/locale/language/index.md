---
title: Intl.Locale.prototype.language
short-title: language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die **`language`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt die Sprache zurück, die mit dieser Locale verbunden ist.

## Beschreibung

Die Sprache ist eines der Kernattribute einer Locale. Die Unicode-Spezifikation behandelt den Sprachbezeichner einer Locale als Kombination aus Sprache und Region (um einen Unterschied zwischen Dialekten und Varianten zu machen, z. B. britisches Englisch vs. amerikanisches Englisch). Die `language`-Eigenschaft einer {{jsxref("Intl.Locale")}} gibt strikt den Sprache-Subtag der Locale zurück.

Der Wert der `language`-Eigenschaft wird zum Zeitpunkt der Erstellung festgelegt, entweder durch den ersten Teil des Locale-Bezeichners oder durch die `language`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind.

Der Setzugriff von `language` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann die Sprache dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Einstellen der Sprache über den Locale-String

Um ein gültiger Unicode-Locale-Bezeichner zu sein, muss ein String mit dem Sprache-Subtag beginnen. Das Hauptargument des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors muss ein gültiger Unicode-Locale-Bezeichner sein, sodass jedes Mal, wenn der Konstruktor verwendet wird, ein Bezeichner mit einem Sprache-Subtag übergeben werden muss.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // "en"
```

### Überschreiben der Sprache über das Konfigurationsobjekt-Argument

Während der Sprache-Subtag angegeben werden muss, verfügt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor über ein optionales Konfigurationsobjekt-Argument, das den Sprache-Subtag überschreiben kann.

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
- [Unicode language subtag](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity) in der Unicode locale data markup language Spezifikation
