---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`undefined`** globale Eigenschaft repräsentiert den primitiven Wert [`undefined`](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type). Es ist einer von JavaScripts {{Glossary("Primitive", "primitiven Typen")}}.

{{InteractiveExample("JavaScript Demo: undefined")}}

```js interactive-example
function test(t) {
  if (t === undefined) {
    return "Undefined value!";
  }
  return t;
}

let x;

console.log(test(x));
// Expected output: "Undefined value!"
```

## Wert

Der primitive Wert [`undefined`](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`undefined` ist eine Eigenschaft des _globalen Objekts_. Das bedeutet, es ist eine Variable im globalen Bereich.

In allen nicht veralteten Browsern ist `undefined` eine nicht konfigurierbare, nicht beschreibbare Eigenschaft. Auch wenn dies nicht der Fall ist, vermeiden Sie, es zu überschreiben.

Eine Variable, der kein Wert zugewiesen wurde, hat den Typ `undefined`. Eine Methode oder Anweisung gibt ebenfalls `undefined` zurück, wenn der ausgewerteten Variable kein Wert zugewiesen wurde. Eine Funktion gibt `undefined` zurück, wenn kein Wert {{jsxref("Statements/return", "zurückgegeben")}} wurde.

> [!NOTE]
> Auch wenn Sie `undefined` als {{Glossary("identifier", "Bezeichner")}} (Variablenname) in jedem Bereich außer dem globalen Bereich verwenden können (weil `undefined` kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist), ist dies eine sehr schlechte Idee, die Ihren Code schwer wartbar und fehleranfällig macht.
>
> ```js example-bad
> // TUN SIE DAS NICHT
>
> (() => {
>   const undefined = "foo";
>   console.log(undefined, typeof undefined); // foo string
> })();
>
> ((undefined) => {
>   console.log(undefined, typeof undefined); // foo string
> })("foo");
> ```

## Beispiele

### Strikte Gleichheit und undefined

Sie können `undefined` und die strikten Gleichheits- und Ungleichheitsoperatoren verwenden, um festzustellen, ob eine Variable einen Wert hat. Im folgenden Code ist die Variable `x` nicht initialisiert, und die `if`-Anweisung wird als wahr ausgewertet.

```js
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}
```

> [!NOTE]
> Hier muss der _strikte Gleichheits_ Operator (im Gegensatz zum _standardmäßigen Gleichheits_ Operator) verwendet werden, da `x == undefined` auch überprüft, ob `x` `null` ist, während die strikte Gleichheit dies nicht tut. Dies liegt daran, dass `null` nicht gleich `undefined` ist.
>
> Siehe [Vergleich und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness) für Details.

### typeof Operator und undefined

Alternativ kann {{jsxref("Operators/typeof", "typeof")}} verwendet werden:

```js
let x;
if (typeof x === "undefined") {
  // these statements execute
}
```

Ein Grund, {{jsxref("Operators/typeof", "typeof")}} zu verwenden, ist, dass es keinen Fehler auslöst, wenn die Variable nicht deklariert wurde.

```js
// x has not been declared before
// evaluates to true without errors
if (typeof x === "undefined") {
  // these statements execute
}

// Throws a ReferenceError
if (x === undefined) {
}
```

Es gibt jedoch eine andere Alternative. JavaScript ist eine statisch gescoped Sprache, daher kann festgestellt werden, ob eine Variable deklariert ist, indem geprüft wird, ob sie in einem umgebenden Kontext deklariert ist.

Der globale Bereich ist an das {{jsxref("globalThis", "globale Objekt", "", 1)}} gebunden, daher kann die Existenz einer Variablen im globalen Kontext durch Überprüfen der Existenz einer Eigenschaft auf dem _globalen Objekt_ mit dem {{jsxref("Operators/in", "in")}} Operator festgestellt werden, zum Beispiel:

```js
if ("x" in window) {
  // These statements execute only if x is defined globally
}
```

### void Operator und undefined

Der {{jsxref("Operators/void", "void")}} Operator ist eine dritte Alternative.

```js
let x;
if (x === void 0) {
  // these statements execute
}

// y has not been declared before
if (y === void 0) {
  // throws Uncaught ReferenceError: y is not defined
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
