---
title: Das `arguments`-Objekt
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
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

Das `arguments`-Objekt ist eine lokale Variable, die innerhalb aller nicht-[arrow](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)-Funktionen verfügbar ist. Sie können auf die Argumente einer Funktion innerhalb dieser Funktion über ihr `arguments`-Objekt zugreifen. Es hat Einträge für jedes Argument, mit dem die Funktion aufgerufen wurde, wobei der Index des ersten Eintrags bei `0` liegt.

Beispielsweise, wenn eine Funktion mit 3 Argumenten aufgerufen wird, können Sie auf sie wie folgt zugreifen:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

Das `arguments`-Objekt ist nützlich für Funktionen, die mit mehr Argumenten aufgerufen werden, als sie formal deklariert haben, sogenannte [_variadische Funktionen_](https://en.wikipedia.org/wiki/Variadic_function), wie z.B. {{jsxref("Math.min()")}}. Diese Beispiel-Funktion akzeptiert eine beliebige Anzahl von String-Argumenten und gibt das längste davon zurück:

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

Sie können {{jsxref("Functions/arguments/length", "arguments.length")}} verwenden, um zu zählen, mit wie vielen Argumenten die Funktion aufgerufen wurde. Wenn Sie stattdessen zählen möchten, wie viele Parameter eine Funktion deklariert hat, untersuchen Sie die {{jsxref("Function/length", "length")}}-Eigenschaft dieser Funktion.

### Indizes zuweisen

Jeder Argumentindex kann auch gesetzt oder neu zugewiesen werden:

```js
arguments[1] = "new value";
```

Nicht-strikte Funktionen, die nur einfache Parameter haben (d.h. keine Rest-, Standard- oder destrukturierten Parameter), synchronisieren den neuen Wert der Parameter mit dem `arguments`-Objekt, und umgekehrt:

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

Nicht-strikte Funktionen, die _Rest_-([rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)), _Standard_-([default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)) oder _destrukturierte_([destructured](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)) Parameter übergeben bekommen, werden neue zugewiesene Werte der Parameter im Funktionskörper nicht mit dem `arguments`-Objekt synchronisieren. Stattdessen wird das `arguments`-Objekt in nicht-strikten Funktionen mit komplexen Parametern immer die Werte reflektieren, die der Funktion beim Aufruf übergeben wurden.

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

Dies ist das gleiche Verhalten, das alle [strict-mode Funktionen](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) zeigen, unabhängig davon, welche Art von Parametern sie übergeben bekommen. Das heißt, das Zuweisen neuer Werte zu den Parametern im Körper der Funktion beeinflusst niemals das `arguments`-Objekt, und das Zuweisen neuer Werte zu den `arguments`-Indizes beeinflusst auch nicht den Wert der Parameter, selbst wenn die Funktion nur einfache Parameter hat.

> [!NOTE]
> Sie können keine `"use strict";`-Direktive im Körper einer Funktionsdefinition schreiben, die Rest-, Standard- oder destrukturierte Parameter akzeptiert. Ein solcher Versuch führt zu [einem Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

### `arguments` ist ein array-ähnliches Objekt

`arguments` ist ein array-ähnliches Objekt, was bedeutet, dass `arguments` eine {{jsxref("Functions/arguments/length", "length")}}-Eigenschaft und von null indizierte Eigenschaften hat, aber nicht über die eingebauten Methoden des `Array` wie `{{jsxref("Array/forEach", "forEach()")}}` oder `{{jsxref("Array/map", "map()")}}` verfügt. Es kann jedoch in ein echtes `Array` umgewandelt werden, indem einer von [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}}, oder [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet wird.

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

Für allgemeine Anwendungsfälle reicht es aus, `arguments` als array-ähnliches Objekt zu verwenden, da es sowohl [iterierbar ist](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) als auch `length` und nummerierte Indizes hat. Zum Beispiel akzeptiert [`Function.prototype.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) array-ähnliche Objekte.

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
  - : Referenz auf die derzeit ausgeführte Funktion, zu der die Argumente gehören. In strict mode verboten.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Die Anzahl der Argumente, die an die Funktion übergeben wurden.
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Gibt ein neues [Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)-Objekt zurück, das die Werte für jeden Index in `arguments` enthält.

## Beispiele

### Definieren einer Funktion, die mehrere Strings konkateniert

Dieses Beispiel definiert eine Funktion, die mehrere Strings konkateniert. Das einzige formale Argument der Funktion ist ein String, der die Zeichen enthält, die die zu konkatenierenden Elemente trennen.

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

Dieses Beispiel definiert eine Funktion, die einen String enthält, der HTML für eine Liste erstellt. Das einzige formale Argument für die Funktion ist ein Zeichenkette, die `"u"` ist, wenn die Liste [ungeordnet (mit Aufzählungszeichen)](/de/docs/Web/HTML/Element/ul), oder `"o"` ist, wenn die Liste [geordnet (nummeriert)](/de/docs/Web/HTML/Element/ol) sein soll. Die Funktion wird folgendermaßen definiert:

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

Der {{jsxref("Operators/typeof", "typeof")}}-Operator gibt `'object'` zurück, wenn er mit `arguments` verwendet wird

```js
console.log(typeof arguments); // 'object'
```

Der Typ einzelner Argumente kann durch Indizierung von `arguments` bestimmt werden:

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
