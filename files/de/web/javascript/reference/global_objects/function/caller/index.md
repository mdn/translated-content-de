---
title: Function.prototype.caller
short-title: caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Zugriff auf `caller` einer Funktion zu einem Fehler – die API wurde ohne Ersatz entfernt. Dies soll verhindern, dass Code den Stack "durchlaufen" kann, was sowohl Sicherheitsrisiken darstellt als auch die Möglichkeit von Optimierungen wie Inlining und Tail-Call-Optimierung stark einschränkt. Für eine ausführlichere Erklärung können Sie [die Begründung für die Abschaffung von `arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee#description) lesen.

Die **`caller`**-Accessor-Eigenschaft von {{jsxref("Function")}}-Instanzen gibt die Funktion zurück, die diese Funktion aufgerufen hat. Für [Strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Arrow-, Async- und Generatorfunktionen führt der Zugriff auf die `caller`-Eigenschaft zu einem {{jsxref("TypeError")}}.

## Beschreibung

Wenn die Funktion `f` durch den Code auf oberster Ebene aufgerufen wurde, ist der Wert von `f.caller` {{jsxref("Operators/null", "null")}}; andernfalls ist es die Funktion, die `f` aufgerufen hat. Wenn die Funktion, die `f` aufgerufen hat, eine Strict-Modus-Funktion ist, ist der Wert von `f.caller` ebenfalls `null`.

Beachten Sie, dass das einzige Verhalten, das durch die ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` einen anfänglichen `caller`-Accessor besitzt, der bedingungslos einen {{jsxref("TypeError")}} für jede `get`- oder `set`-Anfrage auslöst (bekannt als "Giftpillen-Accessor"), und dass Implementierungen nicht berechtigt sind, diese Semantik für irgendeine Funktion zu ändern, mit Ausnahme von nicht-strikten normalen Funktionen, in welchem Fall sie nicht den Wert einer Strict-Modus-Funktion haben darf. Das tatsächliche Verhalten der `caller`-Eigenschaft, wenn es etwas anderes als das Auslösen eines Fehlers ist, ist implementierungsabhängig. Zum Beispiel definiert Chrome es als eine eigene Dateneigenschaft, während Firefox und Safari den anfänglichen Giftpillen-`Function.prototype.caller`-Accessor erweitern, um speziell mit `this`-Werten umzugehen, die nicht-strikte Funktionen sind.

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

Die spezielle Eigenschaft `__caller__`, die das Aktivierungsobjekt des Callers zurückgab und somit die Rekonstruktion des Stacks ermöglichte, wurde aus Sicherheitsgründen entfernt.

## Beispiele

### Überprüfung des Wertes der `caller`-Eigenschaft einer Funktion

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

Beachten Sie, dass im Falle einer Rekursion der Aufruf-Stack mit dieser Eigenschaft nicht rekonstruiert werden kann. Betrachten Sie:

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

In dem Moment, in dem `stop()` aufgerufen wird, sieht der Aufruf-Stack folgendermaßen aus:

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Folgendes trifft zu:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

Wenn Sie also versuchen würden, den Stack-Trace in der `stop()`-Funktion wie folgt zu erhalten:

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

würde die Schleife nie enden.

### Strict-Modus-Caller

Wenn der Caller eine Strict-Modus-Funktion ist, ist der Wert von `caller` `null`.

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
