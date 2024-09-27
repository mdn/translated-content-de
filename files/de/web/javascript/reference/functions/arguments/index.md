---
title: Das `arguments` Objekt
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}

**`arguments`** ist ein array-ähnliches Objekt, das innerhalb von [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) zugänglich ist und die Werte der an diese Funktion übergebenen Argumente enthält.

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

## Beschreibung

> [!NOTE]
> In modernem Code sollten [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) bevorzugt werden.

Das `arguments` Objekt ist eine lokale Variable, die in allen nicht-[arrow](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Funktionen verfügbar ist. Sie können auf die Argumente einer Funktion innerhalb dieser Funktion zugreifen, indem Sie ihr `arguments` Objekt verwenden. Es enthält Einträge für jedes Argument, mit dem die Funktion aufgerufen wurde, wobei der Index des ersten Eintrags bei `0` startet.

Zum Beispiel, wenn eine Funktion mit 3 Argumenten aufgerufen wird, können Sie auf sie wie folgt zugreifen:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

Das `arguments` Objekt ist nützlich für Funktionen, die mit mehr Argumenten aufgerufen werden, als sie formell deklariert haben, sogenannte [_variadic functions_](https://de.wikipedia.org/wiki/Variadic_function), wie z.B. {{jsxref("Math.min()")}}. Diese Beispiel-Funktion akzeptiert beliebig viele String-Argumente und gibt das längste zurück:

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

Sie können {{jsxref("Functions/arguments/length", "arguments.length")}} verwenden, um zu zählen, mit wie vielen Argumenten die Funktion aufgerufen wurde. Wenn Sie stattdessen zählen möchten, wie viele Parameter eine Funktion deklariert hat, können Sie die {{jsxref("Function/length", "length")}} Eigenschaft dieser Funktion überprüfen.

### Zuweisung zu Indizes

Jeder Argumentindex kann ebenfalls gesetzt oder neu zugewiesen werden:

```js
arguments[1] = "new value";
```

Nicht-strikte Funktionen, die nur einfache Parameter haben (d.h. keine Rest-, Standard- oder destrukturierten Parameter), werden die neuen Werte der Parameter mit dem `arguments` Objekt synchronisieren und umgekehrt:

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

Nicht-strikte Funktionen, die [Rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standard](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierte](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parameter übergeben bekommen haben, werden neue Werte, die den Parametern im Funktionskörper zugewiesen werden, nicht mit dem `arguments` Objekt synchronisieren. Stattdessen wird das `arguments` Objekt in nicht-strikten Funktionen mit komplexen Parametern immer die Werte widerspiegeln, die der Funktion beim Aufruf übergeben wurden.

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

Dies ist das gleiche Verhalten, das alle [Strict-Mode-Funktionen](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) zeigen, unabhängig vom Typ der ihnen übergebenen Parameter. Das bedeutet, dass neue Werte, die Parametern im Funktionskörper zugewiesen werden, niemals das `arguments` Objekt beeinflussen, und dass neue Werte, die den `arguments` Indizes zugewiesen werden, niemals den Wert der Parameter beeinflussen, selbst wenn die Funktion nur einfache Parameter hat.

> [!NOTE]
> Sie können keine `"use strict";` Direktive im Körper einer Funktionsdefinition schreiben, die Rest-, Standard- oder destrukturierte Parameter akzeptiert. Dies wird einen [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params) auslösen.

### arguments ist ein array-ähnliches Objekt

`arguments` ist ein array-ähnliches Objekt, was bedeutet, dass `arguments` eine {{jsxref("Functions/arguments/length", "length")}} Eigenschaft und von Null indizierte Eigenschaften hat, aber es hat nicht die integrierten Methoden von {{jsxref("Array")}} wie {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/map", "map()")}}. Es kann jedoch in ein echtes `Array` umgewandelt werden, indem man einen von [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}} oder [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet.

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

Für allgemeine Anwendungsfälle ist die Verwendung als array-ähnliches Objekt ausreichend, da es sowohl [iterierbar ist](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) als auch `length` und nummerierte Indizes hat. Zum Beispiel akzeptiert [`Function.prototype.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) array-ähnliche Objekte.

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
  - : Referenz auf die derzeit ausgeführte Funktion, zu der die Argumente gehören. Verboten im Strict-Mode.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Die Anzahl der Argumente, die an die Funktion übergeben wurden.
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Gibt ein neues [Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) Objekt zurück, das die Werte für jeden Index im `arguments` Objekt enthält.

## Beispiele

### Definition einer Funktion, die mehrere Strings verbindet

Dieses Beispiel definiert eine Funktion, die mehrere Strings verbindet. Das einzige formale Argument der Funktion ist ein String, der die Zeichen enthält, die die zu verbindenden Elemente trennen.

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Sie können dieser Funktion so viele Argumente übergeben, wie Sie möchten. Sie gibt eine String-Liste zurück, die jedes Argument in der Liste verwendet:

```js
myConcat(", ", "red", "orange", "blue");
// "red, orange, blue"

myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "elephant; giraffe; lion; cheetah"

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// "sage. basil. oregano. pepper. parsley"
```

### Definition einer Funktion, die HTML-Listen erstellt

Dieses Beispiel definiert eine Funktion, die einen String enthält, der HTML für eine Liste erstellt. Das einzige formale Argument für die Funktion ist ein String, der `"u"` ist, wenn die Liste nicht geordnet (mit Punkt) sein soll, oder `"o"`, wenn die Liste geordnet (nummeriert) sein soll. Die Funktion ist wie folgt definiert:

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // end list
  return html;
}
```

Sie können dieser Funktion beliebig viele Argumente übergeben, und sie fügt jedes Argument als Listeneintrag zu einer Liste des angegebenen Typs hinzu. Zum Beispiel:

```js
list("u", "One", "Two", "Three");
// "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
```

### Verwendung von typeof mit arguments

Der {{jsxref("Operators/typeof", "typeof")}} Operator gibt `'object'` zurück, wenn er mit `arguments` verwendet wird

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

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
