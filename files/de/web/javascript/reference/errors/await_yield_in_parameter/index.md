---
title: "SyntaxError: await/yield expression kann nicht im Parameter verwendet werden"
slug: Web/JavaScript/Reference/Errors/await_yield_in_parameter
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "await expression can't be used in parameter" oder "yield expression can't be used in parameter" tritt auf, wenn der [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) den Ausdruck {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} enthält und die Auswertung des Standardparameters pausiert.

## Meldung

```plain
SyntaxError: Illegal await-expression in formal parameters of async function (V8-based)
SyntaxError: await expression can't be used in parameter (Firefox)
SyntaxError: Cannot use 'await' within a parameter default expression. (Safari)

SyntaxError: Yield expression not allowed in formal parameter (V8-based)
SyntaxError: yield expression can't be used in parameter (Firefox)
SyntaxError: Unexpected keyword 'yield'. Cannot use yield expression within parameters. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schief gelaufen?

Der Standardausdruck muss _synchron_ ausgewertet werden können. Falls er einen `await`- oder `yield`-Ausdruck enthält, pausiert dies die Auswertung des Standardausdrucks, was nicht erlaubt ist.

> [!NOTE]
> Dieser Fehler wird nur generiert, wenn `await` oder `yield` gültige Operatoren in diesem Funktionskontext sind. Andernfalls würden `await` oder `yield` als Bezeichner geparst, was entweder keinen Fehler verursacht oder einen Fehler wie "reservierter Bezeichner" oder "unerwartetes Token" hervorruft, wenn ein Ausdruck darauf folgt.

## Beispiele

### Ungültige Fälle

```js example-bad
function *gen(a = yield 1) {}

async function f(a = await Promise.resolve(1)) {}
```

### Gültige Fälle

Sie können die [Nullish-Zuordnungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) verwenden, um einen Standardwert bereitzustellen. Wenn Sie `null` und `undefined` unterschiedlich behandeln möchten, müssen Sie eine Bedingung verwenden.

```js example-good
function* gen(a) {
  a ??= yield 1;
}

async function f(a) {
  a ??= await Promise.resolve(1);
}
```

Sie dürfen auch `await` oder `yield` verwenden, wenn sich der Ausdruck in einem Funktionsausdruck der Initialisierung befindet und die Auswertung des Standardausdrucks nicht pausiert.

```js example-good
async function f(a = (async () => await Promise.resolve(1))()) {}
```

## Siehe auch

- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Operators/yield", "yield")}}
