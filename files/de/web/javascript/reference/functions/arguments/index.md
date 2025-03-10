---
title: Das `arguments`-Objekt
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Functions")}}

**`arguments`** ist ein array-ähnliches Objekt, das in [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) zugänglich ist und die Werte der an diese Funktion übergebenen Argumente enthält.

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

Das `arguments`-Objekt ist eine lokale Variable, die in allen nicht-[Arrow](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)-Funktionen verfügbar ist. Sie können auf die Argumente einer Funktion innerhalb dieser Funktion mit ihrem `arguments`-Objekt zugreifen. Es enthält Einträge für jedes Argument, mit dem die Funktion aufgerufen wurde, wobei der Index des ersten Eintrags `0` ist.

Wenn beispielsweise eine Funktion mit 3 Argumenten aufgerufen wird, können Sie auf diese wie folgt zugreifen:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

Das `arguments`-Objekt ist nützlich für Funktionen, die mit mehr Argumenten aufgerufen werden, als sie formell deklariert sind, sogenannte [_variadische Funktionen_](https://en.wikipedia.org/wiki/Variadic_function), wie z.B. {{jsxref("Math.min()")}}. Diese Beispiel-Funktion akzeptiert eine beliebige Anzahl von String-Argumenten und gibt das längste zurück:

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

Sie können {{jsxref("Functions/arguments/length", "arguments.length")}} verwenden, um zu zählen, mit wie vielen Argumenten die Funktion aufgerufen wurde. Wenn Sie stattdessen zählen möchten, wie viele Parameter eine Funktion deklariert, verwenden Sie die {{jsxref("Function/length", "length")}}-Eigenschaft dieser Funktion.

### Zuordnen zu Indizes

Jeder Argumentindex kann auch gesetzt oder neu zugewiesen werden:

```js
arguments[1] = "new value";
```

Nicht-strikte Funktionen, die nur einfache Parameter haben (d.h. keine Rest-, Standard- oder destrukturierten Parameter), synchronisieren den neuen Wert der Parameter mit dem `arguments`-Objekt und umgekehrt:

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

Nicht-strikte Funktionen, die [Rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-, [Standard](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)- oder [destrukturierte](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter übergeben bekommen, synchronisieren neue Werte, die den Parametern im Funktionskörper zugewiesen werden, nicht mit dem `arguments`-Objekt. Stattdessen spiegelt das `arguments`-Objekt in nicht-strikten Funktionen mit komplexen Parametern immer die Werte wider, die der Funktion beim Aufruf übergeben wurden.

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

Dies ist dasselbe Verhalten, das alle [Strict-Mode-Funktionen](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) zeigen, unabhängig von der Art der übergebenen Parameter. Das heißt, das Zuweisen neuer Werte zu Parametern im Körper der Funktion beeinflusst nie das `arguments`-Objekt, ebenso wenig wie das Zuweisen neuer Werte zu den `arguments`-Indizes die Werte der Parameter beeinflusst, selbst wenn die Funktion nur einfache Parameter hat.

> [!NOTE]
> Sie können keine `"use strict";`-Direktive im Körper einer Funktionsdefinition schreiben, die Rest-, Standard- oder destrukturierte Parameter akzeptiert. Andernfalls wird [ein Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params) ausgelöst.

### arguments ist ein array-ähnliches Objekt

`arguments` ist ein array-ähnliches Objekt, was bedeutet, dass `arguments` eine {{jsxref("Functions/arguments/length", "length")}}-Eigenschaft und von Null indizierte Eigenschaften hat, aber nicht über eingebaute Methoden des {{jsxref("Array")}} wie {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/map", "map()")}} verfügt. Es kann jedoch mit einer der Methoden [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}} oder dem [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in ein echtes Array konvertiert werden.

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

Für gängige Anwendungsfälle reicht es aus, es als array-ähnliches Objekt zu verwenden, da es sowohl [iterierbar ist](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) als auch `length` und Zahlenindizes besitzt. Zum Beispiel akzeptiert [`Function.prototype.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) array-ähnliche Objekte.

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
  - : Referenz auf die aktuell ausführende Funktion, zu der die Argumente gehören. Im Strict-Mode verboten.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Die Anzahl der Argumente, die der Funktion übergeben wurden.
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Gibt ein neues [Array-Iteraturobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) zurück, das die Werte für jeden Index in `arguments` enthält.

## Beispiele

### Definieren einer Funktion, die mehrere Zeichenfolgen zusammenfügt

Dieses Beispiel definiert eine Funktion, die mehrere Zeichenfolgen zusammenfügt. Das einzige formale Argument der Funktion ist eine Zeichenfolge, die die Zeichen enthält, die die zu verknüpfenden Elemente trennen.

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

Dieses Beispiel definiert eine Funktion, die einen String mit HTML für eine Liste erstellt. Das einzige formale Argument der Funktion ist eine Zeichenfolge, die `"u"` ist, wenn die Liste [ungeordnet (mit Aufzählungszeichen)](/de/docs/Web/HTML/Element/ul) sein soll, oder `"o"`, wenn die Liste [geordnet (nummeriert)](/de/docs/Web/HTML/Element/ol) sein soll. Die Funktion wird wie folgt definiert:

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

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
