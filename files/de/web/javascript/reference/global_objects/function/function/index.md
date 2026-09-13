---
title: Function() Konstruktor
short-title: Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

> [!WARNING]
> Die an diesen Konstruktor übergebenen Argumente werden dynamisch geparst und als JavaScript ausgeführt.
> Solche APIs sind als [Injektionsvorrichtungen](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein.
>
> Sie können dieses Risiko minimieren, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Der **`Function()`**-Konstruktor erstellt {{jsxref("Function")}}-Objekte. Ein direkter Aufruf des Konstruktors kann Funktionen dynamisch erstellen, leidet jedoch unter Sicherheits- und ähnlichen (aber weitaus weniger bedeutenden) Leistungsproblemen wie {{jsxref("Global_Objects/eval", "eval()")}}. Im Gegensatz zu `eval` (das möglicherweise Zugriff auf den lokalen Gültigkeitsbereich hat) erstellt der `Function`-Konstruktor Funktionen, die nur im globalen Gültigkeitsbereich ausgeführt werden.

{{InteractiveExample("JavaScript Demo: Function() Konstruktor", "shorter")}}

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
> `Function()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erstellen eine neue `Function`-Instanz.

### Parameter

- `arg1`, …, `argN` {{optional_inline}}
  - : [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen oder Zeichenfolgen, die Namen angeben, die von der Funktion als formale Argumentnamen verwendet werden sollen. Der Wert muss einem gültigen JavaScript-Parameter entsprechen (entweder einem einfachen {{Glossary("Identifier", "Identifier")}}, [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) oder einem [destrukturierten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter, optional mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)), oder einer Liste solcher Zeichenfolgen, die mit Kommata getrennt sind.

    Da die Parameter auf die gleiche Weise wie Funktionsausdrücke geparst werden, werden Leerzeichen und Kommentare akzeptiert. Zum Beispiel: `"x", "theValue = 42", "[a, b] /* numbers */"` — oder `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` ist ebenfalls korrekt, jedoch sehr verwirrend zu lesen.)

- `functionBody`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder eine Zeichenfolge, die die JavaScript-Anweisungen enthält, die die Funktionsdefinition bilden.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Funktion-Parameter-Argumente können nicht als gültige Parameterliste geparst werden oder der `functionBody` kann nicht als gültige JavaScript-Anweisungen geparst werden.
- {{jsxref("TypeError")}}
  - : Ein beliebiger Parameter ist eine Zeichenfolge, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

`Function`-Objekte, die mit dem `Function`-Konstruktor erstellt werden, werden geparst, wenn die Funktion erstellt wird. Dies ist weniger effizient als das Erstellen einer Funktion mit einem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) und dem Aufruf innerhalb Ihres Codes, da solche Funktionen mit dem Rest des Codes geparst werden.

Alle an die Funktion übergebenen Argumente, außer dem letzten, werden als die Namen der Identifier der Parameter in der zu erstellenden Funktion behandelt, in der Reihenfolge, in der sie übergeben werden. Die Funktion wird dynamisch als Funktionsausdruck kompiliert, wobei die Quelle in folgender Weise zusammengestellt wird:

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

Dies ist beobachtbar, indem die [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)-Methode der Funktion aufgerufen wird.

Im Gegensatz zu normalen [Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) wird der Name `anonymous` dem Gültigkeitsbereich von `functionBody` nicht hinzugefügt, da `functionBody` nur Zugriff auf den globalen Gültigkeitsbereich hat. Wenn `functionBody` sich nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet (der Rumpf selbst muss die Direktive `"use strict"` haben, da er die Striktheit nicht vom Kontext erbt), können Sie [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) verwenden, um auf die Funktion selbst zu verweisen. Alternativ können Sie den rekursiven Teil als innere Funktion definieren:

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

Beachten Sie, dass die zwei dynamischen Teile der zusammengebauten Quelle — die Parameterliste `args.join(",")` und `functionBody` — zuerst separat geparst werden, um sicherzustellen, dass sie jeweils syntaktisch gültig sind. Dies verhindert versuchsartige Injektionen.

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Doesn't become "function anonymous(/*) {*/) {}"
```

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben auszuführen, die an einen beliebigen Parameter übergeben werden. Wenn die Eingabe eine potenziell unsichere Zeichenfolge ist, die von einem Benutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe. Zum Beispiel geht das folgende Beispiel davon aus, dass der `untrustedCode` von einem Benutzer bereitgestellt wurde:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = new Function("a", "b", untrustedCode);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifiziert, verhindern standardmäßig die Ausführung eines solchen Codes. Wenn Sie die Ausführung von Skripten über `Function()` zulassen müssen, können Sie diese Probleme minimieren, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for). Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion verarbeitet wird.

Um die Ausführung von `Function()` zuzulassen, müssen Sie zusätzlich das [`trusted-types-eval`-Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src`-Direktive angeben. Das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval)-Schlüsselwort erlaubt ebenfalls `Function()`, ist jedoch weitaus unsicherer als `trusted-types-eval`, da es auch in Browsern die Ausführung zulässt, die vertrauenswürdige Typen nicht unterstützen.

Zum Beispiel könnte die benötigte CSP für Ihre Website folgendermaßen aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein benutzerdefiniertes Skript erfordert. Wenn möglich, sollten Sie die erlaubten Skripts auf genau den Code beschränken, den Sie zu laufen vertrauen. Wenn das nicht möglich ist, können Sie möglicherweise die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenfolge erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele die Verwendung von vertrauenswürdigen Typen der Kürze halber weglassen. Für Code, der den empfohlenen Ansatz zeigt, siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()`.

### Argumente mit dem Function-Konstruktor angeben

Der folgende Code erstellt ein `Function`-Objekt, das zwei Argumente übernimmt.

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

- [Verwenden des Function-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_the_function_constructor) in `eval()`
- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "Funktionen", "", 1)}}
