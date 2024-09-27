---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die globale Eigenschaft **`undefined`** repräsentiert den primitiven Wert [`undefined`](/de/docs/Web/JavaScript/Data_structures#undefined_type). Es ist einer der [primitiven Typen](/de/docs/Glossary/Primitive) von JavaScript.

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## Wert

Der primitive Wert [`undefined`](/de/docs/Web/JavaScript/Data_structures#undefined_type).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`undefined` ist eine Eigenschaft des _globalen Objekts_. Das bedeutet, es ist eine Variable im globalen Geltungsbereich.

In allen nicht-veralteten Browsern ist `undefined` eine nicht konfigurierbare, nicht beschreibbare Eigenschaft. Selbst wenn dies nicht der Fall ist, sollten Sie vermeiden, sie zu überschreiben.

Eine Variable, die keinen Wert zugewiesen bekommen hat, ist vom Typ `undefined`. Eine Methode oder Anweisung gibt ebenfalls `undefined` zurück, wenn die ausgewertete Variable keinen zugewiesenen Wert hat. Eine Funktion gibt `undefined` zurück, wenn kein Wert {{jsxref("Statements/return", "zurückgegeben")}} wurde.

> [!NOTE]
> Obwohl Sie `undefined` als [Bezeichner](/de/docs/Glossary/identifier) (Variablenname) in jedem Geltungsbereich außer dem globalen verwenden können (da `undefined` kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist), ist dies eine sehr schlechte Idee. Es macht Ihren Code schwer wartbar und schwer zu debuggen.
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

Sie können `undefined` sowie die strikten Gleichheits- und Ungleichheitsoperatoren verwenden, um zu bestimmen, ob eine Variable einen Wert hat. Im folgenden Code wird die Variable `x` nicht initialisiert und die `if`-Anweisung ergibt `true`.

```js
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}
```

> [!NOTE]
> Der \_strikte Gleichheits_Operator (im Gegensatz zum \_Standard-Gleichheits_Operator) muss hier verwendet werden, weil `x == undefined` ebenfalls überprüft, ob `x` `null` ist, während die strikte Gleichheit dies nicht tut. Dies liegt daran, dass `null` nicht gleichbedeutend mit `undefined` ist.
>
> Siehe [Gleichheitsvergleich und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness) für Details.

### typeof-Operator und undefined

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

Es gibt jedoch eine weitere Alternative. JavaScript ist eine statisch gescoppte Sprache, daher kann man erkennen, ob eine Variable deklariert ist, indem man prüft, ob sie in einem umschließenden Kontext deklariert ist.

Der globale Geltungsbereich ist an das {{jsxref("globalThis", "globale Objekt", "", 1)}} gebunden, so dass die Existenz einer Variablen im globalen Kontext durch Überprüfen der Existenz einer Eigenschaft auf dem _globalen Objekt_ geprüft werden kann, indem man den {{jsxref("Operators/in", "in")}} Operator verwendet, zum Beispiel:

```js
if ("x" in window) {
  // These statements execute only if x is defined globally
}
```

### void-Operator und undefined

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

- [JavaScript Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
