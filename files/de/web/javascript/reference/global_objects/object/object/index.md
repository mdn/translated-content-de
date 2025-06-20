---
title: Object() Konstruktor
short-title: Object()
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Der **`Object()`** Konstruktor wandelt die Eingabe in ein Objekt um. Sein Verhalten hängt vom Typ der Eingabe ab.

## Syntax

```js-nolint
new Object()
new Object(value)

Object()
Object(value)
```

> **Note:** `Object()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch manchmal mit unterschiedlichen Auswirkungen. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value` {{optional_inline}}
  - : Jeglicher Wert.

### Rückgabewert

Wenn der `Object()` Konstruktor selbst aufgerufen oder konstruiert wird, ist sein Rückgabewert ein Objekt:

- Wenn der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist, wird ein leeres Objekt erstellt und zurückgegeben.
- Wenn der Wert bereits ein Objekt ist, wird der Wert zurückgegeben.
- Andernfalls wird ein Objekt eines Typs zurückgegeben, das dem angegebenen Wert entspricht. Beispielsweise wird bei Angabe eines {{jsxref("BigInt")}} Primitiv ein `BigInt` Wrapper-Objekt zurückgegeben.

Wenn `Object()` konstruiert wird, aber [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) nicht der `Object` Konstruktor selbst ist, ist das Verhalten leicht anders — es initialisiert ein neues Objekt mit `new.target.prototype` als Prototyp. Jeder Argumentwert wird ignoriert. Dies kann beispielsweise passieren, wenn `Object()` implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) im Konstruktor einer Klasse aufgerufen wird, die [von `Object` erbt](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_object). In diesem Fall, selbst wenn Sie eine Zahl an `super()` übergeben, wird der `this` Wert im Konstruktor nicht zu einer {{jsxref("Number")}} Instanz.

## Beispiele

### Ein neues Objekt erstellen

```js
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
```

### Verwendung von Object mit undefined und null Typen

Die folgenden Beispiele speichern ein leeres `Object` Objekt in `o`:

```js
const o = new Object();
```

```js
const o = new Object(undefined);
```

```js
const o = new Object(null);
```

### Wrapper-Objekte für BigInt und Symbol erhalten

Die {{jsxref("BigInt/BigInt", "BigInt()")}} und {{jsxref("Symbol/Symbol", "Symbol()")}} Konstruktoren werfen einen Fehler, wenn sie mit `new` aufgerufen werden, um den häufigen Fehler zu verhindern, ein Wrapper-Objekt anstelle des primitiven Wertes zu erstellen. Der einzige Weg, ein Wrapper-Objekt für diese Typen zu erstellen, besteht darin, `Object()` mit ihnen aufzurufen:

```js
const numberObj = new Number(1);
console.log(typeof numberObj); // "object"

const bigintObj = Object(1n);
console.log(typeof bigintObj); // "object"

const symbolObj = Object(Symbol("foo"));
console.log(typeof symbolObj); // "object"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
