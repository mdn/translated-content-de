---
title: Function() Konstruktor
short-title: Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: fab1ac5452f0c92d7ed804d468229bd003631e0e
---

> [!WARNING]
> Die an diese Methode übergebenen Argumente werden dynamisch ausgewertet und als JavaScript ausgeführt.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell eine Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
>
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Der **`Function()`** Konstruktor erstellt {{jsxref("Function")}} Objekte.
Der direkte Aufruf des Konstruktors kann Funktionen dynamisch erstellen, leidet jedoch unter Sicherheitsproblemen und ähnlichen (aber weit weniger signifikanten) Performanceproblemen wie {{jsxref("Global_Objects/eval", "eval()")}}. Im Gegensatz zu `eval` (das möglicherweise Zugriff auf den lokalen Gültigkeitsbereich hat) erstellt der `Function` Konstruktor jedoch Funktionen, die nur im globalen Gültigkeitsbereich ausgeführt werden.

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
  - : [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen oder Zeichenfolgen, die Namen festlegen, die von der Funktion als formale Argumentnamen verwendet werden sollen.
    Der Wert muss einem gültigen JavaScript-Parameter entsprechen (einer von einfachen {{Glossary("Identifier", "Identifikatoren")}}, [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) oder [destrukturierte](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter, optional mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)) oder einer Liste solcher Zeichenfolgen, getrennt durch Kommas.

    Da die Parameter auf dieselbe Weise wie Funktionsausdrücke geparst werden, sind Leerzeichen und Kommentare zulässig.
    Zum Beispiel: `"x", "theValue = 42", "[a, b] /* numbers */"` — oder `"x, theValue = 42, [a, b] /* numbers */"`.
    (`"x, theValue = 42", "[a, b]"` ist ebenfalls korrekt, allerdings sehr verwirrend zu lesen.)

- `functionBody`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder eine Zeichenfolge, die die JavaScript-Anweisungen enthält, aus denen die Funktionsdefinition besteht.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Funktionsparameter-Argumente können nicht als gültige Identifikatoren ausgewertet werden, oder `functionBody` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Ein Parameter ist eine Zeichenfolge, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

Die Methode löst auch jede Ausnahme aus, die während der Auswertung des Codes auftritt.

## Beschreibung

`Function` Objekte, die mit dem `Function` Konstruktor erstellt wurden, werden geparst, wenn die Funktion erstellt wird. Dies ist weniger effizient als das Erstellen einer Funktion mit einem [Funktausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder [Funktionserklärung](/de/docs/Web/JavaScript/Reference/Statements/function) und deren Aufruf innerhalb Ihres Codes, da solche Funktionen zusammen mit dem Rest des Codes geparst werden.

Alle an die Funktion übergebenen Argumente, außer dem letzten, werden als Namen der Identifikatoren der zu erstellenden Funktionsparameter in der Reihenfolge behandelt, in der sie übergeben werden. Die Funktion wird dynamisch als Funktionsausdruck kompiliert, wobei die Quelle folgendermaßen zusammengestellt wird:

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

Dies ist durch Aufrufen der [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) Methode der Funktion beobachtbar.

Im Gegensatz zu normalen [Funktausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) wird der Name `anonymous` jedoch nicht dem Gültigkeitsbereich von `functionBody` hinzugefügt, da `functionBody` nur Zugriff auf den globalen Gültigkeitsbereich hat. Wenn `functionBody` nicht im [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist (der Körper selbst muss die `"use strict"` Anweisung enthalten, da er die Striktheit aus dem Kontext nicht erbt), können Sie [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) verwenden, um auf die Funktion selbst zu verweisen. Alternativ können Sie den rekursiven Teil als innere Funktion definieren:

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

Beachten Sie, dass die zwei dynamischen Teile der zusammengebauten Quelle — die Parameterliste `args.join(",")` und `functionBody` — zuerst separat geparst werden, um sicherzustellen, dass sie jeweils syntaktisch gültig sind. Dies verhindert Injection-ähnliche Versuche.

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Doesn't become "function anonymous(/*) {*/) {}"
```

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben an jeden Parameter auszuführen.
Wenn der Eingabewert eine potenziell unsichere, von einem Benutzer bereitgestellte Zeichenfolge ist, stellt dies eine mögliche Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
Zum Beispiel geht das folgende Beispiel davon aus, dass der `untrustedCode` von einem Benutzer bereitgestellt wurde:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const adder = new Function("a", "b", untrustedCode);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifizieren, verhindern standardmäßig die Ausführung eines solchen Codes.

Wenn Sie die Ausführung von Skripten über `Function()` erlauben müssen, können Sie diese Probleme mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird.

Um `Function()` ausführen zu können, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src` Direktive angeben.

Das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) Schlüsselwort erlaubt ebenfalls `Function()`, ist jedoch viel unsicherer als `trusted-types-eval`, da es die Ausführung selbst in Browsern erlauben würde, die Trusted Types nicht unterstützen.

Zum Beispiel könnte die erforderliche CSP für Ihre Website wie folgt aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein Benutzer bereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte auf genau den Code beschränken, dem Sie vertrauen, dass er ausgeführt werden kann.
Falls das nicht möglich ist, sollten Sie möglicherweise die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenfolge erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele zur Kürze auf die Verwendung von Trusted Types verzichten.
Für Code, der den üblichen Ansatz zeigt, siehe [Using `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()`.

### Angabe von Argumenten mit dem Function-Konstruktor

Der folgende Code erstellt ein `Function` Objekt, das zwei Argumente annimmt.

```js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments, and returns the sum of those arguments
const adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// 8
```

Die Argumente `a` und `b` sind formale Argumentnamen, die im Funktionskörper, `return a + b`, verwendet werden.

### Erstellen eines Funktionsobjekts von einer Funktionserklärung oder einem Funktionsausdruck

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

- [Using the function constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_the_function_constructor) in `eval()`
- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`function` expression](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "Functions", "", 1)}}
