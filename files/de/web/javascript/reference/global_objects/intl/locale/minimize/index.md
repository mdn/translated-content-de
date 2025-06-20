---
title: Intl.Locale.prototype.minimize()
short-title: minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`minimize()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen versucht,
Informationen über diese Sprache zu entfernen, die durch Aufruf von
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

Eine {{jsxref("Intl.Locale")}}-Instanz, deren `baseName`-Eigenschaft das Ergebnis des [Remove Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)-Algorithmus
zurückgibt, der gegen _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ ausgeführt wurde.

## Beschreibung

Diese Methode führt die Umkehrung von {{jsxref("Intl/Locale/maximize", "maximize()")}} durch,
indem sie jegliche Sprach-, Skript- oder Regions-Subtags vom Sprachkennzeichen
(im Wesentlichen der Inhalt von `baseName`) entfernt. Dies ist nützlich, wenn es
überflüssige Subtags im Sprachkennzeichen gibt; zum Beispiel kann "en-Latn"
auf "en" vereinfacht werden, da "Latn" das einzige Skript ist, das zur
Schreibung von Englisch verwendet wird.
`minimize()` betrifft nur die Haupt-Subtags, aus denen der
[Sprachkennzeichner](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions) besteht:
Sprach-, Skript- und Regions-Subtags. Andere Subtags nach dem "-u"
im Sprachkennzeichner werden als Erweiterungs-Subtags bezeichnet und sind von der
`minimize()`-Methode nicht betroffen. Beispiele für diese Subtags sind
{{jsxref("Intl/Locale/hourCycle", "hourCycle")}}, {{jsxref("Intl/Locale/calendar", "calendar")}}, und {{jsxref("Intl/Locale/numeric", "numeric")}}.

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
