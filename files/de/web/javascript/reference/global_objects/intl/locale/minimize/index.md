---
title: Intl.Locale.prototype.minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`minimize()`**-Methode von {{jsxref("Intl.Locale")}} Instanzen versucht,
Informationen über diese Locale zu entfernen, die durch den Aufruf von
{{jsxref("Intl/Locale/maximize", "maximize()")}} hinzugefügt würden.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-minimize.html")}}

## Syntax

```js-nolint
minimize()
```

### Parameter

Keine.

### Rückgabewert

Eine {{jsxref("Intl.Locale")}}-Instanz, deren `baseName`-Eigenschaft das Ergebnis des
[Remove Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)-Algorithmus
zurückgibt, angewendet auf _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_.

## Beschreibung

Diese Methode führt das Gegenteil von {{jsxref("Intl/Locale/maximize", "maximize()")}}
aus, indem sie alle Sprach-, Skript- oder Regions-Subtags aus dem Sprachbezeichner des Locale
(grundsätzlich der Inhalt von `baseName`) entfernt. Dies ist nützlich, wenn im Sprachbezeichner
überflüssige Subtags vorhanden sind; zum Beispiel kann "en-Latn" vereinfacht zu "en" werden,
da "Latn" das einzige Skript ist, das zur Schreibweise von Englisch verwendet wird.
`minimize()` betrifft nur die Hauptsubtags, die den
[Sprachbezeichner](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions)
bilden: Sprach-, Skript- und Regions-Subtags. Andere Subtags nach dem "-u" im Locale-Bezeichner
werden als Erweiterungs-Subtags bezeichnet und werden von der `minimize()`-Methode nicht beeinflusst.
Beispiele für diese Subtags sind
{{jsxref("Intl/Locale/hourCycle", "hourCycle")}},
{{jsxref("Intl/Locale/calendar", "calendar")}}, und
{{jsxref("Intl/Locale/numeric", "numeric")}}.

## Beispiele

### Verwendung von minimize

```js
const myLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(myLocale.baseName); // Gibt "fr-Latn-FR" aus
console.log(myLocale.toString()); // Gibt "fr-Latn-FR-u-ca-gregory-hc-h12" aus

const myLocMinimized = myLocale.minimize();

// Gibt "fr" aus, da Französisch nur im lateinischen Skript geschrieben wird
// und höchstwahrscheinlich in Frankreich gesprochen wird.
console.log(myLocMinimized.baseName);

// Gibt "fr-u-ca-gregory-hc-h12" aus.
// Beachten Sie, dass die Erweiterungs-Tags (nach "-u") unverändert bleiben.
console.log(myLocMinimized.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "baseName")}}
