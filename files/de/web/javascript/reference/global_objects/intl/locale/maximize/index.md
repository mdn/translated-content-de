---
title: Intl.Locale.prototype.maximize()
short-title: maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`maximize()`**-Methode von {{jsxref("Intl.Locale")}} Instanzen erhält die wahrscheinlichsten Werte für die Sprache, die Schrift und die Region dieser Locale basierend auf den vorhandenen Werten.

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

Eine {{jsxref("Intl.Locale")}} Instanz, deren `baseName`-Eigenschaft das Ergebnis des [Add Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) Algorithmus zurückgibt, der auf _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ ausgeführt wird.

## Beschreibung

Manchmal ist es praktisch, die wahrscheinlichsten Subtags des Sprachidentifikators einer Locale basierend auf einer unvollständigen Sprach-ID zu identifizieren. Der Add Likely Subtags-Algorithmus bietet uns diese Funktionalität. Zum Beispiel würde der Algorithmus bei der Sprach-ID "en" "en-Latn-US" zurückgeben, da Englisch nur in lateinischer Schrift geschrieben werden kann und höchstwahrscheinlich in den Vereinigten Staaten verwendet wird, da es das größte englischsprachige Land der Welt ist. Diese Funktionalität wird JavaScript-Programmierern über die `maximize()`-Methode bereitgestellt. `maximize()` beeinflusst nur die Haupt-Subtags, die den [Sprachidentifikator](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions) ausmachen: Sprach-, Schrift- und Regionssubtags. Andere Subtags nach dem "-u" im Locale-Identifikator werden als Erweiterungs-Subtags bezeichnet und werden von der `maximize()`-Methode nicht beeinflusst. Beispiele für diese Subtags sind {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}, {{jsxref("Intl/Locale/calendar", "calendar")}} und {{jsxref("Intl/Locale/numeric", "numeric")}}.

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
