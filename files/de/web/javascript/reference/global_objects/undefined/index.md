---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die **`undefined`** globale Eigenschaft repräsentiert den primitiven Wert [`undefined`](/de/docs/Web/JavaScript/Data_structures#undefined_type). Es ist einer der JavaScript {{Glossary("Primitive", "primitiven Typen")}}.

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## Wert

Der primitive Wert [`undefined`](/de/docs/Web/JavaScript/Data_structures#undefined_type).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`undefined` ist eine Eigenschaft des _globalen Objekts_. Das heißt, es ist eine Variable im globalen Scope.

In allen nicht-veralteten Browsern ist `undefined` eine nicht-konfigurierbare, nicht beschreibbare Eigenschaft. Auch wenn dies nicht der Fall ist, vermeiden Sie, es zu überschreiben.

Eine Variable, der kein Wert zugewiesen wurde, hat den Typ `undefined`. Auch eine Methode oder Anweisung gibt `undefined` zurück, wenn die zu evaluierende Variable keinen zugewiesenen Wert hat. Eine Funktion gibt `undefined` zurück, wenn kein Wert {{jsxref("Statements/return", "zurückgegeben")}} wurde.

> [!NOTE]
> Auch wenn Sie `undefined` als {{Glossary("identifier", "Bezeichner")}} (Variablenname) in jedem anderen Scope als dem globalen Scope verwenden können (weil `undefined` kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist), ist dies eine sehr schlechte Idee, die Ihren Code schwer wartbar und schwer debugbar macht.
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

Sie können `undefined` und die strikten Gleichheits- und Ungleichheitsoperatoren verwenden, um festzustellen, ob eine Variable einen Wert hat. Im folgenden Code wird die Variable `x` nicht initialisiert und die `if`-Anweisung wird zu true ausgewertet.

```js
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}
```

> [!NOTE]
> Hier muss der _strikte Gleichheitsoperator_ (im Gegensatz zum _Standard-Gleichheitsoperator_) verwendet werden, da `x == undefined` auch prüft, ob `x` `null` ist, während strikte Gleichheit dies nicht tut. Dies liegt daran, dass `null` nicht gleich `undefined` ist.
>
> Siehe [Gleichheitsvergleich und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness) für Details.

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

Es gibt jedoch eine weitere Alternative. JavaScript ist eine Sprache mit statischem Scope, daher kann durch Überprüfung, ob die Variable in einem umgebenden Kontext deklariert wurde, festgestellt werden, ob sie deklariert ist.

Der globale Umfang ist an das {{jsxref("globalThis", "globale Objekt", "", 1)}} gebunden, daher kann die Existenz einer Variablen im globalen Kontext durch Überprüfung der Existenz einer Eigenschaft am _globalen Objekt_ überprüft werden, zum Beispiel mit dem {{jsxref("Operators/in", "in")}} Operator:

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

- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
