---
title: Das arguments Objekt
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}

**`arguments`** ist ein array-ähnliches Objekt, das in [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) zugänglich ist und die Werte der an diese Funktion übergebenen Argumente enthält.

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

## Beschreibung

> [!NOTE]
> In modernem Code sollten [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) bevorzugt werden.

Das `arguments` Objekt ist eine lokale Variable, die innerhalb aller Nicht-[Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verfügbar ist. Sie können auf die Argumente einer Funktion innerhalb dieser Funktion mithilfe ihres `arguments` Objekts zugreifen. Es hat Einträge für jedes Argument, mit dem die Funktion aufgerufen wurde, wobei der Index des ersten Eintrags `0` ist.

Zum Beispiel, wenn einer Funktion 3 Argumente übergeben werden, können Sie auf sie wie folgt zugreifen:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

Das `arguments` Objekt ist nützlich für Funktionen, die mit mehr Argumenten aufgerufen werden, als sie formell akzeptieren, sogenannte [_variadic functions_](https://en.wikipedia.org/wiki/Variadic_function), wie z.B. {{jsxref("Math.min()")}}. Diese Beispiel-Funktion akzeptiert eine beliebige Anzahl von Zeichenkettenargumenten und gibt die längste zurück:

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

Sie können {{jsxref("Functions/arguments/length", "arguments.length")}} verwenden, um zu zählen, wie viele Argumente die Funktion aufgerufen wurde. Wenn Sie stattdessen zählen möchten, wie viele Parameter eine Funktion deklariert akzeptieren kann, prüfen Sie die {{jsxref("Function/length", "length")}} Eigenschaft dieser Funktion.

### Zuordnung zu Indizes

Jeder Argumentindex kann auch gesetzt oder neu zugewiesen werden:

```js
arguments[1] = "new value";
```

Nicht-strikte Funktionen, die nur einfache Parameter haben (d.h. keine Rest-, Default- oder Destrukturierungs-Parameter), synchronisieren den neuen Wert von Parametern mit dem `arguments` Objekt und umgekehrt:

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

Nicht-strikte Funktionen, denen hingegen [Rest-](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Standard-](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierte](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parameter übergeben werden, werden neue Werte, die in der Funktionsklasse zugewiesen werden, nicht mit dem `arguments` Objekt synchronisieren. Stattdessen spiegelt das `arguments` Objekt in nicht-strikten Funktionen mit komplexen Parametern immer die Werte wider, die der Funktion beim Aufruf übergeben wurden.

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

Dies ist dasselbe Verhalten, das alle [Strict-Mode-Funktionen](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) aufweisen, unabhängig davon, welchen Typ von Parametern sie übergeben bekommen. Das heißt, das Zuweisen neuer Werte zu Parametern im Funktionskörper beeinflusst nie das `arguments` Objekt und das Zuweisen neuer Werte zu den `arguments` Indizes ändert den Wert der Parameter auch nicht, selbst wenn die Funktion nur einfache Parameter hat.

> [!NOTE]
> Sie können keine `"use strict";` Direktive im Körper einer Funktionsdefinition schreiben, die Rest-, Default- oder Destrukturierungs-Parameter akzeptiert. Dies würde [einen Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params) werfen.

### arguments ist ein array-ähnliches Objekt

`arguments` ist ein array-ähnliches Objekt, was bedeutet, dass `arguments` eine {{jsxref("Functions/arguments/length", "length")}} Eigenschaft und von null aus indizierte Eigenschaften hat, aber nicht die eingebauten Methoden von {{jsxref("Array")}} wie {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/map", "map()")}} besitzt. Es kann jedoch in ein echtes `Array` umgewandelt werden, indem eines von [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}}, oder die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet wird.

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

Für gängige Anwendungsfälle genügt es, `arguments` als array-ähnliches Objekt zu verwenden, da es sowohl [iterierbar ist](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) als auch eine `length` Eigenschaft und nummerische Indizes hat. Zum Beispiel akzeptiert [`Function.prototype.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) array-ähnliche Objekte.

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
  - : Verweis auf die aktuell ausgeführte Funktion, zu der die Argumente gehören. Im Strict-Modus verboten.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Die Anzahl der Argumente, die der Funktion übergeben wurden.
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Gibt ein neues [Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) Objekt zurück, das die Werte für jeden Index in `arguments` enthält.

## Beispiele

### Definieren einer Funktion, die mehrere Zeichenketten verknüpft

Dieses Beispiel definiert eine Funktion, die mehrere Zeichenketten verknüpft. Das einzige formelle Argument der Funktion ist eine Zeichenkette, die die Zeichen enthält, die die zu verknüpfenden Elemente trennen.

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Sie können dieser Funktion so viele Argumente übergeben, wie Sie möchten. Sie gibt einen Zeichenkettenliste zurück, die jedes Argument in der Liste verwendet:

```js
myConcat(", ", "red", "orange", "blue");
// "red, orange, blue"

myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "elephant; giraffe; lion; cheetah"

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// "sage. basil. oregano. pepper. parsley"
```

### Definieren einer Funktion, die HTML-Listen erstellt

Dieses Beispiel definiert eine Funktion, die eine Zeichenkette enthält, die HTML für eine Liste generiert. Das einzige formelle Argument für die Funktion ist eine Zeichenkette, die `"u"` ist, wenn die Liste [ungeordnet (aufgezählt)](/de/docs/Web/HTML/Element/ul) sein soll, oder `"o"`, wenn die Liste [geordnet (nummeriert)](/de/docs/Web/HTML/Element/ol) sein soll. Die Funktion ist wie folgt definiert:

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

### Verwenden von typeof mit arguments

Der {{jsxref("Operators/typeof", "typeof")}} Operator gibt `'object'` zurück, wenn er mit `arguments` verwendet wird

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

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
