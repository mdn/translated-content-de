---
title: Intl.Locale.prototype.maximize()
short-title: maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`maximize()`** Methode von {{jsxref("Intl.Locale")}} Instanzen ermittelt die
wahrscheinlichsten Werte für die Sprache, die Schrift und die Region dieser Locale basierend
auf bestehenden Werten.

{{InteractiveExample("JavaScript Demo: Intl.Locale.prototype.maximize()")}}

```js interactive-example
const english = new Intl.Locale("en");
const korean = new Intl.Locale("ko");
const arabic = new Intl.Locale("ar");

console.log(english.maximize().baseName);
// Expected output: "en-Latn-US"

console.log(korean.maximize().baseName);
// Expected output: "ko-Kore-KR"

console.log(arabic.maximize().baseName);
// Expected output: "ar-Arab-EG"
```

## Syntax

```js-nolint
maximize()
```

### Parameter

Keine.

### Rückgabewert

Eine {{jsxref("Intl.Locale")}} Instanz, deren `baseName`-Eigenschaft das Ergebnis des [Add Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)-Algorithmus zurückgibt, ausgeführt gegen _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_.

## Beschreibung

Manchmal ist es praktisch, die wahrscheinlichsten Locale-Sprachidentifier Subtags basierend auf einer unvollständigen Sprach-ID identifizieren zu können. Der Add Likely Subtags Algorithmus bietet diese Funktionalität. Zum Beispiel würde der Algorithmus bei der Sprach-ID "en" "en-Latn-US" zurückgeben, da Englisch nur in lateinischer Schrift geschrieben werden kann und höchstwahrscheinlich in den Vereinigten Staaten verwendet wird, da dies das größte englischsprachige Land der Welt ist. Diese Funktionalität steht JavaScript-Programmierern über die `maximize()`-Methode zur Verfügung. `maximize()` beeinflusst nur die Haupt-Subtags, die den [Sprachidentifier](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions) bilden: Sprach-, Schrift- und Regions-Subtags. Andere Subtags nach dem "-u" im Locale-Identifikator werden als Erweiterungs-Subtags bezeichnet und werden durch die `maximize()`-Methode nicht beeinflusst. Beispiele für solche Subtags sind {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}, {{jsxref("Intl/Locale/calendar", "calendar")}}, und {{jsxref("Intl/Locale/numeric", "numeric")}}.

## Beispiele

### Verwendung von maximize

```js
const myLocale = new Intl.Locale("fr", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(myLocale.baseName); // Prints "fr"
console.log(myLocale.toString()); // Prints "fr-u-ca-gregory-hc-h12"
const myLocMaximized = myLocale.maximize();

// Prints "fr-Latn-FR". The "Latn" and "FR" tags are added,
// since French is only written in the Latin script and is most likely to be spoken in France.
console.log(myLocMaximized.baseName);

// Prints "fr-Latn-FR-u-ca-gregory-hc-h12".
// Note that the extension tags (after "-u") remain unchanged.
console.log(myLocMaximized.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "baseName")}}
- [Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) in der Unicode Locale Data Markup Language Spezifikation
