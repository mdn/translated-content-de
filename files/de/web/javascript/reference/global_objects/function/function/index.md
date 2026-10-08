---
title: Function()-Konstruktor
short-title: Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: 06f8ebf948372dfb6c3c22d26d4f672c99cd4e0d
---

> [!WARNING]
> Die an diesen Konstruktor übergebenen Argumente werden dynamisch als JavaScript geparst und ausgeführt.
> APIs wie diese gelten als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können einen Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Strings übergeben und die [Verwendung von Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Der **`Function()`**-Konstruktor erstellt {{jsxref("Function")}}-Objekte. Durch den direkten Aufruf des Konstruktors lassen sich Funktionen dynamisch erstellen. Dies bringt jedoch Sicherheitsprobleme und ähnliche, wenn auch weitaus weniger bedeutende, Leistungsprobleme mit sich wie {{jsxref("Global_Objects/eval", "eval()")}}. Anders als `eval` (das möglicherweise Zugriff auf den lokalen Gültigkeitsbereich hat) erstellt der `Function`-Konstruktor jedoch Funktionen, die ausschließlich im globalen Gültigkeitsbereich ausgeführt werden.

{{InteractiveExample("JavaScript Demo: Function() constructor", "shorter")}}

```js interactive-example
const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
// Expected output: 8
```

## Syntax

```js-nolint
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, arg2, /* …, */ argN, functionBody)

Function(functionBody)
Function(arg1, functionBody)
Function(arg1, arg2, functionBody)
Function(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `Function()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. In beiden Fällen wird eine neue `Function`-Instanz erstellt.

### Parameter

- `arg1`, …, `argN` {{optional_inline}}
  - : [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen oder Strings, die Namen für die formalen Parameter der Funktion angeben. Der Wert muss einem gültigen JavaScript-Parameter entsprechen (einem einfachen {{Glossary("Identifier", "Bezeichner")}}, einem [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) oder einem [destrukturierten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter, optional mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)) oder einer durch Kommas getrennten Liste solcher Strings.

    Da die Parameter auf dieselbe Weise wie Funktionsausdrücke geparst werden, sind Leerzeichen und Kommentare zulässig. Zum Beispiel: `"x", "theValue = 42", "[a, b] /* numbers */"` – oder `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` ist ebenfalls korrekt, wenn auch sehr schwer zu lesen.)

- `functionBody`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String mit den JavaScript-Anweisungen, aus denen die Funktionsdefinition besteht.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Die Argumente für die Funktionsparameter können nicht als gültige Parameterliste geparst werden, oder `functionBody` kann nicht als gültige JavaScript-Anweisungen geparst werden.
- {{jsxref("TypeError")}}
  - : Ein Parameter ist ein String, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standard-Policy definiert ist.

## Beschreibung

Mit dem `Function`-Konstruktor erstellte `Function`-Objekte werden beim Erstellen der Funktion geparst. Das ist weniger effizient, als eine Funktion mit einem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) zu erstellen und sie im Code aufzurufen, da solche Funktionen zusammen mit dem übrigen Code geparst werden.

Alle an den Konstruktor übergebenen Argumente außer dem letzten werden in der Reihenfolge ihrer Übergabe als Bezeichnernamen für die Parameter der zu erstellenden Funktion behandelt. Die Funktion wird dynamisch als Funktionsausdruck kompiliert, wobei der Quelltext folgendermaßen zusammengesetzt wird:

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

Dies lässt sich durch Aufrufen der Methode [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) der Funktion beobachten.

Anders als bei gewöhnlichen [Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) wird der Name `anonymous` jedoch nicht zum Gültigkeitsbereich von `functionBody` hinzugefügt, da `functionBody` nur Zugriff auf den globalen Gültigkeitsbereich hat. Wenn `functionBody` nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt wird (der Funktionskörper selbst muss die Direktive `"use strict"` enthalten, da er den Strict Mode nicht aus dem umgebenden Kontext übernimmt), können Sie mit [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) auf die Funktion selbst verweisen. Alternativ können Sie den rekursiven Teil als innere Funktion definieren:

```js
const recursiveFn = new Function(
  "count",
  `
(function recursiveFn(count) {
  if (count < 0) {
    return;
  }
  console.log(count);
  recursiveFn(count - 1);
})(count);
`,
);
```

Beachten Sie, dass die beiden dynamischen Teile des zusammengesetzten Quelltexts – die Parameterliste `args.join(",")` und `functionBody` – zunächst getrennt geparst werden, um sicherzustellen, dass beide syntaktisch gültig sind. Dadurch werden injektionsartige Versuche verhindert.

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Doesn't become "function anonymous(/*) {*/) {}"
```

### Sicherheitsaspekte

Mit dieser Methode können beliebige Eingaben ausgeführt werden, die an einen der Parameter übergeben werden. Handelt es sich bei der Eingabe um einen potenziell unsicheren, von einem Benutzer bereitgestellten String, kann dies einen Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen. Das folgende Beispiel geht davon aus, dass `untrustedCode` von einem Benutzer bereitgestellt wurde:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = new Function("a", "b", untrustedCode);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) angibt, verhindern standardmäßig die Ausführung solchen Codes. Wenn Sie die Ausführung von Skripten über `Function()` zulassen müssen, können Sie diese Risiken verringern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Strings übergeben und mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) die [Verwendung von Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types). Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft.

Damit `Function()` ausgeführt werden kann, müssen Sie außerdem das [Schlüsselwort `trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in der CSP-Direktive `script-src` angeben. Das Schlüsselwort [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) erlaubt `Function()` ebenfalls, ist aber deutlich weniger sicher als `trusted-types-eval`, da es die Ausführung auch in Browsern zulassen würde, die Trusted Types nicht unterstützen.

Die für Ihre Website erforderliche CSP könnte beispielsweise so aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom konkreten Anwendungsfall ab, für den ein vom Benutzer bereitgestelltes Skript erforderlich ist. Wenn möglich, sollten Sie die zulässigen Skripte genau auf den Code beschränken, dessen Ausführung Sie vertrauen. Falls das nicht möglich ist, können Sie die Verwendung bestimmter Funktionen innerhalb des bereitgestellten Strings zulassen oder blockieren.

## Beispiele

Der Kürze halber wird in diesen Beispielen auf die Verwendung von Trusted Types verzichtet. Code, der den empfohlenen Ansatz zeigt, finden Sie unter [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) bei `eval()`.

### Argumente mit dem Function-Konstruktor angeben

Der folgende Code erstellt ein `Function`-Objekt, das zwei Argumente entgegennimmt.

```js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments, and returns the sum of those arguments
const adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// 8
```

Die Argumente `a` und `b` sind Namen formaler Parameter, die im Funktionskörper `return a + b` verwendet werden.

### Ein Funktionsobjekt aus einer Funktionsdeklaration oder einem Funktionsausdruck erstellen

```js
// The function constructor can take in multiple statements separated by a semicolon. Function expressions require a return statement with the function's name

// Observe that new Function is called. This is so we can call the function we created directly afterwards
const sumOfArray = new Function(
  "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
)();

// call the function
sumOfArray([1, 2, 3, 4]);
// 10

// If you don't call new Function at the point of creation, you can use the Function.call() method to call it
const findLargestNumber = new Function(
  "function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber",
);

// call the function
findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// Function declarations do not require a return statement
const sayHello = new Function(
  "return function (name) { return `Hello, ${name}` }",
)();

// call the function
sayHello("world");
// Hello, world
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des Function-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_the_function_constructor) bei `eval()`
- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "Functions", "", 1)}}
