---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("RegExp")}}-Instanzen gibt einen String zurück, der diesen Regulären Ausdruck repräsentiert.

{{EmbedInteractiveExample("pages/js/regexp-prototype-tostring.html", "taller")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das gegebene Objekt repräsentiert.

## Beschreibung

Das {{jsxref("RegExp")}}-Objekt überschreibt die `toString()`-Methode des {{jsxref("Object")}}-Objekts; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für {{jsxref("RegExp")}}-Objekte gibt die `toString()`-Methode eine String-Darstellung des Regulären Ausdrucks zurück.

In der Praxis liest sie die [`source`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) und [`flags`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags)-Eigenschaften des Regulären Ausdrucks aus und gibt einen String in der Form `/source/flags` zurück. Der Rückgabewert von `toString()` ist garantiert ein analysierbarer Regex-Literal, obwohl es möglicherweise nicht genau derselbe Text ist wie der ursprünglich für den Regulären Ausdruck angegebene (beispielsweise können die Flags neu angeordnet sein).

## Beispiele

### Verwendung von toString()

Das folgende Beispiel zeigt den String-Wert eines {{jsxref("RegExp")}}-Objekts:

```js
const myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // '/a+b+c/'

const foo = new RegExp("bar", "g");
console.log(foo.toString()); // '/bar/g'
```

### Leere Reguläre Ausdrücke und Escaping

Da `toString()` auf die [`source`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source)-Eigenschaft zugreift, gibt ein leerer Regulärer Ausdruck den String `"/(?:)/"` zurück, und Zeilenendungen wie `\n` werden maskiert. Dies stellt sicher, dass der zurückgegebene Wert immer ein gültiger Regex-Literal ist.

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
