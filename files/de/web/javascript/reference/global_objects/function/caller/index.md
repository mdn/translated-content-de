---
title: Function.prototype.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> In [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode), accessing `caller` of a function throws an error — the API is removed with no replacement. This is to prevent code from being able to "walk the stack", which both poses security risks and severely limits the possibility of optimizations like inlining and tail-call optimization. For more explanation, you can read [the rationale for the deprecation of `arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee#description).

Die **`caller`** Zugriffs-Eigenschaft von {{jsxref("Function")}} Instanzen gibt die Funktion zurück, die diese Funktion aufgerufen hat. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Arrow-, Asynchron- und Generatorfunktionen wirft der Zugriff auf die `caller`-Eigenschaft einen {{jsxref("TypeError")}}.

## Beschreibung

Wenn die Funktion `f` durch den obersten Code aufgerufen wurde, ist der Wert von `f.caller` {{jsxref("Operators/null", "null")}}; andernfalls ist es die Funktion, die `f` aufgerufen hat. Wenn die Funktion, die `f` aufgerufen hat, eine Strict-Mode-Funktion ist, ist der Wert von `f.caller` ebenfalls `null`.

Beachten Sie, dass das einzige Verhalten, das durch die ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` einen anfänglichen `caller` Accessor hat, der bedingungslos einen {{jsxref("TypeError")}} für jede `get`- oder `set`-Anfrage auslöst (bekannt als "giftige Pille Accessor"), und dass Implementierungen nicht erlaubt sind, diese Semantik für irgendeine Funktion außer Nicht-Strict-Plain-Funktionen zu ändern, in diesem Fall darf der Wert keine Strict-Mode-Funktion sein. Das tatsächliche Verhalten der `caller`-Eigenschaft, sofern es sich um etwas anderes als das Auslösen eines Fehlers handelt, ist implementierungsabhängig. Zum Beispiel definiert Chrome es als eine eigene Dateneigenschaft, während Firefox und Safari den anfänglichen "giftigen" `Function.prototype.caller` Accessor erweitern, um speziell `this`-Werte zu behandeln, die Nicht-Strict-Funktionen sind.

```js
(function f() {
  if (Object.hasOwn(f, "caller")) {
    console.log(
      "caller is an own property with descriptor",
      Object.getOwnPropertyDescriptor(f, "caller"),
    );
  } else {
    console.log(
      "f doesn't have an own property named caller. Trying to get f.[[Prototype]].caller",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "caller",
      ).get.call(f),
    );
  }
})();

// In Chrome:
// caller is an own property with descriptor {value: null, writable: false, enumerable: false, configurable: false}

// In Firefox:
// f doesn't have an own property named caller. Trying to get f.[[Prototype]].caller
// null
```

Diese Eigenschaft ersetzt die veraltete `arguments.caller` Eigenschaft des {{jsxref("Functions/arguments", "arguments")}} Objekts.

Die spezielle Eigenschaft `__caller__`, die das Aktivierungsobjekt des Anrufers zurückgab und somit die Rekonstruktion des Stacks ermöglichte, wurde aus Sicherheitsgründen entfernt.

## Beispiele

### Überprüfung des Wertes der caller-Eigenschaft einer Funktion

Der folgende Code überprüft den Wert der `caller`-Eigenschaft einer Funktion.

```js
function myFunc() {
  if (myFunc.caller === null) {
    return "The function was called from the top!";
  } else {
    return `This function's caller was ${myFunc.caller}`;
  }
}
```

### Rekonstruktion des Stacks und Rekursion

Beachten Sie, dass Sie im Falle einer Rekursion den Aufrufstack nicht mit dieser Eigenschaft rekonstruieren können. Betrachten Sie:

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  if (n > 0) {
    f(n);
  } else {
    stop();
  }
}
f(2);
```

In dem Moment, in dem `stop()` aufgerufen wird, sieht der Aufrufstack so aus:

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Folgendes trifft zu:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

Wenn Sie also den Stack-Trace in der `stop()`-Funktion so versuchen würden:

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

würde die Schleife nie enden.

### Strict Mode Caller

Wenn der Aufrufer eine Strict-Mode-Funktion ist, ist der Wert von `caller` `null`.

```js
function callerFunc() {
  calleeFunc();
}

function strictCallerFunc() {
  "use strict";
  calleeFunc();
}

function calleeFunc() {
  console.log(calleeFunc.caller);
}

(function () {
  callerFunc();
})();
// Logs [Function: callerFunc]

(function () {
  strictCallerFunc();
})();
// Logs null
```

## Spezifikationen

Kein Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function.prototype.name")}}
- {{jsxref("Functions/arguments", "arguments")}}
