---
title: Intl.Locale.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt den vollständigen [Locale-Identifier-String](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier) dieser Locale zurück.

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

Der Unicode-Locale-Identifier-String der _Locale_.

## Beschreibung

Das `Locale`-Objekt ist eine JavaScript-Repräsentation eines Konzepts
von Unicode-Locale-Identifiern. Informationen über eine bestimmte Locale (Sprache, Skript,
Kalendertyp usw.) können in einem Locale-Identifier-String kodiert werden. Um die
Arbeit mit diesen Locale-Identifiern zu erleichtern, wurde das `Locale`-Objekt
in JavaScript eingeführt. Das Aufrufen der `toString`-Methode auf einem Locale-Objekt
gibt den Identifier-String für diese bestimmte Locale zurück. Die
`toString`-Methode ermöglicht es, `Locale`-Instanzen als Argument an bestehende
`Intl`-Konstruktoren zu übergeben, in JSON zu serialisieren oder in jedem anderen
Kontext zu verwenden, in dem eine exakte String-Repräsentation nützlich ist.

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
