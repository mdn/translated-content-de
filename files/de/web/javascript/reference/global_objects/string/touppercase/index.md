---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`toUpperCase()`**-Methode von {{jsxref("String")}}-Werten gibt diesen String in Großbuchstaben zurück.

{{EmbedInteractiveExample("pages/js/string-touppercase.html", "shorter")}}

## Syntax

```js-nolint
toUpperCase()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Großbuchstaben darstellt.

## Beschreibung

Die `toUpperCase()`-Methode gibt den Wert des Strings in Großbuchstaben zurück. Diese Methode beeinflusst nicht den Wert des Strings selbst, da JavaScript-Strings unveränderlich sind.

## Beispiele

### Grundlegende Nutzung

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### Umwandlung von nicht-String-`this`-Werten in Strings

Diese Methode wandelt jeden nicht-String-Wert in einen String um, wenn Sie ihr `this` auf einen Wert setzen, der kein String ist:

```js
const a = String.prototype.toUpperCase.call({
  toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
