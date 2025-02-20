---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

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

Ein String, der den angegebenen Symbolwert darstellt.

## Beschreibung

Das {{jsxref("Symbol")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht {{jsxref("Object.prototype.toString()")}}. Für `Symbol`-Werte gibt die `toString`-Methode einen beschreibenden String in der Form `"Symbol(description)"` zurück, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Symbol`-Primitiv oder ein Wrapper-Objekt ist. Für andere `this`-Werte wird ein {{jsxref("TypeError")}} ausgelöst, ohne zu versuchen, sie zu Symbolwerten zu konvertieren.

Da `Symbol` über eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)-Methode verfügt, hat diese Methode stets Vorrang vor `toString()`, wenn ein `Symbol`-Objekt [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Allerdings gibt `Symbol.prototype[Symbol.toPrimitive]()` ein Symbol-Primitiv zurück, und Symbol-Primitiven lösen einen {{jsxref("TypeError")}} aus, wenn sie implizit in einen String umgewandelt werden. Deshalb wird die `toString()`-Methode niemals implizit von der Sprache aufgerufen. Um ein Symbol zu stringifizieren, müssen Sie explizit seine `toString()`-Methode verwenden oder die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String#using_string_to_stringify_a_symbol)-Funktion nutzen.

## Beispiele

### Verwendung von toString()

```js
Symbol("desc").toString(); // "Symbol(desc)"

// well-known symbols
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"

// global symbols
Symbol.for("foo").toString(); // "Symbol(foo)"
```

### Implizites Aufrufen von toString()

Die einzige Möglichkeit, JavaScript dazu zu bringen, `toString()` statt [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) für ein Symbol-Wrapper-Objekt implizit aufzurufen, besteht darin, die `[Symbol.toPrimitive]()`-Methode zuerst [zu löschen](/de/docs/Web/JavaScript/Reference/Operators/delete).

> [!WARNING]
> Dies sollten Sie in der Praxis nicht tun. Verändern Sie niemals integrierte Objekte, es sei denn, Sie wissen genau, was Sie tun.

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
