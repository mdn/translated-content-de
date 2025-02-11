---
title: function* expression
slug: Web/JavaScript/Reference/Operators/function*
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Das **`function*`** Schlüsselwort kann verwendet werden, um eine Generatorfunktion innerhalb eines Ausdrucks zu definieren.

Sie können Generatorfunktionen auch mithilfe der [`function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren.

{{InteractiveExample("JavaScript Demo: Expressions - function* expression", "taller")}}

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, um Verwechslungen mit einer [`function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) zu vermeiden. Das Schlüsselwort `function` leitet nur dann einen Ausdruck ein, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, wodurch die Funktion _anonym_ wird. Der Name ist nur lokal im Funktionskörper verfügbar.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Die Syntax der Parameter finden Sie im [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion ausmachen.

## Beschreibung

Ein `function*`-Ausdruck ist dem [`function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `function*`-Ausdruck und einer `function*`-Deklaration ist der _Funktionsname_, der in `function*`-Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `function*`-Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden, die sofort nach ihrer Definition ausgeführt wird. Dies ermöglicht es Ihnen, ein Ad-hoc-[iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zu erstellen. Weitere Informationen finden Sie auch im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

## Beispiele

### Verwendung von function\* Ausdruck

Das folgende Beispiel definiert eine unbenannte Generatorfunktion und weist diese `x` zu. Die Funktion gibt das Quadrat ihres Arguments zurück:

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

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("GeneratorFunction")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
