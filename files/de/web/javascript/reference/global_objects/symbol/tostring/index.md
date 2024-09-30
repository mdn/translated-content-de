---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toString()`** Methode von {{jsxref("Symbol")}} Werten gibt einen Zeichenfolgenausdruck dieses Symbolwertes zurück.

{{EmbedInteractiveExample("pages/js/symbol-prototype-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenfolge, die den angegebenen Symbolwert repräsentiert.

## Beschreibung

Das {{jsxref("Symbol")}} Objekt überschreibt die `toString` Methode von {{jsxref("Object")}}; es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für `Symbol` Werte gibt die `toString` Methode eine beschreibende Zeichenfolge in der Form `"Symbol(description)"` zurück, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.

Die `toString()` Methode erfordert, dass ihr `this`-Wert ein `Symbol`-Primitiv oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, sie in Symbolwerte zu zwingen.

Da `Symbol` eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) Methode hat, hat diese Methode immer Vorrang vor `toString()`, wenn ein `Symbol`-Objekt [in eine Zeichenfolge umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Da jedoch `Symbol.prototype[Symbol.toPrimitive]()` ein Symbol-Primärwert zurückgibt, und Symbol-Primärwerte einen {{jsxref("TypeError")}} auslösen, wenn sie implizit in eine Zeichenfolge konvertiert werden, wird die `toString()` Methode niemals implizit von der Sprache aufgerufen. Um ein Symbol in eine Zeichenfolge umzuwandeln, müssen Sie seine `toString()` Methode explizit aufrufen oder die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String#using_string_to_stringify_a_symbol) Funktion verwenden.

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

Die einzige Möglichkeit, JavaScript dazu zu bringen, `toString()` anstelle von [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) auf einem Symbol-Wrapper-Objekt implizit aufzurufen, besteht darin, zuerst die `[Symbol.toPrimitive]()` Methode zu [löschen](/de/docs/Web/JavaScript/Reference/Operators/delete).

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
