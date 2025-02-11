---
title: Intl.Locale.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt die vollständige [Locale-Identifier-Zeichenkette](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier) dieses Locales zurück.

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

Die Unicode-Locale-Identifier-Zeichenkette des _Locale_.

## Beschreibung

Das `Locale`-Objekt ist eine JavaScript-Darstellung des Konzepts eines Unicode-Locale-Identifiers. Informationen über ein bestimmtes Locale (Sprache, Schrift, Kalenderart usw.) können in einer Locale-Identifier-Zeichenkette kodiert werden. Um die Arbeit mit diesen Locale-Identifiern zu erleichtern, wurde das `Locale`-Objekt in JavaScript eingeführt. Der Aufruf der `toString`-Methode eines Locale-Objekts gibt die Identifier-Zeichenkette für dieses konkrete Locale zurück. Die `toString`-Methode ermöglicht es, `Locale`-Instanzen als Argumente für bestehende `Intl`-Konstruktoren zu verwenden, in JSON zu serialisieren oder in jedem anderen Kontext einzusetzen, in dem eine exakte Zeichenkettenrepräsentation nützlich ist.

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
