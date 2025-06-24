---
title: Object() Konstruktor
short-title: Object()
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
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

> [!NOTE] > `Object()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch manchmal mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value` {{optional_inline}}
  - : Ein beliebiger Wert.

### Rückgabewert

Wenn der `Object()`-Konstruktor selbst aufgerufen oder konstruiert wird, ist sein Rückgabewert ein Objekt:

- Wenn der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist, wird ein leeres Objekt erstellt und zurückgegeben.
- Wenn der Wert bereits ein Objekt ist, wird der Wert zurückgegeben.
- Andernfalls wird ein Objekt eines Typs zurückgegeben, das dem gegebenen Wert entspricht. Zum Beispiel führt die Übergabe eines primitiven {{jsxref("BigInt")}} zu einem `BigInt`-Wrapper-Objekt.

Wenn `Object()` konstruiert wird, aber [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) nicht der `Object`-Konstruktor selbst ist, ist das Verhalten etwas anders — es initialisiert ein neues Objekt mit `new.target.prototype` als Prototyp. Jeder Argumentwert wird ignoriert. Dies kann zum Beispiel passieren, wenn `Object()` implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) im Konstruktor einer Klasse aufgerufen wird, die [von `Object` erbt](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_object). In diesem Fall, selbst wenn Sie eine Zahl an `super()` übergeben, wird der `this` Wert im Inneren des Konstruktors keine {{jsxref("Number")}}-Instanz.

## Beispiele

### Ein neues Objekt erstellen

```js
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
```

### Verwendung von Object mit undefined und null Typen

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

### Wrapper-Objekte für BigInt und Symbol erhalten

Die Konstruktoren {{jsxref("BigInt/BigInt", "BigInt()")}} und {{jsxref("Symbol/Symbol", "Symbol()")}} werfen einen Fehler, wenn sie mit `new` aufgerufen werden, um den häufigen Fehler zu verhindern, ein Wrapper-Objekt anstelle des primitiven Wertes zu erstellen. Der einzige Weg, um ein Wrapper-Objekt für diese Typen zu erstellen, ist, `Object()` mit ihnen aufzurufen:

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

- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
