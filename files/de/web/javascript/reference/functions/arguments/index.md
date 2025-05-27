---
title: Das `arguments` Objekt
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{jsSidebar("Functions")}}

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

Das `arguments` Objekt ist eine lokale Variable, die in allen nicht-[arrow](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Funktionen verfügbar ist. Sie können auf die Argumente einer Funktion innerhalb dieser Funktion zugreifen, indem Sie das `arguments` Objekt verwenden. Es enthält Einträge für jedes Argument, mit dem die Funktion aufgerufen wurde, wobei der Index des ersten Eintrags bei `0` liegt.

Zum Beispiel, wenn eine Funktion mit 3 Argumenten aufgerufen wird, können Sie wie folgt auf sie zugreifen:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

Das `arguments` Objekt ist nützlich für Funktionen, die mit mehr Argumenten aufgerufen werden, als sie formal deklariert sind, sogenannte [_variadische Funktionen_](https://en.wikipedia.org/wiki/Variadic_function), wie z.B. {{jsxref("Math.min()")}}. Diese Beispiel-Funktion akzeptiert eine beliebige Anzahl von String-Argumenten und gibt das längste zurück:

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

Sie können {{jsxref("Functions/arguments/length", "arguments.length")}} verwenden, um zu zählen, mit wie vielen Argumenten die Funktion aufgerufen wurde. Wenn Sie stattdessen zählen möchten, wie viele Parameter eine Funktion deklariert akzeptiert, überprüfen Sie die {{jsxref("Function/length", "length")}} Eigenschaft dieser Funktion.

### Zu Indizes zuweisen

Jeder Argument-Index kann auch gesetzt oder neu zugewiesen werden:

```js
arguments[1] = "new value";
```

Nicht-strikte Funktionen, die nur einfache Parameter haben (das heißt, keine Rest-, Standard- oder destrukturierten Parameter), synchronisieren den neuen Wert der Parameter mit dem `arguments` Objekt und umgekehrt:

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

Nicht-strikte Funktionen, die [Rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standard](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierte](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter übergeben bekommen, synchronisieren keine neuen Werte, die im Funktionskörper den Parametern zugewiesen werden, mit dem `arguments` Objekt. Stattdessen spiegelt das `arguments` Objekt in nicht-strikten Funktionen mit komplexen Parametern immer die Werte wider, die bei Aufruf der Funktion übergeben wurden.

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

Dies ist das gleiche Verhalten, das von allen [Strict-Mode-Funktionen](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) gezeigt wird, unabhängig von der Art der übergebenen Parameter. Das heißt, das Zuweisen neuer Werte zu Parametern im Körper der Funktion beeinflusst niemals das `arguments` Objekt, noch beeinflusst das Zuweisen neuer Werte zu den Indizes von `arguments` den Wert von Parametern, selbst wenn die Funktion nur einfache Parameter hat.

> [!NOTE]
> Sie können keine `"use strict";` Direktive im Körper einer Funktionsdefinition schreiben, die Rest-, Standard- oder destrukturierte Parameter akzeptiert. Dies würde [einen Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params) auslösen.

### `arguments` ist ein array-ähnliches Objekt

`arguments` ist ein array-ähnliches Objekt, was bedeutet, dass `arguments` eine {{jsxref("Functions/arguments/length", "length")}} Eigenschaft und Eigenschaften indiziert ab null hat, aber nicht über die eingebauten Methoden von {{jsxref("Array")}} wie {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/map", "map()")}} verfügt. Es kann jedoch in ein echtes `Array` konvertiert werden, indem einer der [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}}, oder [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet wird.

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

Für häufige Anwendungsfälle ist es ausreichend, es als array-ähnliches Objekt zu verwenden, da es sowohl [iterierbar ist](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) als auch `length` und numerische Indizes hat. Zum Beispiel akzeptiert [`Function.prototype.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) array-ähnliche Objekte.

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
  - : Referenz auf die aktuell ausgeführte Funktion, zu der die Argumente gehören. Im Strict-Mode verboten.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Die Anzahl der Argumente, die an die Funktion übergeben wurden.
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Gibt ein neues [Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) Objekt zurück, das die Werte für jeden Index in `arguments` enthält.

## Beispiele

### Definieren einer Funktion, die mehrere Strings zusammenfügt

Dieses Beispiel definiert eine Funktion, die mehrere Strings zusammenfügt. Das einzige formale Argument der Funktion ist ein String, der die Zeichen enthält, die die Elemente zum Zusammenfügen trennen.

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Sie können beliebig viele Argumente an diese Funktion übergeben. Sie gibt eine String-Liste zurück, die jedes Argument in der Liste verwendet:

```js
myConcat(", ", "red", "orange", "blue");
// "red, orange, blue"

myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "elephant; giraffe; lion; cheetah"

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// "sage. basil. oregano. pepper. parsley"
```

### Definieren einer Funktion, die HTML-Listen erstellt

Dieses Beispiel definiert eine Funktion, die einen String erstellt, der HTML für eine Liste enthält. Das einzige formale Argument der Funktion ist ein String, der `"u"` ist, wenn die Liste [ungeordnet (bulleted)](/de/docs/Web/HTML/Reference/Elements/ul) sein soll, oder `"o"`, wenn die Liste [geordnet (nummeriert)](/de/docs/Web/HTML/Reference/Elements/ol) sein soll. Die Funktion ist wie folgt definiert:

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // end list
  return html;
}
```

Sie können beliebig viele Argumente an diese Funktion übergeben, und sie fügt jedes Argument als Listenelement zu einer Liste des angegebenen Typs hinzu. Zum Beispiel:

```js
list("u", "One", "Two", "Three");
// "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
```

### Verwendung von `typeof` mit `arguments`

Der {{jsxref("Operators/typeof", "typeof")}} Operator gibt `'object'` zurück, wenn er mit `arguments` verwendet wird.

```js
console.log(typeof arguments); // 'object'
```

Der Typ einzelner Argumente kann ermittelt werden, indem `arguments` indiziert wird:

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
