---
title: Das `arguments`-Objekt
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Functions")}}

Das **`arguments`**-Objekt ist ein array-ähnliches Objekt, das innerhalb von [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) zugänglich ist und die Werte der an diese Funktion übergebenen Argumente enthält.

{{InteractiveExample("JavaScript Demo: Functions Arguments")}}

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

Das `arguments`-Objekt ist eine lokale Variable, die in allen nicht-[Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verfügbar ist. Sie können in der Funktion auf die Argumente über das `arguments`-Objekt zugreifen. Es enthält Einträge für jedes Argument, mit dem die Funktion aufgerufen wurde, wobei der Index des ersten Eintrags `0` ist.

Wenn eine Funktion zum Beispiel mit drei Argumenten aufgerufen wird, können Sie sie wie folgt zugreifen:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

Das `arguments`-Objekt ist nützlich für Funktionen, die mit mehr Argumenten aufgerufen werden, als formell definiert sind, sogenannte [_variadic functions_](https://en.wikipedia.org/wiki/Variadic_function) wie {{jsxref("Math.min()")}}. In diesem Beispiel wird eine Funktion gezeigt, die eine beliebige Anzahl von String-Argumenten akzeptiert und den längsten zurückgibt:

```js
function longestString() {
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
```

Sie können {{jsxref("Functions/arguments/length", "arguments.length")}} verwenden, um zu zählen, wie viele Argumente mit der Funktion aufgerufen wurden. Wenn Sie stattdessen zählen möchten, wie viele Parameter eine Funktion formal akzeptiert, sollten Sie die {{jsxref("Function/length", "length")}}-Eigenschaft dieser Funktion inspizieren.

### Indizes zuweisen

Jeder Argumentindex kann ebenfalls gesetzt oder neu zugewiesen werden:

```js
arguments[1] = "new value";
```

Nicht-strikte Funktionen mit einfachen Parametern (d. h. ohne Rest-, Default- oder Destructuring-Parameter) synchronisieren den neuen Wert der Parameter mit dem `arguments`-Objekt und umgekehrt:

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

Nicht-strikte Funktionen, die [Rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-, [Default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)- oder [Destructured](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)-Parameter übergeben bekommen, synchronisieren Änderungen der Parameter-Werte im Funktionskörper nicht mit dem `arguments`-Objekt. Stattdessen reflektiert das `arguments`-Objekt immer die Werte, die der Funktion beim Aufruf übergeben wurden.

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

Dasselbe Verhalten tritt bei allen [Strict-Mode-Funktionen](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) auf, unabhängig von der Art der übergebenen Parameter. Das bedeutet, dass neue Zuweisungen zu Parametern im Funktionskörper das `arguments`-Objekt niemals ändern, ebenso wie Zuweisungen zu `arguments`-Indizes die Werte der Parameter nicht beeinflussen, auch wenn die Funktion nur einfache Parameter hat.

> [!NOTE]
> Sie können eine `"use strict";`-Direktive nicht im Körper einer Funktionsdefinition verwenden, die Rest-, Default- oder Destructured-Parameter akzeptiert. Dies führt zu [einem Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

### `arguments` ist ein array-ähnliches Objekt

Das `arguments`-Objekt ist ein array-ähnliches Objekt, was bedeutet, dass `arguments` über eine {{jsxref("Functions/arguments/length", "length")}}-Eigenschaft und nullbasierte Indizes verfügt, jedoch nicht über die eingebauten Methoden von {{jsxref("Array")}} wie {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/map", "map()")}}. Es kann jedoch in ein echtes `Array` umgewandelt werden, indem [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}} oder [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet werden:

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

Für häufige Anwendungsfälle reicht es aus, das Objekt als array-ähnliches Objekt zu verwenden, da es sowohl [iterierbar](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) ist als auch eine `length`-Eigenschaft sowie numerische Indizes besitzt. Zum Beispiel akzeptiert [`Function.prototype.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) array-ähnliche Objekte.

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
  - : Verweist auf die aktuell ausgeführte Funktion, zu der die Argumente gehören. In Strict Mode nicht erlaubt.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Die Anzahl der Argumente, die an die Funktion übergeben wurden.
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Gibt ein neues [Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) zurück, das die Werte für jeden Index im `arguments`-Objekt enthält.

## Beispiele

### Definieren einer Funktion, die mehrere Strings verknüpft

Dieses Beispiel definiert eine Funktion, die mehrere Strings verknüpft. Das einzige formale Argument der Funktion ist ein String, der die Zeichen enthält, die die zu verknüpfenden Elemente trennen.

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Sie können dieser Funktion beliebig viele Argumente übergeben. Sie gibt eine String-Liste zurück, die jedes Argument in der Liste verwendet:

```js
myConcat(", ", "red", "orange", "blue");
// "red, orange, blue"

myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "elephant; giraffe; lion; cheetah"

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// "sage. basil. oregano. pepper. parsley"
```

### Definieren einer Funktion, die HTML-Listen erstellt

Dieses Beispiel definiert eine Funktion, die einen String mit HTML für eine Liste erstellt. Das einzige formale Argument der Funktion ist ein String, der `"u"` ist, wenn die Liste eine [ungeordnete (mit Punkten)](/de/docs/Web/HTML/Element/ul) sein soll, oder `"o"`, wenn die Liste eine [geordnete (nummerierte)](/de/docs/Web/HTML/Element/ol) sein soll. Die Funktion wird wie folgt definiert:

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // end list
  return html;
}
```

Sie können dieser Funktion beliebig viele Argumente übergeben, und sie fügt jedes Argument als Listenelement zu einer Liste des angegebenen Typs hinzu. Zum Beispiel:

```js
list("u", "One", "Two", "Three");
// "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
```

### Verwendung von `typeof` mit `arguments`

Der Operator {{jsxref("Operators/typeof", "typeof")}} gibt `'object'` zurück, wenn er mit `arguments` verwendet wird.

```js
console.log(typeof arguments); // 'object'
```

Der Typ einzelner Argumente kann durch Indizieren von `arguments` bestimmt werden:

```js
console.log(typeof arguments[0]); // returns the type of the first argument
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
