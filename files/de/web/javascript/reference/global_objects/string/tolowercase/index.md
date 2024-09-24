---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`toLowerCase()`** Methode von {{jsxref("String")}} Werten gibt diesen String in Kleinbuchstaben konvertiert zurück.

{{EmbedInteractiveExample("pages/js/string-tolowercase.html", "shorter")}}

## Syntax

```js-nolint
toLowerCase()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Kleinbuchstaben konvertiert darstellt.

## Beschreibung

Die `toLowerCase()` Methode gibt den Wert des Strings in Kleinbuchstaben konvertiert zurück. `toLowerCase()` beeinflusst nicht den Wert des Strings `str` selbst.

## Beispiele

### Verwendung von `toLowerCase()`

```js
console.log("ALPHABET".toLowerCase()); // 'alphabet'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
