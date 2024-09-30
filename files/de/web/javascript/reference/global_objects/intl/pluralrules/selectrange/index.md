---
title: Intl.PluralRules.prototype.selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die Methode **`selectRange()`** von {{jsxref("Intl.PluralRules")}}-Instanzen erhält zwei Werte und gibt einen String zurück, der angibt, welche Pluralregel für die locale-bewusste Formatierung des angegebenen Bereichs verwendet werden soll.

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

Ein String, der die Pluralisierungskategorie des angegebenen Bereichs darstellt.
Dies kann eine der folgenden Kategorien sein: `zero`, `one`, `two`, `few`, `many` oder `other`, die für die Locale relevant sind, deren Lokalisierung in den [LDML Language Plural Rules](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html) angegeben ist.

## Beschreibung

Diese Funktion wählt eine Pluralisierungskategorie gemäß der Locale- und Formatierungsoptionen eines {{jsxref("Intl.PluralRules")}}-Objekts aus.

Konzeptionell ist das Verhalten dasselbe wie das Abrufen von Pluralregeln für eine einzelne kardinale oder ordinale Zahl.
Sprachen haben eine oder mehrere Formen zur Beschreibung von Bereichen, und diese Methode liefert die passende Form für die angegebene Locale und Formatierungsoptionen.
Im Englischen gibt es nur eine Pluralform, wie zum Beispiel "1–10 apples", und die Methode gibt `other` zurück.
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
