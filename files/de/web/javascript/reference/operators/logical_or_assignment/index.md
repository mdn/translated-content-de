---
title: Logische Oder-Zuweisung (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **logische Oder-Zuweisungsoperator (`||=`)** wertet nur den rechten Operanden aus und weist den linken zu, wenn der linke Operand {{Glossary("falsy", "falsy")}} ist.

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

Die logische Oder-Zuweisung [_short-circuits_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x ||= y` äquivalent zu `x || (x = y)` ist, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung vorgenommen, wenn der linke Ausdruck nicht falsy ist, aufgrund des Short-Circuiting des [logischen Oder](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)-Operators. Zum Beispiel wird das Folgende keinen Fehler auslösen, obwohl `x` eine `const` ist:

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

### Standardinhalt festlegen

Wenn das Element "lyrics" leer ist, wird ein Standardwert angezeigt:

```js
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

Hier ist das Short-Circuiting besonders vorteilhaft, da das Element nicht unnötig aktualisiert wird und keine unerwünschten Nebenwirkungen wie zusätzliches Parsing oder Rendering oder Verlust des Fokus verursacht.

> [!NOTE]
> Achten Sie auf den Wert, der von der API zurückgegeben wird, die Sie überprüfen. Wenn ein leerer String zurückgegeben wird (ein {{Glossary("falsy", "falsy")}} Wert), muss `||=` verwendet werden, damit "Keine Lyrics." anstelle eines Leerzeichens angezeigt wird. Wenn die API jedoch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} bei leerem Inhalt zurückgibt, sollte stattdessen [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Logisches Oder (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitweises Oder-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
