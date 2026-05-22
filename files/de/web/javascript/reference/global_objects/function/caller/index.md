---
title: Function.prototype.caller
short-title: caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) führt der Zugriff auf `caller` einer Funktion zu einem Fehler — die API wurde entfernt, ohne Ersatz. Dies soll verhindern, dass Code den "Stack durchlaufen" kann, was sowohl Sicherheitsrisiken birgt als auch die Möglichkeit von Optimierungen wie Inlining und Tail-Call-Optimierung stark einschränkt. Weitere Erklärungen finden Sie in der [Begründung für die Abschaffung von `arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee#description).

Die **`caller`** Accessor-Eigenschaft von {{jsxref("Function")}}-Instanzen gibt die Funktion zurück, die diese Funktion aufgerufen hat. Bei [strict](/de/docs/Web/JavaScript/Reference/Strict_mode), Pfeil-, asynchronen und Generatorfunktionen führt der Zugriff auf die Eigenschaft `caller` zu einem {{jsxref("TypeError")}}.

## Beschreibung

Wenn die Funktion `f` vom Top-Level-Code aufgerufen wurde, ist der Wert von `f.caller` {{jsxref("null")}}; andernfalls ist es die Funktion, die `f` aufgerufen hat. Wenn die Funktion, die `f` aufgerufen hat, eine Strict-Mode-Funktion ist, ist der Wert von `f.caller` ebenfalls `null`.

Beachten Sie, dass das einzige Verhalten, das von der ECMAScript-Spezifikation spezifiziert wird, darin besteht, dass `Function.prototype` einen initialen `caller`-Accessor hat, der bedingungslos einen {{jsxref("TypeError")}} für jeden `get`- oder `set`-Request auslöst (bekannt als "poison pill accessor") und dass Implementierungen nicht erlaubt sind, diese Semantik für irgendeine Funktion zu ändern, außer für nicht-strict plain functions, in welchem Fall sie nicht den Wert einer strict mode function haben darf. Das tatsächliche Verhalten der `caller`-Eigenschaft ist, wenn sie irgendetwas anderes als einen Fehler auslöst, implementierungsabhängig. Beispielsweise definiert Chrome sie als eigene Daten-Eigenschaft, während Firefox und Safari den initialen poison-pill `Function.prototype.caller`-Accessor erweitern, um `this`-Werte zu behandeln, die nicht-strict functions sind.

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

Diese Eigenschaft ersetzt die veraltete Eigenschaft `arguments.caller` des {{jsxref("Functions/arguments", "arguments")}}-Objekts.

Die spezielle Eigenschaft `__caller__`, die das Aktivierungsobjekt des Anrufers zurückgab und damit erlaubte, den Stack zu rekonstruieren, wurde aus Sicherheitsgründen entfernt.

## Beispiele

### Überprüfung des Werts einer Funktion `caller`-Eigenschaft

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

Beachten Sie, dass Sie im Falle einer Rekursion den Aufruf-Stack nicht mit dieser Eigenschaft rekonstruieren können. Betrachten Sie:

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

Zum Zeitpunkt, an dem `stop()` aufgerufen wird, sieht der Aufruf-Stack so aus:

```plain
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Folgendes ist wahr:

```js
stop.caller === g && f.caller === g && g.caller === f;
```

Wenn Sie also versuchen, die Stack-Trace in der `stop()`-Funktion wie folgt abzurufen:

```js
let f = stop;
let stack = "Stack trace:";
while (f) {
  stack += `\n${f.name}`;
  f = f.caller;
}
```

würde die Schleife niemals enden.

### Strict mode caller

Wenn der Anrufer eine Strict-Mode-Funktion ist, ist der Wert von `caller` `null`.

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
