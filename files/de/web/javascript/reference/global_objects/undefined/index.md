---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
l10n:
  sourceCommit: 5ebca2edd6095fb3f61d442ed3146fa37fffbf7d
---

Die globale Eigenschaft **`undefined`** repräsentiert den primitiven Wert [`undefined`](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type). Es ist einer der {{Glossary("Primitive", "primitiven Typen")}} von JavaScript.

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

`undefined` ist eine Eigenschaft des _globalen Objekts_. Das heißt, es ist eine Variable im globalen Gültigkeitsbereich.

In allen nicht veralteten Browsern ist `undefined` eine nicht konfigurierbare, nicht beschreibbare Eigenschaft. Auch wenn dies nicht der Fall ist, sollten Sie es vermeiden, es zu überschreiben.

Eine Variable, der kein Wert zugewiesen wurde, ist vom Typ `undefined`. Eine Funktion gibt `undefined` zurück, wenn kein Wert {{jsxref("Statements/return", "zurückgegeben")}} wurde. Der Zugriff auf eine Eigenschaft, die nicht existiert, gibt ebenfalls `undefined` zurück. Der {{jsxref("Operators/void", "void")}}-Operator gibt immer `undefined` zurück.

> [!NOTE]
> Während Sie `undefined` als {{Glossary("identifier", "Bezeichner")}} (Variablenname) in jedem Gültigkeitsbereich außer dem globalen Gültigkeitsbereich verwenden können (da `undefined` kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist), ist dies eine sehr schlechte Idee, die Ihren Code schwer wartbar und fehleranfällig macht.
>
> ```js example-bad
> // NICHT SO MACHEN
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

Sie können `undefined` und die strikten Gleichheits- und Ungleichheitsoperatoren verwenden, um zu bestimmen, ob eine Variable einen Wert hat. Im folgenden Code ist die Variable `x` nicht initialisiert, und die `if`-Anweisung evaluiert zu wahr.

```js
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}
```

> [!NOTE]
> Der _strikte Gleichheitsoperator_ (im Gegensatz zum _lockeren Gleichheitsoperator_) muss hier verwendet werden, da `x == undefined` auch überprüft, ob `x` `null` ist, während dies bei strikter Gleichheit nicht der Fall ist. Dies liegt daran, dass `null` nicht gleich `undefined` ist.
>
> Siehe [Gleichheitsvergleich und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness) für Details.

### typeof-Operator und undefined

{{jsxref("Operators/typeof", "typeof")}} kann auch bestimmen, ob eine Variable `undefined` ist:

```js
let x;
if (typeof x === "undefined") {
  // these statements execute
}
```

Ein Grund, {{jsxref("Operators/typeof", "typeof")}} zu nutzen, ist, dass es keinen Fehler auslöst, wenn die Variable im aktuellen Gültigkeitsbereich nicht existiert.

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

Es funktioniert auch mit Variablen, die mit `var` _nachdem_ die Prüfung erklärt wurden, da die Deklaration an die Spitze des Gültigkeitsbereichs mit dem Wert `undefined` gehoben wird.

```js
if (typeof x === "undefined") {
  // these statements execute
}
var x = 1;
```

Diese Technik ist normalerweise nur nützlich, um globale Variablen zu testen. Sie können wissen, ob eine Variable in jedem anderen Gültigkeitsbereich (Blöcke, Funktionen, Module, usw.) existiert, indem Sie einfach den Quellcode lesen. Der globale Gültigkeitsbereich ist an das {{jsxref("globalThis", "globale Objekt", "", 1)}} gebunden, so dass die Existenz einer Variablen im globalen Kontext überprüft werden kann, indem die Existenz einer Eigenschaft auf dem _globalen Objekt_ überprüft wird, z.B. durch den {{jsxref("Operators/in", "in")}}-Operator:

```js
if ("x" in window) {
  // These statements execute only if x is defined globally
}
```

Keiner der oben erwähnten Techniken funktioniert jedoch, wenn die Variable mit `let`, `const` oder anderen lexikalischen Deklarationen deklariert wird. Die Verwendung von `typeof` vor der Deklaration führt immer noch zu einem `ReferenceError`, aufgrund der [Temporal Dead Zone (TDZ)](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz).

```js example-bad
if (typeof z === "undefined") {
  // Uncaught ReferenceError: Cannot access 'z' before initialization
}
let z = 1;
```

Darüber hinaus erstellen `let` und `const`-Deklarationen keine Eigenschaften auf dem globalen Objekt, so dass sie auch nicht mit dem `in`-Operator überprüft werden können.

```js example-bad
let z;
if ("z" in window) {
  // false, even if z is declared globally with let or const
}
```

Wenn Sie globale Variablen über verschiedene Skripte hinweg teilen möchten, ist es ratsamer, `var` zu verwenden oder sie explizit an das globale Objekt anzuhängen:

```js
window.myGlobalVar = "foo";
```

### void-Operator und undefined

Der {{jsxref("Operators/void", "void")}}-Operator kann auch verwendet werden, um den `undefined`-Wert zu erzeugen. Dies ist sehr häufig in komprimiertem Code zu sehen, da `void 0` 3 Bytes kürzer ist und nicht überschrieben werden kann. Sie sollten dieses Muster in Ihrem eigenen Code normalerweise vermeiden.

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
