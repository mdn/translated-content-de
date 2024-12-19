---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{JSRef}}

Die **`call()`** Methode von {{jsxref("Function")}} Instanzen ruft diese Funktion mit einem gegebenen `this`-Wert und einzeln angegebenen Argumenten auf.

{{EmbedInteractiveExample("pages/js/function-call.html")}}

## Syntax

```js-nolint
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, arg2, /* …, */ argN)
```

### Parameter

- `thisArg`
  - : Der Wert, der als `this` beim Aufruf von `func` verwendet wird. Wenn die Funktion nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt und primitive Werte in Objekte umgewandelt.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente für die Funktion.

### Rückgabewert

Das Ergebnis des Funktionsaufrufs mit dem angegebenen `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist fast identisch mit {{jsxref("Function/apply", "apply()")}}, außer dass die Funktionsargumente bei `call()` einzeln als Liste übergeben werden, während sie bei `apply()` in einem Objekt kombiniert werden, typischerweise einem Array — zum Beispiel, `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist bei einem Funktionsaufruf der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb der Funktion das Objekt, auf dem die Funktion aufgerufen wurde. Mit `call()` können Sie einen beliebigen Wert als `this` zuweisen, wenn Sie eine bestehende Funktion aufrufen, ohne die Funktion vorher als Eigenschaft mit dem Objekt zu verknüpfen. Dies ermöglicht es, Methoden eines Objekts als generische Hilfsfunktionen zu verwenden.

> [!WARNING]
> Verwenden Sie `call()` nicht, um Konstruktoren miteinander zu verketten (zum Beispiel, um Vererbung zu implementieren). Dies würde die Konstruktorfunktion als normale Funktion aufrufen, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist und Klassen einen Fehler auslösen, weil sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie stattdessen {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

## Beispiele

### Verwendung von call() zum Aufrufen einer Funktion mit einem spezifizierten this-Wert

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

### Verwendung von call() zum Aufrufen einer Funktion ohne Angabe des ersten Arguments

Wenn der erste `thisArg` Parameter weggelassen wird, wird er als `undefined` angenommen. Im Nicht-Strict-Mode wird der `this`-Wert dann durch {{jsxref("globalThis")}} ersetzt (was dem globalen Objekt ähnlich ist).

```js
globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is Wisen"
```

Im Strict-Mode wird der Wert von `this` nicht ersetzt, sodass er `undefined` bleibt.

```js
"use strict";

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // throws TypeError: Cannot read the property of 'globProp' of undefined
```

### Transformieren von Methoden zu Hilfsfunktionen

`call()` ist fast identisch mit einem normalen Funktionsaufruf, außer dass `this` als normales Argument anstatt als Wert, auf den die Funktion zugegriffen wurde, übergeben wird. Dies ähnelt der Funktionsweise von allgemeingültigen Hilfsfunktionen: Anstatt `array.map(callback)` zu verwenden, nutzen Sie `map(array, callback)`, was es ermöglicht, `map` mit array-ähnlichen Objekten zu verwenden, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen Sie zum Beispiel {{jsxref("Array.prototype.slice()")}}, das Sie für die Umwandlung eines array-ähnlichen Objekts in ein echtes Array verwenden möchten. Sie könnten eine Abkürzung wie folgt erstellen:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als normale Funktion aufrufen können, da die `call()`-Methode auch ihren `this`-Wert liest, was die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie {{jsxref("Function/bind", "bind()")}} verwenden, um den `this`-Wert für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von `Function.prototype.call()`, mit dem `this`-Wert gebunden an {{jsxref("Array.prototype.slice()")}}. Dies bedeutet, dass zusätzliche `call()`-Aufrufe eliminiert werden können:

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
