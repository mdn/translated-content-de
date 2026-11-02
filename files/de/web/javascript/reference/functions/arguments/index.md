---
title: Das arguments-Objekt
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

**`arguments`** ist ein Array-ähnliches Objekt, das innerhalb von [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) verfügbar ist und die Werte der an die Funktion übergebenen Argumente enthält.

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

Das `arguments`-Objekt ist eine lokale Variable, die in allen Funktionen verfügbar ist, die keine [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) sind. Innerhalb einer Funktion können Sie über deren `arguments`-Objekt auf die Argumente zugreifen. Es enthält für jedes Argument, mit dem die Funktion aufgerufen wurde, einen Eintrag. Der erste Eintrag hat den Index `0`.

Wenn einer Funktion beispielsweise drei Argumente übergeben werden, können Sie wie folgt darauf zugreifen:

```js
arguments[0]; // first argument
arguments[1]; // second argument
arguments[2]; // third argument
```

Das `arguments`-Objekt ist nützlich für Funktionen, die mit mehr Argumenten aufgerufen werden können, als sie formal als Parameter deklarieren. Solche Funktionen werden [_variadische Funktionen_](https://en.wikipedia.org/wiki/Variadic_function) genannt; ein Beispiel ist {{jsxref("Math.min()")}}. Die folgende Beispielfunktion akzeptiert beliebig viele Strings als Argumente und gibt den längsten zurück:

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

Mit {{jsxref("Functions/arguments/length", "arguments.length")}} können Sie ermitteln, mit wie vielen Argumenten die Funktion aufgerufen wurde. Wenn Sie stattdessen ermitteln möchten, wie viele Parameter eine Funktion laut ihrer Deklaration akzeptiert, prüfen Sie die Eigenschaft {{jsxref("Function/length", "length")}} dieser Funktion.

### Werten an Indizes zuweisen

Jedem Argumentindex kann auch ein Wert zugewiesen oder erneut zugewiesen werden:

```js
arguments[1] = "new value";
```

Bei Funktionen außerhalb des Strict Mode, die ausschließlich einfache Parameter haben (also keine Rest-, Default- oder destrukturierten Parameter), werden neue Parameterwerte mit dem `arguments`-Objekt synchronisiert und umgekehrt:

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

Bei Funktionen außerhalb des Strict Mode, die _Rest-Parameter_(/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [Default-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) oder [destrukturierte Parameter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) haben, werden im Funktionskörper neu zugewiesene Parameterwerte nicht mit dem `arguments`-Objekt synchronisiert. Stattdessen enthält das `arguments`-Objekt bei solchen Funktionen mit komplexen Parametern stets die Werte, die beim Aufruf der Funktion übergeben wurden.

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

Dasselbe Verhalten zeigen alle [Funktionen im Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler), unabhängig von der Art ihrer Parameter. Wenn Sie Parametern im Funktionskörper neue Werte zuweisen, wirkt sich das nie auf das `arguments`-Objekt aus. Ebenso wenig wirkt sich die Zuweisung neuer Werte an Indizes von `arguments` auf die Parameterwerte aus – selbst wenn die Funktion nur einfache Parameter hat.

> [!NOTE]
> Im Funktionskörper einer Funktion mit Rest-, Default- oder destrukturierten Parametern können Sie keine `"use strict";`-Direktive schreiben. Dies führt zu [einem Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

### arguments ist ein Array-ähnliches Objekt

`arguments` ist ein Array-ähnliches Objekt. Das bedeutet, dass `arguments` eine Eigenschaft {{jsxref("Functions/arguments/length", "length")}} und ab null indizierte Eigenschaften besitzt, aber nicht über die integrierten Methoden von {{jsxref("Array")}} wie {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/map", "map()")}} verfügt. Es kann jedoch mit [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}} oder der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in ein echtes `Array` umgewandelt werden.

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

Für häufige Anwendungsfälle reicht es aus, `arguments` als Array-ähnliches Objekt zu verwenden, da es [iterierbar ist](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) und über `length` sowie numerische Indizes verfügt. Beispielsweise akzeptiert [`Function.prototype.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) Array-ähnliche Objekte.

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
  - : Referenz auf die gerade ausgeführte Funktion, zu der die Argumente gehören. Im Strict Mode verboten.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Die Anzahl der an die Funktion übergebenen Argumente.
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Gibt ein neues [Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)-Objekt zurück, das die Werte für jeden Index in `arguments` enthält.

## Beispiele

### Eine Funktion definieren, die mehrere Strings verkettet

Dieses Beispiel definiert eine Funktion, die mehrere Strings verkettet. Der einzige formal deklarierte Parameter der Funktion ist ein String mit den Zeichen, durch die die zu verkettenden Elemente getrennt werden.

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Sie können dieser Funktion beliebig viele Argumente übergeben. Sie gibt eine Liste als String zurück, die jedes übergebene Argument enthält:

```js
myConcat(", ", "red", "orange", "blue");
// "red, orange, blue"

myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "elephant; giraffe; lion; cheetah"

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// "sage. basil. oregano. pepper. parsley"
```

### Eine Funktion definieren, die HTML-Listen erstellt

Dieses Beispiel definiert eine Funktion, die einen String mit dem HTML-Code für eine Liste erstellt. Der einzige formal deklarierte Parameter der Funktion ist ein String: `"u"` für eine [ungeordnete Liste (mit Aufzählungszeichen)](/de/docs/Web/HTML/Reference/Elements/ul) oder `"o"` für eine [geordnete Liste (mit Nummerierung)](/de/docs/Web/HTML/Reference/Elements/ol). Die Funktion ist wie folgt definiert:

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // end list
  return html;
}
```

Sie können dieser Funktion beliebig viele Argumente übergeben. Sie fügt jedes Argument als Listenelement zu einer Liste des angegebenen Typs hinzu. Zum Beispiel:

```js
list("u", "One", "Two", "Three");
// "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
```

### typeof mit arguments verwenden

Der Operator {{jsxref("Operators/typeof", "typeof")}} gibt bei Anwendung auf `arguments` `'object'` zurück:

```js
console.log(typeof arguments); // 'object'
```

Den Typ einzelner Argumente können Sie ermitteln, indem Sie über den jeweiligen Index auf `arguments` zugreifen:

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
