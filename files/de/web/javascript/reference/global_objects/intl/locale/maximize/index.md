---
title: Intl.Locale.prototype.maximize()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`maximize()`**-Methode von Instanzen von {{jsxref("Intl.Locale")}} ermittelt die wahrscheinlichsten Werte für die Sprache, das Skript und die Region dieses Gebietsschemas basierend auf bestehenden Werten.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-maximize.html")}}

## Syntax

```js-nolint
maximize()
```

### Parameter

Keine.

### Rückgabewert

Eine Instanz von {{jsxref("Intl.Locale")}}, deren `baseName`-Eigenschaft das Ergebnis des [Add Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags)-Algorithmus zurückgibt, der gegen _{{jsxref("Intl/Locale/baseName", "locale.baseName")}}_ ausgeführt wird.

## Beschreibung

Manchmal ist es nützlich, die wahrscheinlichsten Subtags des Sprachbezeichners eines Gebietsschemas basierend auf einer unvollständigen Sprach-ID identifizieren zu können. Der Add Likely Subtags-Algorithmus bietet uns diese Funktionalität. Zum Beispiel würde der Algorithmus bei der Sprach-ID "en" "en-Latn-US" zurückgeben, da Englisch nur im lateinischen Skript geschrieben werden kann und höchstwahrscheinlich in den Vereinigten Staaten verwendet wird, da dies das größte englischsprachige Land der Welt ist. Diese Funktionalität wird JavaScript-Programmierern über die `maximize()`-Methode zur Verfügung gestellt. `maximize()` beeinflusst nur die Haupt-Subtags, die den [Sprachkennzeichner](https://www.unicode.org/reports/tr35/#Language_Locale_Field_Definitions) bilden: Sprache, Skript und Regions-Subtags. Andere Subtags nach dem "-u" im Gebietsschema-Bezeichner werden Erweiterungs-Subtags genannt und sind von der `maximize()`-Methode nicht betroffen. Beispiele für diese Subtags sind {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}, {{jsxref("Intl/Locale/calendar", "calendar")}} und {{jsxref("Intl/Locale/numeric", "numeric")}}.

## Beispiele

### Verwendung von maximize

```js
const myLocale = new Intl.Locale("fr", {
  hourCycle: "h12",
  calendar: "gregory",
});
console.log(myLocale.baseName); // Gibt "fr" aus
console.log(myLocale.toString()); // Gibt "fr-u-ca-gregory-hc-h12" aus
const myLocMaximized = myLocale.maximize();

// Gibt "fr-Latn-FR" aus. Die Tags "Latn" und "FR" werden hinzugefügt,
// da Französisch nur im lateinischen Skript geschrieben wird und höchstwahrscheinlich in Frankreich gesprochen wird.
console.log(myLocMaximized.baseName);

// Gibt "fr-Latn-FR-u-ca-gregory-hc-h12" aus.
// Beachten Sie, dass die Erweiterungs-Tags (nach "-u") unverändert bleiben.
console.log(myLocMaximized.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl/Locale/baseName", "baseName")}}
- [Likely Subtags](https://www.unicode.org/reports/tr35/#Likely_Subtags) in der Unicode-Locale-Datenmarkup-Sprachspezifikation
