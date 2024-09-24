---
title: Function.prototype.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wirft der Zugriff auf `caller` einer Funktion einen Fehler — die API wurde entfernt, ohne einen Ersatz zu bieten. Dies soll verhindern, dass Code den Stapel "durchlaufen" kann, was sowohl Sicherheitsrisiken darstellt als auch die Möglichkeit von Optimierungen wie Inlining und Tail-Call-Optimierung stark einschränkt. Für eine detailliertere Erklärung können Sie [die Begründung für die Abschaffung von `arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee#description) lesen.

Die **`caller`** Accessor-Eigenschaft von {{jsxref("Function")}}-Instanzen gibt die Funktion zurück, die diese Funktion aufgerufen hat. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Pfeilfunktionen, asynchrone und Generator-Funktionen wirft der Zugriff auf die `caller`-Eigenschaft einen {{jsxref("TypeError")}}.

## Beschreibung

Wenn die Funktion `f` durch den Top-Level-Code aufgerufen wurde, ist der Wert von `f.caller` {{jsxref("Operators/null", "null")}}; andernfalls ist es die Funktion, die `f` aufgerufen hat. Wenn die Funktion, die `f` aufgerufen hat, eine Funktion im Strict-Modus ist, ist der Wert von `f.caller` ebenfalls `null`.

Beachten Sie, dass das einzige Verhalten, das durch die ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` einen anfänglichen `caller`-Accessor hat, der bedingungslos einen {{jsxref("TypeError")}} für jede `get`- oder `set`-Anfrage auslöst (bekannt als "giftige Pille-Accessor"), und dass Implementierungen nicht erlaubt sind, diese Semantik für irgendeine Funktion zu ändern, außer für nicht-strikte normale Funktionen, in diesem Fall darf es nicht den Wert einer Funktion im Strict-Modus haben. Das tatsächliche Verhalten der `caller`-Eigenschaft, falls es etwas anderes als das Auslösen eines Fehlers ist, ist implementierungsabhängig. Zum Beispiel definiert Chrome es als eine eigene Daten-Eigenschaft, während Firefox und Safari den anfänglichen "giftigen Pille"-`Function.prototype.caller`-Accessor erweitern, um speziell mit `this`-Werten umzugehen, die nicht strikte Funktionen sind.

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

Diese Eigenschaft ersetzt die veraltete `arguments.caller`-Eigenschaft des {{jsxref("Functions/arguments", "arguments")}}-Objekts.

Die spezielle Eigenschaft `__caller__`, die das Aktivierungsobjekt des Aufrufers zurückgab und damit erlaubte, den Stapel zu rekonstruieren, wurde aus Sicherheitsgründen entfernt.

## Beispiele

### Überprüfen des Werts der `caller`-Eigenschaft einer Funktion

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

Beachten Sie, dass Sie bei Rekursion den Aufruf-Stack nicht mit dieser Eigenschaft rekonstruieren können. Betrachten Sie:

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

In dem Moment, in dem `stop()` aufgerufen wird, wird der Aufruf-Stack folgendermaßen aussehen:

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Folgendes ist wahr:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

wenn Sie versuchten, den Stack-Trace in der `stop()`-Funktion wie folgt zu erhalten:

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

wäre die Schleife endlos.

### Strict-Modus `caller`

Wenn der Aufrufer eine Funktion im Strict-Modus ist, ist der Wert von `caller` `null`.

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function.prototype.name")}}
- {{jsxref("Functions/arguments", "arguments")}}
