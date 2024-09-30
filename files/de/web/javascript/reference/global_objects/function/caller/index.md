---
title: Function.prototype.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Zugriff auf `caller` einer Funktion zu einem Fehler — die API wurde entfernt, ohne Ersatz. Dies soll verhindern, dass Code den Stapel durchlaufen kann, was sowohl Sicherheitsrisiken birgt als auch die Möglichkeit von Optimierungen wie Inlining und Tail-Call-Optimierung stark einschränkt. Für weitere Erklärungen können Sie [die Begründung für die Abschaffung von `arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee#description) lesen.

Die **`caller`** Accessor-Eigenschaft von {{jsxref("Function")}}-Instanzen gibt die Funktion zurück, die diese Funktion aufgerufen hat. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Arrow-, Async- und Generatorfunktionen wirft der Zugriff auf die `caller`-Eigenschaft einen {{jsxref("TypeError")}}.

## Beschreibung

Wenn die Funktion `f` vom obersten Code-Ebene aufgerufen wurde, ist der Wert von `f.caller` {{jsxref("Operators/null", "null")}}; andernfalls ist es die Funktion, die `f` aufgerufen hat. Wenn die Funktion, die `f` aufgerufen hat, eine Strict-Mode-Funktion ist, ist der Wert von `f.caller` ebenfalls `null`.

Beachten Sie, dass das einzige Verhalten, das von der ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` einen anfänglichen `caller`-Accessor hat, der bedingungslos einen {{jsxref("TypeError")}} für jeden `get`- oder `set`-Antrag wirft (bekannt als "poison pill accessor") und dass Implementierungen nicht erlaubt sind, diese Semantik für eine andere Funktion als nicht-strikte normale Funktionen zu ändern, in welchem Fall sie nicht den Wert einer Strict-Mode-Funktion haben darf. Das tatsächliche Verhalten der `caller`-Eigenschaft, wenn es etwas anderes ist als das Werfen eines Fehlers, ist implementierungsabhängig. Zum Beispiel definiert Chrome es als eigene Dateneigenschaft, während Firefox und Safari den anfänglichen Poison-Pill-`Function.prototype.caller`-Accessor erweitern, um speziell `this`-Werte zu behandeln, die nicht-strikte Funktionen sind.

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

Diese Eigenschaft ersetzt die veraltete `arguments.caller`-Eigenschaft des {{jsxref("Functions/arguments", "arguments")}} Objekts.

Die spezielle Eigenschaft `__caller__`, die das Aktivierungsobjekt des Aufrufers zurückgab und so die Rekonstruktion des Stacks ermöglichte, wurde aus Sicherheitsgründen entfernt.

## Beispiele

### Überprüfung des Wertes der `caller`-Eigenschaft einer Funktion

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

### Rekonstruktion des Stapels und Rekursion

Beachten Sie, dass Sie im Falle der Rekursion den Aufruf-Stack nicht mit dieser Eigenschaft rekonstruieren können. Betrachten Sie:

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

In dem Moment, in dem `stop()` aufgerufen wird, sieht der Aufruf-Stack so aus:

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Das Folgende ist wahr:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

Wenn Sie also versuchen würden, die Stack-Verfolgung in der `stop()`-Funktion so zu erhalten:

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

würde die Schleife nie enden.

### Strict-Modus Aufrufer

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function.prototype.name")}}
- {{jsxref("Functions/arguments", "arguments")}}
