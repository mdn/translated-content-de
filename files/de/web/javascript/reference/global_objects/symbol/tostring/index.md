---
title: Symbol.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Symbol")}}-Werten gibt eine Zeichenkette zurück, die diesen Symbolwert repräsentiert.

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

Eine Zeichenkette, die den angegebenen Symbolwert repräsentiert.

## Beschreibung

Das {{jsxref("Symbol")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht von
{{jsxref("Object.prototype.toString()")}}. Für `Symbol`-Werte gibt die `toString`-Methode eine beschreibende Zeichenkette in der Form `"Symbol(description)"` zurück, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.

Die Methode `toString()` erfordert, dass ihr `this`-Wert ein `Symbol`-Primärwert oder Wrapper-Objekt ist. Sie wirft einen {{jsxref("TypeError")}}, wenn andere `this`-Werte verwendet werden, ohne zu versuchen, diese in Symbolwerte zu konvertieren.

Da `Symbol` eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)-Methode hat, hat diese Methode immer Vorrang vor `toString()`, wenn ein `Symbol`-Objekt [in eine Zeichenkette umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Da jedoch `Symbol.prototype[Symbol.toPrimitive]()` einen Symbol-Primärwert zurückgibt und Symbol-Primärwerte einen {{jsxref("TypeError")}} werfen, wenn sie implizit in eine Zeichenkette konvertiert werden, wird die `toString()`-Methode nie implizit durch die Sprache aufgerufen. Um ein Symbol in eine Zeichenkette umzuwandeln, müssen Sie explizit seine `toString()`-Methode aufrufen oder die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String#using_string_to_stringify_a_symbol)-Funktion verwenden.

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

Der einzige Weg, JavaScript dazu zu bringen, `toString()` anstelle von [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) auf einem Symbol-Wrapper-Objekt implizit aufzurufen, besteht darin, zuerst die Methode `[Symbol.toPrimitive]()` [zu löschen](/de/docs/Web/JavaScript/Reference/Operators/delete).

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
