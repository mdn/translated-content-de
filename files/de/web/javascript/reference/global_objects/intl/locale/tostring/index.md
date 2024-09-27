---
title: Intl.Locale.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
l10n:
  sourceCommit: c607c483fe079c61de5e32fba1a6cce61896e97d
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt den vollständigen [Lokalisierungsbezeichner-String](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier) dieser Locale zurück.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-tostring.html", "taller")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Der Unicode-Lokalisierungsbezeichner-String der _locale_.

## Beschreibung

Das `Locale`-Objekt ist eine JavaScript-Repräsentation eines Konzepts des Unicode-Lokalisierungsbezeichners. Informationen über eine bestimmte Locale (Sprache, Skript, Kalendertyp usw.) können in einem Lokalisierungsbezeichner-String kodiert werden. Um die Arbeit mit diesen Lokalisierungsbezeichnern zu erleichtern, wurde das `Locale`-Objekt in JavaScript eingeführt. Ein Aufruf der `toString`-Methode an einem Locale-Objekt wird den Bezeichner-String für diese bestimmte Locale zurückgeben. Die `toString`-Methode ermöglicht es, `Locale`-Instanzen als Argument für vorhandene `Intl`-Konstruktoren bereitzustellen, in JSON zu serialisieren oder in jedem anderen Kontext zu verwenden, in dem eine genaue String-Darstellung nützlich ist.

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
