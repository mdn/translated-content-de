---
title: Intl.PluralRules.prototype.selectRange()
short-title: selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
l10n:
  sourceCommit: 42d98fed2b93ad7f7efd643a2965c61e913dbe06
---

Die Methode **`selectRange()`** von {{jsxref("Intl.PluralRules")}}-Instanzen nimmt zwei Werte entgegen und gibt einen String zurück, der angibt, welche Pluralregel für die gebietsschemaabhängige Formatierung des angegebenen Bereichs verwendet werden soll.

## Syntax

```js-nolint
selectRange(startRange, endRange)
```

### Parameter

- `startRange`
  - : Ein {{jsxref("Number")}}, {{jsxref("BigInt")}} oder String, der den Anfang des Bereichs darstellt. Strings werden wie bei der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) geparst. Allerdings verwendet `selectRange()` den exakten Wert, den der String darstellt, und vermeidet so einen Präzisionsverlust bei der impliziten Konvertierung in eine Zahl.
- `endRange`
  - : Ein {{jsxref("Number")}}, {{jsxref("BigInt")}} oder String, der das Ende des Bereichs darstellt.

### Rückgabewert

Ein String, der die Pluralkategorie des angegebenen Bereichs darstellt. Dies kann `zero`, `one`, `two`, `few`, `many` oder `other` sein, je nachdem, welche Kategorien für das Gebietsschema gemäß den [LDML Language Plural Rules](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html) relevant sind.

## Beschreibung

Diese Funktion wählt eine Pluralkategorie anhand des Gebietsschemas und der Formatierungsoptionen eines {{jsxref("Intl.PluralRules")}}-Objekts aus.

Das Verhalten entspricht konzeptionell der Bestimmung einer Pluralregel für eine einzelne Kardinal- oder Ordinalzahl. Sprachen haben eine oder mehrere Formen, um Bereiche zu beschreiben. Diese Methode gibt die Form zurück, die zum angegebenen Gebietsschema und zu den Formatierungsoptionen passt. Im Englischen gibt es für Bereiche nur eine Pluralform, etwa „1–10 apples“, und die Methode gibt `other` zurück. Andere Sprachen können viele Formen haben.

## Beispiele

### selectRange() verwenden

```js
new Intl.PluralRules("sl").selectRange(102, 201); // 'few'

new Intl.PluralRules("pt").selectRange(102, 102); // 'other'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.PluralRules")}}
