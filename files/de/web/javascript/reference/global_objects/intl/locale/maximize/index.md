---
title: Intl.Locale.prototype.maximize()
short-title: maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`maximize()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen ermittelt die
wahrscheinlichsten Werte für Sprache, Schriftsystem und Region dieser Lokalisierung basierend
auf vorhandenen Werten.

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

Eine {{jsxref("Intl.Locale")}}-Instanz, deren `baseName`-Eigenschaft das Ergebnis des [Add Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)-Algorithmus zurückgibt, ausgeführt auf _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_.

## Beschreibung

Manchmal ist es nützlich, die wahrscheinlichsten Unterkennzeichen des Sprachbezeichners basierend auf einer unvollständigen Sprach-ID identifizieren zu können. Der Add Likely Subtags-Algorithmus bietet uns diese Funktionalität. Wenn zum Beispiel die Sprach-ID "en" gegeben ist, würde der Algorithmus "en-Latn-US" zurückgeben, da Englisch nur in lateinischer Schrift geschrieben werden kann und höchstwahrscheinlich in den Vereinigten Staaten verwendet wird, da es das größte englischsprachige Land der Welt ist. Diese Funktionalität wird JavaScript-Programmierern durch die `maximize()`-Methode bereitgestellt. `maximize()` wirkt sich nur auf die Hauptunterkennzeichen des [Sprachidentifikators](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions) aus: Sprach-, Schrift- und Regionsunterkennzeichen. Andere Unterkennzeichen nach dem "-u" im Lokalisierungsbezeichner werden als Erweiterungsunterkennzeichen bezeichnet und werden nicht von der `maximize()`-Methode beeinflusst. Beispiele für diese Unterkennzeichen sind {{jsxref("Intl/Locale/hourCycle", "hourCycle")}},
{{jsxref("Intl/Locale/calendar", "calendar")}} und {{jsxref("Intl/Locale/numeric", "numeric")}}.

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
- [Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) in der Unicode-Lokalisierungsdaten-Markup-Sprachspezifikation
