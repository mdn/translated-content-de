---
title: Intl.Locale.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt die vollständige [Locale-Bezeichner-Zeichenkette](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier) dieser Locale zurück.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-tostring.html", "taller")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Die Unicode-Locale-Bezeichner-Zeichenkette des _locale_.

## Beschreibung

Das `Locale`-Objekt ist eine JavaScript-Darstellung eines Konzepts
Unicode-Locale-Bezeichner. Informationen über eine bestimmte Locale (Sprache, Schrift, Kalendertyp, etc.) können in einer Locale-Bezeichner-Zeichenkette kodiert werden. Um die Arbeit mit diesen Locale-Bezeichnern zu erleichtern, wurde das `Locale`-Objekt in JavaScript eingeführt. Der Aufruf der `toString`-Methode auf einem Locale-Objekt gibt die Bezeichner-Zeichenkette für diese besondere Locale zurück. Die `toString`-Methode ermöglicht es, `Locale`-Instanzen als Argument für bestehende `Intl`-Konstruktoren zu verwenden, in JSON zu serialisieren oder in jedem anderen Kontext, in dem eine genaue Zeichenkettenrepräsentation nützlich ist.

## Beispiele

### Verwendung von toString

```js
const myLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(myLocale.baseName); // Ausgabe "fr-Latn-FR"
console.log(myLocale.toString()); // Ausgabe "fr-Latn-FR-u-ca-gregory-hc-h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "baseName")}}
