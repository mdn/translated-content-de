---
title: function* Ausdruck
slug: Web/JavaScript/Reference/Operators/function*
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Das **`function*`** Schlüsselwort kann verwendet werden, um eine Generatorfunktion innerhalb eines Ausdrucks zu definieren.

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
  str += val;
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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, um Verwechslungen mit einer [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) zu vermeiden. Das `function` Schlüsselwort beginnt einen Ausdruck nur dann, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden. In diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal innerhalb des Funktionskörpers.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters) für die Syntax der Parameter.
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `function*` Ausdruck ist dem [`function*` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `function*` Ausdruck und einer `function*` Deklaration ist der _Funktionsname_, der in `function*` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `function*` Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Sofort Aufgerufenes Funktionsausdruck) verwendet werden, das ausgeführt wird, sobald es definiert ist. Dies ermöglicht es Ihnen, ein Ad-hoc [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zu erstellen. Weitere Informationen finden Sie auch im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

## Beispiele

### Verwendung des function\* Ausdrucks

Das folgende Beispiel definiert eine unbenannte Generatorfunktion und weist sie `x` zu. Die Funktion liefert das Quadrat ihres Arguments:

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
