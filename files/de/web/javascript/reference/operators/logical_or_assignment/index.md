---
title: Logische ODER-Zuweisung (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator für die **logische ODER-Zuweisung (`||=`)** wertet den rechten Operanden nur dann aus und weist ihn dem linken Operanden zu, wenn der linke Operand {{Glossary("falsy", "falsy")}} ist.

{{InteractiveExample("JavaScript Demo: Logical OR assignment (||=) operator")}}

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

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 2 (Zuweisung) oder höher. Er wird nur ausgewertet und `x` zugewiesen, wenn der ursprüngliche Wert von `x` {{Glossary("falsy", "falsy")}} ist.

### Rückgabewert

Der Wert von `y`, wenn der ursprüngliche Wert von `x` falsy ist; andernfalls der ursprüngliche Wert von `x`.

## Beschreibung

Die logische ODER-Zuweisung verwendet [_Kurzschlussauswertung_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting). Das bedeutet, dass `x ||= y` gleichbedeutend mit `x || (x = y)` ist, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

Wenn die linke Seite nicht falsy ist, erfolgt aufgrund der Kurzschlussauswertung des Operators für [logisches ODER](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) keine Zuweisung. Daher löst das folgende Beispiel keinen Fehler aus, obwohl `x` als `const` deklariert ist:

```js
const x = 1;
x ||= 2;
```

Auch das folgende Beispiel ruft den Setter nicht auf:

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

Wenn `x` nicht falsy ist, wird `y` überhaupt nicht ausgewertet.

```js
const x = 1;
x ||= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Standardinhalt festlegen

Wenn das Element „lyrics“ leer ist, wird ein Standardwert angezeigt:

```js
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

Die Kurzschlussauswertung ist hier besonders nützlich: Das Element wird nicht unnötig aktualisiert. So werden unerwünschte Nebeneffekte wie zusätzlicher Aufwand für das Parsen oder Rendern oder der Verlust des Fokus vermieden.

Hinweis: Achten Sie darauf, welchen Wert die überprüfte API zurückgibt. Wenn sie eine leere Zeichenfolge zurückgibt (einen {{Glossary("falsy", "falsy")}}-Wert), muss `||=` verwendet werden, damit „No lyrics.“ statt einer leeren Stelle angezeigt wird. Gibt die API bei leerem Inhalt dagegen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} zurück, sollte stattdessen [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Logisches ODER (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Nullish-Coalescing-Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitweise ODER-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
