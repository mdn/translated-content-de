---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Operators")}}

Der **`typeof`** Operator gibt einen String zurück, der den Typ des Werts des Operanden angibt.

{{InteractiveExample("JavaScript Demo: typeof operator")}}

```js interactive-example
console.log(typeof 42);
// Expected output: "number"

console.log(typeof "blubber");
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"
```

## Syntax

```js-nolint
typeof operand
```

### Parameter

- `operand`
  - : Ein Ausdruck, der das Objekt oder das {{Glossary("Primitive", "Primiv")}} darstellt, dessen Typ zurückgegeben werden soll.

## Beschreibung

Die folgende Tabelle fasst die möglichen Rückgabewerte von `typeof` zusammen. Für weitere Informationen zu Typen und Primitiven siehe auch die Seite [JavaScript-Datenstruktur](/de/docs/Web/JavaScript/Guide/Data_structures).

| Typ                                                                                                                                                                                                           | Ergebnis                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [Undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)                                                                                                                                       | `"undefined"`                      |
| [Null](/de/docs/Web/JavaScript/Reference/Operators/null)                                                                                                                                                      | `"object"` ([Grund](#typeof_null)) |
| [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                           | `"boolean"`                        |
| [Number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                                                             | `"number"`                         |
| [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)                                                                                                                                             | `"bigint"`                         |
| [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                             | `"string"`                         |
| [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)                                                                                                                                             | `"symbol"`                         |
| [Function](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) (implementiert [[Call]] in ECMA-262 Begriffen; [Klassen](/de/docs/Web/JavaScript/Reference/Statements/class) sind ebenfalls Funktionen) | `"function"`                       |
| Jedes andere Objekt                                                                                                                                                                                           | `"object"`                         |

Diese Liste von Werten ist erschöpfend. Kein spezifikationskonformer Interpreter ist bekannt, der (oder hat historisch) andere als die aufgeführten Werte erzeugt.

## Beispiele

### Grundlegende Verwendung

```js
// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number("1") === "number"; // Number tries to parse things into numbers
typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // note that a number within a string is still typeof string
typeof typeof 1 === "string"; // typeof always returns a string
typeof String(1) === "string"; // String converts anything into a string, safer than toString

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they're truthy or falsy
typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objects
typeof { a: 1 } === "object";

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";
```

### typeof null

```js
// This stands since the beginning of JavaScript
typeof null === "object";
```

In der ersten Implementierung von JavaScript wurden JavaScript-Werte als Typ-Tag und Wert dargestellt. Das Typ-Tag für Objekte war `0`. `null` wurde als NULL-Zeiger (`0x00` in den meisten Plattformen) repräsentiert. Folglich hatte `null` `0` als Typ-Tag, daher der `typeof` Rückgabewert `"object"`. ([Referenz](https://2ality.com/2013/10/typeof-null.html))

Ein Fix wurde für ECMAScript vorgeschlagen (via Opt-in), aber [wurde abgelehnt](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). Es hätte dazu geführt, dass `typeof null === "null"`.

### Verwendung des new-Operators

Alle Konstruktorfunktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, geben Nicht-Primitiven (`"object"` oder `"function"`) zurück. Die meisten geben Objekte zurück, mit der bemerkenswerten Ausnahme der [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), die eine Funktion zurückgibt.

```js
const str = new String("String");
const num = new Number(100);

typeof str; // "object"
typeof num; // "object"

const func = new Function();

typeof func; // "function"
```

### Notwendigkeit von Klammern in der Syntax

Der `typeof` Operator hat eine höhere [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als binäre Operatoren wie Addition (`+`). Daher sind Klammern erforderlich, um den Typ eines Additions-ergebnisses auszuwerten.

```js
// Parentheses can be used for determining the data type of expressions.
const someData = 99;

typeof someData + " foo"; // "number foo"
typeof (someData + " foo"); // "string"
```

### Interaktion mit nicht deklarierten und nicht initialisierten Variablen

`typeof` wird generell immer garantiert, einen String für jeden gegebenen Operanden zurückzugeben. Selbst bei nicht deklarierten Bezeichnern wird `typeof` `"undefined"` zurückgeben, anstatt einen Fehler zu werfen.

```js
typeof undeclaredVariable; // "undefined"
```

Die Verwendung von `typeof` bei lexikalischen Deklarationen ({{jsxref("Statements/let", "let")}} {{jsxref("Statements/const", "const")}}, und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)) im selben Block vor der Stelle der Deklaration wird jedoch einen {{jsxref("ReferenceError")}} werfen. Block-skopierte Variablen befinden sich in einer _[temporalen toten Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)_ vom Anfang des Blocks bis zur Initialisierung, währenddessen es einen Fehler wirft, wenn darauf zugegriffen wird.

```js example-bad
typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}
```

### Ausnahmsverhalten von document.all

Alle aktuellen Browser exponieren ein nicht-standardisiertes Host-Objekt [`document.all`](/de/docs/Web/API/Document/all) mit dem Typ `undefined`.

```js
typeof document.all === "undefined";
```

Obwohl `document.all` auch {{Glossary("Falsy", "falsy")}} ist und [lose gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) zu `undefined`, ist es nicht [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). Der Fall, dass `document.all` den Typ `"undefined"` hat, wird in den Webstandards als eine „willentliche Verletzung“ des ursprünglichen ECMAScript Standards für Webkompatibilität klassifiziert.

### Eigene Methode, die einen spezifischeren Typ erhält

`typeof` ist sehr nützlich, aber nicht so vielseitig wie erforderlich. Zum Beispiel, `typeof []` ist `"object"`, ebenso wie `typeof new Date()`, `typeof /abc/`, etc.

Um eine größere Spezifität beim Überprüfen von Typen zu erreichen, präsentieren wir hier eine benutzerdefinierte `type(value)` Funktion, die größtenteils das Verhalten von `typeof` nachahmt, aber für Nicht-Primitiven (d.h. Objekte und Funktionen) gibt sie wo möglich einen detaillierteren Typnamen zurück.

```js
function type(value) {
  if (value === null) {
    return "null";
  }
  const baseType = typeof value;
  // Primitive types
  if (!["object", "function"].includes(baseType)) {
    return baseType;
  }

  // Symbol.toStringTag often specifies the "display name" of the
  // object's class. It's used in Object.prototype.toString().
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") {
    return tag;
  }

  // If it's a function whose source code starts with the "class" keyword
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }

  // The name of the constructor; for example `Array`, `GeneratorFunction`,
  // `Number`, `String`, `Boolean` or `MyCustomClass`
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // At this point there's no robust way to get the type of value,
  // so we use the base implementation.
  return baseType;
}
```

Zum Überprüfen von möglicherweise nicht vorhandenen Variablen, die andernfalls einen {{jsxref("ReferenceError")}} werfen würden, verwenden Sie `typeof nonExistentVar === "undefined"`, da dieses Verhalten nicht mit benutzerdefiniertem Code nachgeahmt werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Operators/instanceof", "instanceof")}}
- [`document.all` willentliche Verletzung des Standards](https://github.com/tc39/ecma262/issues/668)
