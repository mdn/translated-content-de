---
title: RegExp.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toString()`** von {{jsxref("RegExp")}}-Instanzen gibt einen String zurück, der diesen regulären Ausdruck repräsentiert.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.toString()", "taller")}}

```js interactive-example
console.log(new RegExp("a+b+c"));
// Expected output: /a+b+c/

console.log(new RegExp("a+b+c").toString());
// Expected output: "/a+b+c/"

console.log(new RegExp("bar", "g").toString());
// Expected output: "/bar/g"

console.log(new RegExp("\n", "g").toString());
// Expected output: "/\n/g"

console.log(new RegExp("\\n", "g").toString());
// Expected output: "/\n/g"
```

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Objekt repräsentiert.

## Beschreibung

Das {{jsxref("RegExp")}}-Objekt überschreibt die Methode `toString()` des {{jsxref("Object")}}-Objekts; es erbt {{jsxref("Object.prototype.toString()")}} nicht. Für {{jsxref("RegExp")}}-Objekte gibt die Methode `toString()` eine String-Darstellung des regulären Ausdrucks zurück.

In der Praxis liest sie die Eigenschaften [`source`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) und [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) des regulären Ausdrucks und gibt einen String der Form `/source/flags` zurück. Der Rückgabewert von `toString()` ist garantiert ein gültiges Literal für einen regulären Ausdruck, auch wenn er möglicherweise nicht genau dem ursprünglich angegebenen Text entspricht (beispielsweise können die Flags anders angeordnet sein).

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den String-Wert eines {{jsxref("RegExp")}}-Objekts:

```js
const myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // '/a+b+c/'

const foo = new RegExp("bar", "g");
console.log(foo.toString()); // '/bar/g'
```

### Leere reguläre Ausdrücke und Escape-Sequenzen

Da `toString()` auf die Eigenschaft [`source`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) zugreift, gibt ein leerer regulärer Ausdruck den String `"/(?:)/"` zurück. Zeilenabschlusszeichen wie `\n` werden mit Escape-Zeichen versehen. Dadurch ist der Rückgabewert immer ein gültiges Literal für einen regulären Ausdruck.

```js
new RegExp().toString(); // "/(?:)/"

new RegExp("\n").toString() === "/\\n/"; // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für das moderne Verhalten von `RegExp.prototype.toString` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("Object.prototype.toString()")}}
