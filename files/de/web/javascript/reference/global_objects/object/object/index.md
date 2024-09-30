---
title: Object() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
l10n:
  sourceCommit: 688f606b78fb7e375e5680cc1ae49c5b9d0bc0ea
---

{{JSRef}}

Der **`Object()`**-Konstruktor wandelt die Eingabe in ein Objekt um. Sein Verhalten hängt vom Typ der Eingabe ab.

## Syntax

```js-nolint
new Object()
new Object(value)

Object()
Object(value)
```

> **Note:** `Object()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, manchmal mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value` {{optional_inline}}
  - : Jeder Wert.

### Rückgabewert

Wenn der `Object()`-Konstruktor selbst aufgerufen oder konstruiert wird, ist sein Rückgabewert ein Objekt:

- Wenn der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist, wird ein leeres Objekt erstellt und zurückgegeben.
- Wenn der Wert bereits ein Objekt ist, wird der Wert zurückgegeben.
- Andernfalls wird ein Objekt eines Typs zurückgegeben, das dem gegebenen Wert entspricht. Beispielsweise führt die Übergabe eines {{jsxref("BigInt")}}-Primitives zu einem `BigInt`-Wrapper-Objekt.

Wenn `Object()` konstruiert wird, aber [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) nicht der `Object`-Konstruktor selbst ist, ist das Verhalten etwas anders — es initialisiert ein neues Objekt mit `new.target.prototype` als dessen Prototyp. Jeder Argumentwert wird ignoriert. Dies kann passieren, wenn `Object()` z. B. implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) im Konstruktor einer Klasse aufgerufen wird, die [von `Object` erbt](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_object). In diesem Fall wird der `this`-Wert im Konstruktor auch dann nicht zu einer {{jsxref("Number")}}-Instanz, wenn Sie `super()` eine Zahl übergeben.

## Beispiele

### Erstellen eines neuen Objekts

```js
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
```

### Verwendung von Object bei undefined und null Typen

Die folgenden Beispiele speichern ein leeres `Object`-Objekt in `o`:

```js
const o = new Object();
```

```js
const o = new Object(undefined);
```

```js
const o = new Object(null);
```

### Erhalten von Wrapper-Objekten für BigInt und Symbol

Die {{jsxref("BigInt/BigInt", "BigInt()")}}- und {{jsxref("Symbol/Symbol", "Symbol()")}}-Konstruktoren werfen einen Fehler, wenn sie mit `new` aufgerufen werden, um den häufigen Fehler zu vermeiden, ein Wrapper-Objekt anstelle des primitiven Wertes zu erstellen. Der einzige Weg, ein Wrapper-Objekt für diese Typen zu erstellen, ist, `Object()` mit ihnen aufzurufen:

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
