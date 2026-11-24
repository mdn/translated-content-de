---
title: function*-Ausdruck
slug: Web/JavaScript/Reference/Operators/function*
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Mit dem Schlüsselwort **`function*`** können Sie eine Generatorfunktion innerhalb eines Ausdrucks definieren.

Sie können Generatorfunktionen auch mit einer [`function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) definieren.

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) darf nicht mit dem Schlüsselwort `function` beginnen, um Mehrdeutigkeiten mit einer [`function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) zu vermeiden. Das Schlüsselwort `function` leitet nur dann einen Ausdruck ein, wenn es in einem Kontext steht, in dem keine Anweisungen zulässig sind.

### Parameter

- `name` {{optional_inline}}
  - : Der Name der Funktion. Er kann weggelassen werden; in diesem Fall ist die Funktion _anonym_. Der Name ist nur innerhalb des Funktionskörpers gültig.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Informationen zur Syntax von Parametern finden Sie in der [Referenz zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, aus denen der Funktionskörper besteht.

### Rückgabewert

Ein {{jsxref("GeneratorFunction")}}-Objekt.

## Beschreibung

Ein `function*`-Ausdruck ähnelt einer [`function*`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function*) sehr stark und hat nahezu dieselbe Syntax. Der wichtigste Unterschied zwischen einem `function*`-Ausdruck und einer `function*`-Deklaration ist der _Funktionsname_: In `function*`-Ausdrücken kann er weggelassen werden, um _anonyme_ Funktionen zu erstellen. Ein `function*`-Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden. Sie wird unmittelbar nach ihrer Definition ausgeführt und ermöglicht es Ihnen, ein ad hoc erstelltes [iterierbares Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) zu erzeugen. Weitere Informationen finden Sie im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

## Beispiele

### Einen function\*-Ausdruck verwenden

Das folgende Beispiel definiert eine unbenannte Generatorfunktion und weist sie `x` zu. Die Funktion gibt das Quadrat ihres Arguments mit `yield` zurück:

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
