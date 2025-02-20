---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Objects")}}

> [!WARNING]
> Die Ausführung von JavaScript aus einem String ist mit erheblichen Sicherheitsrisiken verbunden. Es ist zu einfach für Angreifer, beliebigen Code auszuführen, wenn Sie `eval()` verwenden. Siehe [Direktes eval() niemals verwenden!](#never_use_direct_eval!), unten.

Die **`eval()`**-Funktion wertet JavaScript-Code aus, der als Zeichenkette dargestellt wird, und gibt dessen Abschlusswert zurück. Die Quelle wird als Skript geparst.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - eval()")}}

```js interactive-example
console.log(eval("2 + 2"));
// Expected output: 4

console.log(eval(new String("2 + 2")));
// Expected output: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// Expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Expected output: false
```

## Syntax

```js-nolint
eval(script)
```

### Parameter

- `script`
  - : Ein String, der einen JavaScript-Ausdruck, eine Anweisung oder eine Sequenz von Anweisungen darstellt. Der Ausdruck kann Variablen und Eigenschaften bestehender Objekte enthalten. Es wird als Skript geparst, daher sind [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen (die nur in Modulen existieren dürfen) nicht erlaubt.

### Rückgabewert

Der Abschlusswert der Auswertung des gegebenen Codes. Wenn der Abschlusswert leer ist, wird {{jsxref("undefined")}} zurückgegeben. Wenn `script` kein primitiver String ist, gibt `eval()` das Argument unverändert zurück.

### Ausnahmen

Wirft jede Ausnahme, die während der Ausführung des Codes auftritt, einschließlich {{jsxref("SyntaxError")}}, falls `script` nicht als Skript geparst werden kann.

## Beschreibung

`eval()` ist eine Funktions-Eigenschaft des globalen Objekts.

Das Argument der Funktion `eval()` ist ein String. Der Quell-String wird als Skript-Körper ausgewertet, was bedeutet, dass sowohl Anweisungen als auch Ausdrücke erlaubt sind. Es gibt den Abschlusswert des Codes zurück. Bei Ausdrücken ist dies der Wert, den der Ausdruck ergibt. Viele Anweisungen und Deklarationen haben ebenfalls Abschlusswerte, aber das Ergebnis kann überraschend sein (z. B. ist der Abschlusswert einer Zuweisung der zugewiesene Wert, aber der Abschlusswert von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) ist undefined), daher wird empfohlen, sich nicht auf die Abschlusswerte von Anweisungen zu verlassen.

Im Strict-Modus führt das Deklarieren einer Variablen namens `eval` oder das Neuzuweisen von `eval` zu einem {{jsxref("SyntaxError")}}.

```js-nolint example-bad
"use strict";

const eval = 1; // SyntaxError: Unexpected eval or arguments in strict mode
```

Wenn das Argument von `eval()` kein String ist, gibt `eval()` das Argument unverändert zurück. Im folgenden Beispiel führt das Übergeben eines `String`-Objekts statt eines primitiven Strings dazu, dass `eval()` das `String`-Objekt zurückgibt, anstatt den String auszuwerten.

```js
eval(new String("2 + 2")); // returns a String object containing "2 + 2"
eval("2 + 2"); // returns 4
```

Um das Problem auf generische Weise zu umgehen, können Sie [das Argument in einen String erzwingen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), bevor Sie es an `eval()` übergeben.

```js
const expression = new String("2 + 2");
eval(String(expression)); // returns 4
```

### Direktes und indirektes eval

Es gibt zwei Modi von `eval()`-Aufrufen: _direktes_ eval und _indirektes_ eval. Direktes eval, wie der Name impliziert, bezieht sich auf das _direkte_ Aufrufen der globalen `eval`-Funktion mit `eval(...)`. Alles andere, einschließlich des Aufrufs über eine Aliased-Variable, über einen Memberzugriff oder einen anderen Ausdruck, oder durch den optionalen Chaining-Operator [`?.`](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), ist indirekt.

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

Indirektes eval kann als die Ausführung von Code innerhalb eines separaten `<script>`-Tags betrachtet werden. Das bedeutet:

- Indirektes eval funktioniert im globalen Gültigkeitsbereich (Scope) und nicht im lokalen Gültigkeitsbereich, und der ausgewertete Code hat keinen Zugriff auf lokale Variablen im Gültigkeitsbereich, von dem aus er aufgerufen wird.

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

- Indirektes `eval` erbt nicht die Striktheit des umgebenden Kontexts und befindet sich nur dann im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), wenn der Quell-String selbst eine `"use strict"`-Direktive enthält.

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

  Andererseits erbt direktes eval die Striktheit des aufrufenden Kontexts.

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

- Mit `var` deklarierte Variablen und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) gelangen in den umgebenden Gültigkeitsbereich, wenn die Quellzeichenkette nicht im Strict-Modus interpretiert wird – für indirektes eval werden sie globale Variablen. Bei einem direkten eval im Strict-Modus-Kontext oder wenn der `eval`-Quellcode selbst im Strict-Modus ist, "lecken" `var` und Funktionsdeklarationen nicht in den umgebenden Gültigkeitsbereich.

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

  [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen innerhalb des ausgewerteten Strings sind immer auf dieses Skript beschränkt.

- Direktes eval hat möglicherweise Zugriff auf zusätzliche kontextuelle Ausdrücke. Zum Beispiel kann man im Körper einer Funktion [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) verwenden:

  ```js
  function Ctor() {
    eval("console.log(new.target)");
  }
  new Ctor(); // [Function: Ctor]
  ```

### Direktes eval() niemals verwenden!

Die Verwendung von direktem `eval()` hat mehrere Probleme:

- `eval()` führt den übergebenen Code mit den Berechtigungen des Aufrufers aus. Wenn Sie `eval()` mit einem String ausführen, der von einer bösartigen Partei beeinflusst werden kann, führen Sie möglicherweise bösartigen Code auf dem Computer des Benutzers mit den Berechtigungen Ihrer Webseite/Erweiterung aus. Noch wichtiger ist, dass der Zugriff auf den Gültigkeitsbereich, in dem `eval()` aufgerufen wurde (bei direktem eval), zu möglichen Angriffen führen kann, die lokale Variablen lesen oder ändern.
- `eval()` ist langsamer als Alternativen, da es den JavaScript-Interpreter aufrufen muss, während viele andere Konstrukte durch moderne JS-Engines optimiert werden.
- Moderne JavaScript-Interpreter konvertieren JavaScript in Maschinencode. Das bedeutet, dass jede Vorstellung von Variablennamen eliminiert wird. Daher zwingt jede Verwendung von `eval()` den Browser, lange und teure Variablen-Namens-Suchen durchzuführen, um herauszufinden, wo die Variable im Maschinencode existiert und ihren Wert zu setzen. Zusätzlich können durch `eval()` neue Dinge in die Variable eingeführt werden, wie z.B. die Änderung des Variablentyps, wodurch der Browser gezwungen wird, den gesamten generierten Maschinencode erneut zu bewerten.
- Minifizierer geben die Minifizierung auf, wenn der Gültigkeitsbereich transitiv von `eval()` abhängt, da `eval()` sonst nicht die richtige Variable zur Laufzeit lesen kann.

Es gibt viele Fälle, in denen die Verwendung von `eval()` oder verwandten Methoden durch Optimierungen oder komplett vermieden werden kann.

#### Verwendung von indirektem eval()

Betrachten Sie diesen Code:

```js
function looseJsonParse(obj) {
  return eval(`(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Durch die Verwendung von indirektem eval und das Erzwingen des Strict-Modus kann der Code erheblich verbessert werden:

```js
function looseJsonParse(obj) {
  return eval?.(`"use strict";(${obj})`);
}
console.log(looseJsonParse("{ a: 4 - 1, b: function () {}, c: new Map() }"));
```

Die beiden Code-Schnipsel oben scheinen auf die gleiche Weise zu funktionieren, jedoch leiden sie nicht unter denselben Problemen. Der erste Code mit direktem eval weist mehrere Nachteile auf.

- Es ist erheblich langsamer, da mehr Gültigkeitsbereichsprüfungen erforderlich sind. Beachten Sie `c: new Map()` im ausgewerteten String. In der Version mit indirektem eval wird das Objekt im globalen Gültigkeitsbereich ausgewertet, sodass der Interpreter sicher annehmen kann, dass `Map` sich auf den globalen `Map()`-Konstruktor bezieht und nicht auf eine lokale Variable namens `Map`. Beim Code mit direktem eval kann der Interpreter diese Annahme jedoch nicht treffen. Im folgenden Code bezieht sich beispielsweise `Map` im ausgewerteten String nicht auf `window.Map()`.

  ```js
  function looseJsonParse(obj) {
    class Map {}
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(`{ a: 4 - 1, b: function () {}, c: new Map() }`));
  ```

  Daher zwingt die `eval()`-Version des Codes den Browser dazu, den teuren Nachschlageaufruf durchzuführen, um zu prüfen, ob es lokale Variablen namens `Map()` gibt.

- Wenn kein Strict-Modus verwendet wird, werden in der `eval()`-Quelle enthaltene `var`-Deklarationen zu Variablen im umgebenden Gültigkeitsbereich. Dies führt zu schwer zu debuggenden Problemen, wenn der String aus externer Eingabe stammt, insbesondere wenn es bereits eine Variable mit demselben Namen gibt.
- Direktes eval kann Bindungen im umgebenden Gültigkeitsbereich lesen und ändern, was dazu führen kann, dass externe Eingaben lokale Daten beschädigen.
- Wenn direktes `eval` verwendet wird, insbesondere wenn die eval-Quelle nicht zweifelsfrei im Strict-Modus ist, müssen die Engine und Build-Tools alle Optimierungen im Zusammenhang mit Inline-Prozessen deaktivieren, da der `eval()`-Quellcode von jedem Variablennamen im umgebenden Gültigkeitsbereich abhängig sein kann.

Die Verwendung von indirektem `eval` erlaubt jedoch nicht, zusätzliche Bindungen bereitzustellen, abgesehen von existierenden globalen Variablen, die die ausgewertete Quelle lesen kann. Wenn Sie zusätzliche Variablen angeben müssen, auf die die ausgewertete Quelle zugreifen soll, sollten Sie den `Function()`-Konstruktor in Betracht ziehen.

#### Verwendung des Function() Konstruktors

Der [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktor ist dem oben genannten Beispiel für ein indirektes eval sehr ähnlich: Er wertet den übergebenen JavaScript-Quellcode im globalen Gültigkeitsbereich aus, ohne lokale Bindungen zu lesen oder zu ändern, und ermöglicht daher der Engine mehr Optimierungen als direktes `eval`.

Der Unterschied zwischen `eval()` und `Function()` besteht darin, dass der an `Function()` übergebene Quellcode als Funktionskörper und nicht als Skript geparst wird. Dies hat ein paar Unterschiede — zum Beispiel können Sie `return`-Anweisungen auf der obersten Ebene eines Funktionskörpers verwenden, nicht aber in einem Skript.

Der `Function()`-Konstruktor ist nützlich, wenn Sie lokale Bindungen innerhalb Ihres eval-Quellcodes erstellen möchten, indem Sie die Variablen als Parameterbindungen übergeben.

```js
function add(a, b) {
  return a + b;
}
function runCodeWithAddFunction(obj) {
  return Function("add", `"use strict";return (${obj});`)(add);
}
console.log(runCodeWithAddFunction("add(5, 7)")); // 12
```

Sowohl `eval()` als auch `Function()` werten implizit beliebigen Code aus und sind unter strengen [CSP](/de/docs/Web/HTTP/CSP)-Einstellungen verboten. Es gibt jedoch sicherere (und schnellere!) Alternativen zu `eval()` oder `Function()` für gängige Anwendungsfälle.

#### Verwendung von Klammerzugriffen

Sie sollten `eval()` nicht verwenden, um Eigenschaften dynamisch zuzugreifen. Betrachten Sie folgendes Beispiel, bei dem die zugegriffene Eigenschaft eines Objekts erst zur Laufzeit bekannt ist. Dies kann mit `eval()` durchgeführt werden:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"

const result = eval(`obj.${propName}`);
```

Hier ist jedoch `eval()` nicht erforderlich — tatsächlich ist es fehleranfälliger, da ein `propName`, das kein gültiger Bezeichner ist, zu einem Syntaxfehler führt. Außerdem könnte eine externe Funktion mit dem Namen `getPropName` zur Ausführung beliebigen Codes führen. Stattdessen sollten Sie die [Eigenschaftszugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwenden, die wesentlich schneller und sicherer sind:

```js
const obj = { a: 20, b: 30 };
const propName = getPropName(); // returns "a" or "b"
const result = obj[propName]; // obj["a"] is the same as obj.a
```

Sie können diese Methode sogar verwenden, um auf tiefere Eigenschaften zuzugreifen. Mit `eval()` wäre dies so geschrieben:

```js
const obj = { a: { b: { c: 0 } } };
const propPath = getPropPath(); // suppose it returns "a.b.c"

const result = eval(`obj.${propPath}`); // 0
```

Das Vermeiden von `eval()` könnte hier durch das Teilen des Eigenschaftspfads und das Schleifen durch die verschiedenen Eigenschaften erreicht werden:

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

Das Setzen einer Eigenschaft auf diese Weise funktioniert ähnlich:

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

Beachten Sie jedoch, dass auch die Verwendung von Klammerzugriffen mit ungesicherter Eingabe nicht sicher ist — dies kann zu [Object-Injection-Angriffen](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) führen.

#### Verwendung von Callbacks

JavaScript besitzt {{Glossary("First-class_Function", "First-Class-Funktionen")}}, was bedeutet, dass Sie Funktionen als Argumente an andere APIs übergeben, in Variablen speichern oder in Objekteigenschaften verwenden können. Viele DOM-APIs sind darauf ausgelegt, sodass Sie (und sollten) schreiben:

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

[Closures](/de/docs/Web/JavaScript/Closures) sind ebenfalls hilfreich, um parametrisierte Funktionen zu erstellen, ohne Zeichenketten zu verknüpfen.

#### Verwendung von JSON

Wenn der String, auf den Sie `eval()` anwenden, Daten enthält (zum Beispiel ein Array: `"[1, 2, 3]"`), statt Code, sollten Sie zu {{Glossary("JSON", "JSON")}} wechseln. JSON ermöglicht die Darstellung von Daten mit einer Teilmenge der JavaScript-Syntax.

Beachten Sie, dass JSON-Syntax im Vergleich zu JavaScript-Syntax eingeschränkt ist, sodass viele gültige JavaScript-Literale nicht als JSON geparst werden können. Beispielsweise sind nachgestellte Kommas in JSON nicht erlaubt, und Eigenschaftsnamen (Schlüssel) in Objektliteralen müssen in Anführungszeichen stehen. Verwenden Sie einen JSON-Serializer, um Zeichenketten für die spätere JSON-Verarbeitung zu erzeugen.

Das Übergeben von genau eingegrenzten Daten anstelle von beliebigem Code ist generell eine gute Idee. Beispielsweise könnte eine Erweiterung, die Inhalte von Webseiten extrahiert, die Extraktionsregeln in [XPath](/de/docs/Web/XML/XPath) definieren, statt JavaScript-Code zu verwenden.

## Beispiele

### Verwendung von eval()

Im folgenden Code geben beide Anweisungen mit `eval()` 42 zurück.
Die erste wertet den String `"x + y + 1"` aus; die zweite den String
`"42"`.

```js
const x = 2;
const y = 39;
const z = "42";
eval("x + y + 1"); // 42
eval(z); // 42
```

### eval() gibt den Abschlusswert von Anweisungen zurück

`eval()` gibt den Abschlusswert von Anweisungen zurück. Für `if` wäre dies der zuletzt ausgewertete Ausdruck oder die zuletzt ausgewertete Anweisung.

```js
const str = "if (a) { 1 + 1 } else { 1 + 2 }";
let a = true;
let b = eval(str);

console.log(`b is: ${b}`); // b is: 2

a = false;
b = eval(str);

console.log(`b is: ${b}`); // b is: 3
```

Im folgenden Beispiel verwendet `eval()` den String `str`. Dieser String besteht aus JavaScript-Anweisungen, die `z` einen Wert von 42 zuweisen, falls `x` gleich fünf ist, und andernfalls 0 zuweisen. Wenn die zweite Anweisung ausgeführt wird, führt `eval()` diese Anweisungen aus und wertet auch die Anweisungen aus, um den an `z` zugewiesenen Wert zurückzugeben, da der Abschlusswert einer Zuweisung der zugewiesene Wert ist.

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

Falls mehrere Werte zugewiesen werden, wird der zuletzt zugeordnete Wert zurückgegeben.

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

### eval() als String, der eine Funktion definiert, benötigt "(" und ")" als Präfix und Suffix

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

- [Eigenschaftszugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [WebExtensions: Verwendung von eval in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
