---
title: Das arguments-Objekt
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{jsSidebar("Functions")}}

**`arguments`** ist ein arrayähnliches Objekt, das innerhalb von [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) zugänglich ist und die übergebenen Argumentwerte dieser Funktion enthält.

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

Das `arguments`-Objekt ist eine lokale Variable, die innerhalb aller nicht-[arrow](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Funktionen verfügbar ist. Sie können auf die Argumente einer Funktion innerhalb dieser Funktion über das `arguments`-Objekt zugreifen. Es hat Einträge für jedes Argument, mit dem die Funktion aufgerufen wurde, wobei der Index des ersten Eintrags bei `0` beginnt.

Beispielsweise, wenn eine Funktion mit 3 Argumenten aufgerufen wird, können Sie auf sie wie folgt zugreifen:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

Das `arguments`-Objekt ist nützlich für Funktionen, die mit mehr Argumenten aufgerufen werden, als sie formell zu akzeptieren deklariert sind, sogenannte [_variadic functions_](https://en.wikipedia.org/wiki/Variadic_function), wie z.B. {{jsxref("Math.min()")}}. Diese Beispiel-Funktion akzeptiert eine beliebige Anzahl von Zeichenfolgenargumenten und gibt die längste zurück:

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

Sie können {{jsxref("Functions/arguments/length", "arguments.length")}} verwenden, um zu zählen, wie viele Argumente die Funktion mitgegeben wurden. Wenn Sie stattdessen zählen möchten, wie viele Parameter eine Funktion zu akzeptieren deklariert ist, inspizieren Sie die {{jsxref("Function/length", "length")}}-Eigenschaft dieser Funktion.

### Zuweisung zu Indizes

Jeder Argumentindex kann auch gesetzt oder neu zugewiesen werden:

```js
arguments[1] = "new value";
```

Nicht-strikte Funktionen, die nur einfache Parameter haben (d.h. keine Rest-, Default- oder destrukturierten Parameter), synchronisieren den neuen Wert der Parameter mit dem `arguments`-Objekt und umgekehrt:

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

Nicht-strikte Funktionen, denen [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierte](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter übergeben werden, synchronisieren keine neuen Werte, die den Parametern im Funktionskörper zugewiesen werden, mit dem `arguments`-Objekt. Stattdessen reflektiert das `arguments`-Objekt in nicht-strikten Funktionen mit komplexen Parametern immer die Werte, die der Funktion beim Aufruf übergeben wurden.

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

Dies ist dasselbe Verhalten, das alle [strict-mode-Funktionen](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) zeigen, unabhängig von der Art der Parameter, die ihnen übergeben werden. Das heißt, das Zuweisen neuer Werte zu Parametern im Körper der Funktion beeinflusst niemals das `arguments`-Objekt, noch bewirkt das Zuweisen neuer Werte zu den `arguments`-Indizes irgendwelche Änderungen an den Parameterwerten, selbst wenn die Funktion nur einfache Parameter hat.

> [!NOTE]
> Sie können keine `"use strict";` Direktive im Körper einer Funktionsdefinition schreiben, die Rest-, Default- oder destrukturierte Parameter akzeptiert. Dies würde [einen Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params) auslösen.

### arguments ist ein array-ähnliches Objekt

`arguments` ist ein array-ähnliches Objekt, was bedeutet, dass `arguments` eine {{jsxref("Functions/arguments/length", "length")}}-Eigenschaft und Eigenschaften hat, die von Null indiziert sind, aber es fehlen die eingebauten Methoden von {{jsxref("Array")}} wie {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/map", "map()")}}. Es kann jedoch in ein echtes `Array` umgewandelt werden, indem man eine der Methoden [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}} oder [spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet.

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

Für häufige Anwendungsfälle reicht es aus, es als ein array-ähnliches Objekt zu verwenden, da es sowohl [iterierbar ist](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) als auch `length` und nummerische Indizes besitzt. Zum Beispiel akzeptiert [`Function.prototype.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) array-ähnliche Objekte.

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
  - : Referenz auf die derzeit ausgeführte Funktion, zu der die Argumente gehören. In Strict Mode verboten.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Die Anzahl der Argumente, die der Funktion übergeben wurden.
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Gibt ein neues [Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) zurück, das die Werte für jeden Index in `arguments` enthält.

## Beispiele

### Definieren einer Funktion, die mehrere Zeichenfolgen verbindet

Dieses Beispiel definiert eine Funktion, die mehrere Zeichenfolgen verbindet. Das einzige formale Argument der Funktion ist eine Zeichenfolge, die die Zeichen enthält, die die zu verbindenden Elemente trennen.

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Sie können dieser Funktion so viele Argumente übergeben, wie Sie möchten. Sie gibt eine Zeichenfolgenliste zurück, die jedes Argument in der Liste verwendet:

```js
myConcat(", ", "red", "orange", "blue");
// "red, orange, blue"

myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "elephant; giraffe; lion; cheetah"

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// "sage. basil. oregano. pepper. parsley"
```

### Definieren einer Funktion, die HTML-Listen erstellt

Dieses Beispiel definiert eine Funktion, die eine Zeichenfolge enthält, die HTML für eine Liste erstellt. Das einzige formale Argument der Funktion ist eine Zeichenfolge, die `"u"` ist, wenn die Liste [ungeordnet (mit Aufzählungszeichen)](/de/docs/Web/HTML/Reference/Elements/ul) sein soll, oder `"o"`, wenn die Liste [geordnet (nummeriert)](/de/docs/Web/HTML/Reference/Elements/ol) sein soll. Die Funktion wird wie folgt definiert:

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // end list
  return html;
}
```

Sie können dieser Funktion eine beliebige Anzahl von Argumenten übergeben, und sie fügt jedes Argument als Listenpunkt zu einer Liste des angegebenen Typs hinzu. Zum Beispiel:

```js
list("u", "One", "Two", "Three");
// "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
```

### Verwendung von typeof mit arguments

Der Operator {{jsxref("Operators/typeof", "typeof")}} gibt `'object'` zurück, wenn er mit `arguments` verwendet wird.

```js
console.log(typeof arguments); // 'object'
```

Der Typ einzelner Argumente kann über die Indizierung von `arguments` ermittelt werden:

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
