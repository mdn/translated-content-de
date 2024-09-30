---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`toUpperCase()`**-Methode von {{jsxref("String")}}-Werten gibt diese Zeichenkette in Großbuchstaben konvertiert zurück.

{{EmbedInteractiveExample("pages/js/string-touppercase.html", "shorter")}}

## Syntax

```js-nolint
toUpperCase()
```

### Parameter

Keine.

### Rückgabewert

Eine neue Zeichenkette, die die aufrufende Zeichenkette in Großbuchstaben konvertiert darstellt.

## Beschreibung

Die `toUpperCase()`-Methode gibt den Wert der Zeichenkette in
Großbuchstaben konvertiert zurück. Diese Methode beeinflusst nicht den Wert der Zeichenkette selbst, da JavaScript-Zeichenketten unveränderlich sind.

## Beispiele

### Grundlegende Verwendung

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### Umwandlung von nicht-Zeichenketten-`this`-Werten zu Zeichenketten

Diese Methode wird jeden nicht-Zeichenkettenwert in eine Zeichenkette umwandeln, wenn Sie ihr
`this` auf einen Wert setzen, der keine Zeichenkette ist:

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
