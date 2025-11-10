---
title: Intl.PluralRules.prototype.selectRange()
short-title: selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`selectRange()`** von {{jsxref("Intl.PluralRules")}} Instanzen nimmt zwei Werte entgegen und gibt einen String zurück, der angibt, welche Pluralregel für die lokalisierungsbewusste Formatierung des angegebenen Bereichs verwendet werden soll.

## Syntax

```js-nolint
selectRange(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine Zahl, die den Anfang des Bereichs darstellt.
- `endRange`
  - : Eine Zahl, die das Ende des Bereichs darstellt.

### Rückgabewert

Ein String, der die Pluralisierungskategorie des angegebenen Bereichs repräsentiert.
Dies kann einer der Werte `zero`, `one`, `two`, `few`, `many` oder `other` sein, die für die Sprache, deren Lokalisierung in den [LDML Language Plural Rules](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html) spezifiziert ist, relevant sind.

## Beschreibung

Diese Funktion wählt eine Pluralisierungskategorie gemäß der Sprache und den Formatierungsoptionen eines {{jsxref("Intl.PluralRules")}} Objekts aus.

Konzeptionell ist das Verhalten das gleiche wie das Erhalten von Pluralregeln für eine einzelne Kardinal- oder Ordinalzahl.
Sprachen haben eine oder mehrere Formen zur Beschreibung von Bereichen, und diese Methode gibt die geeignete Form für die angegebene Sprache und Formatierungsoptionen zurück.
Im Englischen gibt es nur eine Pluralform, wie "1–10 apples", und die Methode wird `other` zurückgeben.
Andere Sprachen können viele Formen haben.

## Beispiele

### Verwendung von selectRange()

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
