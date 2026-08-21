---
title: Function.prototype.caller
short-title: caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

> [!NOTE]
> Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Zugriff auf den `caller` einer Funktion zu einem Fehler — die API wird ohne Ersatz entfernt. Dies soll verhindern, dass Code den Stapel „durchlaufen“ kann, was sowohl Sicherheitsrisiken birgt als auch die Möglichkeit von Optimierungen wie Inlining und Tail-Call-Optimierung stark einschränkt. Für eine ausführlichere Erklärung können Sie [die Begründung für die Abschaffung von `arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee#description) lesen.

Die **`caller`** Zugriffs-Eigenschaft von {{jsxref("Function")}} Instanzen gibt die Funktion zurück, die diese Funktion aufgerufen hat. Für [strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Arrow-, Async- und Generator-Funktionen führt der Zugriff auf die `caller` Eigenschaft zu einem {{jsxref("TypeError")}}.

## Beschreibung

Wenn die Funktion `f` durch den Top-Level-Code aufgerufen wurde, ist der Wert von `f.caller` {{jsxref("null")}}; andernfalls ist es die Funktion, die `f` aufgerufen hat. Wenn die Funktion, die `f` aufgerufen hat, eine Strict-Mode-Funktion ist, ist der Wert von `f.caller` ebenfalls `null`.

Beachten Sie, dass das einzig von der ECMAScript-Spezifikation spezifizierte Verhalten darin besteht, dass `Function.prototype` einen initialen `caller`-Accessor hat, der bei jedem `get`- oder `set`-Anfrage bedingungslos einen {{jsxref("TypeError")}} auslöst (bekannt als „Giftpillen-Accessor“), und dass Implementierungen dieses Semantik für keine Funktion außer nicht-strikten einfachen Funktionen ändern dürfen, in deren Fall es nicht den Wert einer Strict-Mode-Funktion haben darf. Das tatsächliche Verhalten der `caller`-Eigenschaft, wenn sie nicht einfach einen Fehler auslöst, ist implementationsabhängig. Beispielsweise definiert Chrome sie als eigene Daten-Eigenschaft, während Firefox und Safari den initialen Giftpillen-`Function.prototype.caller`-Accessor erweitern, um `this`-Werte, die nicht-strikte Funktionen sind, speziell zu behandeln.

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

Die spezielle Eigenschaft `__caller__`, die das Aktivierungs-Objekt des Aufrufers zurückgab und somit erlaubte, den Stapel zu rekonstruieren, wurde aus Sicherheitsgründen entfernt.

## Beispiele

### Überprüfen des Wertes der `caller`-Eigenschaft einer Funktion

Der folgende Code überprüft den Wert der `caller`-Eigenschaft einer Funktion.

```js
function myFunc() {
  if (myFunc.caller === null) {
    return "The function was called from the top!";
  }
  return `This function's caller was ${myFunc.caller}`;
}
```

### Rekonstruieren des Stapels und Rekursion

Beachten Sie, dass im Fall von Rekursion der Aufrufstapel mit dieser Eigenschaft nicht rekonstruiert werden kann. Betrachten Sie:

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

Folgendes trifft zu:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

Wenn Sie also versuchen würden, den Stapelverlauf in der Funktion `stop()` so zu erhalten:

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

würde die Schleife nie enden.

### Strict Mode `caller`

Falls der `caller` eine Strict-Mode-Funktion ist, ist der Wert von `caller` `null`.

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
