---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{jsSidebar("Objects")}}

> [!WARNING]
> Die Ausführung von JavaScript aus einem String stellt ein enormes Sicherheitsrisiko dar. Es ist viel zu einfach für eine böswillige Person, beliebigen Code auszuführen, wenn Sie `eval()` verwenden. Siehe [Verwenden Sie niemals direkt eval()!](#never_use_direct_eval!), weiter unten.

Die **`eval()`**-Funktion wertet JavaScript-Code aus, der durch einen String dargestellt wird, und gibt dessen Abschlusswert zurück. Die Quelle wird als Skript geparst.

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## Syntax

```js-nolint
eval(script)
```

### Parameter

- `script`
  - : Ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Sequenz von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften vorhandener Objekte enthalten. Er wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren dürfen) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des übergebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` keine String-Primitiv ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

Löst jede Ausnahme aus, die bei der Auswertung des Codes auftritt, einschließlich {{jsxref("SyntaxError")}}, wenn `script` nicht als Skript geparst werden kann.

## Beschreibung

`eval()` ist eine Funktionseigenschaft des globalen Objekts.

Das Argument der Funktion `eval()` ist ein String. Dieser wird als Skriptkörper ausgewertet, das heißt, sowohl Anweisungen als auch Ausdrücke sind erlaubt. Die Funktion gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist dies der Wert, zu dem der Ausdruck ausgewertet wird. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, diese können jedoch überraschend sein (z.B. hat die Zuweisung eines Wertes den zugewiesenen Wert als Abschlusswert, während der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) undefined ist). Daher wird empfohlen, sich nicht auf die Abschlusswerte von Anweisungen zu verlassen.

Im strikten Modus führt die Deklaration einer Variable mit dem Namen `eval` oder die erneute Zuweisung von `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt die Übergabe eines `String`-Objekts anstelle eines String-Primitivs dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt den String auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um dieses Problem auf generische Weise zu umgehen, können Sie [das Argument vorab in einen String umwandeln](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direkter und indirekter eval-Aufruf

Es gibt zwei Modi der `eval()`-Aufrufe: _direkter_ eval und _indirekter_ eval. Ein direkter eval-Aufruf erfolgt durch die direkte Verwendung der globalen Funktion `eval()` mit `eval(...)`. Alles andere, einschließlich der Verwendung über eine Aliased-Variable, den Zugriff per Member oder andere Ausdrücke, sowie durch den optionalen Chaining-Operator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

```js
// Direct call
eval("x + y");

// Indirect call using the comma operator to return eval
(0, eval)("x + y");

// Indirect call through optional chaining
eval?.("x + y");

// Indirect call using a variable to store and return eval
const myEval = eval;
myEval("x + y");

// Indirect call through member access
const obj = { eval };
obj.eval("x + y");
```

Indirekter eval kann betrachtet werden, als ob der Code in einem separaten `<script>`-Tag ausgewertet wird. Das bedeutet:

- Indirekter eval arbeitet im globalen Scope und nicht im lokalen Scope, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen innerhalb des Scopes, aus dem er aufgerufen wird.

  ```js
  function test() {
    const x = 2;
    const y = 4;
    // Direct call, uses local scope
    console.log(eval("x + y")); // Result is 6
    // Indirect call, uses global scope
    console.log(eval?.("x + y")); // Throws because x is not defined in global scope
  }
  ```

- Indirekter `eval` erbt nicht die Striktheit des umgebenden Kontexts und befindet sich nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn der Quellstring selbst eine `"use strict"`-Direktive enthält.

  ```js
  function nonStrictContext() {
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval?.(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval?.(`"use strict"; with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Logs 3.141592653589793
  strictContext(); // Logs 3.141592653589793
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

  Direkter eval hingegen erbt die Striktheit des aufrufenden Kontextes.

  ```js
  function nonStrictContext() {
    eval(`with (Math) console.log(PI);`);
  }
  function strictContext() {
    "use strict";
    eval(`with (Math) console.log(PI);`);
  }
  function strictContextStrictEval() {
    "use strict";
    eval(`"use strict"; with (Math) console.log(PI);`);
  }
  nonStrictContext(); // Logs 3.141592653589793
  strictContext(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  strictContextStrictEval(); // Uncaught SyntaxError: Strict mode code may not include a with statement
  ```

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) gehen in den umgebenden Scope, wenn der Quellstring nicht im strict mode interpretiert wird — bei indirektem eval werden sie globale Variablen. Bei direktem eval in einem strict-mode-Kontext oder wenn der `eval`-Quellstring im strict mode ist, "lecken" `var` und Funktionsdeklarationen nicht in den umgebenden Scope.

  ```js
  // Neither context nor source string is strict,
  // so var creates a variable in the surrounding scope
  eval("var a = 1;");
  console.log(a); // 1
  // Context is not strict, but eval source is strict,
  // so b is scoped to the evaluated script
  eval("'use strict'; var b = 1;");
  console.log(b); // ReferenceError: b is not defined

  function strictContext() {
    "use strict";
    // Context is strict, but this is indirect and the source
    // string is not strict, so c is still global
    eval?.("var c = 1;");
    // Direct eval in a strict context, so d is scoped
    eval("var d = 1;");
  }
  strictContext();
  console.log(c); // 1
  console.log(d); // ReferenceError: d is not defined
  ```

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen innerhalb des ausgewerteten Strings sind immer auf dieses Skript beschränkt.

- Direkter eval kann Zugriff auf zusätzliche kontextuelle Ausdrücke haben. Zum Beispiel kann man im Funktionskörper auf [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) zugreifen:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Verwenden Sie niemals direkt eval()!

Die Verwendung von direktem `eval()` bringt mehrere Probleme mit sich:

- `eval()` führt den übergebenen Code mit den Rechten des Aufrufers aus. Wenn Sie `eval()` mit einem String ausführen, der von einer böswilligen Partei beeinflusst werden könnte, könnten Sie am Ende schädlichen Code auf dem Rechner des Nutzers mit den Berechtigungen Ihrer Webseite/Erweiterung ausführen. Noch wichtiger ist, dass der Zugriff von Drittcodes auf den Scope, in dem `eval()` aufgerufen wurde (bei direktem eval), potenzielle Angriffe ermöglicht, die lokale Variablen auslesen oder ändern können.
- `eval()` ist langsamer als Alternativen, da der JavaScript-Interpreter aufgerufen werden muss, während viele andere Konstrukte von modernen JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter konvertieren JavaScript in Maschinencode. Dies bedeutet, dass alle Konzepte zur Variablennamensgebung verloren gehen. Somit erzwingt jede Verwendung von `eval()`, dass der Browser lange und teure Nachschlagen auf Variablennamen vornehmen muss, um herauszufinden, wo die Variable im Maschinencode existiert und ihren Wert zu setzen. Darüber hinaus können neue Dinge durch `eval()` der Variable hinzugefügt werden, wie z.B. eine Änderung des Variablentyps, was den Browser zwingt, den gesamten generierten Maschinencode erneut zu bewerten.
- Minifizierer verzichten auf jegliche Minifikation, wenn der Scope transitiv von `eval()` abhängt, da `eval()` sonst die richtige Variable zur Laufzeit nicht lesen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden optimiert oder vollständig vermieden werden kann.

#### Verwendung von indirektem eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Einfach die indirekte eval-Methode zu verwenden und den strict mode zu erzwingen, kann den Code erheblich verbessern:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden oben stehenden Codeschnipsel scheinen auf denselben Weg zu funktionieren, tun es aber nicht; das erste, das direktes eval verwendet, leidet unter mehreren Problemen.

- Es ist viel langsamer aufgrund von mehrfachem Scope-Inspections. Beachten Sie `c: new Map()` im ausgewerteten String. In der Version mit indirektem eval wird das Objekt im globalen Scope ausgewertet, sodass der Interpreter sicher annehmen kann, dass sich `Map` auf den globalen `Map()`-Konstruktor bezieht, anstatt auf eine lokale Variable namens `Map`. Im Code, der direkt eval verwendet, kann der Interpreter dies jedoch nicht annehmen. Zum Beispiel bezieht sich `Map` im ausgewerteten String im folgenden Code nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Daher wird der Browser im `eval()`-Code gezwungen, den teuren Nachschlageaufruf durchzuführen, um zu überprüfen, ob es lokale Variablen namens `Map()` gibt.

- Wenn strict mode nicht verwendet wird, werden `var`-Deklarationen innerhalb des `eval()`-Quellcodes zu Variablen im umgebenden Scope. Dies führt zu schwer zu debuggenden Problemen, wenn der String aus externer Eingabe stammt, insbesondere wenn eine bestehende Variable mit demselben Namen vorhanden ist.
- Direktes eval kann Bindungen im umgebenden Scope lesen und ändern, wodurch externe Eingaben lokale Daten beschädigen können.
- Bei direktem `eval`, besonders wenn der eval-Quellcode nicht im strict mode ist, müssen die Engine und Build-Tools alle Optimierungen im Zusammenhang mit Inlining deaktivieren, da der `eval()`-Code von beliebigen Variablennamen im umgebenden Scope abhängen kann.

Indirektes `eval()` erlaubt hingegen keine zusätzlichen Bindungen außer vorhandenen globalen Variablen, auf die der ausgewertete Code zugreifen kann. Wenn Sie zusätzliche Variablen angeben müssen, auf die der ausgewertete Code zugreifen soll, verwenden Sie den `Function()`-Konstruktor.

#### Verwendung des Function()-Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ist dem oben erwähnten indirekten eval-Beispiel sehr ähnlich: Er wertet die übergebene JavaScript-Quelle im globalen Scope aus, ohne lokale Bindungen zu lesen oder zu verändern, und ermöglicht der Engine daher, mehr Optimierungen durchzuführen als direktes `eval()`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass der an `Function()` übergebene Quelltext als Funktionskörper und nicht als Skript geparst wird. Daraus ergeben sich einige Nuancen – zum Beispiel kann man auf oberster Ebene eines Funktionskörpers `return`-Anweisungen verwenden, jedoch nicht in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie lokale Bindungen innerhalb Ihrer eval-Quelle erstellen möchten, indem Sie die Variablen als Parameterbindungswerte übergeben.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind daher in strikten [CSP](/de/docs/Web/HTTP/CSP)-Einstellungen verboten. Es gibt auch zusätzliche, sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für häufige Anwendungsfälle.

#### Verwendung von Array-Zugriff

Sie sollten `eval()` nicht verwenden, um Eigenschaften dynamisch zuzugreifen. Betrachten Sie folgendes Beispiel, bei dem die Eigenschaft des Objekts, auf das zugegriffen werden soll, erst zur Laufzeit bekannt ist. Dies kann mit `eval()` erreicht werden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Hierbei jedoch ist `eval()` nicht notwendig – vielmehr ist es fehleranfälliger, da ein Syntaxfehler auftritt, wenn `propName` kein gültiger Bezeichner ist. Verwenden Sie stattdessen die [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), die viel schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar verwenden, um auf Nachkommenseigenschaften zuzugreifen. Mit `eval()` würde dies so aussehen:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Das Vermeiden von `eval()` hier könnte mithilfe der Aufteilung des Eigenschaftspfads und einer Schleife durch die verschiedenen Eigenschaften erreicht werden:

```js
function getDescendantProp(obj, desc) {
  const arr = desc.split(".");
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"
const result = getDescendantProp(obj, propPath); // 0
```

Das Setzen einer Eigenschaft funktioniert auf ähnliche Weise:

```js
function setDescendantProp(obj, desc, value) {
  const arr = desc.split(".");
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  return (obj[arr[0]] = value);
}

const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"
const result = setDescendantProp(obj, propPath, 1); // obj.a.b.c is now 1
```

Beachten Sie jedoch, dass auch die Verwendung von Array-Zugriffen mit unbeschränkten Eingaben nicht sicher ist — dies kann zu [Object Injection Attacks](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Callbacks

JavaScript verfügt über {{Glossary("First-class_Function", "First-Class Functions")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, in Variablen und Objekt-Eigenschaften speichern und mehr tun können. Viele DOM-APIs sind darauf ausgelegt, sodass Sie (und sollten!) schreiben:

```js
// Instead of setTimeout("…", 1000) use:
setTimeout(() => {
  // …
}, 1000);

// Instead of elt.setAttribute("onclick", "…") use:
elt.addEventListener("click", () => {
  // …
});
```

[Closures](/de/docs/Web/JavaScript/Closures) sind dabei ebenfalls nützlich, da sie eine Möglichkeit bieten, parametrisierte Funktionen zu erstellen, ohne Strings zu verketten.

#### Verwendung von JSON

Wenn der String, auf den Sie `eval()` aufrufen, Daten enthält (z. B. ein Array: `"[1, 2, 3]"`) und kein Code, sollten Sie in Betracht ziehen, zu {{Glossary("JSON", "JSON")}} zu wechseln. JSON ermöglicht es, den String mit einer Teilmenge der JavaScript-Syntax zur Darstellung von Daten zu verwenden.

Beachten Sie, dass JSON-Syntax im Vergleich zu JavaScript-Syntax eingeschränkt ist; viele gültige JavaScript-Literale können nicht als JSON geparst werden. Beispielsweise sind nachgestellte Kommas in JSON nicht erlaubt, und Eigenschaftsnamen (Schlüssel) in Objekt-Literalen müssen in Anführungszeichen eingeschlossen werden. Verwenden Sie unbedingt einen JSON-Serializer, um sicherzustellen, dass Strings generiert werden, die später als JSON geparst werden können.

Es ist generell eine gute Idee, eingeschränkte Daten anstelle von beliebigem Code zu verwenden. Beispielsweise könnte eine Erweiterung, die darauf ausgelegt ist, Inhalte von Webseiten auszulesen, die Scraping-Regeln in [XPath](/de/docs/Web/XML/XPath) anstelle von JavaScript-Code definieren.

## Beispiele

### Verwendung von eval()

Im folgenden Code geben beide Anweisungen mit `eval()` den Wert 42 zurück. Die erste wertet den String `"x + y + 1"` aus, die zweite den String `"42"`.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert von Anweisungen zurück

`eval()` liefert den Abschlusswert von Anweisungen zurück. Bei einer `if`-Anweisung wäre dies der letzte ausgewertete Ausdruck oder die letzte Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Das folgende Beispiel verwendet `eval()`, um den String `str` auszuwerten. Dieser String besteht aus JavaScript-Anweisungen, die `z` den Wert 42 zuweisen, falls `x` fünf ist, und ansonsten 0. Wenn die zweite Anweisung ausgeführt wird, führt `eval()` dazu, dass diese Anweisungen ausgeführt werden und auch ausgewertet werden. Es wird der Wert zurückgegeben, der `z` zugewiesen wird, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

```js
const x = 5;
const str = `if (x === 5) {
  console.log("z is 42");
  z = 42;
} else {
  z = 0;
}`;

console.log("z is ", eval(str)); // z is 42  z is 42
```

Wenn Sie mehrere Werte zuweisen, wird der letzte Wert zurückgegeben.

```js
let x = 5;
const str = `if (x === 5) {
  console.log("z is 42");
  z = 42;
  x = 420;
} else {
  z = 0;
}`;

console.log("x is", eval(str)); // z is 42  x is 420
```

### eval() als String, der Funktionen festlegt, benötigt "(" und ")" als Präfix und Suffix

```js
// This is a function declaration
const fctStr1 = "function a() {}";
// This is a function expression
const fctStr2 = "(function b() {})";
const fct1 = eval(fctStr1); // return undefined, but `a` is available as a global function now
const fct2 = eval(fctStr2); // return the function `b`
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Using eval in content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
