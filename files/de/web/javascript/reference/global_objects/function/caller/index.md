---
title: Function.prototype.caller
short-title: caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Zugriff auf `caller` einer Funktion zu einem Fehler — die API wird ohne Ersatz entfernt. Dies soll verhindern, dass Code die Möglichkeit hat, den Stack "abzuwandern", was sowohl Sicherheitsrisiken birgt als auch die Möglichkeit von Optimierungen wie Inlining und Tail-Call-Optimierung stark einschränkt. Für eine ausführlichere Erklärung können Sie die [Begründung für die Veraltung von `arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee#description) lesen.

Die **`caller`** Accessor-Eigenschaft von {{jsxref("Function")}} Instanzen gibt die Funktion zurück, die diese Funktion aufgerufen hat. Bei [Strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Arrow-, Async- und Generator-Funktionen führt der Zugriff auf die `caller` Eigenschaft zu einem {{jsxref("TypeError")}}.

## Beschreibung

Wenn die Funktion `f` vom Top-Level-Code aufgerufen wurde, ist der Wert von `f.caller` {{jsxref("Operators/null", "null")}}; andernfalls ist es die Funktion, die `f` aufgerufen hat. Wenn die Funktion, die `f` aufgerufen hat, eine Strict-Mode-Funktion ist, ist der Wert von `f.caller` ebenfalls `null`.

Beachten Sie, dass das einzige vom ECMAScript-Spezifikation angegebene Verhalten darin besteht, dass `Function.prototype` einen initialen `caller` Accessor hat, der bedingungslos einen {{jsxref("TypeError")}} für jede `get`- oder `set`-Anforderung auslöst (bekannt als "giftige Pille Accessor"), und dass Implementierungen diese Semantik für keine Funktion ändern dürfen, außer für nicht-strikte einfache Funktionen. In diesem Fall darf es nicht den Wert einer Strict-Mode-Funktion haben. Das tatsächliche Verhalten der `caller`-Eigenschaft, falls es sich um etwas anderes als das Auslösen eines Fehlers handelt, ist implementierungsabhängig. Zum Beispiel definiert Chrome es als eigene Daten-Eigenschaft, während Firefox und Safari den initialen `Function.prototype.caller` Accessor erweitern, um speziell `this` Werte zu behandeln, die nicht-strikte Funktionen sind.

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

Die spezielle Eigenschaft `__caller__`, die das Aktivierungsobjekt des Aufrufers zurückgab und so die Rekonstruktion des Stacks ermöglichte, wurde aus Sicherheitsgründen entfernt.

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

Beachten Sie, dass Sie im Falle von Rekursion den Aufruf-Stack mit dieser Eigenschaft nicht rekonstruieren können. Betrachten Sie:

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

Zum Zeitpunkt, an dem `stop()` aufgerufen wird, sieht der Aufruf-Stack wie folgt aus:

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Folgendes ist zutreffend:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

Wenn Sie also versucht haben, den Stack-Trace in die `stop()` Funktion folgendermaßen zu bekommen:

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

würde die Schleife niemals enden.

### Strict-Mode-Caller

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Function.prototype.name")}}
- {{jsxref("Functions/arguments", "arguments")}}
