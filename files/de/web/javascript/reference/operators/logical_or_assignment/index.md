---
title: Logische ODER-Zuweisung (||=)
slug: Web/JavaScript/Reference/Operators/Logical_OR_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

Der **logische ODER-Zuweisungsoperator (`||=`)** wertet nur den rechten Operanden aus und weist den linken Operanden zu, wenn der linke Operanden [falsy](/de/docs/Glossary/falsy) ist.

{{EmbedInteractiveExample("pages/js/expressions-logical-or-assignment.html")}}

## Syntax

```js-nolint
x ||= y
```

## Beschreibung

Die logische ODER-Zuweisung [_short-circuits_](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting), was bedeutet, dass `x ||= y` äquivalent zu `x || (x = y)` ist, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

Es wird keine Zuweisung durchgeführt, wenn die linke Seite nicht falsy ist, aufgrund des Short-Circuitings des [logischen ODER-Operators](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR). Zum Beispiel wirft Folgendes keinen Fehler, obwohl `x` eine `const` ist:

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

Tatsächlich wird, wenn `x` nicht falsy ist, `y` überhaupt nicht ausgewertet.

```js
const x = 1;
x ||= console.log("y evaluated");
// Logs nothing
```

## Beispiele

### Standardinhalt festlegen

Wenn das "lyrics"-Element leer ist, zeigen Sie einen Standardwert an:

```js
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

Hier ist das Short-Circuit besonders vorteilhaft, da das Element nicht unnötig aktualisiert wird und keine unerwünschten Nebenwirkungen wie zusätzliche Parsing- oder Renderarbeiten oder der Verlust des Fokus etc. verursacht werden.

> [!NOTE]
> Achten Sie auf den Wert, der von der API zurückgegeben wird, gegen die Sie prüfen. Wenn eine leere Zeichenfolge zurückgegeben wird (ein [falsy](/de/docs/Glossary/falsy) Wert), muss `||=` verwendet werden, damit "Keine Lyrics." anstelle eines leeren Raums angezeigt wird. Wenn die API jedoch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} im Falle leerer Inhalte zurückgibt, sollte [`??=`](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment) verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Logisches ODER (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Bitweises ODER-Zuweisung (`|=`)](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
- [Truthy](/de/docs/Glossary/Truthy)
- [Falsy](/de/docs/Glossary/Falsy)
