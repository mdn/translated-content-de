---
title: Logische ODER-Zuweisung (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **logische ODER-Zuweisungsoperator (`||=`)** wertet nur den rechten Operanden aus und weist ihn dem linken Operanden zu, wenn der linke Operanden {{Glossary("falsy", "falsy")}} ist.

{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}

## Syntax

```js-nolint
x ||= y
```

## Beschreibung

Die logische ODER-Zuweisung [_short-circuits_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x ||= y` äquivalent zu `x || (x = y)` ist, außer dass der Ausdruck `x` nur einmal evaluiert wird.

Es wird keine Zuweisung vorgenommen, wenn die linke Seite nicht falsy ist, aufgrund des Short-Circuitings des [logischen ODER](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) Operators. Zum Beispiel verursacht das folgende keinen Fehler, obwohl `x` `const` ist:

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

Tatsächlich wird `y` überhaupt nicht evaluiert, wenn `x` nicht falsy ist.

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

Hier ist das Short-Circuiting besonders vorteilhaft, da das Element nicht unnötig aktualisiert wird und keine unerwünschten Nebenwirkungen wie zusätzliche Parsing- oder Rendering-Arbeiten oder Verlust des Fokus verursacht werden.

> [!NOTE]
> Achten Sie auf den Wert, der von der API zurückgegeben wird, gegen die Sie prüfen. Wenn eine leere Zeichenfolge zurückgegeben wird (ein {{Glossary("falsy", "falsy")}} Wert), muss `||=` verwendet werden, damit "No lyrics." anstelle eines leeren Raums angezeigt wird. Wenn die API jedoch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} im Falle von leerem Inhalt zurückgibt, sollte [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Logisches ODER (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitweises ODER-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy", "Truthy")}}
- {{Glossary("Falsy", "Falsy")}}
