---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
l10n:
  sourceCommit: d19713a0df638c5a46deecd8b8075d27146c7bea
---

Die **`undefined`** globale Eigenschaft repräsentiert den primitiven Wert [`undefined`](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type). Sie ist einer der {{Glossary("Primitive", "primitiven Typen")}} von JavaScript.

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

In allen nicht-veralteten Browsern ist `undefined` eine nicht konfigurierbare, nicht beschreibbare Eigenschaft. Selbst wenn dies nicht der Fall ist, vermeiden Sie es, `undefined` zu überschreiben.

Eine Variable, der kein Wert zugewiesen wurde, hat den Typ `undefined`. Eine Funktion gibt `undefined` zurück, wenn kein Wert {{jsxref("Statements/return", "zurückgegeben")}} wurde. Der Zugriff auf eine nicht existierende Eigenschaft gibt ebenfalls `undefined` zurück. Der {{jsxref("Operators/void", "void")}} Operator gibt immer `undefined` zurück.

> [!NOTE]
> Obwohl Sie `undefined` als {{Glossary("identifier", "Bezeichner")}} (Variablenname) in jedem Geltungsbereich außer dem globalen verwenden können (weil `undefined` kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist), ist es eine sehr schlechte Idee, dies zu tun. Es macht Ihren Code schwierig zu warten und zu debuggen.
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

Sie können `undefined` und die strikten Gleichheits- und Ungleichheitsoperatoren verwenden, um zu bestimmen, ob eine Variable einen Wert hat. Im folgenden Code ist die Variable `x` nicht initialisiert, und die `if`-Anweisung wertet zu wahr aus.

```js
let x;
if (x === undefined) {
  // these statements execute
} else {
  // these statements do not execute
}
```

> [!NOTE]
> Der _strikte Gleichheitsoperator_ (im Gegensatz zum _losen Gleichheitsoperator_) muss hier verwendet werden, da `x == undefined` auch überprüft, ob `x` gleich `null` ist, während strikte Gleichheit dies nicht tut. Das liegt daran, dass `null` nicht mit `undefined` gleichwertig ist.
>
> Details finden Sie unter [Gleichheitsvergleich und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness).

### typeof Operator und undefined

{{jsxref("Operators/typeof", "typeof")}} kann auch bestimmen, ob eine Variable `undefined` ist:

```js
let x;
if (typeof x === "undefined") {
  // these statements execute
}
```

Ein Grund, {{jsxref("Operators/typeof", "typeof")}} zu verwenden, ist, dass es keinen Fehler auslöst, wenn die Variable im aktuellen Gültigkeitsbereich nicht existiert.

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

Es funktioniert auch mit Variablen, die mit `var` _nach_ der Überprüfung deklariert werden, da die Deklaration an den Anfang des Gültigkeitsbereichs mit dem Wert `undefined` gehoben wird.

```js
if (typeof x === "undefined") {
  // these statements execute
}
var x = 1;
```

Diese Technik ist normalerweise nur nützlich zum Testen globaler Variablen. Sie können wissen, ob eine Variable in jedem anderen Gültigkeitsbereich (Blöcke, Funktionen, Module usw.) existiert, indem Sie einfach den Quellcode betrachten. Der globale Gültigkeitsbereich ist an das {{jsxref("globalThis", "globale Objekt", "", 1)}} gebunden, sodass das Vorhandensein einer Variablen im globalen Kontext durch Überprüfung auf das Vorhandensein einer Eigenschaft am _globalen Objekt_ überprüft werden kann, zum Beispiel durch den {{jsxref("Operators/in", "in")}} Operator:

```js
if ("x" in window) {
  // These statements execute only if x is defined globally
}
```

Jedoch funktionieren keine der obigen Techniken, wenn die Variable mit `let`, `const` oder anderen lexikalischen Deklarationen deklariert ist. Die Verwendung von `typeof` vor der Deklarationszeile erzeugt trotzdem einen `ReferenceError`, aufgrund der {{jsxref("Statements/let#temporal_dead_zone_tdz", "temporalen toten Zone (TDZ)")}}.

```js example-bad
if (typeof z === "undefined") {
  // Uncaught ReferenceError: Cannot access 'z' before initialization
}
let z = 1;
```

Darüber hinaus erstellen `let` und `const` Deklarationen keine Eigenschaften am globalen Objekt, sodass sie auch nicht mit dem `in` Operator überprüft werden können.

```js example-bad
let z;
if ("z" in window) {
  // false, even if z is declared globally with let or const
}
```

Wenn Sie globale Variablen über verschiedene Skripte hinweg teilen möchten, ist es ratsamer, `var` zu verwenden oder sie explizit an das globale Objekt zu binden:

```js
window.myGlobalVar = "foo";
```

### void Operator und undefined

Der {{jsxref("Operators/void", "void")}} Operator kann auch verwendet werden, um den Wert `undefined` zu erzeugen. Dies wird in komprimiertem Code sehr häufig gesehen, da `void 0` 3 Bytes kürzer ist und nicht überschrieben werden kann. Sie sollten dieses Muster in Ihrem eigenen Code normalerweise vermeiden.

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

- [JavaScript Datenarten und Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
