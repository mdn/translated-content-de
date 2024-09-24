---
title: Logische ODER-Zuweisung (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **logische ODER-Zuweisungsoperator (`||=`)** wertet nur den rechten Operanden aus und weist diesem dem linken zu, wenn der linke Operand {{Glossary("falsy")}} ist.

{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}

## Syntax

```js-nolint
x ||= y
```

## Beschreibung

Die logische ODER-Zuweisung [_short-circuits_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x ||= y` äquivalent zu `x || (x = y)` ist, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung durchgeführt, wenn die linke Seite nicht falsy ist, aufgrund des Short-Circuiting des [logischen OR](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)-Operators. Zum Beispiel wirft das Folgende keinen Fehler, obwohl `x` als `const` deklariert ist:

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

Wenn das "lyrics"-Element leer ist, einen Standardwert anzeigen:

```js
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

Hier ist das Short-Circuit besonders vorteilhaft, da das Element nicht unnötig aktualisiert wird und keine unerwünschten Nebeneffekte wie zusätzlicher Parsing- oder Rendering-Aufwand oder Verlust des Fokus, etc. verursacht.

Hinweis: Achten Sie auf den Wert, den die API zurückgibt, gegen den Sie prüfen. Wenn ein leerer String zurückgegeben wird (ein {{Glossary("falsy")}} Wert), muss `||=` verwendet werden, damit "No lyrics." angezeigt wird, anstelle eines leeren Raumes. Wenn die API jedoch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder
{{jsxref("undefined")}} im Falle von leerem Inhalt zurückgibt, sollte stattdessen [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Logisches ODER (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitweise ODER-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
