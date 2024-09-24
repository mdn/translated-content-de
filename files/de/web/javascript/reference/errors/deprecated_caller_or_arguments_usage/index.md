---
title: "ReferenceError: veraltete Verwendung von caller oder arguments"
slug: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
l10n:
  sourceCommit: faee5a3a8399d43ca3ef49912fcb6cba5be6834c
---

{{jsSidebar("Errors")}}

Die JavaScript-[Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-spezifische Ausnahme
"'caller', 'callee' und 'arguments'-Eigenschaften dürfen bei Strict-Modus-Funktionen oder den Argumenten-Objekten für deren Aufrufe nicht verwendet werden" tritt auf, wenn die
veralteten {{jsxref("Functions/arguments/callee", "arguments.callee")}}, {{jsxref("Function.prototype.caller")}} oder {{jsxref("Function.prototype.arguments")}} Eigenschaften
verwendet werden.

## Meldung

```plain
TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them (V8-based & Firefox)
TypeError: 'arguments', 'callee', and 'caller' cannot be accessed in this context. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}} nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schief gelaufen?

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) werden die Eigenschaften {{jsxref("Functions/arguments/callee", "arguments.callee")}},
{{jsxref("Function.prototype.caller")}} oder {{jsxref("Function.prototype.arguments")}} verwendet, was nicht erlaubt ist. Sie sind veraltet, da sie den Funktionsaufrufer offenlegen, nicht standardisiert sind, schwer zu optimieren und potenziell leistungsschädlich sind.

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

{{jsxref("Function.prototype.arguments")}} ist veraltet (siehe den Referenzartikel für weitere Informationen).

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

- [Veraltete und obsoleta Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)
- [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Function.prototype.arguments")}}
- {{jsxref("Function.prototype.caller")}}
- [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)
