---
title: Intl.Locale.prototype.maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`maximize()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen ermittelt die wahrscheinlichsten Werte für die Sprache, das Skript und die Region dieser Locale basierend auf vorhandenen Werten.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-maximize.html")}}

## Syntax

```js-nolint
maximize()
```

### Parameter

Keine.

### Rückgabewert

Eine {{jsxref("Intl.Locale")}}-Instanz, deren `baseName`-Eigenschaft das Ergebnis des [Add Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)-Algorithmus zurückgibt, der gegen _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ ausgeführt wurde.

## Beschreibung

Manchmal ist es nützlich, die wahrscheinlichsten Locale-Identifikatorsubtags basierend auf einer unvollständigen Sprach-ID zu identifizieren. Der Add Likely Subtags-Algorithmus bietet uns diese Funktionalität. Beispielsweise würde der Algorithmus für die Sprach-ID "en" "en-Latn-US" zurückgeben, da Englisch nur in lateinischer Schrift geschrieben werden kann und höchstwahrscheinlich in den Vereinigten Staaten verwendet wird, da dies das größte englischsprachige Land der Welt ist. Diese Funktionalität wird JavaScript-Programmierern über die `maximize()`-Methode zur Verfügung gestellt. `maximize()` wirkt sich nur auf die Haupt-Subtags aus, die den [language identifier](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions) umfassen: Sprache-, Skript- und Regions-Subtags. Andere Subtags nach dem "-u" im Locale-Identifikator werden Erweiterungs-Subtags genannt und werden nicht von der `maximize()`-Methode beeinflusst. Beispiele für diese Subtags sind {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}, {{jsxref("Intl/Locale/calendar", "calendar")}} und {{jsxref("Intl/Locale/numeric", "numeric")}}.

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
- [Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) in der Unicode locale data markup language Spezifikation
