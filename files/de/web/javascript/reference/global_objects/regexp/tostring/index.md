---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("RegExp")}}-Instanzen gibt einen Zeichenfolgenwert zurück, der diesen regulären Ausdruck darstellt.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.toString()", "taller")}}

```js interactive-example
console.log(new RegExp("a+b+c"));
// Expected output: /a+b+c/

console.log(new RegExp("a+b+c").toString());
// Expected output: "/a+b+c/"

console.log(new RegExp("bar", "g").toString());
// Expected output: "/bar/g"

console.log(new RegExp("\n", "g").toString());
// Expected output (if your browser supports escaping): "/\n/g"

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

Eine Zeichenfolge, die das gegebene Objekt darstellt.

## Beschreibung

Das {{jsxref("RegExp")}}-Objekt überschreibt die `toString()`-Methode des {{jsxref("Object")}}-Objekts; es erbt nicht {{jsxref("Object.prototype.toString()")}}. Für {{jsxref("RegExp")}}-Objekte gibt die `toString()`-Methode eine Zeichenfolgen-Darstellung des regulären Ausdrucks zurück.

In der Praxis liest sie die [`source`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)- und [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaften des regulären Ausdrucks aus und gibt eine Zeichenfolge in der Form `/source/flags` zurück. Der Rückgabewert von `toString()` ist garantiert ein analysierbares RegEx-Literal, obwohl es möglicherweise nicht exakt dem ursprünglich angegebenen Text des regulären Ausdrucks entspricht (zum Beispiel können die Flags umgeordnet sein).

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den Zeichenfolgenwert eines {{jsxref("RegExp")}}-Objekts:

```js
const myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // '/a+b+c/'

const foo = new RegExp("bar", "g");
console.log(foo.toString()); // '/bar/g'
```

### Leere reguläre Ausdrücke und Escaping

Da `toString()` auf die [`source`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)-Eigenschaft zugreift, gibt ein leerer regulärer Ausdruck die Zeichenfolge `"/(?:)/"` zurück, und Zeilenabschlusszeichen wie `\n` werden maskiert. Dadurch ist der zurückgegebene Wert immer ein gültiges RegEx-Literal.

```js
new RegExp().toString(); // "/(?:)/"

new RegExp("\n").toString() === "/\\n/"; // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
