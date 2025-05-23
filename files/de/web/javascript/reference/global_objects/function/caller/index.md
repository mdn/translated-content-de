---
title: Function.prototype.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 3d53de838dbcb25b210ccd708c681771cdeb14e4
---

{{JSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Zugriff auf `caller` einer Funktion zu einem Fehler – die API wird ohne Ersatz entfernt. Dies soll verhindern, dass Code den Stack "durchlaufen" kann, was sowohl Sicherheitsrisiken birgt als auch die Möglichkeit von Optimierungen wie Inlining und Tail-Call-Optimierung stark einschränkt. Für eine ausführlichere Erklärung können Sie die [Rationale für die Abschaffung von `arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee#description) lesen.

Die **`caller`**-Accessor-Eigenschaft von {{jsxref("Function")}}-Instanzen gibt die Funktion zurück, die diese Funktion aufgerufen hat. Für [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), Pfeil-, Asynchron- und Generatorfunktionen, führt der Zugriff auf die `caller`-Eigenschaft zu einem {{jsxref("TypeError")}}.

## Beschreibung

Wenn die Funktion `f` vom obersten Code aus aufgerufen wurde, ist der Wert von `f.caller` {{jsxref("Operators/null", "null")}}; andernfalls ist es die Funktion, die `f` aufgerufen hat. Wenn die Funktion, die `f` aufgerufen hat, eine Funktion im Strict-Modus ist, ist der Wert von `f.caller` ebenfalls `null`.

Beachten Sie, dass das einzige Verhalten, das von der ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` über einen anfänglichen `caller`-Accessor verfügt, der bedingungslos einen {{jsxref("TypeError")}} für jede `get`- oder `set`-Anfrage auslöst (bekannt als "poison pill accessor"), und dass Implementierungen nicht erlaubt sind, diese Semantik für irgendeine Funktion außer nicht-strikt-plain Funktionen zu ändern, in welchem Fall sie nicht den Wert einer Funktion im Strict-Modus haben darf. Das tatsächliche Verhalten der `caller`-Eigenschaft, falls es sich um etwas anderes als das Werfen eines Fehlers handelt, ist Implementierungsdetails. Zum Beispiel definiert Chrome es als eigene Dateneigenschaft, während Firefox und Safari den anfänglichen Poison-Pill `Function.prototype.caller`-Accessor erweitern, um speziell `this`-Werte zu behandeln, die Nicht-strikt-Funktionen sind.

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

Die spezielle Eigenschaft `__caller__`, die das Aktivierungsobjekt des Anrufers zurückgab und somit die Rekonstruktion des Stacks ermöglichte, wurde aus Sicherheitsgründen entfernt.

## Beispiele

### Überprüfen des Werts der `caller`-Eigenschaft einer Funktion

Der folgende Code überprüft den Wert der `caller`-Eigenschaft einer Funktion.

```js
function myFunc() {
  if (myFunc.caller === null) {
    return "The function was called from the top!";
  }
  return `This function's caller was ${myFunc.caller}`;
}
```

### Rekonstruktion des Stacks und Rekursion

Beachten Sie, dass im Fall von Rekursion der Aufruf-Stack mit dieser Eigenschaft nicht rekonstruiert werden kann. Betrachten Sie:

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

Im Moment, in dem `stop()` aufgerufen wird, wird der Call-Stack sein:

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Das folgende stimmt:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

Wenn Sie also versuchen, den Stacktrace in der Funktion `stop()` wie folgt zu erhalten:

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

würde die Schleife niemals aufhören.

### Strict-Modus `caller`

Wenn der Anrufer eine Funktion im Strict-Modus ist, ist der Wert von `caller` `null`.

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
