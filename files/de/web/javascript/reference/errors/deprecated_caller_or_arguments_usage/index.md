---
title: "TypeError: Die Eigenschaften 'caller', 'callee' und 'arguments' können nicht aufgerufen werden"
slug: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
l10n:
  sourceCommit: 1cfd3388d77b149a8ff01ec6f570889ba50057dc
---

{{jsSidebar("Errors")}}

Die ausschließlich im JavaScript-[Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) auftretende Ausnahme
"'caller', 'callee', und 'arguments' Eigenschaften können in Strict-Mode-Funktionen oder den arguments-Objekten für Aufrufe an sie nicht abgefragt werden", tritt auf, wenn die
veralteten Eigenschaften {{jsxref("Functions/arguments/callee", "arguments.callee")}}, {{jsxref("Function.prototype.caller")}} oder {{jsxref("Function.prototype.arguments")}} verwendet werden.

## Nachricht

```plain
TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them (V8-based & Firefox)
TypeError: 'arguments', 'callee', and 'caller' cannot be accessed in this context. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}} nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) werden die Eigenschaften {{jsxref("Functions/arguments/callee", "arguments.callee")}},
{{jsxref("Function.prototype.caller")}} oder {{jsxref("Function.prototype.arguments")}} verwendet,
obwohl sie es nicht sollten. Sie sind veraltet, da sie den Funktionsaufrufer preisgeben, nicht standardisiert sind, schwer zu optimieren und potenziell eine leistungsschädliche Funktion darstellen können.

## Beispiele

### Veraltete function.caller oder arguments.callee

{{jsxref("Function.prototype.caller")}} und
[`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
sind veraltet (siehe die Referenzartikel für weitere Informationen).

```js example-bad
"use strict";

function myFunc() {
  if (myFunc.caller === null) {
    return "The function was called from the top!";
  } else {
    return `This function's caller was ${myFunc.caller}`;
  }
}

myFunc();
// TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```

### Function.prototype.arguments

{{jsxref("Function.prototype.arguments")}} ist veraltet (siehe den Referenzartikel für weitere
Informationen).

```js example-bad
"use strict";

function f(n) {
  g(n - 1);
}

function g(n) {
  console.log(`before: ${g.arguments[0]}`);
  if (n > 0) {
    f(n);
  }
  console.log(`after: ${g.arguments[0]}`);
}

f(2);

console.log(`returned: ${g.arguments}`);
// TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```

## Siehe auch

- [Veraltete und obsolete Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
- [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Function.prototype.arguments")}}
- {{jsxref("Function.prototype.caller")}}
- [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
