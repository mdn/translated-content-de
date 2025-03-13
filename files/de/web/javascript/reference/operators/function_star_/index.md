---
title: function* Ausdruck
slug: Web/JavaScript/Reference/Operators/function*
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Das **`function*`** Schlüsselwort kann verwendet werden, um eine Generatorfunktion in einem Ausdruck zu definieren.

Sie können Generatorfunktionen auch mit der [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren.

{{InteractiveExample("JavaScript Demo: function* expression", "taller")}}

```js interactive-example
const foo = function* () {
  yield "a";
  yield "b";
  yield "c";
};

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"
```

## Syntax

```js-nolint
function* (param0) {
  statements
}
function* (param0, param1) {
  statements
}
function* (param0, param1, /* …, */ paramN) {
  statements
}

function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, um Mehrdeutigkeiten mit einer [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) zu vermeiden. Das `function` Schlüsselwort beginnt nur dann einen Ausdruck, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal im Funktionskörper bekannt.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Informationen zur Syntax der Parameter finden Sie im [Funktionen-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `function*` Ausdruck ist dem [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `function*` Ausdruck und einer `function*` Deklaration ist der _Funktionsname_, der bei `function*` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `function*` Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Sofort Ausgeführter Funktionsausdruck) verwendet werden, der ausgeführt wird, sobald er definiert ist. Dies ermöglicht es Ihnen, ein ad-hoc [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zu erstellen. Weitere Informationen finden Sie auch im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

## Beispiele

### Verwendung des function\* Ausdrucks

Das folgende Beispiel definiert eine unbenannte Generatorfunktion und weist sie `x` zu. Die Funktion gibt das Quadrat ihres Arguments zurück:

```js
const x = function* (y) {
  yield y * y;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)-Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("GeneratorFunction")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
