---
title: Function.prototype.caller
short-title: caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{Non-standard_Header}}

> [!NOTE]
> Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Zugriff auf `caller` einer Funktion zu einem Fehler — die API wurde entfernt, ohne dass es einen Ersatz gibt. Dies soll verhindern, dass Code "den Stack durchläuft", was sowohl Sicherheitsrisiken birgt als auch die Möglichkeit von Optimierungen wie Inlining und Tail-Call-Optimierung stark einschränkt. Für weitere Erklärungen können Sie die [Begründung für die Veraltung von `arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee#description) lesen.

Die **`caller`** Accessor-Eigenschaft von {{jsxref("Function")}}-Instanzen gibt die Funktion zurück, die diese Funktion aufgerufen hat. Bei [Strict](/de/docs/Web/JavaScript/Reference/Strict_mode)-, Pfeil-, asynchronen und Generatorfunktionen führt der Zugriff auf die `caller`-Eigenschaft zu einem {{jsxref("TypeError")}}.

## Beschreibung

Wenn die Funktion `f` durch den obersten Code aufgerufen wurde, ist der Wert von `f.caller` {{jsxref("null")}}; andernfalls ist es die Funktion, die `f` aufgerufen hat. Wenn die Funktion, die `f` aufgerufen hat, eine Strict-Modus-Funktion ist, ist der Wert von `f.caller` ebenfalls `null`.

Es ist zu beachten, dass das einzige Verhalten, das durch die ECMAScript-Spezifikation festgelegt ist, darin besteht, dass `Function.prototype` einen anfänglichen `caller`-Accessor hat, der bedingungslos einen {{jsxref("TypeError")}} für jede `get` oder `set`-Anforderung auslöst (bekannt als ein "Giftpille-Accessor"), und dass Implementierungen nicht erlaubt sind, diese Semantik für irgendeine Funktion zu ändern, außer für nicht-strict normale Funktionen, in welchem Fall sie nicht den Wert einer Strict-Modus-Funktion haben darf. Das tatsächliche Verhalten der `caller`-Eigenschaft, wenn es etwas anderes als das Auslösen eines Fehlers ist, ist implementationsspezifisch. Zum Beispiel definiert Chrome sie als eine eigene Dateneigenschaft, während Firefox und Safari den anfänglichen Giftpillen-`Function.prototype.caller`-Accessor erweitern, um `this`-Werte speziell zu behandeln, die nicht-strict Funktionen sind.

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

Die spezielle Eigenschaft `__caller__`, die das Aktivierungsobjekt des Callers zurückgab und so die Rekonstruktion des Stacks ermöglichte, wurde aus Sicherheitsgründen entfernt.

## Beispiele

### Überprüfen des Werts der caller-Eigenschaft einer Funktion

Der folgende Code prüft den Wert der `caller`-Eigenschaft einer Funktion.

```js
function myFunc() {
  if (myFunc.caller === null) {
    return "The function was called from the top!";
  }
  return `This function's caller was ${myFunc.caller}`;
}
```

### Rekonstruktion des Stacks und Rekursion

Beachten Sie, dass im Falle einer Rekursion der Aufrufstapel mit dieser Eigenschaft nicht rekonstruiert werden kann. Beachten Sie:

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

In dem Moment, in dem `stop()` aufgerufen wird, sieht der Aufrufstapel folgendermaßen aus:

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Folgendes ist wahr:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

wenn Sie also versuchen würden, den Stack-Trace in der `stop()`-Funktion auf diese Weise zu ermitteln:

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

würde die Schleife niemals enden.

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
