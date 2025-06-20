---
title: Intl.Locale.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Intl.Locale")}} Instanzen gibt den vollständigen [Locale-Identifier-String](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier) dieser Locale zurück.

{{InteractiveExample("JavaScript Demo: Intl.Locale.prototype.toString()", "taller")}}

```js interactive-example
const french = new Intl.Locale("fr-Latn-FR", {
  calendar: "gregory",
  hourCycle: "h12",
});
const korean = new Intl.Locale("ko-Kore-KR", {
  numeric: true,
  caseFirst: "upper",
});

console.log(french.toString());
// Expected output: "fr-Latn-FR-u-ca-gregory-hc-h12"

console.log(korean.toString());
// Expected output: "ko-Kore-KR-u-kf-upper-kn"
```

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Der Unicode Locale-Identifier-String der _locale_.

## Beschreibung

Das `Locale`-Objekt ist eine JavaScript-Repräsentation eines
Unicode-Locale-Identifier-Konzepts. Informationen über ein bestimmtes Locale (Sprache, Schrift,
Kalendertyp, etc.) können in einem Locale-Identifier-String kodiert werden. Um die Arbeit
mit diesen Locale-Identifikatoren zu erleichtern, wurde das `Locale`-Objekt
in JavaScript eingeführt. Ein Aufruf der Methode `toString` auf einem Locale-Objekt
gibt den Identifier-String für dieses spezielle Locale zurück. Die
`toString`-Methode ermöglicht es, `Locale`-Instanzen als Argumente für bestehende `Intl`-Konstruktoren bereitzustellen, in
JSON zu serialisieren oder in jedem anderen Kontext zu nutzen, in dem eine exakte String-Repräsentation nützlich ist.

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
