---
title: Logisches ODER-Zuweisung (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **logische ODER-Zuweisungsoperator (`||=`)** wertet nur den rechten Operanden aus und weist den linken Operanden zu, wenn der linke Operand {{Glossary("falsy", "falsy")}} ist.

{{InteractiveExample("JavaScript Demo: Expressions - Logical OR assignment")}}

```js interactive-example
const a = { duration: 50, title: "" };

a.duration ||= 10;
console.log(a.duration);
// Expected output: 50

a.title ||= "title is empty.";
console.log(a.title);
// Expected output: "title is empty."
```

## Syntax

```js-nolint
x ||= y
```

## Beschreibung

Die logische ODER-Zuweisung [_short-circuits_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x ||= y` äquivalent zu `x || (x = y)` ist, mit der Ausnahme, dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung durchgeführt, wenn die linke Seite nicht falsy ist, aufgrund des Short-Circuiting des [logischen ODER](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)-Operators. Zum Beispiel führt das Folgende nicht zu einem Fehler, obwohl `x` als `const` deklariert ist:

```js
const x = 1;
x ||= 2;
```

Auch das Folgende würde den Setter nicht auslösen:

```js
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("Setter called");
  },
};

x.value ||= 2;
```

Tatsächlich wird `y` überhaupt nicht ausgewertet, wenn `x` nicht falsy ist.

```js
const x = 1;
x ||= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Standardinhalt setzen

Wenn das Element „lyrics“ leer ist, wird ein Standardwert angezeigt:

```js
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

Hier ist das Short-Circuiting besonders vorteilhaft, da das Element nicht unnötig aktualisiert wird und keine unerwünschten Nebenwirkungen wie zusätzliche Parsing- oder Rendering-Arbeiten oder Verlust des Fokus verursacht werden.

> [!NOTE]
> Achten Sie auf den Wert, der von der API zurückgegeben wird, gegen die Sie testen. Wenn ein leerer String zurückgegeben wird (ein {{Glossary("falsy", "falsy")}} Wert), muss `||=` verwendet werden, damit „No lyrics.“ angezeigt wird, anstatt eines leeren Bereichs. Wenn die API jedoch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} im Falle von leerem Inhalt zurückgibt, sollte [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Logisches ODER (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitweises ODER-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
