---
title: Function.prototype.call()
short-title: call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`call()`**-Methode von {{jsxref("Function")}}-Instanzen ruft diese Funktion mit einem gegebenen `this`-Wert und individuell bereitgestellten Argumenten auf.

{{InteractiveExample("JavaScript Demo: Function.prototype.call()")}}

```js interactive-example
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
// Expected output: "cheese"
```

## Syntax

```js-nolint
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, arg2, /* …, */ argN)
```

### Parameter

- `thisArg`
  - : Der Wert, der als `this` verwendet wird, wenn `func` aufgerufen wird. Wenn die Funktion nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente für die Funktion.

### Rückgabewert

Das Ergebnis des Aufrufs der Funktion mit dem angegebenen `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist fast identisch mit {{jsxref("Function/apply", "apply()")}}, außer dass die Funktionsargumente bei `call()` einzeln als Liste übergeben werden, während sie bei `apply()` in einem Objekt, typischerweise in einem Array, kombiniert sind — zum Beispiel `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist beim Funktionsaufruf der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb der Funktion das Objekt, auf dem die Funktion aufgerufen wurde. Mit `call()` können Sie einen beliebigen Wert als `this` zuweisen, wenn Sie eine vorhandene Funktion aufrufen, ohne die Funktion zuerst dem Objekt als Eigenschaft anzuhängen. Dies ermöglicht die Verwendung von Methoden eines Objekts als allgemeine Dienstprogrammfunktionen.

> [!WARNING]
> Verwenden Sie `call()` nicht, um Konstruktoren zu verketten (zum Beispiel, um Vererbung zu implementieren). Dies ruft die Konstruktorfunktion als normale Funktion auf, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist und Klassen einen Fehler werfen, da sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie stattdessen {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

## Beispiele

### Verwenden von call() zum Aufrufen einer Funktion und Festlegen des this-Wertes

Im folgenden Beispiel wird beim Aufruf von `greet` der Wert von `this` an das Objekt `obj` gebunden, auch wenn `greet` keine Methode von `obj` ist.

```js
function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours
```

### Verwenden von call() zum Aufrufen einer Funktion ohne Angabe des ersten Arguments

Wenn der erste `thisArg`-Parameter weggelassen wird, ist der Standardwert `undefined`. Im Nicht-Strikt-Modus wird der `this`-Wert dann durch {{jsxref("globalThis")}} (entspricht dem globalen Objekt) ersetzt.

```js
globalThis.globProp = "foo";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is foo"
```

Im Strikten Modus wird der Wert von `this` nicht ersetzt, sodass er als `undefined` bleibt.

```js
"use strict";

globalThis.globProp = "foo";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

### Methoden in Dienstprogrammfunktionen umwandeln

`call()` ist fast gleichbedeutend mit einem normalen Funktionsaufruf, außer dass `this` als normales Parameter anstelle des Wertes übergeben wird, auf dem die Funktion aufgerufen wurde. Dies ähnelt der Funktionsweise von allgemeinen Dienstprogrammfunktionen: anstatt `array.map(callback)` aufzurufen, verwendet man `map(array, callback)`, was die Nutzung von `map` mit array-ähnlichen Objekten ermöglicht, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen wir {{jsxref("Array.prototype.slice()")}} als Beispiel, das Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array zu konvertieren. Sie könnten eine Abkürzung so erstellen:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als normale Funktion aufrufen können, da die Methode `call()` auch ihren `this`-Wert liest, der die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie {{jsxref("Function/bind", "bind()")}} verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von `Function.prototype.call()`, wobei der `this`-Wert an {{jsxref("Array.prototype.slice()")}} gebunden ist. Dies bedeutet, dass zusätzliche `call()`-Aufrufe eliminiert werden können:

```js
// Same as "slice" in the previous example
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// …

slice(arguments);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Reflect.apply()")}}
- [Spread-Syntax (`...`)](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Einführung in objektorientiertes JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
