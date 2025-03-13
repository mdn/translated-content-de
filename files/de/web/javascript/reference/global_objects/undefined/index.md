---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Objects")}}

Die **`undefined`** globale Eigenschaft repräsentiert den primitiven Wert [`undefined`](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type). Es ist einer der {{Glossary("Primitive", "primitiven Datentypen")}} von JavaScript.

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

`undefined` ist eine Eigenschaft des _globalen Objekts_. Das bedeutet, dass es eine Variable im globalen Gültigkeitsbereich ist.

In allen nicht-veralteten Browsern ist `undefined` eine nicht-konfigurierbare, nicht-beschreibbare Eigenschaft. Selbst wenn dies nicht der Fall ist, sollte eine Überschreibung vermieden werden.

Eine Variable, der kein Wert zugewiesen wurde, hat den Typ `undefined`. Eine Methode oder Anweisung gibt ebenfalls `undefined` zurück, wenn die Variable, die ausgewertet wird, keinen zugewiesenen Wert hat. Eine Funktion gibt `undefined` zurück, wenn kein Wert {{jsxref("Statements/return", "zurückgegeben")}} wurde.

> [!NOTE]
> Obwohl Sie `undefined` als {{Glossary("identifier", "Bezeichner")}} (Variablenname) in jedem Bereich außer dem globalen Bereich (weil `undefined` kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist) verwenden können, ist dies eine sehr schlechte Idee, die Ihren Code schwer wartbar und zu debuggen macht.
>
> ```js example-bad
> // MACHEN SIE DAS NICHT
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

Sie können `undefined` und die strikten Gleichheits- und Ungleichheitsoperatoren verwenden, um festzustellen, ob eine Variable einen Wert hat. Im folgenden Code ist die Variable `x` nicht initialisiert, und die `if`-Anweisung wertet zu wahr aus.

```js
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}
```

> [!NOTE]
> Der _strikte Gleichheitsoperator_ (im Gegensatz zum
> _standardmäßigen Gleichheitsoperator_) muss hier verwendet werden, da
> `x == undefined` auch prüft, ob `x` `null` ist,
> während strikte Gleichheit das nicht tut. Dies liegt daran, dass `null` nicht gleich
> `undefined` ist.
>
> Siehe [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness) für Details.

### typeof-Operator und undefined

Alternativ kann {{jsxref("Operators/typeof", "typeof")}} verwendet werden:

```js
let x;
if (typeof x === "undefined") {
  // these statements execute
}
```

Ein Grund, {{jsxref("Operators/typeof", "typeof")}} zu verwenden, ist, dass es keinen
Fehler auslöst, wenn die Variable nicht deklariert wurde.

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

Es gibt jedoch eine weitere Alternative. JavaScript ist eine statisch gescoptete Sprache, daher kann festgestellt werden, ob eine Variable deklariert ist, indem geprüft wird, ob sie in einem umgebenden Kontext deklariert ist.

Der globale Gültigkeitsbereich ist an das {{jsxref("globalThis", "globale Objekt", "", 1)}} gebunden, daher kann die Existenz einer Variablen im globalen Kontext überprüft werden, indem das Vorhandensein einer Eigenschaft am _globalen Objekt_ mit dem {{jsxref("Operators/in", "in")}}-Operator überprüft wird, zum Beispiel:

```js
if ("x" in window) {
  // These statements execute only if x is defined globally
}
```

### void-Operator und undefined

Der {{jsxref("Operators/void", "void")}}-Operator ist eine dritte Alternative.

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

- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
