---
title: Intl.PluralRules.prototype.selectRange()
short-title: selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`selectRange()`**-Methode von {{jsxref("Intl.PluralRules")}} Instanzen empfängt zwei Werte und gibt einen String zurück, der angibt, welche Pluralregel für die ortsabhängige Formatierung des angegebenen Bereichs verwendet werden soll.

## Syntax

```js-nolint
selectRange(startRange, endRange)
```

### Parameter

- `startRange`
  - : Eine Zahl, die den Beginn des Bereichs darstellt.
- `endRange`
  - : Eine Zahl, die das Ende des Bereichs darstellt.

### Rückgabewert

Ein String, der die Pluralisierungskategorie des angegebenen Bereichs repräsentiert.
Dies kann eine der Kategorien `zero`, `one`, `two`, `few`, `many` oder `other` sein, die für die Lokalisierung relevant sind, die in den [LDML Language Plural Rules](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html) festgelegt ist.

## Beschreibung

Diese Funktion wählt eine Pluralisierungskategorie entsprechend der lokalen und Formatierungsoptionen eines {{jsxref("Intl.PluralRules")}} Objekts aus.

Konzeptionell ist das Verhalten das gleiche wie das Erhalten von Pluralregeln für eine einzelne kardinale oder ordinale Zahl.
Sprachen haben eine oder mehrere Formen zur Beschreibung von Bereichen, und diese Methode gibt die passende Form für die angegebene Lokalisierung und Formatierungsoptionen zurück.
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
