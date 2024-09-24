---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Operators")}}

Der **`typeof`** Operator gibt einen String zurück, der den Typ des Werts des Operanden angibt.

{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}

## Syntax

```js-nolint
typeof operand
```

### Parameter

- `operand`
  - : Ein Ausdruck, der das Objekt oder [primitive](/de/docs/Glossary/Primitive) darstellt, dessen Typ zurückgegeben werden soll.

## Beschreibung

Die folgende Tabelle fasst die möglichen Rückgabewerte von `typeof` zusammen. Für weitere Informationen zu Typen und Primitiven siehe auch die Seite [JavaScript Datenstrukturen](/de/docs/Web/JavaScript/Data_structures).

| Typ                                                                                                                                                                                                     | Ergebnis                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [Undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)                                                                                                                               | `"undefined"`                       |
| [Null](/de/docs/Web/JavaScript/Reference/Operators/null)                                                                                                                                              | `"object"` ([Grund](#typeof_null))  |
| [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                                                   | `"boolean"`                         |
| [Number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                                                     | `"number"`                          |
| [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)                                                                                                                                     | `"bigint"`                          |
| [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                                                     | `"string"`                          |
| [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)                                                                                                                                     | `"symbol"`                          |
| [Function](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) (implementiert [[Call]] in ECMA-262-Begriffen; [Klassen](/de/docs/Web/JavaScript/Reference/Statements/class) sind ebenfalls Funktionen) | `"function"`                        |
| Jedes andere Objekt                                                                                                                                                                                     | `"object"`                          |

Diese Liste von Werten ist vollständig. Keine spezifikationskonformen Engines sind bekannt, die andere Werte als die aufgelisteten erzeugen (oder historisch erzeugt hätten).

## Beispiele

### Grundlegende Nutzung

```js
// Zahlen
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Trotz "Not-A-Number"
typeof Number("1") === "number"; // Number versucht, Dinge in Zahlen umzuwandeln
typeof Number("shoe") === "number"; // einschließlich Werte, die nicht in eine Zahl umgewandelt werden können

typeof 42n === "bigint";

// Zeichenketten
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // beachten Sie, dass eine Zahl innerhalb einer Zeichenkette immer noch vom Typ string ist
typeof typeof 1 === "string"; // typeof gibt immer einen String zurück
typeof String(1) === "string"; // String konvertiert alles in eine Zeichenkette, sicherer als toString

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() wird Werte basierend darauf konvertieren, ob sie truthy oder falsy sind
typeof !!1 === "boolean"; // zwei Aufrufe des ! (logisches NICHT) Operators entsprechen Boolean()

// Symbole
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objekte
typeof { a: 1 } === "object";

// Verwenden Sie Array.isArray oder Object.prototype.toString.call
// um reguläre Objekte von Arrays zu unterscheiden
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// Die folgenden sind verwirrend, gefährlich und verschwenderisch. Vermeiden Sie sie.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Funktionen
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";
```

### typeof null

```js
// Dies bestand seit dem Beginn von JavaScript
typeof null === "object";
```

In der ersten Implementierung von JavaScript wurden JavaScript-Werte als Typ-Tag und Wert dargestellt. Das Typ-Tag für Objekte war `0`. `null` wurde als NULL-Zeiger (in den meisten Plattformen `0x00`) dargestellt. Folglich hatte `null` `0` als Typ-Tag, daher den `typeof` Rückgabewert `"object"`. ([Referenz](https://2ality.com/2013/10/typeof-null.html))

Ein Fix wurde für ECMAScript vorgeschlagen (über ein Opt-in), jedoch [abgelehnt](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). Es hätte zu `typeof null === "null"` geführt.

### Verwendung des new Operators

Alle Konstruktorfunktionen, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, geben Nicht-Primitiven (`"object"` oder `"function"`) zurück. Die meisten geben Objekte zurück, wobei die bemerkenswerte Ausnahme die [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) ist, die eine Funktion zurückgibt.

```js
const str = new String("String");
const num = new Number(100);

typeof str; // "object"
typeof num; // "object"

const func = new Function();

typeof func; // "function"
```

### Notwendigkeit von Klammern in der Syntax

Der `typeof` Operator hat eine höhere [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als binäre Operatoren wie Addition (`+`). Daher sind Klammern erforderlich, um den Typ eines Additionsergebnisses auszuwerten.

```js
// Klammern können verwendet werden, um den Datentyp von Ausdrücken zu bestimmen.
const someData = 99;

typeof someData + " Wisen"; // "number Wisen"
typeof (someData + " Wisen"); // "string"
```

### Interaktion mit nicht deklarierten und nicht initialisierten Variablen

`typeof` ist generell garantiert, für jeden operanden einen String zurückzugeben, mit dem es versorgt wird. Selbst bei nicht deklarierten Identifikatoren wird `typeof` `"undefined"` zurückgeben, anstatt einen Fehler zu werfen.

```js
typeof undeclaredVariable; // "undefined"
```

Jedoch wird die Verwendung von `typeof` bei lexikalischen Deklarationen ({{jsxref("Statements/let", "let")}} {{jsxref("Statements/const", "const")}} und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)) im selben Block vor der Stelle der Deklaration einen {{jsxref("ReferenceError")}} werfen. Blockbezogene Variablen befinden sich in einer _[temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)_ vom Beginn des Blocks bis zur Verarbeitung der Initialisierung, während der sie einen Fehler werfen, wenn auf sie zugegriffen wird.

```js example-bad
typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}
```

### Besonderes Verhalten von document.all

Alle aktuellen Browser implementieren ein nicht-standardisiertes Hostobjekt [`document.all`](/de/docs/Web/API/Document/all) mit dem Typ `undefined`.

```js
typeof document.all === "undefined";
```

Obwohl `document.all` auch [falsy](/de/docs/Glossary/Falsy) ist und [locker gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) `undefined` ist, ist es nicht [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined). Der Fall, dass `document.all` den Typ `"undefined"` hat, wird in den Webstandards als "willkürlicher Verstoß" gegen den ursprünglichen ECMAScript-Standard klassifiziert, um die Webkompatibilität zu erhalten.

### Benutzerdefinierte Methode, die einen spezifischeren Typ erhält

`typeof` ist sehr nützlich, aber es ist nicht so vielseitig, wie es vielleicht erforderlich wäre. Zum Beispiel ist `typeof []` `"object"`, sowie `typeof new Date()`, `typeof /abc/`, usw.

Um eine größere Spezifität beim Überprüfen von Typen zu erreichen, präsentieren wir hier eine benutzerdefinierte `type(value)` Funktion, die größtenteils das Verhalten von `typeof` nachahmt, jedoch für Nicht-Primitiven (d.h. Objekte und Funktionen) versucht, einen granuläreren Typnamen zurückzugeben, wo möglich.

```js
function type(value) {
  if (value === null) {
    return "null";
  }
  const baseType = typeof value;
  // Primitive Typen
  if (!["object", "function"].includes(baseType)) {
    return baseType;
  }

  // Symbol.toStringTag gibt oft den "Anzeigenamen" der
  // Klasse des Objekts an. Es wird in Object.prototype.toString() verwendet.
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") {
    return tag;
  }

  // Wenn es sich um eine Funktion handelt, deren Quellcode mit dem Schlüsselwort "class" beginnt
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }

  // Der Name des Konstruktors; zum Beispiel `Array`, `GeneratorFunction`,
  // `Number`, `String`, `Boolean` oder `MyCustomClass`
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // An diesem Punkt gibt es keinen robusten Weg, den Typ von value zu erhalten,
  // also verwenden wir die Basisimplementierung.
  return baseType;
}
```

Um potenziell nicht existierende Variablen zu überprüfen, die ansonsten einen {{jsxref("ReferenceError")}} werfen würden, verwenden Sie `typeof nonExistentVar === "undefined"`, da dieses Verhalten nicht mit benutzerdefiniertem Code nachgeahmt werden kann.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{jsxref("Operators/instanceof", "instanceof")}}
- [`document.all`, willkürlicher Verstoß gegen den Standard](https://github.com/tc39/ecma262/issues/668)
