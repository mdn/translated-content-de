---
title: Das `arguments`-Objekt
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`arguments`** ist ein array-ähnliches Objekt, das innerhalb von [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) zugänglich ist und die Werte der an diese Funktion übergebenen Argumente enthält.

{{InteractiveExample("JavaScript Demo: The arguments object")}}

```js interactive-example
function func1(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

func1(1, 2, 3);
```

## Beschreibung

> [!NOTE]
> In modernem Code sollten [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) bevorzugt werden.

Das `arguments`-Objekt ist eine lokale Variable, die innerhalb aller nicht-[Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verfügbar ist. Sie können auf die Argumente einer Funktion innerhalb dieser Funktion durch Verwendung des `arguments`-Objekts zugreifen. Es hat Einträge für jedes Argument, mit dem die Funktion aufgerufen wurde, wobei der Index des ersten Eintrags bei `0` beginnt.

Zum Beispiel, wenn eine Funktion mit 3 Argumenten aufgerufen wird, können Sie auf diese wie folgt zugreifen:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

Das `arguments`-Objekt ist nützlich für Funktionen, die mit mehr Argumenten aufgerufen werden, als sie formell zu akzeptieren deklariert sind, genannt [_variadische Funktionen_](https://en.wikipedia.org/wiki/Variadic_function), wie z.B. {{jsxref("Math.min()")}}. Diese Beispiel-Funktion akzeptiert eine beliebige Anzahl von Zeichenfolgen-Argumenten und gibt die längste zurück:

```js
function longestString() {
  let longest = "";
  if (arguments.length === 0) {
    throw new TypeError("At least one string is required");
  }
  for (const arg of arguments) {
    if (arg.length > longest.length) {
      longest = arg;
    }
  }
  return longest;
}
```

Sie können {{jsxref("Functions/arguments/length", "arguments.length")}} verwenden, um zu zählen, wie viele Argumente die Funktion übergeben wurden. Wenn Sie stattdessen zählen möchten, wie viele Parameter eine Funktion zu akzeptieren deklariert ist, inspizieren Sie die {{jsxref("Function/length", "length")}}-Eigenschaft dieser Funktion.

### Zuweisung zu Indizes

Jeder Argumentindex kann auch gesetzt oder neu zugewiesen werden:

```js
arguments[1] = "new value";
```

Nicht-strikte Funktionen, die nur einfache Parameter haben (d.h. keine Rest-, Standard- oder destrukturierten Parameter), synchronisieren den neuen Wert von Parametern mit dem `arguments`-Objekt und umgekehrt:

```js
function func(a) {
  arguments[0] = 99; // updating arguments[0] also updates a
  console.log(a);
}
func(10); // 99

function func2(a) {
  a = 99; // updating a also updates arguments[0]
  console.log(arguments[0]);
}
func2(10); // 99
```

Nicht-strikte Funktionen, die _Rest-_, [Standard](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destruierte](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter übergeben bekommen, synchronisieren keine neuen, im Funktionskörper zugewiesenen Parameterwerte mit dem `arguments`-Objekt. Stattdessen spiegelt das `arguments`-Objekt in nicht-strikten Funktionen mit komplexen Parametern immer die Werte wider, die der Funktion übergeben wurden, als die Funktion aufgerufen wurde.

```js
function funcWithDefault(a = 55) {
  arguments[0] = 99; // updating arguments[0] does not also update a
  console.log(a);
}
funcWithDefault(10); // 10

function funcWithDefault2(a = 55) {
  a = 99; // updating a does not also update arguments[0]
  console.log(arguments[0]);
}
funcWithDefault2(10); // 10

// An untracked default parameter
function funcWithDefault3(a = 55) {
  console.log(arguments[0]);
  console.log(arguments.length);
}
funcWithDefault3(); // undefined; 0
```

Dies ist das gleiche Verhalten, das alle [strict-mode Funktionen](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) zeigen, unabhängig vom Typ der übergebenen Parameter. Das heißt, die Zuweisung neuer Werte zu Parametern im Körper der Funktion beeinflusst nie das `arguments`-Objekt, genauso wenig wie die Zuweisung neuer Werte zu den Indizes von `arguments` den Wert von Parametern beeinflusst, selbst wenn die Funktion nur einfache Parameter hat.

> [!NOTE]
> Sie können keine `"use strict";`-Direktive im Körper einer Funktionsdefinition schreiben, die Rest-, Standard- oder destrukturierte Parameter akzeptiert. Dies führt zu [einem Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

### arguments ist ein array-ähnliches Objekt

`arguments` ist ein array-ähnliches Objekt, was bedeutet, dass `arguments` eine {{jsxref("Functions/arguments/length", "length")}}-Eigenschaft und von Null indizierte Eigenschaften hat, aber nicht über die eingebauten Methoden von {{jsxref("Array")}}, wie z.B. {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/map", "map()")}}, verfügt. Es kann jedoch in ein echtes `Array` umgewandelt werden, indem man eine von [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}}, oder [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet.

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

Für allgemeine Anwendungsfälle reicht es aus, es als array-ähnliches Objekt zu verwenden, da es sowohl [iterierbar ist](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) als auch `length` und numerische Indizes hat. Zum Beispiel akzeptiert [`Function.prototype.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) array-ähnliche Objekte.

```js
function midpoint() {
  return (
    (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
  );
}

console.log(midpoint(3, 1, 4, 1, 5)); // 3
```

## Eigenschaften

- {{jsxref("Functions/arguments/callee", "arguments.callee")}} {{deprecated_inline}}
  - : Referenz auf die aktuell ausgeführte Funktion, zu der die Argumente gehören. In strict mode verboten.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Die Anzahl der Argumente, die der Funktion übergeben wurden.
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Gibt ein neues [Array Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)-Objekt zurück, das die Werte für jeden Index in `arguments` enthält.

## Beispiele

### Definition einer Funktion, die mehrere Zeichenfolgen konkateniert

Dieses Beispiel definiert eine Funktion, die mehrere Zeichenfolgen konkateniert. Das einzige formale Argument der Funktion ist eine Zeichenfolge, die die Zeichen enthält, die die zu konkatenierten Elemente trennen.

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Sie können dieser Funktion beliebig viele Argumente übergeben. Sie gibt eine Zeichenfolgenliste zurück, indem sie jedes Argument in der Liste verwendet:

```js
myConcat(", ", "red", "orange", "blue");
// "red, orange, blue"

myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "elephant; giraffe; lion; cheetah"

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// "sage. basil. oregano. pepper. parsley"
```

### Definition einer Funktion, die HTML-Listen erstellt

Dieses Beispiel definiert eine Funktion, die einen String enthält, der HTML für eine Liste erstellt. Das einzige formale Argument für die Funktion ist eine Zeichenfolge, die `"u"` ist, wenn die Liste [ungeordnet (mit Punkten)](/de/docs/Web/HTML/Reference/Elements/ul) sein soll oder `"o"`, wenn die Liste [geordnet (nummeriert)](/de/docs/Web/HTML/Reference/Elements/ol) sein soll. Die Funktion ist wie folgt definiert:

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // end list
  return html;
}
```

Sie können dieser Funktion eine beliebige Anzahl von Argumenten übergeben, und sie fügt jedes Argument als Listenelement zu einer Liste des angegebenen Typs hinzu. Zum Beispiel:

```js
list("u", "One", "Two", "Three");
// "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
```

### Verwendung von typeof mit arguments

Der {{jsxref("Operators/typeof", "typeof")}}-Operator gibt `'object'` zurück, wenn er mit `arguments` verwendet wird.

```js
console.log(typeof arguments); // 'object'
```

Der Typ der einzelnen Argumente kann durch Indizierung von `arguments` bestimmt werden:

```js
console.log(typeof arguments[0]); // returns the type of the first argument
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
