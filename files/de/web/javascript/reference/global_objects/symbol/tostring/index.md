---
title: Symbol.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toString
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toString()`**-Methode von {{jsxref("Symbol")}}-Werten gibt einen String zurück, der diesen Symbolwert repräsentiert.

{{EmbedInteractiveExample("pages/js/symbol-prototype-tostring.html")}}

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der den angegebenen Symbolwert repräsentiert.

## Beschreibung

Das {{jsxref("Symbol")}}-Objekt überschreibt die `toString`-Methode von {{jsxref("Object")}}; es erbt nicht
{{jsxref("Object.prototype.toString()")}}. Für `Symbol`-Werte gibt die `toString`-Methode einen beschreibenden String in der Form `"Symbol(description)"` zurück, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.

Die `toString()`-Methode erfordert, dass ihr `this`-Wert ein `Symbol`-Primitive oder Wrapper-Objekt ist. Sie löst einen {{jsxref("TypeError")}} für andere `this`-Werte aus, ohne zu versuchen, sie in Symbolwerte zu konvertieren.

Da `Symbol` über eine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)-Methode verfügt, hat diese Methode immer Vorrang vor `toString()`, wenn ein `Symbol`-Objekt [in einen String umgewandelt wird](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Da jedoch `Symbol.prototype[Symbol.toPrimitive]()` ein Symbolprimitiv zurückgibt und Symbolprimitive einen {{jsxref("TypeError")}} auslösen, wenn sie implizit in einen String umgewandelt werden, wird die `toString()`-Methode nie implizit durch die Sprache aufgerufen. Um ein Symbol zu einem String zu machen, müssen Sie explizit seine `toString()`-Methode aufrufen oder die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String#using_string_to_stringify_a_symbol)-Funktion verwenden.

## Beispiele

### Verwendung von toString()

```js
Symbol("desc").toString(); // "Symbol(desc)"

// wohlbekannte Symbole
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"

// globale Symbole
Symbol.for("foo").toString(); // "Symbol(foo)"
```

### Implizites Aufrufen von toString()

Der einzige Weg, um JavaScript dazu zu bringen, `toString()` anstelle von [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) auf einem Symbol-Wrapper-Objekt implizit aufzurufen, besteht darin, zuerst die `[Symbol.toPrimitive]()`-Methode zu [löschen](/de/docs/Web/JavaScript/Reference/Operators/delete).

> [!WARNING]
> Sie sollten dies in der Praxis nicht tun. Verändern Sie niemals eingebaute Objekte, es sei denn, Sie wissen genau, was Sie tun.

```js
delete Symbol.prototype[Symbol.toPrimitive];
console.log(`${Object(Symbol("foo"))}`); // "Symbol(foo)"
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
