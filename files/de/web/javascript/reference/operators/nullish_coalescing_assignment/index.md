---
title: Nullish-Coalescing-Zuweisung (??=)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Nullish-Coalescing-Zuweisungsoperator (`??=`)**, auch **logischer Nullish-Zuweisungsoperator** genannt, wertet den rechten Operanden nur dann aus und weist ihn der linken Seite zu, wenn der linke Operand {{Glossary("nullish", "nullish")}} ist (`null` oder `undefined`).

{{InteractiveExample("JavaScript Demo: Nullish coalescing assignment (??=) operator")}}

```js interactive-example
const a = { duration: 50 };

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50
```

## Syntax

```js-nolint
x ??= y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 2 (Zuweisung) oder höher. Er wird nur dann ausgewertet und `x` zugewiesen, wenn der ursprüngliche Wert von `x` `null` oder `undefined` ist.

### Rückgabewert

Der Wert von `y`, wenn der ursprüngliche Wert von `x` `null` oder `undefined` ist; andernfalls der ursprüngliche Wert von `x`.

## Beschreibung

Die Nullish-Coalescing-Zuweisung verwendet [_Kurzschlussauswertung_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting). Das bedeutet, dass `x ??= y` gleichbedeutend mit `x ?? (x = y)` ist, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

Wenn die linke Seite nicht nullish ist, erfolgt aufgrund der Kurzschlussauswertung des [Nullish-Coalescing-Operators](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) keine Zuweisung. Beispielsweise löst der folgende Code keinen Fehler aus, obwohl `x` mit `const` deklariert wurde:

```js
const x = 1;
x ??= 2;
```

Auch im folgenden Beispiel wird der Setter nicht aufgerufen:

```js
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("Setter called");
  },
};

x.value ??= 2;
```

Wenn `x` nicht nullish ist, wird `y` überhaupt nicht ausgewertet.

```js
const x = 1;
x ??= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Nullish-Coalescing-Zuweisung verwenden

Sie können den Nullish-Coalescing-Zuweisungsoperator verwenden, um Objekteigenschaften Standardwerte zuzuweisen. Im Vergleich zur Verwendung von Destrukturierung und [Standardwerten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value) wird der Standardwert mit `??=` auch dann zugewiesen, wenn die Eigenschaft den Wert `null` hat.

```js
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nullish-Coalescing-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{Glossary("Nullish", "Nullish")}}
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
