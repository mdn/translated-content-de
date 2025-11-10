---
title: Function.prototype.call()
short-title: call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`call()`** Methode von {{jsxref("Function")}} Instanzen ruft diese Funktion mit einem angegebenen `this`-Wert und einzeln bereitgestellten Argumenten auf.

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
  - : Der Wert, der als `this` beim Aufruf von `func` verwendet werden soll. Wenn die Funktion nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente für die Funktion.

### Rückgabewert

Das Ergebnis des Aufrufs der Funktion mit dem angegebenen `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist nahezu identisch mit {{jsxref("Function/apply", "apply()")}}, außer dass bei `call()` die Funktionsargumente einzeln als Liste übergeben werden, während sie bei `apply()` in einem Objekt kombiniert werden, typischerweise ein Array — zum Beispiel, `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb einer Funktion das Objekt, auf dem die Funktion aufgerufen wurde. Mit `call()` kann man beim Aufruf einer bestehenden Funktion einen beliebigen Wert als `this` setzen, ohne die Funktion zuerst als Eigenschaft an das Objekt zu binden. Dies ermöglicht die Nutzung von Methoden eines Objekts als generische Hilfsfunktionen.

> [!WARNING]
> Verwenden Sie `call()` nicht, um Konstruktoren zu verketten (zum Beispiel zur Implementierung von Vererbung). Dies ruft die Konstruktorfunktion als normale Funktion auf, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist und Klassen einen Fehler werfen, weil sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie stattdessen {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

## Beispiele

### Verwenden von call(), um eine Funktion aufzurufen und den this-Wert festzulegen

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

### Verwenden von call(), um eine Funktion ohne Angabe des ersten Arguments aufzurufen

Wenn der erste `thisArg` Parameter weggelassen wird, bleibt er bei `undefined`. Im Nicht-Strict Mode wird der `this`-Wert dann durch {{jsxref("globalThis")}} ersetzt (was dem globalen Objekt ähnlich ist).

```js
globalThis.globProp = "foo";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is foo"
```

Im Strict Mode wird der Wert von `this` nicht ersetzt, so dass er `undefined` bleibt.

```js
"use strict";

globalThis.globProp = "foo";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

### Verwandeln von Methoden in Hilfsfunktionen

`call()` ist fast gleichbedeutend mit einem normalen Funktionsaufruf, außer dass `this` als normales Parameter übergeben wird, anstatt als der Wert, auf dem die Funktion aufgerufen wurde. Dies ist ähnlich wie bei allgemeinen Hilfsfunktionen: anstatt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, was Ihnen erlaubt, `map` mit array-ähnlichen Objekten zu verwenden, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen Sie {{jsxref("Array.prototype.slice()")}} zum Beispiel, die Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array zu konvertieren. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, da die `call()` Methode auch ihren `this`-Wert ermittelt, der die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie {{jsxref("Function/bind", "bind()")}} verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von `Function.prototype.call()`, wobei der Wert von `this` an {{jsxref("Array.prototype.slice()")}} gebunden ist. Das bedeutet, dass zusätzliche `call()` Aufrufe beseitigt werden können:

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
