---
title: Intl.Locale.prototype.minimize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`minimize()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen versucht,
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
[Remove Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)-Algorithmus zurückgibt,
der auf _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ ausgeführt wurde.

## Beschreibung

Diese Methode führt das Gegenteil von {{jsxref("Intl/Locale/maximize", "maximize()")}} durch,
indem sie alle Sprach-, Skript- oder Regionsuntertags aus dem Sprachbezeichner der Locale entfernt
(im Wesentlichen den Inhalt von `baseName`). Dies ist nützlich, wenn überflüssige Untertags im
Sprachbezeichner vorhanden sind; beispielsweise kann "en-Latn" zu "en" vereinfacht werden,
da "Latn" das einzige Skript ist, das zur Darstellung von Englisch verwendet wird.
`minimize()` betrifft nur die Hauptuntertags, die den
[Sprachbezeichner](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions) bilden:
Sprach-, Skript- und Regionsuntertags. Andere Untertags nach dem "-u"
im Locale-Bezeichner werden als Erweiterungsuntertags bezeichnet und sind von der
`minimize()`-Methode nicht betroffen. Beispiele für diese Untertags sind
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
