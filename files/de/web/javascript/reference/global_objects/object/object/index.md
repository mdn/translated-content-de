---
title: Object() Konstruktor
short-title: Object()
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Object()`**-Konstruktor wandelt die Eingabe in ein Objekt um. Sein Verhalten hängt vom Typ der Eingabe ab.

## Syntax

```js-nolint
new Object()
new Object(value)

Object()
Object(value)
```

> [!NOTE]
> `Object()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, hat aber manchmal unterschiedliche Effekte. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value` {{optional_inline}}
  - : Ein beliebiger Wert.

### Rückgabewert

Wenn der `Object()`-Konstruktor selbst aufgerufen oder konstruiert wird, ist sein Rückgabewert ein Objekt:

- Wenn der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist, wird ein leeres Objekt erstellt und zurückgegeben.
- Wenn der Wert bereits ein Objekt ist, wird der Wert zurückgegeben.
- Andernfalls wird ein Objekt eines Typs zurückgegeben, der dem angegebenen Wert entspricht. Wenn z.B. ein {{jsxref("BigInt")}}-Primitive übergeben wird, wird ein `BigInt`-Wrapper-Objekt zurückgegeben.

Wenn `Object()` konstruiert wird, aber [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) nicht der `Object`-Konstruktor selbst ist, unterscheidet sich das Verhalten leicht — es initialisiert ein neues Objekt mit `new.target.prototype` als dessen Prototyp. Jeder Argumentwert wird ignoriert. Dies kann beispielsweise passieren, wenn `Object()` implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) im Konstruktor einer Klasse aufgerufen wird, die [von `Object` erbt](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_object). In diesem Fall wird selbst, wenn Sie eine Zahl an `super()` übergeben, der `this`-Wert innerhalb des Konstruktors keine {{jsxref("Number")}}-Instanz.

## Beispiele

### Erstellen eines neuen Objekts

```js
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
```

### Verwenden von Object mit undefined und null Typen

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

Die {{jsxref("BigInt/BigInt", "BigInt()")}}- und {{jsxref("Symbol/Symbol", "Symbol()")}}-Konstruktoren werfen einen Fehler, wenn sie mit `new` aufgerufen werden, um den häufigen Fehler zu verhindern, ein Wrapper-Objekt anstelle des primitiven Werts zu erstellen. Der einzige Weg, ein Wrapper-Objekt für diese Typen zu erstellen, ist es, `Object()` mit ihnen aufzurufen:

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

- [Objekt-Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
