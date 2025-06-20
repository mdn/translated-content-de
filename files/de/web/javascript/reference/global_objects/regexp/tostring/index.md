---
title: RegExp.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("RegExp")}}-Instanzen gibt einen String zurück, der diesen regulären Ausdruck darstellt.

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

Ein String, der das gegebene Objekt darstellt.

## Beschreibung

Das {{jsxref("RegExp")}}-Objekt überschreibt die `toString()`-Methode des {{jsxref("Object")}}-Objekts; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für {{jsxref("RegExp")}}-Objekte gibt die `toString()`-Methode eine String-Repräsentation des regulären Ausdrucks zurück.

In der Praxis liest es die [`source`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)- und [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaften des regulären Ausdrucks aus und gibt einen String in der Form `/source/flags` zurück. Der Rückgabewert von `toString()` ist garantiert ein parsefähiges Regex-Literal, obwohl es möglicherweise nicht exakt derselbe Text ist, der ursprünglich für das Regex angegeben wurde (zum Beispiel können die Flags umgeordnet sein).

## Beispiele

### Nutzung von toString()

Das folgende Beispiel zeigt den String-Wert eines {{jsxref("RegExp")}}-Objekts an:

```js
const myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // '/a+b+c/'

const foo = new RegExp("bar", "g");
console.log(foo.toString()); // '/bar/g'
```

### Leere reguläre Ausdrücke und Escaping

Da `toString()` auf die [`source`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)-Eigenschaft zugreift, gibt ein leerer regulärer Ausdruck den String `"/(?:)/"` zurück, und Zeilentrennzeichen wie `\n` werden escaped. Dadurch ist der zurückgegebene Wert immer ein gültiges Regex-Literal.

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
