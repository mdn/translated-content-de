---
title: RegExp.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
l10n:
  sourceCommit: 939067a53bb5bb3787f2d536b83df2252d4e838e
---

Die **`toString()`**-Methode von {{jsxref("RegExp")}}-Instanzen gibt einen String zurück, der diesen regulären Ausdruck repräsentiert.

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

Ein String, der das gegebene Objekt repräsentiert.

## Beschreibung

Das {{jsxref("RegExp")}}-Objekt überschreibt die `toString()`-Methode des {{jsxref("Object")}}-Objekts; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für {{jsxref("RegExp")}}-Objekte gibt die `toString()`-Methode eine String-Darstellung des regulären Ausdrucks zurück.

In der Praxis liest es die [`source`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)- und [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaften des Regex aus und gibt einen String in der Form `/source/flags` zurück. Der Rückgabewert von `toString()` ist garantiert ein parsierbares Regex-Literal, auch wenn es möglicherweise nicht exakt derselbe Text ist, der ursprünglich für das Regex angegeben wurde (zum Beispiel könnten die Flags neu geordnet sein).

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den String-Wert eines {{jsxref("RegExp")}}-Objekts:

```js
const myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // '/a+b+c/'

const foo = new RegExp("bar", "g");
console.log(foo.toString()); // '/bar/g'
```

### Leere reguläre Ausdrücke und Escaping

Da `toString()` auf die [`source`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)-Eigenschaft zugreift, gibt ein leerer regulärer Ausdruck den String `"/(?:)/"` zurück, und Zeilenumbrüche wie `\n` werden escaped. Dies macht den zurückgegebenen Wert immer zu einem gültigen Regex-Literal.

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
