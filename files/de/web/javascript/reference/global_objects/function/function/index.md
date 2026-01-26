---
title: Funktion() Konstruktor
short-title: Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

> [!WARNING]
> Die Argumente, die an diesen Konstruktor übergeben werden, werden dynamisch geparst und als JavaScript ausgeführt.
> APIs wie diese sind bekannt als [Injection-Punkte](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Strings übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für mehr Informationen.

Der **`Function()`** Konstruktor erstellt {{jsxref("Function")}} Objekte. Das direkte Aufrufen des Konstruktors kann Funktionen dynamisch erstellen, leidet jedoch an Sicherheits- und ähnlichen (aber weit weniger signifikanten) Leistungsproblemen wie {{jsxref("Global_Objects/eval", "eval()")}}. Im Gegensatz zu `eval` (das Zugriff auf den lokalen Kontext haben kann) erstellen `Function`-Konstruktoren Funktionen, die nur im globalen Kontext ausgeführt werden.

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
> `Function()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beides erstellt eine neue `Function` Instanz.

### Parameter

- `arg1`, …, `argN` {{optional_inline}}
  - : [`TrustedScript`](/de/docs/Web/API/TrustedScript) Instanzen oder Strings, die die Namen spezifizieren, die von der Funktion als formale Argumentnamen verwendet werden sollen. Der Wert muss einem gültigen JavaScript-Parameter entsprechen (entweder ein einfacher {{Glossary("Identifier", "Identifier")}}, [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) oder [destrukturierter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter, wahlweise mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)), oder eine Liste solcher Strings, getrennt durch Kommata.

    Da die Parameter auf die gleiche Weise wie Funktionsausdrücke geparst werden, sind Leerzeichen und Kommentare zulässig. Zum Beispiel: `"x", "theValue = 42", "[a, b] /* numbers */"` — oder `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` ist auch korrekt, obwohl sehr verwirrend zu lesen.)

- `functionBody`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String, der die JavaScript-Anweisungen enthält, die die Funktionsdefinition umfassen.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Funktionsparameter-Argumente können nicht als gültige Parameterliste geparst werden, oder der `functionBody` kann nicht als gültige JavaScript-Anweisungen geparst werden.
- {{jsxref("TypeError")}}
  - : Ein Parameter ist ein String, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

`Function`-Objekte, die mit dem `Function`-Konstruktor erstellt wurden, werden beim Erstellen der Funktion geparst. Dies ist weniger effizient als die Erstellung einer Funktion mit einem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) und deren Aufruf innerhalb Ihres Codes, da solche Funktionen mit dem restlichen Code geparst werden.

Alle an die Funktion übergebenen Argumente, außer dem letzten, werden als Namen der Bezeichner der zu erstellenden Parameter in der Reihenfolge behandelt, in der sie übergeben werden. Die Funktion wird dynamisch als Funktionsausdruck kompiliert, wobei die Quelle wie folgt zusammengestellt wird:

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

Dies ist beobachtbar durch den Aufruf der [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) Methode der Funktion.

Im Gegensatz zu normalen [Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) wird der Name `anonymous` jedoch nicht dem `functionBody`-Scope hinzugefügt, da `functionBody` nur Zugriff auf den globalen Scope hat. Wenn sich `functionBody` nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet (der Body selbst muss die `"use strict"` Direktive haben, da er die Striktheit nicht vom Kontext erbt), können Sie [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) verwenden, um auf die Funktion selbst zu verweisen. Alternativ können Sie den rekursiven Teil als innere Funktion definieren:

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

Beachten Sie, dass die beiden dynamischen Teile der zusammengestellten Quelle — die Parameterliste `args.join(",")` und `functionBody` — zuerst separat geparst werden, um sicherzustellen, dass sie jeweils syntaktisch korrekt sind. Dies verhindert versuchsweise Injection-Versuche.

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Doesn't become "function anonymous(/*) {*/) {}"
```

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben auszuführen, die an einen Parameter übergeben werden. Wenn die Eingabe ein potenziell unsicherer String ist, der von einem Benutzer bereitgestellt wurde, ist dies ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe. Zum Beispiel geht das folgende Beispiel davon aus, dass der `untrustedCode` von einem Nutzer bereitgestellt wurde:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = new Function("a", "b", untrustedCode);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifiziert, werden das Ausführen solchen Codes standardmäßig verhindern. Wenn Sie die Ausführung von Skripten über `Function()` zulassen müssen, können Sie diese Probleme mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Strings zuweisen, und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive. Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion übergeben wird.

Um `Function()` auszuführen, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src` Direktive spezifizieren. Das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) Schlüsselwort erlaubt auch `Function()`, ist jedoch weit weniger sicher als `trusted-types-eval`, weil es die Ausführung auch in Browsern erlauben würde, die keine trusted types unterstützen.

Zum Beispiel könnte die erforderliche CSP für Ihre Seite wie folgt aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein vom Benutzer bereitgestelltes Skript erfordert. Wenn möglich, sollten Sie die erlaubten Skripte auf genau den Code beschränken, dem Sie vertrauen, um ihn auszuführen. Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb des bereitgestellten Strings erlauben oder blockieren.

## Beispiele

Beachten Sie, dass in diesen Beispielen die Verwendung von Trusted Types aus Gründen der Kürze weggelassen wurde. Für Code, der den empfohlenen Ansatz zeigt, siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()`.

### Argumente mit dem Function-Konstruktor spezifizieren

Der folgende Code erstellt ein `Function`-Objekt, das zwei Argumente verwendet.

```js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments, and returns the sum of those arguments
const adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// 8
```

Die Argumente `a` und `b` sind formale Argumentnamen, die im Funktionskörper `return a + b` verwendet werden.

### Erstellen eines Funktionsobjekts aus einer Funktionsdeklaration oder einem Funktionsausdruck

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

- [Verwendung des Funktionskonstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_the_function_constructor) in `eval()`
- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "Funktionen", "", 1)}}
