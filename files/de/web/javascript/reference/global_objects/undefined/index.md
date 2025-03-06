---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Objects")}}

Die globale Eigenschaft **`undefined`** repräsentiert den primitiven Wert [`undefined`](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type). Sie ist einer der JavaScript- {{Glossary("Primitive", "primitiven Typen")}}.

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

Der primitive Wert [`undefined`](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`undefined` ist eine Eigenschaft des _globalen Objekts_. Das heißt, es ist eine Variable im globalen Geltungsbereich.

In allen Nicht-Alt-Browsern ist `undefined` eine nicht konfigurierbare, nicht beschreibbare Eigenschaft. Selbst wenn das nicht der Fall ist, vermeiden Sie es, diese zu überschreiben.

Eine Variable, der kein Wert zugewiesen wurde, hat den Typ `undefined`. Eine Methode oder Anweisung gibt ebenfalls `undefined` zurück, wenn die zu untersuchende Variable keinen zugewiesenen Wert hat. Eine Funktion gibt `undefined` zurück, wenn kein Wert {{jsxref("Statements/return", "zurückgegeben")}} wurde.

> [!NOTE]
> Auch wenn Sie `undefined` als {{Glossary("identifier", "Bezeichner")}} (Variablenname) in jedem anderen Geltungsbereich außer dem globalen verwenden können (weil `undefined` kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist), ist dies eine sehr schlechte Idee, die Ihren Code schwer wartbar und zu debuggen macht.
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

Sie können `undefined` und die strikten Gleichheits- und Ungleichheitsoperatoren verwenden, um festzustellen, ob eine Variable einen Wert hat. Im folgenden Code ist die Variable `x` nicht initialisiert und die `if`-Anweisung wird als wahr ausgewertet.

```js
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}
```

> [!NOTE]
> Der _strikte Gleichheitsoperator_ (im Gegensatz zum _normalen Gleichheitsoperator_) muss hier verwendet werden, weil `x == undefined` auch prüft, ob `x` `null` ist, während strikte Gleichheit das nicht tut. Das liegt daran, dass `null` nicht gleich `undefined` ist.
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

Ein Grund für die Verwendung von {{jsxref("Operators/typeof", "typeof")}} ist, dass es keinen Fehler auslöst, wenn die Variable nicht deklariert wurde.

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

Es gibt jedoch eine andere Alternative. JavaScript ist eine statisch typisierte Sprache, sodass Sie durch das Lesen des umgebenden Kontexts feststellen können, ob eine Variable deklariert wurde.

Der globale Geltungsbereich ist an das {{jsxref("globalThis", "globale Objekt", "", 1)}} gebunden, sodass die Existenz einer Variablen im globalen Kontext durch Überprüfung der Existenz einer Eigenschaft auf dem _globalen Objekt_ überprüft werden kann, indem man zum Beispiel den {{jsxref("Operators/in", "in")}} Operator verwendet:

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
