---
title: Symbol.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toString()`**-Methode von {{jsxref("Symbol")}}-Werten gibt einen String zurück, der diesen Symbolwert repräsentiert.

{{InteractiveExample("JavaScript Demo: Symbol.prototype.toString()")}}

```js interactive-example
console.log(Symbol("desc").toString());
// Expected output: "Symbol(desc)"

console.log(Symbol.iterator.toString());
// Expected output: "Symbol(Symbol.iterator)

console.log(Symbol.for("foo").toString());
// Expected output: "Symbol(foo)"

// console.log(Symbol('foo') + 'bar');
// Expected output: Error: Can't convert symbol to string
```

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den angegebenen Symbolwert repräsentiert.

## Beschreibung

Das {{jsxref("Symbol")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für `Symbol`-Werte gibt die `toString`-Methode einen beschreibenden String in der Form `"Symbol(description)"` zurück, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Symbol`-Primitiv oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, sie in Symbolwerte umzuwandeln.

Da `Symbol` eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)-Methode hat, hat diese Methode immer Vorrang vor `toString()`, wenn ein `Symbol`-Objekt [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Da jedoch `Symbol.prototype[Symbol.toPrimitive]()` ein Symbol-Primitiv zurückgibt und Symbol-Primitiven einen {{jsxref("TypeError")}} auslösen, wenn sie implizit in einen String konvertiert werden, wird die `toString()`-Methode vom Sprachmodus nie implizit aufgerufen. Um ein Symbol in einen String umzuwandeln, müssen Sie entweder explizit seine `toString()`-Methode aufrufen oder die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String#using_string_to_stringify_a_symbol)-Funktion verwenden.

## Beispiele

### Verwendung von toString()

```js
Symbol("desc").toString(); // "Symbol(desc)"

// well-known symbols
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
```

### Impliziter Aufruf von toString()

Die einzige Möglichkeit, um JavaScript dazu zu bringen, `toString()` statt [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) auf einem Symbol-Wrapper-Objekt implizit aufzurufen, besteht darin, die `[Symbol.toPrimitive]()`-Methode zuerst zu [löschen](/de/docs/Web/JavaScript/Reference/Operators/delete).

> [!WARNING]
> Sie sollten dies in der Praxis nicht tun. Verändern Sie niemals eingebaute Objekte, es sei denn, Sie wissen genau, was Sie tun.

```js
delete Symbol.prototype[Symbol.toPrimitive];
console.log(`${Object(Symbol("foo"))}`); // "Symbol(foo)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
