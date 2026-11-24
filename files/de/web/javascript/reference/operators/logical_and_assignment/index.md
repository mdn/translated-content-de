---
title: Logische UND-Zuweisung (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator für die **logische UND-Zuweisung (`&&=`)** wertet den rechten Operanden nur dann aus und weist ihn dem linken zu, wenn der linke Operand {{Glossary("truthy", "truthy")}} ist.

{{InteractiveExample("JavaScript Demo: Logical AND assignment (&&=) operator")}}

```js interactive-example
let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0
```

## Syntax

```js-nolint
x &&= y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung). Er wird nur ausgewertet und `x` zugewiesen, wenn der ursprüngliche Wert von `x` {{Glossary("truthy", "truthy")}} ist.

### Rückgabewert

Der Wert von `y`, wenn der ursprüngliche Wert von `x` truthy ist; andernfalls der ursprüngliche Wert von `x`.

## Beschreibung

Bei der logischen UND-Zuweisung wird die Auswertung [kurzgeschlossen](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting). Das bedeutet, dass `x &&= y` gleichbedeutend mit `x && (x = y)` ist, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

Wenn die linke Seite nicht truthy ist, findet wegen der Kurzschlussauswertung des Operators für [logisches UND](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND) keine Zuweisung statt. Das folgende Beispiel löst daher keinen Fehler aus, obwohl `x` mit `const` deklariert wurde:

```js
const x = 0;
x &&= 2;
```

Auch das folgende Beispiel ruft den Setter nicht auf:

```js
const x = {
  get value() {
    return 0;
  },
  set value(v) {
    console.log("Setter called");
  },
};

x.value &&= 2;
```

Ist `x` nicht truthy, wird `y` überhaupt nicht ausgewertet.

```js
const x = 0;
x &&= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Logische UND-Zuweisung verwenden

```js
let x = 0;
let y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Logisches UND (`&&`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Nullish-Coalescing-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitweise UND-Zuweisung (`&=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
