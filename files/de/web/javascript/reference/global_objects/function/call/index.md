---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{JSRef}}

Die Methode **`call()`** von {{jsxref("Function")}}-Instanzen ruft diese Funktion mit einem gegebenen `this`-Wert und einzeln bereitgestellten Argumenten auf.

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
  - : Der Wert, der als `this` verwendet werden soll, wenn `func` aufgerufen wird. Wenn die Funktion nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte konvertiert.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente für die Funktion.

### Rückgabewert

Das Ergebnis des Aufrufs der Funktion mit dem angegebenen `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist fast identisch mit {{jsxref("Function/apply", "apply()")}}, mit dem Unterschied, dass die Funktionsargumente zu `call()` einzeln als Liste übergeben werden, während sie für `apply()` in einem Objekt, typischerweise einem Array, kombiniert werden — zum Beispiel `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist beim Aufruf einer Funktion der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb der Funktion das Objekt, auf dem die Funktion aufgerufen wurde. Mit `call()` können Sie einen beliebigen Wert als `this` zuweisen, wenn Sie eine vorhandene Funktion aufrufen, ohne die Funktion zuerst als Eigenschaft an das Objekt anzuhängen. Dies ermöglicht Ihnen, Methoden eines Objekts als generische Hilfsfunktionen zu verwenden.

> [!WARNING]
> Verwenden Sie `call()` nicht, um Konstruktoren zu verketten (zum Beispiel zur Implementierung von Vererbung). Dies ruft die Konstruktorfunktion als normale Funktion auf, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist, und Klassen werfen einen Fehler, da sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Nutzen Sie stattdessen {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

## Beispiele

### Verwendung von call() zum Aufrufen einer Funktion mit einem festgelegten this-Wert

Im unten stehenden Beispiel wird beim Aufruf von `greet` der Wert von `this` an das Objekt `obj` gebunden, selbst wenn `greet` keine Methode von `obj` ist.

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

### Verwendung von call() zum Aufrufen einer Funktion ohne Angabe des ersten Arguments

Wenn der erste `thisArg`-Parameter ausgelassen wird, wird er standardmäßig auf `undefined` gesetzt. Im nicht-strict mode wird der `this`-Wert dann durch {{jsxref("globalThis")}} (was dem globalen Objekt entspricht) ersetzt.

```js
globalThis.globProp = "foo";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is foo"
```

Im strict mode wird der Wert von `this` nicht ersetzt und bleibt somit `undefined`.

```js
"use strict";

globalThis.globProp = "foo";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

### Umwandlung von Methoden in Hilfsfunktionen

`call()` ist fast gleichbedeutend mit einem normalen Funktionsaufruf, mit der Ausnahme, dass `this` als normales Argument statt als der Wert, auf den die Funktion aufgerufen wurde, übergeben wird. Dies ähnelt der Funktionsweise allgemeiner Hilfsfunktionen: anstelle von `array.map(callback)` verwenden Sie `map(array, callback)`, wodurch Sie `map` mit array-ähnlichen Objekten, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), verwenden können, ohne `Object.prototype` zu modifizieren.

Betrachten Sie zum Beispiel {{jsxref("Array.prototype.slice()")}}, die Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array zu konvertieren. Sie könnten eine Abkürzung wie folgt erstellen:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, da die `call()`-Methode auch ihren `this`-Wert liest, der die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie {{jsxref("Function/bind", "bind()")}} verwenden, um den `this`-Wert für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von `Function.prototype.call()`, mit dem `this`-Wert gebunden an {{jsxref("Array.prototype.slice()")}}. Dadurch können zusätzliche `call()`-Aufrufe vermieden werden:

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
