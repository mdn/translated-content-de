---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`toUpperCase()`**-Methode von {{jsxref("String")}}-Werten gibt diesen String in Großbuchstaben konvertiert zurück.

{{EmbedInteractiveExample("pages/js/string-touppercase.html", "shorter")}}

## Syntax

```js-nolint
toUpperCase()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Großbuchstaben konvertiert darstellt.

## Beschreibung

Die `toUpperCase()`-Methode gibt den Wert des Strings in Großbuchstaben konvertiert zurück. Diese Methode beeinflusst den Wert des Strings selbst nicht, da JavaScript-Strings unveränderlich sind.

## Beispiele

### Grundlegende Nutzung

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### Konvertierung von Nicht-String-"this"-Werten zu Strings

Diese Methode wird jeden Nicht-String-Wert in einen String konvertieren, wenn Sie dessen `this` auf einen Wert setzen, der kein String ist:

```js
const a = String.prototype.toUpperCase.call({
  toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

// gibt 'ABCDEF TRUE' aus.
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
