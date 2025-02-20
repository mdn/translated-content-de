---
title: Intl.Locale.prototype.maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`maximize()`** von {{jsxref("Intl.Locale")}}-Instanzen ermittelt die wahrscheinlichsten Werte für Sprache, Skript und Region dieser Locale basierend auf den bestehenden Werten.

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

Eine {{jsxref("Intl.Locale")}}-Instanz, deren `baseName`-Eigenschaft das Ergebnis des [Add Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)-Algorithmus zurückgibt, der auf _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ ausgeführt wurde.

## Beschreibung

Manchmal ist es praktisch, die wahrscheinlichsten Untertags eines Locale-Sprachidentifikators basierend auf einer unvollständigen Sprach-ID zu identifizieren. Der "Add Likely Subtags"-Algorithmus bietet uns diese Funktionalität. Zum Beispiel gibt der Algorithmus für die Sprach-ID "en" das Ergebnis "en-Latn-US" zurück, da Englisch nur im lateinischen Skript geschrieben werden kann und höchstwahrscheinlich in den Vereinigten Staaten verwendet wird, da dies das größte englischsprachige Land der Welt ist. Diese Funktionalität wird JavaScript-Programmierern über die Methode `maximize()` bereitgestellt. `maximize()` wirkt sich nur auf die Hauptuntertags aus, die den [Sprachidentifikator](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions) bilden: Sprach-, Skript- und Regionsuntertags. Andere Untertags nach dem "-u" im Locale-Identifikator, sogenannte Erweiterungstags, werden durch die Methode `maximize()` nicht beeinflusst. Beispiele für diese Untertags sind {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}, {{jsxref("Intl/Locale/calendar", "calendar")}} und {{jsxref("Intl/Locale/numeric", "numeric")}}.

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
- [Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) in der Unicode-Locale-Daten-Markup-Sprache-Spezifikation
