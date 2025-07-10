---
title: Intl.Locale.prototype.minimize()
short-title: minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`minimize()`** von {{jsxref("Intl.Locale")}}-Instanzen versucht,
Informationen über diese Locale zu entfernen, die durch den Aufruf von
{{jsxref("Intl/Locale/maximize", "maximize()")}} hinzugefügt werden würden.

{{InteractiveExample("JavaScript Demo: Intl.Locale.prototype.minimize()")}}

```js interactive-example
const english = new Intl.Locale("en-Latn-US");
const korean = new Intl.Locale("ko-Kore-KR");
const arabic = new Intl.Locale("ar-Arab-EG");

console.log(english.minimize().baseName);
// Expected output: "en"

console.log(korean.minimize().baseName);
// Expected output: "ko"

console.log(arabic.minimize().baseName);
// Expected output: "ar"
```

## Syntax

```js-nolint
minimize()
```

### Parameter

Keine.

### Rückgabewert

Eine Instanz von {{jsxref("Intl.Locale")}}, deren `baseName`-Eigenschaft
das Ergebnis des [Remove Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)-Algorithmus
zurückgibt, der bei _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ ausgeführt wird.

## Beschreibung

Diese Methode führt das Gegenteil von {{jsxref("Intl/Locale/maximize", "maximize()")}} aus,
indem sie alle Sprach-, Skript- oder Regionsuntertags aus dem Sprach-Identifikator des Locale
(im Wesentlichen den Inhalt von `baseName`) entfernt. Dies ist nützlich, wenn überflüssige
Untertags im Sprach-Identifikator vorhanden sind; zum Beispiel kann "en-Latn" auf "en"
vereinfacht werden, da "Latn" das einzige Skript ist, das zur Schreibung von Englisch verwendet wird.
`minimize()` betrifft nur die Hauptunterscheidungen, die den
[Sprach-Identifikator](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions) bilden:
Sprach-, Skript- und Regionsuntertags. Andere Untertags nach dem "-u"
im Locale-Identifikator werden als Erweiterungsuntertags bezeichnet und werden von der
`minimize()`-Methode nicht beeinflusst. Beispiele für solche Untertags sind
{{jsxref("Intl/Locale/hourCycle", "hourCycle")}}, {{jsxref("Intl/Locale/calendar", "calendar")}} und {{jsxref("Intl/Locale/numeric", "numeric")}}.

## Beispiele

### Verwendung von minimize

```js
const myLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(myLocale.baseName); // Prints "fr-Latn-FR"
console.log(myLocale.toString()); // Prints "fr-Latn-FR-u-ca-gregory-hc-h12"

const myLocMinimized = myLocale.minimize();

// Prints "fr", since French is only written in the Latin script
// and is most likely to be spoken in France.
console.log(myLocMinimized.baseName);

// Prints "fr-u-ca-gregory-hc-h12".
// Note that the extension tags (after "-u") remain unchanged.
console.log(myLocMinimized.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "baseName")}}
