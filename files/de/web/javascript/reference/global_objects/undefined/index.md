---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Objects")}}

Die **`undefined`**-globale Eigenschaft repräsentiert den primitiven Wert [`undefined`](/de/docs/Web/JavaScript/Data_structures#undefined_type). Es ist einer der {{Glossary("Primitive", "primitiven Typen")}} in JavaScript.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - undefined")}}

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

Der primitive Wert [`undefined`](/de/docs/Web/JavaScript/Data_structures#undefined_type).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`undefined` ist eine Eigenschaft des _globalen Objekts_. Das bedeutet, es ist eine Variable im globalen Kontext.

In allen modernen Browsern ist `undefined` eine nicht konfigurierbare und nicht beschreibbare Eigenschaft. Selbst wenn dies nicht der Fall ist, sollten Sie ein Überschreiben vermeiden.

Eine Variable, der kein Wert zugewiesen wurde, hat den Typ `undefined`. Eine Methode oder Anweisung gibt ebenfalls `undefined` zurück, wenn die zu bewertende Variable keinen zugewiesenen Wert hat. Eine Funktion gibt `undefined` zurück, wenn kein Wert {{jsxref("Statements/return", "zurückgegeben")}} wurde.

> [!NOTE]
> Obwohl Sie `undefined` als {{Glossary("identifier", "Identifier")}} (Variablenname) in jedem Kontext außer dem globalen Kontext verwenden können (da `undefined` kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist), ist dies eine sehr schlechte Idee, die Ihren Code schwer wartbar und fehleranfällig macht.
>
> ```js example-bad
> // NICHT TUN
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

Sie können `undefined` sowie die Operatoren der strikten Gleichheit und Ungleichheit verwenden, um festzustellen, ob eine Variable einen Wert hat. Im folgenden Code ist die Variable `x` nicht initialisiert, und die `if`-Anweisung wird als wahr ausgewertet.

```js
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}
```

> [!NOTE]
> Der Operator der _strikten Gleichheit_ (im Gegensatz zum
> Operator der _Standardgleichheit_) muss hier verwendet werden, weil
> `x == undefined` auch prüft, ob `x` `null` ist,
> während die strikte Gleichheit dies nicht tut. Das liegt daran, dass `null` nicht gleich `undefined` ist.
>
> Weitere Informationen finden Sie unter [Equality comparison and sameness](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness).

### typeof-Operator und undefined

Alternativ kann {{jsxref("Operators/typeof", "typeof")}} verwendet werden:

```js
let x;
if (typeof x === "undefined") {
  // these statements execute
}
```

Ein Grund für die Verwendung von {{jsxref("Operators/typeof", "typeof")}} ist, dass kein Fehler ausgelöst wird, wenn die Variable nicht deklariert wurde.

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

Es gibt jedoch eine weitere Alternative. JavaScript ist eine statisch gescoped Sprache, daher kann festgestellt werden, ob eine Variable deklariert ist, indem geprüft wird, ob sie in einem umgebenden Kontext deklariert ist.

Der globale Kontext ist an das {{jsxref("globalThis", "globale Objekt", "", 1)}} gebunden. Daher kann die Existenz einer Variablen im globalen Kontext überprüft werden, indem die Existenz einer Eigenschaft im _globalen Objekt_ geprüft wird, z. B. mit dem {{jsxref("Operators/in", "in")}}-Operator:

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

- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
