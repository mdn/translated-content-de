---
title: Intl.Locale.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Intl.Locale")}} Instanzen gibt die vollständige [Locale-Kennzeichnerzeichenkette](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier) dieses Locales zurück.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-tostring.html", "taller")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Die Unicode-Locale-Kennzeichnerzeichenkette des _locale_.

## Beschreibung

Das `Locale`-Objekt ist eine JavaScript-Darstellung eines Konzepts
Unicode-Locale-Kennzeichner. Informationen über ein bestimmtes Locale (Sprache, Schrift,
Kalendertyp, etc.) können in einer Locale-Kennzeichnerzeichenkette kodiert werden. Um die Arbeit
mit diesen Locale-Kennzeichnern zu erleichtern, wurde das `Locale`-Objekt
in JavaScript eingeführt. Ein Aufruf der `toString`-Methode an einem Locale-Objekt
gibt die Kennzeichnerzeichenkette für dieses bestimmte Locale zurück. Die
`toString`-Methode ermöglicht es, `Locale`-Instanzen als Argument
für bestehende `Intl`-Konstruktoren bereitzustellen, in JSON zu serialisieren
oder in jedem anderen Kontext zu verwenden, in dem eine genaue Zeichenfolgenrepräsentation nützlich ist.

## Beispiele

### Verwendung von toString

```js
const myLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(myLocale.baseName); // Prints "fr-Latn-FR"
console.log(myLocale.toString()); // Prints "fr-Latn-FR-u-ca-gregory-hc-h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "baseName")}}
