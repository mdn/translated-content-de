---
title: Logical OR Zuweisung (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Logical OR Zuweisungsoperator (`||=`)** wertet nur den rechten Operanden aus und weist ihn dem linken zu, wenn der linke Operand {{Glossary("falsy", "falsy")}} ist.

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

## Beschreibung

Die Logical OR Zuweisung [_short-circuiting_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x ||= y` gleichbedeutend mit `x || (x = y)` ist, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es erfolgt keine Zuweisung, wenn die linke Seite nicht falsy ist, aufgrund des Short-Circuitings des [Logical OR](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) Operators. Zum Beispiel wirft das folgende keinen Fehler, obwohl `x` eine `const` ist:

```js
const x = 1;
x ||= 2;
```

Ebenso würde das folgende nicht den Setter auslösen:

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

Tatsächlich wird, wenn `x` nicht falsy ist, `y` überhaupt nicht ausgewertet.

```js
const x = 1;
x ||= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Standardinhalt festlegen

Wenn das "lyrics"-Element leer ist, wird ein Standardwert angezeigt:

```js
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

Hier ist das Short-Circuiting besonders vorteilhaft, da das Element nicht unnötig aktualisiert wird und keine unerwünschten Nebeneffekte wie zusätzlicher Parsing- oder Rendering-Aufwand oder Verlust des Fokus verursacht werden.

> [!NOTE]
> Achten Sie auf den Wert, den die API zurückliefert, gegen die Sie prüfen. Wenn eine leere Zeichenfolge zurückgegeben wird (ein {{Glossary("falsy", "falsy")}} Wert), muss `||=` verwendet werden, damit "Keine Lyrics." angezeigt wird, anstatt eines leeren Raums. Wenn die API jedoch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder
> {{jsxref("undefined")}} im Fall von leerem Inhalt zurückgibt, sollte stattdessen [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Logical OR (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitwise OR assignment (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
