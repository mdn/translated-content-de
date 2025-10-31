---
title: Intl.Locale.prototype.minimize()
short-title: minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`minimize()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen versucht, Informationen über diese Locale zu entfernen, die durch einen Aufruf von {{jsxref("Intl/Locale/maximize", "maximize()")}} hinzugefügt würden.

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

Eine {{jsxref("Intl.Locale")}}-Instanz deren `baseName`-Eigenschaft das Ergebnis des [Remove Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)-Algorithmus zurückgibt, der auf _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ ausgeführt wird.

## Beschreibung

Diese Methode führt das Gegenteil von {{jsxref("Intl/Locale/maximize", "maximize()")}} aus und entfernt alle Sprach-, Skript- oder Regions-Subtags aus dem Locale-Sprach-Identifikator (im Wesentlichen den Inhalt von `baseName`). Dies ist nützlich, wenn im Sprach-Identifikator überflüssige Subtags vorhanden sind; zum Beispiel kann "en-Latn" zu "en" vereinfacht werden, da "Latn" das einzige Skript ist, das verwendet wird, um Englisch zu schreiben. `minimize()` wirkt sich nur auf die Haupt-Subtags aus, die den [language identifier](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions) bilden: Sprach-, Skript- und Regions-Subtags. Andere Subtags nach dem "-u" im Locale-Identifikator werden als Erweiterungs-Subtags bezeichnet und werden von der `minimize()`-Methode nicht beeinflusst. Beispiele für diese Subtags sind {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}, {{jsxref("Intl/Locale/calendar", "calendar")}} und {{jsxref("Intl/Locale/numeric", "numeric")}}.

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
