---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **`typeof`**-Operator gibt einen String zurück, der den Typ des Werts seines Operanden angibt.

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
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 14 (Präfixoperatoren) oder höher, der das Objekt oder den {{Glossary("Primitive", "primitiven Wert")}} repräsentiert, dessen Typ zurückgegeben werden soll.

### Rückgabewert

Ein String, der den Typ von `operand` angibt.

| Typ                                                                                                                                                                                               | Ergebnis                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [Undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)                                                                                                                           | `"undefined"`                      |
| [Null](/de/docs/Web/JavaScript/Reference/Operators/null)                                                                                                                                          | `"object"` ([Grund](#typeof_null)) |
| [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                               | `"boolean"`                        |
| [Number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                                                 | `"number"`                         |
| [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)                                                                                                                                 | `"bigint"`                         |
| [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                 | `"string"`                         |
| [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)                                                                                                                                 | `"symbol"`                         |
| [Function](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) (implementiert [[Call]] gemäß ECMA-262; auch [Klassen](/de/docs/Web/JavaScript/Reference/Statements/class) sind Funktionen) | `"function"`                       |
| Jedes andere Objekt                                                                                                                                                                               | `"object"`                         |

Diese Liste von Werten ist vollständig. Es sind keine spezifikationskonformen Engines bekannt, die andere als die aufgeführten Werte zurückgeben oder in der Vergangenheit zurückgegeben haben.

Weitere Informationen zu Typen und primitiven Werten finden Sie auf der Seite [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures).

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

In der ersten Implementierung von JavaScript wurden JavaScript-Werte durch ein Typ-Tag und einen Wert repräsentiert. Das Typ-Tag für Objekte war `0`. `null` wurde als NULL-Zeiger repräsentiert (`0x00` auf den meisten Plattformen). Folglich hatte `null` das Typ-Tag `0`, weshalb `typeof` den Wert `"object"` zurückgibt. ([Quelle](https://2ality.com/2013/10/typeof-null.html))

Für ECMAScript wurde eine Korrektur vorgeschlagen (als Opt-in), die jedoch [abgelehnt wurde](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). Sie hätte dazu geführt, dass `typeof null === "null"` gilt.

### Verwendung des new-Operators

Alle Konstruktorfunktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, geben nicht-primitive Werte zurück (`"object"` oder `"function"`). Die meisten geben Objekte zurück. Eine bemerkenswerte Ausnahme ist [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function), das eine Funktion zurückgibt.

```js
const str = new String("String");
const num = new Number(100);

typeof str; // "object"
typeof num; // "object"

const func = new Function();

typeof func; // "function"
```

### Warum Klammern in der Syntax nötig sind

Der `typeof`-Operator hat eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als binäre Operatoren wie die Addition (`+`). Daher sind Klammern erforderlich, um den Typ des Ergebnisses einer Addition zu ermitteln.

```js
// Parentheses can be used for determining the data type of expressions.
const someData = 99;

typeof someData + " foo"; // "number foo"
typeof (someData + " foo"); // "string"
```

### Zusammenspiel mit nicht deklarierten und nicht initialisierten Variablen

`typeof` funktioniert auch mit nicht deklarierten Bezeichnern und gibt `"undefined"` zurück, statt einen Fehler auszulösen.

```js
typeof undeclaredVariable; // "undefined"
```

Wird `typeof` jedoch im selben Block vor der Deklaration auf lexikalische Deklarationen ({{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/using", "using")}}, {{jsxref("Statements/await_using", "await using")}} und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)) angewendet, wird ein {{jsxref("ReferenceError")}} ausgelöst. Variablen mit Block-Scope befinden sich vom Beginn des Blocks bis zum Abschluss ihrer Initialisierung in einer _[temporären toten Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)_. Ein Zugriff während dieser Zeit löst einen Fehler aus.

```js example-bad
typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}
```

Weitere Einzelheiten finden Sie unter [`typeof`-Operator und `undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined#typeof_operator_and_undefined).

### Besonderes Verhalten von document.all

Alle aktuellen Browser stellen ein nicht standardisiertes Host-Objekt [`document.all`](/de/docs/Web/API/Document/all) mit dem Typ `undefined` bereit.

```js
typeof document.all === "undefined";
```

Obwohl `document.all` außerdem {{Glossary("Falsy", "falsy")}} und [lose gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) `undefined` ist, ist es nicht [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). Dass `document.all` den Typ `"undefined"` hat, wird in den Webstandards als „willentliche Abweichung“ vom ursprünglichen ECMAScript-Standard zugunsten der Webkompatibilität eingestuft.

### Benutzerdefinierte Methode zur Ermittlung eines genaueren Typs

`typeof` ist sehr nützlich, aber nicht so vielseitig, wie es mitunter erforderlich wäre. Beispielsweise ist sowohl `typeof []` als auch `typeof new Date()` und `typeof /abc/` gleich `"object"`.

Für eine genauere Typprüfung wird hier eine benutzerdefinierte Funktion `type(value)` vorgestellt. Sie ahmt das Verhalten von `typeof` weitgehend nach, gibt aber für nicht-primitive Werte (also Objekte und Funktionen) nach Möglichkeit eine genauere Typbezeichnung zurück.

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
  const className = value.constructor?.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // At this point there's no robust way to get the type of value,
  // so we use the base implementation.
  return baseType;
}
```

Verwenden Sie zur Prüfung möglicherweise nicht existierender Variablen, deren Zugriff sonst einen {{jsxref("ReferenceError")}} auslösen würde, `typeof nonExistentVar === "undefined"`, da sich dieses Verhalten mit benutzerdefiniertem Code nicht nachbilden lässt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("instanceof")}}
- [Willentliche Abweichung von `document.all` vom Standard](https://github.com/tc39/ecma262/issues/668)
