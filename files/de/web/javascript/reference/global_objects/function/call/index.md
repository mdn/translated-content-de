---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`call()`**-Methode von {{jsxref("Function")}}-Instanzen ruft diese Funktion mit einem angegebenen `this`-Wert und individuell übergebenen Argumenten auf.

{{InteractiveExample("JavaScript Demo: Function.call()")}}

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
  - : Der Wert, der als `this` verwendet wird, wenn `func` aufgerufen wird. Wenn die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte konvertiert.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente für die Funktion.

### Rückgabewert

Das Ergebnis der Ausführung der Funktion mit dem spezifizierten `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist nahezu identisch mit {{jsxref("Function/apply", "apply()")}}, mit dem Unterschied, dass die Funktionsargumente bei `call()` einzeln als Liste übergeben werden, während sie bei `apply()` in einem Objekt kombiniert sind, üblicherweise in einem Array — z. B. `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist bei einem Funktionsaufruf der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb der Funktion das Objekt, auf das beim Zugriff auf die Funktion zugegriffen wurde. Mit `call()` können Sie beim Aufruf einer bestehenden Funktion einen beliebigen Wert als `this` zuweisen, ohne die Funktion zuerst als Eigenschaft an das Objekt zu binden. Dies ermöglicht es, Methoden eines Objekts als allgemeine Dienstprogrammfunktion zu verwenden.

> [!WARNING]
> Verwenden Sie `call()` nicht, um Konstruktoren zu verketten (z. B. zur Implementierung von Vererbung). Dies ruft die Konstruktorfunktion als normale Funktion auf, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist und Klassen einen Fehler auslösen, da sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie stattdessen {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

## Beispiele

### call() benutzen, um eine Funktion aufzurufen und den this-Wert anzugeben

Im folgenden Beispiel wird beim Aufruf von `greet` der `this`-Wert an das Objekt `obj` gebunden, selbst wenn `greet` keine Methode von `obj` ist.

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

### call() benutzen, um eine Funktion aufzurufen, ohne das erste Argument anzugeben

Wenn der erste `thisArg`-Parameter weggelassen wird, wird er standardmäßig auf `undefined` gesetzt. Im Non-Strict-Modus wird der `this`-Wert dann durch {{jsxref("globalThis")}} (was dem globalen Objekt entspricht) ersetzt.

```js
globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is Wisen"
```

Im Strict-Modus wird der Wert von `this` nicht ersetzt und bleibt `undefined`.

```js
"use strict";

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

### Methoden zu Dienstprogrammfunktionen transformieren

`call()` ist beinahe identisch mit einem normalen Funktionsaufruf, außer dass `this` als normaler Parameter übergeben wird, anstatt der Wert zu sein, auf den die Funktion zugegriffen hat. Dies ähnelt der Funktionsweise allgemeiner Dienstprogrammfunktionen: Statt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, was es ermöglicht, `map` mit arrays-ähnlichen Objekten zu verwenden, die keine Arrays sind (z. B. [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen wir {{jsxref("Array.prototype.slice()")}} als Beispiel, die Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array zu konvertieren. Sie könnten eine Abkürzung erstellen wie diese:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als normale Funktion aufrufen können, da die `call()`-Methode auch ihren `this`-Wert liest, welcher die Funktion ist, die aufgerufen werden soll. In diesem Fall können Sie {{jsxref("Function/bind", "bind()")}} verwenden, um den Wert von `this` für `call()` zu binden. In dem folgenden Code ist `slice()` eine gebundene Version von `Function.prototype.call()`, wobei `this` an {{jsxref("Array.prototype.slice()")}} gebunden ist. Das bedeutet, dass zusätzliche `call()`-Aufrufe vermieden werden können:

```js
// Same as "slice" in the previous example
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// ...

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
